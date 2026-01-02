import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Alton Village";
const SLUG = "alton-village";
const CITY_BASE = "/popcorn-ceiling-removal/burlington";
export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Newer-Home Level 5 Finish`,
  description: `${NAME} popcorn/stipple removal near Dundas, Tim Dobbie Dr & Appleby/Walker's Line. Sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer & optional paint. Ideal for open-concept plans, two-storey foyers and pot-light upgrades.`,
  keywords: [
    "popcorn ceiling removal Alton Village",
    "popcorn ceiling contractor Alton Village",
    "popcorn ceiling removal contractor Alton Village",
    "professional popcorn ceiling removal Alton Village",
    "popcorn ceiling removal service Alton Village",
    "smooth ceiling contractor Alton Village",
    "ceiling texture removal Alton Village",
    "stipple ceiling removal Alton Village",
    "ceiling resurfacing Alton Village",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Newer-home specialists: containment, Level 5 skim, HEPA sanding, primer & paint. Pot light coordination for open concepts and tall foyers in Alton Village.",
    url: `${CITY_BASE}/${SLUG}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn/Stipple/Stucco Ceiling Removal",
          "Ceiling Smoothing & Flattening",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
          "Ceiling Painting",
        ],
        areaServed: `${NAME}, Burlington`,
        url: `${CITY_BASE}/${SLUG}/`,
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Service Areas",
            item: "/service-areas",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: "/services/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Burlington",
            item: `${CITY_BASE}/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: NAME,
            item: `${CITY_BASE}/${SLUG}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do newer Alton Village homes still need Level 5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—open concepts and two-storey foyers with lots of pot lights demand a flat, uniform read. We skim full-field to Level 5 so long runs look seamless.",
            },
          },
          {
            "@type": "Question",
            name: "Is it dusty or disruptive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms, protect floors/stairs, mask HVAC and sand with HEPA-connected tools. Daily tidy means main areas stay usable.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot lights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We cut openings, patch and blend, then prime and can apply finish coats.",
            },
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-12 space-y-12">
      <JsonLd />

      {/* HERO + FORM */}
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl ring-1 ring-slate-700/40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] p-8 md:p-12 relative">
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300">
              Burlington • {NAME}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Smooth ceilings for Alton Village’s open-concept homes
            </h1>
            <p className="mt-4 text-lg text-slate-200 max-w-3xl">
              Our{" "}
              <strong>popcorn ceiling removal Alton Village</strong> workflow is
              built for north Burlington layouts. As the{" "}
              <strong>popcorn ceiling removal contractor Alton Village</strong>{" "}
              homeowners keep on speed dial, we seal rooms, run HEPA extraction,
              and complete <strong>professional popcorn ceiling removal Alton Village</strong>{" "}
              projects until open-concept spaces read like show homes.
            </p>
            <p className="text-lg text-slate-200 max-w-3xl">
              Need a{" "}
              <strong>popcorn ceiling contractor Alton Village</strong> crew
              that can stay tidy while kids are home? Our{" "}
              <strong>popcorn ceiling removal service Alton Village</strong>{" "}
              residents trust handles pot-light grids, two-storey foyers, and
              basement media rooms with the same containment-first approach.
              We’re also the{" "}
              <strong>smooth ceiling contractor Alton Village</strong>{" "}
              electricians recommend when schedules are tight.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-200">
              {[
                "2–3 day turnarounds for main floors & foyers",
                "Pot-light layout + speaker cutouts coordinated",
                "Contains dust for families and pets",
                "Stain-block prime + optional finish paint",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-2xl bg-white/10 px-4 py-3"
                >
                  <span>✨</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={phoneHref} className="btn-cta">
                📞 (647) 923-6784
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Send project photos →
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-slate-200">
              {[
                ["HEPA-contained", "Dust control you can live through"],
                ["Level 5 skim", "Flat read in raking light"],
                ["Warranty", "Insured + written workmanship coverage"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 px-4 py-3 bg-white/5"
                >
                  <p className="text-sm uppercase tracking-wide text-slate-300">
                    {title}
                  </p>
                  <p className="text-base font-semibold">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 rounded-3xl bg-white text-slate-900 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold">
              Request your Alton Village quote
            </h2>
            <p className="text-sm text-slate-500">
              Share ceiling sizes, paint build-up notes, and foyer photos for a
              same-day plan.
            </p>
            <div className="mt-4">
              <QuoteForm />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* SUB NAV */}
      <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
        <a href="#signals" className="underline-offset-2 hover:underline">
          Why us
        </a>
        <a href="#workflow" className="underline-offset-2 hover:underline">
          Process
        </a>
        <a href="#pricing" className="underline-offset-2 hover:underline">
          Pricing
        </a>
        <a href="#local" className="underline-offset-2 hover:underline">
          Local details
        </a>
        <a href="#prep" className="underline-offset-2 hover:underline">
          Prep
        </a>
        <a href="#searches" className="underline-offset-2 hover:underline">
          Search trends
        </a>
        <a href="#city-hub" className="underline-offset-2 hover:underline">
          Burlington hub
        </a>
        <a href="#faq" className="underline-offset-2 hover:underline">
          FAQ
        </a>
      </nav>

      {/* PROJECT SIGNALS */}
      <section id="signals" className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">
            Built for north Burlington layouts
          </h2>
          <div className="flex gap-3 text-sm text-slate-500">
            <span>Haber • Norton • Orchard Park</span>
            <span className="hidden sm:inline">|</span>
            <span>407 / QEW access</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Open concepts stay bright",
              body: "Ceiling texture removal Alton Village homeowners request means skimming entire planes—not just patches—so kitchen/living runs stay seamless with pot-light grids.",
            },
            {
              title: "Two-storey foyers, safely staged",
              body: "Stipple ceiling removal Alton Village foyers require secure scaffold towers, guard rails, and clean drop-cloth routes so entries stay usable between passes.",
            },
            {
              title: "Pot lights + speakers ready",
              body: "Coordinate electricians or use our referral. We cut, patch, and blend around fixtures so trims sit tight and ceiling resurfacing Alton Village rooms feel freshly built.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8"
      >
        <h2 className="text-3xl font-semibold">Alton Village workflow</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3 text-slate-700">
          {[
            [
              "01. Contain + test",
              "Zipper walls, floor/stair protection, vent masking. Test patch to decide scrape vs encapsulate for painted texture.",
            ],
            [
              "02. Level 5 skim",
              "Texture removed or locked down, then full-field skim with extra passes at bulkheads, trays, and stair bridging.",
            ],
            [
              "03. Sand, prime, finish",
              "HEPA sanding, raking-light inspection, stain-block primer and optional finish coats. Daily tidy and walkthrough.",
            ],
          ].map(([title, copy]) => (
            <li key={title} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="space-y-4">
        <h2 className="text-3xl font-semibold">
          Local logistics + neighbourhood links
        </h2>
        <p className="text-slate-600 max-w-4xl">
          Access via <strong>Appleby Line</strong>,{" "}
          <strong>Walker's Line</strong>, <strong>Dundas St</strong>, and the{" "}
          <strong>407</strong>/<strong>403</strong> makes staging predictable.
          Crews respect Haber school schedules, Norton's sports traffic, and
          driveway parking limits so evening routines stay calm.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              anchor: "Millcroft smooth ceiling projects",
              href: `${CITY_BASE}/millcroft/`,
              body: "Similar two-storey foyers + golf-course lots.",
            },
            {
              anchor: "Orchard popcorn ceiling updates",
              href: `${CITY_BASE}/orchard/`,
              body: "Townhomes + condo corridors east of Sutton.",
            },
            {
              anchor: "Tansley ceiling resurfacing case studies",
              href: `${CITY_BASE}/tansley/`,
              body: "Compact layouts that still need Level 5 skim.",
            },
          ].map((item) => (
            <Link
              key={item.anchor}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-slate-900">
                {item.anchor}
              </p>
              <p className="text-sm text-slate-600">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEARCHES */}
      <section
        id="searches"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-2xl font-semibold">
          Searches we hear from Alton Village homeowners
        </h2>
        <p className="text-sm text-slate-500">
          These phrases show up in inquiry emails—if you typed one of them,
          you’re in the right place.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
          {[
            "popcorn ceiling Alton Village",
            "popcorn removal Alton Village",
            "scraping popcorn ceiling Alton Village",
            "stripping popcorn ceiling Alton Village",
            "taking off popcorn ceiling Alton Village",
            "taking down popcorn ceiling Alton Village",
            "take out popcorn ceiling Alton Village",
            "get rid of popcorn ceiling Alton Village",
            "removing stucco ceiling Alton Village",
            "stucco ceiling removal Alton Village",
            "cottage cheese ceiling removal Alton Village",
            "painted popcorn ceiling removal Alton Village",
          ].map((term) => (
            <li
              key={term}
              className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              “{term}”
            </li>
          ))}
        </ul>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">Recent Burlington projects</h2>
          <Link
            href="/our-work/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View our work →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <figure
              key={src}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <img
                src={src}
                alt={`${NAME} popcorn ceiling project ${i + 1}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm text-slate-600">
                Dust-controlled prep, Level 5 skim, and bright finish in{" "}
                {NAME}.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="space-y-4">
        <h2 className="text-3xl font-semibold">Pricing, add-ons & scope</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Popular scopes",
              bullets: [
                "Bedrooms + nurseries ready for paint in 48 hours",
                "Kitchen / family room combos with pot lights",
                "18’ foyers & stair bridges with scaffold staging",
              ],
            },
            {
              title: "Drivers that affect price",
              bullets: [
                "Ceiling height + total square footage",
                "Paint build-up (scrape vs encapsulate + skim)",
                "Pot-light, speaker, and HVAC penetrations",
              ],
            },
            {
              title: "Optional add-ons",
              bullets: [
                "Primer + two finish coats",
                "Crown or bulkhead repairs",
                "Closet, basement, or garage ceilings bundled",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          Materials and HST itemized. Multi-room bundles lower the per-square
          foot number. Share photos + rough sizes for a written quote.
        </p>
      </section>

      {/* COST SECTION */}
      <section
        id="cost"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3"
      >
        <h2 className="text-2xl font-semibold">
          Popcorn ceiling removal cost in {NAME}
        </h2>
        <p className="text-slate-700">
          The <strong>popcorn ceiling removal cost Alton Village</strong>{" "}
          homeowners see on their quotes reflects ceiling height, square
          footage, paint build-up, and whether we’re encapsulating before skim.
          Condos or rooms with restricted access may influence crew time, but
          we’ll outline it clearly.
        </p>
        <p className="text-slate-700">
          We break down every line so you understand the{" "}
          <strong>popcorn removal cost Alton Village</strong> families budget
          for, including protection, Level 5 skim, primer, optional paint, and
          fixture coordination.
        </p>
        <p className="text-slate-700">
          Want to compare scrape vs encapsulate? We’ll show you the{" "}
          <strong>cost to scrape popcorn ceiling Alton Village</strong> rooms
          where texture still releases cleanly, alongside resurfacing totals for
          painted ceilings.
        </p>
        <p className="text-sm text-slate-500">
          Send photos with approximate room sizes for a same-day cost range, and
          we’ll lock it in after a quick walkthrough.
        </p>
      </section>

      {/* PREP */}
      <section id="prep" className="space-y-4">
        <h2 className="text-3xl font-semibold">Prep expectations</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-slate-700">
          {[
            "Clear décor + toys; we handle protection, ladders, and scaffold.",
            "Low-odour products with ventilation guidance each night.",
            "Insurance certificates + 3-year workmanship warranty provided.",
            "After-care sheet so you know when to paint walls or add lights.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CITY HUB */}
      <section
        id="city-hub"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3"
      >
        <h2 className="text-2xl font-semibold">Explore the Burlington hub</h2>
        <p className="text-slate-600 max-w-3xl">
          Need examples outside Alton Village? Our Burlington city page includes
          every neighbourhood, timeline expectations, and booking details for
          multi-property owners.
        </p>
        <Link
          href={`${CITY_BASE}/`}
          className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:border-blue-400 hover:text-blue-600 transition"
        >
          Burlington popcorn ceiling removal hub →
        </Link>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h2 className="text-3xl font-semibold">{NAME} FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "How long does a typical Alton Village main floor take?",
              a: "Most open-concept main floors wrap in 2–3 days including skim, HEPA sanding, primer, and tidy handover. Two-storey foyers or painted texture can add a day.",
            },
            {
              q: "Can families stay home while you work?",
              a: "Yes. We stage room-by-room, seal HVAC, and keep pathways tidy so kids and pets can pass through between coats.",
            },
            {
              q: "Do you coordinate pot lights or speaker cutouts?",
              a: "We’ll align with your electrician (or refer one), cut openings, and feather around trims so there are no flashing rings once painted.",
            },
            {
              q: "What about tall stairwells?",
              a: "We bring narrow scaffold towers with foam feet so floors stay safe. Guard rails + daily tidy keep entries usable.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="font-semibold text-slate-900">
                {faq.q}
              </summary>
              <p className="mt-2 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white p-8 shadow-2xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            Ready when you are
          </p>
          <h3 className="mt-2 text-3xl font-semibold">
            Book your Alton Village popcorn ceiling removal
          </h3>
          <p className="text-white/80">
            Share photos for a same-day quote, schedule around school runs, and
            enjoy a Level 5 finish that matches the rest of your renovation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden">
        <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <a href={phoneHref} className="btn-cta flex-1 text-center">
            📞 Call (647) 923-6784
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
