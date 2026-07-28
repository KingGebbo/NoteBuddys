# Gmail-Entwürfe (191) — "Beispielhaftes Mailing"

Für **alle 191 Firmen** wurde je ein personalisierter Gmail-**Entwurf** in Gabriels
Postfach angelegt. **Nichts versendet.** Das Mockup-PDF fügt Gabriel manuell an der
Stelle „(hier Bild einfügen)" ein.

## Aufbau der Mail
- **Betreff:** `Beispielhaftes Mailing für eure Stelle „<Stelle>"` — Stelle bereinigt:
  ohne (m/w/d), ohne Jahreszahl/Datum, ohne Ort-/Werk-/Agentur-Zusätze,
  Gender-Sternchen zu „/" aufgelöst.
- **Anrede:** Vorname aus der CSV (Titel entfernt). Bei Team-/Sammelpostfächern
  (z. B. „Team Personalabteilung") → „Hallo zusammen,".
- Bild-Platzhalter **„(hier Bild einfügen)"**.
- Idee dahinter (250.000 Nutzer) · Performance 55 % / 6 % · **„Hier weitere Infos!"**
  verlinkt auf note-buddys.vercel.app · Zielgruppen-Kriterien · „Wusstest du schon?"
  (werbefreie Schul-/Unipostfächer).
- **Branchen-Hook** je Stelle (Logik aus `ANLEITUNG_Drafts_Filter24`), z. B.
  „der Ausbildungen im öffentlichen Dienst", „der Bank- und Versicherungsausbildungen".
- CTA **„hier direkt einen Termin wählen"** → Calendly.
- Signatur Gabriel Hilbrig + Note Buddy's GmbH. Google-Standardschrift, keine
  Font-Overrides. Keine rohen URLs im Fließtext — nur verlinkte Wörter.

## Dateien
```
drafts_zuordnung.csv   Nr · Firma · Empfänger · Ansprechpartner · Anrede · Betreff ·
                       Hook · PDF-Mockup · DraftId
build/build_drafts.py  Generator (CSV -> Betreff/Anrede/Hook/HTML)
build/drafts_spec.json die 191 fertigen Specs (to, subject, htmlBody)
build/drafts_wf.js     Workflow, der die Entwürfe verbatim anlegt
build/created_drafts.json  n -> DraftId
```

## Kontrolle
- 191 Entwürfe im Postfach verifiziert (4 Listen-Seiten: 50+50+50+41), **keine Duplikate**.
- 7 Adressen erhalten **mehrere** Entwürfe, weil dort mehrere Stellen ausgeschrieben sind
  (z. B. Döpfer Schulen 3×, Bundesbank 2×, OLG Karlsruhe 2×). Vor dem Versand entscheiden,
  ob wirklich alle rausgehen sollen.
