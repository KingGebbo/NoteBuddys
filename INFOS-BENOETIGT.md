# Was ich noch von dir brauche
Stand: 28.07.2026. Die Auswertungsseiten sind fertig und live-fähig. Wo Daten fehlen, zeigen die Seiten Platzhalter, es ist nichts erfunden.

---

## 1. Bilder der Social-Media-Reposts (für alle 24 Kunden)

Aktuell hat nur die EnBW-Beispielauswertung echte Repost-Bilder. Alle anderen zeigen einen Platzhalter mit der Anzahl der Reposts.

**So lieferst du sie:** Bilder im Hochformat (9:16, Instagram-Story) hier ablegen:

```
assets/reposts/<slug>/1.jpg
assets/reposts/<slug>/2.jpg
assets/reposts/<slug>/3.jpg
```

Die Slugs der Kunden:

- `westpress-dfs` → Westpress für DFS
- `landwirtschaftskammer-nrw` → Landwirtschaftskammer NRW
- `waldorf-institut-witten-annen` → Waldorf Institut Witten Annen
- `selektiv-media-rheinmetall` → Selektiv Media für Rheinmetall
- `leue-nill` → LEUE & NILL GmbH + Co. KG
- `fischer-hydroforming` → fischer-Hydroforming GmbH
- `hochschule-magdeburg-stendal` → Hochschule Magdeburg-Stendal
- `ofd-hessen` → OFD Hessen
- `bosch-rexroth` → Bosch Rexroth
- `hochschule-polizei-brandenburg` → Hochschule der Polizei des Landes Brandenburg
- `aareal-bank` → Aareal Bank
- `vpv-versicherung` → VPV Versicherung
- `thyssen-krupp` → Thyssen Krupp
- `stadt-coesfeld` → Stadt Coesfeld
- `dlrg` → DLRG
- `westnetz` → Westnetz
- `bundeswehr-hannover` → Bundeswehr Hannover
- `tuev-hessen` → TÜV Technische Überwachung Hessen GmbH
- `vrm-service` → VRM Service GmbH & Co. KG
- `ministerium-justiz-mv` → Ministerium für Justiz, Gleichstellung und Verbraucherschutz Mecklenburg-Vorpommern
- `dhl` → DHL
- `evg-martens` → EVG Elektro-Vertriebs-Gesellschaft Martens GmbH & Co. KG
- `stadt-frankfurt` → Stadt Frankfurt
- `baeckerei-kraus` → Bäckerei Kraus

Schick sie mir einfach, dann binde ich sie ein.

---

## 2. QR-Code-Scans fehlen bei 19 von 24 Kunden

In der Google-Tabelle ist die Spalte QR-Code-Scans fast überall leer. Nur **Stadt Frankfurt** hat einen Wert (19). Betroffen sind:

- Westpress für DFS
- Landwirtschaftskammer NRW
- Waldorf Institut Witten Annen
- Selektiv Media für Rheinmetall
- LEUE & NILL GmbH + Co. KG
- fischer-Hydroforming GmbH
- Hochschule Magdeburg-Stendal
- OFD Hessen
- Bosch Rexroth
- Aareal Bank
- VPV Versicherung
- Thyssen Krupp
- Stadt Coesfeld
- DLRG
- Westnetz
- Bundeswehr Hannover
- DHL
- EVG Elektro-Vertriebs-Gesellschaft Martens GmbH & Co. KG
- Bäckerei Kraus

Die Seiten zeigen dort aktuell einen Strich. Sobald du die Zahlen hast, trage ich sie nach.

---

## 3. Kunden ganz ohne Kennzahlen

- **Hochschule der Polizei des Landes Brandenburg**
- **TÜV Technische Überwachung Hessen GmbH**
- **VRM Service GmbH & Co. KG**
- **Ministerium für Justiz, Gleichstellung und Verbraucherschutz Mecklenburg-Vorpommern**

Diese Seiten funktionieren und sind passwortgeschützt, zeigen aber noch keine Zahlen.

---

## 4. Punkte in der Tabelle, die ich nicht auflösen konnte

| Kunde | Was mir unklar ist |
|---|---|
| Waldorf Institut Witten Annen | Gebucht steht mit `1.000 Junior`, verschickt aber `10.000`. Welche Zahl stimmt? |
| DLRG | Gebucht steht mit `100000`, verschickt `10.000`. Ich bin von 10.000 ausgegangen. |
| DHL | Gebucht steht auf `0`, verschickt wurden `750`. Wie viele waren gebucht? |
| Thyssen Krupp | Mailings sind als ausstehend markiert, Öffnungs- und Klickrate fehlen. |
| DLRG | Die Zahlen zum 2x Social-Media-Retargeting fehlen noch. |
| VRM Service | In der Tabelle steht nur der Vermerk „Anzeige fehlt". |
| Ministerium für Justiz MV | In der Tabelle steht nur „Infos fehlen". |
| Hochschule der Polizei Brandenburg | Steht auf deiner Liste, aber nicht in der Google-Tabelle. |

---

## 5. Semester-Angabe fehlt

Bei der EnBW-Auswertung steht „Wintersemester 25/26". Für die anderen 24 Kunden steht in der Tabelle kein Semester, deshalb zeigen die Seiten aktuell „Aktuelle Kampagne".

Sag mir einfach, welches Semester gilt (z. B. für alle „Sommersemester 25"), dann trage ich es ein.

---

## 6. Aufteilung nach Regionen und Fachrichtungen

Diese beiden Diagramme gibt es bisher nur für EnBW, weil die Werte aus dem PDF stammen. Für die anderen Kunden liegen sie mir nicht vor, deshalb wird der Abschnitt dort ausgeblendet.

---

## 7. Wichtig zum Passwortschutz

Die Passwörter sind wie gewünscht die Firmennamen. Zwei Dinge solltest du dazu wissen:

1. **Auf der Auswahlseite stehen alle Firmennamen.** Wer die Liste sieht, kennt damit auch alle Passwörter und kann jede Auswertung öffnen. Wenn die Reports wirklich vertraulich sein sollen, empfehle ich individuelle Passwörter (z. B. `Westpress-2026-4K`). Sag Bescheid, dann stelle ich das um.
2. **Die Daten selbst sind verschlüsselt** (AES-256). Im öffentlichen GitHub-Repository stehen nur die Firmennamen im Klartext, keine Zahlen. Ohne Passwort ist aus den Dateien nichts auszulesen.

Alternativ kann Vercel die ganze Seite mit einem echten Serverschutz versehen (Settings → Deployment Protection). Das ist die sicherste Variante.

---

## 8. Direktlinks für den Mailversand

Die Auswertung ist jetzt unter einer eigenen Adresse erreichbar:

**https://note-buddys.vercel.app/auswertungen**

Zusätzlich hat jeder Kunde einen Direktlink, der gleich die Passwortabfrage seiner Firma öffnet. Den kannst du direkt in die Mail an den Kunden setzen:

| Kunde | Direktlink | Passwort |
|---|---|---|
| Westpress für DFS | https://note-buddys.vercel.app/auswertungen/westpress-dfs | Westpress für DFS |
| Landwirtschaftskammer NRW | https://note-buddys.vercel.app/auswertungen/landwirtschaftskammer-nrw | Landwirtschaftskammer NRW |
| Waldorf Institut Witten Annen | https://note-buddys.vercel.app/auswertungen/waldorf-institut-witten-annen | Waldorf Institut Witten Annen |
| Selektiv Media für Rheinmetall | https://note-buddys.vercel.app/auswertungen/selektiv-media-rheinmetall | Selektiv Media für Rheinmetall |
| LEUE & NILL GmbH + Co. KG | https://note-buddys.vercel.app/auswertungen/leue-nill | LEUE & NILL GmbH + Co. KG |
| fischer-Hydroforming GmbH | https://note-buddys.vercel.app/auswertungen/fischer-hydroforming | fischer-Hydroforming GmbH |
| Hochschule Magdeburg-Stendal | https://note-buddys.vercel.app/auswertungen/hochschule-magdeburg-stendal | Hochschule Magdeburg-Stendal |
| OFD Hessen | https://note-buddys.vercel.app/auswertungen/ofd-hessen | OFD Hessen |
| Bosch Rexroth | https://note-buddys.vercel.app/auswertungen/bosch-rexroth | bosch rexroth |
| Hochschule der Polizei des Landes Brandenburg | https://note-buddys.vercel.app/auswertungen/hochschule-polizei-brandenburg | Hochschule der Polizei des Landes Brandenburg |
| Aareal Bank | https://note-buddys.vercel.app/auswertungen/aareal-bank | Aareal Bank |
| VPV Versicherung | https://note-buddys.vercel.app/auswertungen/vpv-versicherung | VPV Versicherung |
| Thyssen Krupp | https://note-buddys.vercel.app/auswertungen/thyssen-krupp | Thyssen Krupp |
| Stadt Coesfeld | https://note-buddys.vercel.app/auswertungen/stadt-coesfeld | Stadt Coesfeld |
| DLRG | https://note-buddys.vercel.app/auswertungen/dlrg | DLRG |
| Westnetz | https://note-buddys.vercel.app/auswertungen/westnetz | Westnetz |
| Bundeswehr Hannover | https://note-buddys.vercel.app/auswertungen/bundeswehr-hannover | Bundeswehr Hannover |
| TÜV Technische Überwachung Hessen GmbH | https://note-buddys.vercel.app/auswertungen/tuev-hessen | TÜV Technische Überwachung Hessen GmbH |
| VRM Service GmbH & Co. KG | https://note-buddys.vercel.app/auswertungen/vrm-service | VRM Service GmbH & Co. KG |
| Ministerium für Justiz, Gleichstellung und Verbraucherschutz Mecklenburg-Vorpommern | https://note-buddys.vercel.app/auswertungen/ministerium-justiz-mv | Ministerium für Justiz, Gleichstellung und Verbraucherschutz Mecklenburg-Vorpommern |
| DHL | https://note-buddys.vercel.app/auswertungen/dhl | DHL |
| EVG Elektro-Vertriebs-Gesellschaft Martens GmbH & Co. KG | https://note-buddys.vercel.app/auswertungen/evg-martens | EVG Elektro-Vertriebs-Gesellschaft Martens GmbH & Co. KG |
| Stadt Frankfurt | https://note-buddys.vercel.app/auswertungen/stadt-frankfurt | Stadt Frankfurt |
| Bäckerei Kraus | https://note-buddys.vercel.app/auswertungen/baeckerei-kraus | Bäckerei Kraus |

Die Startseite bleibt unter `/`, die Kontaktseite ist unter `/kontakt` erreichbar.
