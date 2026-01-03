import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Mississauga";
const SERVICE = "Drywall Installation";
const SLUG = "/services/drywall-installation/mississauga/";

const CORE_KEYWORDS = [
  "drywall installation Mississauga",
  "drywall installation services Mississauga",
  "drywall installation contractor Mississauga",
  "drywall contractors for installation Mississauga",
  "new drywall installation Mississauga",
];

const HANGING_KEYWORDS = [
  "drywall hanging Mississauga",
  "hang drywall Mississauga",
  "drywall board installation Mississauga",
  "sheetrock installation Mississauga",
  "gypsum board installation Mississauga",
];

const REBUILD_KEYWORDS = [
  "drywall replacement Mississauga",
  "remove and replace drywall Mississauga",
  "new drywall for renovation Mississauga",
  "drywall installation after demolition Mississauga",
  "drywall installation after water damage Mississauga",
];

const PROJECT_KEYWORDS = [
  "basement drywall installation Mississauga",
  "ceiling drywall installation Mississauga",
  "drywall installation for additions Mississauga",
  "drywall installation for commercial buildouts Mississauga",
];

const FINISH_KEYWORDS = [
  "drywall finishing Mississauga",
  "drywall taping and mudding Mississauga",
  "drywall sanding Mississauga",
  "level 4 finish Mississauga",
  "level 5 finish Mississauga",
  "skim coat Mississauga",
];

const AUDIENCE_KEYWORDS = [
  "residential drywall installation Mississauga",
  "commercial drywall installation Mississauga",
  "condo drywall installation Mississauga",
];

const KEYWORDS = [
  ...CORE_KEYWORDS,
  ...HANGING_KEYWORDS,
  ...REBUILD_KEYWORDS,
  ...PROJECT_KEYWORDS,
  ...FINISH_KEYWORDS,
  ...AUDIENCE_KEYWORDS,
];

const FAQS = [
  {
    q: "What does drywall installation cost in Mississauga?",
    a: "Drywall installation Mississauga pricing depends on square footage, ceiling height, finish level, and project scope. Every project is unique—send drawings or photos for accurate itemized estimates tailored to your specific needs.",
  },
  {
    q: "Do you handle both hanging and finishing?",
    a: "Yes. Our drywall contractors for installation Mississauga manage complete projects: framing verification, drywall hanging Mississauga, drywall taping and mudding Mississauga, drywall sanding Mississauga, and optional painting. Choose level 4 finish Mississauga or level 5 finish Mississauga.",
  },
  {
    q: "Can you replace damaged drywall?",
    a: "We specialize in drywall replacement Mississauga for water damage, fire restoration, and renovations. Services include remove and replace drywall Mississauga, drywall installation after water damage Mississauga, and drywall installation after demolition Mississauga with insurance documentation.",
  },
  {
    q: "What project types do you handle?",
    a: "Our teams complete basement drywall installation Mississauga, ceiling drywall installation Mississauga, drywall installation for additions Mississauga, and drywall installation for commercial buildouts Mississauga. We serve condos, homes, offices, and retail spaces.",
  },
  {
    q: "Do you work in high-rise condos?",
    a: "Absolutely. We provide condo drywall installation Mississauga with building COI requirements, elevator bookings, quiet-hour compliance, and hallway protection—standard for Square One towers and Lakeshore condominiums.",
  },
  {
    q: "Do you offer specialty finishes?",
    a: "Yes. Every new drywall installation Mississauga can include skim coat Mississauga for ultra-smooth walls, perfect for modern lighting and high-gloss finishes. We also provide sheetrock installation Mississauga and gypsum board installation Mississauga.",
  },
];

export const metadata = {
  title: "Drywall Installation Mississauga | Condos, Homes & Commercial Builds",
  description:
    "Professional drywall installation contractor Mississauga for basements, ceilings, condos, and office buildouts. Expert hanging, taping, and Level 5 finishing.",
  keywords: KEYWORDS,
  alternates: { canonical: SLUG },
  openGraph: {
    title: "Drywall Installation Services Mississauga | EPF Pro Services",
    description:
      "Full-service drywall installation services Mississauga covering residential, commercial, and condo projects with Level 5 finish quality.",
    url: SLUG,
    type: "website",
    images: [
      {
        url: "/services/drywall/1.webp",
        width: 1200,
        height: 630,
        alt: "Drywall installation Mississauga crew working in modern condo",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const mississauga = cities.find((c) => c.slug === "mississauga");
  const areaServed = [
    CITY,
    ...(mississauga?.neighborhoods?.map((n) => `${CITY} - ${n.name}`) || []),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${SERVICE} in ${CITY}`,
        serviceType: KEYWORDS,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          telephone: phoneText,
          url: "https://epfproservices.com",
          image: "/logo.png",
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: "ON",
            addressCountry: "CA",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: SLUG,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: "/quote/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "/services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Installation",
            item: "/services/drywall-installation/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: CITY,
            item: SLUG,
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

export default function Page() {
  const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const mississauga = cities.find((city) => city.slug === "mississauga");
  const neighborhoods = mississauga?.neighborhoods || [];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/drywall/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white">
              <p className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-200/40 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-purple-100">
                Square One • Port Credit • Streetsville • Meadowvale
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {SERVICE} {CITY}
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                From downtown high-rises to suburban estates, we deliver drywall
                installation services Mississauga for condos, homes, and office
                spaces. Our drywall installation contractor Mississauga teams
                bring precision hanging, Level 5 finishing, and condo-friendly
                logistics.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our crews handle basement drywall installation Mississauga,
                ceiling drywall installation Mississauga, and commercial
                buildouts with elevator protection, quiet-hour scheduling, and
                daily cleanup.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <div className="text-sm font-semibold">Condo Specialists</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <div className="text-sm font-semibold">
                    Residential Builds
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏗️</div>
                  <div className="text-sm font-semibold">
                    Commercial Fit-Outs
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">💧</div>
                  <div className="text-sm font-semibold">Water Damage</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition shadow-lg hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="mr-2">📞</span>
                  {phoneText}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={images[0]}
                  alt="Mississauga drywall installation crew working in condo"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Professional installation across Mississauga
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="text-4xl font-bold text-purple-600 mb-1">
                  2,000+
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Projects completed
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              SERVING ALL {CITY.toUpperCase()} NEIGHBOURHOODS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.slice(0, 12).map((n) => (
                <span
                  key={n.slug}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section
        id="quote-form"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Detailed Drywall Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fast, accurate pricing for drywall installation services
                Mississauga across all project types
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <QuoteForm />

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Prefer to call?
                      </div>
                      <a
                        href={phoneHref}
                        className="text-xl font-bold text-purple-600 hover:underline"
                      >
                        {phoneText}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Fast Response
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        Same-Day Quotes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Mississauga Chooses Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Condo-ready crews, Level 5 quality, and flexible scheduling for
              drywall installation Mississauga
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Condo Specialists",
                text: `Expert condo drywall installation Mississauga with COI compliance, elevator protection, and quiet-hour scheduling for high-rise projects.`,
                bullets: [
                  "Building insurance documentation",
                  "Elevator padding & protection",
                  "Hallway containment systems",
                ],
              },
              {
                icon: "🛠️",
                title: "Professional Hanging",
                text: `Precision drywall hanging Mississauga with laser layout, mechanical lifts, and quality materials for all ceiling heights.`,
                bullets: [
                  "hang drywall Mississauga",
                  "drywall board installation Mississauga",
                  "sheetrock installation Mississauga",
                ],
              },
              {
                icon: "✨",
                title: "Premium Finishing",
                text: `Exceptional drywall finishing Mississauga from level 4 finish Mississauga to level 5 finish Mississauga with HEPA-controlled sanding.`,
                bullets: [
                  "drywall taping and mudding Mississauga",
                  "drywall sanding Mississauga",
                  "skim coat Mississauga",
                ],
              },
              {
                icon: "🏗️",
                title: "Renovation Ready",
                text: `Complete drywall replacement Mississauga for renovations, water damage, and demolition projects with insurance coordination.`,
                bullets: [
                  "remove and replace drywall Mississauga",
                  "drywall installation after demolition Mississauga",
                  "drywall installation after water damage Mississauga",
                ],
              },
              {
                icon: "🏢",
                title: "Commercial Expertise",
                text: `Professional drywall installation for commercial buildouts Mississauga with night shifts, lift equipment, and fast turnarounds.`,
                bullets: [
                  "commercial drywall installation Mississauga",
                  "Office buildouts",
                  "Retail fit-outs",
                ],
              },
              {
                icon: "🏡",
                title: "Residential Quality",
                text: `Complete residential drywall installation Mississauga including basement drywall installation and ceiling installations.`,
                bullets: [
                  "basement drywall installation Mississauga",
                  "ceiling drywall installation Mississauga",
                  "drywall installation for additions Mississauga",
                ],
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl text-white mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mississauga Drywall Installation Projects
            </h2>
            <p className="text-xl text-gray-600">
              Recent installations across condos, homes, and commercial spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <figure
                key={src}
                className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-purple-300 transition group"
              >
                <img
                  src={src}
                  alt={`Drywall installation Mississauga project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <p className="text-white font-semibold">
                    {index % 3 === 0
                      ? PROJECT_KEYWORDS[0]
                      : index % 3 === 1
                      ? AUDIENCE_KEYWORDS[2]
                      : PROJECT_KEYWORDS[3]}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Mississauga Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six-step workflow for reliable drywall installation services
              Mississauga
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Site Preparation",
                text: "Building coordination, elevator booking, floor protection, and material staging for condo or commercial sites.",
              },
              {
                title: "Framing Verification",
                text: "Inspect framing, install backing, verify spacing for precise drywall board installation Mississauga alignment.",
              },
              {
                title: "Professional Hanging",
                text: "Mechanical lifts, laser alignment, and experienced crews for hang drywall Mississauga projects of all sizes.",
              },
              {
                title: "Taping & Mudding",
                text: "Multiple coats with drywall taping and mudding Mississauga using quality compounds and proper drying time.",
              },
              {
                title: "Sanding & Finishing",
                text: "HEPA-controlled drywall sanding Mississauga with spotlight inspection for level 4 or level 5 finish.",
              },
              {
                title: "Prime & Turnover",
                text: "Optional priming, final punch-list, and complete cleanup for paint-ready surfaces.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-lg transition"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall Installation Cost in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing based on scope, square footage, and finish
              quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Small Projects
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Affordable
                </div>
                <div className="text-sm text-gray-600">
                  Single rooms & repairs
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Small room installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Standard taping & mudding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Level 4 finish quality</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8 border-2 border-purple-400 shadow-xl transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-white text-xs font-bold uppercase mb-4">
                  Most Popular
                </div>
                <div className="text-sm font-bold text-white/90 uppercase tracking-wide mb-2">
                  Medium Projects
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  Competitive
                </div>
                <div className="text-sm text-white/90">
                  Full basements & condos
                </div>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Complete basement installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Condo renovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Level 5 finish available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Optional prime & paint</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Large Projects
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Custom Quote
                </div>
                <div className="text-sm text-gray-600">
                  Commercial & whole-home
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Commercial buildouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Multi-unit projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Cost Factors We Consider
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📏",
                  title: "Square Footage",
                  text: "Total area and ceiling height impact materials and labor.",
                },
                {
                  icon: "🏗️",
                  title: "Site Access",
                  text: "Elevator use, parking, and material delivery logistics.",
                },
                {
                  icon: "💧",
                  title: "Condition",
                  text: "Water damage or demolition requires additional prep.",
                },
                {
                  icon: "⚙️",
                  title: "Finish Level",
                  text: "Level 4 standard vs Level 5 premium smooth finish.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl text-center">
              <p className="text-gray-700 font-semibold mb-4">
                Every project is unique. Share your project details, photos, or
                drawings for an accurate itemized quote tailored to your
                Mississauga property.
              </p>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-lg"
              >
                Get Detailed Estimate →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Drywall Installation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drywall installation contractor Mississauga teams
              deliver consistent quality across all neighbourhoods
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Expert Installation Throughout Mississauga
            </h3>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our drywall contractors for installation Mississauga serve the
              entire city with consistent quality, transparent pricing, and
              professional site management. From Square One condos to Meadowvale
              homes, we deliver results across all project types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-full font-bold transition-all shadow-xl hover:scale-105"
              >
                📞 Call for Free Quote
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white/30 rounded-full font-bold transition-all"
              >
                Get Estimate
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-4">
              Trusted Installation Across Mississauga Neighbourhoods
            </h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              From Square One high-rises to Churchill Meadows estates, our
              licensed crews deliver professional drywall installation services
              throughout Mississauga's diverse communities. Every neighbourhood
              receives the same quality workmanship and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span
                  key={n.slug}
                  className="px-5 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:border-purple-400 hover:text-purple-600 transition"
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl">⭐</span>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 font-semibold">Google Rating</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted Drywall Contractors in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WSIB insured, fully licensed, and ready for condo board or GC
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🏆",
                title: "Licensed & Insured",
                text: "WSIB + $5M liability, clearance certificates on request.",
              },
              {
                icon: "✅",
                title: "Quality Process",
                text: "Multi-stage inspections and documented project tracking.",
              },
              {
                icon: "📜",
                title: "3-Year Warranty",
                text: "Coverage on seams, fastener pops, and finish integrity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition"
              >
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-4xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 hover:border-purple-500 rounded-full font-bold text-gray-900 hover:text-purple-600 transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">⭐</span>
                <span>Read Our Google Reviews</span>
                <span>→</span>
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full font-bold transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">📞</span>
                <span>Call for Quote</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall Installation Mississauga FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services, process, and pricing
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-300 transition cursor-pointer"
              >
                <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                  <span>{faq.q}</span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">
                    ⌄
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Professional Drywall Installation?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Book drywall installation Mississauga with finish options from
              level 4 finish to level 5 finish and keep your project on
              schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-purple-600 hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <span className="mr-2">📞</span>Call {phoneText}
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition shadow-2xl hover:shadow-3xl border-2 border-white/30"
              >
                Get Free Estimate
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">Condo Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">Level 5 Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">3-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Drywall Installation Services in Mississauga
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                When Mississauga property owners and contractors need reliable{" "}
                <strong>drywall installation services Mississauga</strong>, EPF
                Pro Services delivers professional results across residential,
                commercial, and condo projects. Our experienced{" "}
                <strong>
                  drywall contractors for installation Mississauga
                </strong>{" "}
                bring decades of expertise to basement builds, high-rise
                renovations, commercial tenant improvements, and emergency
                reconstruction work.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Mississauga Builders Choose Our Installation Teams
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Licensed & insured:</strong> Full WSIB coverage
                      and $5M liability for every{" "}
                      <strong>drywall installation Mississauga</strong> project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Condo expertise:</strong> Specialized teams for{" "}
                      <strong>condo drywall installation Mississauga</strong>{" "}
                      with building compliance experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Quality guarantee:</strong> Every{" "}
                      <strong>new drywall installation Mississauga</strong>{" "}
                      backed by comprehensive 3-year warranty
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Complete Installation Services for Mississauga Properties
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>drywall installation contractor Mississauga</strong>{" "}
                teams handle every phase: framing coordination,{" "}
                <strong>hang drywall Mississauga</strong> work,{" "}
                <strong>drywall taping and mudding Mississauga</strong>,{" "}
                <strong>drywall sanding Mississauga</strong>, and optional
                painting. Whether you need{" "}
                <strong>basement drywall installation Mississauga</strong>,{" "}
                <strong>ceiling drywall installation Mississauga</strong>, or{" "}
                <strong>drywall installation for additions Mississauga</strong>
                —we deliver consistent results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Sheetrock installation Mississauga</strong> and{" "}
                <strong>gypsum board installation Mississauga</strong> projects
                receive meticulous attention to detail. We verify framing,
                install proper backing for fixtures, and ensure every joint
                aligns perfectly. Our{" "}
                <strong>drywall board installation Mississauga</strong> process
                includes laser layout, mechanical lifts for ceilings, and
                systematic quality checks.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Finishing Excellence: Level 4 and Level 5 Options
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional <strong>drywall finishing Mississauga</strong>{" "}
                separates average installations from exceptional ones. Our teams
                offer both <strong>level 4 finish Mississauga</strong> for
                standard paint applications and{" "}
                <strong>level 5 finish Mississauga</strong> for ultra-smooth
                walls with zero visible seams—essential for high-gloss paints
                and modern LED lighting common in Mississauga condos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Skim coat Mississauga</strong> applications create
                glass-smooth surfaces perfect for accent walls and feature
                ceilings. Combined with HEPA-controlled sanding, our finish work
                delivers paint-ready surfaces that meet the highest quality
                standards for Mississauga residential and commercial projects.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Start Your Mississauga Installation Project?
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Connect with our{" "}
                  <strong>drywall installation contractor Mississauga</strong>{" "}
                  team for detailed quotes. We provide itemized estimates
                  covering materials, labor, finishing, and optional
                  painting—transparent pricing with no hidden costs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-lg"
                  >
                    📞 Call {phoneText}
                  </a>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all shadow-lg"
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-8">
                For comprehensive information about our drywall installation
                services throughout the GTA, visit our{" "}
                <Link
                  href="/services/drywall-installation/"
                  className="text-purple-600 hover:text-purple-700 font-semibold underline"
                >
                  drywall installation services
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur border-t-2 border-white/20 shadow-2xl p-4">
          <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
            <a
              href={phoneHref}
              className="flex-1 text-center px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="#quote-form"
              className="flex-1 text-center px-6 py-3 bg-white/20 backdrop-blur text-white font-bold rounded-full hover:bg-white/30 transition border-2 border-white/30"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
