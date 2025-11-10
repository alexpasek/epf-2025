// app/popcorn-ceiling-removal/mississauga/churchill-meadows/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Churchill Meadows, Mississauga | Level 5 Residential",
  description:
    "Churchill Meadows popcorn ceiling removal near Thomas St, Erin Centre Blvd and Tenth Line W. Dust-controlled, Level 5 skim, stain-block primer, paint-ready finish. Pricing guidance and local FAQs.",
  keywords: [
    "popcorn ceiling removal Mississauga",
    "remove popcorn ceiling Mississauga",
    "popcorn ceiling scraping Mississauga",
    "stucco ceiling removal Mississauga",
    "stipple ceiling removal Mississauga",
    "ceiling texture removal Mississauga",
    "ceiling smoothing Mississauga",
    "ceiling flattening Mississauga",
    "skim coat ceiling Mississauga",
    "ceiling resurfacing Mississauga",
    "popcorn ceiling removal cost Mississauga",
    "popcorn ceiling removal price per square foot Mississauga",
    "popcorn ceiling contractors Mississauga",
    "dustless popcorn ceiling removal Mississauga",
    "popcorn ceiling removal near me Mississauga",
    "popcorn ceiling removal condo Mississauga",
    "asbestos testing popcorn ceiling Mississauga",
    "pot light installation after popcorn removal Mississauga",
    "popcorn ceiling painting after removal Mississauga",
  ],
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Churchill Meadows, Mississauga",
    description:
      "Residential popcorn (stucco/stipple) removal with Level 5 skim, dust control and predictable timelines in Churchill Meadows.",
    url: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
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
        areaServed: "Churchill Meadows, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
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
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Churchill Meadows",
            item: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Mississauga?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical residential projects run about $6–$9 per sq ft for removal + Level 5 skim + primer, depending on paint build, access, and repairs. Final quote after inspection/photos.",
            },
          },
          {
            "@type": "Question",
            name: "Is your process dustless?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rooms are sealed, vents masked and tools connected to HEPA vacuums. We keep routes protected and tidy daily.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need asbestos testing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the home was built before ~1990, texture should be lab-tested before disturbance. We can refer third-party testing and wait for clearance.",
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
              Popcorn Ceiling Removal — Churchill Meadows, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Built-2000s homes around{" "}
              <strong>
                Erin Centre Blvd, Churchill Meadows Blvd, Thomas St, Tenth Line
                W
              </strong>
              demand a clean, modern ceiling. We remove or encapsulate texture
              (popcorn, stucco, stipple), then apply a full{" "}
              <strong>Level 5 skim</strong> so hallways and open areas read
              perfectly flat. Sealed rooms, masked vents and HEPA vacuum-assist
              sanding keep dust contained.
            </p>
          </div>
          {/* Right CTAs — both blue */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              <span className="mr-2">📞</span>(647) 923-6784
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
          <a href="#costs" className="hover:underline underline-offset-2">
            Costs
          </a>
          <a href="#services" className="hover:underline underline-offset-2">
            Services
          </a>
          <a href="#signals" className="hover:underline underline-offset-2">
            Local signals
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
            Full-field skim; raking-light checks so seams don’t telegraph.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, masked vents, HEPA vacuum sanding, daily tidy.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Predictable Schedule</h3>
          <p className="text-gray-600 mt-2">
            Clear scope, photo updates, WSIB + liability, 3-year warranty.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Churchill Meadows — project ${
              i + 1
            }`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      {/* LOCAL DETAILS */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Churchill Meadows</h2>
        <p>
          Newer Mississauga homes often show seam telegraphing under bright
          whites. We test a discreet spot; if scraping risks the substrate or
          paint build is heavy, we encapsulate safely, then Level 5 skim.
          Pot-light rings and old patches are feathered so edges disappear after
          primer.
        </p>
        <p>
          Family routes stay open: we protect entries, stairs and main paths and
          work room-by-room so bedrooms and the kitchen stay usable. After skim,
          we inspect in raking light from windows and LEDs, then apply a
          stain-block primer for a bright, even, paint-ready handoff.
        </p>
      </section>

      {/* COSTS */}
      <section id="costs" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Costs & High-Intent Searches</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Typical pricing:</strong> ~<strong>$6–$9 per sq ft</strong>{" "}
            for removal/encapsulation + Level 5 skim + stain-block primer (final
            quote after photos/inspection).
          </li>
          <li>
            Ask about <strong>pot-light cuts</strong> during ceiling smoothing;
            we blend rings so they vanish.
          </li>
          <li>
            <strong>Condo?</strong> We’re condo-friendly across Mississauga;
            quiet tools, protection, elevator coordination.
          </li>
          <li>
            <strong>Asbestos testing:</strong> If built pre-1990, texture must
            be tested before disturbance. Third-party labs only.
          </li>
        </ul>
      </section>

      {/* SERVICES/KEYWORDS */}
      <section id="services" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Services (What People Call It)
        </h2>
        <p className="text-gray-700">
          Popcorn / stucco / stipple <strong>ceiling removal</strong>,{" "}
          <strong>ceiling texture removal</strong>,
          <strong> ceiling scraping</strong>,{" "}
          <strong>ceiling smoothing/flattening</strong>,{" "}
          <strong>skim coat ceiling</strong>, and full{" "}
          <strong>ceiling resurfacing</strong> in Mississauga.
        </p>
      </section>

      {/* LOCAL SEO SIGNALS */}
      <section id="signals" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Landmarks & Micro-Areas We Know
        </h2>
        <p className="text-gray-700">
          Churchill Meadows Community Centre, Erin Centre Blvd, Thomas St,
          Winston Churchill Blvd, Tenth Line W, Eglinton Ave W. Materials
          typically sourced via suppliers along Winston Churchill / Erin Mills
          Pkwy.
        </p>
      </section>

      {/* CASES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in Churchill Meadows
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Two-Storey Near Thomas St",
              near: "Thomas St & Churchill Meadows Blvd",
              scope:
                "Encapsulation + Level 5 skim; stain-block primer; paint-ready.",
              duration: "3 days",
              outcome: "Flat through hallway sightlines; crisp edges at trims.",
            },
            {
              title: "Open Kitchen/Living",
              near: "Erin Centre Blvd area",
              scope:
                "Scrape + full skim; rings feathered; raking-light checks; primer.",
              duration: "2.5 days",
              outcome: "Even reflectance under LEDs; owners painted next day.",
            },
            {
              title: "Stairwell & Landing",
              near: "Tenth Line W corridor",
              scope: "Safe staging; full skim; stain-block primer.",
              duration: "1.5 days",
              outcome: "Uniform read on tall surfaces; minimal disruption.",
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

      {/* City-level local signals if available */}
      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Churchill Meadows</h2>
        {[
          {
            q: "Price per square foot?",
            a: "Most projects fall around $6–$9/sq ft including Level 5 skim and primer; final after inspection.",
          },
          {
            q: "Dustless popcorn ceiling removal?",
            a: "We seal rooms, mask vents, use HEPA vacuums and tidy daily to keep dust down.",
          },
          {
            q: "Pot-light installation after removal?",
            a: "We coordinate sequence with your electrician; we blend rings and patches during skim.",
          },
          {
            q: "Painting after removal?",
            a: "We deliver a paint-ready primer finish; we can also quote finishing coats on request.",
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
            Ready for Level 5 smooth ceilings in Churchill Meadows?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            href={phoneHref}
          >
            📞 (647) 923-6784
          </a>
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            href="/quote/"
          >
            Get my quote
          </a>
        </div>
      </section>

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/popcorn-ceiling-removal/mississauga/"
          className="underline"
        >
          ← Back to Mississauga Popcorn page
        </Link>
        <Link href="/popcorn-ceiling-removal/" className="underline">
          Browse all Popcorn service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>
    </div>
  );
}
