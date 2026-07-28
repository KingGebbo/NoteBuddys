#!/usr/bin/env python3
"""Baut aus master_min5.csv die 191 Draft-Specs (to, subject, htmlBody) für Gmail.
Vorlage = Gabriel-Variante 'Beispielhaftes Mailing'. Nur Entwürfe, kein Versand."""
import csv, json, re, html

SRC='/root/.claude/uploads/3750de59-c412-5eba-a906-132f5cea232d/a5f9c072-master_min5.csv'
INFO_URL='https://note-buddys.vercel.app/#top'
CAL_URL='https://calendly.com/gabriel-notebuddys/30min'

# ---------- Anrede ----------
GENERIC=re.compile(r'\bteam\b|abteilung|personalmarketing|zentrale|karriere|beratungsteam|'
                   r'bewerbermanagement|kontakt|schule für|recruiting|studienberatung', re.I)
TITLES=re.compile(r'^\s*(Dr\.|Prof\.|Dipl\.[-\w]*|Herr|Frau)\s+', re.I)

def anrede(name):
    n=(name or '').strip()
    while TITLES.match(n):
        n=TITLES.sub('', n).strip()
    if not n or n.upper() in ('N/A','NA','-'):
        return 'Hallo zusammen,'
    if GENERIC.search(n):
        return 'Hallo zusammen,'
    parts=n.split()
    if len(parts)<2:                     # nur Nachname -> unpersönlich
        return 'Hallo zusammen,'
    vor=parts[0]
    if len(vor)<2 or not vor[0].isalpha():
        return 'Hallo zusammen,'
    return f'Hallo {vor},'

# ---------- Stelle bereinigen (Präfix Ausbildung/Duales Studium bleibt) ----------
EMOJI=re.compile('[\U0001F000-\U0001FAFF←-⇿⌀-➿⬀-⯿️‍☀-⛿]')
DROP_SEG=re.compile(r'\b(region|finanzamt|standort|standorte|beamtenlaufbahn|amtsgericht|agentur|'
                    r'id:|jährige|jähriges|inkl\.|start|filiale|werk|studienbeginn|ausbildungsbeginn|'
                    r'\d{5}|TN\)|bewerben|mittlere reife|abitur)', re.I)

MONTHS=r'Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember'
BERUF=re.compile(r'ausbildung|studium|student|azubi|auszubildend|kaufmann|kauffrau|kaufleute|'
                 r'bachelor|assistent|mechaniker|mechatronik|elektroniker|pfleg|fachkraft|'
                 r'fachangestell|wirt|techno|koch|verkäufer|lehrkraft|logopäd|masseur|therapeut|'
                 r'fahrer|reiniger|lackierer|akustiker|anwärter|chemikant|lotse|ingenieur', re.I)
TRAIL=re.compile(r'\s+(für|zum|zur|ab|im|in|am|mit|start|neu|jetzt|noch|und|der|die|das|'
                 rf'{MONTHS})\s*$', re.I)

def clean_stelle(raw):
    s=EMOJI.sub(' ', raw or '')
    # Gender-Sternchen: vor Buchstabe/Bindestrich -> Schrägstrich, am Wortende -> weg
    s=re.sub(r'(?<=\w)\*(?=[\w])', '/', s)
    s=re.sub(r'(?<=\w)\*(?=-)', '/', s)
    s=re.sub(r'\*', '', s)
    s=re.sub(r'^\s*In Planung\s+', '', s, flags=re.I)
    # m/w/d in allen Varianten, mit und ohne Klammern
    s=re.sub(r'\(?\s*\b[mwdfx]\s*[/|]\s*[mwdfx]\s*(?:[/|]\s*[mwdfx]\s*)?\)?', ' ', s, flags=re.I)
    # Klammer-Zusätze mit Ballast
    s=re.sub(r'\s*\([^)]*(Start|Deutschlandweit|IHK|Jahre|TN|Abitur|Standort|Mittlere Reife|'
             rf'{MONTHS}|\d{{4}})[^)]*\)', '', s, flags=re.I)
    # Datums-/Jahresangaben
    s=re.sub(rf'\b(ab|zum|zur|start|beginn|studienbeginn|ausbildungsbeginn)\s*:?\s*'
             rf'(\d{{1,2}}\.\s*)?(\d{{1,2}}\.|{MONTHS})\s*\d{{2,4}}', ' ', s, flags=re.I)
    s=re.sub(r'\b\d{1,2}\.\d{1,2}\.\d{2,4}\b', ' ', s)
    s=re.sub(rf'\b({MONTHS})\s+\d{{4}}\b', ' ', s, flags=re.I)
    s=re.sub(r'\b20(2[4-9]|3[0-9])\b', ' ', s)
    s=re.sub(r'\bID:\s*\d+', ' ', s, flags=re.I)
    s=re.sub(r'\s+bei\s+(Notar|Herrn?|Frau)\b.*$', '', s, flags=re.I)
    # Marketing-Präfix vor ':' entfernen, wenn danach der eigentliche Titel folgt
    s=re.sub(r'^[^:]{0,60}:\s*(?=(Schulische\s+)?(Ausbildung|Duales?\s+Studium|Werde|werde))', '', s, flags=re.I)
    # Segmente: Ballast-Segmente verwerfen, Kern-Segment finden
    parts=[p.strip() for p in re.split(r'\s+[-–]\s+|\s+\|\s+|\s+//\s+', s) if p.strip()]
    # Ballast nur verwerfen, wenn das Segment KEINEN Berufsbezug hat
    parts=[p for p in parts if not re.match(r'^\d+[-\s]?jährig', p, flags=re.I)]
    keep=[p for p in parts if BERUF.search(p) or not (
              DROP_SEG.search(p)
              or re.match(r'^(in|bei|für|am|Werk|Agentur|Standort|Beste|Neu|Jetzt)\b', p, flags=re.I)
              or re.match(r'^[A-ZÄÖÜ][\wäöüß.-]*(\s+[A-ZÄÖÜ][\wäöüß.-]*){0,2}$', p))]
    if not keep: keep=parts[:1]
    core=next((i for i,p in enumerate(keep) if BERUF.search(p)), 0)
    keep=keep[core:]
    s=' - '.join(keep)
    s=re.sub(r'^(Ausbildung|AUSBILDUNG|Duales Studium)\s+-\s+', r'\1 ', s)   # "Ausbildung - Koch"
    s=re.sub(r'\s+:\s+', ' ', s)
    s=re.sub(r'\s+-FH-?\b', ' (FH)', s)
    s=re.sub(r'\bStart\s+(?=\()', '', s, flags=re.I)
    # Orts-/Restsuffixe
    s=re.sub(r'\s+in\s+\d{5}\s+[\w\s\-äöüÄÖÜß]+$', '', s)
    s=re.sub(r'\s+in\s+(der\s+Filiale|der\s+Agentur|Nürtingen-Zentrum)\b.*$', '', s, flags=re.I)
    s=re.sub(r'\s*[,–-]\s*(Werk|Standort)\b.*$', '', s, flags=re.I)
    s=re.sub(r'\s+für\s+den\s+Raum\s+[\wäöüß-]+\s*$', '', s, flags=re.I)
    # "... in <Ort>" entfernen, aber Fachgebiete ("in Maschinenbau") behalten
    FACH=re.compile(r'(bau|technik|wesen|management|wirtschaft|kunde|informatik|recht|'
                    r'pflege|logistik|design|analytik)$', re.I)
    mo=re.search(r'\s+in\s+([A-ZÄÖÜ][\wäöüß-]*)\s*$', s)
    if mo and not FACH.search(mo.group(1)):
        s=s[:mo.start()]
    # ", <Ort/Firma>" am Ende (aber "Schwerpunkt ..." o.ä. behalten)
    m=re.search(r',\s+([A-ZÄÖÜ][\wäöüß.&-]*(?:\s+[A-ZÄÖÜ][\wäöüß.&-]*){0,3})\s*$', s)
    if m and not BERUF.search(m.group(1)) and not re.match(r'(Schwerpunkt|Fachrichtung)', m.group(1), re.I):
        s=s[:m.start()]
    s=re.sub(r'\s+Agentur\s+[A-ZÄÖÜ][\wäöüß-]*\s*$', '', s)
    s=re.sub(r'\s+/-', '/-', s)                       # "Finanzwirt /-in" -> "Finanzwirt/-in"
    s=re.sub(r'\(FH\)-', '(FH)', s)
    s=re.sub(r'(?<=\w)\s+-\s+(?=\w)', ' / ', s) if s.count(' - ')==1 and re.search(
        r'(frau|mann)\s+-\s+(Pflegefach|Kauf)', s) else s
    # ALL-CAPS-Wörter lesbar machen (Abkürzungen ausgenommen)
    ABBR={'IHK','FH','FOM','AOK','SOFA','PTA','MTA','STAR','IBAIT','DHBW','LL.B.','B.A.','B.SC.',
          'SHK','EDV','IT','KFZ','ABB','SAP','DFS','DRV','LKW','BD','TU','NRW',
          'LL.B','B.SC','B.A','M.A','LLB','BSC','GFA','RWS','EAM','KIND','OVAG','NAT'}
    SMALL={'UND','ODER','FÜR','IM','IN','MIT','ZUM','ZUR','DER','DIE','DAS','VON','ALS'}
    def fixcaps(w):
        core=w.strip('()[]/,.:;-')
        if not w.isupper(): return w
        if core.upper() in ABBR: return w
        if w in SMALL or core.upper() in SMALL: return w.lower()
        if len(core)<=3: return w
        return w.capitalize()
    if sum(c.isupper() for c in s)>0.6*sum(c.isalpha() for c in s):
        s=' '.join(fixcaps(w) for w in s.split(' '))
    else:
        s=' '.join(fixcaps(w) if (w.isupper() and len(w.strip('()')) >3) else w for w in s.split(' '))
    s=re.sub(r'\s*\(\s*\)', '', s)
    s=re.sub(r'[„“"”]', "'", s)
    s=re.sub(r"\s+,", ",", s)
    s=re.sub(r"\s*,\s*$", "", s)
    s=re.sub(r'\s{2,}', ' ', s).strip(' -–,|:;!')
    for _ in range(4):                       # Rest-Füllwörter am Ende abräumen
        new=TRAIL.sub('', s).strip(' -–,|:;!')
        if new==s: break
        s=new
    if s and s[0].islower(): s=s[0].upper()+s[1:]
    if len(s)>78 and ' - ' in s:
        s=s.split(' - ')[0].strip()
    return s

# ---------- Hook (Branche) ----------
def hook(stelle):
    s=(stelle or '').lower()
    def has(*w): return any(x in s for x in w)
    # öffentlicher Dienst zuerst (Fallen: sozial-/rentenversicherung, rechtspfleger)
    if has('sozialversicherung','rentenversicherung','verwaltungsfachangestell','verwaltungswirt',
           'public management','public administration','justiz','rechtspfleger','beamt','finanzwirt',
           'feuerwehr','notarfachangestell','notariat','bäderbetrieb','verwaltung','sozialrecht'):
        return 'der Ausbildungen im öffentlichen Dienst'
    if has('bank','sparkasse','versicherung','finanzanlagen','banking','finance','zentralbank'):
        return 'der Bank- und Versicherungsausbildungen'
    if has('pflege','heilerziehung','altenpflege','gesundheits- und krankenpflege','hebamme',
           'ergotherapeut','physiotherapeut','logopäd','masseur','medizinische techno','pharmazeutisch',
           'pta','mta','hörakustik','krankenpflege','pflegeassistenz','pflegefach'):
        return 'der Gesundheits- und Sozialausbildungen'
    if has('sport','fitness','gymnastik'):
        return 'der Sport- und Gesundheitsbranche'
    if has('medientechnolog'):
        return 'der gewerblich-technischen Ausbildung'
    if has('informatik','it-','fachinformatik','application management','wirtschaftsinformatik','digital'):
        return 'IT und Digitalisierung'
    if has('elektroniker','elektrotechnik','elektroanlagen'):
        return 'Elektrotechnik'
    if has('anlagenmechaniker für sanitär','sanitär','heizungs','klimatechnik','kältetechnik',
           'bauingenieur','baugeräteführer','gärtner','isolier','beschichtung','gebäudereiniger',
           'rohrsystem','bau ','maurer','zimmerer','asphalt','straßenbau','textilreiniger'):
        return 'Bau und Handwerk'
    if has('mechatronik','mechatroniker','industriemechaniker','werkzeugmechaniker','verfahrensmechaniker',
           'maschinen- und anlagenführer','zerspanung','kfz','fahrzeuglackierer','chemikant',
           'produktionsfachkraft','packmitteltechnolog','umwelttechnolog','maschinenbau','technolog'):
        return 'der gewerblich-technischen Ausbildung'
    if has('lagerlogistik','spedition','logistik','lkw','lager'):
        return 'Logistik'
    if has('koch','köchin','bäcker','lebensmittel','gastronomie','hotel'):
        return 'Gastronomie und Lebensmittel'
    if has('dialogmarketing','marketing','medien','gestalter'):
        return 'Marketing und Medien'
    if has('kaufmann','kauffrau','kaufleute','büromanagement','steuerfach','einzelhandel',
           'verkäufer','industriekaufmann','personaldienstleistung','groß- und außenhandel',
           'automobilkaufmann','immobilien','einrichtungsberater'):
        return 'der kaufmännischen Ausbildung'
    return 'der dualen Ausbildung'

# ---------- Body ----------
def build_html(vorname_line, stelle, hk):
    st=html.escape(stelle)
    return (
f"<p>{html.escape(vorname_line)}</p>"
f"<p>ich habe eure Ausschreibung für <b>{st}</b> auf Ausbildung.de gesehen – und euch direkt ein "
f"weiteres individuelles Beispiel gestaltet. So könnte eine E-Mail-Marketing-Platzierung gegenüber "
f"Schülern aussehen:</p>"
f"<p>(hier Bild einfügen)</p>"
f"<p><b>Die Idee dahinter:</b><br>Wir verfügen über das größte Young-Talent-Netzwerk aus Schülern und "
f"Studierenden in Deutschland mit über 250.000 angemeldeten Nutzern.</p>"
f"<p>Diese könnt ihr direkt und digital mit unseren Standalone-Mailings erreichen. Hierbei erzielen "
f"unsere Mailings in der Regel eine sehr gute Performance mit Öffnungsraten von 55 % und Klickraten "
f"von 6 %.</p>"
f'<p><a href="{INFO_URL}">Hier weitere Infos!</a></p>'
f"<p>Zusätzlich könnt ihr eure Zielgruppe frei anhand von Kriterien wie Regionen, Interesse, "
f"Zukunftsplanung etc. bestimmen, damit sichergestellt ist, dass auch nur für euch spannende "
f"Kandidaten euer Mailing erhalten. Damit eignen sich unsere Mailings perfekt für euch im "
f"Employer Branding und Personalmarketing.</p>"
f"<p><b>Wusstest du schon?</b><br>Wir haben Zugriff auf die Schul- und Unipostfächer der jungen Leute. "
f"Hierbei handelt es sich um weitestgehend werbefreie Postfächer. Dadurch stellen wir sicher, dass "
f"eure Werbung nicht untergeht und unsere Performance derart stark ausfällt.</p>"
f"<p>Gerade im Bereich {html.escape(hk)} haben wir in der Vergangenheit mit anderen Kunden bereits "
f"sehr gute Ergebnisse erzielt.</p>"
f'<p>Gerne können wir uns einmal in einem 15-Minuten-Call hierzu austauschen – '
f'<a href="{CAL_URL}">hier direkt einen Termin wählen</a>.</p>'
f"<p>Mit besten Grüßen<br>Gabriel Hilbrig</p>"
f'<p>E-Mail: <a href="mailto:gabriel.hilbrig@notebuddys.de">gabriel.hilbrig@notebuddys.de</a><br>'
f"Telefon: +49 176 84894678</p>"
f"<p>Note Buddy’s GmbH<br>Dietkirchenstr. 70<br>53913 Swisttal<br>"
f'<a href="mailto:info@notebuddys.de">info@notebuddys.de</a><br>'
f'<a href="https://www.notebuddys.de">www.notebuddys.de</a></p>'
f"<p>Geschäftsführer: Niclas Weisl, Gabriel Hilbrig</p>"
f"<p>Amtsgericht Bonn<br>Reg. Nr. HRB: 25657</p>"
    )

def main():
    rows=list(csv.reader(open(SRC, encoding='utf-8-sig')))[1:]
    out=[]
    for i,r in enumerate(rows, start=1):
        stelle_raw=r[2].strip(); firma=re.sub(r'^bei\s+','',r[3].strip()).replace('`',"'")
        name=r[7].strip(); mail=r[8].strip()
        st=clean_stelle(stelle_raw)
        out.append(dict(
            n=i, firma=firma, to=mail, name=name,
            stelle_raw=stelle_raw, stelle=st, hook=hook(stelle_raw),
            subject=f'Beispielhaftes Mailing für eure Stelle „{st}“',
            htmlBody=build_html(anrede(name), st, hook(stelle_raw)),
        ))
    json.dump(out, open('drafts_spec.json','w'), ensure_ascii=False, indent=1)
    print('drafts_spec.json:', len(out))

if __name__=='__main__':
    main()
