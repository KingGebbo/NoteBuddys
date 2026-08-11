# Note Buddy's — E-Mail-Marketing

Marketing-Website für das E-Mail-Marketing-Angebot von Note Buddy's. Vermarktet
den Werbekanal (Schüler & Studierende in werbefreien Uni- und Schulpostfächern)
an Business-Kunden und Agenturen.

Reine statische Website — kein Build, kein Backend nötig. `index.html` im Browser
öffnen oder auf einem beliebigen Static-Host (Netlify, Vercel, GitHub Pages,
eigener Webspace) ausliefern.

## Inhalt

- **Hero** mit Reichweite (250.000+) und den Leistungswerten 55% Öffnungs- / 6% Klickrate
- **3 USPs**: vertrauensvoller Absender · werbefreie Postfächer · präzises Targeting
- **Leistungsvergleich** Note Buddy's vs. Branchendurchschnitt (animiert)
- **Interaktiver Targeting-Explorer**: Umschalten zwischen Studierenden und Schülern,
  Kriterien antippen, live berechnete geschätzte Reichweite
  - Studierende: Universität, Fachrichtung, Semester, Studienfortschritt, Notenschnitt, Interessen, Anschrift, Region
  - Schüler: Schulform, Notenschnitt, Interessengebiet, Planung nach der Schule, Anschrift, Region
- **Ablauf** in vier Schritten
- **Anfrage-Funnel** (mehrstufiges Formular, verzweigt nach Schüler / Studenten)
- **Tab „Kontakt"** mit Gabriel Hilbrig (Foto im Kreis, E-Mail, Telefon)

### Adressen (URLs)

| Seite | Adresse |
|---|---|
| Startseite | `/` |
| Auswertungen (Auswahl) | `/auswertungen` |
| Auswertung eines Kunden | `/auswertungen/<slug>` |
| Kontakt | `/kontakt` |

Diese Adressen sind direkt aufrufbar und per Mail verschickbar. Möglich macht das
`vercel.json`: Vercel liefert für diese Pfade `index.html` aus, das Routing im
Browser wählt daraufhin die passende Ansicht (siehe `applyPath()` in
`assets/script.js`). Deshalb müssen alle Asset-Pfade absolut bleiben (`/assets/...`),
sonst laden sie unter `/auswertungen/<slug>` nicht.

### Reiter „Auswertungen"

Klickt ein Kunde auf „Auswertungen", kommt er auf eine Auswahlseite mit allen
Firmen. Nach Eingabe des Passworts öffnet sich die persönliche Auswertung im
gleichen Aufbau wie die EnBW-Beispielauswertung:

- KPI-Kacheln, Detailtabelle, Benchmark-Grafik, Trichter
- Infobox „Infos zum Versand", wenn für den Kunden hinterlegt
- Repost-Slider bzw. Platzhalter, solange keine Bilder vorliegen
- Upsell-Button für Social-Media-Platzierungen, Fazit und Kontaktabschluss

Über den Button „Beispiel ansehen" ist die EnBW-Auswertung ohne Passwort
erreichbar, als Referenz für Interessenten.

#### Passwörter und Verschlüsselung

Es gibt **zwei Ebenen**:

| Zugang | Passwort | Wozu |
|---|---|---|
| Übersicht `/auswertungen` | `NB12345678!` | schützt die Liste aller Kunden |
| Einzelne Auswertung | Firmenname | schützt die Zahlen des Kunden |

Wer einen **Direktlink** `/auswertungen/<slug>` hat, braucht das Übersichtspasswort
nicht und kommt direkt zur Passwortabfrage seiner Firma.

Auch die **Kundenliste selbst** ist verschlüsselt. In `assets/reports.json` steht
kein Firmenname im Klartext, ein Kunde kann also nicht auslesen, welche anderen
Firmen eine Auswertung haben.

Beim Firmennamen als Passwort spielen Gross- und Kleinschreibung sowie
zusätzliche Leerzeichen keine Rolle.

Technisch: AES-256-GCM, Schlüssel via PBKDF2-SHA256 mit 210.000 Runden.
Entschlüsselt wird erst im Browser, nach Eingabe des richtigen Passworts.
Da WebCrypto einen sicheren Kontext braucht, funktioniert das über https,
nicht beim Öffnen der Dateien per `file://`.

#### Daten pflegen

1. `tools/campaigns.source.json` bearbeiten (Klartext, liegt bewusst **nicht** im Git,
   siehe `.gitignore`)
2. `node tools/build-reports.js` ausführen
3. Die neu erzeugte `assets/reports.json` und die Ordner der Adressen committen

> **Wichtig:** `node tools/build-reports.js` auch nach jeder Änderung an
> `index.html` ausführen. Der Befehl erzeugt für jede Adresse eine Kopie der
> Seite (`auswertungen/index.html`, `auswertungen/<slug>/index.html`, …). Ohne
> den Lauf bleiben diese Kopien auf dem alten Stand.

**Repost-Bilder** eines Kunden unter `assets/reposts/<slug>/` ablegen und im
Feld `reposts_bilder` der jeweiligen Kampagne eintragen.

Was aktuell noch an Daten und Bildern fehlt, steht in **`INFOS-BENOETIGT.md`**.
