import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Ancaster, Hamilton | Level 5 Smooth for Homes",
  description:
    "Residential popcorn ceiling removal in Ancaster: dust-controlled workflow, Level 5 skim, stain-block primer and a bright paint-ready finish. Clear schedule, tidy crews, written warranty.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/hamilton/ancaster/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Ancaster, Hamilton",
    description:
      "Home-focused popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/popcorn-ceiling-removal/hamilton/ancaster/",
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
        areaServed: "Ancaster, Hamilton",
        url: "/popcorn-ceiling-removal/hamilton/ancaster/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Residential workflows (Ancaster)",
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
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hamilton",
            item: "/popcorn-ceiling-removal/hamilton/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Ancaster",
            item: "/popcorn-ceiling-removal/hamilton/ancaster/",
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
  // Prefer Ancaster signals; fall back to Hamilton city signals
  let ham = null,
    hood = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "hamilton") ham = cities[i];
  if (ham && ham.neighborhoods) {
    for (let j = 0; j < ham.neighborhoods.length; j++) {
      if (ham.neighborhoods[j].slug === "ancaster") hood = ham.neighborhoods[j];
    }
  }
  const signals = (hood && hood.signals) || (ham && ham.signals) || null;

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  // Nearby Hamilton neighborhoods (exclude current)
  const nearby =
    ham && ham.neighborhoods
      ? ham.neighborhoods.filter((n) => n.slug !== "ancaster").slice(0, 8)
      : [];

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto] md:items-start md:gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Ancaster, Hamilton
            </h1>
            <p className="mt-3 text-gray-700">
              Home-focused, dust-controlled workflow with{" "}
              <strong>Level 5 skim-coat</strong>, stain-block primer and a
              bright, even finish. Floors, stairs and furniture protected;
              predictable schedule; tidy wrap-ups daily.
            </p>
          </div>

          {/* Right-side CTAs match site buttons */}
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
            alt={`Popcorn ceiling removal in an Ancaster home — project ${
              i + 1
            }`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Popcorn Removal for Ancaster Homes</h2>
        <p>
          Ancaster’s bright interiors and large windows reveal ceiling
          imperfections. Our approach is tailored: protect the home thoroughly,
          choose the safest removal method, and finish with a{" "}
          <strong>Level 5 skim</strong>
          so ceilings read flat and modern across open sightlines and
          pot-lights.
        </p>
        <p>
          We start with protection: floors and stairs covered, furniture
          shielded, HVAC vents masked, and rooms sealed so dust stays inside
          containment. If heavy paint layers are present, we test a discreet
          area to decide between controlled scraping and safe encapsulation.
          Either route leads to full-field skim, vacuum-assist sanding and a
          stain-block primer that equalizes porosity and prevents flashing.
        </p>
        <p>
          Near Golf Links Rd, Wilson St and Garner Rd, angled daylight can be
          unforgiving. We inspect under the same raking light your home gets at
          different times of day and re-skim until the ceiling reads
          consistently smooth.
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
        <h2 className="text-2xl font-semibold">
          Recent Ancaster Home Projects
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Wilson St W Two-Storey",
              near: "near Golf Links Rd",
              scope:
                "Painted texture; safe encapsulation; Level 5 skim; stain-block primer.",
              duration: "3 days",
              outcome:
                "Even reflectance in open living/dining; no joint shadowing in morning sun.",
            },
            {
              title: "Meadowlands Detached",
              near: "south of 403",
              scope:
                "Scrape + skim on main; pot-light rings blended; primer; paint-ready.",
              duration: "2.5 days",
              outcome:
                "Flat, bright ceiling through hallway and family room sightlines.",
            },
            {
              title: "Oakhill Bungalow",
              near: "east Ancaster",
              scope:
                "Full skim; raking-light inspection; primer; optional sprayed finish.",
              duration: "3–4 days",
              outcome:
                "Crisp returns and uniform read across bulkhead transitions.",
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

      {/* Local signals (component) */}
      {signals ? <LocalSignals signals={signals} /> : null}

      {/* RESOURCES */}
      <section id="resources" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Local Resources for Ancaster Homeowners
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
            <strong>Paint & supplies:</strong> established retailers along Golf
            Links / Wilson for colour matching.
          </li>
          <li>
            <strong>Access & staging:</strong> driveway use and pathway
            protection for quick daily setups.
          </li>
          <li>
            <strong>Neighbour courtesy:</strong> brief notices for any noisier
            windows; tidy end-of-day resets.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in Ancaster?
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
          <h2 className="text-2xl font-semibold">Nearby Areas to Ancaster</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/popcorn-ceiling-removal/hamilton/${n.slug}/`}
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
        <Link href="/popcorn-ceiling-removal/hamilton/" className="underline">
          ← Back to Hamilton Popcorn page
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
