import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Dundas, Hamilton | Level 5 Smooth for Homes",
  description:
    "Residential popcorn ceiling removal in Dundas: dust-controlled workflow, Level 5 skim, stain-block primer and a bright paint-ready finish. Clear schedule, tidy crews, written warranty.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/hamilton/dundas/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Dundas, Hamilton",
    description:
      "Home-focused popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/service-areas/popcorn-ceiling-removal/hamilton/dundas/",
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
        areaServed: "Dundas, Hamilton",
        url: "/service-areas/popcorn-ceiling-removal/hamilton/dundas/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Residential workflows (Dundas)",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home protection: floors, stairs, furniture, room containment, HVAC vent masking",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Level 5 skim with raking-light inspection",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stain-block primer & paint-ready finish",
              },
            },
          ],
        },
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
            name: "Hamilton",
            item: "/service-areas/popcorn-ceiling-removal/hamilton/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Dundas",
            item: "/service-areas/popcorn-ceiling-removal/hamilton/dundas/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will my home be protected during removal and skim-coat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We seal rooms, protect floors and stairs, cover furniture, mask HVAC vents and use HEPA-connected sanding for dust control.",
            },
          },
          {
            "@type": "Question",
            name: "Our ceilings are painted — can you still achieve Level 5 smooth?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test first. If scraping risks damage, we safely encapsulate and then Level 5 skim for a flat, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a typical main floor take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Timelines depend on size and condition, but many main floors finish in a few days with tidy daily wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle pot-light holes, cracks and water stains?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We repair and feather patches, then prime with stain blocker so the finish reads uniform under daylight and LEDs.",
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
  // Prefer Dundas signals; fall back to Hamilton city signals
  let ham = null,
    hood = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "hamilton") ham = cities[i];
  if (ham && ham.neighborhoods) {
    for (let j = 0; j < ham.neighborhoods.length; j++) {
      if (ham.neighborhoods[j].slug === "dundas") hood = ham.neighborhoods[j];
    }
  }
  const signals = (hood && hood.signals) || (ham && ham.signals) || null;

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  const nearby =
    ham && ham.neighborhoods
      ? ham.neighborhoods.filter((n) => n.slug !== "dundas").slice(0, 8)
      : [];

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto] md:items-start md:gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Dundas, Hamilton
            </h1>
            <p className="mt-3 text-gray-700">
              Home-focused, dust-controlled workflow with{" "}
              <strong>Level 5 skim-coat</strong>, stain-block primer and a
              bright, even finish. Floors, stairs and furniture protected;
              predictable schedule; tidy wrap-ups daily.
            </p>
          </div>

          {/* Right-side CTAs */}
          <div className="flex gap-3 md:justify-end md:ml-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="btn-cta"
            >
              📞 (647) 923-6784
            </a>
            <a href="/quote/" aria-label="Open quote form" className="btn-cta">
              Get my quote
            </a>
          </div>
        </div>

        {/* in-page nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#details" className="underline-offset-2 hover:underline">
            Local details
          </a>
          <a href="#scope" className="underline-offset-2 hover:underline">
            Detailed scope
          </a>
          <a href="#cases" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#resources" className="underline-offset-2 hover:underline">
            Local resources
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
          <h3 className="text-xl font-semibold">Homeowner-Friendly</h3>
          <p className="text-gray-600 mt-2">
            Floor & stair protection, room containment and daily tidy wrap-ups
            keep key spaces usable.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, HVAC vent masking and HEPA-assist sanding help keep
            the house clean.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim checked under raking light; stain-block primer for
            an even read.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in a Dundas home — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Popcorn Removal for Dundas Homes</h2>
        <p>
          Dundas light and long sightlines can reveal ceiling waves and tape
          telegraphing. We tailor the workflow: thorough protection, the safest
          removal method, and a <strong>Level 5 skim</strong> that reads flat
          under daylight and LEDs.
        </p>
        <p>
          Rooms are sealed, vents masked and floors covered; we test a discreet
          patch to choose between controlled scrape and safe encapsulation.
          Full-field skim, HEPA sanding and stain-block primer deliver an even,
          paint-ready surface.
        </p>
        <p>
          Near University Plaza, Governor’s Rd and downtown Dundas, angled light
          is common—our raking-light checks catch low areas before primer so
          finished ceilings look consistent throughout.
        </p>
      </section>

      {/* DETAILED SCOPE */}
      <section id="scope" className="prose max-w-none mt-10">
        <h2>Detailed Scope for a Level 5, Paint-Ready Ceiling</h2>
        <ol>
          <li>
            <strong>Protection & Containment:</strong> Floors, stairs, furniture
            protected; rooms sealed; vents masked.
          </li>
          <li>
            <strong>Method Test:</strong> Choose scrape vs encapsulation based
            on paint build and substrate.
          </li>
          <li>
            <strong>Removal/Encapsulation:</strong> Remove texture where
            feasible; otherwise stabilize and skim.
          </li>
          <li>
            <strong>Repairs:</strong> Cracks, tape lifts, fixture moves,
            pot-light rings, and water stains.
          </li>
          <li>
            <strong>Level 5 Skim:</strong> Full-field skim with feathered
            transitions.
          </li>
          <li>
            <strong>Raking-Light Inspection:</strong> Re-skim until the surface
            reads flat.
          </li>
          <li>
            <strong>Vacuum-Assist Sanding:</strong> Capture dust at the tool.
          </li>
          <li>
            <strong>Stain-Block Primer:</strong> Lock down marks and equalize
            porosity.
          </li>
          <li>
            <strong>Paint-Ready Handover:</strong> Leave paint-ready or apply
            finish coats on request.
          </li>
          <li>
            <strong>Tidy Wrap-Up:</strong> Remove masking, vacuum, and reset
            rooms.
          </li>
        </ol>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Dundas Home Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Governor’s Rd Two-Storey",
              near: "west Dundas",
              scope:
                "Painted texture; safe encapsulation; Level 5 skim; stain-block primer.",
              duration: "3 days",
              outcome:
                "Even reflectance through living/dining; joint telegraphing eliminated.",
            },
            {
              title: "Downtown Dundas Detached",
              near: "near King St W",
              scope:
                "Scrape + skim; pot-light rings blended; primer; paint-ready.",
              duration: "2.5 days",
              outcome: "Flat, bright ceiling across hallway and family room.",
            },
            {
              title: "Pleasant Valley Bungalow",
              near: "south Dundas",
              scope:
                "Full skim; raking-light inspection; primer; optional sprayed finish.",
              duration: "3–4 days",
              outcome: "Crisp returns and consistent read across transitions.",
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

      {/* Local signals */}
      {signals ? <LocalSignals signals={signals} /> : null}

      {/* RESOURCES */}
      <section id="resources" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Local Resources for Dundas Homeowners
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            <strong>City guidance:</strong> interior finish notes and when
            inspections may apply.
          </li>
          <li>
            <strong>Waste & recycling:</strong> drywall off-cuts, compound pails
            and paint handling.
          </li>
          <li>
            <strong>Paint & supplies:</strong> retailers along Governor’s / King
            for colour matching and finishes.
          </li>
          <li>
            <strong>Access & staging:</strong> driveway use and pathway
            protection for efficient daily setups.
          </li>
          <li>
            <strong>Neighbour courtesy:</strong> brief notices for short,
            noisier windows; tidy end-of-day resets.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in Dundas?
          </h3>
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

      {/* Nearby Areas */}
      {nearby.length ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Nearby Areas to Dundas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/popcorn-ceiling-removal/hamilton/${n.slug}/`}
                className="pill"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/service-areas/popcorn-ceiling-removal/hamilton/"
          className="underline"
        >
          ← Back to Hamilton Popcorn page
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
