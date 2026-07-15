#!/usr/bin/env python3
"""Collect agent results from a workflow journal into research.json keyed by n."""
import json, sys, glob, os

def main():
    journal=sys.argv[1]
    out={}
    for line in open(journal):
        try: d=json.loads(line)
        except: continue
        if d.get('type')!='result': continue
        r=d.get('result')
        if isinstance(r, dict) and 'n' in r and not r.get('_failed'):
            # keep the last non-failed result per n
            out[str(int(r['n']))]=r
    json.dump(out, open('research.json','w'), ensure_ascii=False, indent=1)
    got=sorted(int(k) for k in out)
    want=set(range(6,192))
    missing=sorted(want-set(got))
    print(f"research.json: {len(out)} records")
    print(f"missing (6-191): {missing}")

if __name__=='__main__':
    main()
