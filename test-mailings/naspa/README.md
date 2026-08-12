# Mailing — Nassauische Sparkasse (Naspa)

Kurzes Standalone-Mailing, gleiches Template/Verfahren wie die 191er-Charge.

- **CI-Rot `#ee0000`** — direkt aus dem offiziellen Naspa-Logo-SVG (`build/logo_rot.svg`,
  `fill="#ee0000"`), nicht geschätzt.
- **Logo** von naspa.de (rote SVG-Variante), als PNG gerendert und freigestellt.
- **Alle Fakten** von naspa.de (Karriere → Ausbildung) und dem Naspa-Unternehmensprofil
  auf ausbildung.de — nichts erfunden.

## Belegte Fakten im Mailing
| Angabe | Quelle |
|---|---|
| Vergütung 1.496 / 1.558 / 1.620 € (Stand 08/2026) + Sparkassensonderzahlung im November | naspa.de |
| 30 Tage Urlaub + 2 Bankfeiertage (24.12. und 31.12.) | naspa.de |
| Persönliches iPad · 40 € vermögenswirksame Leistungen | naspa.de |
| EGYM Wellpass, Betriebssportgemeinschaft, ÖPNV-Zuschuss | naspa.de |
| Übernahme-Chance, viele Weiterbildungsmöglichkeiten | naspa.de |
| Einsatzorte Wiesbaden, Frankfurt, Limburg, Taunus, Rheingau, Westerwald, Rhein-Lahn | naspa.de |
| Start frühestens 01.08.2027, Dauer 2–2,5 Jahre | naspa.de |
| gegründet 1840 · 1.590 Mitarbeitende · 109 Finanzcenter · ~50 Azubis pro Jahr · ausgezeichneter Ausbildungsbetrieb | ausbildung.de-Profil |

**Abweichung beachten:** Eine Stellenanzeige der Arbeitsagentur (Start 08/2026) nennt
1.346 / 1.408 / 1.470 €. Im Mailing stehen die höheren Werte von der Naspa-Seite selbst
(Stand 08/2026). Vor scharfem Versand kurz gegenlesen, welche Staffel für den jeweiligen
Jahrgang gilt.

## Dateien
```
Mailing-Naspa-Nassauische-Sparkasse.pdf        Druck-/Ansichts-PDF
Mailing-Naspa-Nassauische-Sparkasse.jpg        1280 px (Retina)
Mailing-Naspa-Nassauische-Sparkasse-640px.jpg  640 px  -> zum Einfügen in die Mail
build/naspa_build.py                           Generator (nutzt render_all.build_html)
build/logo_rot.svg, build/logo_naspa_trim.png  Logo-Quelle + gerendertes Logo
```
