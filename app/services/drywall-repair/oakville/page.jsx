import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Oakville";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/oakville/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  [
    "downtown-oakville",
    "Downtown Oakville",
    "Historic downtown with heritage homes and lakefront properties",
    "Drywall repair for heritage homes, water damage from Lake Ontario, ceiling repairs",
  ],
  [
    "old-oakville",
    "Old Oakville",
    "Prestigious lakefront estates and heritage architecture",
    "Premium drywall finishing, water damage restoration, luxury home repairs",
  ],
  [
    "bronte-village",
    "Bronte Village",
    "Charming harbour village with heritage homes and boutiques",
    "Heritage home drywall repair, water damage from harbour humidity, seamless patching",
  ],
  [
    "bronte-creek",
    "Bronte Creek",
    "Family-friendly area near conservation park",
    "Residential drywall repair, basement finishing, family home renovations",
  ],
  [
    "glen-abbey",
    "Glen Abbey",
    "Luxury golf course community with custom-built homes",
    "Luxury home drywall repair, Level 5 finishing, custom home renovations",
  ],
  [
    "river-oaks",
    "River Oaks",
    "Upscale estates with mature trees and large properties",
    "Estate drywall repair, water damage restoration, seamless wall finishing",
  ],
  [
    "west-oak-trails",
    "West Oak Trails",
    "Modern developments with executive homes",
    "New home drywall repair, nail pop fixes, settlement crack repairs",
  ],
  [
    "uptown-core",
    "Uptown Core",
    "High-rise condos, shopping, and commercial district",
    "Condo drywall repair, commercial repairs, elevator-friendly service",
  ],
  [
    "falgarwood",
    "Falgarwood",
    "Established neighbourhood with mid-century homes",
    "Mid-century home repairs, plaster and drywall, renovation support",
  ],
  [
    "college-park",
    "College Park",
    "Mix of townhomes and single-family residences",
    "Townhome drywall repair, hole patching, paint-ready finishing",
  ],
  [
    "eastlake",
    "Eastlake",
    "Waterfront luxury condos along Lake Ontario",
    "Waterfront condo repairs, water damage from storms, luxury finishing",
  ],
  [
    "clearview",
    "Clearview",
    "Family-oriented with parks and schools",
    "Family home repairs, hole patching, crack repair, basement finishing",
  ],
  [
    "iroquois-ridge-north",
    "Iroquois Ridge North",
    "Upscale subdivision with modern estates",
    "Modern estate repairs, seamless finishing, renovation coordination",
  ],
  [
    "iroquois-ridge-south",
    "Iroquois Ridge South",
    "Premium homes with escarpment views",
    "Premium home repairs, crack stabilization, Level 5 finishing",
  ],
  [
    "palermo-west",
    "Palermo West",
    "Newer development with contemporary architecture",
    "New construction repairs, builder deficiency fixes, warranty work",
  ],
  [
    "joshua-creek",
    "Joshua Creek",
    "Sought-after area with custom luxury homes",
    "Custom home repairs, designer coordination, luxury finishing standards",
  ],
];

const FAQS = [
  {
    q: `How much does drywall repair cost in ${CITY}, Ontario?`,
    a: "Oakville drywall repair costs range from $200-$500 for small patches to $2,000+ for full room water damage restoration. Lakefront properties and custom Glen Abbey homes may require premium finishes. We provide transparent, itemized quotes with no hidden fees—send us photos and measurements for accurate same-day pricing.",
  },
  {
    q: "Do you handle water damage emergencies in Oakville lakefront properties?",
    a: "Yes. Our Oakville crew specializes in water damaged drywall repair after Lake Ontario storm surges, frozen pipes in winter, and roof leaks. We provide 24/7 emergency response with moisture testing, HEPA-filtered drying, and insurance documentation. Ceiling water damage repair Oakville includes vapor barrier assessment and mold prevention.",
  },
  {
    q: "Can you match the premium finishes in luxury Oakville homes?",
    a: "Absolutely. We specialize in seamless drywall repair Oakville estates with high-end finishes. Our Level 5 skim coating delivers smooth wall repair Oakville designers expect—no visible patch lines under pot lights or natural daylight. We work extensively in Glen Abbey, River Oaks, and Bronte Village luxury properties.",
  },
  {
    q: "Do you coordinate with luxury home builders and designers?",
    a: "Yes. We regularly collaborate with Oakville's top custom home builders, interior designers, and architects. Our drywall repair after renovations Oakville service integrates seamlessly with high-end projects. We understand premium materials, architectural details, and the scheduling demands of luxury renovations.",
  },
  {
    q: "What's your service area within Oakville?",
    a: "We serve all Oakville neighbourhoods: Glen Abbey, Bronte Village, River Oaks, Old Oakville, West Oak Trails, Uptown Core, Joshua Creek, Iroquois Ridge, and waterfront condos along Lakeshore Road. Our crews understand local building styles from heritage homes to modern lakefront estates.",
  },
  {
    q: "Do you service Oakville condos and commercial properties?",
    a: "Yes. We handle condo drywall repair Oakville high-rises with concierge coordination, elevator protection, and quiet hours compliance. Our commercial drywall repair Oakville extends to Kerr Street businesses, medical offices, and Uptown Core retail spaces. Fully insured with $5M liability and WSIB coverage.",
  },
  {
    q: "What warranty do you provide for Oakville properties?",
    a: "All drywall repair services Oakville include our 3-year craftsmanship warranty covering materials, workmanship, and finish integrity. This warranty is transferable if you sell your Oakville home and is backed by our insurance. We stand behind every project from small patches to full renovations.",
  },
];

export const metadata = {
  title: `Drywall Repair Oakville Ontario | Premium Finishing & Water Damage | EPF Pro Services`,
  description:
    "Premium drywall repair Oakville Ontario for lakefront estates, Glen Abbey homes & Uptown condos. Water damage restoration, seamless finishing, Level 5 quality. Serving Bronte Village, River Oaks & all Oakville neighbourhoods.",
  keywords: [
    "drywall repair Oakville",
    "drywall repair Oakville Ontario",
    "drywall repair services Oakville",
    "drywall repair company Oakville",
    "drywall contractor Oakville",
    "drywall contractors Oakville",
    "professional drywall repair Oakville",
    "premium drywall repair Oakville",
    "luxury home drywall repair Oakville",
    "drywall patch repair Oakville",
    "drywall patching Oakville",
    "hole in drywall Oakville",
    "hole in drywall repair Oakville",
    "repair holes in drywall Oakville",
    "drywall dent repair Oakville",
    "nail pop repair Oakville",
    "small drywall repair Oakville",
    "minor drywall repair Oakville",
    "drywall crack repair Oakville",
    "wall crack repair Oakville",
    "drywall seam repair Oakville",
    "drywall tape repair Oakville",
    "water damaged drywall repair Oakville",
    "drywall water damage repair Oakville",
    "drywall repair after leak Oakville",
    "ceiling water damage repair Oakville",
    "seamless drywall repair Oakville",
    "smooth wall repair Oakville",
    "paint-ready drywall repair Oakville",
    "ready for painting Oakville",
    "no visible patch lines Oakville",
    "drywall repair after plumbing Oakville",
    "drywall repair Bronte Village",
    "drywall repair Glen Abbey",
    "drywall repair River Oaks",
    "residential drywall repair Oakville",
    "commercial drywall repair Oakville",
    "condo drywall repair Oakville",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: `Premium ${SERVICE} Oakville, Ontario | Luxury Home Specialists`,
    description:
      "Oakville's premium drywall repair specialists. Water damage restoration, seamless finishing for lakefront estates, Glen Abbey & Bronte. Level 5 quality, WSIB insured.",
    url: SLUG,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/gallery/drywall-repair/drywall-repair.webp`,
        width: 1200,
        height: 630,
        alt: "Premium drywall repair Oakville Ontario",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function SeoJsonLd() {
  const baseServiceUrl = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
  const quoteUrl = BASE_URL ? `${BASE_URL}/quote/` : "/quote/";
  const providerUrl = BASE_URL ? `${BASE_URL}/` : "/";
  const mainServiceUrl = BASE_URL
    ? `${BASE_URL}/services/drywall-repair/`
    : "/services/drywall-repair/";

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${SERVICE} in ${CITY}`,
      serviceType: [
        "Drywall Repair",
        "Drywall Patching",
        "Water Damage Drywall Repair",
        "Drywall Crack Repair",
        "Ceiling Repair",
        "Commercial Drywall Repair",
        "Residential Drywall Repair",
      ],
      provider: {
        "@type": "LocalBusiness",
        name: "EPF Pro Services",
        telephone: phoneText,
        url: providerUrl,
        image: `${BASE_URL}/logo.png`,
        priceRange: "$$",
        sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
      },
      areaServed: { "@type": "City", name: CITY },
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
          name: "Drywall Repair Services",
          item: { "@id": mainServiceUrl },
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
  const images = [
    "/gallery/drywall-repair/drywall-repair-service00001.webp",
    "/gallery/drywall-repair/drywall-repair-service00002.webp",
    "/gallery/drywall-repair/drywall-repair-service00003.webp",
    "/gallery/drywall-repair/drywall-repair-service00004.webp",
    "/gallery/drywall-repair/drywall-repair-service00005.webp",
    "/gallery/drywall-repair/drywall-repair-service00007.webp",
  ];

  const services = [
    {
      icon: "🏛️",
      title: "Luxury Home & Estate Repairs",
      description:
        "Premium drywall solutions for Oakville's finest homes in Glen Abbey, River Oaks, and lakefront properties. Seamless finishes that meet luxury home standards.",
      keywords: [
        "premium drywall repair Oakville",
        "luxury home drywall repair Oakville",
        "drywall repair Glen Abbey",
        "drywall repair River Oaks",
        "seamless drywall repair Oakville",
        "smooth wall repair Oakville",
        "paint-ready drywall repair Oakville",
      ],
    },
    {
      icon: "💧",
      title: "Water Damage & Storm Restoration",
      description:
        "24/7 emergency response for Lake Ontario storm damage, frozen pipes, and roof leaks. HEPA drying, moisture testing, and insurance coordination.",
      keywords: [
        "water damaged drywall repair Oakville",
        "ceiling water damage repair Oakville",
        "drywall repair after leak Oakville",
        "drywall water damage repair Oakville",
      ],
    },
    {
      icon: "🏢",
      title: "Condo & Uptown Commercial",
      description:
        "Concierge-coordinated service for Oakville's waterfront condos and Uptown Core businesses. Elevator protection, quiet hours, and minimal disruption.",
      keywords: [
        "condo drywall repair Oakville",
        "commercial drywall repair Oakville",
        "drywall repair Bronte Village",
        "residential drywall repair Oakville",
      ],
    },
  ];

  const finishPromises = [
    "seamless drywall repair Oakville",
    "smooth wall repair Oakville",
    "paint-ready drywall repair Oakville",
    "Level 5 finish quality",
    "ready for painting Oakville",
    "no visible patch lines Oakville",
    "luxury home finish standards",
  ];

  const tradeItems = [
    "drywall repair after plumbing Oakville",
    "drywall repair after renovations Oakville",
    "seamless drywall repair Oakville",
    "coordination with luxury builders",
  ];

  return (
    <>
      <SeoJsonLd />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>

        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                  <span>📍</span> Serving Oakville's Premium Communities
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Premium Drywall Repair{" "}
                  <span className="text-blue-600">{CITY}, Ontario</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Luxury <strong>drywall repair Oakville Ontario</strong> for
                  lakefront estates, Glen Abbey homes & designer renovations
                </p>
              </div>

              {/* Key Services */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Luxury Home Repairs
                    </h3>
                    <p className="text-sm text-gray-600">
                      Premium drywall repair Oakville estates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Water Damage Restoration
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ceiling water damage repair Oakville
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Seamless Finish
                    </h3>
                    <p className="text-sm text-gray-600">
                      Level 5 smooth wall repair Oakville
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Uptown Commercial
                    </h3>
                    <p className="text-sm text-gray-600">
                      Condo drywall repair Oakville high-rises
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    WSIB + $5M Liability
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    Level 5 Finish
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    Same-Day Quotes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    3-Year Warranty
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
                >
                  <span className="text-xl">📋</span> Get Free Quote
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-all"
                >
                  <span className="text-xl">📞</span> {phoneText}
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/gallery/drywall-repair/drywall-repair.webp"
                  alt="Premium drywall repair Oakville Ontario - luxury home specialists Glen Abbey River Oaks"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1 text-blue-300">
                      OAKVILLE'S LUXURY HOME SPECIALISTS
                    </p>
                    <p className="text-2xl font-bold">Premium Drywall Repair</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border-2 border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">4.9</p>
                    <p className="text-sm text-gray-600 font-semibold">
                      Google Rating
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-5 border-2 border-blue-500">
                <div className="text-white text-center">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm font-semibold">
                    Emergency
                    <br />
                    Response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section id="quote" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  FAST & ACCURATE QUOTES
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Book Your {CITY} Drywall Assessment
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Upload photos, add measurements, and note moisture levels. We
                  send same-day written pricing for{" "}
                  <strong>drywall repair services Oakville</strong>, from single
                  cut-outs in River Oaks to multi-room rebuilds near Lakeshore.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Water damage & ceilings",
                      desc: "Ceiling water damage repair Oakville documentation with thermal imaging and moisture logs.",
                    },
                    {
                      icon: "🧱",
                      title: "Trade cut-outs",
                      desc: "Coordinated <strong>drywall repair after plumbing Oakville</strong> upgrades, HVAC retrofits, and EV charger installs.",
                    },
                    {
                      icon: "✨",
                      title: "Finish perfection",
                      desc: "Level 5 skim coating for <strong>smooth, flawless finish Oakville</strong> spaces.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p
                          className="text-sm text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200 p-8 shadow-xl">
                <QuoteForm />
                <div className="mt-6 pt-6 border-t border-blue-200 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Need immediate help?
                  </p>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center text-xl font-bold text-blue-600 hover:text-blue-700"
                  >
                    📞 {phoneText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              COMPLETE SOLUTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Specialized {SERVICE} Packages for {CITY}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's a <strong>hole in drywall Oakville</strong> from
              moving day or a full ceiling rebuild after a leak, our
              WSIB-insured crew brings HEPA equipment, dust containment, and
              finish inspections every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.keywords.map((kw) => (
                    <li
                      key={kw}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-blue-600 font-bold mt-0.5">✓</span>
                      <span className="font-medium">{kw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-semibold">
              Trusted crews for lakefront estates, Uptown Core towers, and Glen
              Abbey bungalows.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  OAKVILLE'S TRUSTED CREW
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Property Managers Pick Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Local <strong>drywall contractors Oakville</strong> providing
                  photo updates, tidy daily cleanup, and seamless coordination
                  with concierge teams and site supers.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Emergency coordination",
                      desc: "Rapid response for Bronte creek floods or burst pipes in Old Oakville with moisture readings and rebuild under one PM.",
                    },
                    {
                      title: "Level 5 finish standard",
                      desc: "Raking-light inspections so <strong>paint-ready drywall repair Oakville</strong> jobs look perfect under pot lights.",
                    },
                    {
                      title: "Trade-friendly scheduling",
                      desc: "Flexible calendar for plumbers, electricians, and HVAC installers so <strong>drywall repair after renovations Oakville</strong> projects finish on time.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p
                          className="text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={images[0]}
                    alt="Drywall repair Oakville Level 5 finish"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <p className="text-3xl font-bold mb-1">4.9★</p>
                  <p className="text-sm opacity-90">127+ Verified Reviews</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🛡️", text: "WSIB Insured" },
                { icon: "📋", text: "$5M Liability" },
                { icon: "⏱️", text: "Same-Day Quotes" },
                { icon: "✨", text: "Level 5 Finish" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200"
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="font-semibold text-gray-900">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINISH & TRADE GUARANTEES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-amber-600 font-bold mb-3">
                LEVEL 5 FINISH
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Finish Outcomes Oakville Owners Expect
              </h3>
              <p className="text-gray-600 mb-6">
                We skim, sand, and prime until surfaces deliver{" "}
                <strong>smooth wall repair Oakville</strong> quality. From
                Eastlake estates to West Oak Trails townhomes, everything leaves{" "}
                <strong>ready for painting Oakville</strong> or{" "}
                <strong>ready for wallpaper Oakville</strong> crews without
                extra prep.
              </p>
              <ul className="space-y-2">
                {finishPromises.map((promise) => (
                  <li
                    key={promise}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                TRADE COORDINATION
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Cut-Outs, Renos & Turnovers
              </h3>
              <p className="text-gray-600 mb-6">
                Renovations and service calls trigger openings. We return as
                soon as trades wrap to deliver{" "}
                <strong>seamless drywall repair Oakville</strong> finishes with
                no visible patch lines Oakville residents can spot.
              </p>
              <ul className="space-y-2">
                {tradeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-3xl border border-gray-200 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Serving Oakville's luxury homes, waterfront condos, and commercial
              properties with premium finishes and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-amber-600 font-bold mb-3">
              RECENT PROJECTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {CITY} Drywall Repair Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real <strong>professional drywall repair Oakville</strong> work
              from Bronte Harbour condos, River Oaks offices, and West Oak
              Trails basements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={src}
                  alt={`${CITY} drywall repair project ${i + 1}`}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBOURHOOD COVERAGE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                CITYWIDE SERVICE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Serving Every {CITY} Neighbourhood
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Concierge approvals, elevator pads, and driveway protection
                handled for every Oakville neighbourhood from Eastlake to
                Palermo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {NEIGHBOURHOODS.map(([slug, name, description, services]) => (
                <div
                  key={slug}
                  className="group p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 text-lg">
                    {name}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {description}
                  </p>
                  <div className="pt-3 border-t border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-1">
                      Services:
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {services}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Fast Response Across {CITY}
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Our mobile crews rotate between Bronte lakefront builds, Glen
                Abbey renovations, Joshua Creek custom homes, and Uptown Core
                commercial spaces daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all shadow-xl"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-3xl border-2 border-blue-100 bg-blue-50 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-700 font-bold">
                  Local Repair Guide
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Why walls and ceilings start cracking or bubbling in Oakville homes
                </h2>
                <p className="mt-4 text-lg text-slate-700">
                  If your walls crack more in winter, bubble in humid months,
                  or keep reopening in the same places, read our Oakville guide
                  on why those problems keep coming back and when a proper
                  repair is better than another touch-up.
                </p>
              </div>
              <Link
                href="/blog/how-seasonal-humidity-and-temperature-changes-affect-drywall-oakville/"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 shadow-lg"
              >
                Read the guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                COMMON QUESTIONS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {CITY} Drywall Repair FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know before booking our Oakville team.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                >
                  <summary className="font-bold text-lg cursor-pointer flex items-center justify-between text-gray-900 list-none">
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-blue-600 text-2xl group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                More questions about {CITY} drywall work?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
                >
                  📞 Call {phoneText}
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-full transition-all shadow-lg"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Drywall Repair for Oakville, Ontario Luxury Homes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Oakville, Ontario is home to some of Canada's most prestigious
                properties—from waterfront estates along Lake Ontario to
                custom-built Glen Abbey golf course homes and heritage
                properties in Bronte Village. Our{" "}
                <strong>drywall repair Oakville Ontario</strong> service
                understands the premium finish standards these homes demand.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're coordinating with interior designers on a{" "}
                <strong>luxury home drywall repair Oakville</strong> project in
                River Oaks, managing a lakefront condo renovation along
                Lakeshore Road, or preparing your Old Oakville heritage home for
                sale, we deliver{" "}
                <strong>seamless drywall repair Oakville</strong> results that
                meet the expectations of Oakville's discerning homeowners. Our
                comprehensive{" "}
                <Link
                  href="/services/drywall-repair/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repair services
                </Link>{" "}
                extend throughout Ontario's Golden Horseshoe region.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Luxury Home Specialists: Glen Abbey, River Oaks & Bronte Village
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Premium drywall repair Oakville</strong> estates
                requires understanding high-end materials, architectural
                details, and finish quality. We work extensively with custom
                home builders, architects, and interior designers throughout{" "}
                <strong>drywall repair Glen Abbey</strong> golf community,{" "}
                <strong>drywall repair River Oaks</strong> estates, and{" "}
                <strong>drywall repair Bronte Village</strong> heritage homes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Level 5 finish delivers{" "}
                <strong>smooth wall repair Oakville</strong> that looks flawless
                under pot lights, natural daylight, and the critical eye of
                professional painters. Every surface is{" "}
                <strong>paint-ready drywall repair Oakville</strong>{" "}
                standard—sanded with HEPA equipment, primed properly, and
                inspected under raking light to ensure{" "}
                <strong>no visible patch lines Oakville</strong> homeowners can
                detect.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Water Damage from Lake Ontario Weather Patterns
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Oakville's proximity to Lake Ontario brings unique
                challenges—lake-effect snow creating ice dams, winter
                freeze-thaw cycles causing pipe bursts, and severe storms that
                test waterfront properties. Our{" "}
                <strong>water damaged drywall repair Oakville</strong> service
                includes 24/7 emergency response with thermal imaging, moisture
                meters, and industrial HEPA drying equipment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From <strong>ceiling water damage repair Oakville</strong>{" "}
                lakefront condos to{" "}
                <strong>drywall repair after leak Oakville</strong> homes with
                burst pipes, we document everything for insurance claims,
                coordinate with restoration companies, and deliver{" "}
                <strong>drywall water damage repair Oakville</strong> that
                prevents mold growth and structural issues.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Coordinating With Oakville's Top Builders & Designers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Luxury renovations require seamless coordination. We regularly
                provide{" "}
                <strong>drywall repair after renovations Oakville</strong>{" "}
                service for custom home builders, working alongside millwork
                specialists, lighting designers, and automation installers. Our{" "}
                <strong>drywall repair after plumbing Oakville</strong> teams
                understand that radiant floor systems, luxury spa bathrooms, and
                chef's kitchens need precision patching.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it's patching after HVAC upgrades in a West Oak Trails
                estate or repairing walls after smart home installations in an
                Uptown Core condo, our{" "}
                <strong>drywall contractors Oakville</strong> crew maintains the
                scheduling discipline and quality standards luxury projects
                demand.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Uptown Condos & Commercial Properties
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Condo drywall repair Oakville</strong> high-rises along
                Lakeshore Road require concierge coordination, elevator
                protection, and adherence to quiet hours. Our crews understand
                the protocols for luxury condo buildings and deliver{" "}
                <strong>residential drywall repair Oakville</strong> with
                minimal disruption to residents.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For <strong>commercial drywall repair Oakville</strong> offices
                in the Uptown Core, medical clinics along Trafalgar Road, and
                retail spaces on Kerr Street, we provide after-hours scheduling,
                dust containment, and the professional finish quality Oakville
                businesses expect.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Premium Finish Quality Standards
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Seamless drywall repair Oakville</strong> means luxury
                home standards—Level 5 skim coating, HEPA sanding to control
                dust, and quality control under bright LED inspection lights. We
                guarantee <strong>paint-ready drywall repair Oakville</strong>{" "}
                surfaces that painters love and homeowners appreciate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From everyday fixes like{" "}
                <strong>hole in drywall Oakville</strong> repairs to complex{" "}
                <strong>drywall crack repair Oakville</strong> projects, we
                bring the same attention to detail. Even small jobs—
                <strong>nail pop repair Oakville</strong>,{" "}
                <strong>drywall dent repair Oakville</strong>, or{" "}
                <strong>repair holes in drywall Oakville</strong> after
                furniture moves—receive professional-grade finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                OAKVILLE REPAIR GUIDES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Plan Your Oakville Drywall Repair
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These guides explain ceiling cracks, water damage, plumbing
                openings, smooth finishing, and when a repair should become a
                replacement section.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["/blog/drywall-contractor-oakville-guide/", "Drywall Contractor Oakville", "Smooth repair, installation, taping, sanding, and finish-level planning for Oakville homes."],
                ["/blog/level-5-drywall-finishing-oakville/", "Level 5 Drywall Finishing Oakville", "When bright rooms, smooth ceilings, and side light justify a higher drywall finish."],
                ["/blog/drywall-repair-vs-replacement/", "Repair vs Replacement", "When to patch, cut out damaged drywall, or refinish a visible area."],
                ["/blog/ceiling-crack-drywall-repair/", "Ceiling Crack Repair", "Why ceiling cracks come back after paint and how to repair them properly."],
                ["/blog/drywall-repair-after-plumbing-electrical-work/", "Plumbing & Electrical Cutouts", "What happens after trades leave openings in walls and ceilings."],
                ["/blog/why-drywall-patches-show-through-paint/", "Visible Patch Lines", "Why patches show through paint and how proper finishing prevents flashing."],
              ].map(([href, title, desc]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Expert Drywall Repair in {CITY}?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Partner with a <strong>drywall contractor Oakville</strong> that
              documents each phase, keeps your property tidy, and delivers{" "}
              <strong>professional drywall repair Oakville</strong> results on
              schedule.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                📞 {phoneText}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>WSIB + $5M Liability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Level 5 Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>4.9★ Rating</span>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-700">
              <p className="text-gray-400 mb-4">
                Explore our comprehensive Ontario-wide drywall services & guides
              </p>
              <Link
                href="/services/drywall-repair/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg"
              >
                Complete Drywall Repair Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
