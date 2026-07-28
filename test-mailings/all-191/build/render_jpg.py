#!/usr/bin/env python3
"""Rendert alle 191 Mailings als JPG (zum Einbetten in die E-Mail).
Breite 1280 px (2x von 640 px Mailbreite) -> scharf auf Retina, im Client auf 640 skaliert."""
import json, os, sys, re
import render_all as R
from playwright.sync_api import sync_playwright
from PIL import Image

OUT='jpg'; os.makedirs(OUT, exist_ok=True)
QUALITY=88

def main():
    base={r['n']:r for r in json.load(open('base.json'))}
    research={int(k):v for k,v in json.load(open('research.json')).items()}
    ns=[int(x) for x in sys.argv[1:]] or list(range(1,192))
    with sync_playwright() as p:
        b=p.chromium.launch(executable_path=R.CHROME, args=['--no-sandbox'])
        pg=b.new_page(device_scale_factor=2)          # 640 css px -> 1280 device px
        for n in ns:
            c=R.resolve(base[n], research)
            html=R.build_html(c)
            name=f"Mailing-{n:03d}-{R.slug(c['firma'])}"
            pg.set_viewport_size({'width':640,'height':1200})
            pg.set_content(html, wait_until='networkidle')
            el=pg.query_selector('.email')            # nur die Mail-Box, kein grauer Rand
            png=f"{OUT}/{name}.png"
            el.screenshot(path=png)
            im=Image.open(png).convert('RGB')         # JPEG kann kein Alpha
            im.save(f"{OUT}/{name}.jpg", 'JPEG', quality=QUALITY, optimize=True, progressive=True)
            os.remove(png)
            print(f"{n:3d} -> {name}.jpg  {im.size[0]}x{im.size[1]}", flush=True)
        b.close()

if __name__=='__main__':
    main()
