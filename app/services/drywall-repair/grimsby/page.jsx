import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Grimsby";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/grimsby/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  [
    "grimsby-beach",
    "Grimsby Beach",
    "Lakefront community with seasonal homes",
    "Lake Ontario water damage, cottage repairs, humidity control",
  ],
  [
    "casablanca",
    "Casablanca",
    "Family subdivision with modern homes",
    "New home repairs, settlement cracks, family-friendly service",
  ],
  [
    "main-street-grimsby",
    "Main Street Area",
    "Historic downtown with heritage buildings",
    "Heritage repairs, commercial work, downtown patching",
  ],
  [
    "mountain-brow",
    "Mountain Brow",
    "Escarpment area with stunning views",
    "Crack repair from settlement, water drainage issues, view property work",
  ],
  [
    "grimsby-west",
    "West Grimsby",
    "Established residential area",
    "Residential repairs, basement work, renovation coordination",
  ],
  [
    "grimsby-east",
    "East Grimsby",
    "Mixed residential and rural properties",
    "Home repairs, barn conversions, rural property work",
  ],
  [
    "livingston",
    "Livingston",
    "Newer development area",
    "New construction repairs, builder warranty, modern finishing",
  ],
  [
    "nelles-corners",
    "Nelles Corners",
    "Growing community near QEW",
    "Residential repairs, expansion work, paint-ready finishing",
  ],
];

const FAQS = [
  {
    q: `How much does drywall repair cost in ${CITY}?`,
    a: "Most Grimsby homeowners pay between $200-$800 depending on the number of holes, ceiling height, and finish requirements. Small repairs like nail pops or doorknob holes typically cost $150-$300. Send us photos with a tape measure in the shot, and we'll give you an exact quote within 24 hours.",
  },
  {
    q: "Can you fix water damage from our leaking roof?",
    a: "Yes. We handle ceiling water damage repair Grimsby homes experience after roof leaks, ice dams, and plumbing issues. We'll test the moisture levels, remove any damaged drywall, dry everything properly, then patch and finish so it looks like new. We also coordinate with your insurance if needed.",
  },
  {
    q: "Do you work around other contractors we've hired?",
    a: "Absolutely. Many Grimsby homeowners call us after their plumber, electrician, or HVAC tech has finished their work. We coordinate timing so you don't have to manage multiple contractors. We'll patch, sand, prime, and leave everything ready for your painter.",
  },
  {
    q: "Will the repair be noticeable after you're done?",
    a: "No visible patch lines—that's our guarantee. We feather the joint compound wide, sand smooth with HEPA equipment (minimal dust!), and use the same finish level as your existing walls. Most Grimsby homeowners can't tell where the repair was after painting.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Small repairs (1-3 holes) usually take 1 day plus drying time. Larger projects like full room repairs or water damage restoration take 2-3 days. We'll give you a clear timeline upfront and keep you updated throughout the process.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes—3-year workmanship warranty on all drywall repair Grimsby projects. If any cracking, peeling, or finish issues occur due to our work, we'll fix it at no charge. Our warranty is in writing and transferable if you sell your home.",
  },
  {
    q: "What if I need painting too?",
    a: "We can either leave it paint-ready for your own painter, or we can handle the painting for you. Many Grimsby homeowners prefer our turnkey service—one crew handles everything from repair to final paint coat.",
  },
];

export const metadata = {
  title: `Drywall Repair Grimsby Ontario | Homeowner-Friendly Service | EPF Pro Services`,
  description:
    "Drywall repair Grimsby Ontario homeowners trust. Water damage, holes, cracks, and seamless finishing. Clear pricing, minimal mess, 3-year warranty. Serving Grimsby Beach, Casablanca & Mountain areas.",
  keywords: [
    "drywall repair Grimsby",
    "drywall repair Grimsby Ontario",
    "drywall repair services Grimsby",
    "drywall repair company Grimsby",
    "drywall contractor Grimsby",
    "drywall contractors Grimsby",
    "professional drywall repair Grimsby",
    "drywall patch repair Grimsby",
    "drywall patching Grimsby",
    "hole in drywall Grimsby",
    "hole in drywall repair Grimsby",
    "repair holes in drywall Grimsby",
    "drywall dent repair Grimsby",
    "nail pop repair Grimsby",
    "small drywall repair Grimsby",
    "minor drywall repair Grimsby",
    "drywall crack repair Grimsby",
    "wall crack repair Grimsby",
    "drywall seam repair Grimsby",
    "drywall tape repair Grimsby",
    "water damaged drywall repair Grimsby",
    "drywall water damage repair Grimsby",
    "drywall repair after leak Grimsby",
    "ceiling water damage repair Grimsby",
    "seamless drywall repair Grimsby",
    "smooth wall repair Grimsby",
    "paint-ready drywall repair Grimsby",
    "ready for painting Grimsby",
    "no visible patch lines Grimsby",
    "drywall repair after plumbing Grimsby",
    "residential drywall repair Grimsby",
    "home drywall repair Grimsby",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: `${SERVICE} in ${CITY}, Ontario | Homeowner-Friendly Service`,
    description:
      "Grimsby Ontario drywall repair specialists for homeowners. Water damage, holes, cracks. Clear pricing, minimal mess, same-day quotes. Serving Grimsby Beach, Casablanca & all Grimsby neighbourhoods.",
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
      icon: "🏠",
      title: "Common Home Repairs",
      description:
        "The everyday fixes Grimsby homeowners need—doorknob holes, nail pops, picture hook damage, moving day accidents, and those mysterious cracks that appeared over winter.",
      keywords: [
        "hole in drywall Grimsby",
        "nail pop repair Grimsby",
        "small drywall repair Grimsby",
        "drywall dent repair Grimsby",
        "repair holes in drywall Grimsby",
        "drywall patch repair Grimsby",
        "minor drywall repair Grimsby",
      ],
    },
    {
      icon: "💧",
      title: "Water Damage & Leaks",
      description:
        "Roof leaks, ice dam backup, burst pipes, leaking windows—we've seen it all in Grimsby homes. We fix the drywall damage so you can't tell there was ever a problem.",
      keywords: [
        "water damaged drywall repair Grimsby",
        "ceiling water damage repair Grimsby",
        "drywall repair after leak Grimsby",
        "drywall water damage repair Grimsby",
      ],
    },
    {
      icon: "�",
      title: "Renovation Clean-Up",
      description:
        "Had work done on your Grimsby home? We patch everything after your plumber, electrician, or HVAC tech finishes. One call handles all the wall and ceiling repairs.",
      keywords: [
        "drywall repair after plumbing Grimsby",
        "seamless drywall repair Grimsby",
        "paint-ready drywall repair Grimsby",
        "residential drywall repair Grimsby",
      ],
    },
  ];

  const finishPromises = [
    "seamless drywall repair Grimsby",
    "smooth wall repair Grimsby",
    "paint-ready drywall repair Grimsby",
    "smooth, flawless finish Grimsby",
    "ready for painting Grimsby",
    "ready for wallpaper Grimsby",
    "no visible patch lines Grimsby",
  ];

  const tradeItems = [
    "drywall repair after plumbing Grimsby",
    "seamless drywall repair Grimsby",
    "paint-ready drywall repair Grimsby",
    "residential drywall repair Grimsby",
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
                  <span>📍</span> Proudly Serving {CITY}, Ontario Homeowners
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Drywall Repair{" "}
                  <span className="text-blue-600">{CITY}, ON</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Homeowner-friendly{" "}
                  <strong>drywall repair Grimsby Ontario</strong> for water
                  damage, holes, cracks & seamless finishing
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
                      Water Damage Repairs
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ceiling water damage repair Grimsby trusts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Everyday Fixes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hole in drywall Grimsby homeowners need fixed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Cracks & Settling
                    </h3>
                    <p className="text-sm text-gray-600">
                      Drywall crack repair Grimsby homes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      After Renovations
                    </h3>
                    <p className="text-sm text-gray-600">
                      Drywall repair after plumbing Grimsby
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    Clear Pricing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    Minimal Mess
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
                  alt="Professional drywall repair Grimsby - expert contractors finishing seamless home repairs"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1 text-blue-300">
                      TRUSTED BY GRIMSBY HOMEOWNERS
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
                  Get Your Free {CITY} Drywall Quote
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Take a few photos with your phone, tell us what happened, and
                  we'll email you a detailed quote—usually within a few hours.
                  No pressure, no salespeople showing up unannounced.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Water damage from leaks",
                      desc: "Roof leaks, burst pipes, ice dams—we handle ceiling water damage repair Grimsby homes experience.",
                    },
                    {
                      icon: "🏠",
                      title: "Everyday wall repairs",
                      desc: "Doorknob holes, nail pops, moving damage—common hole in drywall Grimsby fixes we do daily.",
                    },
                    {
                      icon: "🔧",
                      title: "After contractor work",
                      desc: "Drywall repair after plumbing Grimsby or electrical work—we patch what they opened.",
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
              Whether you're fixing one <strong>hole in drywall Grimsby</strong>{" "}
              or dealing with water damage throughout your home, we treat every
              repair with the same care and attention to detail.
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
                  GRIMSBY HOMEOWNER FOCUSED
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Grimsby Homeowners Choose Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We're not a big commercial operation—we're{" "}
                  <strong>drywall contractors Grimsby</strong> homeowners call
                  when they need honest advice, fair pricing, and quality work.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Clear, upfront pricing",
                      desc: "No surprise charges. We quote the full job price before we start, including materials, labor, and cleanup.",
                    },
                    {
                      title: "Minimal mess & disruption",
                      desc: "HEPA dust extraction, plastic containment barriers, and daily cleanup. We protect your floors and furniture.",
                    },
                    {
                      title: "Seamless finish guarantee",
                      desc: "No visible patch lines Grimsby standard—we sand smooth and prime so you can't tell where the repair was after painting.",
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
                    alt="Drywall repair Grimsby seamless finish"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <p className="text-3xl font-bold mb-1">100+</p>
                  <p className="text-sm opacity-90">Happy Grimsby Homeowners</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "�", text: "Clear Pricing" },
                { icon: "🧹", text: "Minimal Mess" },
                { icon: "⏱️", text: "On-Time Service" },
                { icon: "✨", text: "Seamless Finish" },
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
                SEAMLESS FINISH
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Finish Quality Grimsby Homeowners Expect
              </h3>
              <p className="text-gray-600 mb-6">
                Every surface is inspected so it's{" "}
                <strong>ready for painting Grimsby</strong> crews or{" "}
                <strong>ready for wallpaper Grimsby</strong> installers. We sand
                smooth, prime properly, and guarantee you won't see where the
                repair was after painting.
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
                HOMEOWNER CONVENIENCE
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Working Around Your Schedule
              </h3>
              <p className="text-gray-600 mb-6">
                We coordinate with your other contractors and work around your
                family's schedule. Whether it's{" "}
                <strong>drywall repair after plumbing Grimsby</strong> work or a
                simple patch job, we make it easy.
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
              Trusted by Grimsby homeowners for clear communication, fair
              pricing, and quality work that lasts.
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
              Photos from <strong>residential drywall repair Grimsby</strong>{" "}
              homes throughout the lakefront, mountain, and downtown areas.
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
                From Grimsby Beach waterfront homes to Mountain Brow properties,
                Main Street heritage homes to Casablanca subdivisions—we serve
                every neighbourhood in Grimsby, Ontario.
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
                Fast Response Across {CITY}, Ontario
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Our crews know Grimsby, Ontario well—from lakefront cottages to
                mountain escarpment homes. We typically respond to quotes within
                a few hours and can often schedule small repairs within a few
                days.
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
                Local Expertise for Grimsby, Ontario Homes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Grimsby, Ontario homes have unique challenges—older heritage
                properties with plaster walls, lakefront homes dealing with
                humidity from Lake Ontario, and newer subdivisions with settling
                issues. We've worked on homes throughout{" "}
                <strong>Grimsby Beach</strong>, <strong>Casablanca</strong>,{" "}
                <strong>Mountain Brow</strong>, and every neighbourhood in
                between, so we understand what Grimsby homeowners face.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you need a simple{" "}
                <strong>hole in drywall Grimsby</strong> repair after hanging a
                TV, or more complex{" "}
                <strong>ceiling water damage repair Grimsby</strong> work after
                ice dam issues, we explain everything in plain language. No
                jargon, no upselling—just honest advice about what needs to be
                fixed. Our comprehensive{" "}
                <Link
                  href="/services/drywall-repair/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repair services
                </Link>{" "}
                extend throughout the entire Niagara region, Ontario and Greater
                Toronto Area.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Common Grimsby Home Repairs We Handle
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most calls we get are for everyday fixes:{" "}
                <strong>nail pop repair Grimsby</strong> from seasonal
                temperature changes,{" "}
                <strong>drywall dent repair Grimsby</strong> from doorknobs or
                furniture, <strong>small drywall repair Grimsby</strong> after
                removing old fixtures, and{" "}
                <strong>drywall crack repair Grimsby</strong> from normal house
                settling.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Moving day damage? We patch{" "}
                <strong>repair holes in drywall Grimsby</strong> homes all the
                time—accidental bumps, furniture scratches, picture hooks that
                pulled out too much drywall. These are quick fixes, usually done
                in a day, with pricing that won't surprise you.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Water Damage from Grimsby's Lakefront Weather
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Living near Lake Ontario in Grimsby, Ontario means ice dams in
                winter and humidity issues year-round. We handle{" "}
                <strong>water damaged drywall repair Grimsby</strong> homeowners
                need after roof leaks,{" "}
                <strong>drywall repair after leak Grimsby</strong> from plumbing
                problems, and{" "}
                <strong>drywall water damage repair Grimsby</strong> from any
                source.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our process: test for moisture, dry everything properly, remove
                only what's damaged, patch with mold-resistant materials if
                needed, and finish smooth. We also take photos for your
                insurance claim if you need them.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Working With Your Other Contractors
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Had a plumber open your wall to fix a leak? Electrician install
                new outlets? We specialize in{" "}
                <strong>drywall repair after plumbing Grimsby</strong> work and
                cleaning up after any contractor. We coordinate timing with your
                other trades so you're not managing multiple people.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For <strong>residential drywall repair Grimsby</strong>{" "}
                projects, we know homeowners want clear communication and
                minimal disruption. We show up when we say we will, keep the
                mess contained, and clean up thoroughly every day.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Our Finish Quality Promise
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Seamless drywall repair Grimsby</strong> means you
                shouldn't be able to tell where the patch is after painting. We
                feather the edges wide, sand smooth (with dust extraction so
                your house stays clean), prime the repair, and guarantee{" "}
                <strong>no visible patch lines Grimsby</strong> homeowners would
                notice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every repair is{" "}
                <strong>paint-ready drywall repair Grimsby</strong>{" "}
                standard—either your painter or ours can work with the surface
                immediately. We also offer turnkey service if you want us to
                handle the painting too, so it's one call, one crew, one
                completion date.
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
              Ready for Expert Drywall Repair in {CITY}, Ontario?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Get clear pricing, quality work, and a 3-year warranty from a{" "}
              <strong>drywall repair company Grimsby Ontario</strong> homeowners
              recommend to their neighbors.
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
                <span>Clear Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Minimal Mess</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Seamless Finish</span>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-700">
              <p className="text-gray-400 mb-4">
                Learn more about our comprehensive GTA-wide drywall services
              </p>
              <Link
                href="/services/drywall-repair/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg"
              >
                Drywall Repair
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
