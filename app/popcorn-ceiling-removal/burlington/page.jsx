// app/popcorn-ceiling-removal/burlington/page.jsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_NAME, CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Burlington";
const SLUG = "/popcorn-ceiling-removal/burlington/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  ["downtown-burlington", "Downtown Burlington"],
  ["brant", "Brant"],
  ["maple", "Maple"],
  ["freeman", "Freeman"],
  ["aldershot", "Aldershot"],
  ["tyandaga", "Tyandaga"],
  ["brant-hills", "Brant Hills"],
  ["mountainside", "Mountainside"],
  ["headon-forest", "Headon Forest"],
  ["palmer", "Palmer"],
  ["millcroft", "Millcroft"],
  ["tansley", "Tansley"],
  ["orchard", "Orchard"],
  ["alton-village", "Alton Village"],
  ["shoreacres", "Shoreacres"],
  ["roseland", "Roseland"],
  ["longmoor", "Longmoor"],
  ["pinedale", "Pinedale"],
  ["elizabeth-gardens", "Elizabeth Gardens"],
];

const FAQS = [
  {
    q: `How much does popcorn ceiling removal cost in ${CITY}?`,
    a: "Cost depends on ceiling size, height, whether the texture is painted, fixture counts, and how much repair/skim is needed. Share photos and dimensions for a firm written quote.",
  },
  {
    q: "Is popcorn ceiling removal dusty?",
    a: "Work areas are sealed, floors and corridors protected, HVAC masked where needed, and sanding is HEPA-connected to reduce airborne dust. We tidy daily to keep the home usable.",
  },
  {
    q: "Do you remove stipple or stucco ceilings too?",
    a: "Yes. The best approach depends on texture type, paint layers, and the substrate. We recommend the safest path to a smooth, modern ceiling after a quick assessment.",
  },
  {
    q: "What's the difference between scraping and skim coating?",
    a: "Scraping removes the texture when feasible. Skim coating (often used for painted texture) creates a smooth surface with better finish control and fewer risks, then we finish to Level 5.",
  },
  {
    q: "How long does a bedroom usually take?",
    a: "Many bedrooms take 1-2 days depending on drying time, repairs, and whether painting is included. Larger or painted ceilings can take longer.",
  },
  {
    q: "Do you provide a Level 5 skim coat finish?",
    a: "Yes. A full-field Level 5 skim coat creates a uniform, smooth surface that looks clean under pot lights and bright windows.",
  },
  {
    q: "Can you repair cracks and old patches at the same time?",
    a: "Yes. We commonly fix cracks, seams, nail pops, and patchy areas as part of delivering a consistent, paint-ready ceiling.",
  },
  {
    q: "Do you use stain-block primer for water stains?",
    a: "When stains are present, we typically recommend a stain-block primer to reduce the chance of bleed-through and to unify the surface before paint.",
  },
  {
    q: "Can you coordinate pot lights with the ceiling work?",
    a: "Yes. We can plan cutouts and patching around your electrician's schedule so the final finish stays clean and consistent.",
  },
  {
    q: "Do you work in Burlington condos near the waterfront?",
    a: "Yes, subject to building rules. We plan for common-area protection, elevator pads, quiet hours, and tidy daily cleanup to reduce disruption.",
  },
  {
    q: "Should I test for asbestos before removing popcorn ceiling texture?",
    a: "If your home is older, testing is a smart first step before disturbing texture. If testing is positive, the job needs the appropriate next steps and handling.",
  },
];

export const metadata = {
  title: `Popcorn Ceiling Removal Burlington | Level 5 Smooth Finish`,
  description:
    "Burlington popcorn/stipple/stucco ceiling removal with sealed rooms, HEPA sanding, Level 5 skim coat, stain-block primer and optional ceiling painting. Fast quotes.",
  alternates: { canonical: SLUG },
  openGraph: {
    title: `Popcorn Ceiling Removal in ${CITY} | Level 5 Finish`,
    description:
      "House-friendly dust control, HEPA sanding, full-field Level 5 skim coat, stain-block primer and optional painting for Burlington homes and condos.",
    url: SLUG,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function SeoJsonLd() {
  const baseServiceUrl = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
  const quoteUrl = BASE_URL ? `${BASE_URL}/quote/` : "/quote/";
  const providerUrl = BASE_URL ? `${BASE_URL}/` : "/";
  const breadcrumbServiceUrl = BASE_URL ? `${BASE_URL}/popcorn-ceiling-removal/` : "/popcorn-ceiling-removal/";

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Popcorn Ceiling Removal in ${CITY}`,
      serviceType: [
        "Popcorn Ceiling Removal",
        "Stipple Ceiling Removal",
        "Stucco Ceiling Removal",
        "Ceiling Smoothing",
        "Level 5 Skim Coat",
        "Ceiling Priming",
        "Ceiling Painting",
      ],
      provider: {
        "@type": "LocalBusiness",
        name: BRAND_NAME,
        telephone: phoneText,
        url: providerUrl,
      },
      areaServed: { "@type": "City", name: `${CITY}, ON` },
      url: baseServiceUrl,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "CAD",
        url: quoteUrl,
      },
      potentialAction: {
        "@type": "RequestQuoteAction",
        target: quoteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Popcorn Ceiling Removal",
          item: breadcrumbServiceUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: CITY,
          item: baseServiceUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  const process = [
    {
      n: "01",
      t: "Protect + Seal the Work Area",
      d: "Rooms sealed, floors and traffic paths protected, HVAC masked where needed.",
    },
    {
      n: "02",
      t: "Texture Strategy",
      d: "We assess painted vs unpainted texture and choose scrape vs skim for the best finish.",
    },
    {
      n: "03",
      t: "Level 5 Skim Coat",
      d: "Full-field skim coat for a flat, modern ceiling that reads clean in strong light.",
    },
    {
      n: "04",
      t: "HEPA Sanding + Light Checks",
      d: "HEPA-connected sanding and strong-light inspection so flaws don't show after paint.",
    },
    {
      n: "05",
      t: "Prime (Stain-Block When Needed)",
      d: "Primer unifies the surface and helps lock down old stains before paint.",
    },
    {
      n: "06",
      t: "Optional Ceiling Painting",
      d: "Finish coats available, or we leave the ceiling paint-ready.",
    },
  ];

  return (
    <>
      <SeoJsonLd />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images[0]}
            alt={`${CITY} popcorn ceiling removal`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Popcorn Ceiling Removal <br />
              <span className="text-blue-400">{CITY}</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Smooth, modern ceilings with <strong>HEPA dust control</strong>{" "}
              and a <strong>Level 5 skim coat</strong> finish that looks clean
              under pot lights.
            </p>

            <ul className="flex flex-wrap justify-center gap-3 mb-10 text-base md:text-lg">
              {[
                "Sealed rooms + protection",
                "HEPA sanding",
                "Level 5 finish",
                "Prime + optional paint",
              ].map((x) => (
                <li
                  key={x}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  ✓ {x}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                📞 {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600">
                Photos + room sizes = faster, more accurate pricing.
              </p>
            </div>

            <QuoteForm />

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3">Prefer to talk?</p>
              <a
                href={phoneHref}
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                📞 {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Us in {CITY}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">House-Friendly Setup</h3>
              <p className="text-gray-700">
                Sealed rooms, protected floors, HVAC masking where needed, and
                daily tidy.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Finish</h3>
              <p className="text-gray-700">
                Full-field skim coat for a ceiling that reads clean under pot
                lights.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Turnkey Option</h3>
              <p className="text-gray-700">
                Prime + optional paint, plus repair work to keep everything
                uniform.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              className="font-semibold text-blue-600 hover:underline"
              href="/blog/popcorn-ceiling-removal-cost-timeline/"
            >
              Read: Cost & Timeline Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Recent Work in {CITY}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Smooth ceilings with consistent finish—before/after quality you can
            see.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={src}
                  alt={`${CITY} popcorn ceiling removal — project ${i + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-lightbox="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-semibold">Project {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white" id="process">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Dust-Controlled Process
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Serving Burlington homes and condos with practical logistics
            (protection, access, tidy daily cleanup).
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((s) => (
              <div
                key={s.n}
                className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-gray-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING FACTORS */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Pricing Factors (What Affects Cost)
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Per-sq-ft ranges change based on height, painted texture, fixture
            counts, repairs, access, and whether you want paint included.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                What changes the price
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ceiling height & access</li>
                <li>• Painted popcorn / heavy texture</li>
                <li>• Lights, vents, detectors</li>
                <li>• Cracks, seams, stains, old patches</li>
                <li>• Prime + paint included or not</li>
                <li>• Bundling rooms for efficiency</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                Common repairs we handle
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cracks and failed tape seams</li>
                <li>• Nail pops / screw pops</li>
                <li>• Water stains (primer plan)</li>
                <li>• Bulkheads and transitions</li>
                <li>• Pot light cutouts + patching</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Related services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/drywall-installation/"
                  >
                    Drywall & skim coat finishing →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/interior-painting/"
                  >
                    Interior painting →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/popcorn-ceiling-removal/"
                  >
                    Main service page →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO COPY */}
      <section
        className="py-20 bg-white border-t border-gray-100"
        id="burlington-details"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] items-start">
            <div className="space-y-10 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Burlington Popcorn Ceiling Specialists
                </h2>
                <p>
                  {BRAND_NAME} helps {CITY} homeowners, condo boards, and
                  builders remove dated popcorn, stipple, and stucco texture
                  along Lakeshore Road, Tyandaga, Aldershot, and brand-new
                  builds near the GO station. We manage parking, elevator
                  bookings, and quiet hours so ceiling smoothing projects finish
                  on schedule without upsetting neighbors.
                </p>
                <p>
                  Every project includes dust containment, a texture removal or
                  encapsulation plan, a <strong>Level 5 skim coat</strong>,
                  primer, and optional ceiling painting. If you are comparing
                  options, skim{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/popcorn-ceiling-removal/"
                  >
                    our full popcorn ceiling removal guide
                  </Link>{" "}
                  or book a quick site visit through the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/quote/"
                  >
                    online quote form
                  </Link>{" "}
                  for written pricing.
                </p>
                <p>
                  Need coordinated services? We line up drywall repairs,{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/drywall-installation/"
                  >
                    bulkhead framing
                  </Link>
                  , and{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/interior-painting/"
                  >
                    ceiling painting
                  </Link>{" "}
                  so the finish stays consistent from room to room. Browse the
                  neighborhood list below for hyper-local logistics, or jump to
                  the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="#process"
                  >
                    process overview
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Local Logistics + Turnaround
                </h3>
                <p>
                  Burlington clients lean on us for tight turnaround projects
                  when a nursery, rental suite, or basement apartment needs to
                  be painted by the weekend. We coordinate with local
                  electricians for pot light installs, sync with HVAC techs for
                  register adjustments, and plan hallway pads with condo boards
                  at buildings such as Bunton's Wharf, Strata, and Bridgewater
                  Residences. Because we log daily progress photos, property
                  managers can approve the next step without being on-site.
                </p>
                <p>
                  Ceiling conditions vary block to block. Lakeshore condos often
                  have painted texture that requires a full skim, while older
                  Aldershot bungalows might have unpainted popcorn that can be
                  scraped with less prep. Newer developments in Alton Village
                  sometimes include heavy knockdown finishes that need a hybrid
                  scrape and float process to look modern next to smooth drywall
                  bulkheads. We assess texture hardness, existing paint,
                  humidity, and traffic flow before recommending the safest
                  route.
                </p>
                <p>
                  Our estimators live and work in Halton, so they already know
                  which neighborhoods limit start times, which high-rises have
                  strict loading dock schedules, and which property managers
                  demand clean elevator bookings. We plan deliveries around
                  Brant Street traffic and schedule sanding passes when the QEW
                  wind gusts will not push dust back into hallways. That local
                  context keeps projects calm for homeowners juggling
                  work-from-home calls or families trying to maintain quiet nap
                  times.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Moisture, Compliance, and Materials
                </h3>
                <p>
                  Moisture and stain management is a critical part of Burlington
                  ceiling upgrades. Waterfront suites can develop condensation
                  issues, while north-end homes might have older roof leaks that
                  left tannin stains. We use a stain-block primer plan and
                  recommend trusted paint partners such as the{" "}
                  <a
                    className="text-blue-600 font-semibold hover:underline"
                    href="https://share.google/8WdrW77X9YeycOeMM"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sherwin-Williams Burlington paint store
                  </a>{" "}
                  to match ceiling paint for final coats. When municipal
                  permits, condo alteration letters, or noise policies are
                  unclear, we reference the{" "}
                  <a
                    className="text-blue-600 font-semibold hover:underline"
                    href="https://www.burlington.ca/en/building-and-renovating/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    City of Burlington building and renovating resources
                  </a>{" "}
                  so projects stay compliant.
                </p>
                <p>
                  Residents often ask how ceiling work affects resale. Smooth
                  ceilings test well with home inspectors because the Level 5
                  skim coat reveals hidden seam problems, and freshly primed
                  ceilings photograph better for listings in Roseland or
                  Millcroft. If you are preparing for market, we can pair
                  ceiling work with wall paint touch-ups, smoke detector
                  updates, and minor drywall repairs to tell a stronger staging
                  story. Visit our{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/popcorn-ceiling-removal/"
                  >
                    main popcorn ceiling removal page
                  </Link>{" "}
                  to compare service tiers and see how Burlington fits within
                  the regional service map.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Trade Coordination + Dust Control
                  </h3>
                  <p>
                    Contractors and designers appreciate that we map out
                    material staging, water access, and disposal plans up front.
                    We protect hardwoods and stair runners in Shoreacres, cover
                    built-in shelving in Tyandaga, and coordinate elevator keys
                    with concierge staff downtown. When scheduling multiple
                    rooms, we build a sequence so families can still use key
                    spaces at night. Our HEPA sanding stacks pair with air
                    scrubbers to reduce dust on furniture, plants, and
                    electronics—critical for home offices and basement studios.
                  </p>
                  <p>
                    For homeowners balancing budgets, we outline phased plans.
                    Phase one might address bedrooms and hallways, while phase
                    two covers vaulted living rooms or basement suites. Because
                    we document square footage, texture type, and ceiling
                    heights in our CRM, it is easy to pull pricing data if you
                    decide to schedule the next phase a few months later. The
                    same team lead comes back whenever possible so the finish
                    and jobsite routines feel familiar.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Restoration + Visualization
                  </h3>
                  <p>
                    Builder partners and restoration pros call us when
                    remediation work leaves ceilings patchy. We feather blend
                    new drywall with existing gypsum, reinforce seams with
                    fiberglass mesh, and feather bulkhead corners so future pot
                    light layouts look clean. If your project requires asbestos
                    testing, we have third-party labs available and can
                    coordinate next steps once results return.
                  </p>
                  <p>
                    Want to visualize your project? We can reference past
                    Burlington jobs with similar ceiling heights, fixture
                    counts, or condo rules so you know exactly what to expect.
                    Review process photos, dust containment layouts, and primer
                    selection for each project type. Whether it is a penthouse
                    near Spencer Smith Park or a split-level home near Guelph
                    Line, the workflow stays disciplined: protect, remove or
                    encapsulate texture, skim coat, sand with HEPA, prime, and
                    paint.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Getting Started
                </h3>
                <p>
                  To get started, gather ceiling photos, note ceiling heights,
                  and flag any access constraints such as spiral staircases or
                  tiny elevators. Submit everything through the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/quote/"
                  >
                    quote form
                  </Link>{" "}
                  and mention any preferred timelines. We respond quickly with a
                  written scope, optional add-ons, and scheduling windows. That
                  roadmap keeps everyone aligned, whether you are a long-time
                  Burlington resident or you just picked up the keys to a
                  pre-construction condo.
                </p>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-4">
                    Sample Local Project Flow
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>
                      Desk review of your photos, room list, and building rules.
                    </li>
                    <li>
                      On-site verification of access, ceiling height, and
                      texture type.
                    </li>
                    <li>
                      Protection plan for hallways, elevators, and garages.
                    </li>
                    <li>
                      Texture removal or skim strategy based on paint layers.
                    </li>
                    <li>
                      Level 5 skim, HEPA sanding, and raking light inspections.
                    </li>
                    <li>
                      Primer and optional ceiling paint using your preferred
                      brand.
                    </li>
                    <li>
                      Client walkthrough, punch list, and tidy cleanup before
                      furniture reset.
                    </li>
                  </ol>
                </div>
                <p>
                  Halton residents trust us because we communicate often,
                  document every stage, and keep the tidy standards that
                  families expect. When you call, you speak with a project lead
                  who already knows Burlington roads, supply houses, and condo
                  bylaws, which means your ceiling refresh starts faster and
                  finishes without surprises.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg md:sticky md:top-24">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/blog/popcorn-ceiling-removal-cost-timeline/"
                  >
                    Cost & timeline article →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="#neighbourhoods"
                  >
                    Burlington neighbourhood readiness →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/popcorn-ceiling-removal/"
                  >
                    Main popcorn ceiling removal service hub →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/quote/"
                  >
                    Upload photos for a quote →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/services/interior-painting/"
                  >
                    Combine ceiling work with painting →
                  </Link>
                </li>
              </ul>
              <div className="mt-8 p-5 rounded-2xl bg-white border border-blue-100">
                <p className="text-sm uppercase tracking-wide text-blue-600 font-bold mb-2">
                  Service radius
                </p>
                <p className="text-gray-700">
                  Downtown waterfront condos, Tyandaga, Shoreacres, Millcroft,
                  and detached homes throughout Halton.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section className="py-20 bg-white" id="neighbourhoods">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Burlington Neighbourhoods We Serve
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Pick your area for hyper-local logistics and project details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBOURHOODS.map(([slug, name]) => (
              <Link
                key={slug}
                href={`${SLUG}${slug}/`}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {name}
                  </h3>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Popcorn/stipple removal · Level 5 skim · HEPA sanding · Prime
                  & paint
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            FAQ — {CITY}
          </h2>

          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors"
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl"
            >
              Get a Free Quote
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-blue-700 hover:underline"
                href={phoneHref}
              >
                Or call {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur border-2 border-gray-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex-1 text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
          >
            📞 Call
          </a>
          <a
            href="#quote"
            className="flex-1 text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
          >
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
