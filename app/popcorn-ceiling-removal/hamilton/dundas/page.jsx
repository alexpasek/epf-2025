import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Hamilton";
const NEIGHBOURHOOD = "Dundas";
const PAGE_PATH = "/popcorn-ceiling-removal/hamilton/dundas/";
const PAGE_URL = `${
  SITE_URL?.replace(/\/$/, "") || "https://epfproservices.com"
}${PAGE_PATH}`;
const PHONE_HREF = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const PHONE_TEXT = (CONTACT && CONTACT.phone) || "(647) 923-6784";

export const metadata = {
  title:
    "Popcorn Ceiling Removal Dundas Hamilton | Stipple & Stucco Ceiling Experts",
  description:
    "Dundas Hamilton popcorn ceiling removal specialists—dust-free scraping, Level 5 skim coat, 3-year warranty. Expert stipple & stucco ceiling removal for Governor's Road, King Street & all Dundas neighborhoods. HEPA-certified, insured contractors.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title:
      "Popcorn Ceiling Removal Dundas Hamilton | Local Ceiling Specialists",
    description:
      "Dundas Hamilton's trusted popcorn ceiling removal experts. Level 5 smooth finish, dust-free process, 3-year warranty. Serving Governor's Road, King Street & all Dundas homes.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${
          SITE_URL?.replace(/\/$/, "") || ""
        }/services/popcorn-ceiling-removal/1.webp`,
        width: 1200,
        height: 630,
        alt: "Popcorn ceiling removal Dundas Hamilton - Level 5 smooth finish",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Popcorn Ceiling Removal in ${NEIGHBOURHOOD}, ${CITY}`,
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Stucco Ceiling Removal",
          "Ceiling Skim Coat Level 5",
          "Textured Ceiling Removal",
        ],
        areaServed: {
          "@type": "City",
          name: NEIGHBOURHOOD,
          containedInPlace: {
            "@type": "City",
            name: CITY,
          },
        },
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          telephone: PHONE_TEXT,
          url: SITE_URL,
          image: `${SITE_URL}/logo.png`,
          priceRange: "$$",
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
        },
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "CAD",
          url: `${PAGE_URL}#quote`,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${PAGE_URL}#quote`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dundas Residential Popcorn Ceiling Removal",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HEPA dust-free scraping & containment",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Level 5 skim coat finish",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stain-block primer & paint-ready",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "3-year workmanship warranty",
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
            name: "Popcorn Ceiling Removal",
            item: { "@id": `${SITE_URL}/services/popcorn-ceiling-removal/` },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: CITY,
            item: { "@id": `${SITE_URL}/popcorn-ceiling-removal/hamilton/` },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: NEIGHBOURHOOD,
            item: { "@id": PAGE_URL },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Dundas Hamilton?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing varies based on ceiling height, texture type, paint layers, access, and whether testing is required. We provide a written, itemized quote because every project is individual.",
            },
          },
          {
            "@type": "Question",
            name: "Do you test for asbestos in Dundas heritage homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Many Dundas homes built before 1990 may contain asbestos. We arrange professional testing and certified removal if asbestos is present, ensuring safe compliance.",
            },
          },
          {
            "@type": "Question",
            name: "How long does popcorn ceiling removal take in a Dundas home?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most Dundas homes take 2-4 days: Day 1 protection & scraping, Day 2-3 skim coating & sanding, Day 4 primer & cleanup. We provide exact timelines in your quote.",
            },
          },
          {
            "@type": "Question",
            name: "Will you protect my Dundas heritage home floors and furniture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We protect hardwood floors, cover furniture, seal rooms with plastic barriers, and use HEPA vacuums. Your Dundas home stays clean throughout the process.",
            },
          },
          {
            "@type": "Question",
            name: "Can you match the ceiling texture in one room to another in my Dundas home?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can match knockdown, orange peel, or leave smooth Level 5 finish. Most Dundas homeowners choose smooth modern ceilings that maximize light.",
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

export default function Page() {
  // Get Dundas neighborhood data
  let ham = null,
    hood = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "hamilton") ham = cities[i];
  if (ham && ham.neighborhoods) {
    for (let j = 0; j < ham.neighborhoods.length; j++) {
      if (ham.neighborhoods[j].slug === "dundas") hood = ham.neighborhoods[j];
    }
  }
  const signals = (hood && hood.signals) || (ham && ham.signals) || null;

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`,
  );

  const nearby =
    ham && ham.neighborhoods
      ? ham.neighborhoods.filter((n) => n.slug !== "dundas").slice(0, 8)
      : [];

  const localLandmarks = [
    "Governor's Road",
    "King Street West",
    "University Plaza",
    "Dundas Town Centre",
    "Cootes Paradise",
    "Valley Town",
    "Dundas Peak",
    "Webster's Falls",
  ];

  const dunasFAQs = [
    {
      q: "How much does popcorn ceiling removal cost in Dundas Hamilton?",
      a: "Pricing is based on ceiling height, texture thickness, paint layers, access, and whether testing is required for heritage homes. We provide a written, itemized quote after reviewing your photos or a site visit because every project is individual.",
    },
    {
      q: "Do you test for asbestos in Dundas heritage homes?",
      a: "Yes, absolutely. Many Dundas heritage homes near King Street and downtown were built before 1990 and may contain asbestos in ceiling texture. We arrange professional lab testing (fees vary) and coordinate certified asbestos abatement if testing is positive. Dundas homeowners receive full documentation for insurance and resale disclosure. We never scrape textured ceilings in pre-1990 Dundas homes without testing first.",
    },
    {
      q: "How long does popcorn ceiling removal take in a Dundas home?",
      a: "Most Dundas homes take 2-4 days: Day 1 involves room protection and scraping/removal, Day 2-3 cover Level 5 skim coating and HEPA sanding, Day 4 includes stain-block primer and final cleanup. Larger Dundas homes near Governor's Road or multi-story properties may need 5-6 days. We provide exact timelines in your quote and respect quiet hours in established Dundas neighborhoods.",
    },
    {
      q: "Will you protect my Dundas heritage home's hardwood floors?",
      a: "Absolutely. Dundas heritage homes often feature original hardwood, tile, and historic trim that require careful protection. We use multi-layer floor protection (ram board + drop cloths), plastic barriers to seal rooms, furniture covers, and HEPA vacuums to capture 99.97% of dust. Your Dundas home stays clean, and we coordinate with any heritage preservation requirements.",
    },
    {
      q: "Can you remove popcorn from vaulted ceilings in Dundas homes?",
      a: "Yes. Many Dundas homes near Cootes Paradise and Valley Town have vaulted or cathedral ceilings. We bring scaffolding, safety equipment, and specialized long-reach tools for high ceiling access. Vaulted ceiling projects typically add 1-2 days and 20-30% to standard costs due to equipment and safety requirements.",
    },
  ];

  return (
    <>
      <JsonLd />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>

        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                  <span>📍</span> Serving {NEIGHBOURHOOD}, {CITY}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Popcorn Ceiling Removal{" "}
                  <span className="text-blue-600">{NEIGHBOURHOOD}</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Expert{" "}
                  <strong>popcorn ceiling removal Dundas Hamilton</strong>{" "}
                  —dust-free scraping, Level 5 smooth finish & 3-year warranty
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
                      Heritage Home Specialists
                    </h3>
                    <p className="text-sm text-gray-600">
                      Dundas heritage home expertise with asbestos testing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Dust-Free Process
                    </h3>
                    <p className="text-sm text-gray-600">
                      HEPA filtration & containment systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Level 5 Smooth
                    </h3>
                    <p className="text-sm text-gray-600">
                      Paint-ready finish with 3-year warranty
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Full Protection
                    </h3>
                    <p className="text-sm text-gray-600">
                      Floors, furniture & hardwood safeguarded
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    WSIB + Liability Coverage
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">
                    Asbestos Certified
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
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-all"
                >
                  <span className="text-xl">📞</span> {PHONE_TEXT}
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/services/popcorn-ceiling-removal/1.webp"
                  alt="Popcorn ceiling removal Dundas Hamilton - Level 5 smooth finish"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1 text-blue-300">
                      DUNDAS HAMILTON'S CEILING SPECIALISTS
                    </p>
                    <p className="text-2xl font-bold">
                      Popcorn Ceiling Removal Experts
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
                  <p className="text-3xl font-bold">3-Year</p>
                  <p className="text-sm font-semibold">
                    Warranty
                    <br />
                    Included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
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

      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              For larger homes or multi-room projects spanning more than Dundas,
              see our{" "}
              <Link
                href="/popcorn-ceiling-removal/hamilton/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Hamilton popcorn ceiling removal service
              </Link>{" "}
              page for broader neighbourhood coverage, logistics, and city-level
              pricing context.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section id="quote" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get Your Free Quote
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Fill out the form below, and our Dundas popcorn ceiling removal
              experts will get back to you shortly.
            </p>

            <QuoteForm />

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Or call us directly at{" "}
                <a
                  href={PHONE_HREF}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {PHONE_TEXT}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Ceiling Removal Process
            </h2>

            <ol className="space-y-6">
              {[
                "Initial Consultation: We discuss your needs, assess the ceiling, and provide a detailed quote.",
                "Asbestos Testing (if needed): For homes built before 1990, we conduct asbestos testing to ensure safety.",
                "Preparation: We protect floors, furniture, and other surfaces. Rooms are sealed, and vents are masked.",
                "Ceiling Removal: Using safe and effective methods, we remove the popcorn texture from the ceiling.",
                "Skim Coating: A Level 5 skim coat is applied for a smooth, paint-ready finish.",
                "Sanding & Priming: HEPA sanding is done to achieve a flawless surface, followed by stain-block primer application.",
                "Final Inspection: We conduct a thorough inspection to ensure every detail meets our high standards.",
                "Cleanup: The area is cleaned, and any debris is removed. We leave your home as clean as we found it.",
                "Painting (optional): We can also provide painting services for the newly skim-coated ceiling.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-semibold">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Work: Ceiling Removal Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Popcorn ceiling removal in a Dundas home — project ${
                    i + 1
                  }`}
                  className="w-full h-56 object-cover rounded-2xl border shadow"
                  data-lightbox="true"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section
        id="cases"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Case Studies: Dundas Ceiling Projects
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Governor’s Rd Two-Storey",
                  near: "west Dundas",
                  scope:
                    "Painted texture; safe encapsulation; Level 5 skim; stain-block primer.",
                  duration: "3 days",
                  outcome:
                    "Even reflectance through living/dining; joint telegraphing eliminated.",
                },
                {
                  title: "Downtown Dundas Detached",
                  near: "near King St W",
                  scope:
                    "Scrape + skim; pot-light rings blended; primer; paint-ready.",
                  duration: "2.5 days",
                  outcome:
                    "Flat, bright ceiling across hallway and family room.",
                },
                {
                  title: "Pleasant Valley Bungalow",
                  near: "south Dundas",
                  scope:
                    "Full skim; raking-light inspection; primer; optional sprayed finish.",
                  duration: "3–4 days",
                  outcome:
                    "Crisp returns and consistent read across transitions.",
                },
              ].map((cs, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow">
                  <div className="font-semibold text-lg">{cs.title}</div>
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
          </div>
        </div>
      </section>

      {/* LOCAL SEO CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Professional Popcorn Ceiling Removal Dundas Hamilton
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Our Popcorn Ceiling Removal Service Dundas?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As Dundas Hamilton's trusted{" "}
                  <strong>popcorn ceiling contractor</strong>, we specialize in
                  transforming dated textured ceilings into smooth, modern
                  surfaces. Our{" "}
                  <strong>professional popcorn ceiling removal Dundas</strong>{" "}
                  service combines heritage home expertise with cutting-edge
                  dust-control technology, making us the preferred{" "}
                  <strong>popcorn ceiling removal contractor Dundas</strong> for
                  homeowners along Governor's Road, King Street West, and
                  throughout the Dundas community.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you're dealing with{" "}
                  <strong>painted popcorn ceiling removal</strong> in a century
                  home or need <strong>stipple ceiling removal Dundas</strong>{" "}
                  in a modern property, our{" "}
                  <strong>smooth ceiling contractor</strong> team delivers Level
                  5 finishes that maximize natural light and increase home
                  value. We're not just another{" "}
                  <strong>ceiling texture removal</strong> company—we're Dundas
                  ceiling specialists who understand local architecture,
                  building codes, and heritage preservation requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Learn more about our comprehensive{" "}
                  <Link
                    href="/services/popcorn-ceiling-removal/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    popcorn ceiling removal services
                  </Link>{" "}
                  across the Greater Hamilton area.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Complete Ceiling Texture Removal Dundas Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our comprehensive{" "}
                <strong>popcorn ceiling removal service Dundas</strong>{" "}
                addresses every ceiling challenge in Dundas homes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    🏛️ Heritage Home Popcorn Removal
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Specialized <strong>popcorn ceiling removal Dundas</strong>{" "}
                    for Governor's Road and Old Dundas heritage properties. We
                    coordinate asbestos testing, preservation approvals, and
                    work with heritage committees to ensure compliant{" "}
                    <strong>ceiling resurfacing Dundas</strong> that respects
                    original architecture while delivering modern smooth
                    finishes.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    🎨 Painted Texture Ceiling Removal
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Expert{" "}
                    <strong>painted popcorn ceiling removal Dundas</strong>{" "}
                    using safe encapsulation methods when scraping isn't viable.
                    Our <strong>professional popcorn ceiling removal</strong>{" "}
                    process protects substrates while achieving perfectly
                    smooth, paint-ready surfaces throughout your Dundas home.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    ⚡ Stipple & Stucco Removal
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Complete <strong>stipple ceiling removal Dundas</strong> and{" "}
                    <strong>stucco ceiling removal Dundas</strong> services.
                    From light orange peel to heavy knockdown textures, our{" "}
                    <strong>smooth ceiling contractor Dundas</strong> team
                    removes all ceiling textures common in Dundas homes built
                    between 1970-2000.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    🏗️ Vaulted Ceiling Specialists
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Ceiling texture removal Dundas</strong> for
                    cathedral ceilings, great rooms, and two-story spaces common
                    in Valley Town and Cootes Paradise properties. Proper
                    scaffolding, safety equipment, and{" "}
                    <strong>ceiling resurfacing</strong> expertise for
                    high-access challenges.
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Our Popcorn Ceiling Removal Contractor Dundas Process
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                As your dedicated{" "}
                <strong>
                  popcorn ceiling removal contractor Dundas Hamilton
                </strong>
                , we follow a proven methodology that protects your home and
                delivers flawless results:
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-8">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Assessment & Testing:
                      </strong>{" "}
                      Professional site evaluation, asbestos testing for
                      pre-1990 Dundas homes, moisture readings, and structural
                      assessment. We identify the safest method for{" "}
                      <strong>removing stucco ceiling</strong> or popcorn
                      texture in your specific property.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Home Protection:
                      </strong>{" "}
                      Multi-layer floor protection (ram board + drop cloths),
                      furniture covering, room sealing with plastic barriers,
                      HVAC vent masking, and doorway containment. Your Dundas
                      hardwood floors and heritage trim stay pristine.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Safe Removal:</strong>{" "}
                      HEPA-filtered <strong>scraping popcorn ceiling</strong> or
                      safe encapsulation for painted surfaces. Negative air
                      machines capture 99.97% of dust particles during the{" "}
                      <strong>ceiling texture removal Dundas</strong> process.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Repairs & Patching:
                      </strong>{" "}
                      Fix cracks, water stains, pot-light rings, and drywall
                      imperfections before{" "}
                      <strong>ceiling resurfacing Dundas</strong>. Proper
                      substrate preparation ensures long-lasting smooth
                      finishes.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                      5
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Level 5 Skim Coating:
                      </strong>{" "}
                      Full-field skim coat applied with raking-light inspection.
                      Multiple thin coats achieve perfectly smooth surfaces that
                      our <strong>smooth ceiling contractor</strong> team
                      inspects under harsh side lighting.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                      6
                    </span>
                    <div>
                      <strong className="text-gray-900">Prime & Finish:</strong>{" "}
                      HEPA sanding, vacuum detail, stain-block primer
                      application. Surfaces are left paint-ready or we can
                      provide complete painting services as part of your{" "}
                      <strong>
                        professional popcorn ceiling removal Dundas
                      </strong>{" "}
                      project.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Dundas Homeowners Choose Our Popcorn Ceiling Removal Service
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✓</span> Local Dundas Expertise
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      As your neighborhood{" "}
                      <strong>popcorn ceiling contractor Dundas</strong>, we
                      understand Governor's Road heritage requirements, King
                      Street building codes, and Cootes Paradise area
                      architectural styles. We're not a generic contractor—we're
                      Dundas ceiling specialists.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✓</span> Asbestos Certified
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Professional asbestos testing coordination for pre-1990
                      Dundas homes. Our{" "}
                      <strong>popcorn ceiling removal contractor</strong> team
                      never starts <strong>stripping popcorn ceiling</strong>{" "}
                      without proper safety protocols and lab certifications.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✓</span> HEPA Dust Control
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Advanced containment systems protect your Dundas home
                      during <strong>ceiling texture removal</strong>. HEPA
                      vacuums, negative air machines, and sealed work zones keep
                      living spaces clean throughout the project.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✓</span> 3-Year Warranty
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Every{" "}
                      <strong>
                        professional popcorn ceiling removal Dundas
                      </strong>{" "}
                      project includes comprehensive workmanship warranty, photo
                      documentation, and quality assurance that exceeds industry
                      standards for <strong>smooth ceiling contractor</strong>{" "}
                      services.
                    </p>
                  </div>
                </div>
              </div>

              <h3
                className="text-3xl font-bold text-gray-900 mt-12 mb-6"
                id="pricing"
              >
                Popcorn Ceiling Removal Cost Dundas Hamilton
              </h3>
              <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Understanding{" "}
                  <strong>popcorn ceiling removal cost Dundas</strong> helps you
                  budget effectively for your ceiling transformation project.
                  Every project is unique based on specific conditions,
                  materials, and requirements.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white border-2 border-amber-300 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      💰 Standard Projects
                    </h4>
                    <p className="text-3xl font-bold text-amber-600 mb-2">$$</p>
                    <p className="text-sm text-gray-600 mb-4">
                      economical pricing
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Standard 8-9 ft ceilings</li>
                      <li>• Non-painted texture</li>
                      <li>• No asbestos present</li>
                      <li>• Level 5 skim coat included</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      🏛️ Heritage Homes
                    </h4>
                    <p className="text-3xl font-bold text-amber-600 mb-2">
                      $$$
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      moderate pricing
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Asbestos testing required</li>
                      <li>• Painted texture removal</li>
                      <li>• Heritage preservation</li>
                      <li>• Extra floor protection</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      ⚡ Complex Projects
                    </h4>
                    <p className="text-3xl font-bold text-amber-600 mb-2">
                      $$$$
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      premium pricing
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Vaulted/cathedral ceilings</li>
                      <li>• Multi-story great rooms</li>
                      <li>• Extensive water damage</li>
                      <li>• Scaffolding required</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    What Affects Popcorn Removal Cost Dundas?
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">
                        Increases Cost:
                      </p>
                      <ul className="space-y-1">
                        <li>• Asbestos testing & certified removal</li>
                        <li>• Painted popcorn ceiling (encapsulation)</li>
                        <li>• High ceilings (10-16 feet)</li>
                        <li>• Extensive repairs needed</li>
                        <li>• Heritage home requirements</li>
                        <li>• Vaulted/cathedral designs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">
                        Reduces Cost:
                      </p>
                      <ul className="space-y-1">
                        <li>• Larger square footage (economies of scale)</li>
                        <li>• Standard 8-9 ft ceiling heights</li>
                        <li>• Good substrate condition</li>
                        <li>• No asbestos present</li>
                        <li>• Easy furniture access</li>
                        <li>• Multiple rooms bundled</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The <strong>cost to scrape popcorn ceiling Dundas</strong>{" "}
                  varies based on your specific home conditions, ceiling height,
                  texture type, and access requirements. We provide transparent,
                  itemized quotes after reviewing photos or completing a site
                  visit because every project is individual—contact our{" "}
                  <strong>popcorn ceiling contractor Dundas</strong> team for
                  your free assessment.
                </p>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
                  >
                    📋 Get Accurate Quote
                  </a>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all shadow-lg border-2 border-blue-600"
                  >
                    📞 Call: {PHONE_TEXT}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local signals */}
      {signals ? <LocalSignals signals={signals} /> : null}

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                COMMON QUESTIONS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Dundas Popcorn Ceiling Removal FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know before booking
              </p>
            </div>

            <div className="space-y-4">
              {dunasFAQs.map((faq, i) => (
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
                More questions about Dundas popcorn ceiling removal?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
                >
                  📞 Call {PHONE_TEXT}
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

      {/* LOCAL RESOURCES */}
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-green-600 font-bold mb-3">
                LOCAL SUPPORT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Dundas Homeowner Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
                Everything you need to know for your Dundas ceiling removal
                project—from heritage preservation to local suppliers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏛️",
                  title: "Heritage Preservation",
                  desc: "Guidelines for heritage homes in Old Dundas and Governor's Road district. We coordinate with local heritage committees and follow preservation standards.",
                },
                {
                  icon: "🧪",
                  title: "Asbestos Testing",
                  desc: "Certified labs for pre-1990 Dundas homes. Professional testing coordination included. Full documentation for insurance and resale.",
                },
                {
                  icon: "🎨",
                  title: "Paint & Supplies",
                  desc: "Local retailers along Governor's Road and King Street for color matching. Benjamin Moore, Sherwin-Williams dealers nearby.",
                },
                {
                  icon: "♻️",
                  title: "Waste Disposal",
                  desc: "Drywall recycling programs, compound disposal, and Hamilton waste guidelines. We handle all waste removal and disposal permits.",
                },
                {
                  icon: "🚗",
                  title: "Parking & Access",
                  desc: "Driveway protection, street parking permits through City of Hamilton, and staging coordination for Dundas street parking.",
                },
                {
                  icon: "👥",
                  title: "Neighbor Courtesy",
                  desc: "Project notices for neighbors, noise schedules, and respectful work hours (8am-5pm weekdays). We maintain clean work sites daily.",
                },
              ].map((resource, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {resource.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border-2 border-green-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🏘️ Comprehensive Local Support
                </h3>
                <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
                  From coordinating with Hamilton Building Department to
                  arranging waste bins and parking permits, we handle all the
                  local logistics for your Dundas ceiling project. Our team
                  knows Dundas regulations, suppliers, and best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
                  >
                    📋 Get Local Quote
                  </a>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all shadow-lg border-2 border-green-600"
                  >
                    📞 Ask About Resources
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LANDMARKS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-purple-600 font-bold mb-3">
                LOCAL COVERAGE
              </p>
              <h2 className="text-4xl font-bold mb-4">
                Serving All Dundas Neighborhoods
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional popcorn ceiling removal throughout Dundas Hamilton
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {localLandmarks.map((landmark) => (
                <div
                  key={landmark}
                  className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <p className="font-semibold text-gray-900">{landmark}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Fast Response Across All Dundas Areas
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                From heritage homes on Governor's Road to modern developments in
                Valley Town, we bring the same professional service to every
                Dundas neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all shadow-xl"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for a Smooth, Modern Ceiling in Dundas?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Partner with{" "}
              <strong>
                Dundas Hamilton's trusted popcorn ceiling removal specialists
              </strong>
              . Heritage home expertise, dust-free process, Level 5 smooth
              finish, and 3-year warranty.
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-3xl mx-auto">
              Need the broader city view before you book? Compare this area with
              our{" "}
              <Link
                href="/popcorn-ceiling-removal/hamilton/"
                className="text-blue-300 font-semibold hover:underline"
              >
                full Hamilton popcorn ceiling removal
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                📞 {PHONE_TEXT}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Asbestos Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>HEPA Dust Control</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>4.9★ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearby.length ? (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Popcorn Ceiling Removal in Nearby Hamilton Areas
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/popcorn-ceiling-removal/hamilton/${n.slug}/`}
                    className="px-6 py-3 bg-blue-50 border-2 border-blue-200 rounded-full font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-400 transition-all"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Bottom Navigation Links */}
      <nav className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center flex flex-wrap justify-center gap-6">
            <Link
              href="/popcorn-ceiling-removal/hamilton/"
              className="text-blue-600 font-bold hover:text-blue-700 hover:underline text-base transition-colors"
            >
              Hamilton popcorn ceiling removal
            </Link>
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="text-blue-600 font-bold hover:text-blue-700 hover:underline text-base transition-colors"
            >
              Popcorn Ceiling Removal
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
