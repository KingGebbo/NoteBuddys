# Mailing — GÖRG Partnerschaft von Rechtsanwälten mbB

Beispiel-Mailing für die **Ausbildung Rechtsanwaltsfachangestellte (m/w/d)**,
gleiches Template/Verfahren wie die 191er-Charge.

- **CI-Grau `#5d686d`** — direkt aus dem offiziellen GÖRG-Logo-SVG (`build/logo_de.svg`,
  `fill="#5d686d"`), nicht geschätzt.
- **Logo**: das quadratische Markenzeichen wurde aus dem SVG freigestellt (der lange Claim
  „IHRE WIRTSCHAFTSKANZLEI" wäre in einer 52-px-Kopfzeile unlesbar geworden).
- **Serif-Headline** — passend zum seriösen Auftritt einer Wirtschaftskanzlei.
- **Alle Fakten** von goerg.de (Karriere → Ausbildung) und dem GÖRG-Profil auf ausbildung.de.

## Belegte Fakten im Mailing
| Angabe | Quelle |
|---|---|
| Überdurchschnittliche Vergütung | goerg.de/karriere/…/ausbildung |
| Deutschlandticket übernommen | goerg.de |
| 300 € steuerfreie Shopping-Karte pro Jahr nach der Probezeit | goerg.de |
| 40 € monatlich zum Sparplan | goerg.de |
| Urban Sports Club, moderne zentrale Büros | goerg.de |
| Intensive & individuelle Betreuung, Prüfungsvorbereitungskurse, GÖRG Akademie (Bucerius Education), Englischkurse | goerg.de |
| Durchlaufen der Rechtsgebiete und internen Abteilungen | goerg.de |
| Start jährlich im August oder September | goerg.de |
| 5 Standorte: Berlin, Frankfurt, Hamburg, Köln, München | goerg.de |
| 1996 gegründet · rund 1.000 Mitarbeitende · über 350 Anwält:innen/Steuerberater:innen | ausbildung.de-Profil |
| führend im Insolvenz- und Sanierungsrecht | goerg.de |

**Keine Vergütungstabelle**, weil GÖRG nur „überdurchschnittliche Vergütung" angibt und
keine konkreten Beträge veröffentlicht — bewusst weggelassen statt geschätzt.

GÖRG bildet außerdem aus zu: Notarfachangestellte, Rechtsanwalts- und Notarfachangestellte,
Steuerfachangestellte sowie Fachinformatiker:in (Systemintegration / Anwendungsentwicklung).
Für eine dieser Richtungen lässt sich das Mailing in `build/goerg_build.py` mit wenigen
Zeilen umstellen.

## Dateien
```
Mailing-GOERG-Wirtschaftskanzlei.pdf         Ansichts-PDF
Mailing-GOERG-Wirtschaftskanzlei.jpg         1280 px (Retina)
Mailing-GOERG-Wirtschaftskanzlei-640px.jpg   640 px -> zum Einfügen in die Mail
build/goerg_build.py                         Generator
build/logo_de.svg, build/logo_block.png      Logo-Quelle + freigestelltes Markenzeichen
```
