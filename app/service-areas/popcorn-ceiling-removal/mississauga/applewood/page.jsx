// app/service-areas/popcorn-ceiling-removal/mississauga/applewood/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Applewood, Mississauga | Residential Level 5",
  description:
    "Applewood popcorn ceiling removal near Bloor, Dixie and Burnhamthorpe. Dust-contained workflow, Level 5 skim, stain-block primer, and clean, paint-ready finish. Insured + 3-year warranty.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/applewood/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Applewood, Mississauga",
    description:
      "Residential popcorn removal in Applewood: safe scrape or encapsulation, Level 5 skim, prime & paint-ready. Reliable schedule and tidy crew.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/applewood/",
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
        areaServed: "Applewood, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/applewood/",
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
            name: "Applewood",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/applewood/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you keep key rooms available during the project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We plan room-by-room, keep routes protected, and tidy daily so life continues.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle stains and previous repairs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather old patches, blend pot-light rings, and use stain-block primer so issues don’t return.",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16478129135";

export default function Page() {
  let miss = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Applewood, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Around Applewood Hills and Applewood Acres—near Bloor St, Dixie Rd
              and Burnhamthorpe—older ceilings and newer patches often meet. We
              deliver a<strong> Level 5 smooth</strong> so daylight and LEDs
              read flat and clean. Protection is thorough, dust is controlled,
              and the handoff is paint-ready.
            </p>
          </div>
          {/* Right CTAs — both blue */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 812-9135</span>
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              Get my quote
            </a>
          </div>
        </div>
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="hover:underline underline-offset-2">
            Why us
          </a>
          <a href="#details" className="hover:underline underline-offset-2">
            Local details
          </a>
          <a href="#homes" className="hover:underline underline-offset-2">
            Home types
          </a>
          <a href="#workflow" className="hover:underline underline-offset-2">
            Workflow
          </a>
          <a href="#signals" className="hover:underline underline-offset-2">
            SEO signals
          </a>
          <a href="#cases" className="hover:underline underline-offset-2">
            Recent projects
          </a>
          <a href="#faq" className="hover:underline underline-offset-2">
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
            Skim full fields; inspect in raking light; uniform reflectance in
            day or LED.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean & Tidy</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, masked vents, HEPA vacuum-assist sanding; daily
            cleanup.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Straightforward Handover</h3>
          <p className="text-gray-600 mt-2">
            Paint-ready finish; simple updates; 3-year workmanship warranty.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Applewood — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Applewood</h2>
        <p>
          Homes off Fieldgate Dr, Bloor St, Dixie Rd and Burnhamthorpe Rd often
          have painted popcorn and a history of electrical upgrades. We test a
          discreet area first: if scraping risks the substrate or paint build is
          heavy, we use safe encapsulation before a full{" "}
          <strong>Level 5 skim</strong>. We feather around trims and old repairs
          so edges disappear, then prime with a stain-block system to prevent
          bleed-through.
        </p>
        <p>
          Our workflow keeps stairs and key routes open, with room isolation and
          daily tidy so kitchens and bedrooms remain usable. You get a clear
          scope at the start, photo updates during the job, and a predictable
          handoff.
        </p>
      </section>

      {/* HOME TYPES */}
      <section id="homes" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Typical Applewood Homes We Handle
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Applewood Hills/Acres with painted texture and scattered repairs.
          </li>
          <li>Two-storeys where long hallways show seam telegraphing.</li>
          <li>Open main floors needing consistent reflectance across rooms.</li>
          <li>Stairwells/landings where tall surfaces require safe staging.</li>
          <li>
            Basements or kitchens with prior moisture/nicotine (blocked at
            primer).
          </li>
        </ul>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">On-Site Workflow (Applewood)</h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Protect floors, stairs and entries; seal doorways; mask vents.
          </li>
          <li>Method test: controlled scrape vs safe encapsulation.</li>
          <li>
            Level 5 skim across full fields; raking-light checks; touch-ups.
          </li>
          <li>
            Feather pot-light rings and old patches so they vanish after primer.
          </li>
          <li>Stain-block primer; bright, even, paint-ready finish.</li>
          <li>Daily tidy; simple communications; walkthrough at handover.</li>
        </ul>
      </section>

      {/* LOCAL SEO SIGNALS */}
      <section id="signals" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Landmarks & Micro-Areas We Know
        </h2>
        <p className="text-gray-700">
          Applewood Hills Park, Burnhamthorpe Rd E, Bloor St, Dixie Rd,
          Fieldgate Dr, Tomken Rd, Willowcreek, Fleetwood, Rathburn Rd E.
          Materials typically sourced via nearby suppliers along
          Dixie/Burnhamthorpe for fast logistics.
        </p>
      </section>

      {/* CASES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Projects in Applewood</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Two-Storey Near Fieldgate",
              near: "Fieldgate Dr & Bloor St",
              scope:
                "Encapsulation + Level 5 skim; stain-block primer; paint-ready.",
              duration: "3 days",
              outcome: "Flat ceilings down hallway runs; no seam shadowing.",
            },
            {
              title: "Main Floor Refresh",
              near: "Dixie Rd corridor",
              scope:
                "Scrape + skim; rings feathered; raking-light checks; primer system.",
              duration: "2.5 days",
              outcome:
                "Even reflectance across kitchen/living; crisp edges at trims.",
            },
            {
              title: "Stairwell & Landing",
              near: "Burnhamthorpe Rd E area",
              scope:
                "Safe staging; full skim; stain-block prime; paint-ready finish.",
              duration: "1.5 days",
              outcome: "Uniform look on tall surfaces; tidy daily wrap-ups.",
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

      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Applewood</h2>
        {[
          {
            q: "Can you stage work so bedrooms/kitchen stay available?",
            a: "Yes. We isolate rooms and keep routes usable with daily tidy.",
          },
          {
            q: "Do you handle old leaks and patch edges?",
            a: "We feather repairs and use stain-block primer to prevent bleed-through.",
          },
          {
            q: "Insurance & warranty?",
            a: "WSIB + liability; 3-year workmanship warranty in writing.",
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
            Ready for a Level 5 smooth ceiling in Applewood?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 812-9135
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
        <Link href="/services/popcorn/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>

      {/* Sticky mobile CTA */}
      <div className=" ">
        <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <a href={phoneHref} className="btn-cta flex-1 text-center">
            📞 Call (647) 812-9135
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
