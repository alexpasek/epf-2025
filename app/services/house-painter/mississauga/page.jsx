import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const revalidate = 86400;

const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PATH = "/services/house-painter/mississauga/";
const PAGE_URL = `${BASE_URL}${PATH}`;
const HERO_IMAGE =
  "/services/house-painter/mississauga/house-painter-mississauga-whole-home-interior.jpg";

const FAQS = [
  {
    q: "Does EPF Pro Services paint complete house interiors in Mississauga?",
    a: "Yes. The interior scope can cover connected living areas, bedrooms, hallways, stairwells, ceilings, walls, baseboards, doors, and frames. Each quote identifies the included rooms and surfaces so a whole-home repaint is not reduced to a vague square-foot number.",
  },
  {
    q: "Can house painting be scheduled while my family is living at home?",
    a: "Yes. Occupied projects can be divided into practical work zones with furniture and floor protection, room-by-room sequencing, dust control during preparation, drying-time planning, and daily cleanup. The exact sequence depends on how the household needs to use the space.",
  },
  {
    q: "What should a Mississauga house-painting quote include?",
    a: "It should identify rooms and surfaces, wall and ceiling preparation, drywall repairs, primer needs, colours and sheen, expected coats, trim and door scope, protection, access, cleanup, exclusions, and how additional defects will be handled if discovered.",
  },
  {
    q: "Do you repair walls and ceilings before house painting?",
    a: "EPF Pro Services can coordinate drywall repair and surface preparation before painting. Holes, dents, cracks, loose tape, old patch edges, ceiling damage, and problem stains are assessed before the final coating system is confirmed.",
  },
  {
    q: "Do you provide exterior house painting?",
    a: "This page covers interior house painting. The quote should only include services and surfaces confirmed directly by EPF Pro Services; no exterior scope is implied by the phrase house painter.",
  },
  {
    q: "Can I request a house-painting estimate from photos?",
    a: "Yes. Send wide photos of each room and close-ups of repairs, along with approximate dimensions, ceiling heights, included surfaces, occupancy, access notes, and timing. An on-site review can be used when photos do not show enough detail to confirm the scope.",
  },
];

const serviceAreas = [
  "Port Credit",
  "Clarkson",
  "Erin Mills",
  "Meadowvale",
  "Streetsville",
  "Churchill Meadows",
  "Cooksville",
  "Lakeview",
  "City Centre",
  "Square One",
];

export const metadata = {
  title: { absolute: "House Painter Mississauga | EPF Pro Services" },
  description:
    "House painter in Mississauga for interior walls, ceilings, trim, doors and drywall repairs. Whole-home planning, dust-controlled prep and photo estimates.",
  keywords: [
    "house painter Mississauga",
    "house painters Mississauga",
    "home painters Mississauga",
    "residential house painters Mississauga",
    "interior house painter Mississauga",
    "whole house painting Mississauga",
    "home painting Mississauga",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "House Painter Mississauga | EPF Pro Services",
    description:
      "Interior house painting in Mississauga with coordinated walls, ceilings, trim, doors, repairs, protection and cleanup.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1536,
        height: 1024,
        alt: "House painter Mississauga whole-home interior with protected floors and freshly painted walls, ceiling and trim",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "House Painter in Mississauga",
        serviceType: "Interior House Painting",
        description: metadata.description,
        url: PAGE_URL,
        areaServed: {
          "@type": "City",
          name: "Mississauga",
          containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
        },
        provider: {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#business`,
          name: "EPF Pro Services",
          url: `${BASE_URL}/`,
          telephone: CONTACT.phone,
          email: CONTACT.email,
          image: `${BASE_URL}/logo.png`,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${BASE_URL}/quote/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Interior Painting",
            item: `${BASE_URL}/services/interior-painting/`,
          },
          { "@type": "ListItem", position: 4, name: "House Painter Mississauga", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Heading({ label, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{children}</h2>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white text-slate-800">
      <StructuredData />

      <nav aria-label="Breadcrumb" className="container-x py-4 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link className="hover:text-blue-700 hover:underline" href="/services/">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link className="hover:text-blue-700 hover:underline" href="/services/interior-painting/">Interior Painting</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-900">House Painter Mississauga</li>
        </ol>
      </nav>

      <header className="bg-slate-950 text-white">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Whole-home interior painting</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">House Painter in Mississauga</h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Interior house painting planned as one connected finish system—not a collection of unrelated rooms. EPF Pro Services coordinates protection, wall and ceiling preparation, drywall repairs, primer, walls, trim, doors, sequencing, and final cleanup for Mississauga homes.
            </p>
            <p className="mt-4 text-slate-300">
              This service is specifically for house interiors. No exterior painting scope is implied.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              {['Fully insured', 'Dust-controlled preparation', '3-year warranty'].map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2">✓ {item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-cta text-center" href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
              <a className="rounded-xl border border-white/30 px-6 py-3 text-center font-bold hover:bg-white/10" href="#house-painting-quote">Request a house-painting quote</a>
            </div>
          </div>
          <Image
            src={HERO_IMAGE}
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            alt="House painter Mississauga whole-home interior with protected hardwood floors and freshly painted connected rooms"
            className="aspect-[3/2] h-auto w-full rounded-3xl border border-white/15 object-cover shadow-2xl"
          />
        </div>
      </header>

      <main>
        <section className="container-x py-16">
          <Heading label="A distinct whole-home service">When to choose a house painter instead of a one-room repaint</Heading>
          <div className="mt-7 grid gap-8 text-lg leading-8 text-slate-700 lg:grid-cols-2">
            <div>
              <p>A whole-house interior has connected sightlines, repeated trim, multiple ceiling conditions, several colours or sheens, and rooms that must be handed back in a sensible order. The main challenge is coordination. Hallways, stairs, landings, kitchens, and living areas often overlap, so protection and drying sequences need to be planned before work starts.</p>
              <p className="mt-4">Choose this page when you are refreshing several rooms, repainting before moving in, preparing the interior before listing, updating worn builder finishes, or coordinating paint after drywall, ceiling, flooring, or trim work.</p>
            </div>
            <div>
              <p>For a single room, condo, or surface-specific painting need, the broader <Link href="/services/interior-painting/mississauga/" className="font-semibold text-blue-700 hover:underline">interior painter Mississauga service page</Link> explains walls, ceilings, trim, doors, and local condo scheduling in more detail.</p>
              <p className="mt-4">Both services use the same verified EPF approach: protected work areas, dust-controlled preparation, repair coordination, proper primer where required, careful coating, inspection, and cleanup.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <Heading label="Interior scope">What can be included in a Mississauga house repaint?</Heading>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Connected walls", "Living rooms, dining areas, bedrooms, kitchens, halls, landings, stairwells, and other agreed interior wall surfaces."],
                ["Ceilings", "Flat ceiling finishes, repaired areas, edge transitions, lights and vents, with stain or damage conditions assessed before coating."],
                ["Baseboards and casing", "Cleaning, filling, sanding, caulking where suitable, primer where required, and a durable trim finish."],
                ["Doors and frames", "Surface preparation and a coating sequence suited to hand contact, edge wear, previous gloss, and drying time."],
                ["Drywall and patch preparation", "Nail holes, dents, cracks, loose tape, rough compound, old repairs, and visible patch transitions assessed before paint."],
                ["Final room coordination", "Protection removal, agreed touch-ups, cleanup, and a sensible handover order for vacant or occupied homes."],
              ].map(([title, copy]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x py-16">
          <Heading label="Mississauga property planning">Different homes need different schedules</Heading>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {[
              ["Detached and semi-detached homes", "Main floors often combine long sightlines, stair openings, kitchen transitions, hallways, and several trim details. We identify where colours and sheens stop, how the household will move through the home, and which repairs need completion before shared spaces are coated."],
              ["Townhomes", "Narrow stairwells, several levels, connected landings, limited furniture storage, and daily access can make sequencing more important than raw room count. Protection and room handback are discussed before scheduling."],
              ["Older or repeatedly renovated interiors", "Layers of old patches, changed electrical locations, previous water stains, cracked joints, glossy trim, and mixed wall textures can all affect preparation. Unknown defects are not hidden behind a fixed whole-house price."],
              ["Newer builder-finish refreshes", "Scuffed high-traffic areas, visible fastener fills, trim gaps, or flat builder coatings may need cleaning, repair, spot primer, and a more washable finish. The actual walls are inspected rather than assuming every newer home is paint-ready."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-2xl border-l-4 border-blue-700 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-950 py-16 text-white">
          <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Occupied-home sequencing</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Keep the house workable while rooms are painted</h2>
              <ol className="mt-7 space-y-5 text-blue-100">
                {[
                  ["Choose work zones", "Group rooms so tools, protection, furniture movement, and drying areas do not spread through the entire house at once."],
                  ["Protect access routes", "Identify the stairs, halls, entries, bathrooms, kitchen areas, and bedrooms the household must continue using."],
                  ["Sequence dusty work first", "Complete drywall repair, sanding, ceiling preparation, and other dust-producing tasks before nearby finish coats."],
                  ["Plan daily handback", "Confirm what will be cleaned, what must continue drying, and which areas will be usable at the end of each work period."],
                ].map(([title, copy], index) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">{index + 1}</span>
                    <div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 leading-7">{copy}</p></div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl bg-white p-7 text-slate-900">
              <h3 className="text-2xl font-bold">Areas served across Mississauga</h3>
              <p className="mt-3 leading-7 text-slate-700">Whole-home interior painting is available across the city, including:</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => <li key={area} className="rounded-xl bg-slate-100 px-4 py-3 font-semibold">{area}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="container-x py-16">
          <Heading label="Compare actual scope">What should be written into the quote?</Heading>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">A useful comparison starts with the written scope, not a broad room price or promise. Two house-painting quotes are not equivalent unless they include the same rooms, surfaces, preparation, coatings, protection, and handover work.</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Quote section</th><th className="px-5 py-4">Details to confirm</th><th className="px-5 py-4">Why it matters</th></tr></thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Rooms and surfaces", "Walls, ceilings, closets, baseboards, casing, doors, frames, stairs", "Prevents a whole-home label from hiding exclusions"],
                  ["Preparation", "Protection, cleaning, filling, sanding, caulking, drywall repair, stain treatment", "Determines whether the finish has a sound, even base"],
                  ["Coating system", "Primer, colours, sheens, finish coats, product responsibilities", "Clarifies durability, coverage, and appearance expectations"],
                  ["Logistics", "Furniture, access, parking, work zones, occupancy, drying sequence", "Makes the schedule realistic for the actual property"],
                  ["Handover", "Inspection, touch-ups, cleanup, leftover materials, exclusions", "Defines what complete means before work starts"],
                ].map((row) => <tr key={row[0]} className="align-top"><th className="px-5 py-4 font-bold text-slate-950">{row[0]}</th><td className="px-5 py-4 text-slate-700">{row[1]}</td><td className="px-5 py-4 text-slate-700">{row[2]}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <Heading label="Preparation and related work">Finish the repairs before final paint</Heading>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Drywall repair Mississauga", "/services/drywall-repair/mississauga/", "Repair holes, cracks, loose tape, ceiling damage, and visible patch transitions before coating."],
                ["Baseboard installation Mississauga", "/services/baseboard-installation/mississauga/", "Coordinate replacement trim, filling, caulking, and paint-ready finishing with the room schedule."],
                ["Popcorn ceiling removal Mississauga", "/popcorn-ceiling-removal/mississauga/", "Complete texture removal, smooth ceiling finishing, sanding, and primer before final walls and trim."],
              ].map(([title, href, copy]) => (
                <article key={href} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-bold"><Link href={href} className="text-blue-700 hover:underline">{title}</Link></h3>
                  <p className="mt-3 leading-7 text-slate-700">{copy}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 leading-7 text-slate-700">For colour, sheen, primer, and surface-preparation planning, read the <Link href="/blog/interior-painting-mississauga-prep-finish-guide/" className="font-semibold text-blue-700 hover:underline">Mississauga interior painting prep and finish guide</Link>.</p>
            <p className="mt-3 leading-7 text-slate-700">For a room-by-room sequence, occupied-home checklist, timeline factors, and estimate preparation, read the <Link href="/blog/whole-house-interior-painting-mississauga-planning-guide/" className="font-semibold text-blue-700 hover:underline">whole-house interior painting Mississauga planning guide</Link>.</p>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="container-x">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">House painting FAQ</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Questions before painting several rooms</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="rounded-2xl border border-white/15 bg-white/5 p-6 open:bg-white/10">
                  <summary className="cursor-pointer text-lg font-bold">{q}</summary>
                  <p className="mt-3 leading-7 text-slate-200">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="house-painting-quote" className="container-x scroll-mt-24 py-16">
          <div className="grid gap-10 rounded-3xl border border-blue-100 bg-blue-50 p-7 md:p-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Photo estimate</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Request a whole-home interior painting quote</h2>
              <p className="mt-5 leading-7 text-slate-700">Send wide photos room by room, close-ups of repairs, approximate sizes, ceiling heights, included ceilings and trim, occupancy, access, and timing. We’ll use those details to define the right next step.</p>
              <a className="mt-6 inline-flex font-bold text-blue-700 hover:underline" href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm"><QuoteForm /></div>
          </div>
        </section>
      </main>
    </div>
  );
}
