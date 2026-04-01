// filepath: /Users/alex/EpfProservicesn2025/epfproservices2025build/app/services/drywall-repair/hamilton/page.jsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Hamilton";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/hamilton/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  [
    "downtown-hamilton",
    "Downtown Hamilton",
    "Urban core with heritage buildings and commercial properties",
    "Commercial drywall repair, heritage home patching, water damage from old infrastructure",
  ],
  [
    "durand",
    "Durand",
    "Historic neighbourhood with Victorian architecture",
    "Heritage home drywall repair, plaster and drywall work, period restoration",
  ],
  [
    "kirkendall",
    "Kirkendall",
    "Established residential area with mature homes",
    "Residential drywall repair, crack repair, basement finishing",
  ],
  [
    "strathcona",
    "Strathcona",
    "Family-friendly neighbourhood near McMaster University",
    "Family home repairs, student rental repairs, hole patching",
  ],
  [
    "westdale",
    "Westdale",
    "Upscale area near McMaster with heritage homes",
    "Premium home repairs, seamless finishing, renovation coordination",
  ],
  [
    "stoney-creek",
    "Stoney Creek",
    "Lakefront community with mix of old and new homes",
    "Waterfront water damage, residential repairs, basement finishing",
  ],
  [
    "ancaster",
    "Ancaster",
    "Affluent suburb with executive homes and estates",
    "Luxury home repairs, Level 5 finishing, custom home coordination",
  ],
  [
    "dundas",
    "Dundas",
    "Historic town centre with unique character homes",
    "Heritage restoration, plaster repair, seamless patching",
  ],
  [
    "waterdown",
    "Waterdown",
    "Growing community with new subdivisions",
    "New home repairs, settlement cracks, builder warranty work",
  ],
  [
    "binbrook",
    "Binbrook",
    "Newer development area with modern homes",
    "New construction repairs, nail pop fixes, warranty coordination",
  ],
  [
    "gibson",
    "Gibson",
    "Industrial area converting to residential lofts",
    "Loft conversions, exposed brick integration, commercial-to-residential",
  ],
  [
    "crown-point",
    "Crown Point",
    "Revitalizing neighbourhood with diverse housing",
    "Renovation support, hole patching, paint-ready finishing",
  ],
  [
    "hamilton-mountain",
    "Hamilton Mountain",
    "Escarpment area with suburban development",
    "Residential repairs, water damage from escarpment drainage, basement work",
  ],
  [
    "meadowlands",
    "Meadowlands",
    "Established area with mid-century homes",
    "Mid-century renovations, crack repair, modernization support",
  ],
];

const FAQS = [
  {
    q: `How much does drywall repair cost in ${CITY}?`,
    a: "Pricing depends on the size of each opening, ceiling height, how many coats and sanding steps are required, and whether we finish things paint-ready. Share photos with rough dimensions so our Hamilton estimators can build line-item quotes for every wall and ceiling.",
  },
  {
    q: "Do you handle water damage drywall emergencies in Hamilton?",
    a: "Yes. Our Hamilton crew performs water damaged drywall repair with moisture readings, containment, and documentation. Whether it is ceiling water damage repair after an HVAC condensate issue or drywall repair after leak detection, we dry, patch, and finish surfaces so they're ready for painting.",
  },
  {
    q: "Can you work around plumbers, electricians, and HVAC trades?",
    a: "Absolutely. We coordinate drywall repair after plumbing Hamilton homeowners schedule, drywall repair after electrical work Hamilton builders need, and drywall repair after HVAC Hamilton projects. We also tidy after renovations with careful scheduling with your GC or property manager.",
  },
  {
    q: "Is Level 5 finish available for Hamilton projects?",
    a: "Every job targets a seamless drywall repair Hamilton result. We skim, sand with HEPA extraction, and inspect with raking light for smooth wall repair Hamilton standards so there are no visible patch lines Hamilton residents dislike.",
  },
  {
    q: "Do you service condos, commercial spaces, and basements?",
    a: "Yes. From condo drywall repair Hamilton towers downtown to commercial drywall repair Hamilton offices and basement drywall repair Hamilton suites, our WSIB-insured team is used to elevators, loading docks, and humid lower levels.",
  },
  {
    q: "What warranty do you provide?",
    a: "Drywall repair services Hamilton include a 3-year workmanship warranty covering joint compound repair Hamilton techniques, tape adhesion, and finish quality under normal conditions.",
  },
  {
    q: "Will you match existing textures or paint?",
    a: "We feather every patch wide and blend textures so repairs look original once painted. The surface is left paint-ready drywall repair Hamilton painters appreciate and can also be ready for wallpaper when required.",
  },
];

export const metadata = {
  title: `Drywall Repair Hamilton | Water Damage, Patching & Seamless Finish | EPF Pro Services`,
  description:
    "Drywall repair Hamilton specialists. Water damage, cracks, holes, trade cut-outs, and Level 5 finishing across Hamilton, Ancaster, Stoney Creek & Dundas.",
  keywords: [
    "drywall repair Hamilton",
    "drywall repair services Hamilton",
    "drywall repair company Hamilton",
    "drywall contractor Hamilton",
    "drywall contractors Hamilton",
    "professional drywall repair Hamilton",
    "Patching intent (small jobs)",
    "drywall patch repair Hamilton",
    "drywall patching Hamilton",
    "hole in drywall Hamilton",
    "hole in drywall repair Hamilton",
    "repair holes in drywall Hamilton",
    "drywall dent repair Hamilton",
    "nail pop repair Hamilton",
    "small drywall repair Hamilton",
    "minor drywall repair Hamilton",
    "drywall crack repair Hamilton",
    "wall crack repair Hamilton",
    "drywall seam repair Hamilton",
    "drywall tape repair Hamilton",
    "loose drywall tape repair Hamilton",
    "bubbling drywall tape repair Hamilton",
    "joint compound repair Hamilton",
    "water damaged drywall repair Hamilton",
    "drywall water damage repair Hamilton",
    "drywall repair after leak Hamilton",
    "ceiling water damage repair Hamilton",
    "repair or replace water damaged drywall Hamilton",
    "seamless drywall repair Hamilton",
    "smooth wall repair Hamilton",
    "paint-ready drywall repair Hamilton",
    "smooth, flawless finish Hamilton",
    "ready for painting Hamilton",
    "ready for wallpaper Hamilton",
    "no visible patch lines Hamilton",
    "drywall repair after plumbing Hamilton",
    "drywall repair after electrical work Hamilton",
    "drywall repair after HVAC Hamilton",
    "drywall repair after renovations Hamilton",
    "residential drywall repair Hamilton",
    "commercial drywall repair Hamilton",
    "condo drywall repair Hamilton",
    "basement drywall repair Hamilton",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: `${SERVICE} in ${CITY} | Water Damage & Seamless Finish`,
    description:
      "Hamilton drywall repair company for water damage, cracks, trade cut-outs, and Level 5 finish across Ancaster, Dundas, Stoney Creek, and the Mountain.",
    url: SLUG,
    type: "website",
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
      icon: "🛠️",
      title: "Patching intent (small jobs)",
      description:
        "Clean containment for single rooms, basements, or multi-room punch lists. Perfect for selling-ready condos or move-in touchups.",
      keywords: [
        "drywall patch repair Hamilton",
        "drywall patching Hamilton",
        "hole in drywall Hamilton",
        "hole in drywall repair Hamilton",
        "repair holes in drywall Hamilton",
        "drywall dent repair Hamilton",
        "nail pop repair Hamilton",
        "small drywall repair Hamilton",
        "minor drywall repair Hamilton",
      ],
    },
    {
      icon: "💧",
      title: "Water & ceiling restoration",
      description:
        "Emergency tarping, moisture mapping, and matching ceiling textures after leaks from roofs, HVAC, and plumbing breaks.",
      keywords: [
        "water damaged drywall repair Hamilton",
        "drywall water damage repair Hamilton",
        "drywall repair after leak Hamilton",
        "ceiling water damage repair Hamilton",
        "repair or replace water damaged drywall Hamilton",
      ],
    },
    {
      icon: "📏",
      title: "Cracks, seams & tape",
      description:
        "Structural assessments for settlement cracks, tape failures, and seam telegraphing before refinishing.",
      keywords: [
        "drywall crack repair Hamilton",
        "wall crack repair Hamilton",
        "drywall seam repair Hamilton",
        "drywall tape repair Hamilton",
        "loose drywall tape repair Hamilton",
        "bubbling drywall tape repair Hamilton",
        "joint compound repair Hamilton",
      ],
    },
  ];

  const finishPromises = [
    "seamless drywall repair Hamilton",
    "smooth wall repair Hamilton",
    "paint-ready drywall repair Hamilton",
    "smooth, flawless finish Hamilton",
    "ready for painting Hamilton",
    "ready for wallpaper Hamilton",
    "no visible patch lines Hamilton",
  ];

  const tradeItems = [
    "drywall repair after plumbing Hamilton",
    "drywall repair after electrical work Hamilton",
    "drywall repair after HVAC Hamilton",
    "drywall repair after renovations Hamilton",
  ];

  const audiences = [
    "residential drywall repair Hamilton",
    "commercial drywall repair Hamilton",
    "condo drywall repair Hamilton",
    "basement drywall repair Hamilton",
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
                  <span>📍</span> Serving all of {CITY}, Ancaster & Stoney Creek
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Drywall Repair{" "}
                  <span className="text-blue-600">{CITY}, ON</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Expert <strong>drywall repair company Hamilton</strong> for
                  water damage, cracks, patches & seamless finishes
                </p>
              </div>

              {/* Key Services */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Water Damage
                    </h3>
                    <p className="text-sm text-gray-600">
                      Emergency ceiling water damage repair Hamilton
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Patching & Holes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Drywall patch repair Hamilton
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Crack Repair
                    </h3>
                    <p className="text-sm text-gray-600">
                      Drywall crack repair Hamilton
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Trade Cut-Outs
                    </h3>
                    <p className="text-sm text-gray-600">
                      Drywall repair after plumbing Hamilton
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
                  alt="Professional drywall repair Hamilton - expert contractors finishing seamless ceiling repair"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1 text-blue-300">
                      TRUSTED HAMILTON CONTRACTORS
                    </p>
                    <p className="text-2xl font-bold">
                      Seamless Drywall Repair
                    </p>
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
                  Upload photos, add measurements, and note whether moisture is
                  present. We'll send same-day written quotes for{" "}
                  {CITY.toLowerCase()} jobs from single patches to multi-level
                  rebuilds.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Water damage & ceilings",
                      desc: "Moisture mapping and ceiling water damage repair Hamilton insurance adjusters trust.",
                    },
                    {
                      icon: "🧱",
                      title: "Trade cut-outs",
                      desc: "Coordinated drywall repair after plumbing Hamilton upgrades, HVAC retrofits, and electrical rough-ins.",
                    },
                    {
                      icon: "✨",
                      title: "Finish perfection",
                      desc: "Level 5 skim coat and sanding for no visible patch lines Hamilton homeowners demand.",
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
                        <p className="text-sm text-gray-600">{item.desc}</p>
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
              Whether you're fixing one{" "}
              <strong>hole in drywall Hamilton</strong> or rebuilding after a
              burst pipe, we bring the same insured crew, HEPA equipment, and
              Level 5 finish standards to every project.
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
              Trusted {CITY} crews for emergency callouts, punch lists, and
              complex restorations.
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
                  HAMILTON'S TRUSTED CREW
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Property Managers Pick Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We're a WSIB-insured team of{" "}
                  <strong>drywall contractors Hamilton</strong> residents rely
                  on. Expect clean containment, daily check-ins, and clear
                  photos for every milestone.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Emergency coordination",
                      desc: "Rapid response for {CITY} floods with moisture readings, demolition, and rebuild under one project manager.",
                    },
                    {
                      title: "Level 5 finish standard",
                      desc: "Raking-light inspections, HEPA sanding, and primer for a smooth, flawless finish.",
                    },
                    {
                      title: "Trade-friendly scheduling",
                      desc: "We coordinate with plumbers, electricians, HVAC teams, and painters to keep renos on track.",
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
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={images[0]}
                    alt="Drywall repair Hamilton Level 5 finish"
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
                Finish Outcomes Hamilton Homeowners Expect
              </h3>
              <p className="text-gray-600 mb-6">
                Every surface we hand over is inspected so it is{" "}
                <strong>ready for painting Hamilton</strong> crews or{" "}
                <strong>ready for wallpaper Hamilton</strong> installers. We
                skim entire fields when needed, sand between coats, and prime
                before your painter arrives.
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
                Work often follows other trades. We keep calendars flexible so
                plumbers, sparkies, HVAC techs, and renovators can open walls
                when they need to, then we return for{" "}
                <strong>seamless drywall repair Hamilton</strong> results.
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
              We deliver {audiences.join(", ")} with the same
              documentation-first process and cleanup checklist.
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
              Photos from <strong>residential drywall repair Hamilton</strong>{" "}
              homes, downtown offices, and heritage storefronts.
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
                Call us for emergency work on the Mountain, lakefront
                storefronts in Stoney Creek, or heritage trim in Dundas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {NEIGHBOURHOODS.map(([slug, name, description, services]) => (
                <div
                  key={slug}
                  className="group p-5 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {name}
                  </p>
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                    {description}
                  </p>
                  <div className="pt-2 border-t border-blue-100">
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
                Our mobile crews move between Ancaster estates, Hamilton
                Mountain subdivisions, Waterdown townhomes, and Stoney Creek
                commercial plazas daily.
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
                Everything you need to know before booking our {CITY} team.
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
                Hyper-Local Expertise for Hamilton Drywall Repairs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                From Locke Street storefronts to Stoney Creek warehouses, we
                deliver <strong>drywall repair Hamilton</strong> solutions
                tailored to each building. Our estimators document every
                opening, moisture reading, and finish specification so you have
                transparency from the first phone call.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Multifamily landlords depend on our{" "}
                <strong>drywall repair services Hamilton</strong> offering when
                tenants move out. Realtors call for same-day{" "}
                <strong>minor drywall repair Hamilton</strong> punch lists.
                Facility managers lean on us for{" "}
                <strong>commercial drywall repair Hamilton</strong> after-hours
                cut-outs that must be{" "}
                <strong>ready for painting Hamilton</strong> crews before
                morning. Our comprehensive{" "}
                <Link
                  href="/services/drywall-repair/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repair services
                </Link>{" "}
                extend throughout the entire GTA region.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Coordinating With Other Trades
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Renovations never happen in a vacuum. We schedule{" "}
                <strong>drywall repair after plumbing Hamilton</strong>{" "}
                upgrades,{" "}
                <strong>drywall repair after electrical work Hamilton</strong>{" "}
                rough-ins, <strong>drywall repair after HVAC Hamilton</strong>{" "}
                retrofits, and{" "}
                <strong>drywall repair after renovations Hamilton</strong>{" "}
                whole-home projects with the same project manager so you have
                one contact even when multiple trades overlap.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the same renovation still has dated textured ceilings, we
                also handle{" "}
                <Link
                  href="/popcorn-ceiling-removal/hamilton/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  popcorn ceiling removal in Hamilton
                </Link>{" "}
                so the walls and ceilings can move into primer and final paint
                on one coordinated schedule.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Water Damage & Insurance Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pipe bursts, roof leaks, or AC condensate failures demand fast
                response. Our fully stocked vans carry air movers and
                dehumidifiers so{" "}
                <strong>water damaged drywall repair Hamilton</strong> work
                starts immediately. We capture evidence for adjusters, walk you
                through whether to tackle{" "}
                <strong>
                  repair or replace water damaged drywall Hamilton
                </strong>
                , and then rebuild using drying logs for compliance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                When we begin{" "}
                <strong>drywall repair after leak Hamilton</strong> service, we
                also tackle adjacent ceilings with{" "}
                <strong>ceiling water damage repair Hamilton</strong> plans that
                address stains, swelling, and insulation replacement. Moisture
                readings during{" "}
                <strong>drywall water damage repair Hamilton</strong> ensure the
                substrate sits below 12% before we close up.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Finish Quality Matters
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hamilton builders expect{" "}
                <strong>paint-ready drywall repair Hamilton</strong> at
                turnover. We pursue <strong>smooth wall repair Hamilton</strong>{" "}
                standards and test surfaces under bright LED lights so you
                receive a <strong>smooth, flawless finish Hamilton</strong>.
                Whether you're hanging art, choosing decorative paper, or
                leaving things white, surfaces arrive{" "}
                <strong>ready for wallpaper Hamilton</strong> and painting crews
                without extra prep.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Heritage homes demand{" "}
                <strong>seamless drywall repair Hamilton</strong> even when
                plaster meets new board. We blend textures, feather coats, and
                roll primer to guarantee{" "}
                <strong>no visible patch lines Hamilton</strong> before you
                invite people back into the space.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Property Types We Serve
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We balance schedules across {audiences.join(", ")} so each
                project receives the right technicians and containment methods.
                Condos get elevator pads and hallway runners, offices receive
                off-hours scheduling, and basements include humidity control
                protocols.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Small Jobs Done Right
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many calls are for{" "}
                <strong>hole in drywall repair Hamilton</strong> or{" "}
                <strong>small drywall repair Hamilton</strong> after TV mounts,
                moving damage, or furniture scuffs. Even one{" "}
                <strong>hole in drywall Hamilton</strong> receives dust control,
                reinforced backing where needed, and multi-coat feathering so
                the wall reads perfectly flat. That same process handles{" "}
                <strong>drywall dent repair Hamilton</strong>,{" "}
                <strong>nail pop repair Hamilton</strong>, and{" "}
                <strong>repair holes in drywall Hamilton</strong> caused by
                doorknobs or anchors.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Crack & Seam Stabilization
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settlement cracks, truss uplift, and framing tension create
                complex repairs. Our crew uses flexible taping systems, proper
                back-blocking, and slow-drying mud mixes for reliable{" "}
                <strong>drywall crack repair Hamilton</strong>,{" "}
                <strong>wall crack repair Hamilton</strong>,{" "}
                <strong>drywall seam repair Hamilton</strong>, and{" "}
                <strong>drywall tape repair Hamilton</strong> results. We also
                correct <strong>loose drywall tape repair Hamilton</strong>{" "}
                issues and eliminate{" "}
                <strong>bubbling drywall tape repair Hamilton</strong> callbacks
                by resetting each joint and performing precise{" "}
                <strong>joint compound repair Hamilton</strong> layering.
              </p>
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
              Schedule with a <strong>drywall repair company Hamilton</strong>{" "}
              that documents every step and delivers finish quality trusted by
              homeowners, property managers, and builders.
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
                Explore our complete GTA drywall repair services & expert guides
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
