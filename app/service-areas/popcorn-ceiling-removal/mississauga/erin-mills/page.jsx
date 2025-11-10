// app/service-areas/popcorn-ceiling-removal/mississauga/erin-mills/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Erin Mills, Mississauga | Level 5 Smooth for Homes",
  description:
    "Residential popcorn ceiling removal in Erin Mills: floor & stair protection, dust-controlled workflow, Level 5 skim, stain-block primer and a bright paint-ready finish. Clear schedule, tidy crews, written warranty.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/erin-mills/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Erin Mills, Mississauga",
    description:
      "Home-focused popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/erin-mills/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  var data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "Erin Mills, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/erin-mills/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Residential workflows (Erin Mills)",
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
            name: "Mississauga",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Erin Mills",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/erin-mills/",
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

const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";

export default function Page() {
  // Prefer Erin Mills signals; fall back to Mississauga city signals
  var miss = null,
    hood = null;
  for (var i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];
  if (miss && miss.neighborhoods) {
    for (var j = 0; j < miss.neighborhoods.length; j++) {
      if (miss.neighborhoods[j].slug === "erin-mills")
        hood = miss.neighborhoods[j];
    }
  }
  var signals = hood?.signals || miss?.signals || null;

  var images = Array.from(
    { length: 6 },
    (_, i) => "/services/popcorn-ceiling-removal/" + (i + 1) + ".webp"
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO - two-column grid keeps blue CTAs visible on the right */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto] md:items-start md:gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Erin Mills, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Home-focused, dust-controlled workflow with{" "}
              <strong>Level 5 skim-coat</strong>, stain-block primer and a
              bright, even finish. Floors, stairs and furniture protected;
              predictable schedule; tidy wrap-ups daily.
            </p>
          </div>

          {/* Right: CTAs (both blue) */}
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
            keep key spaces usable while we work.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, HVAC vent masking and HEPA-assist sanding help keep
            the house clean and comfortable.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim checked under raking light; stain-block primer for a
            uniform, bright read across rooms and hallways.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={
              "Popcorn ceiling removal in an Erin Mills home — project " +
              (i + 1)
            }
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY — residential & Erin Mills specific */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Popcorn Removal for Erin Mills Homes</h2>
        <p>
          Erin Mills is a family neighbourhood with two-storey homes,
          side-splits and townhomes where morning sun and evening LEDs can
          reveal every ceiling imperfection. Painted popcorn, shallow waves and
          tape telegraphing often look fine at night but show up across hallways
          and open-plan living areas the next day. Our process is tuned to these
          conditions: protect the house thoroughly, choose the safest removal
          method, and finish with a <strong>Level 5 skim</strong> so your
          ceilings read flat and modern from foyer to family room.
        </p>
        <p>
          We start with protection: floors and stairs covered, railings wrapped,
          furniture shielded, HVAC vents masked, and rooms sealed so dust stays
          within containment. If the texture has multiple paint layers, we test
          a discreet section to decide between controlled scraping and safe
          encapsulation. Either way, your result is the same — a uniform surface
          that looks like fresh drywall once primed.
        </p>
        <p>
          After skimming, we check ceilings in raking light from windows and
          downlights. Any low areas or shadowed seams are re-skimmed, then we
          prime with a stain-blocking system that equalizes porosity and
          prevents flashing. Around <strong>Erin Mills Pkwy</strong>,{" "}
          <strong>Glen Erin Dr</strong>, <strong>Eglinton Ave W</strong> and{" "}
          <strong>Credit Valley Rd</strong>, long sightlines and bright rooms
          can be unforgiving — we inspect from those same angles so your
          ceilings stay smooth in real life, not just in photos.
        </p>
        <p>
          If your project includes lighting updates near the kitchen or main
          hallway, we blend pot-light cutouts, fixture moves and prior patches
          so they disappear after primer. For homes with higher landings,
          stairwells or bulkheads, we stage access safely and keep edges crisp
          where planes meet skylight wells and returns.
        </p>
        <p>
          Communication is simple: you get a clear scope and schedule up front,
          photo updates during the job, and tidy daily wrap-ups so routines
          continue. We are WSIB and liability insured and include a written
          3-year workmanship warranty.
        </p>
      </section>

      {/* DETAILED SCOPE */}
      <section id="scope" className="prose max-w-none mt-10">
        <h2>Detailed Scope for a Level 5, Paint-Ready Ceiling</h2>
        <ol>
          <li>
            <strong>Protection & Containment:</strong> Floors, stairs, railings,
            cabinetry and furniture protected; rooms sealed; vents masked.
          </li>
          <li>
            <strong>Method Test:</strong> Small area test to choose scrape vs
            encapsulation according to paint build and substrate.
          </li>
          <li>
            <strong>Removal/Encapsulation:</strong> Remove texture where
            feasible; otherwise stabilize and proceed to full skim.
          </li>
          <li>
            <strong>Repairs:</strong> Address corner cracks, tape lifts, fixture
            moves, pot-light rings, previous patch edges and water stains.
          </li>
          <li>
            <strong>Level 5 Skim:</strong> Full-field skim across the ceiling;
            feathered through transitions and into bulkheads/returns.
          </li>
          <li>
            <strong>Raking-Light Inspection:</strong> Check from windows and
            LEDs; re-skim low areas until the surface reads flat.
          </li>
          <li>
            <strong>Vacuum-Assist Sanding:</strong> Smooth the surface while
            capturing dust at the tool.
          </li>
          <li>
            <strong>Stain-Block Primer:</strong> Lock down marks and equalize
            porosity for a bright, uniform read.
          </li>
          <li>
            <strong>Paint-Ready Handover:</strong> Leave a clean, protected site
            or complete finish coats on request.
          </li>
          <li>
            <strong>Tidy Wrap-Up:</strong> Remove masking, vacuum and reset
            rooms so life carries on without mess.
          </li>
        </ol>

        <h3>Common Residential Situations We Fix</h3>
        <ul>
          <li>
            Painted popcorn with <em>multiple layers</em> that resists scraping.
          </li>
          <li>
            Seams <em>telegraphing</em> along long hallways in morning light.
          </li>
          <li>
            Pot-light and fixture moves that leave rings after repainting.
          </li>
          <li>
            Subtle <em>waves</em> where additions meet original rooms.
          </li>
          <li>Water stains near bathrooms or exterior corners.</li>
        </ul>

        <h3>Materials & Systems We Trust</h3>
        <p>
          We use professional taping compounds that sand predictably and prime
          with a stain-blocking system that minimizes flashing. If you’d like us
          to paint, we finish with durable interior coatings that keep a clean,
          even sheen in Erin Mills’ bright rooms.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Erin Mills Home Projects
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Eglinton West Two-Storey",
              near: "near Eglinton Ave W & Erin Mills Pkwy",
              scope:
                "Painted texture; safe encapsulation; full Level 5 skim; stain-block primer.",
              duration: "3 days",
              outcome:
                "Even reflectance across living/dining; no seam shadowing in morning light.",
            },
            {
              title: "Glen Erin Side-Split",
              near: "south of Credit Valley Rd",
              scope:
                "Scrape + skim on main; pot-light rings blended; prime; paint-ready.",
              duration: "2.5 days",
              outcome:
                "Flat, bright ceiling through hallway and family room sightlines.",
            },
            {
              title: "Near Credit Valley Hospital",
              near: "Credit Valley Rd area",
              scope:
                "Vaulted section; full skim; raking-light inspection; primer for sprayed finish.",
              duration: "3–4 days",
              outcome:
                "Crisp returns and uniform read in skylight well and bulkhead transitions.",
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

      {/* LOCAL RESOURCES */}
      <section id="resources" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Local Resources for Erin Mills Homeowners
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            <strong>City of Mississauga — Building & Renovation:</strong>{" "}
            interior work guidance and when permits/inspections may apply.
          </li>
          <li>
            <strong>Waste & Recycling (Peel Region):</strong> drywall off-cuts,
            compound pails and paint handling information.
          </li>
          <li>
            <strong>Paint & Supplies:</strong> established retailers along
            Eglinton Ave W, Erin Mills Pkwy and Ridgeway Dr for colour matching
            and finishes.
          </li>
          <li>
            <strong>Access & Staging:</strong> we plan driveway use, pathway
            protection and staging so daily routines remain simple.
          </li>
          <li>
            <strong>Neighbour Courtesy:</strong> brief notices for any short,
            noisier windows; clean walk-off mats and tidy end-of-day resets.
          </li>
        </ul>
        <p className="mt-3 text-gray-700">
          We coordinate the small logistics that keep projects smooth: pet
          safety, kids’ nap times, school pick-ups, and room sequencing so key
          spaces remain usable. The goal is a cleaner, faster path to a modern,
          smooth ceiling.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Erin Mills Homes</h2>
        {[
          {
            q: "How do you protect floors, stairs and furniture?",
            a: "We cover floors and stairs, seal rooms, shield furniture and mask HVAC vents. Daily tidy wrap-ups keep living spaces usable.",
          },
          {
            q: "Our ceilings have been painted — can you still make them smooth?",
            a: "Yes. We test first. If scraping risks damage, we encapsulate and then apply a Level 5 skim for an even, paint-ready surface.",
          },
          {
            q: "What about pot-light holes, corner cracks and past patches?",
            a: "We repair and feather these areas during the skim so they disappear after primer and finish coats.",
          },
          {
            q: "How long will a typical main floor take?",
            a: "Timing depends on square footage and condition, but many main floors are completed in a few days with predictable scheduling.",
          },
          {
            q: "Is your work insured and warrantied?",
            a: "Yes. WSIB + liability insured and a written 3-year workmanship warranty.",
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
            Ready for a Level 5 smooth ceiling in Erin Mills?
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

      {/* Nearby Areas (internal linking within Mississauga) */}
      {miss?.neighborhoods?.length > 1 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Nearby Areas to Erin Mills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {miss.neighborhoods
              .filter((n) => n.slug !== "erin-mills")
              .slice(0, 8)
              .map((n) => (
                <Link
                  key={n.slug}
                  href={
                    "/service-areas/popcorn-ceiling-removal/mississauga/" +
                    n.slug +
                    "/"
                  }
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
