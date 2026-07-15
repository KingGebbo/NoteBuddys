#!/usr/bin/env python3
import base64, sys, colorsys, os
from data import COMPANIES
from playwright.sync_api import sync_playwright

CHROME='/opt/pw-browsers/chromium-1194/chrome-linux/chrome'

def dataimg(path):
    b=open(path,'rb').read()
    ext='png' if path.lower().endswith('png') else 'jpeg'
    return f"data:image/{ext};base64,"+base64.b64encode(b).decode()

def mix(hex1, hex2, t):
    a=[int(hex1[i:i+2],16) for i in (1,3,5)]
    b=[int(hex2[i:i+2],16) for i in (1,3,5)]
    return '#%02x%02x%02x'%tuple(int(a[i]+(b[i]-a[i])*t) for i in range(3))

def readable_on(bg):
    r,g,b=[int(bg[i:i+2],16)/255 for i in (1,3,5)]
    return '#ffffff' if (0.299*r+0.587*g+0.114*b) < 0.6 else '#1a1a1a'

def build_html(c):
    logo=dataimg(c['logo'])
    primary=c['primary']
    cta=c.get('cta_color', primary)
    cta_ink=readable_on(cta)
    soft=c['accent_soft']
    hdr_bg=c['header_bg']; hdr_ink=c['header_ink']
    ink=c['ink']
    hfont=c['headline_font']
    # benefit rows
    checks=''.join(
        f'''<tr><td style="vertical-align:top;padding:7px 12px 7px 0;width:26px">
        <span style="display:inline-block;width:22px;height:22px;border-radius:50%;background:{primary};color:{readable_on(primary)};
        text-align:center;line-height:22px;font-size:13px;font-weight:700">&#10003;</span></td>
        <td style="vertical-align:middle;padding:7px 0;font-size:15.5px;color:{ink};line-height:1.35">{b}</td></tr>'''
        for b in c['benefits'])
    # pay block (optional)
    pay_html=''
    if c.get('pay'):
        p=c['pay']
        cells=''.join(
            f'''<td style="text-align:center;padding:14px 6px;background:{soft};border-radius:10px">
            <div style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:{mix(ink,'#ffffff',0.35)};font-weight:700">{lbl}</div>
            <div style="font-size:20px;font-weight:800;color:{primary};margin-top:4px">{val}</div></td>'''
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
      <!-- preheader / kicker bar -->
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="background:{hdr_bg};padding:22px 34px;border-bottom:1px solid {mix(hdr_bg,'#000000',0.08) if hdr_bg!='#111111' else '#222'}">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle"><img src="{logo}" style="height:52px;display:block"></td>
            <td style="vertical-align:middle;text-align:right;font-size:12px;letter-spacing:.16em;font-weight:700;color:{hdr_ink}">AUSBILDUNG 2026</td>
          </tr></table>
        </td>
      </tr>

      <!-- hero -->
      <tr><td style="padding:40px 34px 30px 34px;background:#ffffff">
        <div style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:{primary};margin-bottom:16px">{c['tagline']}</div>
        <div style="font-family:{hfont};font-size:40px;line-height:1.08;font-weight:700;color:{ink};letter-spacing:-.01em">{c['headline']}</div>
        <div style="width:54px;height:4px;background:{primary};border-radius:2px;margin:22px 0"></div>
        <div style="font-size:17px;line-height:1.5;color:{mix(ink,'#ffffff',0.18)};max-width:520px">{c['subline']}</div>
      </td></tr>

      <!-- role chip + apply -->
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

      <!-- benefits -->
      <tr><td style="padding:8px 34px 6px 34px">
        <div style="font-family:{hfont};font-size:24px;font-weight:700;color:{ink};margin-bottom:6px">Darauf kannst du dich freuen</div>
        <table width="100%" cellpadding="0" cellspacing="0">{checks}</table>
      </td></tr>

      {pay_html}

      <!-- why us -->
      <tr><td style="padding:26px 34px 6px 34px">
        <div style="font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:{primary};margin-bottom:10px">Warum {c['firma']}?</div>
        <div style="font-size:15.5px;line-height:1.6;color:{mix(ink,'#ffffff',0.12)}">{c['intro']}</div>
      </td></tr>

      <!-- CTA band -->
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

      <!-- footer -->
      <tr><td style="padding:6px 34px 34px 34px">
        <div style="border-top:1px solid #ececec;padding-top:18px;font-size:12px;line-height:1.6;color:#9a9a9a">
          {c['firma_full']} &nbsp;·&nbsp; {c['role']}<br>
          Du erhältst diese Nachricht, weil du dich für eine Ausbildung interessierst. Kein Interesse mehr? Hier abmelden.
        </div>
      </td></tr>
      </table>
    </div>
    </body></html>'''
    return html

def render(n):
    c=COMPANIES[n]
    html=build_html(c)
    slug=c['firma'].replace(' ','-').replace('/','-').replace("'",'').replace('’','')
    base=f"Mailing-{n:02d}-{slug}"
    with sync_playwright() as p:
        b=p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
        pg=b.new_page(device_scale_factor=2)
        pg.set_viewport_size({'width':680,'height':1200})
        pg.set_content(html, wait_until='networkidle')
        h=pg.evaluate("Math.ceil(document.querySelector('.email').getBoundingClientRect().height)")
        # PNG preview (full email on light bg)
        pg.set_viewport_size({'width':680,'height':h+40})
        pg.screenshot(path=f"{base}.png", full_page=True)
        # PDF sized exactly to the 640px email
        pg.pdf(path=f"{base}.pdf", width='640px', height=f'{h}px',
               print_background=True, margin={'top':'0','bottom':'0','left':'0','right':'0'})
        b.close()
    print(f"{n} -> {base}.pdf  (h={h})")
    return base

if __name__=='__main__':
    ns=[int(x) for x in sys.argv[1:]] or list(range(1,6))
    for n in ns: render(n)
