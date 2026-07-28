#!/usr/bin/env python3
"""Baut die PathWize VC-Outreach-Excel aus den Recherche-JSONs der Agenten."""
import json, glob, os, re, unicodedata, sys
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import CellIsRule

SCRATCH = os.path.dirname(os.path.abspath(__file__))
OUT_XLSX = os.path.join(SCRATCH, "PathWize_VC_Outreach_Liste.xlsx")

FONT = "Arial"
C_DARK   = "1F3864"   # Kopfzeile
C_A      = "C6E0B4"   # gruen
C_B      = "FFE699"   # gelb
C_C      = "F8CBAD"   # orange
C_D      = "D9D9D9"   # grau
C_BAND   = "F2F2F2"
C_TITLE  = "2E5C8A"

# ---------------------------------------------------------------- Daten laden
UMLAUT = str.maketrans({"ä": "ae", "ö": "oe", "ü": "ue", "ß": "ss",
                        "Ä": "ae", "Ö": "oe", "Ü": "ue"})

# Fonds, die unter mehreren Namen recherchiert wurden -> auf einen Schluessel ziehen
ALIASES = {
    "htgf": "hightechgruenderfonds",
    "cavalry": "nap",                 # Cavalry Ventures firmiert seit 2025 als NAP
    "u2v": "u2v",
}

def norm(n):
    n = (n or "").lower().strip().translate(UMLAUT)
    n = unicodedata.normalize("NFKD", n).encode("ascii", "ignore").decode()
    n = re.sub(r"\s*\(.*?\)\s*", " ", n)
    n = re.sub(r"\b(ehem|gmbh|ag|mbh|the|expert|founder|fund|capital partners|ventures?|venture partners|vc|partners?|capital|management|beteiligungs)\b", " ", n)
    n = re.sub(r"[^a-z0-9]", "", n)
    return ALIASES.get(n, n)

BAD = {"", "n/a", "na", "none", "null", "-", "unbekannt", "nicht verfuegbar", "nicht verfügbar"}

def merge(base, extra):
    """Feldweise mergen: leere / 'n/a'-Werte des Basissatzes mit echten Daten fuellen."""
    for k, v in extra.items():
        cur = str(base.get(k, "")).strip().lower()
        new = str(v).strip()
        if cur in BAD and new.lower() not in BAD:
            base[k] = v
    return base

def load():
    recs, seen = [], {}
    for f in sorted(glob.glob(os.path.join(SCRATCH, "out", "batch_*.json"))):
        try:
            data = json.load(open(f, encoding="utf-8"))
        except Exception as e:
            print(f"WARN: {f} nicht lesbar: {e}", file=sys.stderr)
            continue
        if isinstance(data, dict):
            data = data.get("vcs") or data.get("data") or []
        for r in data:
            if not isinstance(r, dict) or not r.get("name"):
                continue
            k = norm(r["name"])
            if k in seen:
                old = seen[k]
                # Datensatz mit hoeherem Score wird Basis, der andere fuellt Luecken
                if int(r.get("score_total") or 0) > int(old.get("score_total") or 0):
                    idx = recs.index(old)
                    merged = merge(dict(r), old)
                    recs[idx] = merged
                    seen[k] = merged
                else:
                    merge(old, r)
                print(f"  Dublette zusammengefuehrt: {r['name']} -> {seen[k]['name']}", file=sys.stderr)
                continue
            seen[k] = r
            recs.append(r)
    return recs

def i(v):
    try: return int(float(v))
    except Exception: return 0

def s(v):
    if v is None: return ""
    v = str(v).strip()
    return "" if v.lower() in ("none", "null", "nan") else v

# Direkte Data-Labeling- / Trainingsdaten-Companies: Thesenbeleg UND moeglicher Konflikt
LABELING_COS = ["v7", "encord", "kili", "superannotate", "scale ai", "labelbox", "activeloop",
                "neurolabs", "sky engine", "hasty", "prolific", "snorkel", "argilla",
                "cloudfactory", "supervisely", "segments.ai", "dataloop", "toloka", "appen",
                "sama", "surge ai", "labelstud", "humansignal", "clickworker", "understand.ai"]
DATAINFRA_HINTS = ["vector db", "vector-db", "vektordatenbank", "data lake", "data-lake",
                   "datenbank", "database", "mlops", "data pipeline", "data-pipeline",
                   "trainingsdaten", "annotation", "data infra", "data-infra", "feature store",
                   "datenplattform", "data platform", "data-plattform", "data stack",
                   "synthetische daten", "data warehouse", "etl", "data tooling", "data-tooling"]

def labeling_flag(r):
    """Nur belegte Portfolio-Companies auswerten - nicht die Fliesstext-Einschaetzung,
    die das Wort 'Labeling' praktisch immer enthaelt und damit jedes Signal platt macht."""
    port = s(r.get("portfolio_ai_data")).lower()
    hits = sorted({c for c in LABELING_COS
                   if c in port or c in s(r.get("data_labeling_relevanz")).lower()})
    if hits:
        return "DIREKT: " + ", ".join(h.title() for h in hits) + " – Wettbewerbskonflikt pruefen"
    if any(h in port for h in DATAINFRA_HINTS):
        return "Data-Infra-nah"
    return "-"

def konf(r):
    """Konfidenz normalisieren - die Agenten lieferten gemischte Schreibweisen."""
    v = s(r.get("konfidenz")).strip().lower()
    return {"hoch": "Hoch", "mittel": "Mittel", "niedrig": "Niedrig"}.get(v, v.title() or "Mittel")

def tier_of(r):
    t = s(r.get("tier")).upper()[:1]
    if t in "ABCD": return t
    sc = i(r.get("score_total"))
    return "A" if sc >= 75 else "B" if sc >= 60 else "C" if sc >= 40 else "D"

# ---------------------------------------------------------------- Styling
thin = Side(style="thin", color="BFBFBF")
BORDER = Border(left=thin, right=thin, top=thin, bottom=thin)

def style_header(ws, row, ncols, height=34):
    ws.row_dimensions[row].height = height
    for c in range(1, ncols + 1):
        cell = ws.cell(row=row, column=c)
        cell.font = Font(name=FONT, bold=True, size=10, color="FFFFFF")
        cell.fill = PatternFill("solid", fgColor=C_DARK)
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = BORDER

def finish(ws, header_row, ncols, widths, wrap_cols=(), freeze=None, autofilter=True):
    for idx, w in enumerate(widths, start=1):
        ws.column_dimensions[get_column_letter(idx)].width = w
    last = ws.max_row
    for r in range(header_row + 1, last + 1):
        for c in range(1, ncols + 1):
            cell = ws.cell(row=r, column=c)
            cell.font = Font(name=FONT, size=10)
            cell.border = BORDER
            cell.alignment = Alignment(
                vertical="top",
                wrap_text=(c in wrap_cols),
                horizontal="center" if not (c in wrap_cols) and c > 1 and len(str(cell.value or "")) < 6 else "left",
            )
    if freeze: ws.freeze_panes = freeze
    if autofilter and last > header_row:
        ws.auto_filter.ref = f"A{header_row}:{get_column_letter(ncols)}{last}"

def tier_fill(ws, row, ncols, tier):
    col = {"A": C_A, "B": C_B, "C": C_C, "D": C_D}.get(tier)
    if not col: return
    for c in range(1, ncols + 1):
        ws.cell(row=row, column=c).fill = PatternFill("solid", fgColor=col)

def title_block(ws, title, subtitle, ncols):
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=ncols)
    t = ws.cell(row=1, column=1, value=title)
    t.font = Font(name=FONT, bold=True, size=15, color="FFFFFF")
    t.fill = PatternFill("solid", fgColor=C_TITLE)
    t.alignment = Alignment(horizontal="left", vertical="center", indent=1)
    ws.row_dimensions[1].height = 28
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=ncols)
    st = ws.cell(row=2, column=1, value=subtitle)
    st.font = Font(name=FONT, size=9, italic=True, color="595959")
    st.alignment = Alignment(horizontal="left", vertical="center", indent=1)
    ws.row_dimensions[2].height = 18

# ---------------------------------------------------------------- Sheets
MASTER_COLS = [
    ("Rang", 6), ("VC / Fonds", 26), ("Tier", 6), ("Score", 7), ("Stadt", 14), ("Land", 7),
    ("Typ", 14), ("Stage-Fokus", 22), ("Leads Runden?", 12), ("Ticket-Size", 20),
    ("Fondsgroesse / AUM", 24), ("AI/Data-Fokus", 12), ("Sektor-These", 42),
    ("Portfolio AI / Data-Infra", 40), ("Data-Labeling-Relevanz", 34), ("Labeling-Signal", 32),
    ("Relevanter Partner", 22), ("Rolle", 20), ("LinkedIn", 30), ("Kontakt", 30),
    ("Fit-Begruendung", 48), ("Red Flags", 34), ("Outreach-Angle", 46),
    ("Stage (30)", 9), ("These (30)", 9), ("Portfolio (20)", 11), ("Aktivitaet (10)", 11),
    ("Geo (10)", 9), ("Konfidenz", 11), ("Herkunft", 20), ("Website", 28), ("Quellen", 46),
]
MASTER_WRAP = {2, 8, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 31, 32}

def master_row(r, rank):
    return [
        rank, s(r.get("name")), tier_of(r), i(r.get("score_total")), s(r.get("hq_stadt")),
        s(r.get("hq_land")), s(r.get("typ")), s(r.get("stage_fokus")), s(r.get("leads_runden")),
        s(r.get("ticket_size")), s(r.get("fondsgroesse_aum")), s(r.get("ai_data_fokus")),
        s(r.get("sektor_these")), s(r.get("portfolio_ai_data")), s(r.get("data_labeling_relevanz")),
        labeling_flag(r),
        s(r.get("relevanter_partner")), s(r.get("partner_rolle")), s(r.get("partner_linkedin")),
        s(r.get("kontakt")), s(r.get("fit_begruendung")), s(r.get("red_flags")),
        s(r.get("outreach_angle")), i(r.get("score_stage")), i(r.get("score_these")),
        i(r.get("score_portfolio")), i(r.get("score_aktivitaet")), i(r.get("score_geo")),
        konf(r),
        "NEU – Recherche-Ergaenzung" if "neu" in s(r.get("quelle_liste")).lower() else "Bestandsliste",
        s(r.get("website")), s(r.get("quellen")),
    ]

def sheet_table(wb, name, title, subtitle, rows, tab_color):
    ws = wb.create_sheet(name)
    ws.sheet_properties.tabColor = tab_color
    ncols = len(MASTER_COLS)
    title_block(ws, title, subtitle, ncols)
    hr = 4
    for c, (h, _) in enumerate(MASTER_COLS, start=1):
        ws.cell(row=hr, column=c, value=h)
    style_header(ws, hr, ncols)
    for n, r in enumerate(rows, start=1):
        ws.append([]) if False else None
        vals = master_row(r, n)
        for c, v in enumerate(vals, start=1):
            ws.cell(row=hr + n, column=c, value=v)
        tier_fill(ws, hr + n, 4, tier_of(r))   # Farbcode nur auf Rang..Score
    finish(ws, hr, ncols, [w for _, w in MASTER_COLS], MASTER_WRAP, freeze=f"C{hr+1}")
    return ws

# ---------------------------------------------------------------- Build
def build():
    recs = load()
    if not recs:
        sys.exit("Keine Recherche-Daten in out/ gefunden.")
    for r in recs:
        r["_tier"] = tier_of(r)
    recs.sort(key=lambda r: (-i(r.get("score_total")), s(r.get("name")).lower()))

    tiers = {t: [r for r in recs if r["_tier"] == t] for t in "ABCD"}
    shortlist = tiers["A"] + tiers["B"]

    wb = Workbook()
    wb.remove(wb.active)

    # ---------------- 1. Anleitung & Methodik
    ws = wb.create_sheet("1 Anleitung & Methodik")
    ws.sheet_properties.tabColor = C_TITLE
    title_block(ws, "PathWize – VC-Outreach-Liste",
                "Data Labeling / AI · Zielrunde Pre-Seed / Seed / Series A · Stand: Juli 2026", 6)
    lines = [
        ("", ""),
        ("SO NUTZT DU DIESE DATEI", "H"),
        ("Blatt 2 – Outreach-Tracker", "Deine Arbeitsliste. Tier A + B, nach Score sortiert und in drei Wellen geschnitten. Hier trägst du Status, Datum und Notizen ein."),
        ("Blatt 3 – Tier A (Kernziele)", "Höchste Trefferwahrscheinlichkeit: explizite AI-/Data-Infra-These + passende Phase. Hier zuerst starten."),
        ("Blatt 4 – Tier B (Solide)", "Guter Fit, aber ein Kriterium schwächer (z. B. generalistisch statt AI-first). Zweite Welle."),
        ("Blatt 5 – Tier C (Opportunistisch)", "Nur mit warmem Intro oder als Co-Investor sinnvoll."),
        ("Blatt 6 – Tier D (Kein Fit)", "Bewusst dokumentiert, damit niemand doppelt recherchiert. NICHT anschreiben."),
        ("Blatt 7 – Master (alle VCs)", "Vollständiger Datensatz mit allen Feldern, filterbar."),
        ("Blatt 8 – Auswertung", "Kennzahlen und Verteilung (Live-Formeln auf den Master)."),
        ("", ""),
        ("SCORING-MODELL (max. 100 Punkte)", "H"),
        ("Stage-Fit (0–30)", "Investiert der Fonds in Pre-Seed / Seed / Series A? Führt er Runden an? Reine Growth-/Buyout-Fonds erhalten 0–5."),
        ("Thesen-Fit AI/Data (0–30)", "Explizite These zu AI/ML, Data-Infrastruktur, MLOps, Dev-Tools oder technischem B2B. Reine Climate-/Health-/PropTech-Fonds punkten niedrig."),
        ("Portfolio-Beleg (0–20)", "Nachgewiesene Investments in AI-, Data-Infra- oder Labeling-Companies (z. B. Encord, V7, Kili, Activeloop, Prolific, Qdrant)."),
        ("Aktivität & Ticket (0–10)", "Aktueller Fonds mit Dry Powder, Ticketgröße passend zur Zielrunde."),
        ("Geo-Fit (0–10)", "Investiert in DACH bzw. Europa und ist für PathWize praktisch erreichbar."),
        ("", ""),
        ("OUTREACH-WELLEN (Spalte B im Tracker)", "H"),
        ("Welle 1 – Platz 1 bis 25", "Höchster Score. Diese zuerst und mit individuell recherchiertem Anschreiben. Hier lohnt sich der Aufwand für ein warmes Intro."),
        ("Welle 2 – Platz 26 bis 60", "Starten, sobald Welle 1 verschickt ist. So bleibt der Prozess steuerbar und du kannst aus dem Feedback der ersten Welle lernen."),
        ("Welle 3 – ab Platz 61", "Breitenansprache, sobald Welle 1 und 2 abgearbeitet sind."),
        ("", ""),
        ("SPALTE 'LABELING-SIGNAL' – wichtig", "H"),
        ("DIREKT: <Company>", "Der Fonds hat bereits in eine Data-Labeling-/Trainingsdaten-Company investiert (z. B. V7, Encord, Kili, SuperAnnotate, Activeloop). Das ist der stärkste Thesen-Beleg – ABER prüfe vor dem Kontakt, ob es ein direkter Wettbewerber zu PathWize ist. Dann ist der Fonds oft blockiert."),
        ("Data-Infra-nah", "Investments in Vector-DBs, MLOps, Datenplattformen o. ä. Sehr guter Anknüpfungspunkt ohne Konfliktrisiko."),
        ("-", "Kein erkennbarer Bezug im recherchierten Portfolio. Argumentation muss über die allgemeine These laufen."),
        ("", ""),
        ("TIER-SCHWELLEN", "H"),
        ("Tier A – ab 75 Punkte", "Kernziele. Direkt und priorisiert ansprechen."),
        ("Tier B – 60 bis 74 Punkte", "Solider Fit. Zweite Outreach-Welle."),
        ("Tier C – 40 bis 59 Punkte", "Nur mit warmem Intro / als Co-Investor."),
        ("Tier D – unter 40 Punkte", "Kein Fit (falsche Phase oder falscher Sektor)."),
        ("", ""),
        ("WICHTIGE HINWEISE", "H"),
        ("Konfidenz-Spalte beachten", "Bei 'Niedrig' waren Fondsgröße, Partner oder These nicht sicher belegbar – vor dem Kontakt kurz auf der Website gegenprüfen."),
        ("Partner-Namen verifizieren", "VC-Teams wechseln häufig. Vor dem Versand die Partnerseite des Fonds prüfen."),
        ("Quellen-Spalte", "Enthält die Belege der Recherche – nützlich für die Vorbereitung des Erstgesprächs."),
    ]
    row = 4
    for a, b in lines:
        if b == "H":
            ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=6)
            c = ws.cell(row=row, column=1, value=a)
            c.font = Font(name=FONT, bold=True, size=11, color="FFFFFF")
            c.fill = PatternFill("solid", fgColor=C_DARK)
            c.alignment = Alignment(vertical="center", indent=1)
            ws.row_dimensions[row].height = 22
        elif a or b:
            c1 = ws.cell(row=row, column=1, value=a)
            c1.font = Font(name=FONT, bold=True, size=10)
            c1.alignment = Alignment(vertical="top", wrap_text=True)
            ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=6)
            c2 = ws.cell(row=row, column=2, value=b)
            c2.font = Font(name=FONT, size=10)
            c2.alignment = Alignment(vertical="top", wrap_text=True)
            ws.row_dimensions[row].height = 30
        row += 1
    ws.column_dimensions["A"].width = 34
    for col in "BCDEF":
        ws.column_dimensions[col].width = 22
    # Legende Tier-Farben
    row += 1
    ws.cell(row=row, column=1, value="Farblegende").font = Font(name=FONT, bold=True, size=11)
    row += 1
    for t, lbl, col in [("A", "Tier A – Kernziel", C_A), ("B", "Tier B – solide", C_B),
                        ("C", "Tier C – opportunistisch", C_C), ("D", "Tier D – kein Fit", C_D)]:
        c = ws.cell(row=row, column=1, value=lbl)
        c.fill = PatternFill("solid", fgColor=col)
        c.font = Font(name=FONT, size=10)
        c.border = BORDER
        row += 1

    # ---------------- 2. Outreach-Tracker
    ws = wb.create_sheet("2 Outreach-Tracker")
    ws.sheet_properties.tabColor = "70AD47"
    tcols = [("Prio", 6), ("Welle", 8), ("VC / Fonds", 26), ("Tier", 6), ("Score", 7), ("Stadt", 14),
             ("Stage-Fokus", 22), ("Ticket-Size", 20), ("Labeling-Signal", 32),
             ("Relevanter Partner", 22), ("Rolle", 20),
             ("LinkedIn", 30), ("Kontakt", 30), ("Outreach-Angle", 46), ("Fit-Begruendung", 46),
             ("Status", 16), ("Kanal", 14), ("Kontaktiert am", 14), ("Follow-up am", 14),
             ("Antwort", 14), ("Naechster Schritt", 28), ("Notizen", 36)]
    ncols = len(tcols)
    title_block(ws, "Outreach-Tracker – Tier A + B",
                "Nach Score sortiert, in drei Wellen geschnitten. Spalten P–V sind deine Arbeitsspalten (Dropdowns hinterlegt).", ncols)
    hr = 4
    for c, (h, _) in enumerate(tcols, start=1):
        ws.cell(row=hr, column=c, value=h)
    style_header(ws, hr, ncols)
    for n, r in enumerate(shortlist, start=1):
        welle = "1" if n <= 25 else "2" if n <= 60 else "3"
        vals = [n, welle, s(r.get("name")), tier_of(r), i(r.get("score_total")), s(r.get("hq_stadt")),
                s(r.get("stage_fokus")), s(r.get("ticket_size")), labeling_flag(r),
                s(r.get("relevanter_partner")),
                s(r.get("partner_rolle")), s(r.get("partner_linkedin")), s(r.get("kontakt")),
                s(r.get("outreach_angle")), s(r.get("fit_begruendung")),
                "Offen", "", "", "", "", "", ""]
        for c, v in enumerate(vals, start=1):
            ws.cell(row=hr + n, column=c, value=v)
        tier_fill(ws, hr + n, 5, tier_of(r))
        wf = {"1": "C6E0B4", "2": "FFE699", "3": "F2F2F2"}[welle]
        wc = ws.cell(row=hr + n, column=2)
        wc.fill = PatternFill("solid", fgColor=wf)
        wc.font = Font(name=FONT, size=10, bold=True)
        lc = ws.cell(row=hr + n, column=9)
        if str(lc.value).startswith("DIREKT"):
            lc.fill = PatternFill("solid", fgColor="FCE4D6")
            lc.font = Font(name=FONT, size=9, color="C55A11", bold=True)
    finish(ws, hr, ncols, [w for _, w in tcols], {3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22}, freeze=f"D{hr+1}")
    last = hr + len(shortlist)
    if shortlist:
        dv_status = DataValidation(type="list",
            formula1='"Offen,Recherche,Intro gesucht,Angeschrieben,Follow-up,Call vereinbart,In Due Diligence,Term Sheet,Abgesagt,Zurueckgestellt"',
            allow_blank=True, showDropDown=False)
        dv_kanal = DataValidation(type="list",
            formula1='"E-Mail,LinkedIn,Warm Intro,Pitch-Formular,Event,Telefon"', allow_blank=True, showDropDown=False)
        dv_antwort = DataValidation(type="list", formula1='"Ja,Nein,Ausstehend"', allow_blank=True, showDropDown=False)
        ws.add_data_validation(dv_status); dv_status.add(f"P{hr+1}:P{last}")
        ws.add_data_validation(dv_kanal);  dv_kanal.add(f"Q{hr+1}:Q{last}")
        ws.add_data_validation(dv_antwort);dv_antwort.add(f"T{hr+1}:T{last}")
        for rr in range(hr + 1, last + 1):
            ws.cell(row=rr, column=18).number_format = "DD.MM.YYYY"
            ws.cell(row=rr, column=19).number_format = "DD.MM.YYYY"
        ws.conditional_formatting.add(f"P{hr+1}:P{last}",
            CellIsRule(operator="equal", formula=['"Abgesagt"'],
                       fill=PatternFill("solid", bgColor="FFC7CE"), font=Font(color="9C0006")))
        ws.conditional_formatting.add(f"P{hr+1}:P{last}",
            CellIsRule(operator="equal", formula=['"Term Sheet"'],
                       fill=PatternFill("solid", bgColor="C6EFCE"), font=Font(color="006100")))

    # ---------------- 3-6. Tier-Sheets
    sheet_table(wb, "3 Tier A – Kernziele", "Tier A – Kernziele (Score >= 75)",
                "Explizite AI-/Data-These und passende Phase. Hier zuerst starten.", tiers["A"], "70AD47")
    sheet_table(wb, "4 Tier B – Solide", "Tier B – solider Fit (Score 60–74)",
                "Guter Fit, ein Kriterium schwaecher. Zweite Outreach-Welle.", tiers["B"], "FFC000")
    sheet_table(wb, "5 Tier C – Opportunistisch", "Tier C – opportunistisch (Score 40–59)",
                "Nur mit warmem Intro oder als Co-Investor sinnvoll.", tiers["C"], "ED7D31")
    sheet_table(wb, "6 Tier D – Kein Fit", "Tier D – kein Fit (Score < 40)",
                "Bewusst dokumentiert: falsche Phase oder falscher Sektor. Nicht anschreiben.", tiers["D"], "A6A6A6")

    # ---------------- 7. Master
    # ASCII-Blattname: wird von den Formeln auf '8 Auswertung' referenziert
    ms = sheet_table(wb, "7 Master", "Master-Liste – alle recherchierten VCs",
                     "Vollstaendiger Datensatz, nach Score sortiert. Ueber die Filter in Zeile 4 eingrenzen.",
                     recs, "1F3864")
    m_first, m_last = 5, 4 + len(recs)

    # ---------------- 8. Auswertung
    ws = wb.create_sheet("8 Auswertung")
    ws.sheet_properties.tabColor = "7030A0"
    title_block(ws, "Auswertung",
                "Live-Formeln auf Blatt '7 Master'. Die Werte berechnen sich beim Oeffnen in Excel.", 4)
    M = "'7 Master'"
    T = f"{M}!$C${m_first}:$C${m_last}"
    S = f"{M}!$D${m_first}:$D${m_last}"
    A = f"{M}!$L${m_first}:$L${m_last}"   # AI/Data-Fokus
    L = f"{M}!$F${m_first}:$F${m_last}"   # Land
    K = f"{M}!$AC${m_first}:$AC${m_last}" # Konfidenz
    G = f"{M}!$P${m_first}:$P${m_last}"   # Labeling-Signal
    H = f"{M}!$AD${m_first}:$AD${m_last}" # Herkunft

    blocks = [
        ("VERTEILUNG NACH TIER", [
            ("Tier A – Kernziele", f'=COUNTIF({T},"A")'),
            ("Tier B – solide", f'=COUNTIF({T},"B")'),
            ("Tier C – opportunistisch", f'=COUNTIF({T},"C")'),
            ("Tier D – kein Fit", f'=COUNTIF({T},"D")'),
            ("Summe recherchierter VCs", f'=COUNTA({M}!$B${m_first}:$B${m_last})'),
        ]),
        ("SCORE-KENNZAHLEN", [
            ("Hoechster Score", f"=MAX({S})"),
            ("Durchschnitt (alle)", f"=ROUND(AVERAGE({S}),1)"),
            ("Durchschnitt Tier A+B", f'=ROUND(SUMPRODUCT(({T}="A")+({T}="B"),{S})/MAX(1,COUNTIF({T},"A")+COUNTIF({T},"B")),1)'),
            ("Median", f"=ROUND(MEDIAN({S}),1)"),
        ]),
        ("AI / DATA-FOKUS", [
            ("Ja – expliziter AI/Data-Fokus", f'=COUNTIF({A},"Ja")'),
            ("Teilweise", f'=COUNTIF({A},"Teilweise")'),
            ("Nein", f'=COUNTIF({A},"Nein")'),
        ]),
        ("GEOGRAFIE (Top-Maerkte)", [
            ("Deutschland (DE)", f'=COUNTIF({L},"DE")'),
            ("UK", f'=COUNTIF({L},"UK")'),
            ("Frankreich (FR)", f'=COUNTIF({L},"FR")'),
            ("Schweiz (CH)", f'=COUNTIF({L},"CH")'),
            ("Oesterreich (AT)", f'=COUNTIF({L},"AT")'),
        ]),
        ("LABELING-NAEHE DES PORTFOLIOS", [
            ("Direktes Labeling-Investment", f'=COUNTIF({G},"DIREKT*")'),
            ("Data-Infra-nah", f'=COUNTIF({G},"Data-Infra-nah")'),
            ("Kein erkennbarer Bezug", f'=COUNTIF({G},"-")'),
        ]),
        ("HERKUNFT DER EINTRAEGE", [
            ("Aus den Bestandslisten", f'=COUNTIF({H},"Bestandsliste")'),
            ("Neu hinzurecherchiert", f'=COUNTIF({H},"NEU*")'),
        ]),
        ("DATENQUALITAET", [
            ("Konfidenz Hoch", f'=COUNTIF({K},"Hoch")'),
            ("Konfidenz Mittel", f'=COUNTIF({K},"Mittel")'),
            ("Konfidenz Niedrig", f'=COUNTIF({K},"Niedrig")'),
        ]),
    ]
    row = 4
    for head, items in blocks:
        ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=2)
        c = ws.cell(row=row, column=1, value=head)
        c.font = Font(name=FONT, bold=True, size=11, color="FFFFFF")
        c.fill = PatternFill("solid", fgColor=C_DARK)
        c.alignment = Alignment(vertical="center", indent=1)
        ws.row_dimensions[row].height = 20
        row += 1
        for lbl, f in items:
            ws.cell(row=row, column=1, value=lbl).font = Font(name=FONT, size=10)
            v = ws.cell(row=row, column=2, value=f)
            v.font = Font(name=FONT, size=10, bold=True)
            v.alignment = Alignment(horizontal="center")
            v.border = BORDER
            ws.cell(row=row, column=1).border = BORDER
            row += 1
        row += 1
    ws.column_dimensions["A"].width = 36
    ws.column_dimensions["B"].width = 14
    ws.cell(row=row, column=1,
            value="Hinweis: Alle Werte sind Live-Formeln. Beim Filtern des Master-Blatts bleiben sie unveraendert – sie rechnen ueber den gesamten Datensatz.").font = Font(name=FONT, size=9, italic=True, color="595959")

    wb.save(OUT_XLSX)
    print(f"OK: {OUT_XLSX}")
    print(f"VCs gesamt: {len(recs)} | A: {len(tiers['A'])} B: {len(tiers['B'])} C: {len(tiers['C'])} D: {len(tiers['D'])}")
    return recs, tiers

if __name__ == "__main__":
    build()
