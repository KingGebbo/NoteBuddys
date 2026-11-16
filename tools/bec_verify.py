#!/usr/bin/env python3
"""Bulk Email Checker real-time API client (batch verification).

Reads the API key from the environment variable BEC_API_KEY. Never hardcode the
key and never commit a file containing it.

Pacing follows the account limits: at most MAX_CONCURRENCY open requests at a
time (slot model, no sleep between requests) and the hourly quota reported by
the API. The run halts when creditsRemaining reaches 0.

CLI:
    BEC_API_KEY=... python3 tools/bec_verify.py emails.txt --out results.csv \
        [--label "Source tag"]

emails.txt holds one address per line. results.csv gets one row per address.
"""

import argparse
import csv
import datetime as dt
import json
import os
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request

ENDPOINT = "https://api.bulkemailchecker.com/real-time/"
MAX_CONCURRENCY = 1          # account limit: concurrent connections
REQUEST_TIMEOUT_S = 70       # some checks wait on slow mail servers
TRANSPORT_RETRIES = 2        # retries per address on timeout / dropped connection
REPEATED_ERROR_LIMIT = 3     # same API error this many times in a row -> stop run

RESULT_FIELDS = [
    "email", "status", "event", "details", "emailSuggested",
    "isRoleAccount", "isDisposable", "isFreeService", "isComplainer",
    "isGibberish", "isOffensive", "mxHostname", "mxCountry",
    "timestampUTC", "error",
]


class CreditsExhausted(Exception):
    pass


class BulkEmailChecker:
    def __init__(self, api_key=None, label=None, max_concurrency=MAX_CONCURRENCY,
                 timeout=REQUEST_TIMEOUT_S, log=print):
        self.api_key = api_key or os.environ.get("BEC_API_KEY")
        if not self.api_key:
            raise RuntimeError("BEC_API_KEY is not set")
        self.label = label
        self.max_concurrency = max_concurrency
        self.timeout = timeout
        self.log = log
        self.credits_remaining = None
        self.hourly_quota_remaining = None
        self._lock = threading.Lock()
        self._stop = threading.Event()
        self._halt_reason = ""
        self._last_error = None
        self._same_error_count = 0

    # -- single request -------------------------------------------------
    def _request(self, email):
        body = {"key": self.api_key, "email": email}
        if self.label:
            body["label"] = self.label
        data = urllib.parse.urlencode(body).encode()
        req = urllib.request.Request(ENDPOINT, data=data, method="POST")
        with urllib.request.urlopen(req, timeout=self.timeout) as resp:
            return resp.read().decode("utf-8", "replace")

    def verify(self, email):
        """Verify one address. Returns a result dict (never raises on API errors)."""
        attempt = 0
        while True:
            try:
                raw = self._request(email)
                break
            except (urllib.error.URLError, TimeoutError, ConnectionError, OSError) as exc:
                if isinstance(exc, urllib.error.HTTPError):
                    raw = exc.read().decode("utf-8", "replace")
                    break
                attempt += 1
                if attempt > TRANSPORT_RETRIES:
                    return self._row(email, status="unknown", event="transport_error",
                                     error=f"{type(exc).__name__}: {exc}")
                time.sleep(2 ** (attempt - 1))  # exponential backoff for transport errors only

        try:
            payload = json.loads(raw)
        except json.JSONDecodeError:
            payload = None

        if not isinstance(payload, dict) or "status" not in payload:
            # API error message, not a verdict. Never record it as one.
            msg = (payload or {}).get("error") if isinstance(payload, dict) else raw.strip()
            return self._row(email, status="", event="", error=str(msg)[:300])

        mx = payload.get("mxEnrichment") or {}
        with self._lock:
            if payload.get("creditsRemaining") is not None:
                self.credits_remaining = payload["creditsRemaining"]
            if payload.get("hourlyQuotaRemaining") is not None:
                self.hourly_quota_remaining = payload["hourlyQuotaRemaining"]
        return self._row(
            email,
            status=payload.get("status", ""),
            event=payload.get("event", ""),
            details=payload.get("details", ""),
            emailSuggested=payload.get("emailSuggested", ""),
            isRoleAccount=payload.get("isRoleAccount", ""),
            isDisposable=payload.get("isDisposable", ""),
            isFreeService=payload.get("isFreeService", ""),
            isComplainer=payload.get("isComplainer", ""),
            isGibberish=payload.get("isGibberish", ""),
            isOffensive=payload.get("isOffensive", ""),
            mxHostname=mx.get("mxHostname", ""),
            mxCountry=mx.get("mxCountry", ""),
            timestampUTC=payload.get("timestampUTC", ""),
        )

    @staticmethod
    def _row(email, **kw):
        row = {k: "" for k in RESULT_FIELDS}
        row["email"] = email
        row.update(kw)
        return row

    # -- batch with slot pool ------------------------------------------
    def verify_many(self, emails, on_result=None):
        """Verify many addresses with a slot pool of size max_concurrency."""
        queue = list(dict.fromkeys(e.strip() for e in emails if e and e.strip()))
        results = {}
        idx_lock = threading.Lock()
        next_idx = [0]

        def take():
            with idx_lock:
                if self._stop.is_set() or next_idx[0] >= len(queue):
                    return None
                e = queue[next_idx[0]]
                next_idx[0] += 1
                return e

        def worker():
            while True:
                self._wait_for_hourly_quota()
                email = take()
                if email is None:
                    return
                row = self.verify(email)
                self._track(row)
                results[email] = row
                if on_result:
                    on_result(row)

        threads = [threading.Thread(target=worker) for _ in range(self.max_concurrency)]
        for t in threads:
            t.start()
        for t in threads:
            t.join()

        # One retry pass for transient "inconclusive" results only.
        retry = [e for e, r in results.items() if r["event"] == "inconclusive"]
        if retry and not self._stop.is_set():
            self.log(f"Retrying {len(retry)} inconclusive address(es) once")
            for e in retry:
                if self._stop.is_set():
                    break
                self._wait_for_hourly_quota()
                row = self.verify(e)
                self._track(row)
                results[e] = row
                if on_result:
                    on_result(row)

        unprocessed = [e for e in queue if e not in results]
        return [results[e] for e in queue if e in results], unprocessed, self._halt_reason

    def _track(self, row):
        with self._lock:
            if row["error"] and not row["status"]:
                if row["error"] == self._last_error:
                    self._same_error_count += 1
                else:
                    self._last_error, self._same_error_count = row["error"], 1
                self.log(f"API error for {row['email']}: {row['error']}")
                if self._same_error_count >= REPEATED_ERROR_LIMIT:
                    self._halt_reason = f"same API error {self._same_error_count}x: {row['error']}"
                    self._stop.set()
            else:
                self._last_error, self._same_error_count = None, 0
            if self.credits_remaining == 0:
                self._halt_reason = "creditsRemaining reached 0"
                self._stop.set()

    def _wait_for_hourly_quota(self):
        while self.hourly_quota_remaining == 0 and not self._stop.is_set():
            now = dt.datetime.now()
            nxt = (now + dt.timedelta(hours=1)).replace(minute=0, second=5, microsecond=0)
            self.log(f"Hourly quota used up; resuming at {nxt:%H:%M:%S}")
            time.sleep(max(1, (nxt - now).total_seconds()))
            self.hourly_quota_remaining = None


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("infile", help="text file, one email per line")
    ap.add_argument("--out", required=True, help="results CSV")
    ap.add_argument("--label", default=None, help="source tag for the BEC blacklist")
    args = ap.parse_args()

    with open(args.infile, encoding="utf-8") as fh:
        emails = [line.strip() for line in fh if line.strip()]

    checker = BulkEmailChecker(label=args.label, log=lambda m: print(m, file=sys.stderr))
    n = len(emails)
    done = [0]

    def progress(row):
        done[0] += 1
        verdict = row["status"] or "ERROR"
        print(f"[{done[0]}/{n}] {verdict:8} {row['event'] or row['error']}", file=sys.stderr)

    rows, unprocessed, halt = checker.verify_many(emails, on_result=progress)

    with open(args.out, "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=RESULT_FIELDS)
        w.writeheader()
        w.writerows(rows)

    counts = {}
    for r in rows:
        k = r["status"] or "error"
        counts[k] = counts.get(k, 0) + 1
    print(json.dumps({
        "checked": len(rows), "counts": counts, "unprocessed": len(unprocessed),
        "halt_reason": halt, "creditsRemaining": checker.credits_remaining,
        "hourlyQuotaRemaining": checker.hourly_quota_remaining,
    }, indent=1))


if __name__ == "__main__":
    main()
