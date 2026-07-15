import numpy as np, colorsys, sys
from PIL import Image
def _darken_if_light(rgb):
    r,g,b=[x/255 for x in rgb]; h,s,v=colorsys.rgb_to_hsv(r,g,b)
    if 0.299*r+0.587*g+0.114*b>0.62:
        v=min(v,0.72); s=min(1.0,s+0.15); r,g,b=colorsys.hsv_to_rgb(h,s,v)
    return (int(r*255),int(g*255),int(b*255))
def logo_color(path, fallback='#333333'):
    try: im=Image.open(path).convert('RGBA')
    except: return fallback, 0
    a=np.array(im).astype(float); r,g,b,al=a[...,0],a[...,1],a[...,2],a[...,3]
    mx=np.maximum(np.maximum(r,g),b); mn=np.minimum(np.minimum(r,g),b)
    sat=(mx-mn)/(mx+1e-6); lum=(r+g+b)/3
    m=(al>140)&(sat>0.28)&(lum>20)&(lum<240)
    if m.sum()<25: return fallback, 0
    px=a[m][:,:3]
    hsv=np.array([colorsys.rgb_to_hsv(*(p/255)) for p in px]); hues=hsv[:,0]*360; sats=hsv[:,1]
    bins=np.arange(0,361,20); idx=np.digitize(hues,bins)
    weights=np.array([sats[idx==k].sum() for k in range(1,len(bins))])
    dom=np.argmax(weights)+1; sel=px[idx==dom]
    if len(sel)<10: sel=px
    col=np.median(sel,axis=0); frac=weights[dom-1]/(weights.sum()+1e-6)
    return '#%02x%02x%02x'%_darken_if_light(tuple(int(c) for c in col)), round(float(frac),2)
if __name__=='__main__':
    for n in range(1,6):
        print(n, logo_color(f'logos/logo_{n}.png'))
