import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Hamilton | Professional Ceiling Contractors",
  description:
    "Professional popcorn ceiling removal in Hamilton. Expert ceiling texture removal, Level 5 smooth finish, HEPA dust control. Serving Ancaster, Dundas, Westdale, Stoney Creek. Free quotes, 3-year warranty.",
  keywords: [
    "popcorn ceiling removal hamilton",
    "ceiling contractor hamilton",
    "remove popcorn ceiling hamilton",
    "ceiling texture removal hamilton",
    "smooth ceiling hamilton",
    "stipple ceiling removal hamilton",
  ],
  alternates: {
    canonical: "/popcorn-ceiling-removal/hamilton/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Hamilton | Professional Ceiling Contractors",
    description:
      "Professional popcorn ceiling removal in Hamilton. Level 5 smooth finish, HEPA dust control, 3-year warranty. Serving all Hamilton neighbourhoods.",
    url: "/popcorn-ceiling-removal/hamilton/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const neighborhoods = [
    ["ancaster", "Ancaster"],
    ["dundas", "Dundas"],
    ["westdale", "Westdale"],
    ["waterdown", "Waterdown"],
    ["stoney-creek", "Stoney Creek"],
    ["durand", "Durand"],
    ["ainslie-wood", "Ainslie Wood"],
    ["kirkendall", "Kirkendall"],
    ["strathcona", "Strathcona"],
    ["downtown-hamilton", "Downtown Hamilton"],
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal Hamilton",
        serviceType: [
          "Popcorn/Stipple/Stucco Ceiling Removal",
          "Ceiling Smoothing & Flattening",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Hamilton",
        url: "/popcorn-ceiling-removal/hamilton/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "ItemList",
        name: "Hamilton Neighbourhoods We Serve",
        itemListElement: neighborhoods.map(([slug, name], i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
          url: `/popcorn-ceiling-removal/hamilton/${slug}/`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Service Areas",
            item: { "@id": "https://epfproservices.com/service-areas" },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: {
              "@id": "https://epfproservices.com/services/popcorn-ceiling-removal/",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hamilton",
            item: { "@id": "https://epfproservices.com/popcorn-ceiling-removal/hamilton/" },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Hamilton?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on paint layers, repairs, and access. Most Hamilton homes fall within a predictable range after a quick photo estimate. We can price by square foot for larger areas or as a fixed scope for bedrooms, hallways, and open-plan spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer dustless or dust-controlled removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—rooms are contained, vents are masked, and sanding tools connect to HEPA vacuums to keep dust contained during Level 5 skimming.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot-light installation after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can sync timing with your electrician or refer one. We blend cutouts and patch rings so the final surface reads flat under light.",
            },
          },
          {
            "@type": "Question",
            name: "Do you test for asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the home is from an age where asbestos could be present, we can refer a local lab for a fast test. If needed, we follow the safe approach based on results.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We prime with a stain-blocking system and can finish with two coats of quality ceiling paint, or leave the surface paint-ready if you prefer to DIY.",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";

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
          <div className="relative h-full w-full">
            <Image
              src={images[0]}
              alt="Popcorn ceiling removal Hamilton background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              quality={70}
            />
          </div>
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
                Popcorn Ceiling Removal in Hamilton – Smooth, Modern Ceilings
                by Local Professionals
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Looking to remove popcorn ceilings in Hamilton? Whether your
                ceiling is painted, cracked, or original stipple from the 80s or
                90s, our team helps homeowners transform outdated textured
                ceilings into smooth, modern finishes.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                EPF Pro Services provides professional popcorn ceiling removal
                across Hamilton, including Stoney Creek, Ancaster, Dundas, and
                surrounding neighbourhoods. From careful preparation and dust
                control to full refinishing and painting, we handle the entire
                process so your ceilings are ready to enjoy — clean, smooth, and
                long-lasting.
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
                Professional Ceiling Removal Services in Hamilton
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete popcorn ceiling removal services for Hamilton homeowners
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
                  Expert popcorn ceiling removal service in Hamilton. From scraping to complete
                  texture removal, we handle it all with precision and care.
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
                  Specialized stipple and stucco ceiling removal in Hamilton with minimal
                  mess and professional results.
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
                  Complete ceiling resurfacing with Level 5 smooth finish. Professional
                  skim coating and refinishing for flawless results.
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
                  Specialized painted popcorn ceiling removal in Hamilton.
                  Safe methods for ceilings that have been painted multiple times.
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
                  Professional popcorn ceiling removal with complete containment.
                  We keep your home clean throughout the entire process.
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
                  Smooth Ceiling Finishing
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trusted smooth ceiling contractor delivering flawless Level 5 finishes. 
                  From removal to final paint, we perfect every detail.
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

      {/* WHY CHOOSE US - INTENT BLENDING */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Professional Popcorn Ceiling Removal for Hamilton Homes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Removing popcorn ceilings is more than just scraping texture. Done incorrectly, it can damage drywall, leave visible lines, or create unnecessary dust throughout your home. Our experienced team uses proven methods to safely remove popcorn ceilings while protecting your space and delivering a smooth, even finish.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Homeowners across Hamilton choose us because we focus on quality, safety, and results — whether it's a single room, an entire house, or a ceiling that has already been painted.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY WITH BEFORE/AFTER SLIDER */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Hamilton Popcorn Ceiling Removal Projects
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Recent Hamilton projects transforming homes from outdated texture to modern smooth
              ceilings
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="group relative h-72 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <Image
                    src={src}
                    alt={`Popcorn ceiling removal Hamilton project ${i + 1}`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={70}
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
              Our Popcorn Ceiling Removal Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Tailored workflows for Hamilton character homes and modern builds. From preparation to
              final finishing, we deliver Level 5 smooth ceilings every time.
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
                    desc: "Free consultation, texture testing, and complete home protection. Floors, furniture, and HVAC sealed for dust control.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    num: "02",
                    title: "Strategic Removal",
                    desc: "Expert popcorn ceiling removal using controlled scraping or safe encapsulation for painted surfaces. HEPA extraction throughout.",
                    color: "from-cyan-500 to-cyan-600",
                  },
                  {
                    num: "03",
                    title: "Surface Repair",
                    desc: "Fix all cracks, seams, water damage, and imperfections. Complete ceiling preparation for smooth finishing.",
                    color: "from-blue-600 to-cyan-600",
                  },
                  {
                    num: "04",
                    title: "Level 5 Skim Coating",
                    desc: "Full-field application by our expert team. Multiple passes for perfectly flat, paint-ready results.",
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
                Transparent pricing for your popcorn ceiling removal project.
                Get accurate estimates based on your specific needs.
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
              Serving Hamilton Neighbourhoods
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional popcorn ceiling removal throughout all Hamilton areas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/popcorn-ceiling-removal/hamilton/${n.slug}/`}
                  className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all text-center"
                >
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {n.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Popcorn ceiling removal in {n.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL RESOURCES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-green-600 font-bold mb-3">
                LOCAL RESOURCES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hamilton Homeowner Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted links for permits, paint supplies, and recycling programs in Hamilton
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎨</span> Quality Paint Stores
                </h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Hamilton Decorating Centre</h4>
                    <p className="text-sm text-gray-600 mb-1">Benjamin Moore Premium Dealer</p>
                    <p className="text-sm text-blue-600">256 Ottawa St N, Hamilton, ON L8H 3Z7</p>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Sherwin-Williams</h4>
                    <p className="text-sm text-gray-600 mb-1">Professional Paint Supplies</p>
                    <p className="text-sm text-blue-600">1575 Upper Ottawa St Unit 1, Hamilton, ON L8W 3E2</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-900 mb-1">The Home Depot Hamilton</h4>
                    <p className="text-sm text-gray-600 mb-1">Centennial Parkway Location</p>
                    <p className="text-sm text-blue-600">350 Centennial Pkwy N, Hamilton, ON L8E 2X4</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🏛️</span> City Permits & Inspections
                </h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">City of Hamilton Building Division</h4>
                    <p className="text-sm text-gray-600 mb-1">Permits & inspection services</p>
                    <p className="text-sm text-blue-600">Building permit applications online</p>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Hamilton Heritage Permits</h4>
                    <p className="text-sm text-gray-600 mb-1">Required for heritage district homes</p>
                    <p className="text-sm text-blue-600">Durand, Kirkendall & downtown areas</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-900 mb-1">ESA Electrical Inspection</h4>
                    <p className="text-sm text-gray-600 mb-1">For pot light installations</p>
                    <p className="text-sm text-blue-600">Coordinate with licensed electricians</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">♻️</span> Waste & Recycling
                </h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Hamilton Transfer Stations</h4>
                    <p className="text-sm text-gray-600 mb-1">Drywall & construction waste disposal</p>
                    <p className="text-sm text-blue-600">Glanbrook & Central locations</p>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Drywall Recycling Programs</h4>
                    <p className="text-sm text-gray-600 mb-1">Environmentally responsible disposal</p>
                    <p className="text-sm text-blue-600">We handle all waste removal</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-900 mb-1">Paint Disposal</h4>
                    <p className="text-sm text-gray-600 mb-1">Hamilton household hazardous waste depots</p>
                    <p className="text-sm text-blue-600">Proper disposal of old paint & primers</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔧</span> Local Contractors & Services
                </h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Licensed Electricians</h4>
                    <p className="text-sm text-gray-600 mb-1">ESA-certified for pot light installation</p>
                    <p className="text-sm text-blue-600">We can coordinate or refer trusted partners</p>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">Asbestos Testing Labs</h4>
                    <p className="text-sm text-gray-600 mb-1">Professional testing for pre-1990 homes</p>
                    <p className="text-sm text-blue-600">Fast turnaround & documentation</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-900 mb-1">Interior Painting Services</h4>
                    <p className="text-sm text-gray-600 mb-1">Complete ceiling & wall painting packages</p>
                    <p className="text-sm text-blue-600">Seamless project coordination</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                🏘️ Complete Local Support
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                From coordinating with Hamilton Building Department to arranging waste disposal and material delivery, we handle all the local logistics for your ceiling project. Our team knows Hamilton suppliers, regulations, and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
                >
                  📋 Get Local Quote
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all shadow-lg"
                >
                  📞 Ask About Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            FAQ — Hamilton
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How much does popcorn ceiling removal cost in Hamilton?",
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
                q: "Do you work in Hamilton condos near the waterfront?",
                a: "Yes, subject to building rules. We plan for common-area protection, elevator pads, quiet hours, and tidy daily cleanup to reduce disruption.",
              },
              {
                q: "Should I test for asbestos before removing popcorn ceiling texture?",
                a: "If your home is older, testing is a smart first step before disturbing texture. If testing is positive, the job needs the appropriate next steps and handling.",
              },
              {
                q: "Do you serve character homes in Durand and Kirkendall?",
                a: "Yes. We work throughout Hamilton's heritage neighborhoods with special care for period details, high ceilings, and delicate millwork.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white hover:border-blue-200 transition-colors"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
            >
              Get a Free Quote
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-blue-700 hover:underline"
                href={phoneHref}
              >
                Or call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO CONTENT - Hamilton Hub Oriented */}
      <section className="container-x px-4 py-20">
        <div className="rounded-3xl border bg-white p-8 shadow-xl ring-1 ring-black/5">
          <h2 className="text-3xl font-bold mb-6">
            Hamilton Popcorn Ceiling Removal Services
          </h2>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              As Southern Ontario's steel city evolving into a vibrant urban center, Hamilton presents unique challenges for <strong>popcorn ceiling removal</strong>. Our specialized teams understand the city's diverse architectural landscape—from historic Victorian homes in <Link href="/popcorn-ceiling-removal/hamilton/durand/" className="text-blue-600 font-semibold hover:underline">Durand</Link> and <Link href="/popcorn-ceiling-removal/hamilton/kirkendall/" className="text-blue-600 font-semibold hover:underline">Kirkendall</Link> to modern condos along the waterfront, mid-century bungalows across the Mountain, and heritage properties in <Link href="/popcorn-ceiling-removal/hamilton/dundas/" className="text-blue-600 font-semibold hover:underline">Dundas</Link> and <Link href="/popcorn-ceiling-removal/hamilton/ancaster/" className="text-blue-600 font-semibold hover:underline">Ancaster</Link>.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're searching for <strong>popcorn ceiling removal Hamilton</strong> solutions, need <strong>stipple ceiling removal Hamilton</strong> expertise, or require comprehensive <strong>ceiling resurfacing Hamilton</strong>, our <strong>popcorn ceiling removal contractor Hamilton</strong> team delivers professional results with dust-controlled workflows. From <strong>scraping popcorn ceiling Hamilton</strong> to achieving a Level 5 smooth finish, we're your trusted <strong>smooth ceiling contractor Hamilton</strong>.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Why Hamilton Homes Need Professional Ceiling Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hamilton's transformation from industrial hub to residential haven means housing stock spans over a century of construction styles. Lower City neighborhoods like Durand, Kirkendall, and Westdale feature character homes from the 1920s-1950s with original plaster and textured ceilings. The Mountain communities—from Lime Ridge to Upper Gage—predominantly showcase 1960s-1980s ranch-style homes with popcorn ceilings. Meanwhile, waterfront developments and Ancaster/Dundas areas mix heritage properties with modern builds requiring different ceiling treatment approaches.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Navigating Hamilton's Building Environment
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Working across Hamilton means understanding local requirements and logistics that affect every ceiling project:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>City of Hamilton building codes:</strong> Compliance with municipal standards for ceiling modifications, structural work, and renovation permits</li>
              <li><strong>Heritage district considerations:</strong> Special protocols for homes in Durand, Kirkendall, and Corktown heritage conservation areas</li>
              <li><strong>Escarpment access challenges:</strong> Navigating steep driveways and narrow streets throughout Mountain neighborhoods</li>
              <li><strong>Waterfront condo regulations:</strong> Coordinating with building managers at Pier 8, Bayfront condos, and Harbor West developments</li>
              <li><strong>Waste management protocols:</strong> Proper disposal through City of Hamilton facilities with environmental compliance documentation</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Hamilton's Diverse Housing Stock
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The city's century-spanning development creates complex residential needs. <strong>Popcorn ceiling removal in Hamilton</strong> requires specialized approaches:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Character homes:</strong> Durand, Kirkendall, and Strathcona properties demand careful work around period details, high ceilings, and potential asbestos concerns</li>
              <li><strong>Mid-century Mountain homes:</strong> Standard 1960s-80s construction throughout East Mountain, West Mountain, and Glanbrook with typical popcorn texture challenges</li>
              <li><strong>Ancaster estates:</strong> Larger properties with vaulted ceilings, multi-level layouts, and premium finish expectations</li>
              <li><strong>Dundas village homes:</strong> Mix of heritage and renovated properties requiring sensitive ceiling updates that respect historical character</li>
              <li><strong>Waterdown growth areas:</strong> New construction and recent developments where builders specify modern smooth ceilings from the start</li>
              <li><strong>Stoney Creek residential:</strong> Suburban communities with standard ceiling heights and straightforward removal projects</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Local Market Knowledge
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Hamilton expertise goes beyond technical execution. We understand how ceiling upgrades affect property values across different submarkets. Lower City character homes attract young professionals seeking walkable neighborhoods—smooth ceilings help modernize vintage interiors while preserving charm. Mountain properties prioritize practical updates for families—ceiling work often coincides with basement finishing or kitchen renovations. Ancaster and Waterdown focus on resale value—Level 5 finishes are standard for pre-listing preparations.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Coordinating with Hamilton Trades
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We partner with local Hamilton suppliers and contractors to ensure seamless project delivery:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Material suppliers:</strong> Direct relationships with Hamilton drywall and paint suppliers on Barton Street and Upper James ensure competitive pricing and same-day availability</li>
              <li><strong>Licensed electricians:</strong> Coordinated pot light installation with Hamilton-based electrical contractors familiar with ESA inspection requirements</li>
              <li><strong>Painting contractors:</strong> Partnership with Hamilton painting crews for turnkey ceiling and wall finishing packages</li>
              <li><strong>Waste management:</strong> Established protocols with City of Hamilton transfer stations and private haulers for environmentally responsible disposal</li>
              <li><strong>Equipment rental:</strong> Local access to scaffolding, lifts, and specialized tools from Hamilton industrial suppliers on Burlington Street</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Transit and Accessibility
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hamilton's transit network and geography affect project scheduling. HSR bus routes throughout the city mean crews can maintain consistent schedules even during peak traffic on the Linc, Red Hill Parkway, or QEW approaches. GO Transit stations at West Harbour, Hamilton Centre, and Aldershot provide regional crew access. The escarpment creates unique logistical challenges—Mountain-access timing differs from Lower City projects, especially during winter weather.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Cost Considerations for Hamilton Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Popcorn ceiling removal cost in Hamilton</strong> varies significantly by property type and location:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Character homes:</strong> High ceilings (10'-14'), plaster substrate, potential asbestos testing ($300-500), and delicate millwork protection add 25-40% to standard pricing</li>
              <li><strong>Mountain bungalows:</strong> Standard 8' ceilings with straightforward access represent baseline pricing for most Hamilton projects</li>
              <li><strong>Waterfront condos:</strong> Building access fees, elevator booking requirements, and parking permits add 15-25% to project costs</li>
              <li><strong>Vaulted ceilings:</strong> Common in Ancaster and Waterdown homes, requiring scaffolding and extended labor adds 30-50% to per-square-foot rates</li>
              <li><strong>Painted texture:</strong> Prevalent throughout Mountain communities built 1990s-2000s, requiring full skim coating increases material costs by approximately 40%</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Regional Context
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While Hamilton is our primary service hub, our teams regularly work throughout the Greater Golden Horseshoe. We're equally equipped to handle ceiling projects in{" "}
              <Link href="/popcorn-ceiling-removal/burlington/" className="text-blue-600 font-semibold hover:underline">
                Popcorn ceiling removal Burlington
              </Link>{" "}
              to the north,{" "}
              <Link href="/popcorn-ceiling-removal/grimsby/" className="text-blue-600 font-semibold hover:underline">
                Popcorn ceiling removal Grimsby
              </Link>{" "}
              and{" "}
              <Link href="/popcorn-ceiling-removal/st-catharines/" className="text-blue-600 font-semibold hover:underline">
                Popcorn ceiling removal St. Catharines
              </Link>{" "}
              along the QEW corridor, or{" "}
              <Link href="/popcorn-ceiling-removal/oakville/" className="text-blue-600 font-semibold hover:underline">
                Popcorn ceiling removal Oakville
              </Link>{" "}
              and{" "}
              <Link href="/popcorn-ceiling-removal/mississauga/" className="text-blue-600 font-semibold hover:underline">
                Popcorn ceiling removal Mississauga
              </Link>{" "}
              in the GTA. Property owners with multiple locations across Southern Ontario appreciate our regional consistency and centralized project management.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Complete Popcorn Ceiling Removal Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our <strong>professional popcorn ceiling removal Hamilton</strong> service encompasses everything from initial assessment to final finishing. We specialize in <strong>taking down popcorn ceiling</strong> textures safely and efficiently, whether you're dealing with unpainted surfaces or complex <strong>painted popcorn ceiling removal Hamilton</strong> scenarios. Our comprehensive approach includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Texture assessment & safe removal:</strong> Identifying whether your ceiling requires <strong>scraping popcorn ceiling Hamilton</strong>, encapsulation, or complete <strong>stucco ceiling removal Hamilton</strong></li>
              <li><strong>Dust containment systems:</strong> HEPA filtration and sealed work zones ensure minimal disruption when <strong>taking off popcorn ceiling</strong> or <strong>removing stucco ceiling Hamilton</strong></li>
              <li><strong>Level 5 finishing:</strong> Our <strong>smooth ceiling contractor Hamilton</strong> team delivers flawless surfaces that pass raking-light inspection</li>
              <li><strong>Comprehensive repair:</strong> Fixing cracks, water damage, and structural issues discovered during <strong>stripping popcorn ceiling</strong> work</li>
              <li><strong>Integrated services:</strong> Coordinating <Link href="/services/interior-painting/" className="text-blue-600 font-semibold hover:underline">interior painting</Link>, <Link href="/services/drywall-installation/" className="text-blue-600 font-semibold hover:underline">drywall installation</Link>, and pot light installation for complete ceiling transformations</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Understanding Popcorn Ceiling Removal Cost in Hamilton
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>popcorn ceiling removal cost Hamilton</strong> varies significantly based on several factors. When clients ask about <strong>cost to remove popcorn ceiling Hamilton</strong>, we explain that pricing depends on ceiling height, texture type, paint layers, and room accessibility. Our transparent <strong>popcorn removal cost Hamilton</strong> structure ensures you understand exactly what you're paying for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Baseline factors:</strong> The <strong>cost to scrape popcorn ceiling Hamilton</strong> starts with square footage and ceiling height—8-foot ceilings cost less than 10-foot or cathedral configurations</li>
              <li><strong>Texture complexity:</strong> Unpainted <strong>cottage cheese ceiling removal Hamilton</strong> is typically more affordable than heavily painted surfaces requiring encapsulation</li>
              <li><strong>Property type:</strong> Character homes in heritage districts may require special handling, affecting <strong>popcorn ceiling removal cost Hamilton</strong></li>
              <li><strong>Additional services:</strong> Repair work, primer, and paint can be bundled for better value when you <strong>get rid of popcorn ceiling</strong> throughout your home</li>
              <li><strong>Volume discounts:</strong> Bundling multiple rooms or coordinating with other <Link href="/services/" className="text-blue-600 font-semibold hover:underline">renovation services</Link> typically reduces per-square-foot pricing</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              For accurate <strong>popcorn removal cost Hamilton</strong> estimates, we provide detailed quotes after assessing your specific project. Most Hamilton homeowners find our <strong>cost to remove popcorn ceiling Hamilton</strong> competitive and transparent compared to general contractors who lack ceiling-specific expertise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Schedule Your Hamilton Ceiling Project
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're renovating a Durand Victorian for heritage appeal, updating a Mountain bungalow for modern living, or preparing an Ancaster estate for resale, professional <strong>popcorn ceiling removal</strong> transforms dated spaces into marketable, contemporary homes. Our Hamilton-based teams understand local building practices, municipal requirements, and real estate expectations that make ceiling projects succeed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <Link href="/quote/" className="text-blue-600 font-semibold hover:underline">Request a detailed quote</Link> with photos and measurements, or call <a href={phoneHref} className="text-blue-600 font-semibold hover:underline">{phoneDisplay}</a> to discuss your specific project requirements. Most Hamilton estimates are delivered within 4 hours with firm pricing, clear timelines, and detailed scope documentation.
            </p>
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
              We also serve these nearby cities with the same professional popcorn ceiling removal service:
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
                Oakville Stipple Removal
              </Link>
              <Link
                href="/popcorn-ceiling-removal/grimsby/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Grimsby Popcorn Removal
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
