// app/service-areas/popcorn-ceiling-removal/mississauga/streetsville/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Streetsville, Mississauga | Level 5 Smooth, Dust-Controlled",
  description:
    "Streetsville popcorn ceiling removal for bungalows and two-storeys. Dust-contained workflow, Level 5 skim, stain-block prime, and a bright, even finish. WSIB + liability, written warranty.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/mississauga/streetsville/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Streetsville, Mississauga",
    description:
      "Residential popcorn removal in Streetsville: safe scrape or encapsulation, Level 5 skim, prime & paint-ready. Clean protection and predictable scheduling.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/streetsville/",
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
        areaServed: "Streetsville, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/streetsville/",
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
            name: "Streetsville",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/streetsville/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you work around family schedules in Streetsville houses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We isolate rooms, keep pathways clear, and tidy daily so kitchens, bedrooms and entries remain usable.",
            },
          },
          {
            "@type": "Question",
            name: "We have older plaster and some newer drywall—can it still be made smooth?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test first. If scraping risks the substrate, we encapsulate safely, then Level 5 skim across full fields for a uniform, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "Will there be dust in hallways and on stairs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Floors and stairs are protected, vents are masked, and sanding tools connect to HEPA vacuums. We keep travel routes clean.",
            },
          },
          {
            "@type": "Question",
            name: "Do you fix rings around pot lights and old patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We feather around trims and repairs during the Level 5 skim so they disappear after primer.",
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
  // Mississauga local signals (if defined in your data)
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
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Streetsville, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Streetsville’s mix of bungalows and two-storeys benefits from a{" "}
              <strong>Level 5 smooth</strong> so morning sun and long hallway
              sightlines don’t reveal waves or seams. We protect floors and
              stairs, isolate rooms, and leave a bright, paint-ready finish.
            </p>
          </div>

          {/* RIGHT-SIDE CTAs (both blue) */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
            </a>
            <a
              href="/quote/"
              aria-label="Open quote form"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              Get my quote
            </a>
          </div>
        </div>

        {/* In-page nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#details" className="underline-offset-2 hover:underline">
            Local details
          </a>
          <a href="#homes" className="underline-offset-2 hover:underline">
            Home types
          </a>
          <a href="#workflow" className="underline-offset-2 hover:underline">
            On-site workflow
          </a>
          <a href="#cases" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQs
          </a>
        </nav>
      </header>

      {/* HIGHLIGHTS */}
      <section
        id="highlights"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim and raking-light checks so seams don’t telegraph
            down long hallways.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Floor/stair protection, sealed rooms, masked vents, HEPA
            vacuum-assist sanding.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Predictable Schedule</h3>
          <p className="text-gray-600 mt-2">
            Written scope and daily tidy so the family can keep moving through
            the house.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Streetsville — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Streetsville</h2>
        <p>
          Streetsville’s older housing stock—especially near Queen St S and the
          Credit River—often mixes plaster ceilings with newer drywall from
          renovations. We start by testing a discreet area to decide between a
          controlled scrape or safe encapsulation. If the substrate is fragile
          or the texture is painted many times, we encapsulate to protect it,
          then apply a full <strong>Level 5 skim</strong> for a uniform surface.
        </p>
        <p>
          Long sightlines from front entry to the back of the house and strong
          morning sun can reveal joint shadowing. That’s why we skim full
          fields, check under raking light, and re-touch before primer.
          Stain-blocking primer prevents old water marks from returning, and
          careful feathering hides past patchwork and pot-light rings.
        </p>
        <p>
          Families often need stairs and hallways open—so we build clean access
          paths, keep daily tidy-ups, and coordinate room-by-room so bedrooms
          and the kitchen remain usable. You get a clear written scope up front,
          simple communication during the job, and a predictable handover.
        </p>
      </section>

      {/* HOME TYPES */}
      <section id="homes" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Typical Streetsville Homes We Handle
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Post-war bungalows with painted popcorn and mixed past repairs.
          </li>
          <li>
            Two-storey family homes where hallways show seam telegraphing.
          </li>
          <li>
            Renovated kitchens and living rooms needing uniform reflectance.
          </li>
          <li>
            Stairwells and landings that require safe staging and crisp edges.
          </li>
          <li>
            Basement suites with nicotine or moisture staining (blocked at
            primer).
          </li>
        </ul>
      </section>

      {/* WORKFLOW (plain-English, not salesy) */}
      <section id="workflow" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          On-Site Workflow (Streetsville)
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Protect entry, stairs, and floors; seal doorways; mask supply/return
            vents.
          </li>
          <li>
            Test a small spot. If scraping risks damage, encapsulate and proceed
            to Level 5 skim.
          </li>
          <li>
            Skim full fields, not just patches; check under raking light and
            re-skim as needed.
          </li>
          <li>
            Blend around pot-light cutouts and old patches so they vanish after
            primer.
          </li>
          <li>
            Prime with a stain-block system; leave a bright, even, paint-ready
            surface.
          </li>
          <li>Daily tidy and simple updates; walk-through at handover.</li>
          <li>
            WSIB + liability insured; written 3-year workmanship warranty.
          </li>
        </ul>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in Streetsville
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Bungalow Near Queen St S",
              near: "Queen St S & Thomas St",
              scope:
                "Painted popcorn; safe encapsulation; full Level 5 skim; stain-block prime; ready for spray finish.",
              duration: "2.5 days",
              outcome:
                "Seams invisible in hallway sunlight; crisp edges at crown; owners painted next day.",
            },
            {
              title: "Two-Storey Family Home",
              near: "Creditview Rd area",
              scope:
                "Scrape + Level 5 skim in living/dining/hall; pot-light rings blended; prime & paint-ready.",
              duration: "3 days",
              outcome:
                "Even reflectance across long runs; no joint telegraphing under LEDs.",
            },
            {
              title: "Stairwell & Landing",
              near: "Britannia Rd W corridor",
              scope:
                "Safe staging; full skim; raking-light checks; stain-block primer.",
              duration: "1.5 days",
              outcome:
                "Uniform flat read on tall surfaces; clean transitions to adjacent rooms.",
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

      {/* Local signals for Mississauga */}
      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Streetsville</h2>
        {[
          {
            q: "Can you keep bedrooms and kitchens usable while you work?",
            a: "Yes. We isolate rooms and keep daily tidy so family routines continue.",
          },
          {
            q: "Do you fix old patches and lines around trims?",
            a: "We feather and skim so past repair edges and pot-light rings disappear after primer.",
          },
          {
            q: "What if previous owners painted the texture several times?",
            a: "We test first. If scraping is risky, we encapsulate and Level 5 skim to a flat, uniform surface.",
          },
          {
            q: "Is there a warranty?",
            a: "Yes—3-year workmanship in writing. We are WSIB and liability insured.",
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
            Ready for a Level 5 smooth ceiling in Streetsville?
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
