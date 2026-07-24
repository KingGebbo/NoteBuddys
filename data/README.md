# KI-Verband – Dienstleistungs- & Data-Labeling-Analyse

Analyse der 567 im KI-Verband gelisteten Unternehmen (Quelle: `kiverband.csv`).
Pro Unternehmen wurde die Website recherchiert und die CSV um zwei Auswertungsspalten ergänzt.

## Dateien
- `kiverband_dl_analyse.csv` – Komma-getrennt, UTF-8 (BOM). Standard für Import/Tools.
- `kiverband_dl_analyse_de.csv` – Semikolon-getrennt, UTF-8 (BOM). Zum direkten Öffnen in deutschem Excel.

## Neue Spalten
- **DL Beschreibung** – stichpunktartige Zusammenfassung der Dienstleistungen/Produkte (recherchiert von der Firmenwebsite).
- **Data-Labeling-Bedarf** – Einschätzung, ob das Unternehmen Bedarf an Data Labeling / Data Annotation / Reasoning-Daten haben könnte.
- **Bedarf – Begründung** – kurze Begründung der Einschätzung.

## Bewertungslogik
- **Ja** – hoher wahrscheinlicher Bedarf: trainiert eigene ML-/LLM-/Computer-Vision-Modelle, Foundation-Model-/LLM-Anbieter, autonome Systeme/Robotik, medizinische Bild-KI, Annotations-/Datenplattformen, OCR-/Dokumenten-KI, Spracherkennung.
- **Vielleicht** – möglicher, aber unsicherer Bedarf: KI-Anwendungsentwickler/Integratoren mit teils eigenem Finetuning, Data-Analytics, KI-Beratung mit Implementierung.
- **Nein** – kein/kaum Bedarf: reine Beratung/Schulung, Hosting/Infrastruktur, Recht/Compliance, Marketingagenturen ohne eigene Modelle, VC, reine Nutzer bestehender KI-APIs.

## Ergebnisverteilung
- **Ja:** 186
- **Vielleicht:** 275
- **Nein:** 106

## Hinweis
Die Einschätzungen basieren auf öffentlich zugänglichen Website-Informationen und Web-Recherche zum Analysezeitpunkt und sind als Priorisierungshilfe für die Ansprache (Lead-Qualifizierung) gedacht, nicht als abschließende Bewertung. Bei einzelnen nicht erreichbaren Websites wurde per Web-Suche ergänzt.


## Update: Kontaktdaten für Ja- & Vielleicht-Firmen (461)

Für die 461 als **Ja** oder **Vielleicht** eingestuften Firmen wurde zusätzlich das Impressum (sowie Kontakt/Team/Über-uns) recherchiert. Neue Spalten:
- **Geschäftsführung** – Name(n) laut Impressum
- **Gefundene E-Mails** – alle auf der Website belegten Adressen
- **GF-Mail (belegt/rekonstruiert)** – persönliche Mail des GF, sofern belegt; sonst aus erkanntem Muster rekonstruiert (mit Kennzeichnung „(rekonstruiert)")
- **Impressum-Quelle/Hinweis** – Herkunft/Anmerkung

Zusätzliche Datei: `kiverband_leads_ja_vielleicht_de.csv` – kompakte Lead-Liste nur mit diesen 461 Firmen.

**Abdeckung:** Geschäftsführung 393/461 · mind. 1 E-Mail 385/461 · persönliche GF-Mail 30/461.

**Keine Halluzination:** Nur E-Mails, die wörtlich auf der Website standen, wurden übernommen (verschleierte wie „info(at)…" dekodiert). Fehlt eine persönliche GF-Mail, wurde sie nur dann rekonstruiert, wenn ein klares Muster aus einer echten Mitarbeiter-Adresse belegt war – entsprechend gekennzeichnet. Ansonsten bleibt das Feld leer.

## Update: Personalisierte PathWize-Ansprache (461 Mails)

Auf Basis der Ja/Vielleicht-Firmen wurden versandfertige, personalisierte Kalt-Mails erzeugt: `pathwize_outreach_de.csv` (Semikolon, dt. Excel) bzw. `pathwize_outreach.csv` (Komma).

Spalten u.a.: Empfänger-Mail, Mail-Typ, Betreff, Anrede, Mailtext (Plain), Mailtext (HTML).

**Logik**
- **Betreff/Empfänger:** Liegt eine persönliche GF-Mail vor (belegt oder rekonstruiert) → *direkter* Betreff und Versand an den GF. Sonst funktionale Mailbox (info@/kontakt@ …) → Betreff mit *„z.Hd. [GF-Name]"*.
- **Anrede:** „Hallo Herr/Frau [Nachname]" – Geschlecht aus dem Vornamen. Bei mehrdeutigem/unbekanntem Vornamen neutrale Anrede „Hallo [Vorname Nachname]" (bewusst kein Fehlgendern).
- **Link:** Das Wort **PathWize** ist in der HTML-Variante auf https://www.gopathwize.com verlinkt; im Text steht kein roher Link.

**Verteilung Mail-Typ:** direkt belegt 22 · direkt rekonstruiert 8 · funktional 319 · Mitarbeiter-Mail 36 · keine Mail 76.
**Anrede:** Herr 338 · Frau 33 · neutral 90.

Signatur ist als Platzhalter `[Ihr Name]` hinterlegt und vor Versand zu ersetzen.
