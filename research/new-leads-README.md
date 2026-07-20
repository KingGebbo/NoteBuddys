# Pathwize — Neue Data-Labeling-Leads (Welle 2)

**Datei:** [`new-leads-200plus.csv`](./new-leads-200plus.csv) — Trennzeichen `;`
**Stand:** 20.07.2026 · **244 neue, einzigartige Firmen** mit **verifizierter** E-Mail.

## Update 20.07.2026 — Entscheider-Anker recherchiert
Für die Kaltakquise braucht jede Firma einen namentlichen Ansprechpartner (für den Betreff „Für [Name]:" bzw. die Anrede), damit auch Großkonzerne wie VW/Audi/Porsche nicht nur an die Impressums-Mail ohne Anker gehen.
- **196 zusätzliche Entscheider** recherchiert und in Spalte `Ansprechpartner` ergänzt (Rollen-Priorität: Head of AI / ML / Data / Perception → CTO → Founder-CEO; bei Konzernen der/die Leiter:in der ADAS-/AD-/KI-Einheit, nicht der Konzern-CEO).
- Neue Spalte **`Kontakt_LinkedIn`** (113 verifizierte LinkedIn-/TheOrg-Profil-URLs, sonst leer — kein Raten).
- Quellen: Firmen-Team-/Impressumsseiten, LinkedIn-Treffer, TheOrg, Crunchbase, NorthData. **Nur echte, belegte Namen** — nichts erfunden.
- **Nur 3 Firmen ohne Anker** (bewusst leer gelassen, da nicht sauber belegbar): `Robofunktion Vision GmbH` (kein Entscheider auffindbar), `Scantinel Photonics GmbH` (Insolvenz seit Aug 2025 — vor Ansprache prüfen), `custo med GmbH` (kein AI-Verantwortlicher öffentlich benannt). Für diese ggf. „Liebes Team" verwenden.
- Hinweis: Umlaute in den Namen sind ASCII-transkribiert (ue/oe/ae) für maximale CSV-Kompatibilität — vor dem Versand ggf. zurücksetzen (z. B. „Muenchhoff" → „Münchhoff").

## Regeln, die eingehalten wurden
- **Nur echte Mails**, wörtlich aus Impressum/Kontakt/Legal-Notice der Firmenseite gelesen (per WebFetch). Maskierte Adressen (`info(at)`, Cloudflare) nur bei **eindeutigem Beweis** sauber entschlüsselt. **Kein Raten, kein Halluzinieren.**
- Firmen ohne belegbare Mail wurden **weggelassen** (nicht mit Fantasieadresse gefüllt).
- **Keine Doppelungen** mit den ~91 bereits kontaktierten Firmen, und untereinander dedupliziert (per Firmenname + E-Mail).
- Fokus: **End-User** mit eigenem KI-/Labeling-Bedarf (keine Labeling-Vendors/BPOs).

## Verteilung
- **Land:** DE 169 · CH 15 · AT 18 · NL 7 · FR 5 · UK 5 · NO 4 · SE 2 · FI 2 · DK/BE/PL/CZ/LU/LI je 1
- **Lanes:** Speech/Voice 20 · Document/Fintech 19 · Geospatial/EO/Agrar 19 · Drohnen/Maritime 18 · Forschungsinstitute 18 · Retail/Logistik-CV 16 · OEM/Tier-1/Mobility 15 · Robotics 15 · Industrielle CV 15 · EU-weit 15 · Autonomous Driving 14 · Defense/Space 12 · LLM/GenAI 12 · Radiologie/Pathologie 12 · Genomik/Pathologie 7 · Derma/Ophthalmologie 6

## Hinweise zur Qualität (Transparenz)
- Bei einigen wenigen war nur ein **funktionsgebundenes Postfach** belegt (z. B. `careers@`, `privacy@`, `hr@`, `media@`, `ir@`) — in der CSV so eingetragen, für Sales ggf. schwächer.
- Ownership-Vorbehalte markiert (z. B. RetInSight→Topcon, EOMAP→Fugro, Mint Medical→Brainlab) — vor Ansprache kurz prüfen.
- Rekonstruierte Personen-Mail nur **einmal** und mit hartem Beleg (Terranet/BlincVision: `markus.johansson@blincvision.com`, weil ein reales `vorname.nachname@`-Format auf der Seite stand).

## Plattform-Analyse: Wie Firmen ihren Data-Labeling-Bedarf decken
Recherche-Ergebnis, welche Plattformen relevant sind — als Signalquelle und für weitere Discovery:

**(a) Labeling-Tools / Workforce (technische/operative Abwicklung)**
- **In-house-Tools:** Label Studio / HumanSignal, Labelbox, Encord, V7, SuperAnnotate, Kili (FR), Roboflow, Dataloop, Segments.ai (BE), Open-Source **CVAT**.
- **Ausgelagerte Workforce/Crowd:** Prolific (UK, stark RLHF/Human-Data), Toloka, Amazon SageMaker Ground Truth & MTurk, Surge AI, Sama, Remotasks.
- **Bedarfssignal:** Firma nennt eines dieser Tools im Tech-Stack/Stellenprofil, sucht „Annotation Lead / Data Operations", oder betreibt ein eigenes Labeling-Team → externer Zusatzbedarf für Peaks (neue Modelle, Saison) sehr wahrscheinlich.

**(b) Job- & Freelance-Plattformen (wo Firmen Personal dafür suchen)**
- **Freelance-Marktplätze:** Upwork, Malt (stark FR/DACH), Freelancer.com, Twago, Fiverr.
- **Spezialisierte AI-/Tech-Jobboards:** ai-jobs.net, Wellfound/AngelList, BuiltIn, Honeypot (DE), join.com, startup.jobs, EU-Startups-Jobs, Otta/Welcome-to-the-Jungle; im DACH-Raum zusätzlich **Xing**.
- **Discovery-/Funding-Datenbanken:** Dealroom, Crunchbase, TheHub (Nordics).
- **Bedarfssignal:** Live-Rollen wie „Data Annotator/Labeler", „RLHF/AI Tutor", „Data Operations", „ML Data Engineer" — oder frische Seed-/Series-A-Runde eines Vision-/LLM-Startups → akuter, oft auslagerbarer Labeling-Bedarf.

## Empfehlung
DE + DACH zuerst (202 der 233). Die funktionalen Postfächer (privacy@/hr@/media@) und Ownership-Fälle am besten zusätzlich per **LinkedIn/Xing** an den Head of AI / ML Lead flankieren.
