#!/usr/bin/env node
/**
 * Erzeugt aus tools/campaigns.source.json die Datei assets/reports.json.
 *
 * Jede Kunden-Auswertung wird mit dem jeweiligen Passwort (= Firmenname)
 * verschluesselt: PBKDF2-SHA256 (210.000 Runden) -> AES-256-GCM.
 * In assets/reports.json landet nur der Chiffretext. Die Zahlen der Kunden
 * stehen damit nirgends im oeffentlichen Repository im Klartext.
 *
 * Aufruf:  node tools/build-reports.js
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "tools", "campaigns.source.json");
const OUT = path.join(ROOT, "assets", "reports.json");

const PBKDF2_ROUNDS = 210000;

/** Passwoerter tolerant vergleichen: Gross/Kleinschreibung und Leerraum egal. */
function normalizePassword(pw) {
  return String(pw).trim().toLowerCase().replace(/\s+/g, " ");
}

function encrypt(payload, password) {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(normalizePassword(password), salt, PBKDF2_ROUNDS, 32, "sha256");
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const data = Buffer.concat([
    cipher.update(Buffer.from(JSON.stringify(payload), "utf8")),
    cipher.final()
  ]);
  return {
    salt: salt.toString("base64"),
    iv: iv.toString("base64"),
    // GCM-Tag an den Chiffretext anhaengen, so erwartet es WebCrypto im Browser
    data: Buffer.concat([data, cipher.getAuthTag()]).toString("base64")
  };
}

function main() {
  const src = JSON.parse(fs.readFileSync(SRC, "utf8"));
  const out = { generiert: new Date().toISOString().slice(0, 10), runden: PBKDF2_ROUNDS, kampagnen: [] };

  src.kampagnen.forEach(function (k) {
    const { slug, name, public: isPublic, passwort, ...rest } = k;
    const eintrag = { slug: slug, name: name };

    // Alles ausser Name und Slug ist Nutzlast.
    const payload = Object.assign({ slug: slug, name: name }, rest);

    if (isPublic) {
      eintrag.oeffentlich = true;
      eintrag.daten = payload;
    } else {
      eintrag.geschuetzt = true;
      // Passwort ist der Firmenname, sofern nichts anderes hinterlegt ist.
      eintrag.tresor = encrypt(payload, passwort || name);
    }
    out.kampagnen.push(eintrag);
  });

  fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");

  const geschuetzt = out.kampagnen.filter(function (k) { return k.geschuetzt; }).length;
  console.log("assets/reports.json geschrieben");
  console.log("  " + out.kampagnen.length + " Kampagnen, davon " + geschuetzt + " passwortgeschuetzt");
  console.log("  Groesse: " + (fs.statSync(OUT).size / 1024).toFixed(1) + " KB");
}

main();
