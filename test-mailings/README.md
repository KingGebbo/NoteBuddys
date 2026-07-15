# Test-Mailings — E-Mail-Marketing (Standalone-Mailings)

Neuer Sales-Approach: **E-Mail-Marketing für Kunden**. Für jeden Betrieb wird ein
personalisiertes Standalone-Mailing gebaut, das der Kunde an seine Zielgruppe
(Ausbildungs-Interessenten) verschicken könnte — komplett in der **CI des Kunden**.

Diese Charge = die **ersten 5** der 191 Firmen (≥5 Plätze), als Test.

## Prinzip pro Mailing

- **Logo** des Kunden (aus ausbildung.de `corporation_logo`).
- **CI-Farbe** aus dem Logo abgeleitet (`logo_color.py`), bei Bedarf per Hand justiert.
- **Inhalte** von der Karriereseite / Stellenanzeige des Kunden recherchiert —
  **keine erfundenen Fakten** (Vergütung, Benefits, Firmengröße sind real, siehe Quellen unten).
- Aufbau: Header mit Logo → Hero-Headline → Ausbildungsplatz + **CTA „Jetzt bewerben"**
  in CI-Farbe → Benefits („Darauf kannst du dich freuen") → ggf. Vergütungs-Tabelle →
  „Warum \<Firma\>?" → CTA-Band (Jetzt bewerben / Mehr Infos) → Footer.

## Dateien

```
pdf/       die 5 fertigen Mailing-PDFs (1 Seite, 640px-Breite)
preview/   PNG-Vorschau je Mailing
build/     build_mail.py · data.py (alle Texte/Fakten) · logo_color.py · logos/
```

Neu bauen: `cd build && python3 build_mail.py` (nutzt vorinstalliertes Chromium via Playwright).
Einzeln: `python3 build_mail.py 3` (nur Firma 3).

## Die 5 Firmen

| # | Firma | Ausbildung | CI |
|---|-------|-----------|----|
| 1 | denn's Biomarkt | Kaufmann/-frau im Einzelhandel | Bio-Grün auf Schwarz |
| 2 | Manufactum | Kaufmann/-frau im Einzelhandel | Dunkelgrün (Serif) |
| 3 | CEVA Logistics | Spedition & Logistikdienstleistung | Navy + roter Chevron |
| 4 | Hirmer Grosse Grössen | Kaufmann/-frau im Einzelhandel | Schwarz/Anthrazit (Serif) |
| 5 | Unternehmensgruppe Dr. Eckert | Kaufmann/-frau im Einzelhandel | Anthrazit/Grau (Logo „grau") |

## Quellen der Inhalte

- denn's: jobs.biomarkt.de (Karriere Schüler) — Vergütung, 20 % Rabatt, Übernahme, „Wissen macht BIO", Deutschlandticket.
- Manufactum: jobs.manufactum.de/ausbildung — Urlaubs-/Weihnachtsgeld, 6 Wochen Urlaub, Otto Group, „Anfangen, wo es am schönsten ist".
- CEVA: Stellenanzeige/Arbeitsagentur — Schulbücher, Hansefit, Jobbike, bAV/VWL, CMA CGM Gruppe.
- Hirmer: Stellenanzeige — 30 % Rabatt, 2 Outfits/Jahr, Vergütung 1.060–1.310 €, Familienunternehmen 3. Gen., 15 Standorte.
- Dr. Eckert (UGDE): ugde.com — Haustarif 1.000–1.200 €, bis 30 % Rabatt, Bike-Leasing, 6 Marken, ~400 Standorte.

> Fakten-Hinweis: Zahlen sind aus öffentlichen Seiten übernommen und vor scharfem
> Gebrauch (echter Versand) noch einmal gegenzulesen.
