#!/usr/bin/env python3
"""Phase A: parse master_min5.csv -> base.json, download all logos, derive CI colors."""
import csv, json, re, os, ssl, urllib.request, colorsys
from concurrent.futures import ThreadPoolExecutor
import numpy as np
from PIL import Image

SRC='/root/.claude/uploads/3750de59-c412-5eba-a906-132f5cea232d/a5f9c072-master_min5.csv'
os.makedirs('logos', exist_ok=True)
CTX=ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')

MONTHS={1:'Januar',2:'Februar',3:'März',4:'April',5:'Mai',6:'Juni',7:'Juli',8:'August',9:'September',10:'Oktober',11:'November',12:'Dezember'}
def fmt_start(s):
    s=(s or '').strip()
    m=re.match(r'(\d{1,2})\.(\d{1,2})\.(\d{4})', s)
    if m:
        d,mo,y=int(m.group(1)),int(m.group(2)),int(m.group(3))
        if 1<=mo<=12: return f"{d}. {MONTHS[mo]} {y}"
    return s

def clean_firma(s):
    s=(s or '').strip()
    s=re.sub(r'^bei\s+', '', s)
    return s.replace('`',"'").strip()

def short_firma(full):
    f=clean_firma(full)
    # kurze Marke fürs Layout: Rechtsform-Suffixe weg
    f=re.sub(r'\s+(GmbH & Co\.?\s*KG(aA)?|GmbH & Co\.? OHG|B\.V\. & Co\.?\s*KG|SE & Co\.?\s*KG(aA)?|GmbH|mbH|AG & Co\.?\s*KGaA|AG|SE|KG|eG|e\.V\.|e\. V\.|KGaA|A/S & Co\.|Anstalt öffentlichen Rechts|Anstalt des öffentlichen Rechts|K\.d\.ö\.R\.|gGmbH|gemeinnützige Gesellschaft.*)$','',f).strip()
    f=re.sub(r'\s*[-–,]\s*$','',f).strip()
    return f or clean_firma(full)

def ort_from_factvalue(fv):
    fv=(fv or '').strip()
    m=re.match(r'\s*\d{4,5}\s+(.+?)(?:\s*\+\s*(\d+)\s+weitere)?\s*$', fv)
    if not m:
        return fv.split('+')[0].strip() or 'bundesweit'
    city=m.group(1).strip(); n=int(m.group(2)) if m.group(2) else 0
    if n>=20: return f"{city} & bundesweit"
    if n>=1: return f"{city} & weitere Standorte"
    return city

def role_clean(stelle):
    s=(stelle or '').strip()
    # Emojis / Sonderzeichen weg
    s=re.sub(r'[\U0001F000-\U0001FAFF☀-➿←-⇿⬀-⯿️‍⚓👷👨🔧♀]','',s).strip()
    s=re.sub(r'\s{2,}',' ',s)
    return s.strip(' -–,')

def load_logo(row):
    n,url=row
    try:
        req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
        data=urllib.request.urlopen(req,context=CTX,timeout=40).read()
        open(f'logos/logo_{n}.png','wb').write(data)
        return (n,True)
    except Exception as e:
        return (n,str(e))

# ---- colors ----
def _darken_if_light(rgb):
    r,g,b=[x/255 for x in rgb]; h,s,v=colorsys.rgb_to_hsv(r,g,b)
    if 0.299*r+0.587*g+0.114*b>0.62:
        v=min(v,0.72); s=min(1.0,s+0.15); r,g,b=colorsys.hsv_to_rgb(h,s,v)
    return (int(r*255),int(g*255),int(b*255))
def logo_color(path, fallback='#333333'):
    try: im=Image.open(path).convert('RGBA')
    except: return fallback,0
    a=np.array(im).astype(float); r,g,b,al=a[...,0],a[...,1],a[...,2],a[...,3]
    mx=np.maximum(np.maximum(r,g),b); mn=np.minimum(np.minimum(r,g),b)
    sat=(mx-mn)/(mx+1e-6); lum=(r+g+b)/3
    m=(al>140)&(sat>0.28)&(lum>20)&(lum<240)
    if m.sum()<25: return fallback,0
    px=a[m][:,:3]
    hsv=np.array([colorsys.rgb_to_hsv(*(p/255)) for p in px]); hues=hsv[:,0]*360; sats=hsv[:,1]
    bins=np.arange(0,361,20); idx=np.digitize(hues,bins)
    weights=np.array([sats[idx==k].sum() for k in range(1,len(bins))])
    dom=np.argmax(weights)+1; sel=px[idx==dom]
    if len(sel)<10: sel=px
    col=np.median(sel,axis=0); frac=weights[dom-1]/(weights.sum()+1e-6)
    return '#%02x%02x%02x'%_darken_if_light(tuple(int(c) for c in col)), round(float(frac),2)

def detect_dark_bg(path):
    """Median luminance of a border frame. Returns (is_dark, '#hex' bg)."""
    try: im=Image.open(path).convert('RGB')
    except: return False,'#ffffff'
    a=np.array(im).astype(float); H,W=a.shape[:2]
    b=max(2,min(H,W)//12)
    frame=np.concatenate([a[:b].reshape(-1,3),a[-b:].reshape(-1,3),a[:,:b].reshape(-1,3),a[:,-b:].reshape(-1,3)])
    med=np.median(frame,axis=0); lum=(0.299*med[0]+0.587*med[1]+0.114*med[2])/255
    if lum<0.32:
        return True,'#%02x%02x%02x'%tuple(int(x) for x in med)
    return False,'#ffffff'

def main():
    rows=list(csv.reader(open(SRC,encoding='utf-8-sig')))
    header=rows[0]; data=rows[1:]
    assert len(data)==191, f"expected 191, got {len(data)}"
    recs=[]
    logo_jobs=[]
    for i,r in enumerate(data, start=1):
        href,logo_url,stelle,bei,factval,start,vac,name,email,phone,orte,punkt,karriere=r[:13]
        recs.append(dict(
            n=i, href=href, logo_url=logo_url,
            firma=short_firma(bei), firma_full=clean_firma(bei),
            role=role_clean(stelle), role_raw=stelle,
            start=fmt_start(start), ort=ort_from_factvalue(factval),
            apply_url=(karriere or href).strip(),
            karriere=(karriere or '').strip(), ausbildung_de=href.strip(),
            orte=orte.strip(), contact_name=name.strip(), email=email.strip(),
            logo=f"logos/logo_{i}.png",
        ))
        logo_jobs.append((i,logo_url))
    # download logos
    with ThreadPoolExecutor(max_workers=16) as ex:
        res=list(ex.map(load_logo, logo_jobs))
    fails=[x for x in res if x[1] is not True]
    print('logo fails:', fails)
    # colors
    for rec in recs:
        p=rec['logo']
        col,frac=logo_color(p)
        dark,bg=detect_dark_bg(p)
        rec['primary']=col; rec['color_frac']=frac
        rec['header_bg']=bg; rec['header_dark']=dark
    json.dump(recs, open('base.json','w'), ensure_ascii=False, indent=1)
    print('wrote base.json with', len(recs), 'records')
    # quick color report
    for rec in recs[:8]:
        print(rec['n'], rec['firma'][:28], rec['primary'], 'frac',rec['color_frac'],'dark' if rec['header_dark'] else '')

if __name__=='__main__':
    main()
