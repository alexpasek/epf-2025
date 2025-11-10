// app/service-areas/popcorn-ceiling-removal/mississauga/cooksville/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Cooksville, Mississauga | Level 5, Dust-Controlled",
  description:
    "Cooksville popcorn ceiling removal around Dundas, Hurontario and Cawthra. Safe scrape or encapsulation, Level 5 skim, stain-block primer, and a bright, even finish. Insured + 3-year warranty.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/cooksville/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Cooksville, Mississauga",
    description:
      "Residential popcorn removal in Cooksville: clean protection, Level 5 skim, prime & paint-ready. Trusted crew, predictable schedule.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/cooksville/",
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
        areaServed: "Cooksville, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/cooksville/",
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
            name: "Cooksville",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/cooksville/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you work in stages so bedrooms or kitchen stay usable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We isolate rooms, keep routes protected, and tidy daily so the house keeps moving.",
            },
          },
          {
            "@type": "Question",
            name: "Do you blend old patches and pot-light rings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather during the Level 5 skim so edges vanish after primer.",
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
              Popcorn Ceiling Removal — Cooksville, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Houses around Dundas St E, Hurontario St, Cawthra Rd and Camilla
              Rd often mix older ceilings with new patches from lighting or
              layout changes. We deliver a <strong>Level 5 smooth</strong> so
              strong window light and long sightlines don’t reveal waves or
              seams. Clean protection, sealed rooms, and HEPA vacuum-assist
              sanding keep dust down.
            </p>
          </div>
          {/* Right CTAs — both blue */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
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
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim; raking-light checks; uniform reflectance in day or
            LED.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, masked vents, HEPA vacuum-assist sanding, daily tidy.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Schedule Certainty</h3>
          <p className="text-gray-600 mt-2">
            Clear scope, predictable timing, WSIB + liability, 3-year warranty.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Cooksville — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Cooksville</h2>
        <p>
          Closer to the Cooksville GO area and along the Dundas corridor, many
          homes have painted texture and scattered repairs from pot-light
          upgrades. We test a discreet spot first: if scraping risks the
          substrate, we encapsulate and then apply a full{" "}
          <strong>Level 5 skim</strong> so ceilings read perfectly flat.
        </p>
        <p>
          Busy households need access—so we protect entryways, stairs and main
          routes, keep bedrooms usable by working room-by-room, and tidy daily.
          After skim, we inspect under raking light and lock surfaces down with
          a stain-block primer so old leaks or nicotine don’t bleed through.
        </p>
      </section>

      {/* HOME TYPES */}
      <section id="homes" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Typical Cooksville Homes We Handle
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Older bungalows and splits with multiple paint layers on texture.
          </li>
          <li>Two-storeys where long hallways highlight seam telegraphing.</li>
          <li>
            Renovated main floors needing uniform reflectance across open areas.
          </li>
          <li>Stairwells/landings requiring safe staging and crisp edges.</li>
          <li>
            Rooms with old stains (blocked at primer) or visible patch edges.
          </li>
        </ul>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          On-Site Workflow (Cooksville)
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Protect floors/stairs; seal doors; mask vents; plan room sequence.
          </li>
          <li>
            Method test: safe scrape vs encapsulation based on substrate/paint
            build.
          </li>
          <li>
            Level 5 skim across full fields; raking-light checks; touch-ups
            before primer.
          </li>
          <li>
            Feather pot-light rings and old patch edges until they disappear.
          </li>
          <li>
            Stain-block primer; paint-ready handoff; walkthrough at completion.
          </li>
        </ul>
      </section>

      {/* LOCAL SEO SIGNALS */}
      <section id="signals" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Landmarks & Micro-Areas We Know
        </h2>
        <p className="text-gray-700">
          Dundas St E & West; Hurontario St; Cawthra Rd; Camilla Rd; Cooksville
          GO; John C. Price Park; Floradale Park; TL Kennedy area. We typically
          source paint/materials via suppliers along Dundas/Hurontario for quick
          logistics.
        </p>
      </section>

      {/* CASES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in Cooksville
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Two-Storey Near Cawthra",
              near: "Cawthra Rd & Dundas St E",
              scope:
                "Encapsulation, Level 5 skim, stain-block prime, paint-ready.",
              duration: "3 days",
              outcome:
                "Even reflectance across living/dining; clean transitions.",
            },
            {
              title: "Bungalow South of Dundas",
              near: "Camilla Rd area",
              scope:
                "Scrape + Level 5 skim; pot-light rings feathered; primer system.",
              duration: "2.5 days",
              outcome:
                "No joint shadows in hallway light; owners finished paint next day.",
            },
            {
              title: "Stairwell & Landing Refresh",
              near: "Hurontario corridor",
              scope:
                "Safe staging; full skim; raking-light checks; stain-block primer.",
              duration: "1.5 days",
              outcome: "Crisp edges on tall surfaces; bright, uniform finish.",
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
        <h2 className="text-2xl font-semibold">FAQ — Cooksville</h2>
        {[
          {
            q: "Can you keep rooms accessible?",
            a: "Yes. We sequence rooms, keep routes protected and tidy daily.",
          },
          {
            q: "Do pot-light rings and patches disappear?",
            a: "We feather during Level 5 skim so they vanish after primer.",
          },
          {
            q: "Insurance & warranty?",
            a: "WSIB + liability; written 3-year workmanship warranty.",
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
            Ready for a Level 5 smooth ceiling in Cooksville?
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
