#!/usr/bin/env python3
"""Mailing-Beispiel für GÖRG Partnerschaft von Rechtsanwälten mbB.
Alle Fakten von goerg.de (Karriere → Ausbildung) + GÖRG-Profil auf ausbildung.de.
CI-Grau #5d686d stammt direkt aus dem offiziellen GÖRG-Logo-SVG (logo_de.svg)."""
import render_all as R
from playwright.sync_api import sync_playwright
from PIL import Image

GOERG = dict(
    _n=901,
    year='2027',
    logo='goerg/logo_block.png',
    logo_h=60,                          # quadratisches Markenzeichen -> etwas größer
    primary='#5d686d',                  # aus logo_de.svg (fill="#5d686d")
    ink='#23292b',
    header_bg='#ffffff',
    header_ink='#5d686d',
    accent_soft='#eff1f2',
    headline_font=R.SERIF,              # Kanzlei: seriös, Serif
    firma='GÖRG',
    firma_full='GÖRG Partnerschaft von Rechtsanwälten mbB',
    role='Ausbildung Rechtsanwaltsfachangestellte (m/w/d)',
    start='August/September 2027',
    ort='Köln, Berlin, Frankfurt, Hamburg & München',
    apply_url='https://www.goerg.de/de/karriere/assistenz-business-services/ausbildung',
    salut='Alina',
    hook='interessierst du dich für Recht und arbeitest gern strukturiert mit Menschen '
         'zusammen? Dann lern eine Wirtschaftskanzlei von innen kennen – vom ersten Tag an '
         'mitten im Geschehen.',
    tagline='Ausbildung bei GÖRG',
    headline='Recht braucht<br>Menschen wie dich.',
    subline='Als Rechtsanwaltsfachangestellte:r hältst du den Kanzleialltag zusammen – '
            'von der Mandatsakte über Fristen bis zur Kommunikation mit Gerichten.',
    benefits=[
        'Überdurchschnittliche Vergütung',
        'Deutschlandticket – von uns übernommen',
        '300 € steuerfreie Shopping-Karte pro Jahr nach der Probezeit',
        '40 € monatlich für deinen Sparplan',
        'Urban Sports Club und moderne Büros in zentraler Lage',
        'Intensive Betreuung, Prüfungsvorbereitung und Englischkurse',
    ],
    pay=None,                           # konkrete Beträge sind nicht veröffentlicht
    intro='GÖRG ist eine der großen deutschen Wirtschaftskanzleien – 1996 gegründet, rund '
          '1.000 Mitarbeitende an fünf Standorten und führend im Insolvenz- und '
          'Sanierungsrecht. In der Ausbildung durchläufst du die vielfältigen Rechtsgebiete '
          'und internen Abteilungen der Kanzlei, begleitet von Ausbildungsbeauftragten vor Ort.',
    signoff='Wir freuen uns auf deine Bewerbung.<br>'
            '<strong>Dein Ausbildungsteam von GÖRG</strong>',
)

def main():
    html=R.build_html(GOERG)
    base='Mailing-GOERG-Wirtschaftskanzlei'
    with sync_playwright() as p:
        b=p.chromium.launch(executable_path=R.CHROME, args=['--no-sandbox'])
        pg=b.new_page(device_scale_factor=2)
        pg.set_viewport_size({'width':640,'height':1200})
        pg.set_content(html, wait_until='networkidle')
        h=pg.evaluate("Math.ceil(document.querySelector('.email').getBoundingClientRect().height)")
        pg.pdf(path=f'{base}.pdf', width='640px', height=f'{h}px', print_background=True,
               margin={'top':'0','bottom':'0','left':'0','right':'0'})
        pg.query_selector('.email').screenshot(path=f'{base}.png')
        b.close()
    im=Image.open(f'{base}.png').convert('RGB')
    im.save(f'{base}.jpg','JPEG',quality=88,optimize=True,progressive=True)
    im.resize((640, round(im.height*640/im.width)), Image.LANCZOS).save(
        f'{base}-640px.jpg','JPEG',quality=84,optimize=True,progressive=True)
    print(f'{base}: hoehe={h}px, jpg={im.size}')

if __name__=='__main__':
    main()
