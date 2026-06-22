// app/popcorn-ceiling-removal/oakville/page.jsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_NAME, CONTACT, SITE_URL } from "@/app/config";
import SkylightPopcornBacklinkBlock from "@/components/SkylightPopcornBacklinkBlock";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Oakville";
const SLUG = "/popcorn-ceiling-removal/oakville/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  ["downtown-oakville", "Downtown Oakville"],
  ["old-oakville", "Old Oakville"],
  ["kerr-village", "Kerr Village"],
  ["bronte", "Bronte"],
  ["bronte-creek", "Bronte Creek"],
  ["glen-abbey", "Glen Abbey"],
  ["river-oaks", "River Oaks"],
  ["west-oak-trails", "West Oak Trails"],
  ["palermo-west", "Palermo West"],
  ["clearview", "Clearview"],
  ["college-park", "College Park"],
  ["iroquois-ridge-north", "Iroquois Ridge North"],
  ["falgarwood", "Falgarwood"],
  ["uptown-core", "Uptown Core"],
];

const FAQS = [
  {
    q: "How much does popcorn ceiling removal cost in Oakville?",
    a: "Cost depends on square footage, ceiling height, painted texture, fixture count, repairs, dust containment, primer, and whether painting is included. Send room photos and rough dimensions for a written Oakville quote.",
  },
  {
    q: "Is popcorn ceiling removal dusty?",
    a: "We seal work areas, protect floors and traffic paths, mask HVAC where needed, and use HEPA-connected sanding. The goal is a contained, tidy process with daily cleanup before we leave.",
  },
  {
    q: "Do you remove stipple and stucco ceilings too?",
    a: "Yes. Homeowners use different names for the texture. We assess whether it can be scraped cleanly or should be skim coated for a better smooth ceiling result.",
  },
  {
    q: "Do painted popcorn ceilings need a different approach?",
    a: "Usually, yes. Painted texture often resists water and can damage the drywall paper if it is forced off. We test the ceiling first, then use a scrape, bond, or skim-coat approach based on the surface.",
  },
  {
    q: "Do you provide a Level 5 skim coat finish?",
    a: "Yes. A full-field Level 5 skim coat is the standard we recommend when Oakville homeowners want a smooth ceiling that looks clean under pot lights, wide windows, and daylight.",
  },
  {
    q: "Can you work around pot lights, vents, skylights, and ceiling speakers?",
    a: "Yes. We protect fixtures, coordinate around electrician timing, and feather around rings, vents, bulkheads, and speaker cutouts so the final ceiling reads evenly.",
  },
  {
    q: "Can we stay home during the project?",
    a: "Many clients do. We plan the room sequence, keep traffic paths protected, and tidy daily. For heavy sanding days, we explain what rooms should stay closed off.",
  },
  {
    q: "Should older Oakville homes test for asbestos first?",
    a: "If the texture may be from an asbestos-risk era, testing before disturbance is the right first step. If results are positive, the job needs the appropriate abatement path before finishing work continues.",
  },
  {
    q: "Do you handle Oakville condos?",
    a: "Yes, subject to building rules. We plan elevator booking, hallway protection, parking/loading access, quiet hours, and tight staging space for condo ceiling projects.",
  },
  {
    q: "Can you prime and paint after popcorn removal?",
    a: "Yes. We can leave the ceiling primed and paint-ready, or complete the primer plus finish coats for a turnkey smooth ceiling.",
  },
];

export const metadata = {
  title: "Popcorn Ceiling Removal Oakville, ON | Level 5 Smooth Ceilings",
  description:
    "Oakville popcorn, stipple and stucco ceiling removal with sealed rooms, HEPA sanding, Level 5 skim coat, stain-block primer and optional ceiling painting.",
  keywords: [
    "popcorn ceiling removal Oakville",
    "remove popcorn ceiling Oakville",
    "stipple ceiling removal Oakville",
    "stucco ceiling removal Oakville",
    "ceiling texture removal Oakville",
    "smooth ceiling Oakville",
    "Level 5 ceiling Oakville",
    "popcorn ceiling removal cost Oakville",
    "Oakville ceiling contractor",
    "dustless popcorn removal Oakville",
    "Glen Abbey popcorn ceiling removal",
    "Bronte popcorn ceiling removal",
    "River Oaks ceiling smoothing",
    "West Oak Trails stipple removal",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: "Popcorn Ceiling Removal in Oakville, ON | Level 5 Finish",
    description:
      "House-friendly popcorn ceiling removal for Oakville homes and condos. Dust control, Level 5 skim coat, primer, and optional painting.",
    url: SLUG,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function SeoJsonLd() {
  const baseServiceUrl = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
  const quoteUrl = BASE_URL ? `${BASE_URL}/quote/` : "/quote/";
  const providerUrl = BASE_URL ? `${BASE_URL}/` : "/";
  const breadcrumbServiceUrl = BASE_URL
    ? `${BASE_URL}/popcorn-ceiling-removal/`
    : "/popcorn-ceiling-removal/";

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
        image: `${BASE_URL}/logo.png`,
        priceRange: "$$",
        sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
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
          item: { "@id": breadcrumbServiceUrl },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: CITY,
          item: { "@id": baseServiceUrl },
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
      d: "Floors, stairs, furniture, hallway paths, and vents are protected before texture work starts.",
    },
    {
      n: "02",
      t: "Texture Strategy",
      d: "We check painted vs unpainted texture, ceiling height, old patches, stains, and fixture layout.",
    },
    {
      n: "03",
      t: "Remove or Encapsulate",
      d: "Scrape where it is safe to scrape. For painted texture, we use a bond and skim strategy when that gives a better result.",
    },
    {
      n: "04",
      t: "Level 5 Skim Coat",
      d: "Full-field skim coating creates a flat, modern surface that looks clean under Oakville daylight and pot lights.",
    },
    {
      n: "05",
      t: "HEPA Sanding + Light Checks",
      d: "Vacuum-assisted sanding and raking-light inspections catch waves, seams, and pinholes before primer.",
    },
    {
      n: "06",
      t: "Prime + Optional Paint",
      d: "Stain-block primer where needed, then paint-ready handoff or full ceiling painting for a turnkey finish.",
    },
  ];

  const costs = [
    ["Standard Bedroom", "$800-$1,400", "Unpainted texture, Level 5 skim, primer"],
    ["Painted Bedroom", "$1,200-$1,900", "Bond/skim approach, primer, touch-ups"],
    ["Living Room", "$1,500-$2,600", "Removal or skim, repairs, prime-ready finish"],
    ["Two-Storey Foyer", "$2,200-$4,000", "Platform setup, high-wall protection, Level 5"],
    ["Main Floor Package", "$4,500-$8,500+", "Open-plan ceilings, halls, multiple rooms"],
    ["Ceiling Paint", "+$200-$500/room", "Premium ceiling paint, usually two coats"],
  ];

  const roomTypes = [
    {
      title: "Oakville Condo Popcorn Ceiling Removal",
      text: "Bronte, Kerr Village, Uptown Core, and Trafalgar corridor condos need elevator planning, hallway protection, quiet-hour awareness, and tight material staging.",
      bullets: ["Elevator and parking planning", "Common-area protection", "Painted texture common", "Minimal staging space"],
    },
    {
      title: "Main Floor and Open-Concept Ceilings",
      text: "Glen Abbey, River Oaks, and West Oak Trails homes often have connected kitchen, family room, and hallway ceilings where consistency matters from one sightline to the next.",
      bullets: ["Large continuous ceiling planes", "Kitchen cabinet protection", "Pot light coordination", "Smooth transition at bulkheads"],
    },
    {
      title: "Bedroom and Nursery Ceiling Smoothing",
      text: "For family homes, we sequence bedrooms carefully so the house stays usable and the work area is contained during sanding and primer.",
      bullets: ["Fast room-by-room planning", "Daily tidy wrap-up", "Closet and fixture protection", "Low-odour finish options"],
    },
    {
      title: "Stairwell, Foyer, and Vaulted Ceilings",
      text: "Two-storey foyers in Glen Abbey, Palermo West, and Bronte Creek need stable platform setup, edge control, and strong-light finish checks.",
      bullets: ["Platform access", "Stair runner protection", "Tall-wall feathering", "Light-shadow inspection"],
    },
  ];

  const localProjects = [
    {
      title: "Glen Abbey Foyer and Upper Hall",
      area: "Near Upper Middle Road W and Third Line",
      text: "High ceiling access, painted texture, Level 5 skim, stain-block primer, and careful stair protection.",
    },
    {
      title: "Bronte Living and Dining Ceiling",
      area: "Lakeshore Road W corridor",
      text: "Bright window exposure, fixture masking, HEPA sanding, and a smooth paint-ready ceiling.",
    },
    {
      title: "River Oaks Bedroom Cluster",
      area: "North of Sixteen Mile Creek",
      text: "Three bedrooms and a hallway sequenced for family use, with daily cleanup and primer-ready finish.",
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
            alt="Oakville popcorn ceiling removal project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm mb-6">
              Oakville homes and condos · HEPA dust control · Level 5 finish
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Popcorn Ceiling Removal Oakville, ON
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Smooth, modern ceilings for Bronte condos, Glen Abbey family
              homes, River Oaks bedrooms, Old Oakville renovations, and every
              neighbourhood in between.
            </p>

            <ul className="flex flex-wrap justify-center gap-3 mb-10 text-base md:text-lg">
              {[
                "Sealed rooms + floor protection",
                "HEPA sanding",
                "Level 5 skim coat",
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
                {phoneText}
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
                Get Your Oakville Quote
              </h2>
              <p className="text-lg text-gray-600">
                Photos, room sizes, ceiling height, and texture condition help
                us price faster and more accurately.
              </p>
            </div>

            <QuoteForm />

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3">Prefer to talk?</p>
              <a
                href={phoneHref}
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Oakville Homeowners Choose EPF
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "WSIB Insured",
              "Liability Coverage",
              "3-Year Warranty",
              "Oakville + Halton Scheduling",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200"
              >
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-sm font-semibold text-gray-700">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">Home-Friendly Setup</h3>
              <p className="text-gray-700">
                Floor, stair, furniture, and hallway protection before any
                texture work begins. Good for busy Oakville family homes.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Smooth Finish</h3>
              <p className="text-gray-700">
                Full-field skim coating checked under strong light so daylight,
                pot lights, and listing photos do not expose waves.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Turnkey Option</h3>
              <p className="text-gray-700">
                We can handle repairs, primer, and ceiling paint so the room
                finishes clean instead of stopping at scraped texture.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              className="font-semibold text-blue-600 hover:underline"
              href="/blog/popcorn-removal-oakville-cost-finish-guide/"
            >
              Read the Oakville cost and finish guide →
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Oakville Projects & Results
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Smooth ceiling work for detached homes, townhomes, condos, bedrooms,
            kitchens, main floors, and high foyers across Oakville.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={src}
                  alt={`Oakville popcorn ceiling removal project ${i + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-lightbox="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold">
                      Oakville Project {i + 1}
                    </p>
                    <p className="text-sm text-gray-200">
                      Level 5 smooth finish
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {localProjects.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border-2 border-gray-100"
              >
                <p className="text-sm font-bold text-blue-600 mb-2">
                  {item.area}
                </p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition"
            >
              Read EPF Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white" id="process">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Oakville Popcorn Ceiling Removal Process
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            A practical workflow for Oakville homes and condos: protect the
            space, choose the right texture strategy, skim to Level 5, sand with
            HEPA control, prime, and finish clean.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((s) => (
              <div
                key={s.n}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-bold text-blue-100 mb-4">
                  {s.n}
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.t}</h3>
                <p className="text-gray-700 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Oakville Popcorn Ceiling Removal Cost
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            These are planning ranges only. The final quote depends on photos,
            site access, repairs, paint layers, ceiling height, fixture count,
            and the finish standard you want.
          </p>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            <div className="grid grid-cols-3 bg-blue-600 text-white font-bold">
              <div className="p-4">Project Type</div>
              <div className="p-4">Typical Range</div>
              <div className="p-4">Usually Includes</div>
            </div>
            {costs.map(([type, range, includes]) => (
              <div
                key={type}
                className="grid grid-cols-3 border-t border-gray-200 text-sm md:text-base"
              >
                <div className="p-4 font-semibold">{type}</div>
                <div className="p-4 text-gray-700">{range}</div>
                <div className="p-4 text-gray-700">{includes}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold mb-3">What changes price</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ceiling height and room access</li>
                <li>• Painted texture or heavy stipple</li>
                <li>• Pot lights, vents, detectors, speakers</li>
                <li>• Cracks, seams, stains, and old patches</li>
                <li>• Primer and painting included or not</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Common repairs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Failed tape seams</li>
                <li>• Nail pops and screw pops</li>
                <li>• Water stains needing primer strategy</li>
                <li>• Bulkhead and corner transitions</li>
                <li>• Pot light cutouts and patching</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Oakville logistics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Condo elevator and hallway rules</li>
                <li>• Lakeshore parking and staging</li>
                <li>• Tall foyers and stairwells</li>
                <li>• Family schedule and room sequencing</li>
                <li>• QEW, 403, Trafalgar, and Dundas access timing</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Your Oakville Quote
            </a>
          </div>
        </div>
      </section>

      {/* ROOM TYPES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Room Types We Handle in Oakville
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            The right plan changes by room. A Bronte condo ceiling, a Glen Abbey
            foyer, and a River Oaks bedroom cluster need different protection,
            access, drying, and finish checks.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {roomTypes.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-5">
                  {item.text}
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Upload Photos for Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-[1.7fr_1fr] gap-10 items-start">
            <div className="space-y-10 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Oakville Popcorn Ceiling Specialists
                </h2>
                <p>
                  {BRAND_NAME} helps {CITY} homeowners, condo owners, property
                  managers, and renovators remove dated popcorn, stipple, and
                  stucco texture from homes near Bronte Harbour, Kerr Village,
                  Glen Abbey, River Oaks, West Oak Trails, Old Oakville, and
                  the Trafalgar corridor. We plan the job around access,
                  protection, dust control, and the smooth finish standard
                  homeowners expect in Oakville.
                </p>
                <p>
                  Every project starts with the ceiling condition: unpainted
                  texture, painted texture, old patches, stains, moisture
                  history, lighting, ceiling height, and whether the room needs
                  primer only or a finished ceiling paint. If you are comparing
                  quotes, review our{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/popcorn-ceiling-removal/"
                  >
                    complete popcorn ceiling removal services
                  </Link>{" "}
                  and the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/blog/popcorn-removal-oakville-cost-finish-guide/"
                  >
                    Oakville popcorn removal cost guide
                  </Link>{" "}
                  before deciding.
                </p>
                <p>
                  Need more than ceiling smoothing? We can coordinate related{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/drywall-repair/oakville/"
                  >
                    Oakville drywall repair
                  </Link>
                  ,{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/drywall-installation/oakville/"
                  >
                    drywall installation and finishing
                  </Link>
                  , and{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/interior-painting/"
                  >
                    interior painting
                  </Link>{" "}
                  so the final ceiling and walls look consistent.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Local Logistics + Turnaround
                </h3>
                <p>
                  Oakville projects often come down to timing and access. Condo
                  work near Bronte, Kerr Village, and Uptown Core can require
                  elevator booking, hallway protection, parking planning, quiet
                  hours, and smaller staging zones. Detached homes in Glen
                  Abbey, West Oak Trails, and River Oaks often need room-by-room
                  sequencing so families can keep bedrooms or home offices
                  available during the project.
                </p>
                <p>
                  Ceiling conditions vary by neighbourhood and renovation era.
                  Older Old Oakville and Falgarwood homes may have patched
                  ceilings or stains that need primer planning. Glen Abbey and
                  Bronte Creek homes often include tall foyers, stairwells, or
                  open main floors where a wavy skim coat would show quickly.
                  Newer condos and townhomes may have painted texture that
                  performs better with a bond-and-skim approach than aggressive
                  scraping.
                </p>
                <p>
                  Our estimate notes cover ceiling height, texture hardness,
                  paint layers, access, fixture count, and the best staging
                  path from the driveway, elevator, garage, or front door. That
                  planning keeps the project calmer for homeowners who are
                  working from home, managing kids, or preparing a listing.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Dust Control, Primer, and Finish Quality
                </h3>
                <p>
                  Dust control is not one product. It is the full setup: plastic
                  containment, floor and stair protection, HVAC masking where
                  appropriate, careful waste handling, HEPA-connected sanding,
                  and daily cleanup. That matters in Oakville homes with
                  hardwood floors, open staircases, home offices, built-ins,
                  kitchens, and furnished bedrooms.
                </p>
                <p>
                  Primer selection matters too. Water stains, tannin marks,
                  smoke discolouration, or old patch edges can bleed through a
                  basic paint coat. We recommend stain-block primer when the
                  ceiling needs it, then check for telegraphing before the final
                  paint stage. For homeowners preparing a sale, that extra
                  quality control helps ceilings photograph cleaner and look
                  more current beside fresh walls and trim.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Trade Coordination
                  </h3>
                  <p>
                    If your ceiling work is part of a larger renovation, we can
                    coordinate around electricians, HVAC adjustments, pot light
                    layouts, drywall repairs, cabinet work, and painting. The
                    sequence matters: fixture cutouts and ceiling patches should
                    be handled before the final skim and primer, not after.
                  </p>
                  <p>
                    We also help homeowners phase the work. Some clients start
                    with bedrooms and hallway ceilings, then schedule the main
                    floor or foyer later. Keeping square footage, texture type,
                    and finish notes organized makes future phases easier to
                    price and match.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Older Ceilings and Testing
                  </h3>
                  <p>
                    If a ceiling may be from an asbestos-risk period, testing
                    before disturbance is the correct first step. We do not
                    guess from appearance. Once the surface is cleared for
                    standard renovation work, we can proceed with protection,
                    removal or encapsulation strategy, skim coating, sanding,
                    primer, and paint-ready finishing.
                  </p>
                  <p>
                    Water damage, roof leaks, bathroom exhaust issues, and
                    ceiling cracks should also be reviewed before the texture is
                    covered. Smooth ceilings reveal weak seams, so we address
                    those repairs before calling the surface finished.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Getting Started
                </h3>
                <p>
                  Take photos from the doorway and each corner of the room.
                  Include close-ups of the texture, stains, cracks, pot lights,
                  vents, ceiling speakers, skylights, and any high areas. Add
                  rough dimensions, ceiling height, the neighbourhood, and any
                  preferred timing. Submit the details through the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/quote/"
                  >
                    quote form
                  </Link>{" "}
                  and we will reply with next steps.
                </p>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-4">
                    Sample Oakville Project Flow
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Photo review of rooms, texture, access, and height.</li>
                    <li>Written scope for removal, skim, primer, and paint.</li>
                    <li>Protection plan for floors, stairs, furniture, and HVAC.</li>
                    <li>Texture scrape or skim strategy based on paint layers.</li>
                    <li>Level 5 skim, HEPA sanding, and raking-light checks.</li>
                    <li>Stain-block primer where needed and final corrections.</li>
                    <li>Client walkthrough and tidy cleanup before furniture reset.</li>
                  </ol>
                </div>
                <p>
                  From Lakeshore Road and Bronte Road to Trafalgar, Upper
                  Middle, Dundas, Neyagawa, Third Line, and the QEW, the goal is
                  the same: a clean, predictable project and a ceiling that
                  feels current, smooth, and ready to live with.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg md:sticky md:top-24">
              <h3 className="text-2xl font-bold mb-4">Oakville Quick Links</h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/blog/popcorn-removal-oakville-cost-finish-guide/"
                  >
                    Oakville cost guide →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="#neighbourhoods"
                  >
                    Oakville neighbourhoods →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/services/popcorn-ceiling-removal/"
                  >
                    Complete popcorn ceiling removal guide →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/popcorn-ceiling-removal/"
                  >
                    All GTA service areas →
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
              <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="text-sm uppercase tracking-wide text-blue-600 font-bold mb-2">
                  Service radius
                </p>
                <p className="text-gray-700">
                  Bronte, Glen Abbey, River Oaks, Kerr Village, Old Oakville,
                  West Oak Trails, Palermo West, Clearview, College Park,
                  Falgarwood, and nearby Halton homes.
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
            Oakville Neighbourhoods We Serve
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Pick your area for local project details, access notes, and ceiling
            finishing guidance.
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

      <SkylightPopcornBacklinkBlock city="Oakville" slug="oakville" />

      {/* NEARBY AREAS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="p-8 bg-white rounded-3xl border border-gray-200 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nearby Popcorn Ceiling Removal Areas
            </h2>
            <p className="text-gray-600 mb-8">
              We also serve nearby Halton and GTA communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/popcorn-ceiling-removal/burlington/"
                className="px-6 py-3 bg-white border-2 border-blue-200 rounded-full text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition"
              >
                Burlington Popcorn Removal
              </Link>
              <Link
                href="/popcorn-ceiling-removal/mississauga/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Mississauga Ceiling Services
              </Link>
              <Link
                href="/popcorn-ceiling-removal/milton/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Milton Stipple Removal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-20 bg-white" id="faq">
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
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between gap-4">
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
            Call
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
