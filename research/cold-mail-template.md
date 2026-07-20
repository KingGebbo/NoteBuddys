# PathWize — Cold-Mail-Vorlage (verbindlich)

Quelle: **1:1 aus dem Gesendet-Ordner** (gabriel.hilbrig@notebuddys.de, Welle 1, 17.07.2026) übernommen — kein rekonstruierter Text.

## Betreff
`Data Labeling und Annotation durch verifizierte Experten auf Stundenbasis`

- **Personen-Anker (Welle 2):** Wenn nur `info@`/allgemeine Firmen-Mail (kein persönliches Postfach), aber ein Ansprechpartner bekannt ist → Name in den Betreff voranstellen:
  `Für [Vorname Nachname]: Data Labeling und Annotation durch verifizierte Experten auf Stundenbasis`
- Persönliches Postfach bestätigt → normaler Betreff ohne „Für …".

## Anrede
- Persönliches Postfach bzw. sicherer Ansprechpartner → `Hallo [Vorname],`
- Nur allgemeines Postfach, kein Name → `Hallo zusammen,`

## Platzhalter
- `[Segment]` = Segment/Bedarf der Firma (CSV-Spalte „Segment/Bedarf" bzw. „Lane"), z. B. „Computer Vision und Retail", „Geodaten und Satellitenanalyse", „Drohnen und Autonomie".

## Body (verbatim)

```
Hallo [zusammen | Vorname],

wir sind auf euch im Bereich [Segment] aufmerksam geworden. Für genau solche KI-Vorhaben können wir euch schnell die passenden Leute für Data Labeling und Annotation liefern.

Pathwize ist ein führender Anbieter von Data Labeling, Annotation und Reasoning durch verifizierte Experten im europäischen Raum. Gerne können wir mit euch innerhalb kurzer Zeit ein Pilotprojekt aufsetzen und stellen euch zügig die benötigte Zahl an Experten aus den passenden Fachbereichen bereit.

Im Bereich [Segment] haben wir bereits mehrere Projekte umgesetzt und verfügen dort über rund 10.000 Experten. Insgesamt greifen wir auf einen Talentpool von über 250.000 verifizierten Experten zu.

Wenn das für euch spannend ist, zeige ich euch in einem kurzen Gespräch, wie ein Pilot bei euch aussehen kann. Mehr zu uns findet ihr hier.

Bei Rückfragen können wir uns gerne austauschen.

Viele Grüße
Gabriel
```

- Das Wort **„hier"** ist ein Hyperlink auf `https://gopathwize.com` (sauber, ohne google-Redirect). Rest der URL NICHT als Fließtext.
- Hinweis Segment-Satz: Bei Nicht-CV-Segmenten ggf. „Im Bereich [Segment] haben wir bereits mehrere Projekte umgesetzt …" beibehalten (Aussage gilt segmentübergreifend) — oder den 10.000-Satz auf das jeweilige Segment beziehen.

## Signatur (verbatim, wird an jede Mail angehängt)

```
E-Mail: gabriel.hilbrig@notebuddys.de
Telefon: +49 176 84894678

www.gopathwize.com

---
PathWize wird betrieben von der Note Buddy‘s GmbH

Dietkirchenstr. 70
53913 Swisttal
info@notebuddys.de
www.notebuddys.de

Geschäftsführer: Niclas Weisl, Gabriel Hilbrig

Amtsgericht Bonn
Reg. Nr. HRB: 25657
```

## Weitere Regeln
- Sprache: Deutsch, per „du"/„ihr". Keine offensichtlichen KI-Bindestriche, native Gmail-Schrift/-Größe.
- One-Pager PDF (`scratchpad/onepager_b64.txt`) hängt Gabriel selbst an — Drafts werden Text/HTML-only erstellt.
- Draft-Erstellung via `htmlBody` mit sauberem `<a href="https://gopathwize.com">hier</a>` (verhindert die google-Redirect-Optik).
