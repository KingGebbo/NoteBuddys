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
