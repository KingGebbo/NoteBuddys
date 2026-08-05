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

Das Passwort ist der Firmenname, Gross- und Kleinschreibung sowie zusätzliche
Leerzeichen spielen keine Rolle.

Die Kundendaten liegen **verschlüsselt** in `assets/reports.json`
(AES-256-GCM, Schlüssel via PBKDF2 aus dem Passwort). Im öffentlichen
Repository stehen damit nur die Firmennamen, keine Zahlen. Entschlüsselt wird
erst im Browser, nachdem das richtige Passwort eingegeben wurde.

> Hinweis: Da alle Firmennamen auf der Auswahlseite stehen, sind die Passwörter
> für Besucher der Seite erkennbar. Für echte Vertraulichkeit sind individuelle
> Passwörter oder Vercels Deployment Protection nötig. Siehe `INFOS-BENOETIGT.md`.

#### Daten pflegen

1. `tools/campaigns.source.json` bearbeiten (Klartext, liegt bewusst **nicht** im Git,
   siehe `.gitignore`)
2. `node tools/build-reports.js` ausführen
3. Die neu erzeugte `assets/reports.json` committen

**Repost-Bilder** eines Kunden unter `assets/reposts/<slug>/` ablegen und im
Feld `reposts_bilder` der jeweiligen Kampagne eintragen.

Was aktuell noch an Daten und Bildern fehlt, steht in **`INFOS-BENOETIGT.md`**.
