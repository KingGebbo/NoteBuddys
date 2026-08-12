#!/usr/bin/env python3
"""Kurzes Standalone-Mailing für die Nassauische Sparkasse (Naspa).
Alle Fakten von naspa.de (Karriere/Ausbildung) + ausbildung.de-Unternehmensprofil.
CI-Rot #ee0000 stammt direkt aus dem offiziellen Naspa-Logo-SVG."""
import os
import render_all as R
from playwright.sync_api import sync_playwright
from PIL import Image

NASPA = dict(
    _n=900,
    year='2027',
    logo='naspa/logo_naspa_trim.png',
    primary='#ee0000',                 # aus logo_rot.svg (fill="#ee0000")
    ink='#1f1f1f',
    header_bg='#ffffff',
    header_ink='#ee0000',
    accent_soft='#fdeceb',
    headline_font="'Helvetica Neue', Arial, sans-serif",
    firma='Naspa',
    firma_full='Nassauische Sparkasse',
    role='Ausbildung Bankkaufmann/-frau',
    start='1. August 2027',
    ort='Wiesbaden, Frankfurt & Region',
    apply_url='https://www.naspa.de/de/home/ihre-naspa/karriere-ausbildung/ausbildung.html',
    salut='Marie',
    hook='du magst den Umgang mit Menschen und willst einen Beruf lernen, in dem es um '
         'echte Lebensentscheidungen geht – vom ersten Konto bis zur eigenen Immobilie? '
         'Dann passt du zu uns.',
    tagline='Deine Ausbildung bei der Naspa',
    headline='Nah dran.<br>An Menschen und Zahlen.',
    subline='Berate Kundinnen und Kunden, lerne unsere Finanz-, Baufinanzierungs- und '
            'Private-Banking-Center kennen – und finde deinen Bereich.',
    benefits=[
        '1.496 – 1.620 € Vergütung plus Sparkassensonderzahlung im November',
        '30 Tage Urlaub + 2 Bankfeiertage (24.12. und 31.12.)',
        'Persönliches iPad und 40 € vermögenswirksame Leistungen im Monat',
        'EGYM Wellpass, Betriebssport und Zuschuss zum ÖPNV-Ticket',
        'Sehr gute Übernahmechancen und viele Weiterbildungswege',
    ],
    pay=('1.496 €', '1.558 €', '1.620 €'),
    intro='Die Naspa ist seit 1840 die Sparkasse für die Region zwischen Wiesbaden, Frankfurt '
          'und dem Westerwald – mit 1.590 Mitarbeitenden und 109 Finanzcentern. Rund 50 junge '
          'Menschen starten hier jedes Jahr ihre Ausbildung, begleitet als ausgezeichneter '
          'Ausbildungsbetrieb.',
    signoff='Wir freuen uns darauf, dich kennenzulernen.<br>'
            '<strong>Dein Ausbildungsteam der Naspa</strong>',
)

def main():
    html=R.build_html(NASPA)
    base='Mailing-Naspa-Nassauische-Sparkasse'
    with sync_playwright() as p:
        b=p.chromium.launch(executable_path=R.CHROME, args=['--no-sandbox'])
        pg=b.new_page(device_scale_factor=2)
        pg.set_viewport_size({'width':640,'height':1200})
        pg.set_content(html, wait_until='networkidle')
        h=pg.evaluate("Math.ceil(document.querySelector('.email').getBoundingClientRect().height)")
        pg.pdf(path=f'{base}.pdf', width='640px', height=f'{h}px', print_background=True,
               margin={'top':'0','bottom':'0','left':'0','right':'0'})
        el=pg.query_selector('.email')
        el.screenshot(path=f'{base}.png')
        b.close()
    im=Image.open(f'{base}.png').convert('RGB')
    im.save(f'{base}.jpg','JPEG',quality=88,optimize=True,progressive=True)
    small=im.resize((640, round(im.height*640/im.width)), Image.LANCZOS)
    small.save(f'{base}-640px.jpg','JPEG',quality=84,optimize=True,progressive=True)
    print(f'{base}: hoehe={h}px, jpg={im.size}, 640px={small.size}')

if __name__=='__main__':
    main()
