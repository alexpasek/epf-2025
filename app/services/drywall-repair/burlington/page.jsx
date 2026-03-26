// filepath: /Users/alex/EpfProservicesn2025/epfproservices2025build/app/services/drywall-repair/burlington/page.jsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Burlington";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/burlington/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  ["aldershot", "Aldershot", "Lakefront community with GO station access", "Drywall repair for water damage from Lake Ontario, residential and condo work"],
  ["downtown-burlington", "Downtown Burlington", "Historic downtown with mixed-use development", "Commercial drywall repair, heritage homes, waterfront condos"],
  ["roseland", "Roseland", "Established neighbourhood with mature trees", "Residential drywall repair, renovation support, basement finishing"],
  ["orchard", "Orchard", "Family-oriented community near parks", "Drywall repair for family homes, hole patching, paint-ready finishing"],
  ["headon", "Headon", "Upscale area with executive homes", "Premium drywall repair, seamless finishing, luxury coordination"],
  ["millcroft", "Millcroft", "Prestigious neighbourhood with large properties", "Estate drywall repair, Level 5 finishing, designer coordination"],
  ["tyandaga", "Tyandaga", "Newer development with modern homes", "New home drywall repair, settlement fixes, builder warranty work"],
  ["brant-hills", "Brant Hills", "Escarpment area with diverse housing", "Drywall repair for cracks, water damage, renovation support"],
  ["palmer", "Palmer", "Lakeside community near waterfront", "Waterfront drywall repair, humidity damage, seamless patching"],
  ["shoreacres", "Shoreacres", "Waterfront neighbourhood with lake views", "Drywall repair for Lake Ontario water damage, luxury homes, premium finishing"],
  ["tansley", "Tansley", "Residential area with family homes", "Residential drywall repair, basement work, renovation coordination"],
  ["longmoor", "Longmoor", "Established community near QEW", "Drywall repair for homes, crack fixes, paint-ready surfaces"],
];

const FAQS = [
  {
    q: `What does drywall repair cost in ${CITY}?`,
    a: "Burlington drywall repair pricing depends on damage extent, wall height, number of locations, whether painting is included, and project urgency. Submit photos with room dimensions for detailed written estimates specific to your Burlington property.",
  },
  {
    q: "Do you handle emergency water damage drywall repair in Burlington?",
    a: "Yes. Our emergency teams respond to Burlington properties within hours for burst pipe damage, roof leaks, and flooding. We document moisture levels, remove compromised material, dry framing, and deliver seamless repairs with insurance-ready documentation.",
  },
  {
    q: "Can you repair drywall after renovation work?",
    a: "Absolutely. We coordinate drywall repair after plumbing Burlington, electrical upgrades, and HVAC installations. Our crews patch access holes, match existing textures, and provide paint-ready surfaces for your Burlington renovation projects.",
  },
  {
    q: "What makes a Level 5 finish different?",
    a: "Level 5 finish includes full-surface skim coating that eliminates any visible seam or patch lines—essential for high-gloss paints and modern lighting in Burlington homes. This creates a smooth, flawless finish superior to standard repair methods.",
  },
  {
    q: "Do you service Burlington condos and townhomes?",
    a: "Yes. We handle condo drywall repair Burlington with building insurance coordination, elevator reservations, quiet hour compliance, and hallway protection—standard requirements for Waterdown Road towers and Lakeshore condos.",
  },
  {
    q: "How long do drywall repairs typically take?",
    a: "Small repairs like nail pop repair Burlington often complete in 1 day. Larger projects—water damaged drywall repair Burlington, multi-room crack repair, or commercial work—may take 2-5 days depending on drying times and finish coats required.",
  },
  {
    q: "Can you match existing wall textures?",
    a: "Yes. Our Burlington drywall contractors match orange peel, knockdown, skip trowel, and smooth finishes. We blend repairs seamlessly with surrounding walls so patches are invisible after completion.",
  },
  {
    q: "Do you provide warranties on repairs?",
    a: "All drywall repair services Burlington include a 3-year workmanship warranty covering finish quality, tape adhesion, and cracking under normal conditions. Water damage repairs include documented moisture readings for insurance claims.",
  },
  {
    q: "Which Burlington areas do you serve?",
    a: "We serve all Burlington neighbourhoods: Aldershot, Downtown Burlington, Millcroft, Headon, Roseland, Tyandaga, Brant Hills, Shoreacres, and lakefront communities. Same-day quotes available throughout Burlington and surrounding areas.",
  },
];

export const metadata = {
  title: `Drywall Repair Burlington | Expert Patching, Water Damage & Seamless Finish | EPF Pro Services`,
  description:
    "Professional drywall repair Burlington. Expert contractors for holes, cracks, water damage, Level 5 finish. WSIB insured. Emergency service available.",
  keywords: [
    "drywall repair Burlington",
    "drywall repair services Burlington",
    "drywall repair company Burlington",
    "drywall contractor Burlington",
    "drywall contractors Burlington",
    "professional drywall repair Burlington",
    "drywall patch repair Burlington",
    "water damaged drywall repair Burlington",
    "drywall crack repair Burlington",
    "seamless drywall repair Burlington",
    "condo drywall repair Burlington",
    "residential drywall repair Burlington",
    "commercial drywall repair Burlington",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: `${SERVICE} in ${CITY} | Professional Contractors & Level 5 Finish`,
    description:
      "Expert drywall repair Burlington for water damage, cracks, holes. WSIB insured contractors. Level 5 finish standard. Serving all Burlington neighbourhoods.",
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
        "Seamless Drywall Repair",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
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

  return (
    <>
      <SeoJsonLd />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-5 py-2 rounded-full mb-6">
              <span className="text-xl">📍</span>
              <span className="font-bold">Serving All Burlington Areas</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Drywall Repair
              <br />
              <span className="text-blue-400">Burlington</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl">
              Professional <strong>drywall repair services Burlington</strong>{" "}
              for water damage, holes, cracks & seamless finishes.{" "}
              <strong>WSIB insured contractors</strong> delivering Level 5
              quality across Aldershot, Downtown, Millcroft & beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#quote"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105"
              >
                Get Free Estimate
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105"
              >
                <span className="mr-2">📞</span> {phoneText}
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Emergency Water Damage",
                "Level 5 Finish Standard",
                "3-Year Warranty",
                "Same-Day Quotes",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                >
                  <p className="font-semibold text-sm">{feature}</p>
                </div>
              ))}
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
              {/* Left Column - Info */}
              <div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  FAST & ACCURATE QUOTES
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Get Your Burlington Drywall Repair Quote
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Share photos of your damaged walls or ceilings, note room
                  dimensions, and let us know if moisture is present. We'll
                  provide detailed pricing for your{" "}
                  <strong>drywall repair Burlington</strong> project within
                  hours.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Water Damage Repairs",
                      desc: "Emergency response for ceiling water damage repair Burlington",
                    },
                    {
                      icon: "🔧",
                      title: "Holes & Patching",
                      desc: "Expert drywall patch repair Burlington for all sizes",
                    },
                    {
                      icon: "⚡",
                      title: "Crack Repair",
                      desc: "Structural drywall crack repair Burlington with reinforcement",
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

              {/* Right Column - Form */}
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

      {/* SERVICE TYPES - 3 COLUMN GRID */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              COMPREHENSIVE SOLUTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Drywall Repair Services Burlington
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency <strong>water damaged drywall repair Burlington</strong> to precision <strong>drywall patching Burlington</strong>—our experts handle every repair type.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🔧",
                title: "Patching & Small Jobs",
                keywords: [
                  "drywall patch repair Burlington",
                  "hole in drywall repair Burlington",
                  "nail pop repair Burlington",
                  "drywall dent repair Burlington",
                  "small drywall repair Burlington",
                ],
              },
              {
                icon: "💧",
                title: "Water Damage & Leaks",
                keywords: [
                  "water damaged drywall repair Burlington",
                  "ceiling water damage repair Burlington",
                  "drywall repair after leak Burlington",
                  "drywall water damage repair Burlington",
                ],
              },
              {
                icon: "⚡",
                title: "Cracks & Seams",
                keywords: [
                  "drywall crack repair Burlington",
                  "wall crack repair Burlington",
                  "drywall seam repair Burlington",
                  "drywall tape repair Burlington",
                  "loose drywall tape repair Burlington",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.keywords.map((kw) => (
                    <li key={kw} className="flex items-start gap-2 text-sm text-gray-700">
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
              Serving all Burlington neighbourhoods with consistent quality and emergency response
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - SPLIT LAYOUT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  BURLINGTON'S TRUSTED EXPERTS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Burlington Homeowners Choose Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our <strong>drywall contractors Burlington</strong> deliver Level 5 finish quality on every project—from <strong>minor drywall repair Burlington</strong> to extensive <strong>commercial drywall repair Burlington</strong> work.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Emergency Response",
                      desc: "24/7 availability for water damaged drywall repair Burlington. Crews respond within hours with moisture meters and containment equipment.",
                    },
                    {
                      title: "Level 5 Finish Standard",
                      desc: "Every seamless drywall repair Burlington project receives multiple feathered coats with raking-light inspection for smooth, flawless finish.",
                    },
                    {
                      title: "3-Year Warranty",
                      desc: "Full workmanship guarantee on all drywall repair services Burlington covering finish quality and structural integrity.",
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
                    alt="Professional drywall repair Burlington - expert contractors delivering smooth finish"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <p className="text-3xl font-bold mb-1">4.9★</p>
                  <p className="text-sm opacity-90">127+ Verified Reviews</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🛡️", text: "WSIB Insured" },
                { icon: "📋", text: "$5M Liability" },
                { icon: "⏱️", text: "Same-Day Quotes" },
                { icon: "✨", text: "Paint-Ready Finish" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200"
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="font-semibold text-gray-900">{badge.text}</span>
                </div>
              ))}
            </div>
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
              Burlington Drywall Repair Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from <strong>professional drywall repair Burlington</strong> projects across Aldershot, Millcroft, Downtown & beyond.
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
                  alt={`Burlington drywall repair project ${i + 1}`}
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
                Serving Every Burlington Neighbourhood
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional <strong>drywall repair company Burlington</strong> with crews across Aldershot, Headon, Millcroft, Downtown & lakefront areas.
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
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {services}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Fast Response Across Burlington
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Our <strong>Burlington drywall contractors</strong> serve waterfront condos, heritage homes, new developments, and commercial properties with consistent Level 5 quality. Upload photos or call for same-day scheduling.
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
                Burlington Drywall Repair FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Answers about our <strong>drywall repair services Burlington</strong>
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
                More questions about drywall repair in Burlington?
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
              Professional Drywall Repair Services Throughout Burlington
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When Burlington homeowners and property managers need reliable <strong>drywall repair services Burlington</strong>, EPF Pro Services delivers professional results across every neighbourhood. From Aldershot's heritage homes to Millcroft's modern developments, our experienced <strong>drywall contractors Burlington</strong> bring decades of expertise to residential, commercial, and condo projects.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why Burlington Residents Trust Our Team
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                  <span><strong>Local expertise:</strong> Deep knowledge of Burlington building codes, waterfront property challenges, and heritage home requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                  <span><strong>Emergency availability:</strong> 24/7 response for <strong>water damaged drywall repair Burlington</strong> situations with insurance documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                  <span><strong>Quality guarantee:</strong> Every <strong>seamless drywall repair Burlington</strong> project backed by our comprehensive 3-year warranty</span>
                </li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Complete Drywall Repair Solutions for Burlington Properties
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>professional drywall repair Burlington</strong> services cover every repair need. Whether dealing with emergency <strong>ceiling water damage repair Burlington</strong>, precision <strong>drywall patch repair Burlington</strong> for nail pops and dents, or structural <strong>drywall crack repair Burlington</strong>—our teams deliver consistent Level 5 finish quality.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Drywall patching Burlington</strong> projects receive the same meticulous attention as large-scale repairs. We understand that even <strong>small drywall repair Burlington</strong> work demands precision—wide feathering, multiple thin coats, and raking-light inspection ensure <strong>no visible patch lines Burlington</strong> results.
            </p>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Emergency Water Damage Response for Burlington Homes
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Water emergencies require immediate action. Our 24/7 teams specialize in <strong>drywall water damage repair Burlington</strong> with rapid deployment across all Burlington neighbourhoods. From burst pipes in Aldershot basements to roof leaks in Downtown condos, we respond within hours with professional moisture testing and containment equipment.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Every <strong>drywall repair after leak Burlington</strong> project includes calibrated moisture meter readings to verify substrate moisture below 12% before new material installation. This critical step prevents future <strong>bubbling drywall tape repair Burlington</strong> callbacks and ensures insurance documentation meets adjuster requirements for property claims.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 my-8 rounded-3xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Serving Burlington's Diverse Neighbourhoods
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our <strong>drywall repair company Burlington</strong> understands the unique characteristics of each area:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lakefront Communities:</p>
                  <p className="text-sm">Shoreacres and Downtown Burlington properties face humidity challenges requiring specialized moisture control during repairs.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Established Areas:</p>
                  <p className="text-sm">Aldershot and Roseland heritage homes may have plaster-and-lath systems requiring traditional restoration techniques.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">New Developments:</p>
                  <p className="text-sm">Millcroft, Headon, and Tyandaga modern homes benefit from warranty coordination with builders.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Condo Towers:</p>
                  <p className="text-sm">Burlington GO Station area high-rises require building COI documentation and strict containment protocols.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Structural Repairs: Cracks, Seams & Tape Work
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Not all <strong>wall crack repair Burlington</strong> situations are equal. Settlement cracks, foundation movement, and improper framing create stress points that basic <strong>drywall tape repair Burlington</strong> cannot address long-term. Our Burlington contractors assess crack patterns to identify root causes before implementing repair strategies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Drywall seam repair Burlington</strong> and <strong>loose drywall tape repair Burlington</strong> often indicate underlying moisture or framing issues. We address these problems at their source using flexible mesh tape systems and proper <strong>joint compound repair Burlington</strong> techniques that accommodate minor structural movement without re-cracking.
            </p>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Renovation & Trade Coordination Services
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Burlington renovation projects require precise coordination. Our <strong>drywall repair after plumbing Burlington</strong> services integrate seamlessly with your contractors—whether it's <strong>drywall repair after electrical work Burlington</strong>, <strong>drywall repair after HVAC Burlington</strong>, or comprehensive <strong>drywall repair after renovations Burlington</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We schedule around other trades, maintain proper containment, and deliver <strong>paint-ready drywall repair Burlington</strong> surfaces that meet painter standards. This coordination proves especially valuable for <strong>condo drywall repair Burlington</strong> where building access, quiet hours, and hallway protection add complexity.
            </p>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Level 5 Finish: The Burlington Standard
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Every <strong>seamless drywall repair Burlington</strong> project targets Level 5 finish quality—full-surface skim coating that creates a <strong>smooth, flawless finish Burlington</strong> without visible seams or patch lines. This premium standard proves essential for high-gloss paints and modern LED lighting common in contemporary Burlington homes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Surfaces are <strong>ready for painting Burlington</strong> or <strong>ready for wallpaper Burlington</strong> without additional preparation. Our raking-light inspection catches imperfections invisible under normal conditions, ensuring <strong>smooth wall repair Burlington</strong> work exceeds industry standards.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Start Your Burlington Repair Project?
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Connect with our <strong>drywall contractor Burlington</strong> team today. Upload damage photos through our online form for same-day written quotes, or call directly for emergency <strong>drywall repair Burlington</strong> service.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg"
                >
                  Get Free Quote
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg"
                >
                  📞 Call Now
                </a>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Commercial & Residential Excellence
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you need <strong>residential drywall repair Burlington</strong> for your family home, <strong>commercial drywall repair Burlington</strong> for retail or office space, or <strong>basement drywall repair Burlington</strong> after flooding—we adapt our approach to your specific requirements while maintaining consistent quality standards.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Minor drywall repair Burlington</strong> projects like <strong>nail pop repair Burlington</strong> and <strong>drywall dent repair Burlington</strong> receive the same professional attention as extensive renovations. We understand that every <strong>hole in drywall repair Burlington</strong> project—regardless of size—impacts your property's appearance and value.
            </p>

            <p className="text-gray-700 leading-relaxed mt-8">
              For detailed information about our complete service offerings, repair techniques, and quality standards throughout the GTA, explore our main{" "}
              <Link
                href="/services/drywall-repair/"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
               drywall repair services 
              </Link> page.
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
              Ready for Expert Drywall Repair in Burlington?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Professional <strong>Burlington drywall contractors</strong> delivering seamless repairs with transparent pricing, 3-year warranty, and complete photo documentation. Serving all Burlington neighbourhoods.
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
                Need comprehensive information about drywall repair services across the Greater Toronto Area?
              </p>
              <Link
                href="/services/drywall-repair/"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-lg"
              >
                View Complete Drywall Repair Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
