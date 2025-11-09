'use client';
import { useState } from 'react';
export default function CompareSlider({ before, after, caption }){
  const [v,setV]=useState(50);
  return(<figure className="card p-4">
    <div className="compare-track">
      <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="compare-overlay overflow-hidden" style={{width:`${v}%`}}>
        <img src={after} alt="After" className="h-full w-full object-cover"/>
      </div>
      <div className="handle-line" style={{left:`${v}%`}}/>
      <div className="handle-knob" style={{left:`${v}%`}} aria-hidden="true"/>
      <input type="range" min="0" max="100" value={v} onChange={e=>setV(Number(e.target.value))} className="range" aria-label="Before and after slider"/>
    </div>
    {caption && <figcaption className="mt-3 text-sm text-gray-600">{caption}</figcaption>}
  </figure>);
}
