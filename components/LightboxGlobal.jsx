'use client';
import { useEffect, useState } from 'react';
export default function LightboxGlobal(){
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    function onClick(e){
      const t = e.target;
      if (t && t.tagName === 'IMG' && t.dataset.lightbox === 'true'){
        e.preventDefault();
        const scope = t.closest('[data-lightbox-scope]') || document;
        const imgs = Array.from(scope.querySelectorAll('img[data-lightbox="true"]'));
        const srcs = imgs.map(img => img.currentSrc || img.src);
        setImages(srcs);
        setIndex(Math.max(0, imgs.indexOf(t)));
        setOpen(true);
      }
    }
    document.addEventListener('click', onClick);
    return ()=>document.removeEventListener('click', onClick);
  },[]);
  if(!open) return null;
  const prev = ()=>setIndex(i=>(i-1+images.length)%images.length);
  const next = ()=>setIndex(i=>(i+1)%images.length);
  return (<div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
    <div className="relative max-w-5xl w-full" onClick={e=>e.stopPropagation()}>
      <img src={images[index]} alt="" className="w-full h-auto rounded-2xl shadow-2xl"/>
      <button className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1 font-semibold" onClick={()=>setOpen(false)}>✕</button>
      <button className="absolute inset-y-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-1" onClick={prev}>‹</button>
      <button className="absolute inset-y-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-1" onClick={next}>›</button>
    </div>
  </div>);
}
