import ResponsiveImage from '@/components/ResponsiveImage';
import { oakvilleProjects } from '@/data/oakvilleProjects';
export default function OakvilleProjects() {
  const projects = oakvilleProjects.filter(p => p.verified && p.source && p.before && p.after).slice(0, 3);
  return <>
    {projects.length ? <div className="grid gap-6 lg:grid-cols-3">{projects.map(p => <article key={p.id} className="overflow-hidden rounded-2xl border bg-white">
      {[['Before', p.before], ['After', p.after]].map(([label, img]) => <figure key={label}><ResponsiveImage {...img} loading="lazy" sizes="(max-width: 1023px) 100vw, 360px" className="aspect-video w-full object-cover" /><figcaption className="px-5 py-2 text-sm">{label}</figcaption></figure>)}
      <div className="p-5"><h3 className="text-xl font-bold">{p.neighbourhood ? `${p.neighbourhood} — ` : ''}{p.roomType}</h3><dl className="mt-4 space-y-2">{[['Approximate ceiling area', p.areaSqFt ? `${p.areaSqFt} sq ft` : null], ['Texture', p.texture], ['Repairs', p.repairs], ['Finish', p.finish], ['Approximate duration', p.duration]].filter(([,value]) => value).map(([label,value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd>{value}</dd></div>)}</dl><p className="mt-4">{p.note}</p></div>
    </article>)}</div> : <p>Ask us for available Oakville before-and-after examples when discussing your ceiling. We can help you compare the removal method, repair scope and final finish with what your home needs.</p>}
    <a className="mt-4 inline-block font-semibold text-blue-700 underline" href="/our-work/">Browse EPF ceiling work across our service areas</a>
  </>;
}
