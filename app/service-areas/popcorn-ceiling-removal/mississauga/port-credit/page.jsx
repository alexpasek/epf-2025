// app/service-areas/popcorn-ceiling-removal/mississauga/port-credit/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Port Credit, Mississauga | Residential Level 5",
  description:
    "Residential popcorn ceiling removal in Port Credit: dust-contained workflow, Level 5 skim, stain-block primer and a bright, even finish. Clear scope, tidy crew, written warranty.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Port Credit, Mississauga",
    description:
      "Port Credit homes: dust-controlled popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
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
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "Port Credit, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
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
            item: "/service-areas/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Port Credit",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work clean in occupied homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Rooms are sealed, floors protected end-to-end, vents masked, and sanding tools are connected to HEPA vacuums.",
            },
          },
          {
            "@type": "Question",
            name: "What if the popcorn was painted many times?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a discreet area first. If scraping risks damage, we safely encapsulate, then perform a Level 5 skim for a flat, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle pot-light cutouts, patches and stains?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We feather around fixtures and seams during the skim, then use stain-blocking primer so everything reads uniformly bright.",
            },
          },
          {
            "@type": "Question",
            name: "Is your work insured and warrantied?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We carry WSIB and liability coverage and provide a written 3-year workmanship warranty with every job.",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
  // Pull Mississauga signals if present
  let miss = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="md:flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Port Credit, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Residential specialists for Port Credit houses—bungalows,
              side-splits, townhomes and renovations near Lakeshore Rd E. We
              work <strong>dust-contained</strong>, deliver a true{" "}
              <strong>Level 5 skim</strong>, and leave a bright, modern,{" "}
              <strong>paint-ready</strong> ceiling. Clear scope, predictable
              schedule, tidy daily wrap-ups.
            </p>
          </div>

          {/* RIGHT CTAs (both blue) */}
          <div className="md:ml-auto flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
            </a>
            <a
              href="/quote/"
              aria-label="Open quote form"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md active:brightness-95 transition"
            >
              Get my quote
            </a>
          </div>
        </div>

        {/* in-page nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#why" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#local" className="underline-offset-2 hover:underline">
            Local details
          </a>
          <a href="#cases" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing & schedule
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQs
          </a>
        </nav>
      </header>

      {/* WHY (sales bullets) */}
      <section id="why" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          [
            "Dust-Controlled in Lived-In Homes",
            "Full containment, floor & stair protection, vent masking, HEPA vacuum-assist sanding.",
          ],
          [
            "True Level 5 Smooth",
            "Full-field skim, raking-light checks from windows and long sightlines, stain-block primer.",
          ],
          [
            "Repairs, Pot-Lights & Patches",
            "Cutouts, seams and old repairs are feathered so they disappear after primer.",
          ],
        ].map(([h, t]) => (
          <div key={h} className="card p-6 bg-white">
            <h3 className="text-xl font-semibold">{h}</h3>
            <p className="text-gray-600 mt-2">{t}</p>
          </div>
        ))}
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Port Credit popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS (long, residential-focused) */}
      <section id="local" className="prose max-w-none mt-10">
        <h2>Local Details for Port Credit Homes</h2>
        <p>
          Port Credit’s lakeside light is beautiful—and unforgiving. Morning sun
          pouring through large windows can highlight ceiling waves and joint
          shadows, especially in older bungalows and side-splits just north and
          east of the marina. Our workflow is designed for{" "}
          <strong>occupied homes</strong>: we isolate work rooms with plastic
          containment, protect hardwood and tile from entry to work area, mask
          vents, and run vacuum-assist sanding to keep dust down while families
          continue their day. If your ceiling texture has been{" "}
          <strong>painted many times</strong>, we’ll test first. When scraping
          risks damage, we use <strong>controlled encapsulation</strong>{" "}
          followed by a full Level 5 skim so the surface reads flat—even under
          raking light.
        </p>
        <p>
          Many Port Credit houses have <strong>pot-light upgrades</strong> and
          past patches from electrical or plumbing work. We eliminate
          telegraphing seams by skimming full fields (not just spot repairs),
          feathering wide, and checking from windows and corridor sightlines.
          After inspection, we prime with a{" "}
          <strong>stain-blocking system</strong> to lock down old water marks or
          nicotine. You get a uniform, bright, modern ceiling that’s ready for
          your finish paint (or we can spray the ceiling for you).
        </p>
        <p>
          Home access and parking off <em>Lakeshore Rd E</em> can be tight—our
          crews plan material drops to avoid blocking driveways and we keep
          daily wrap-ups neat so rooms return to use each evening. Communication
          is simple: a clear written scope before we start,{" "}
          <strong>daily photo updates</strong> during the job, and a punch-list
          walk-through before handover. We’re WSIB and liability insured, and
          every project includes a <strong>3-year workmanship warranty</strong>.
        </p>
      </section>

      {/* CASES (sales proof) */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in Port Credit
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Brick Bungalow Near Waterfront Trail",
              near: "south of Lakeshore Rd E",
              scope:
                "Multiple paint layers on texture; safe encapsulation; full Level 5 skim throughout main; stain-block prime.",
              duration: "3 days",
              outcome:
                "Ceilings read flat in strong window light; owners painted next day.",
            },
            {
              title: "Side-Split Off Stavebank Rd",
              near: "west of Hurontario",
              scope:
                "Pot-light cutouts blended; full-field skim in living/dining; raking-light checks; prime.",
              duration: "2.5 days",
              outcome:
                "No joint shadows down hallway sightlines; bright, even finish.",
            },
            {
              title: "Townhome North of the Marina",
              near: "Port St E area",
              scope:
                "Scrape where safe, encapsulate where needed; Level 5 skim to unify; prime for sprayed ceiling.",
              duration: "3–3.5 days",
              outcome:
                "Premium finish across open plan and stairwell without mess.",
            },
          ].map((cs, i) => (
            <div key={i} className="card p-5 bg-white">
              <div className="font-semibold">{cs.title}</div>
              <div className="text-sm text-gray-600">{cs.near}</div>
              <p className="mt-2 text-gray-700">
                <strong>Scope:</strong> {cs.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {cs.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {cs.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING & SCHEDULE (sales) */}
      <section id="pricing" className="prose max-w-none mt-10">
        <h2>Pricing & Schedule — How We Quote in Port Credit</h2>
        <p>
          We quote <strong>per project</strong> after a short photo review and,
          if needed, a quick on-site confirmation. Price reflects texture type,
          number of paint layers, access, ceiling height, pot-light/patch
          blending, and total square footage. Typical Port Credit homes fall
          within a predictable range once we confirm method (scrape vs
          encapsulate) and final scope. You receive a written plan, start date,
          and daily milestones so you always know what’s next.
        </p>
        <ul>
          <li>
            <strong>Fast photo estimate:</strong> text or email us room photos
            for same-day pricing.
          </li>
          <li>
            <strong>Clean daily wrap-ups:</strong> rooms put back each evening;
            minimal disruption.
          </li>
          <li>
            <strong>Finish options:</strong> paint-ready handoff or we spray the
            ceilings to completion.
          </li>
        </ul>
      </section>

      {/* Local Signals (global Mississauga list if present) */}
      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* Extra local trust signals (inline, safe no-data dependency) */}
      {/* Plain-English site workflow (Port Credit) */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          How we work in Port Credit homes
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Protect from entry to work area (floor runners/ram board, stairs,
            and doorways).
          </li>
          <li>
            Seal door openings with plastic; mask supply/return vents before
            sanding.
          </li>
          <li>
            Use vacuum-connected sanders (HEPA) and keep windows/doors
            controlled to avoid dust plumes.
          </li>
          <li>
            Test a small spot first. If scraping risks damage, encapsulate
            texture and proceed to a Level 5 skim.
          </li>
          <li>
            Skim full fields, not just patches, so joints don’t telegraph in
            morning sun or down hallway sightlines.
          </li>
          <li>
            Check under raking light from windows and existing fixtures; re-skim
            where needed before primer.
          </li>
          <li>
            Prime with a stain-blocking system if there are past leaks or
            nicotine; leave a uniform, paint-ready surface.
          </li>
          <li>
            Blend around pot-light cutouts and previous repairs so trims sit
            clean and edges don’t flash.
          </li>
          <li>
            Daily tidy: remove debris, sweep/vac pathways, and keep non-work
            rooms usable.
          </li>
          <li>
            Simple comms: written scope before start, photo updates during,
            walk-through at handover.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Port Credit Homes</h2>
        {[
          {
            q: "Will you keep dust out of the rest of the house?",
            a: "Yes. We seal work rooms, protect floors/stairs, mask vents and use HEPA-connected sanders. Non-work areas remain clean.",
          },
          {
            q: "Our ceiling has been painted several times—can it still be smooth?",
            a: "We test first. If scraping risks damage, we encapsulate safely and then Level 5 skim so it reads perfectly flat.",
          },
          {
            q: "Can you coordinate with an electrician for new pot lights?",
            a: "Absolutely. We can patch and blend their cutouts so trims sit clean and edges disappear after primer.",
          },
          {
            q: "How long does a typical main-floor take?",
            a: "Most main floors are 2–3 days depending on paint layers, height, access, and blending requirements.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in Port Credit?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/service-areas/popcorn-ceiling-removal/mississauga/"
          className="underline"
        >
          ← Back to Mississauga Popcorn page
        </Link>
        <Link
          href="/service-areas/popcorn-ceiling-removal/"
          className="underline"
        >
          Browse all Popcorn service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>

      {/* Sticky mobile CTA */}
      <div className=" ">
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
