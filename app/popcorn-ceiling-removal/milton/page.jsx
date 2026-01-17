import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_NAME, CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Milton";
const SLUG = "/popcorn-ceiling-removal/milton/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const FALLBACK_NEIGHBOURHOODS = [
  { slug: "old-milton", name: "Old Milton" },
  { slug: "bronte-meadows", name: "Bronte Meadows" },
  { slug: "dorset-park", name: "Dorset Park" },
  { slug: "dempsey", name: "Dempsey" },
  { slug: "clarke", name: "Clarke" },
  { slug: "beaty", name: "Beaty" },
  { slug: "coates", name: "Coates" },
  { slug: "willmott", name: "Willmott" },
  { slug: "scott", name: "Scott" },
  { slug: "harrison", name: "Harrison" },
  { slug: "timberlea", name: "Timberlea" },
  { slug: "ford", name: "Ford" },
  { slug: "cobban", name: "Cobban" },
  { slug: "walker", name: "Walker" },
  { slug: "bowes", name: "Bowes" },
];

const milton = cities.find((city) => city.slug === "milton");
const NEIGHBOURHOODS = (
  milton && Array.isArray(milton.neighborhoods) && milton.neighborhoods.length
    ? milton.neighborhoods
    : FALLBACK_NEIGHBOURHOODS
).map((n) => [n.slug, n.name]);

const SIGNALS = milton && milton.signals ? milton.signals : {};
const PAINT_STORES = SIGNALS.paintStores || [];
const AUTHORITIES = SIGNALS.authorities || {};

const FAQS = [
  {
    q: `How much does popcorn ceiling removal cost in ${CITY}?`,
    a: "Pricing depends on ceiling height, paint layers, repairs, and access. Most Milton rooms fall into a predictable range after a quick photo review. We provide a written, itemized quote once we see the texture and fixtures.",
  },
  {
    q: "Is popcorn ceiling removal messy?",
    a: "We seal rooms, protect floors and staircases, mask vents, and connect sanding tools to HEPA vacuums to keep dust controlled. Daily tidy wrap-ups keep the home usable.",
  },
  {
    q: "Do you remove painted popcorn ceilings?",
    a: "Yes. Painted texture often needs a skim-based approach rather than full scraping. We choose the safest method and finish with a full Level 5 skim coat for a clean, modern look.",
  },
  {
    q: "How long does a typical room take?",
    a: "Many rooms take 1-2 days depending on drying time, repairs, and whether painting is included. Larger or heavily painted ceilings can take longer.",
  },
  {
    q: "Do you provide a Level 5 finish?",
    a: "Yes. A Level 5 skim coat creates a uniform, smooth ceiling that reads clean under pot lights and bright windows.",
  },
  {
    q: "Can you repair cracks, tape seams, and old patches?",
    a: "Absolutely. We fix nail pops, seam splits, and patchy areas as part of the ceiling prep so the final surface stays consistent.",
  },
  {
    q: "Do you coordinate pot lights with the ceiling work?",
    a: "Yes. We can coordinate timing with your electrician and blend cutouts so the finished ceiling stays flat and seamless.",
  },
  {
    q: "Do you paint after removal?",
    a: "We prime with stain-block when needed and can apply finish coats, or leave the ceiling paint-ready if you prefer to paint later.",
  },
  {
    q: "Should we test for asbestos before removal?",
    a: "If the home is older, testing is the smart first step before disturbing texture. If results are positive, we follow the correct handling procedures.",
  },
  {
    q: "Do you handle townhomes and condos in Milton?",
    a: "Yes. We manage access logistics, hallway protection, and quiet hours so the project stays compliant and tidy.",
  },
];

export const metadata = {
  title: `Popcorn Ceiling Removal Milton | Professional Ceiling Contractors`,
  description:
    "Professional popcorn ceiling removal in Milton. Expert ceiling texture removal, Level 5 smooth finish, HEPA dust control. Serving Old Milton, Beaty, Dempsey. Free quotes, 3-year warranty.",
  keywords: [
    "popcorn ceiling removal milton",
    "ceiling contractor milton",
    "remove popcorn ceiling milton",
    "stipple ceiling removal milton",
    "ceiling texture removal milton",
    "smooth ceiling milton",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    title: `Popcorn Ceiling Removal Milton | Professional Ceiling Contractors`,
    description:
      "Professional popcorn ceiling removal in Milton. Level 5 smooth finish, HEPA dust control, 3-year warranty. Serving all Milton neighbourhoods.",
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
      d: "Rooms sealed, floors and traffic paths protected, HVAC masked where needed.",
    },
    {
      n: "02",
      t: "Texture Strategy",
      d: "We assess painted vs unpainted texture and choose scrape vs skim for the best finish.",
    },
    {
      n: "03",
      t: "Level 5 Skim Coat",
      d: "Full-field skim coat for a flat, modern ceiling that reads clean in strong light.",
    },
    {
      n: "04",
      t: "HEPA Sanding + Light Checks",
      d: "HEPA-connected sanding and strong-light inspection so flaws do not show after paint.",
    },
    {
      n: "05",
      t: "Prime (Stain-Block When Needed)",
      d: "Primer unifies the surface and helps lock down old stains before paint.",
    },
    {
      n: "06",
      t: "Optional Ceiling Painting",
      d: "Finish coats available, or we leave the ceiling paint-ready.",
    },
  ];

  const permitUrl =
    AUTHORITIES.permitsURL ||
    "https://www.milton.ca/en/business-and-development/building-permits.aspx";
  const wasteUrl =
    AUTHORITIES.hazardousWasteURL ||
    "https://www.halton.ca/for-residents/recycling-waste/halton-waste-management-site";

  return (
    <>
      <SeoJsonLd />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images[0]}
            alt={`${CITY} popcorn ceiling removal`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Popcorn Ceiling Removal in Milton – Smooth, Modern Ceilings by
              Local Professionals
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Looking to remove popcorn ceilings in Milton? Our professional
              team delivers smooth Level 5 finishes with HEPA dust control for
              homes throughout Old Milton, Beaty, Dempsey, and surrounding
              neighbourhoods.
            </p>

            <ul className="flex flex-wrap justify-center gap-3 mb-10 text-base md:text-lg">
              {[
                "Sealed rooms + protection",
                "HEPA sanding",
                "Level 5 finish",
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
                📞 {phoneText}
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
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600">
                Photos + room sizes = faster, more accurate pricing.
              </p>
            </div>

            <QuoteForm />

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3">Prefer to talk?</p>
              <a
                href={phoneHref}
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                📞 {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Us in {CITY}?
          </h2>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-sm font-semibold text-gray-700">
                WSIB Insured
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-sm font-semibold text-gray-700">
                Liability Coverage
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-sm font-semibold text-gray-700">
                3-Year Warranty
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-sm font-semibold text-gray-700">
                Local Milton Team
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">House-Friendly Setup</h3>
              <p className="text-gray-700">
                Sealed rooms, protected floors, HVAC masking where needed, and
                daily tidy.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Finish</h3>
              <p className="text-gray-700">
                Full-field skim coat for a ceiling that reads clean under pot
                lights.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Turnkey Option</h3>
              <p className="text-gray-700">
                Prime + optional paint, plus repair work to keep everything
                uniform.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              className="font-semibold text-blue-600 hover:underline"
              href="/blog/popcorn-ceiling-removal-cost-timeline/"
            >
              Read: Cost & Timeline Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Milton Projects & Results
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Real Milton homes from Old Milton to new-build communities. Smooth
            Level 5 ceilings that photograph beautifully.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={src}
                  alt={`Milton popcorn ceiling removal project ${i + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-lightbox="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold">
                      Milton Project {i + 1}
                    </p>
                    <p className="text-sm text-gray-200">
                      Level 5 smooth finish
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Milton Social Proof */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic mb-3">
                "Our Dempsey townhome had painted popcorn. The team contained
                dust, worked around our schedule, and the Level 5 skim looks
                flawless."
              </p>
              <p className="text-sm font-semibold text-gray-900">
                — Priya S., Dempsey
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic mb-3">
                "Main floor and stairwell in Beaty. Great protection, clear
                communication, and the ceiling reads perfectly under pot
                lights."
              </p>
              <p className="text-sm font-semibold text-gray-900">
                — Ahmed R., Beaty
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic mb-3">
                "Old Milton bungalow ceilings were rough. They blended old
                patches, primed, and left everything paint-ready. Highly
                recommend."
              </p>
              <p className="text-sm font-semibold text-gray-900">
                — Lisa G., Old Milton
              </p>
            </div>
          </div>

          {/* Review Link */}
          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition"
            >
              <span>⭐</span>
              Read More Milton Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* MAIN PROCESS SECTION */}
      <section className="py-20 bg-white" id="process">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Milton Popcorn Ceiling Removal Process
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Serving Milton homes and townhomes with practical logistics
            (protection, access, tidy daily cleanup).
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((s) => (
              <div
                key={s.n}
                className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-gray-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING FACTORS */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Milton Popcorn Ceiling Removal Cost
          </h2>
          <p className="text-center text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Typical Milton pricing ranges based on real projects. These are
            rough estimates only.
          </p>
          <p className="text-center text-base text-gray-500 mb-12 max-w-2xl mx-auto">
            <strong>
              Actual site visit and photo review required for exact cost.
            </strong>{" "}
            Every ceiling is different. We recommend getting a detailed written
            estimate.
          </p>

          {/* PRICING TABLE */}
          <div className="mb-12 overflow-x-auto">
            <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden min-w-[600px]">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">
                      Project Type
                    </th>
                    <th className="px-6 py-4 text-left font-bold">
                      Typical Range
                    </th>
                    <th className="px-6 py-4 text-left font-bold">
                      What's Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Standard Bedroom
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $800-$1,400
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Unpainted removal, Level 5 skim, primer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Painted Bedroom</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $1,200-$1,900
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Skim encapsulation, Level 5, primer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Living Room (12x16)
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $1,500-$2,400
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Removal, repairs, skim, primer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Vaulted / 10' Ceiling
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $2,000-$3,500
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Scaffolding, removal, skim, primer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Whole Townhome (3BR)
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $5,000-$8,200
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      All ceilings, hallways, skim, primer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 font-semibold">+ Ceiling Paint</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      +$200-$500/room
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Premium ceiling paint, 2 coats
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              *Ranges based on typical Milton projects 2023-2024. Heights,
              repairs, painted texture, and access affect final price.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                What changes the price
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ceiling height and access</li>
                <li>• Painted popcorn or heavy texture</li>
                <li>• Lights, vents, detectors</li>
                <li>• Cracks, seams, stains, old patches</li>
                <li>• Prime + paint included or not</li>
                <li>• Bundling rooms for efficiency</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                Common repairs we handle
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cracks and failed tape seams</li>
                <li>• Nail pops or screw pops</li>
                <li>• Water stains (primer plan)</li>
                <li>• Bulkheads and transitions</li>
                <li>• Pot light cutouts + patching</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Why prices vary</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Townhome access logistics</li>
                <li>• New-build vs older drywall</li>
                <li>• Weekend or evening premium</li>
                <li>• Permit requirements</li>
                <li>• Material delivery distance</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition shadow-xl"
              href="#quote"
            >
              Get Your Milton Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ROOM TYPES */}
      <section className="py-20 bg-white" id="room-types">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Room Types We Handle in {CITY}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Every space has unique challenges, from new-build townhomes to older
            bungalows.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold mb-3">
                Townhome & New-Build Ceilings
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Coates, Willmott, Ford, and Cobban layouts with open sightlines
                and lots of pot lights. We keep everything smooth and uniform.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Open-concept lighting</li>
                <li>✓ Fast turnarounds</li>
                <li>✓ Clean, modern read</li>
                <li>✓ Finish-ready handoff</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-xl font-bold mb-3">
                Kitchen Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Cabinet protection, ventilation concerns, and tight schedules
                around renovations in Beaty and Scott.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Cabinet masking</li>
                <li>✓ Exhaust fan planning</li>
                <li>✓ Pot light coordination</li>
                <li>✓ Moisture-ready priming</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">
                Basement Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Lower ceilings, bulkheads, HVAC runs in Old Milton and Timberlea
                basements. We handle tight access and clean lines.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Low ceiling access</li>
                <li>✓ Bulkhead transitions</li>
                <li>✓ Moisture testing</li>
                <li>✓ Ductwork obstacles</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🪜</div>
              <h3 className="text-xl font-bold mb-3">
                Stairwell & Vaulted Ceilings
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Two-storey foyers and cathedral ceilings in Harrison and Scott
                need safe access and careful lighting checks.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Scaffolding required</li>
                <li>✓ 12'-20' ceiling heights</li>
                <li>✓ Stairwell protection</li>
                <li>✓ Complex lighting</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Not Sure What You Need?
            </h3>
            <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
              Send photos of your Milton space. We will identify the texture
              type, ceiling height challenges, and recommend the best approach
              for your layout.
            </p>
            <div className="text-center">
              <Link
                href="/quote/"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition"
              >
                Upload Photos for Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO COPY */}
      <section
        className="py-20 bg-white border-t border-gray-100"
        id="milton-details"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] items-start">
            <div className="space-y-10 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Milton Popcorn Ceiling Specialists
                </h2>
                <p>
                  {BRAND_NAME} helps {CITY} homeowners, builders, and property
                  managers remove dated popcorn, stipple, and stucco texture in
                  Old Milton, Beaty, Dempsey, Coates, and fast-growing north-end
                  communities. We manage access, protect floors and stairs, and
                  keep schedules tight so ceiling smoothing projects stay on
                  track.
                </p>
                <p>
                  Every project includes dust containment, a texture removal or
                  encapsulation plan, a <strong>Level 5 skim coat</strong>,
                  primer, and optional ceiling painting. If you are comparing
                  options, review our{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/popcorn-ceiling-removal/"
                  >
                    complete popcorn ceiling removal services
                  </Link>{" "}
                  or book a quick site visit through the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/quote/"
                  >
                    online quote form
                  </Link>{" "}
                  for written pricing.
                </p>
                <p>
                  Need coordinated services? We line up{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/drywall-installation/"
                  >
                    drywall repairs and bulkhead framing
                  </Link>
                  , plus{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/services/interior-painting/"
                  >
                    professional ceiling painting
                  </Link>{" "}
                  so the finish stays consistent from room to room. Browse the
                  neighborhood list below for hyper-local logistics, or jump to
                  the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="#process"
                  >
                    process overview
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Local Logistics + Turnaround
                </h3>
                <p>
                  Milton clients lean on us for tight turnarounds when a
                  nursery, rental suite, or basement apartment needs to be
                  finished by the weekend. We coordinate pot light scheduling,
                  plan staging for narrow townhome stairwells, and protect busy
                  hallways so families can keep living in the space. Because we
                  log daily progress photos, homeowners can approve the next
                  step without being on-site.
                </p>
                <p>
                  Ceiling conditions vary by neighborhood. Newer subdivisions
                  often have heavy paint layers and bright LED lighting that
                  demand a careful skim plan, while older homes near Main Street
                  may allow a clean scrape before skim coating. We assess
                  texture hardness, existing paint, humidity, and traffic flow
                  before recommending the safest route.
                </p>
                <p>
                  Our teams work across Halton daily, so they already know the
                  traffic patterns around Derry Road, Regional Road 25, and
                  Highway 401. That local context keeps projects calm for
                  homeowners juggling work-from-home calls or busy school
                  routines.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Moisture, Compliance, and Materials
                </h3>
                <p>
                  Moisture and stain management is a critical part of Milton
                  ceiling upgrades. Basement suites can develop condensation
                  issues, while older roofs may leave tannin stains. We use a
                  stain-block primer plan and recommend trusted paint partners
                  such as{" "}
                  <a
                    className="text-blue-600 font-semibold hover:underline"
                    href="https://www.southsidepaint.ca/pages/contact"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Southside Paint & Wallpaper
                  </a>{" "}
                  to match ceiling paint for final coats. When permits or
                  renovation letters are unclear, we reference the{" "}
                  <a
                    className="text-blue-600 font-semibold hover:underline"
                    href={permitUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Town of Milton building permits resource
                  </a>{" "}
                  so projects stay compliant.
                </p>
                <p>
                  Smooth ceilings test well with home inspectors because the
                  Level 5 skim coat reveals hidden seam problems, and freshly
                  primed ceilings photograph better for listings in Beaty,
                  Scott, or Harrison. If you are preparing for market, we can
                  pair ceiling work with wall paint touch-ups, smoke detector
                  updates, and minor drywall repairs to tell a stronger staging
                  story.
                </p>
              </div>

              {(PAINT_STORES.length || permitUrl || wasteUrl) && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-4">
                    Milton Resources We Reference
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {PAINT_STORES.slice(0, 3).map((store) => (
                      <li key={store.url || store.name}>
                        <a
                          className="text-blue-600 font-semibold hover:underline"
                          href={store.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {store.name}
                        </a>
                        {store.address ? ` — ${store.address}` : ""}
                      </li>
                    ))}
                    {permitUrl ? (
                      <li>
                        <a
                          className="text-blue-600 font-semibold hover:underline"
                          href={permitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Milton building permits and inspections
                        </a>
                      </li>
                    ) : null}
                    {wasteUrl ? (
                      <li>
                        <a
                          className="text-blue-600 font-semibold hover:underline"
                          href={wasteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Halton waste management site
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
              )}

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Trade Coordination + Dust Control
                  </h3>
                  <p>
                    Contractors and designers appreciate that we map out
                    material staging, water access, and disposal plans up front.
                    We protect hardwoods and stair runners in Beaty, cover
                    built-in shelving in Dempsey, and coordinate access with
                    busy households. Our HEPA sanding stacks pair with air
                    scrubbers to reduce dust on furniture, plants, and home
                    office equipment.
                  </p>
                  <p>
                    For homeowners balancing budgets, we outline phased plans.
                    Phase one might address bedrooms and hallways, while phase
                    two covers vaulted great rooms. Because we document square
                    footage, texture type, and ceiling heights, it is easy to
                    price future phases if you want to schedule them later.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Restoration + Visualization
                  </h3>
                  <p>
                    Builder partners and restoration pros call us when
                    remediation work leaves ceilings patchy. We feather blend
                    new drywall with existing gypsum, reinforce seams with
                    fiberglass mesh, and soften bulkhead corners so pot light
                    layouts look clean. If your project requires asbestos
                    testing, we can coordinate third-party labs and next steps.
                  </p>
                  <p>
                    Want to visualize your project? We can reference past Milton
                    jobs with similar ceiling heights, fixture counts, or access
                    constraints so you know exactly what to expect. The workflow
                    stays disciplined: protect, remove or encapsulate texture,
                    skim coat, sand with HEPA, prime, and paint.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Getting Started
                </h3>
                <p>
                  To get started, gather ceiling photos, note ceiling heights,
                  and flag any access constraints such as tight staircases or
                  shared hallways. Submit everything through the{" "}
                  <Link
                    className="text-blue-600 font-semibold hover:underline"
                    href="/quote/"
                  >
                    quote form
                  </Link>{" "}
                  and mention any preferred timelines. We respond quickly with a
                  written scope, optional add-ons, and scheduling windows.
                </p>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-4">
                    Sample Local Project Flow
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>
                      Desk review of your photos, room list, and building rules.
                    </li>
                    <li>
                      On-site verification of access, ceiling height, and
                      texture type.
                    </li>
                    <li>Protection plan for hallways, stairs, and garages.</li>
                    <li>
                      Texture removal or skim strategy based on paint layers.
                    </li>
                    <li>
                      Level 5 skim, HEPA sanding, and raking light inspections.
                    </li>
                    <li>Primer and optional ceiling paint using your brand.</li>
                    <li>
                      Client walkthrough, punch list, and tidy cleanup before
                      reset.
                    </li>
                  </ol>
                </div>
                <p>
                  Halton residents trust us because we communicate often,
                  document every stage, and keep tidy standards high. When you
                  call, you speak with a project lead who knows Milton roads,
                  supply houses, and renovation norms, so your ceiling refresh
                  starts faster and finishes without surprises.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg md:sticky md:top-24">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="/blog/popcorn-ceiling-removal-cost-timeline/"
                  >
                    Cost & timeline article →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="#pricing"
                  >
                    Milton pricing overview →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="#room-types"
                  >
                    Room types we handle →
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-700 font-semibold hover:underline"
                    href="#neighbourhoods"
                  >
                    Milton neighbourhood readiness →
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
              </ul>
              <div className="mt-8 p-5 rounded-2xl bg-white border border-blue-100">
                <p className="text-sm uppercase tracking-wide text-blue-600 font-bold mb-2">
                  Service radius
                </p>
                <p className="text-gray-700">
                  Old Milton, Beaty, Dempsey, Coates, Willmott, Scott, and
                  nearby Halton neighborhoods.
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
            Milton Neighbourhoods We Serve
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Pick your area for hyper-local logistics and project details.
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

      {/* FAQ + CTA */}
      <section className="py-20 bg-gray-50" id="faq">
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
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
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
            📞 Call
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
