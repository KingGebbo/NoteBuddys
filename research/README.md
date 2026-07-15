# Pathwize — Data-Labeling Lead-Recherche

Recherche nach Unternehmen mit konkretem Bedarf an **Data Labeling / Data Annotation / Reasoning-Work (RLHF)**, für gezieltes personalisiertes Outreach.

**Datei:** [`data-labeling-leads.csv`](./data-labeling-leads.csv) — Trennzeichen `;` (öffnet direkt in deutschem Excel).
**Stand:** 15.07.2026 — 92 Firmen, gemergt inkl. Ausschreibungs-Link + Ansprechpartnern

### Spalten
`Prioritaet | Firma | Segment | Standort | Bedarf/Rolle | Ausschreibung_live | Ausschreibung_Link | Typ | Kontaktperson | Kontakt_Rolle | Kontakt_Email | Email_Typ | Telefon | Kontakt_LinkedIn | Firmen_Email | Website | Firmen_LinkedIn | Notiz`

> **Email_Typ:** `verifiziert` = bestätigte Adresse · `Muster` = aus Firmen-Pattern abgeleitet (vor Erstkontakt verifizieren) · `allg.` = generisches Postfach.
> Die Prio-A-Firmen haben recherchierte, oft **namentliche** Ansprechpartner (Gründer/CTO/Head of AI/Recruiter). Prio-B haben Firmen-Email/Website/LinkedIn → Entscheider dort per LinkedIn ansprechen.

### Wichtige Funde beim Öffnen der Ausschreibungen
- **Nucs AI** (Berlin) sucht **selbst Annotatoren** (Physician Annotator + Clinical Ops Lead) → heißester Lead.
- **Smart Reporting** ist zu **„Jacobian"** fusioniert (mit Fluency for Imaging); Domain leitet auf jacobian.com um, neuer CEO Michael Finke.
- **Rohde & Schwarz** nennt die Recruiterin **Verena Kral** direkt im Posting (LinkedIn/XING-Kontakt empfohlen).
- **Bosch**-Posting nennt Betreuer **Thirunavukarasu Sivagnanam** + Direkt-Telefon.
- **BMW** (Req 182343) und **Go Autonomous** (Data Annotator) sind bereits **abgelaufen** — verwandte Rollen/Kontakte in der CSV.

## Wie die Liste priorisiert ist

| Prio | Bedeutung | Anzahl |
|------|-----------|--------|
| **A** | **Heißestes Signal** — Firma hat *aktuell eine Data-Annotation/Labeling-Stelle ausgeschrieben* → akuter, belegter Bedarf | ~33 |
| **B** | **Segment-Ziel** — struktureller Dauerbedarf an Labeling (Robotics, AV, Medical AI, LLM/GenAI, Defense, Geospatial), keine bestätigte Live-Ausschreibung gesehen | ~40 |
| **X** | **Vendor / Wettbewerber** — reine Labeling-BPOs (Appen, TELUS, iMerit …). **Nicht anschreiben**, nur zur Abgrenzung gelistet | 10 |

## Top-10 Sofort-Ansprache (bester Fit + belegter Bedarf)

1. **NEURA Robotics** (Metzingen) — schreibt *genau* die „AI Data Annotation Specialist"-Rolle aus (= dein Indeed-Link). HR-Kontakt direkt in CSV. **A+**
2. **metamorphosis** (Paderborn) — Surgical-AI, sucht *Data Annotator* für OP-Bilddaten. Expert-Labeling, GDPR-sensibel → idealer Outsourcing-Case.
3. **cureVision** (München) — Medical-AI, annotiert Wundbilder mit Medizinstudenten. Klarer Skalierungsschmerz.
4. **IUNA AI Systems** (Heilbronn) — wiederkehrende Annotation-Werkstudenten für Industrie-Inspektion = laufendes Volumen.
5. **Mindpeak** (Hamburg) — Digital Pathology, annotiert Krebs-Slides. Expert-Medical-CV.
6. **Quantum-Systems** (Gilching) — Defense/Drohnen, Annotation + QA von ISR-Trainingsdaten. DE-Anbietervorteil.
7. **Agile Robots** (München) — Embodied AI, Human-in-the-loop-Annotation.
8. **VisiConsult** (Stockelsdorf) — sucht „KI-Datenassistent" für Röntgen/CT-Defect-Detection.
9. **Gini** (München) — Fintech-Doc-AI, wiederkehrende „Werkstudent Data Annotation".
10. **neoshare** (Frankfurt/München) — baut Annotation+QA+KPI-Prozesse gerade neu auf → früh genug für Managed Labeling.

## Beste Segmente für Pathwize

- **Robotics** (NEURA, Sereact, Agile, Magazino, RobCo) — kontinuierlicher multimodaler Bedarf
- **Autonomous Driving / OEM & Tier-1** (Cariad, Bosch, Continental, ZF, Fernride, Vay) — Labeling at scale, große Budgets
- **Medical Imaging** (Aignostics, deepc, Floy, Mindpeak, Vara, Mediaire) — Expert-/Specialist-Annotation, GDPR → gerne extern
- **LLM / GenAI / Reasoning** (Aleph Alpha, Black Forest Labs, deepset, DeepL, Smart Reporting, xAI) — **direkter RLHF/Reasoning-Work-Fit**
- **Defense ISR** (Helsing, Quantum-Systems, ARX, Stark) — sensibel, EU/DE-Anbieter bevorzugt

## Kontaktdaten-Hinweise

- Jobbörsen (Indeed, StepStone, LinkedIn) legen **keine** Recruiter-Direktkontakte offen — alle Bewerbungen laufen über Apply-Buttons.
- Die Kontaktdaten in der CSV stammen daher aus **Impressum / Kontaktseiten / Handelsregister** der Firmen (nach dt. Recht öffentlich).
- Wo `via Website` steht: kein generisches Postfach im Impressum sichtbar → Kontaktformular oder direkt LinkedIn-Ansprache (Head of AI / ML Lead / Data Lead) empfohlen.
- Bei `First.Last@…-Muster`: E-Mail-Format bekannt, konkrete Person via LinkedIn identifizieren.

## Methodik

Recherche über Indeed (de + com), StepStone, Monster, Glassdoor, LinkedIn Jobs, startup.jobs, join.com, The Hub + Segment-Discovery über Firmenverzeichnisse. 4 parallele Rechercheläufe, anschließend Kontakt-Anreicherung pro Top-Lead. Vendors/BPOs wurden als Wettbewerber markiert und aus der Ansprache ausgeschlossen.
