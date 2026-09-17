import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { CONTACT } from '@/app/config';
import { services, base, altFor } from './content';
import styles from '@/app/services/drywall-installation/hamilton/hamilton.module.css';
import local from './area.module.css';

export default function NeighborhoodPage({area,type}) {
 const service=services[type]; const isDrywall=type==='drywall'; const focus=isDrywall?area.focus:area.popcornFocus;
 const url=`${base}${service.hub}${area.slug}/`;
 const faqs=[
  {q:`What should I send for a ${area.name} estimate?`,a:`Start with ${area.checklist.map(x=>x[0].toLowerCase()+x.slice(1)).join('; ')}. Add your address, room dimensions and preferred timing. Photos help us define the scope, but concealed conditions or uncertain materials may still need a site assessment.`},
  {q:isDrywall?'Does installation include taping and painting?':'Is scraping the same as a finished smooth ceiling?',a:isDrywall?'Our scope can include hanging, taping, mudding and sanding to the agreed finish. Primer and painting are identified separately, along with removal, insulation or specialist work where relevant. Ask for the endpoint to be written into the estimate.':'No. After suitable texture is removed, the surface may need repairs, skim coating, sanding and primer before paint. Compare quotes at the same endpoint: removed texture, paint-ready surface or fully painted ceiling.'},
  {q:'Can you give a firm schedule from photos alone?',a:'Photos help with initial planning. Access, surface condition, drying conditions and the readiness of other trades can change the schedule. We confirm the scope and practical sequence before committing to the work.'},
 ];
 const schema={'@context':'https://schema.org','@graph':[
  {'@type':'Service','@id':`${url}#service`,name:`${service.name} in ${area.name}`,url,description:service.summary,serviceType:service.name,provider:{'@id':`${base}/#org`},areaServed:{'@type':'Place',name:area.name,containedInPlace:{'@type':'City',name:'Hamilton'}},isRelatedTo:{'@type':'Service','@id':`${base}${service.hub}#service`},potentialAction:{'@type':'ContactAction',target:`${base}/quote/`}},
  {'@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}
 ]};
 return <div className={styles.page}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
  <section className={styles.hero}><div className={styles.shell}>
   <div className={styles.heroGrid}><div className={`${styles.heroCopy} ${local.smallHero}`}>
    <p className={styles.eyebrow}>EPF Pro Services · Hamilton neighbourhoods</p>
    <h1>{service.name}<br/><em>in {area.name}.</em></h1>
    <p className={styles.heroLead}>{focus}.</p><p className={styles.heroText}>{service.summary}</p>
    <div className={styles.actions}><Link className={styles.primary} href="/quote/">Request a {isDrywall?'drywall':'ceiling'} quote →</Link><a className={styles.phoneLink} href={CONTACT.phoneHref}>Call {CONTACT.phone}</a></div>
   </div><figure className={local.plainImage}><ResponsiveImage src={area.image} alt={altFor(area.image)} width={1536} height={1024} priority sizes="(max-width:800px) 90vw, 560px"/><figcaption>Generated renovation illustration showing a planning or finish detail; not a completed local project.</figcaption></figure></div>
   <div className={styles.coverageLine}><span>Service in {area.name}, Hamilton</span><Link href={service.hub}>Explore {service.name.toLowerCase()} across Hamilton →</Link></div>
  </div></section>
  <section className={`${styles.section} ${styles.shell} ${local.copy}`}>
   <p className={styles.eyebrow}>Plan the actual room</p><h2>{focus}</h2>
   {area[type].map(p=><p key={p}>{p}</p>)}
   <p>For the complete process, finish choices and city-wide coverage, see our <Link href={service.hub}>{isDrywall?'Hamilton drywall installation service':'Hamilton popcorn ceiling removal service'}</Link>. This local page focuses on practical preparation for your project; the condition of your property determines the final scope.</p>
   <div className={local.callout}><strong>Useful details for your {area.name} quote</strong><ul className={local.list}>{area.checklist.map(c=><li key={c}>{c}</li>)}</ul></div>
  </section>
  <section className={styles.finishSection}><div className={`${styles.shell} ${styles.finishGrid}`}>
   <div className={local.copy}><p className={styles.eyebrow}>Agree on the endpoint</p><h2>{isDrywall?'From open framing to a finished surface.':'From textured ceiling to a consistent finish.'}</h2><p>{isDrywall?'We review board specification, backing, joints and the intended paint before choosing the finishing scope. Level 4 is common for many painted walls; a Level 5 skim coat may be appropriate for demanding light or higher-sheen finishes. Neither replaces the need for sound, properly prepared framing.':'We establish the surface condition and material concerns before choosing a method. Painted texture, weak paper, old patches and uneven joints can change the repair and skim-coat allowance. Primer and ceiling paint follow an agreed surface inspection, with the final lighting considered.'}</p></div>
   <div className={styles.localCard}><h3>What belongs in the estimate?</h3><ul className={local.list}>{(isDrywall?['Board supply, hanging and specified assemblies','Taping, mudding, sanding and finish level','Protection, debris handling and cleanup','Primer, paint and any exclusions']:['Assessment and a suitable removal or resurfacing method','Surface repairs and the extent of skim coating','Containment, dust-controlled sanding and cleanup','Primer, ceiling paint and finish boundaries']).map(x=><li key={x}>{x}</li>)}</ul></div>
  </div></section>
  <section className={`${styles.section} ${styles.shell} ${local.copy}`}><h2>Cost and timing follow the scope.</h2><p>{isDrywall?'Surface area is only part of a drywall quote. Ceiling height, stairs, bulkheads, numerous openings and difficult delivery routes affect the labour. Drying time between finishing coats depends on the product and conditions. We separate any demolition, preparation, insulation or painting so you can compare like-for-like estimates.':'A textured ceiling quote depends on area, paint layers, access, repairs and the final finish. An empty rectangular room and a furnished stairwell need different protection and working arrangements. Multiple compound coats require drying time, followed by primer and any specified paint. We confirm those stages rather than promise one turnaround for every ceiling.'}</p>
  <p>{isDrywall?'Small damaged sections may call for repair rather than a full replacement.':'If texture removal exposes damaged board, repair or replacement may need to come before smoothing.'} Read about <Link href="/services/drywall-repair/hamilton/">drywall repair in Hamilton</Link> when deciding the extent of work.</p>
  {!isDrywall&&<div className={local.callout}><strong>Assess uncertain materials before disturbance.</strong><p>Do not scrape or sand a ceiling that may contain asbestos. Arrange assessment by a qualified professional, and resolve any specialist work before ordinary ceiling refinishing. Read <a href="https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants/health-risks-asbestos.html">Health Canada’s asbestos guidance</a>.</p></div>}
  </section>
  <section className={styles.costSection}><div className={`${styles.shell} ${styles.costGrid}`}><div><p className={styles.eyebrow}>A useful next step</p><h2>Send the room.<br/>We’ll discuss the scope.</h2><p>Share dimensions, wide photos, close-ups of damage and the planning details listed above. Tell us about timing and access so the estimate reflects the work you need.</p><Link href="/quote/" className={styles.primary}>Request an itemized quote →</Link></div><div><h3>Hamilton service coverage</h3><p>We provide {service.name.toLowerCase()} in {area.name} through our Hamilton service area. The service location is 37 Dalegrove Crescent, Stoney Creek, ON L8J 3R5. Contact us to arrange your project assessment.</p><Link href={service.hub} className={styles.primary}>View the Hamilton service →</Link></div></div></section>
  <section className={`${styles.section} ${styles.shell} ${local.faq}`}><h2>Questions before you book</h2>{faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section>
  <section className={`${styles.section} ${styles.shell}`}><h2>Keep planning your project</h2><div className={local.grid}>{service.guides.map(([slug,title])=><Link className={local.card} key={slug} href={`/blog/${slug}/`}><strong>{title}</strong><small>Open the guide →</small></Link>)}</div><nav className={local.links} aria-label="Related services"><Link href={service.root}>{service.name} service overview</Link><Link href={service.hub}>{service.name} in Hamilton</Link><Link href={`${services[isDrywall?'popcorn':'drywall'].hub}${area.slug}/`}>{isDrywall?'Popcorn ceiling removal':'Drywall installation'} in {area.name}</Link></nav></section>
 </div>;
}
