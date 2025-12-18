import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Hamilton | Licensed Ceiling Contractor",
  description:
    "Professional popcorn ceiling removal contractor in Hamilton. Expert ceiling texture removal, stipple ceiling removal, and ceiling resurfacing with dust control & Level 5 smooth finish. Serving Ancaster, Dundas, Westdale.",
  keywords: [
    "popcorn ceiling removal hamilton",
    "popcorn ceiling contractor hamilton",
    "popcorn ceiling removal contractor hamilton",
    "professional popcorn ceiling removal hamilton",
    "smooth ceiling contractor hamilton",
    "ceiling texture removal hamilton",
    "stipple ceiling removal hamilton",
    "ceiling resurfacing hamilton",
    "painted popcorn ceiling removal hamilton",
    "stucco ceiling removal hamilton",
  ],
  alternates: {
    canonical: "/popcorn-ceiling-removal/hamilton/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Hamilton | Professional Ceiling Contractor",
    description:
      "Trusted popcorn ceiling removal service in Hamilton with dust-controlled workflow, Level 5 skim-coat, and paint-ready finish. Licensed contractors serving all Hamilton neighbourhoods.",
    url: "/popcorn-ceiling-removal/hamilton/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal Hamilton",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Texture Removal",
          "Stipple Ceiling Removal",
          "Ceiling Resurfacing",
          "Smooth Ceiling Contractor",
          "Painted Popcorn Ceiling Removal",
          "Stucco Ceiling Removal",
          "Level 5 Skim Coat",
        ],
        areaServed: {
          "@type": "City",
          name: "Hamilton",
          containsPlace: [
            { "@type": "Neighborhood", name: "Ancaster" },
            { "@type": "Neighborhood", name: "Dundas" },
            { "@type": "Neighborhood", name: "Westdale" },
            { "@type": "Neighborhood", name: "Waterdown" },
            { "@type": "Neighborhood", name: "Stoney Creek" },
          ],
        },
        url: "/popcorn-ceiling-removal/hamilton/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        description:
          "Professional popcorn ceiling removal contractor in Hamilton offering dust-controlled ceiling texture removal, stipple ceiling removal, and Level 5 smooth ceiling finishing.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Professional Popcorn Ceiling Removal Services Hamilton",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dust-controlled popcorn ceiling removal with HEPA filtration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Level 5 skim coat with raking-light inspection",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Painted popcorn ceiling removal and ceiling resurfacing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stain-block primer & turnkey paint-ready finish",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Hamilton?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Popcorn ceiling removal cost in Hamilton varies by ceiling height, texture type (painted vs unpainted), room size, and repairs needed. Our popcorn removal cost Hamilton quotes are transparent with no hidden fees. Contact us for accurate cost to scrape popcorn ceiling Hamilton pricing.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer professional popcorn ceiling removal in all Hamilton neighbourhoods?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our popcorn ceiling removal contractor Hamilton team serves all areas including Ancaster, Dundas, Westdale, Waterdown, Stoney Creek, and throughout Hamilton. We're your local smooth ceiling contractor Hamilton.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle painted popcorn ceiling removal Hamilton?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Our professional popcorn ceiling removal Hamilton service specializes in painted popcorn ceiling removal, stucco ceiling removal Hamilton, and all ceiling texture removal Hamilton projects. We safely encapsulate or scrape based on surface condition.",
            },
          },
        ],
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
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hamilton",
            item: "/popcorn-ceiling-removal/hamilton/",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
  // Load Hamilton city + neighborhoods
  let ham = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "hamilton") ham = cities[i];

  const signals = ham && ham.signals ? ham.signals : null;

  const hoods =
    ham && Array.isArray(ham.neighborhoods) && ham.neighborhoods.length
      ? ham.neighborhoods
      : [
          { slug: "ancaster", name: "Ancaster" },
          { slug: "dundas", name: "Dundas" },
          { slug: "westdale", name: "Westdale" },
          { slug: "ainslie-wood", name: "Ainslie Wood" },
          { slug: "waterdown", name: "Waterdown" },
          { slug: "stoney-creek", name: "Stoney Creek" },
          { slug: "durand", name: "Durand" },
          { slug: "kirkendall", name: "Kirkendall" },
        ];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* UNIQUE HERO - Split Layout with Form */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images[0]}
            alt="Popcorn ceiling removal Hamilton background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  🏆 Hamilton's #1 Ceiling Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Popcorn Ceiling Removal
                </span>
                <br />
                Hamilton
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Your trusted{" "}
                <strong>popcorn ceiling removal contractor Hamilton</strong>{" "}
                specializing in
                <strong> ceiling texture removal</strong>,{" "}
                <strong>stipple ceiling removal</strong>, and
                <strong> ceiling resurfacing Hamilton</strong> with
                industry-leading dust control.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>HEPA Dust Control</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>Level 5 Guarantee</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span className="mr-2">📞</span>(647) 923-6784
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:scale-105"
                >
                  Free Quote
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">500+</div>
                  <div className="text-sm text-gray-300">Hamilton Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">5.0★</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">
                Get Your Free Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Professional{" "}
                <strong>popcorn ceiling removal service Hamilton</strong> — Fast
                response, transparent pricing
              </p>

              <QuoteForm />

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Serving all Hamilton neighbourhoods:
                </p>
                <p className="text-xs text-gray-500">
                  Ancaster • Dundas • Westdale • Waterdown • Stoney Creek •
                  Durand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW - Card Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Popcorn Ceiling Removal Services in Hamilton
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As your local{" "}
                <strong>smooth ceiling contractor Hamilton</strong>, we provide
                complete
                <strong>
                  {" "}
                  professional popcorn ceiling removal Hamilton
                </strong>{" "}
                services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🏗️
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Popcorn Ceiling Removal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Expert{" "}
                  <strong>popcorn ceiling removal contractor Hamilton</strong>{" "}
                  service. From{" "}
                  <strong>scraping popcorn ceiling Hamilton</strong> to complete{" "}
                  <strong>ceiling texture removal Hamilton</strong>, we handle
                  it all with precision.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>Unpainted & painted textures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>Safe encapsulation method</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>HEPA dust extraction</span>
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-50 border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  ✨
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Stipple & Stucco Removal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specialized <strong>stipple ceiling removal Hamilton</strong>{" "}
                  and <strong>stucco ceiling removal Hamilton</strong>. Expert{" "}
                  <strong>removing stucco ceiling Hamilton</strong> with minimal
                  mess.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>All texture patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Cottage cheese ceiling removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Heavy texture scraping</span>
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Ceiling Resurfacing
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete <strong>ceiling resurfacing Hamilton</strong> with
                  Level 5 smooth finish. Whether{" "}
                  <strong>taking off popcorn ceiling</strong> or refinishing, we
                  deliver perfection.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Level 5 skim coating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Crack & joint repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Paint-ready finish</span>
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🔧
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Painted Popcorn Removal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specialized{" "}
                  <strong>painted popcorn ceiling removal Hamilton</strong>.
                  Safe methods for
                  <strong> stripping popcorn ceiling</strong> that's been
                  painted multiple times.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Multi-layer paint removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Encapsulation option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Surface preparation</span>
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-cyan-50 border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  💨
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Dust-Controlled Process
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our{" "}
                  <strong>professional popcorn ceiling removal Hamilton</strong>{" "}
                  includes complete containment. Whether{" "}
                  <strong>taking down popcorn ceiling</strong>, we keep your
                  home clean.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">✓</span>
                    <span>HEPA filtration systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">✓</span>
                    <span>Sealed work zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">✓</span>
                    <span>Daily cleanup</span>
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-amber-50 border-2 border-amber-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🏅
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Smooth Ceiling Contractor
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trusted <strong>smooth ceiling contractor Hamilton</strong>{" "}
                  delivering flawless Level 5 finishes. From{" "}
                  <strong>take out popcorn ceiling</strong> to final paint, we
                  perfect every detail.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span>
                    <span>Raking-light inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span>
                    <span>Multiple skim passes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span>
                    <span>Written warranty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY WITH BEFORE/AFTER SLIDER */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Ceiling Texture & Stipple Ceiling Removal in Hamilton
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Recent <strong>popcorn removal Hamilton</strong> projects
              transforming Hamilton homes from outdated texture to modern smooth
              ceilings
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <img
                    src={src}
                    alt={`Popcorn ceiling removal Hamilton project ${i + 1}`}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <p className="font-bold text-lg">
                        Hamilton Project {i + 1}
                      </p>
                      <p className="text-sm text-gray-200">
                        Professional ceiling transformation
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE PROCESS - UNIQUE VISUAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Hamilton Popcorn Ceiling Removal Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Tailored <strong>ceiling resurfacing Hamilton</strong> workflows
              for character homes and modern builds. From{" "}
              <strong>taking off popcorn ceiling</strong> to{" "}
              <strong>stripping popcorn ceiling</strong>, Level 5 perfection
              every time.
            </p>

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "Assessment & Protection",
                    desc: "Free consultation, texture testing, and complete home protection. Floors, furniture, HVAC sealed for dust control during popcorn ceiling Hamilton work.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    num: "02",
                    title: "Strategic Removal",
                    desc: "Expert taking down popcorn ceiling using controlled scraping or safe encapsulation for painted surfaces. HEPA extraction throughout.",
                    color: "from-cyan-500 to-cyan-600",
                  },
                  {
                    num: "03",
                    title: "Surface Repair",
                    desc: "Fix all cracks, seams, water damage. Removing stucco ceiling Hamilton and cottage cheese ceiling removal Hamilton with precision.",
                    color: "from-blue-600 to-cyan-600",
                  },
                  {
                    num: "04",
                    title: "Level 5 Skim Coating",
                    desc: "Full-field application by our smooth ceiling contractor Hamilton team. Multiple passes for perfectly flat results.",
                    color: "from-cyan-600 to-blue-700",
                  },
                  {
                    num: "05",
                    title: "HEPA Sanding & Inspection",
                    desc: "Vacuum-assisted sanding with raking-light quality checks. Re-skim any imperfections until flawless.",
                    color: "from-blue-700 to-cyan-700",
                  },
                  {
                    num: "06",
                    title: "Prime & Finish",
                    desc: "Stain-block primer application. Optional premium ceiling paint or leave paint-ready. Final walkthrough and warranty.",
                    color: "from-cyan-700 to-blue-800",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Number Circle */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {step.num}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-24 md:ml-0 ${
                        idx % 2 === 0
                          ? "md:mr-auto md:pr-16"
                          : "md:ml-auto md:pl-16"
                      } md:w-1/2`}
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Popcorn Ceiling Removal Cost in Hamilton
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent{" "}
                <strong>popcorn ceiling removal cost Hamilton</strong> and{" "}
                <strong>popcorn removal cost Hamilton</strong> estimates. Get
                accurate{" "}
                <strong>cost to scrape popcorn ceiling Hamilton</strong> pricing
                today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all">
                <div className="text-center mb-6">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Basic
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $$
                  </div>
                  <div className="text-sm text-gray-600">Per Room</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      Standard unpainted removal
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">Light skim coating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      Basic dust containment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">Primer coat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8 shadow-2xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="text-sm font-bold text-blue-100 uppercase tracking-wide mb-2">
                    Professional
                  </div>
                  <div className="text-4xl font-bold mb-2">$$$</div>
                  <div className="text-sm text-blue-100">Per Room</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1">✓</span>
                    <span>Full HEPA dust control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1">✓</span>
                    <span>Level 5 skim coat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1">✓</span>
                    <span>Raking-light inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1">✓</span>
                    <span>Stain-block primer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1">✓</span>
                    <span>Paint-ready finish</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all">
                <div className="text-center mb-6">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Premium
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $$$$
                  </div>
                  <div className="text-sm text-gray-600">Per Room</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      Everything in Professional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      Premium ceiling paint (2 coats)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      Pot light coordination
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">Extended warranty</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-100 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Cost Factors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">
                      Ceiling height (8', 10', vaulted)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">
                      Painted vs unpainted texture
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">
                      Room size & accessibility
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">Number of fixtures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">
                      Existing damage/repairs
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">
                      Asbestos testing (pre-1990)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href={phoneHref}
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                <span className="mr-2">📞</span>
                Get Your Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Recent Hamilton Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ancaster Two-Storey",
                  area: "Golf Links / Wilson",
                  scope:
                    "Painted popcorn ceiling removal Hamilton; safe encapsulation; Level 5 skim; stain-block primer.",
                  time: "3 days",
                  result:
                    "Flawless reflectance across open-concept living/dining.",
                },
                {
                  title: "Dundas Character Home",
                  area: "Governor's Road",
                  scope:
                    "Scraping popcorn ceiling Hamilton + repairs; pot-light integration; primer; paint-ready.",
                  time: "2.5 days",
                  result: "Bright, flat ceiling enhancing period details.",
                },
                {
                  title: "Westdale Bungalow",
                  area: "Near McMaster",
                  scope:
                    "Complete ceiling resurfacing Hamilton; raking-light inspection; optional spray finish.",
                  time: "3-4 days",
                  result: "Modern smooth ceiling throughout main floor.",
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-4">
                    {project.area}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">
                        Scope:
                      </span>
                      <p className="text-gray-600 mt-1">{project.scope}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Timeline:
                      </span>
                      <p className="text-gray-600 mt-1">{project.time}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Result:
                      </span>
                      <p className="text-gray-600 mt-1">{project.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LocalSignals */}
      {signals && <LocalSignals signals={signals} />}

      {/* NEIGHBOURHOODS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Hamilton Service Areas & Neighbourhoods
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional <strong>popcorn ceiling removal Hamilton</strong>{" "}
              throughout all neighbourhoods
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/popcorn-ceiling-removal/hamilton/${n.slug}/`}
                  className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all text-center"
                >
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">View Details →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY SERVICE AREAS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Nearby Service Areas
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Expert popcorn ceiling removal in surrounding areas:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/popcorn-ceiling-removal/burlington/"
                className="px-6 py-3 bg-white border-2 border-blue-200 rounded-full text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition"
              >
                Burlington Ceiling Contractor
              </Link>
              <Link
                href="/popcorn-ceiling-removal/oakville/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Oakville Popcorn Removal
              </Link>
              <Link
                href="/popcorn-ceiling-removal/stoney-creek/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Stoney Creek Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Professional Popcorn Ceiling Removal in Hamilton?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Your trusted{" "}
              <strong>popcorn ceiling removal contractor Hamilton</strong> —
              Fast quotes, clean work, guaranteed results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                <span className="mr-2">📞</span>(647) 923-6784
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Get Free Quote
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Written Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap gap-4 justify-center text-sm">
          <Link
            href="/popcorn-ceiling-removal/"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← All Service Areas
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/services/popcorn-ceiling-removal/"
            className="text-blue-600 hover:underline font-semibold"
          >
            Main Service Page →
          </Link>
        </nav>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-gray-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            📞 Call
          </a>
          <a
            href="/quote/"
            className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
