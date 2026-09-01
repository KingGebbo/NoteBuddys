# PathWize — Follow-up-Mail (Welle 2, Nachfass)

Nachfass zur ersten Kaltmail vom 20./21.07.2026. Wird als **Antwort im selben Thread** oder als neue Mail an alle **versendeten, nicht gebouncten, nicht antwortenden** Leads geschickt (~6 Wochen Abstand).

## Betreff
`Kurze Nachfrage: Data Labeling und Annotation durch verifizierte Experten auf Stundenbasis`
- Mit Personen-Anker (wenn Name bekannt): `Für [Vorname Nachname]: Kurze Nachfrage – Data Labeling und Annotation durch verifizierte Experten`

## Anrede
- `Hallo [Vorname],` — bzw. `Hallo zusammen,` ohne belegten Namen.

## Body (verbatim)

```
Hallo [zusammen | Vorname],

ich hatte mich vor einigen Wochen bei euch gemeldet – Data Labeling, Annotation und Reasoning durch verifizierte Experten auf Stundenbasis für eure KI-Vorhaben im Bereich [Segment].

Ich weiß, dass so eine Mail im Alltag schnell untergeht, daher hake ich kurz nach. Falls das Thema bei euch gerade relevant ist, starten wir gerne mit einem kleinen, unverbindlichen Pilotprojekt – ihr testet Qualität und Tempo ohne Risiko.

Mehr zu uns findet ihr hier. Über eine kurze Rückmeldung freue ich mich – auch ein „aktuell kein Bedarf" ist völlig in Ordnung.

Viele Grüße
Gabriel
```

- „hier" = Hyperlink auf `https://gopathwize.com` (sauber, kein Redirect).
- Danach der Standard-Signaturblock (identisch zur ersten Mail).

## Ausschlussregeln
- **Bounces** (siehe `scratchpad/bounces.csv`) → kein Follow-up.
- **DECLINE** (explizite Absage, z. B. LOXO, MetaSystems) → kein Follow-up.
- **WARM Leads** → KEIN generisches Follow-up, sondern persönliche, individuelle Antwort (separat behandeln).
- **AUTO / OOO / keine Antwort** → Follow-up wie oben.
