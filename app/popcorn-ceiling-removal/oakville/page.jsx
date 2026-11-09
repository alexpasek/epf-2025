import ResponsiveImage from '@/components/ResponsiveImage';
import QuoteForm from '@/components/QuoteForm';
import OakvilleCostEstimator from '@/components/oakville/OakvilleCostEstimator';
import OakvilleProjects from '@/components/oakville/OakvilleProjects';
import { CONTACT, SITE_URL } from '@/app/config';
import { oakvillePricing, cad } from '@/lib/oakvilleCeilingPricing.mjs';
export const dynamic = 'force-static';
export const revalidate = 86400;
const SLUG = '/popcorn-ceiling-removal/oakville/';
const BASE = SITE_URL.replace(/\/$/, '');
const title = 'Popcorn Ceiling Removal Oakville | Level 5 Smooth Ceilings';
const description = 'Oakville popcorn ceiling removal with HEPA dust control, Level 5 skim coating, repairs, primer and optional painting. Painted or unpainted. Request a free quote.';
export const metadata = { title: { absolute: title }, description, alternates: { canonical: SLUG }, openGraph: { title, description, url: SLUG, type: 'website' } };
const FAQS = [
  {
    q: "How much does popcorn ceiling removal cost in Oakville?",
    a: "Cost depends on square footage, ceiling height, painted texture, fixture count, repairs, dust containment, primer, and whether painting is included. Send room photos and rough dimensions for a written Oakville quote.",
  },
  {
    q: "Is popcorn ceiling removal dusty?",
    a: "We seal work areas, protect floors and traffic paths, mask HVAC where needed, and use HEPA-connected sanding. The goal is a contained, tidy process with daily cleanup before we leave.",
  },
  {
    q: "Do you remove stipple and stucco ceilings too?",
    a: "Yes. Homeowners use different names for the texture. We assess whether it can be scraped cleanly or should be skim coated for a better smooth ceiling result.",
  },
  {
    q: "Do painted popcorn ceilings need a different approach?",
    a: "Usually, yes. Painted texture often resists water and can damage the drywall paper if it is forced off. We test the ceiling first, then use a scrape, bond, or skim-coat approach based on the surface.",
  },
  {
    q: "Do you provide a Level 5 skim coat finish?",
    a: "Yes. A full-field Level 5 skim coat is the standard we recommend when Oakville homeowners want a smooth ceiling that looks clean under pot lights, wide windows, and daylight.",
  },
  {
    q: "Can you work around pot lights, vents, skylights, and ceiling speakers?",
    a: "Yes. We protect fixtures, coordinate around electrician timing, and feather around rings, vents, bulkheads, and speaker cutouts so the final ceiling reads evenly.",
  },
  {
    q: "Can we stay home during the project?",
    a: "Many clients do. We plan the room sequence, keep traffic paths protected, and tidy daily. For heavy sanding days, we explain what rooms should stay closed off.",
  },
  {
    q: "Should older Oakville homes test for asbestos first?",
    a: "If the texture may be from an asbestos-risk era, testing before disturbance is the right first step. If results are positive, the job needs the appropriate abatement path before finishing work continues.",
  },
  {
    q: "Do you handle Oakville condos?",
    a: "Yes, subject to building rules. We plan elevator booking, hallway protection, parking/loading access, quiet hours, and tight staging space for condo ceiling projects.",
  },
  {
    q: "Can you prime and paint after popcorn removal?",
    a: "Yes. We can leave the ceiling primed and paint-ready, or complete the primer plus finish coats for a turnkey smooth ceiling.",
  },
];


function Section({ id, title, children }) {
  return <section id={id} className="scroll-mt-36 border-b border-slate-200 py-12 sm:py-16"><div className="mx-auto max-w-6xl px-5"><h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2><div className="space-y-5 leading-relaxed text-slate-700">{children}</div></div></section>;
}
const included = ['Floor and room protection', 'Furniture and traffic-path protection', 'Vent / fixture protection where required', 'Ceiling assessment', 'Popcorn removal or appropriate resurfacing strategy', 'Loose tape / crack / damaged-area repairs where included', 'Full-field skim coating when required', 'HEPA-connected sanding', 'Strong-light finish inspection', 'Primer', 'Ceiling paint when included in the selected scope', 'Cleanup and final walkthrough', '3-year workmanship warranty'];
export default function Page() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': `${BASE}${SLUG}#service`, name: 'Popcorn Ceiling Removal in Oakville', serviceType: 'Popcorn removal and smooth ceiling refinishing', url: `${BASE}${SLUG}`, provider: { '@id': `${BASE}/#org` }, areaServed: { '@type': 'City', name: 'Oakville', containedInPlace: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' } } },
  ] };
  return <div className="bg-white text-slate-900">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 lg:grid-cols-[1.6fr_1fr] lg:py-16">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Popcorn Ceiling Removal Oakville, ON</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200">From painted or unpainted popcorn to a Level 5 smooth finish. EPF Pro Services handles removal, repairs and ceiling skim coating with HEPA-connected sanding, primer and optional ceiling painting.</p>
          <p className="mt-5 font-semibold text-blue-200">Liability insured · WSIB coverage · 3-year workmanship warranty</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href="#quote" className="rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700">Free Oakville Quote</a><a href={CONTACT.phoneHref} className="rounded-xl border border-slate-500 px-6 py-4 font-bold">Call {CONTACT.phone}</a></div>
        </div>
        <figure><ResponsiveImage src="/services/popcorn-ceiling-removal/1.webp" alt="Illuminated ceiling sander working across textured and smoother ceiling areas" width={428} height={571} priority sizes="(max-width: 1023px) 90vw, 400px" className="mx-auto aspect-[4/3] w-full rounded-2xl object-cover" /><figcaption className="mt-3 text-sm text-slate-300">Ceiling sanding detail from the EPF service gallery.</figcaption></figure>
      </div>
    </header>
    <nav aria-label="On this page" className="border-b bg-slate-50"><div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-4">{[['cost', 'Cost'], ['projects', 'Projects'], ['painted', 'Painted Ceilings'], ['included', 'What’s Included'], ['process', 'Process'], ['timeline', 'Timeline'], ['faq', 'FAQ']].map(([id, label]) => <a key={id} href={`#${id}`} className="py-2 font-semibold text-blue-800 underline underline-offset-4">{label}</a>)}</div></nav>
    <Section id="projects" title="Real Popcorn Ceiling Projects in Oakville"><OakvilleProjects /><p><a className="font-semibold text-blue-700 underline" href="/blog/oakville-popcorn-ceiling-removal-before-after/">See the ceiling refinishing stages in our before-and-after guide</a>. Its EPF photos illustrate the work; their locations are not verified as Oakville.</p></Section>
    <Section id="cost" title="What Does Popcorn Ceiling Removal Cost in Oakville?">
      <p>A removal-only price and a finished smooth ceiling price cover different work. Compare repairs, full-field skimming, primer and paint before comparing totals. These existing EPF budgets are planning ranges in Canadian dollars, with HST additional where applicable.</p>
      <OakvilleCostEstimator />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{oakvillePricing.rooms.map(([room, low, high, scope]) => <article key={room} className="rounded-xl border border-slate-200 p-5"><h3 className="font-bold text-slate-950">{room}</h3><p className="my-2 text-xl font-bold text-blue-900">{cad(low)}–{cad(high)}{room === 'Main floor' ? '+' : ''}</p><p className="text-sm">{scope}</p></article>)}</div>
      <p>Room budgets and area calculations are alternative planning methods, not amounts to add together. High ceilings, substantial repairs and difficult access need a written allowance. Read the <a className="font-semibold text-blue-700 underline" href="/blog/popcorn-ceiling-removal-cost-oakville/">Oakville popcorn ceiling cost guide</a> for help comparing scopes.</p>
    </Section>
    <Section id="painted" title="Is Your Oakville Popcorn Ceiling Painted?">
      <p>Paint can seal the texture and change how it releases. These are clues for discussing the surface with us, not instructions to scrape or sample an older ceiling.</p>
      <div className="grid gap-5 md:grid-cols-2"><article className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Unpainted texture</h3><ul className="mt-3 list-disc space-y-2 pl-5"><li>Often relatively soft and more crumbly if lightly touched during professional assessment.</li><li>Controlled scraping may be possible once the material is cleared for disturbance.</li><li>The exposed surface still needs inspection, repairs and refinishing.</li></ul></article><article className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Painted texture</h3><ul className="mt-3 list-disc space-y-2 pl-5"><li>Often feels harder or more sealed; water does not penetrate as easily.</li><li>Forcing it off can tear the drywall paper.</li><li>Bonding and skim coating, or another refinishing strategy, may give a better result.</li></ul></article></div>
      <p className="font-semibold">Not sure? Send us a close-up photo and the approximate age of the home.</p>
      <aside className="rounded-xl border border-amber-200 bg-amber-50 p-5"><h3 className="font-bold">Older ceilings: testing comes first</h3><p className="mt-2">This simple check can help identify whether the texture may have been painted. It does NOT determine whether older ceiling texture contains asbestos. Do not touch, scrape, wet or sand suspected material. Arrange professional assessment and testing before disturbance; a positive result requires an appropriate asbestos-management plan before ordinary ceiling work proceeds.</p><a className="mt-2 inline-block underline" href="https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants/health-risks-asbestos.html">Health Canada’s asbestos guidance</a></aside>
      <p>Read our <a className="font-semibold text-blue-700 underline" href="/blog/painted-popcorn-ceiling-removal-oakville/">painted popcorn ceiling guide</a> for the differences between scraping and resurfacing.</p>
    </Section>
    <Section id="included" title="What Goes Into a Proper Smooth Ceiling?">
      <p>Your written quote should name the rooms, method, repair allowance and final finish. Here is the complete workflow to discuss; painting and larger repairs depend on the selected scope.</p>
      <ol className="grid list-inside list-decimal gap-3 sm:grid-cols-2">{included.map(item => <li key={item} className="rounded-xl bg-slate-50 p-4">{item}</li>)}</ol>
      <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">When comparing Oakville ceiling quotes, confirm whether the price includes:</h3><p className="mt-3">Skim coating · crack/tape repair · primer · ceiling painting · floor/furniture protection · HEPA sanding · cleanup · high-ceiling access · warranty.</p><p className="mt-3">Ask how newly exposed damage is handled and have any extra work priced before it starts. Existing leaks, loose board or failing seams need a repair decision before a cosmetic finish.</p></div>
      <h3 className="text-2xl font-bold text-slate-950">What Level 5 means for your ceiling</h3><p>Level 5 adds a thin skim coat across the whole properly prepared surface, rather than only over joints and patches. It helps create uniform texture and porosity before primer. It does not straighten sagging framing or repair loose drywall by itself. Those problems need attention first.</p><p>Bright daylight and pot lights make small ridges and uneven patches easier to see. We inspect with strong light, correct defects and check again after primer. Flat ceiling paint completes the selected painted finish; it cannot hide unfinished seams.</p>
    </Section>
    <Section id="process" title="From Textured Ceiling to Finished Surface">
      <div className="grid gap-5 md:grid-cols-3">{[
        ['1. Assess and agree the scope', 'Review photos, ceiling history, paint layers, stains and access. Resolve testing and leak concerns first, then confirm protection, repairs, primer and paint in writing.'],
        ['2. Remove, repair and smooth', 'Set up containment, choose controlled removal or suitable resurfacing, repair agreed damage and skim the ceiling. Allow the compound to dry between stages.'],
        ['3. Inspect, finish and hand over', 'Use HEPA-connected sanding and strong-light checks, prime, correct visible defects and paint if included. Remove protection, clean and walk through the finished work together.'],
      ].map(([heading, text]) => <article key={heading} className="rounded-2xl border p-6"><h3 className="text-xl font-bold text-slate-950">{heading}</h3><p className="mt-3">{text}</p></article>)}</div>
      <p>Dust control combines room containment, protected floors and traffic paths, vent protection where required, vacuum-connected sanding and careful waste handling. It reduces dust spread; it does not make renovation dust-free. Keep children and pets out of active work areas.</p><p>For a lived-in home, agree which rooms remain unavailable and when they can reopen. See our <a className="font-semibold text-blue-700 underline" href="/blog/dustless-popcorn-ceiling-removal-oakville/">Oakville dust-control guide</a> and <a className="font-semibold text-blue-700 underline" href="/blog/how-to-prepare-for-popcorn-ceiling-removal-oakville/">home preparation checklist</a>.</p>
    </Section>
    <Section id="timeline" title="How Long Does Popcorn Ceiling Removal Take?">
      <p>EPF’s existing Oakville guidance allows roughly 1–2 days for a bedroom or small living/dining zone. Larger projects need a room-by-room schedule. These are planning indications, not a completion-date promise.</p>
      <dl className="grid gap-4 sm:grid-cols-2">{[
        ['Single room', 'Often 1–2 days, depending on repairs and whether painting follows primer.'],
        ['Small multi-room project', 'Sequence adjoining rooms together; confirm drying and painting time after assessment.'],
        ['Three bedrooms + hallway', 'Plan which bedrooms will be unavailable and whether work must be phased. We confirm the duration after reviewing room sizes and phasing.'],
        ['Main floor', 'Existing Oakville guidance describes about three days for straightforward larger scopes including paint. Confirm whether your layout and conditions fit that schedule.'],
        ['Large / whole-home project', 'Phasing, furniture, total ceiling area and repairs determine the schedule; request a written plan.'],
        ['High foyer / skylight / complex ceiling', 'Allow additional time for safe access, edges and inspection. Timing needs an access assessment.'],
      ].map(([type, timing]) => <div key={type} className="rounded-xl bg-slate-50 p-5"><dt className="font-bold text-slate-950">{type}</dt><dd className="mt-2">{timing}</dd></div>)}</dl>
      <p>Painted texture, repairs, humidity and drying conditions can extend the work. Coordinate licensed electrical work and fixture openings before final skimming and painting so completed ceilings do not need to be patched again.</p>
    </Section>
    <Section id="neighbourhoods" title="Planning Around Your Oakville Home">
      <p>We serve Glen Abbey, Bronte, Kerr Village, Old Oakville, River Oaks, West Oak Trails, Palermo West, Clearview, College Park, Falgarwood, Bronte Creek, Iroquois Ridge North, Downtown Oakville and Uptown Core. The room and building conditions determine the plan.</p>
      <div className="grid gap-5 md:grid-cols-3"><article><h3 className="font-bold text-slate-950">Condos and shared access</h3><p className="mt-2">For Bronte or Kerr Village condo work, share the building’s actual work hours, elevator booking rules, loading arrangements and common-area protection requirements. Obtain building approval where required before scheduling.</p></article><article><h3 className="font-bold text-slate-950">Open floors and family rooms</h3><p className="mt-2">For a Glen Abbey foyer, River Oaks bedrooms or a connected main floor in West Oak Trails or Palermo, show the full ceiling in your photos. Stair height, furniture and continuous sightlines affect staging and finish inspection.</p></article><article><h3 className="font-bold text-slate-950">Older surfaces and repairs</h3><p className="mt-2">For an Old Oakville renovation or any home with an uncertain ceiling history, include previous repairs and testing records. Age alone does not tell us what is in the texture or whether the substrate is sound.</p></article></div>
      <p>We can coordinate <a className="text-blue-700 underline" href="/services/drywall-repair/oakville/">Oakville drywall repairs</a>, <a className="text-blue-700 underline" href="/skylight-drywall-repair/oakville/">skylight ceiling repairs</a> and <a className="text-blue-700 underline" href="/services/interior-painting/">interior painting</a> when your renovation extends beyond texture removal.</p>
    </Section>
    <Section id="reviews" title="What Homeowners Say About EPF"><p>Read EPF customer reviews on Google for feedback about communication, protection, finishing and cleanup across our service areas.</p><a href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9" className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-bold text-white">Read EPF Reviews on Google</a><p>Ask for the insurance, WSIB and 3-year workmanship warranty details with your written quote so you can review the coverage and terms.</p></Section>
    <Section id="faq" title="Oakville Ceiling Removal FAQ"><div className="space-y-3">{FAQS.map(faq => <details key={faq.q} className="rounded-xl border p-5"><summary className="cursor-pointer font-bold text-slate-950">{faq.q}</summary><p className="mt-3">{faq.a}</p></details>)}</div></Section>
    <Section id="quote" title="Get Your Free Oakville Quote"><p>Send wide room photos, a close-up of the texture, rough ceiling dimensions and height. Include cracks, stains, fixtures, skylights, whether the room is furnished, building access rules and your preferred timing. Tell us whether you want primer only or completed ceiling painting.</p><div className="max-w-3xl rounded-2xl border bg-slate-50 p-5 sm:p-8"><QuoteForm /></div><p>Prefer to talk? <a className="font-bold text-blue-700 underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a></p></Section>
  </div>;
}
