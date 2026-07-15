#!/usr/bin/env python3
"""Phase C: resolve all 191 records and render PDFs + PNGs with the identical template."""
import base64, sys, json, re, os
from playwright.sync_api import sync_playwright
from data import COMPANIES, PERSONAL   # approved 1-5

CHROME='/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
OUT='out'; os.makedirs(OUT, exist_ok=True)

SERIF="Georgia, 'Times New Roman', serif"
SANS="'Helvetica Neue', Arial, sans-serif"

# hand overrides after visual QA of logo colors (n -> dict of field overrides)
OVERRIDES = {}

def dataimg(path):
    b=open(path,'rb').read()
    ext='png' if path.lower().endswith('png') else 'jpeg'
    return f"data:image/{ext};base64,"+base64.b64encode(b).decode()
def mix(h1,h2,t):
    a=[int(h1[i:i+2],16) for i in (1,3,5)]; b=[int(h2[i:i+2],16) for i in (1,3,5)]
    return '#%02x%02x%02x'%tuple(int(a[i]+(b[i]-a[i])*t) for i in range(3))
def readable_on(bg):
    r,g,b=[int(bg[i:i+2],16)/255 for i in (1,3,5)]
    return '#ffffff' if (0.299*r+0.587*g+0.114*b)<0.6 else '#1a1a1a'
def lum(h):
    r,g,b=[int(h[i:i+2],16)/255 for i in (1,3,5)]; return 0.299*r+0.587*g+0.114*b
def on_white(h, target=0.46):
    """Darken a brand colour just enough to be readable as text on white (keeps hue)."""
    while lum(h)>target:
        h=mix(h,'#000000',0.12)
    return h

def clean_role(raw):
    s=raw or ''
    s=re.sub(r'[\U0001F000-\U0001FAFF☀-➿⬀-⯿️‍⚐-⚟]',' ',s)
    s=re.sub(r'\s*\(Start:[^)]*\)','',s)
    s=re.sub(r'\s*ab\s+\d{1,2}\.\d{1,2}\.\d{4}','',s)
    s=re.sub(r'\s*\d{1,2}\.\d{1,2}\.\d{4}','',s)
    s=re.sub(r'\s*-\s*ID:\s*\d+','',s, flags=re.I)
    s=re.sub(r'\s*\(Deutschlandweit\)','',s, flags=re.I)
    s=re.sub(r'\s*(zum|ab)\s+01\.\d\d\.\d{4}','',s, flags=re.I)
    # keep program markers; otherwise strip an "Ausbildung ..." lead-in so the chip = profession
    if not re.match(r'^\s*(Duales?\s+Studium|Duale\s+Ausbildung|Bachelor|DHBW|BA-Student|Master)', s, flags=re.I):
        s=re.sub(r'^\s*In Planung\s+','',s, flags=re.I)
        s=re.sub(r'^\s*AUSBILDUNG\s*\d{4}\s*[-–:]\s*','',s, flags=re.I)
        s=re.sub(r'^\s*Ausbildung\s*\d{4}\s*[-–:]\s*','',s, flags=re.I)
        s=re.sub(r'^\s*Ausbildung\s*:\s*','',s, flags=re.I)
        s=re.sub(r'^\s*(Ausbildung|Auszubildende[rn]?|Azubi)\s+(zum/zur|zum/r|zur/zum|zur/m|zum|zur|als|r)\s+','',s, flags=re.I)
        s=re.sub(r'^\s*(Ausbildung|Auszubildende[rn]?|Azubi)\s+','',s, flags=re.I)
    s=re.sub(r'\bzum/zur\b','',s)               # dangling article after strip
    s=re.sub(r'\s+in\s+\d{5}\s+.*$','',s)        # trailing "in 89423 City..."
    s=re.sub(r'\s*[-–]\s*Region\b.*$','',s, flags=re.I)
    s=re.sub(r'\s*[-–]\s*Start\s*$','',s, flags=re.I)
    s=re.sub(r'\bf(ü|ue)r\s+20\d{2}\b','',s)
    s=re.sub(r'\b20(2[4-9]|30)\b','',s)          # stray years
    s=re.sub(r'\s*[-–]\s*Start\s*$','',s, flags=re.I)
    s=re.sub(r'\(\s*\)','',s)
    s=re.sub(r'\s*[-–]\s*$','',s)
    s=re.sub(r'\s{2,}',' ',s)
    return s.strip(' -–,|')

def resolve(base, research):
    n=base['n']
    if n in COMPANIES:  # approved 1-5, verbatim
        c=dict(COMPANIES[n]); p=PERSONAL[n]
        c['_n']=n; c['salut']=p['salut']; c['hook']=p['hook']; c['signoff']=p['signoff']
        return c
    r=research[n]
    primary=base['primary']
    header_dark=base.get('header_dark',False)
    header_bg=base.get('header_bg','#ffffff')
    rec=dict(
        _n=n, logo=base['logo'], primary=primary,
        header_bg=header_bg,
        header_ink=('#ffffff' if header_dark else primary),
        ink=mix(primary,'#1a1a1a',0.88),
        accent_soft=mix(primary,'#ffffff',0.90),
        headline_font=(SERIF if r.get('style')=='serif' else SANS),
        firma=base['firma'], firma_full=base['firma_full'],
        role=clean_role(base.get('role_raw') or base.get('role')),
        start=base['start'], ort=base['ort'], apply_url=base['apply_url'],
        tagline=r['tagline'], headline=r['headline'], subline=r['subline'],
        intro=r['intro'], benefits=r['benefits'], pay=r.get('pay'),
        salut=r['salut'], hook=r['hook'], signoff=r['signoff'],
    )
    if n in OVERRIDES: rec.update(OVERRIDES[n])
    return rec

def build_html(c):
    logo=dataimg(c['logo']); primary=c['primary']
    legacy=c.get('_n',0) in (1,2,3,4,5)   # approved batch stays pixel-identical
    bt=primary if legacy else on_white(primary)   # brand colour safe as text on white
    cta=c.get('cta_color', primary); cta_ink=readable_on(cta)
    soft=c['accent_soft']; hdr_bg=c['header_bg']
    hdr_ink=c['header_ink'] if legacy else ('#ffffff' if readable_on(hdr_bg)=='#ffffff' else bt)
    ink=c['ink']; hfont=c['headline_font']
    checks=''.join(
        f'''<tr><td style="vertical-align:top;padding:7px 12px 7px 0;width:26px">
        <span style="display:inline-block;width:22px;height:22px;border-radius:50%;background:{primary};color:{readable_on(primary)};
        text-align:center;line-height:22px;font-size:13px;font-weight:700">&#10003;</span></td>
        <td style="vertical-align:middle;padding:7px 0;font-size:15.5px;color:{ink};line-height:1.35">{b}</td></tr>'''
        for b in c['benefits'])
    pay_html=''
    if c.get('pay'):
        p=c['pay']
        cells=''.join(
            f'''<td style="text-align:center;padding:14px 6px;background:{soft};border-radius:10px">
            <div style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:{mix(ink,'#ffffff',0.35)};font-weight:700">{lbl}</div>
            <div style="font-size:20px;font-weight:800;color:{bt};margin-top:4px">{val}</div></td>'''
            for lbl,val in zip(['1. Jahr','2. Jahr','3. Jahr'],p))
        pay_html=f'''<tr><td style="padding:6px 34px 0 34px">
          <div style="font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:{ink};margin-bottom:10px">Deine Vergütung</div>
          <table width="100%" cellpadding="0" cellspacing="8" style="border-collapse:separate"><tr>{cells}</tr></table></td></tr>'''
    html=f'''<!doctype html><html><head><meta charset="utf-8"><style>
    *{{margin:0;padding:0;box-sizing:border-box}}
    body{{background:#e9e9ea;font-family:'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased}}
    .email{{width:640px;margin:0 auto;background:#ffffff}}
    </style></head><body>
    <div class="email">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="background:{hdr_bg};padding:22px 34px;border-bottom:1px solid {mix(hdr_bg,'#000000',0.08) if not readable_on(hdr_bg)=='#ffffff' else '#222'}">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle"><img src="{logo}" style="height:52px;display:block"></td>
            <td style="vertical-align:middle;text-align:right;font-size:12px;letter-spacing:.16em;font-weight:700;color:{hdr_ink}">AUSBILDUNG 2026</td>
          </tr></table>
        </td>
      </tr>
      <tr><td style="padding:34px 34px 6px 34px;background:#ffffff">
        <div style="font-size:16.5px;line-height:1.6;color:{ink}">
          <div style="margin-bottom:12px">Liebe/r <strong>{c['salut']}</strong>,</div>
          <div>{c['hook']}</div>
        </div>
      </td></tr>
      <tr><td style="padding:26px 34px 30px 34px;background:#ffffff">
        <div style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:{bt};margin-bottom:16px">{c['tagline']}</div>
        <div style="font-family:{hfont};font-size:40px;line-height:1.08;font-weight:700;color:{ink};letter-spacing:-.01em">{c['headline']}</div>
        <div style="width:54px;height:4px;background:{primary};border-radius:2px;margin:22px 0"></div>
        <div style="font-size:17px;line-height:1.5;color:{mix(ink,'#ffffff',0.18)};max-width:520px">{c['subline']}</div>
      </td></tr>
      <tr><td style="padding:0 34px 30px 34px">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:{soft};border-radius:14px"><tr>
          <td style="padding:20px 22px;vertical-align:middle">
            <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:{mix(ink,'#ffffff',0.4)};font-weight:700;margin-bottom:4px">Ausbildungsplatz</div>
            <div style="font-size:16.5px;font-weight:700;color:{ink};line-height:1.3">{c['role']}</div>
            <div style="font-size:13.5px;color:{mix(ink,'#ffffff',0.3)};margin-top:6px">Start: {c['start']} &nbsp;·&nbsp; {c['ort']}</div>
          </td>
          <td style="padding:20px 22px;vertical-align:middle;text-align:right;white-space:nowrap">
            <a href="{c['apply_url']}" style="display:inline-block;background:{cta};color:{cta_ink};text-decoration:none;
            font-size:15px;font-weight:700;padding:14px 26px;border-radius:9px">Jetzt bewerben &rarr;</a>
          </td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:8px 34px 6px 34px">
        <div style="font-family:{hfont};font-size:24px;font-weight:700;color:{ink};margin-bottom:6px">Darauf kannst du dich freuen</div>
        <table width="100%" cellpadding="0" cellspacing="0">{checks}</table>
      </td></tr>
      {pay_html}
      <tr><td style="padding:26px 34px 6px 34px">
        <div style="font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:{bt};margin-bottom:10px">Warum {c['firma']}?</div>
        <div style="font-size:15.5px;line-height:1.6;color:{mix(ink,'#ffffff',0.12)}">{c['intro']}</div>
      </td></tr>
      <tr><td style="padding:30px 34px 34px 34px">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:{primary};border-radius:16px"><tr>
          <td style="padding:30px 30px;text-align:center">
            <div style="font-family:{hfont};font-size:22px;font-weight:700;color:{readable_on(primary)};margin-bottom:6px">Bereit für den ersten Schritt?</div>
            <div style="font-size:14.5px;color:{mix(readable_on(primary), primary, 0.18)};margin-bottom:20px">Bewirb dich jetzt – wir freuen uns auf dich.</div>
            <a href="{c['apply_url']}" style="display:inline-block;background:{cta if c.get('cta_color') else readable_on(primary)};
            color:{cta_ink if c.get('cta_color') else primary};text-decoration:none;font-size:15px;font-weight:800;
            padding:15px 34px;border-radius:9px">Jetzt bewerben</a>
            &nbsp;&nbsp;
            <a href="{c['apply_url']}" style="display:inline-block;color:{readable_on(primary)};text-decoration:none;font-size:15px;font-weight:600;
            padding:15px 8px;border-bottom:1px solid {mix(readable_on(primary),primary,0.5)}">Mehr Infos</a>
          </td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:4px 34px 20px 34px">
        <div style="font-size:15.5px;line-height:1.6;color:{ink}">{c['signoff']}</div>
      </td></tr>
      <tr><td style="padding:6px 34px 34px 34px">
        <div style="border-top:1px solid #ececec;padding-top:18px;font-size:12px;line-height:1.6;color:#9a9a9a">
          {c['firma_full']} &nbsp;·&nbsp; {c['role']}<br>
          Du erhältst diese Nachricht, weil du dich für eine Ausbildung interessierst. Kein Interesse mehr? Hier abmelden.
        </div>
      </td></tr>
      </table>
    </div></body></html>'''
    return html

def slug(s):
    s=re.sub(r'[^A-Za-z0-9]+','-',s).strip('-')
    return s[:40]

def main():
    base={r['n']:r for r in json.load(open('base.json'))}
    research={int(k):v for k,v in json.load(open('research.json')).items()} if os.path.exists('research.json') else {}
    ns=[int(x) for x in sys.argv[1:]] or list(range(1,192))
    with sync_playwright() as p:
        b=p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
        pg=b.new_page(device_scale_factor=2)
        for n in ns:
            c=resolve(base[n], research)
            html=build_html(c)
            name=f"Mailing-{n:03d}-{slug(c['firma'])}"
            pg.set_viewport_size({'width':680,'height':1200})
            pg.set_content(html, wait_until='networkidle')
            h=pg.evaluate("Math.ceil(document.querySelector('.email').getBoundingClientRect().height)")
            pg.pdf(path=f"{OUT}/{name}.pdf", width='640px', height=f'{h}px',
                   print_background=True, margin={'top':'0','bottom':'0','left':'0','right':'0'})
            print(f"{n:3d} -> {name}.pdf (h={h})", flush=True)
        b.close()

if __name__=='__main__':
    main()
