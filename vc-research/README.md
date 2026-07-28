# PathWize – VC-Recherche & Outreach-Liste

Investoren-Screening für die PathWize-Runde (Data Labeling / AI, Zielphase Pre-Seed – Series A).

## Deliverable

**`PathWize_VC_Outreach_Liste.xlsx`** – 192 recherchierte VCs, gescort und in Tiers sortiert.

| Blatt | Inhalt |
|---|---|
| 1 Anleitung & Methodik | Scoring-Modell, Tier-Schwellen, Outreach-Wellen, Erklärung des Labeling-Signals |
| 2 Outreach-Tracker | Arbeitsliste Tier A + B (119 Fonds) mit Status-Dropdowns, Datums- und Notizfeldern |
| 3–6 Tier A / B / C / D | Nach Fit-Qualität getrennte Listen |
| 7 Master | Vollständiger Datensatz, 32 Spalten, filterbar |
| 8 Auswertung | Kennzahlen als Live-Formeln auf Blatt 7 |

## Datenbasis

- Zwei gelieferte CSV-Listen (kuratierte AI/Data-Liste + vcgermany.de-Export) und eine Fonds-Übersicht aus dem Auftrag
- Zusammengeführt und dedupliziert: 184 eindeutige Einträge
- 15 zusätzliche europäische AI-/Data-Infra-Fonds hinzurecherchiert (Spalte *Herkunft*)
- Jeder Fonds einzeln über Website und Sekundärquellen verifiziert; nicht belegbare Felder stehen als `n/a`, die Spalte *Konfidenz* bewertet die Belegqualität

## Scoring (max. 100 Punkte)

| Dimension | Punkte |
|---|---|
| Stage-Fit (Pre-Seed / Seed / Series A, Lead-Fähigkeit) | 30 |
| Thesen-Fit AI / Data / Dev-Tools | 30 |
| Portfolio-Beleg (AI-, Data-Infra-, Labeling-Investments) | 20 |
| Aktivität & Ticket-Passung | 10 |
| Geo-Fit (DACH / Europa) | 10 |

Tier A ab 75 · Tier B 60–74 · Tier C 40–59 · Tier D unter 40

## Spalte „Labeling-Signal"

Klassifiziert den Portfolio-Bezug zum Kerngeschäft:

- **DIREKT: `<Company>`** – der Fonds hat bereits in eine Data-Labeling-/Trainingsdaten-Company investiert. Stärkster Thesen-Beleg, aber **vor dem Kontakt auf Wettbewerbskonflikt prüfen**.
- **Data-Infra-nah** – Investments in Vector-DBs, MLOps, Datenplattformen. Guter Anknüpfungspunkt ohne Konfliktrisiko.
- **`-`** – kein erkennbarer Bezug im recherchierten Portfolio.

## Reproduzieren

```bash
pip install openpyxl
python3 build_excel.py
```

`build_excel.py` liest die Recherche-JSONs aus `rohdaten/`, dedupliziert (inkl. Alias-Auflösung, z. B. Cavalry Ventures → NAP), scort und baut die Arbeitsmappe.

## Bekannte Einschränkungen

- **LinkedIn-Profile der Partner sind nur zu ca. 28 % gefüllt.** Personenprofile ließen sich nicht zuverlässig verifizieren; statt geratener URLs steht dort `n/a`.
- **Partner-Namen vor dem Versand gegenprüfen** – VC-Teams wechseln häufig.
- Bei *Konfidenz = Niedrig* waren Fondsgröße, These oder Team nicht sicher belegbar.
- Zwei Einträge mit harten Red Flags: **PropTech1 Ventures** (Website nicht erreichbar) und **Human Impact Capital** (keine verifizierbare Quelle auffindbar) – vor Outreach manuell prüfen.
- Die Werte auf Blatt 8 sind Formeln ohne gecachte Ergebnisse; sie berechnen sich beim Öffnen in Excel.
