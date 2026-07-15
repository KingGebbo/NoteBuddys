# E-Mail-Marketing — alle 191 Mailings

Vollständige Charge: für **alle 191 Firmen** (≥5 Ausbildungsplätze) je ein
personalisiertes Standalone-Mailing als PDF, in der **CI des jeweiligen Kunden**.
Gleiches Verfahren und Layout wie die freigegebene Testcharge (siehe `../`).

## Aufbau jedes Mailings
Logo-Header → persönliche Ansprache („Liebe/r {Vorname}, bist du gerade auf der
Suche nach …?") → Hero-Headline → Ausbildungsplatz + **CTA „Jetzt bewerben"** in
CI-Farbe → Benefits („Darauf kannst du dich freuen") → Vergütungs-Tabelle (nur bei
belegten Beträgen) → „Warum {Firma}?" → CTA-Band → persönlicher Gruß → Footer.

## Entstehung (reproduzierbar)
1. `build/prep.py` — CSV → `base.json`, lädt alle 191 Logos, leitet CI-Farbe +
   Logo-Hintergrund aus jedem Logo ab.
2. `build/research_wf.js` — Recherche-Workflow, **1 Agent pro Firma** (186 für 6–191;
   1–5 sind die freigegebenen Texte). Jeder Agent liest `build/comp/comp_<n>.json`,
   besucht ausbildung.de-Anzeige + Karriereseite, liefert echte Benefits/Fakten/Copy
   ins feste Schema → `build/research.json`. **Keine erfundenen Fakten** (Vergütung
   nur bei Beleg, sonst weggelassen).
3. `build/render_all.py` — löst alle 191 Records auf (Farbe aus Logo, Kontrast-Sicherung
   für helle Marken, serif/sans nach Markenstil) und rendert die PDFs mit identischem
   Template via Chromium/Playwright.

Neu bauen: `cd build && python3 render_all.py` (nutzt `base.json` + `research.json`).

## Dateien
```
pdf/                   die 191 Mailing-PDFs (Mailing-<NNN>-<Firma>.pdf)
mailings_index.csv     Nr · Firma · Empfänger · Ausbildung · Start · Standort ·
                       CI-Farbe · Stil · Vergütung · PDF · Fakten-Quelle
build/                 prep.py · research_wf.js · render_all.py · data.py (1–5) ·
                       base.json · research.json · logos/ · comp/
```

## Wichtige Hinweise
- **Vorname** in der Anrede ist in der Vorschau ein Beispielname; im Versand ein
  Merge-Feld `{Vorname}`.
- **Fakten-Caveat:** Zahlen/Benefits stammen aus ausbildung.de + Karriereseiten und
  sind „meist richtig, nicht garantiert". Spalte `Fakten-Quelle` in der Index-CSV
  hält je Firma fest, was belegt vs. branchentypisch ist. Vor scharfem Versand die
  harten Fakten (v. a. Vergütung, Firmenzahlen) gegenlesen.
- CI-Farben aus dem Logo abgeleitet; Graustufen-/Schwarz-Logos (z. B. Hirmer,
  Appelrath, CHRIST, Daimler Truck) laufen bewusst als elegantes Anthrazit.
- Noch **kein Mailversand** — reine PDF-Deliverables.
