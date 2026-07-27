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

### Reiter „Auswertungen"

Zeigt anhand einer echten Kundenkampagne (EnBW Energie Baden-Württemberg AG,
Wintersemester 25/26), was Kunden nach jeder Kampagne als Report bekommen:

- KPI-Kacheln mit animierten Zählern
- Detailtabelle wie im Original-Report
- Benchmark-Grafik: Ihr Wert gegen Note Buddy's-Durchschnitt, dazu der
  Branchendurchschnitt als neutrale Referenz
- Aufteilung des Versands nach Regionen und Fachrichtungen
- Interaktions-Trichter auf einer gemeinsamen Skala
- Slider mit echten Social-Media-Reposts plus Upsell-Button für
  Social-Media-Platzierungen
- Fazit-Karten (Kampagne Status, Performance, Empfehlung) und Kontaktabschluss

**Reposts austauschen:** Die Bilder liegen unter `assets/reposts/repost-1.jpg`
bis `repost-3.jpg` (Hochformat 9:16). Einfach durch neue Dateien mit denselben
Namen ersetzen. Sollen mehr oder weniger Bilder gezeigt werden, die `figure.sl-item`
Blöcke in `index.html` ergänzen bzw. entfernen, der Slider zählt automatisch mit.

**Zahlen ändern:** Benchmarks und Verteilungen stehen als `BENCH` und `DIST`
oben im Auswertungs-Abschnitt von `assets/script.js`, die Tabellen- und
KPI-Werte direkt im Markup der View `#view-auswertungen`.

## Dateien

```
index.html          Seiteninhalt (Marketing- und Kontakt-Ansicht)
assets/styles.css   Design (Logo-Türkis + Orange als Kontrast)
assets/script.js    Interaktionen, Targeting-Explorer, Funnel, Mailversand
assets/gabriel.png  Foto von Gabriel Hilbrig  ← siehe unten
```

## Foto von Gabriel hinzufügen

Auf der Kontakt-Seite wird `assets/gabriel.png` im Kreis angezeigt. Solange die
Datei fehlt, erscheinen automatisch die Initialen „GH". Einfach das Portraitfoto
als `assets/gabriel.png` ablegen (quadratisch sieht am besten aus).

## Mailversand des Formulars

Das Anfrage-Formular sendet die Angaben automatisch per E-Mail an
**gabriel.hilbrig@notebuddys.de**. Der Versand läuft über
[FormSubmit](https://formsubmit.co) — kein eigener Server nötig.

**Einmalige Aktivierung:** Beim allerersten abgeschickten Formular sendet
FormSubmit eine Bestätigungs-E-Mail an gabriel.hilbrig@notebuddys.de. Den Link
darin **einmal anklicken** — danach werden alle weiteren Anfragen automatisch
zugestellt.

Fällt der automatische Versand aus (z. B. kein Netz), zeigt das Formular einen
Button „Anfrage per E-Mail senden", der das E-Mail-Programm mit allen Angaben
vorausgefüllt öffnet. So geht keine Anfrage verloren.

Die Empfängeradresse lässt sich oben in `assets/script.js` anpassen
(`RECIPIENT`). Alternativ kann statt FormSubmit ein anderer Dienst (z. B.
Web3Forms) oder ein eigener Endpunkt über `FORM_ENDPOINT` eingebunden werden.

## Design

Farben aus dem Logo: Türkis `#4fb8c4` als Markenfarbe, `#ff7a29` als
Orange-Kontrast. Ruhiges, hochwertiges Layout mit viel Weißraum und dezenten
Bewegungen (Reveal beim Scrollen, animierte Zähler, Feder-Übergänge).
