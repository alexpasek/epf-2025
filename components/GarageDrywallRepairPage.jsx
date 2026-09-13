
import { socialImages } from "@/lib/responsiveImages";
import { NextResponsiveImage as Image } from "@/components/ResponsiveImage";
import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";
import { garageHub, garageFaqs } from "@/lib/garage/serviceContent";
import { garageCities } from "@/lib/garage/cityContent";
import { garageGuidePosts } from "@/lib/garageGuidePosts";

export const GARAGE_PATH = "/services/garage-drywall-repair/";
const base = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const hero = "/blog/garage-drywall-finishing-levels-featured.webp";
const heroAlt = "Garage with compound-finished drywall joints, concrete floor and closed sectional door";
const id = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export function garageMetadata(city) {
  const path = city ? `${GARAGE_PATH}${city.slug}/` : GARAGE_PATH;
  const title = city ? `Garage Drywall Repair in ${city.name} | EPF Pro` : garageHub.metaTitle;
  const description = city?.description || garageHub.description;
  return { title: city ? { absolute: title } : title, description, alternates: { canonical: path }, robots: { index: true, follow: true }, openGraph: { title, description, url: path, type: "website", images: socialImages([{ url: hero, width: 1536, height: 1024, alt: heroAlt }]) } };
}
function Actions() {
  return <div className="mt-6 flex flex-wrap gap-3"><a href="#quote" className="inline-flex rounded-full bg-amber-500 px-6 py-3 font-bold text-slate-950 hover:bg-amber-400">Request a garage repair estimate</a><a href={CONTACT.phoneHref} className="inline-flex rounded-full border border-current px-6 py-3 font-semibold">Call {CONTACT.phone}</a></div>;
}
export default function GarageDrywallRepairPage({ city }) {
  const path = city ? `${GARAGE_PATH}${city.slug}/` : GARAGE_PATH;
  const title = city ? `Garage Drywall Repair in ${city.name}` : garageHub.title;
  const sections = city?.sections || garageHub.sections;
  const faqs = city?.faqs || garageFaqs;
  const coverage = city?.coverage;
  const related = city ? garageGuidePosts.filter(p => city.guides.includes(p.slug)) : garageGuidePosts;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Drywall Repair", path: "/services/drywall-repair/" }, { name: "Garage Drywall Repair", path: GARAGE_PATH }, ...(city ? [{ name: city.name, path }] : [])];
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": base+path+"#service", name: title, url: base+path, description: city?.description || garageHub.description, serviceType: "Garage drywall repair and re-taping", image: base+hero, provider: { "@type": "Organization", "@id": base+"/#organization", name: "EPF Pro Services", url: base, telephone: CONTACT.phone }, areaServed: [...(city ? [city] : garageCities).map(c=>({"@type":"City",name:c.name})), ...(coverage?.names || []).map(name=>({"@type":"Place",name,containedInPlace:{"@type":"City",name:city.name}}))], isRelatedTo: {"@type":"Service",name:"Drywall repair",url:base+"/services/drywall-repair/"} },
    { "@type": "BreadcrumbList", itemListElement: crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,item:base+c.path})) },
    { "@type": "FAQPage", mainEntity: faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}})) }
  ]};
  return <main className="bg-slate-50 text-slate-900">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    <section className="bg-slate-950 text-white"><div className="container mx-auto px-4 py-12 md:py-20">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-slate-300">{crumbs.map((c,i)=><span key={c.path}>{i>0&&<span aria-hidden="true" className="mr-2">/</span>}{i===crumbs.length-1?<span aria-current="page">{c.name}</span>:<Link href={c.path} className="hover:text-amber-300">{c.name}</Link>}</span>)}</nav>
      <div className="grid items-center gap-10 lg:grid-cols-2"><div><p className="font-semibold uppercase tracking-widest text-amber-300">An additional drywall repair service</p><h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">{title}</h1><p className="mt-6 text-lg leading-8 text-slate-200">{city?.intro || garageHub.intro}</p><Actions/><div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300"><span>Defined repair scope</span><span>HEPA sanding where appropriate</span><span>Primer and paint options</span></div></div>
      <figure><Image src={hero} alt={heroAlt} width={1536} height={1024} priority sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-3xl border border-white/10 object-cover"/><figcaption className="mt-3 text-sm text-slate-400">Generated illustration of a garage finishing stage; not a photographed EPF project.</figcaption></figure></div>
    </div></section>
    <div className="container mx-auto max-w-6xl space-y-10 px-4 py-10 md:space-y-14">
      <section className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold">{city?.focus || "Start with the failed area and the finish you want"}</h2><p className="mt-4 max-w-4xl leading-8">{city?.answer || garageHub.answer}</p><p className="mt-4 leading-7">{city ? <>Review the complete <Link className="font-semibold text-blue-700 underline" href={GARAGE_PATH}>garage repair and re-taping service</Link> for the broader process and finish options.</> : <>Garage work is part of our <Link className="font-semibold text-blue-700 underline" href="/services/drywall-repair/">drywall repair services</Link>. For walls needing entirely new boarding, compare the <Link className="font-semibold text-blue-700 underline" href="/services/drywall-installation/">drywall installation scope</Link>.</>}</p></section>
      <nav aria-label="On this page" className="rounded-2xl border bg-white p-6"><h2 className="font-bold">In this guide to the service</h2><ul className="mt-4 grid gap-3 md:grid-cols-2">{sections.map(s=><li key={s.title}><a className="text-blue-700 underline" href={`#${id(s.title)}`}>{s.title}</a></li>)}{coverage && <li><a className="text-blue-700 underline" href="#neighbourhoods">Neighbourhoods we serve</a></li>}<li><a className="text-blue-700 underline" href="#questions">Common questions</a></li><li><a className="text-blue-700 underline" href="#quote">Request an estimate</a></li></ul></nav>
      {sections.map((s,i)=><section id={id(s.title)} key={s.title} className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 md:p-9"><h2 className="text-2xl font-bold md:text-3xl">{s.title}</h2><div className="mt-5 max-w-4xl space-y-5 text-lg leading-8 text-slate-700">{s.paragraphs.map(p=><p key={p}>{p}</p>)}</div>{i===Math.floor(sections.length/2)&&<div className="mt-7 rounded-xl bg-blue-50 p-6"><h3 className="font-bold">Have photos of the damaged joints?</h3><p className="mt-2 leading-7">Include wide views, close-ups, ceiling height and the finish you want. Tell us about previous repairs and any unresolved moisture.</p><Actions/></div>}</section>)}
      {coverage && <section id="neighbourhoods" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 md:p-9"><h2 className="text-2xl font-bold md:text-3xl">Garage Drywall Repair {city.name} — Neighbourhoods We Serve</h2><p className="mt-5 max-w-4xl leading-8">{coverage.intro}</p><ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 text-slate-700 sm:grid-cols-2 lg:grid-cols-3">{coverage.names.map(name=><li key={name}>{name}</li>)}</ul><p className="mt-5 max-w-4xl leading-8">{coverage.planning}</p><p className="mt-4 leading-7">Your neighbourhood does not need to appear by name to request service. <Link href="/quote/" className="font-semibold text-blue-700 underline">Request a {city.name} garage repair estimate</Link> with your location and the areas needing attention.</p></section>}
      {city && <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><h2 className="text-2xl font-bold">Agree on the base, then the finish</h2><p className="mt-4 leading-8">Loose board, active moisture and uncertain existing construction need assessment before cosmetic repair. Attached garages can include assemblies with requirements beyond surface appearance. Confirm the appropriate repair detail rather than assuming one board thickness or finish level suits every garage.</p><p className="mt-4 leading-8">For other rooms or mixed repair work, see our <Link href="/services/drywall-repair/" className="font-semibold text-blue-700 underline">general drywall repair service</Link>. If the quote includes coating, coordinate <Link href="/services/interior-painting/" className="font-semibold text-blue-700 underline">painting after repairs</Link> with the drying and inspection stages.</p></section>}
      {!city && <section><h2 className="text-3xl font-bold">Garage drywall repair service areas</h2><p className="mt-3 leading-7">Choose your area for a focused repair-planning guide and a local estimate request.</p><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{garageCities.map(c=><Link className="rounded-2xl border bg-white p-6 hover:border-blue-400" key={c.slug} href={`${GARAGE_PATH}${c.slug}/`}><h3 className="text-xl font-bold">{c.name}</h3><p className="mt-2 leading-7 text-slate-600">{c.focus}</p></Link>)}</div></section>}
      <section><h2 className="text-3xl font-bold">Understand your garage repair options</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{related.map(p=><Link className="overflow-hidden rounded-2xl border bg-white hover:border-blue-400" href={`/blog/${p.slug}/`} key={p.slug}><Image src={`/blog/${p.slug}-featured.webp`} alt={p.alt} width={1536} height={1024} sizes="(min-width:768px) 50vw, 100vw" className="aspect-video w-full object-cover"/><div className="p-6"><h3 className="text-xl font-bold">{p.title}</h3><p className="mt-3 leading-7 text-slate-600">{p.excerpt}</p></div></Link>)}</div></section>
      <section id="questions" className="scroll-mt-24"><h2 className="text-3xl font-bold">Garage repair questions{city?` in ${city.name}`:""}</h2><div className="mt-6 space-y-3">{faqs.map(([q,a])=><details key={q} className="rounded-xl border bg-white p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-4 max-w-4xl leading-8 text-slate-700">{a}</p></details>)}</div></section>
      <section id="quote" className="scroll-mt-24 rounded-3xl border bg-white p-6 md:p-10"><p className="font-semibold text-blue-700">EPF Pro Services</p><h2 className="mt-2 text-3xl font-bold">Request a garage drywall repair estimate{city?` in ${city.name}`:""}</h2><p className="mt-4 max-w-4xl leading-8">Tell us your city, affected walls or ceiling, approximate dimensions, previous repairs and whether you want primer or painting. Include a photo link in the project details if available, or mention that you have photos to share. We will confirm the next step for assessment.</p><QuoteForm/></section>
    </div>
  </main>;
}
