import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Milton";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/milton/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  [
    "dempsey",
    "Dempsey",
    "Rapidly growing new build community with modern homes",
    "New home drywall repair, builder deficiency fixes, Tarion warranty work",
  ],
  [
    "hawthorne-village",
    "Hawthorne Village",
    "Master-planned community with family-friendly amenities",
    "New construction repairs, basement finishing, Level 5 finishing",
  ],
  [
    "willmont",
    "Willmont",
    "Established neighborhood with parks and schools",
    "Residential repairs, hole patching, renovation support, crack repair",
  ],
  [
    "timberlea",
    "Timberlea",
    "Mature neighborhood with established homes",
    "Basement renovations, water damage restoration, seamless finishing",
  ],
  [
    "old-milton",
    "Old Milton",
    "Historic downtown with heritage architecture",
    "Heritage home repairs, character preservation, period-appropriate work",
  ],
  [
    "scott",
    "Scott",
    "Mix of townhomes and single-family homes",
    "Townhome repairs, condo work, family home service, paint-ready finishing",
  ],
  [
    "bronte-meadows",
    "Bronte Meadows",
    "Growing residential area with new developments",
    "Family home repairs, new build support, warranty fixes, basement work",
  ],
  [
    "beaty",
    "Beaty",
    "Suburban development with modern amenities",
    "Modern home repairs, builder coordination, commercial work, finishing",
  ],
  [
    "clarke",
    "Clarke",
    "Well-established with good schools and parks",
    "Residential repairs, renovation support, basement finishing, crack repair",
  ],
  [
    "coates",
    "Coates",
    "Quiet residential with mature properties",
    "Home repairs, water damage restoration, renovation work, seamless patches",
  ],
  [
    "dorset-park",
    "Dorset Park",
    "Family-oriented community near amenities",
    "Family home service, hole patching, seamless finishing, basement work",
  ],
  [
    "ford",
    "Ford",
    "Growing neighborhood with new construction",
    "New construction support, residential repairs, quality finishing, warranty work",
  ],
];

const FAQS = [
  {
    q: `How much does drywall repair cost in ${CITY}, Ontario?`,
    a: "Milton drywall repair costs range from $200-$500 for small patches to $2,000+ for full room water damage restoration. New build communities like Dempsey and Hawthorne Village often require builder deficiency repairs. We provide transparent, itemized quotes with no hidden fees—send us photos and measurements for accurate same-day pricing.",
  },
  {
    q: "Do you handle water damage emergencies in Milton properties?",
    a: "Yes. Our Milton crew specializes in water damaged drywall repair after basement flooding, burst pipes, and foundation settling common in new developments. We provide 24/7 emergency response with moisture testing, HEPA-filtered drying, and insurance documentation. Ceiling water damage repair Milton includes mold prevention and structural assessment.",
  },
  {
    q: "Can you fix builder deficiencies in new Milton homes?",
    a: "Absolutely. We specialize in new build drywall repair Milton for Tarion warranty work. Our Level 5 skim coating delivers seamless finishes that meet builder standards—no visible patch lines under pot lights or natural daylight. We work extensively in Dempsey, Hawthorne Village, and Willmont developments.",
  },
  {
    q: "Do you coordinate with Milton home builders and contractors?",
    a: "Yes. We regularly collaborate with Milton's home builders, renovation contractors, and trade partners. Our drywall repair after renovations Milton service integrates seamlessly with new construction projects. We understand builder schedules, Tarion requirements, and the demands of growing communities.",
  },
  {
    q: "What's your service area within Milton?",
    a: "We serve all Milton neighbourhoods: Dempsey, Hawthorne Village, Willmont, Timberlea, Old Milton, Scott, Bronte Meadows, Beaty, Clarke, Coates, Dorset Park, and Ford. Our crews understand local building styles from heritage homes to brand-new subdivisions.",
  },
  {
    q: "Do you service Milton townhomes and commercial properties?",
    a: "Yes. We handle townhouse drywall repair Milton communities with parking coordination and neighbor consideration. Our commercial drywall repair Milton extends to downtown offices, Main Street businesses, and industrial properties. Fully insured with $5M liability and WSIB coverage.",
  },
  {
    q: "What warranty do you provide for Milton properties?",
    a: "All drywall repair services Milton include our 3-year craftsmanship warranty covering materials, workmanship, and finish integrity. This warranty is transferable if you sell your Milton home and is backed by our insurance. We stand behind every project from small patches to full renovations.",
  },
];

export const metadata = {
  title: `Drywall Repair Milton Ontario | New Build & Water Damage Specialists`,
  description:
    "Professional drywall repair Milton Ontario for new builds, family homes & commercial. Water damage restoration, seamless finishing, Level 5 quality. Serving Dempsey, Hawthorne Village, Timberlea & all Milton neighborhoods. Tarion warranty work.",
  keywords: [
    "drywall repair Milton",
    "drywall repair Milton Ontario",
    "drywall repair services Milton",
    "drywall repair company Milton",
    "drywall contractor Milton",
    "drywall contractors Milton",
    "professional drywall repair Milton",
    "new build drywall repair Milton",
    "drywall repair Dempsey",
    "drywall repair Hawthorne Village",
    "drywall repair Willmont",
    "drywall repair Timberlea",
    "drywall patch repair Milton",
    "drywall patching Milton",
    "hole in drywall Milton",
    "hole in drywall repair Milton",
    "repair holes in drywall Milton",
    "drywall dent repair Milton",
    "nail pop repair Milton",
    "small drywall repair Milton",
    "minor drywall repair Milton",
    "drywall crack repair Milton",
    "wall crack repair Milton",
    "drywall seam repair Milton",
    "drywall tape repair Milton",
    "water damaged drywall repair Milton",
    "drywall water damage repair Milton",
    "drywall repair after leak Milton",
    "ceiling water damage repair Milton",
    "seamless drywall repair Milton",
    "smooth wall repair Milton",
    "paint-ready drywall repair Milton",
    "ready for painting Milton",
    "no visible patch lines Milton",
    "drywall repair after plumbing Milton",
    "drywall repair after renovations Milton",
    "residential drywall repair Milton",
    "commercial drywall repair Milton",
    "townhouse drywall repair Milton",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: `Professional ${SERVICE} Milton, Ontario | New Build Specialists`,
    description:
      "Milton's professional drywall repair specialists. Water damage restoration, seamless finishing for new builds, family homes & commercial. Level 5 quality, WSIB insured, Tarion warranty work.",
    url: SLUG,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/gallery/drywall-repair/drywall-repair.webp`,
        width: 1200,
        height: 630,
        alt: "Professional drywall repair Milton Ontario",
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
      title: "New Build & Builder Deficiencies",
      description:
        "Professional drywall solutions for Milton's growing communities in Dempsey, Hawthorne Village, and Willmont. Tarion warranty work and builder coordination.",
      keywords: [
        "new build drywall repair Milton",
        "drywall repair Dempsey",
        "drywall repair Hawthorne Village",
        "builder deficiency repairs Milton",
        "seamless drywall repair Milton",
        "smooth wall repair Milton",
        "paint-ready drywall repair Milton",
      ],
    },
    {
      icon: "💧",
      title: "Water Damage & Emergency Restoration",
      description:
        "24/7 emergency response for basement flooding, burst pipes, and foundation settling common in new developments. HEPA drying, moisture testing, and insurance coordination.",
      keywords: [
        "water damaged drywall repair Milton",
        "ceiling water damage repair Milton",
        "drywall repair after leak Milton",
        "drywall water damage repair Milton",
      ],
    },
    {
      icon: "🏢",
      title: "Townhome & Commercial Projects",
      description:
        "Coordinated service for Milton's townhome communities and downtown businesses. Parking management, neighbor consideration, and professional scheduling.",
      keywords: [
        "townhouse drywall repair Milton",
        "commercial drywall repair Milton",
        "residential drywall repair Milton",
        "drywall contractors Milton",
      ],
    },
  ];

  const finishPromises = [
    "seamless drywall repair Milton",
    "smooth wall repair Milton",
    "paint-ready drywall repair Milton",
    "Level 5 finish quality",
    "ready for painting Milton",
    "no visible patch lines Milton",
    "professional home finish standards",
  ];

  const tradeItems = [
    "drywall repair after plumbing Milton",
    "drywall repair after renovations Milton",
    "seamless drywall repair Milton",
    "coordination with Milton builders",
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
                  <span>📍</span> Serving Milton's Growing Communities
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Professional Drywall Repair{" "}
                  <span className="text-blue-600">{CITY}, Ontario</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Expert <strong>drywall repair Milton Ontario</strong> for new
                  builds, family homes & commercial renovations
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
                      New Build Repairs
                    </h3>
                    <p className="text-sm text-gray-600">
                      Professional drywall repair Milton new homes
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
                      Ceiling water damage repair Milton
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
                      Level 5 smooth wall repair Milton
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Commercial Projects
                    </h3>
                    <p className="text-sm text-gray-600">
                      Commercial drywall repair Milton businesses
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
                  alt="Professional drywall repair Milton Ontario - new build specialists Dempsey Hawthorne Village"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1 text-blue-300">
                      MILTON'S TRUSTED DRYWALL SPECIALISTS
                    </p>
                    <p className="text-2xl font-bold">
                      Professional Drywall Repair
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
                  Upload photos, add measurements, and note moisture levels. We
                  send same-day written pricing for{" "}
                  <strong>drywall repair services Milton</strong>, from single
                  cut-outs in Dempsey to multi-room rebuilds in Hawthorne
                  Village.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Water damage & ceilings",
                      desc: "Ceiling water damage repair Milton documentation with thermal imaging and moisture logs.",
                    },
                    {
                      icon: "🧱",
                      title: "Trade cut-outs",
                      desc: "Coordinated <strong>drywall repair after plumbing Milton</strong> upgrades, HVAC retrofits, and EV charger installs.",
                    },
                    {
                      icon: "✨",
                      title: "Finish perfection",
                      desc: "Level 5 skim coating for <strong>smooth, flawless finish Milton</strong> spaces.",
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
              Whether it's a <strong>hole in drywall Milton</strong> from moving
              day or a full ceiling rebuild after a leak, our WSIB-insured crew
              brings HEPA equipment, dust containment, and finish inspections
              every time.
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
              Trusted crews for new build communities, established
              neighborhoods, and commercial properties across Milton.
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
                  MILTON'S TRUSTED CREW
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Milton Homeowners Choose Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Local <strong>drywall contractors Milton</strong> providing
                  photo updates, tidy daily cleanup, and seamless coordination
                  with builders and trade partners.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Emergency coordination",
                      desc: "Rapid response for basement floods or burst pipes in Milton with moisture readings and rebuild under one PM.",
                    },
                    {
                      title: "Level 5 finish standard",
                      desc: "Raking-light inspections so <strong>paint-ready drywall repair Milton</strong> jobs look perfect under pot lights.",
                    },
                    {
                      title: "Trade-friendly scheduling",
                      desc: "Flexible calendar for plumbers, electricians, and HVAC installers so <strong>drywall repair after renovations Milton</strong> projects finish on time.",
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
                  {" "}
                  <img
                    src={images[0]}
                    alt="Drywall repair Milton Level 5 finish"
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
                Finish Outcomes Milton Homeowners Expect
              </h3>
              <p className="text-gray-600 mb-6">
                We skim, sand, and prime until surfaces deliver{" "}
                <strong>smooth wall repair Milton</strong> quality. From Dempsey
                new builds to established Timberlea homes, everything leaves{" "}
                <strong>ready for painting Milton</strong> or{" "}
                <strong>ready for wallpaper Milton</strong> crews without extra
                prep.
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
                <strong>seamless drywall repair Milton</strong> finishes with no
                visible patch lines Milton residents can spot.
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
              Serving Milton's family homes, new build communities, and
              commercial properties with premium finishes and professional
              service.
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
              Real <strong>professional drywall repair Milton</strong> work from
              Dempsey new builds, Timberlea renovations, and Hawthorne Village
              basements.
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
              </h2>{" "}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driveway protection, garage coordination, and builder
                communication handled for every Milton neighbourhood from
                Dempsey to Old Milton.
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
                Our mobile crews rotate between Dempsey new builds, Timberlea
                renovations, Hawthorne Village custom homes, and downtown Milton
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
                Everything you need to know before booking our Milton team.
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
                Professional Drywall Repair for Milton, Ontario Growing
                Communities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Milton, Ontario is one of Canada's fastest-growing cities—from
                brand-new subdivisions in Dempsey and Hawthorne Village to
                established neighborhoods in Timberlea and heritage properties
                in Old Milton. Our{" "}
                <strong>drywall repair Milton Ontario</strong> service
                understands both new construction and renovation needs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're fixing builder deficiencies in a{" "}
                <strong>new build drywall repair Milton</strong> home in
                Willmont, managing a basement renovation in Scott, or preparing
                your Old Milton heritage home for sale, we deliver{" "}
                <strong>seamless drywall repair Milton</strong> results that
                meet Milton homeowners' expectations. Our comprehensive{" "}
                <Link
                  href="/services/drywall-repair/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repair services
                </Link>{" "}
                extend throughout Ontario's Golden Horseshoe region.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                New Build Specialists: Dempsey, Hawthorne Village & Willmont
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Professional drywall repair Milton</strong> new builds
                requires understanding builder standards, Tarion warranty
                timelines, and finish quality expectations. We work extensively
                with homeowners, builders, and renovation contractors throughout{" "}
                <strong>drywall repair Dempsey</strong> subdivisions,{" "}
                <strong>drywall repair Hawthorne Village</strong> communities,
                and <strong>drywall repair Willmont</strong> developments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Level 5 finish delivers{" "}
                <strong>smooth wall repair Milton</strong> that looks flawless
                under pot lights, natural daylight, and the critical eye of
                professional painters. Every surface is{" "}
                <strong>paint-ready drywall repair Milton</strong>{" "}
                standard—sanded with HEPA equipment, primed properly, and
                inspected under raking light to ensure{" "}
                <strong>no visible patch lines Milton</strong> homeowners can
                detect.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Water Damage in Milton's Growing Communities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Milton's rapid growth and new construction bring unique
                challenges—basement flooding, winter freeze-thaw cycles causing
                pipe bursts, and foundation settling common in new developments.
                Our <strong>water damaged drywall repair Milton</strong> service
                includes 24/7 emergency response with thermal imaging, moisture
                meters, and industrial HEPA drying equipment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From <strong>ceiling water damage repair Milton</strong> new
                builds to <strong>drywall repair after leak Milton</strong>{" "}
                homes with burst pipes, we document everything for insurance
                claims, coordinate with restoration companies, and deliver{" "}
                <strong>drywall water damage repair Milton</strong> that
                prevents mold growth and structural issues.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Coordinating With Milton's Builders & Contractors
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                New builds and renovations require seamless coordination. We
                regularly provide{" "}
                <strong>drywall repair after renovations Milton</strong> service
                for home builders and contractors, working alongside HVAC
                specialists, electricians, and plumbers. Our{" "}
                <strong>drywall repair after plumbing Milton</strong> teams
                understand that finished basements, modern kitchens, and
                bathroom renovations need precision patching.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it's fixing builder deficiencies in a Dempsey new build
                or repairing walls after basement renovations in Timberlea, our{" "}
                <strong>drywall contractors Milton</strong> crew maintains the
                scheduling discipline and quality standards growing communities
                demand.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Townhomes & Commercial Properties
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Townhouse drywall repair Milton</strong> communities
                require careful coordination, parking considerations, and
                minimizing disruption to neighbors. Our crews understand the
                protocols for attached homes and deliver{" "}
                <strong>residential drywall repair Milton</strong> with minimal
                disruption to residents.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For <strong>commercial drywall repair Milton</strong> offices in
                downtown Milton, retail spaces along Main Street, and industrial
                properties in business parks, we provide after-hours scheduling,
                dust containment, and the professional finish quality Milton
                businesses expect.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Professional Finish Quality Standards
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Seamless drywall repair Milton</strong> means
                professional standards—Level 5 skim coating, HEPA sanding to
                control dust, and quality control under bright LED inspection
                lights. We guarantee{" "}
                <strong>paint-ready drywall repair Milton</strong> surfaces that
                painters love and homeowners appreciate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From everyday fixes like <strong>hole in drywall Milton</strong>{" "}
                repairs to complex <strong>drywall crack repair Milton</strong>{" "}
                projects, we bring the same attention to detail. Even small
                jobs—
                <strong>nail pop repair Milton</strong>,{" "}
                <strong>drywall dent repair Milton</strong>, or{" "}
                <strong>repair holes in drywall Milton</strong> after furniture
                moves—receive professional-grade finishes.
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
              Partner with a <strong>drywall contractor Milton</strong> that
              documents each phase, keeps your property tidy, and delivers{" "}
              <strong>professional drywall repair Milton</strong> results on
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
