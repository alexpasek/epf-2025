import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Milton | Level 5 Smooth for Homes",
  description:
    "Residential popcorn ceiling removal in Milton: dust-controlled workflow, Level 5 skim, stain-block primer and a bright paint-ready finish. Clear schedule, tidy crews, written warranty.",
  alternates: { canonical: "/service-areas/popcorn-ceiling-removal/milton/" },
  openGraph: {
    title: "Popcorn Ceiling Removal — Milton",
    description:
      "Home-focused popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/service-areas/popcorn-ceiling-removal/milton/",
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
        areaServed: "Milton, Ontario",
        url: "/service-areas/popcorn-ceiling-removal/milton/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Residential workflows (Milton)",
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
            name: "Milton",
            item: "/service-areas/popcorn-ceiling-removal/milton/",
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
  // Load Milton city + neighborhoods from data (with safe fallbacks)
  let milton = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "milton") milton = cities[i];

  const signals = milton && milton.signals ? milton.signals : null;

  const hoods =
    milton && Array.isArray(milton.neighborhoods) && milton.neighborhoods.length
      ? milton.neighborhoods
      : [
          { slug: "beaty", name: "Beaty" },
          { slug: "clarke", name: "Clarke" },
          { slug: "dempsey", name: "Dempsey" },
          { slug: "scott", name: "Scott" },
          { slug: "wilmott", name: "Wilmott" },
          { slug: "harrison", name: "Harrison" },
          { slug: "bronte-meadows", name: "Bronte Meadows" },
          { slug: "timberlea", name: "Timberlea" },
        ];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto] md:items-start md:gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Milton
            </h1>
            <p className="mt-3 text-gray-700">
              Home-focused, dust-controlled workflow with{" "}
              <strong>Level 5 skim-coat</strong>, stain-block primer and a
              bright, even finish. Floors, stairs and furniture protected;
              predictable schedule; tidy wrap-ups daily.
            </p>
          </div>

          {/* Right-side CTAs (match site style) */}
          <div className="flex gap-3 md:justify-end md:ml-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="btn-cta"
            >
              📞 (647) 812-9135
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
          <a
            href="#neighborhoods"
            className="underline-offset-2 hover:underline"
          >
            Milton neighbourhoods
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
            alt={`Popcorn ceiling removal in a Milton home — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Popcorn Removal for Milton Homes</h2>
        <p>
          Milton’s mix of newer subdivisions and classic pockets means ceilings
          can combine different substrates and lighting conditions. We tailor
          the workflow and finish with a <strong>Level 5 skim</strong> so
          ceilings read flat under daylight and LEDs across open sightlines in
          kitchens, great rooms and hallways.
        </p>
        <p>
          Floors and stairs protected, furniture shielded, rooms sealed and
          vents masked. For painted texture we test a discreet area to choose
          controlled scrape vs safe encapsulation. Either path leads to
          full-field skim, HEPA-connected sanding and stain-block primer for a
          bright, uniform read.
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
        <h2 className="text-2xl font-semibold">Recent Milton Home Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Beaty Two-Storey",
              near: "south-east Milton",
              scope:
                "Painted texture; safe encapsulation; Level 5 skim; stain-block primer.",
              duration: "3 days",
              outcome:
                "Even reflectance in open living/dining; joint shadowing eliminated.",
            },
            {
              title: "Scott Detached",
              near: "west Milton",
              scope:
                "Scrape + skim; pot-light rings blended; primer; paint-ready.",
              duration: "2.5 days",
              outcome: "Flat, bright ceiling across hallway and family room.",
            },
            {
              title: "Timberlea Bungalow",
              near: "central Milton",
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

      {/* LocalSignals for Milton (if present) */}
      {signals ? <LocalSignals signals={signals} /> : null}

      {/* RESOURCES */}
      <section id="resources" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Local Resources for Milton Homeowners
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            <strong>Town guidance:</strong> interior finish notes and when
            permits/inspections may apply.
          </li>
          <li>
            <strong>Waste & recycling:</strong> drywall off-cuts, compound pails
            and paint handling (Halton Region).
          </li>
          <li>
            <strong>Paint & supplies:</strong> established retailers along
            Thompson / Main / Steeles for colour matching.
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

      {/* MILTON NEIGHBOURHOODS */}
      <section id="neighborhoods" className="mt-10">
        <h2 className="text-2xl font-semibold">Milton Neighbourhoods</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {hoods.map((n) => (
            <Link
              key={n.slug}
              href={`/service-areas/popcorn-ceiling-removal/milton/${n.slug}/`}
              className="pill"
            >
              {n.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in Milton?
          </h3>
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
          href="/service-areas/popcorn-ceiling-removal/"
          className="underline"
        >
          ← Back to Popcorn service areas
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
