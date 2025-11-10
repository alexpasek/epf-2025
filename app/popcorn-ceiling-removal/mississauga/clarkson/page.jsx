// app/popcorn-ceiling-removal/mississauga/clarkson/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Clarkson, Mississauga | Level 5 Skim, Paint-Ready",
  description:
    "Clarkson popcorn ceiling removal for post-war bungalows, split-levels and renovated homes. Dust-contained workflow, Level 5 skim, stain-block prime, and a bright, even finish.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/clarkson/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Clarkson, Mississauga",
    description:
      "Residential popcorn removal in Clarkson: safe scrape or encapsulation, Level 5 skim, prime & paint-ready. Clean protection and reliable timelines.",
    url: "/popcorn-ceiling-removal/mississauga/clarkson/",
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
        areaServed: "Clarkson, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/clarkson/",
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
            name: "Clarkson",
            item: "/popcorn-ceiling-removal/mississauga/clarkson/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "We have a split-level home—can you keep stairs and hallways open?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We protect stairs and routes, isolate rooms, and keep daily tidy so the family can move through the house.",
            },
          },
          {
            "@type": "Question",
            name: "Our ceilings were patched around new pot lights—will those rings show?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather around trims during the Level 5 skim so rings and past patch edges disappear after primer.",
            },
          },
          {
            "@type": "Question",
            name: "Can you deal with old leaks or nicotine staining?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We use a stain-blocking primer system so discoloration doesn’t bleed back through the finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide a warranty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—3-year workmanship in writing. We’re WSIB and liability insured.",
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
              Popcorn Ceiling Removal — Clarkson, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Clarkson’s mix of post-war bungalows, split-levels and newer
              infill needs a <strong>Level 5 skim</strong> so ceilings read flat
              under both natural light and LEDs. We work dust-contained, keep
              daily tidy, and deliver a paint-ready finish.
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
            Full-field skim and raking-light checks for a uniform, premium
            finish.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Family-Friendly Workflow</h3>
          <p className="text-gray-600 mt-2">
            Room isolation, clear paths and daily tidy so normal routines
            continue.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean Protection</h3>
          <p className="text-gray-600 mt-2">
            Floors/stairs covered, vents masked, HEPA vacuum-assist sanding at
            source.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Clarkson — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Clarkson</h2>
        <p>
          Clarkson homes near Lakeshore Rd W, Southdown Rd and the Rattray Marsh
          area often show a mix of original ceilings and new patches from
          lighting or layout updates. We begin by testing a small area to
          confirm whether a careful scrape or safe encapsulation is best. When
          texture is heavily painted or the substrate is delicate, encapsulation
          prevents damage; we then apply a full <strong>Level 5 skim</strong>{" "}
          for a consistent surface.
        </p>
        <p>
          Split-levels and open plans make lighting transitions reveal
          imperfections. We skim full fields, check under raking light from
          windows and fixtures, and re-touch before primer. Stain-blocking
          primer systems prevent old moisture or nicotine from bleeding back
          through.
        </p>
        <p>
          Families need hallways and kitchens accessible—so we maintain
          protected routes, keep non-work rooms usable, and coordinate day by
          day to reduce disruption. You’ll have a clear written scope at the
          start, photo updates during the job, and a straightforward handover to
          paint or we can finish it.
        </p>
      </section>

      {/* HOME TYPES */}
      <section id="homes" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Typical Clarkson Homes We Handle
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>Post-war bungalows with multiple paint layers on texture.</li>
          <li>Split-levels where stair lighting exposes waves and seams.</li>
          <li>Renovated main floors needing uniform reflectance end-to-end.</li>
          <li>
            Pot-light upgrades with visible rings around trims (blended out).
          </li>
          <li>Rooms with old leak marks or nicotine (blocked at primer).</li>
        </ul>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">On-Site Workflow (Clarkson)</h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Protect entries, floors and stairs; seal openings; mask vents.
          </li>
          <li>
            Method test: safe scrape vs. encapsulation, based on substrate
            condition.
          </li>
          <li>
            Level 5 skim across full areas; raking-light checks; re-skim where
            needed.
          </li>
          <li>
            Feather around pot-light cutouts and past patches so edges vanish.
          </li>
          <li>
            Stain-blocking primer system; even, bright, paint-ready handoff.
          </li>
          <li>Daily tidy and simple comms; walk-through at completion.</li>
          <li>
            WSIB + liability insured; written 3-year workmanship warranty.
          </li>
        </ul>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Projects in Clarkson</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Split-Level Near Rattray Marsh",
              near: "Lakeshore Rd W & Meadow Wood Rd",
              scope:
                "Encapsulation; full Level 5 skim; stain-block prime; edges crisp at trims.",
              duration: "3 days",
              outcome:
                "Uniform read down stair flight; no seam shadows under LEDs.",
            },
            {
              title: "Bungalow in Park Royal",
              near: "Southdown Rd corridor",
              scope:
                "Scrape + Level 5 skim; pot-light rings blended; prime & paint-ready main floor.",
              duration: "2.5 days",
              outcome:
                "Smooth, even ceilings across living/dining/kitchen; family stayed on schedule.",
            },
            {
              title: "Renovated Main Floor",
              near: "Clarkson Village area",
              scope:
                "Mixed old/new drywall; full skim; raking-light checks; primer system for leaks.",
              duration: "3 days",
              outcome:
                "Bright, premium finish with consistent reflectance across open plan.",
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
        <h2 className="text-2xl font-semibold">FAQ — Clarkson</h2>
        {[
          {
            q: "Can you keep kitchen and hallway usable during the job?",
            a: "Yes. We plan room-by-room, protect routes and tidy daily.",
          },
          {
            q: "We see lines around new pot lights—will those disappear?",
            a: "We feather those areas during the Level 5 skim so they vanish after primer.",
          },
          {
            q: "What about old stains from past leaks?",
            a: "We use a stain-blocking primer so discoloration doesn’t return.",
          },
          {
            q: "Are you insured and do you provide a warranty?",
            a: "WSIB + liability insured; 3-year workmanship warranty in writing.",
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
            Ready for a Level 5 smooth ceiling in Clarkson?
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
