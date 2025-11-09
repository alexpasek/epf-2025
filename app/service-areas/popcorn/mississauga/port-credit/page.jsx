// app/service-areas/popcorn-ceiling-removal/mississauga/port-credit/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Port Credit, Mississauga | Level 5 Smooth for Homes",
  description:
    "Residential popcorn ceiling removal in Port Credit: dust-controlled protection for floors & stairs, Level 5 skim, stain-block primer and a bright, paint-ready finish. Tidy crews, clear schedule, written warranty.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Port Credit, Mississauga",
    description:
      "Home-focused popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
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
        areaServed: "Port Credit, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/port-credit/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Residential workflows (Port Credit)",
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
              text: "Timelines depend on size and condition, but many main floors finish in a few days, with tidy daily wrap-ups so rooms remain usable.",
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

const phoneHref =
  CONTACT && CONTACT.phoneHref ? CONTACT.phoneHref : "tel:+16479236784";

export default function Page() {
  // City & hood signals (prefer Port Credit; fall back to Mississauga)
  var miss = null,
    hood = null;
  for (var i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];
  if (miss && miss.neighborhoods) {
    for (var j = 0; j < miss.neighborhoods.length; j++) {
      if (miss.neighborhoods[j].slug === "port-credit")
        hood = miss.neighborhoods[j];
    }
  }
  var signals =
    hood && hood.signals
      ? hood.signals
      : miss && miss.signals
      ? miss.signals
      : null;

  var images = Array.from({ length: 6 }, function (_, i) {
    return "/services/popcorn/" + (i + 1) + ".webp";
  });

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto] md:items-start md:gap-6">
          {/* Left: title + lead */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Port Credit, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Home-focused, dust-controlled workflow with{" "}
              <strong>Level 5 skim-coat</strong>, stain-block primer and a
              bright, even finish. Floors, stairs and furniture protected;
              predictable schedule; tidy wrap-ups daily.
            </p>
          </div>

          {/* Right: CTAs (always visible/right-aligned on md+) */}
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
        {images.map(function (src, i) {
          return (
            <img
              key={i}
              src={src}
              alt={
                "Popcorn ceiling removal in a Port Credit home — project " +
                (i + 1)
              }
              className="w-full h-56 object-cover rounded-2xl border shadow"
              data-lightbox="true"
            />
          );
        })}
      </div>

      {/* LOCAL LONG COPY — residential & Port Credit specific */}
      <section id="details" className="prose max-w-none mt-10">
        <h2>Popcorn Removal for Port Credit Homes</h2>
        <p>
          Port Credit’s mix of older bungalows, side-splits and renovated semis
          puts ceilings under strong daylight and long sightlines. Texture and
          shallow waves that seem minor at night will show up the next morning
          across living rooms, hallways and stairs. Our approach is built for
          those conditions: protect the house first, then remove or safely
          encapsulate the texture, and finish with a{" "}
          <strong>Level 5 skim</strong>
          so ceilings read perfectly smooth under both daylight and LEDs.
        </p>
        <p>
          We begin with site protection. Hardwood floors, stairs and thresholds
          are covered, HVAC vents are masked, and rooms are sealed so dust stays
          in containment. Where texture has been painted multiple times, we test
          a small area to decide whether controlled scraping or safe
          encapsulation is the better route for your substrate. Either way, the
          goal is a bright, uniform surface that looks like new drywall.
        </p>
        <p>
          After skimming, we inspect the ceiling under raking light from windows
          and downlights. Any remaining waves, tape telegraphing or patch edges
          are re-skimmed, then we prime with a stain-blocking system that locks
          down prior water marks or nicotine. The result is a durable,
          paint-ready surface that keeps its even sheen once you put colour on
          the walls.
        </p>

        <h3>What Makes Port Credit Different</h3>
        <p>
          Around <strong>Lakeshore Rd E/W</strong>,{" "}
          <strong>Mississauga Rd S</strong>, <strong>Stavebank Rd</strong>,{" "}
          <strong>Elizabeth St S</strong> and <strong>Port St E</strong>, homes
          are bright and open. Cross-light from the{" "}
          <strong>Credit River</strong> and the lake can highlight even tiny
          flatness issues. We tune our process to that lighting, checking
          ceilings from the same angles you’ll see every day — morning light in
          the kitchen, afternoon light down the hall, and evening LED hotspots
          near the stairs.
        </p>
      </section>

      {/* DETAILED SCOPE — adds depth and keywords */}
      <section id="scope" className="prose max-w-none mt-10">
        <h2>Detailed Scope for a Level 5, Paint-Ready Ceiling</h2>
        <ol>
          <li>
            <strong>Protection & Containment:</strong> Floors, stairs, railings
            and furniture covered; return/supply vents masked; rooms sealed.
          </li>
          <li>
            <strong>Method Test:</strong> Discreet test to choose controlled
            scraping vs safe encapsulation based on paint build and substrate.
          </li>
          <li>
            <strong>Removal/Encapsulation:</strong> Remove texture where
            feasible; otherwise stabilize, then proceed to full skim.
          </li>
          <li>
            <strong>Repairs:</strong> Address corner cracks, tape lifts, fixture
            and pot-light cutouts, prior patch edges and water stains.
          </li>
          <li>
            <strong>Level 5 Skim:</strong> Full-field skim-coat across the
            ceiling, feathered through transitions and into returns.
          </li>
          <li>
            <strong>Raking-Light Inspection:</strong> Check under window light
            and LEDs; re-skim low areas until the surface reads flat.
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
            <strong>Tidy Wrap-Up:</strong> Remove masking, vacuum, and put rooms
            back so life carries on without mess.
          </li>
        </ol>

        <h3>Common Residential Situations We Fix</h3>
        <ul>
          <li>
            Painted popcorn with <em>multiple layers</em> that resists scraping.
          </li>
          <li>
            Long hallway seams <em>telegraphing</em> under morning light.
          </li>
          <li>
            Pot-light and fixture holes that leave rings after repainting.
          </li>
          <li>
            Small ceiling <em>waves</em> where additions meet older rooms.
          </li>
          <li>Water stains around bathrooms or exterior corners.</li>
        </ul>

        <h3>Materials & Systems We Trust</h3>
        <p>
          Smoothness starts with a stable base. We use professional taping
          compounds designed for extended open time and consistent sanding, then
          prime with a stain-blocking system that reduces flashing. If you’d
          like us to paint, we finish with durable interior coatings that keep a
          clean, even sheen in Port Credit’s bright rooms.
        </p>
      </section>

      {/* CASE STUDIES — residential only */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Port Credit Home Projects
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Stavebank Bungalow",
              near: "west of Stavebank Rd",
              scope:
                "Painted popcorn; safe encapsulation; full Level 5 skim; stain-block primer.",
              duration: "2 days",
              outcome:
                "Flat, bright ceiling with no joint shadows in morning light.",
            },
            {
              title: "Mississauga Rd Side-Split",
              near: "south of QEW",
              scope:
                "Scrape + skim in living/dining; pot-light rings blended; prime; paint-ready.",
              duration: "3 days",
              outcome:
                "Even reflectance across long sightlines; homeowners painted next day.",
            },
            {
              title: "Port St E Townhome",
              near: "east of the Credit River",
              scope:
                "Multiple paint layers; safe encapsulation; full skim; primer for sprayed finish.",
              duration: "3.5 days",
              outcome:
                "Premium, uniform read across open plan and stairwell ceilings.",
            },
          ].map(function (cs, i) {
            return (
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
            );
          })}
        </div>
      </section>

      {/* Local signals — prefer Port Credit, fall back to Mississauga */}
      {signals ? <LocalSignals signals={signals} /> : null}

      {/* LOCAL RESOURCES — Port Credit & Mississauga, no external links required */}
      <section id="resources" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Local Resources for Port Credit Homeowners
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            <strong>City of Mississauga — Building & Renovation:</strong>{" "}
            guidance on interior work and when permits/inspections may apply.
          </li>
          <li>
            <strong>Waste & Recycling (Peel Region):</strong> information for
            drywall off-cuts, compound pails and paint can handling.
          </li>
          <li>
            <strong>Paint & Supplies near Port Credit:</strong> established
            retailers on/near Lakeshore Rd E/W for colour matching and finishes.
          </li>
          <li>
            <strong>Parking & Access:</strong> we plan parking and material
            staging with you to keep driveways and walkways clear during the
            job.
          </li>
          <li>
            <strong>Neighbour Courtesy:</strong> advance notice for short,
            noisier windows (if any) and clean walk-off mats at entrances.
          </li>
        </ul>
        <p className="mt-3 text-gray-700">
          We coordinate with you on the small logistics that keep projects
          smooth: driveway use, stair protection, pet safety, kids’ nap times,
          and quiet windows. The goal is simple — a cleaner, faster path to a
          brighter, modern ceiling.
        </p>
      </section>

      {/* FAQ — homeowner focused */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Port Credit Homes</h2>
        {[
          {
            q: "How do you protect floors, stairs and furniture?",
            a: "We lay protection over floors and stairs, seal rooms, cover furniture and mask HVAC vents. Daily tidy wrap-ups keep living spaces usable.",
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
        ].map(function (f, i) {
          return (
            <details key={i} className="card p-6 bg-white mt-4">
              <summary className="font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          );
        })}
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

      {/* Nearby Areas (internal linking within Mississauga) */}
      {miss && miss.neighborhoods && miss.neighborhoods.length > 1 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            Nearby Areas to Port Credit
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {miss.neighborhoods
              .filter(function (n) {
                return n.slug !== "port-credit";
              })
              .slice(0, 8)
              .map(function (n) {
                return (
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
                );
              })}
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
        <Link href="/services/popcorn/" className="underline">
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
