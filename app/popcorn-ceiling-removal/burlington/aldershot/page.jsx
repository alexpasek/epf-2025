import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Aldershot";
const SLUG = "aldershot";
const CITY_BASE = "/popcorn-ceiling-removal/burlington";
const ALL = [
  ["downtown-burlington", "Downtown Burlington"],
  ["aldershot", "Aldershot"],
  ["tyandaga", "Tyandaga"],
  ["brant-hills", "Brant Hills"],
  ["mountainside", "Mountainside"],
  ["headon-forest", "Headon Forest"],
  ["palmer", "Palmer"],
  ["tansley", "Tansley"],
  ["orchard", "Orchard"],
  ["millcroft", "Millcroft"],
  ["alton-village", "Alton Village"],
  ["brant", "Brant"],
  ["roseland", "Roseland"],
  ["shoreacres", "Shoreacres"],
  ["longmoor", "Longmoor"],
  ["pinedale", "Pinedale"],
  ["maple", "Maple"],
  ["corporate", "Corporate"],
  ["freeman", "Freeman"],
  ["dynes", "Dynes"],
];

export const metadata = {
  title: `Popcorn Ceiling Removal ${NAME} Burlington | Level 5 Smooth Finish`,
  description: `Professional popcorn ceiling removal ${NAME} Burlington: HEPA dust control, Level 5 skim coat, stain-block primer near LaSalle Park, Plains Rd, Waterdown Rd.`,
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal ${NAME} Burlington | Level 5 Finish`,
    description: `Professional ${NAME} popcorn ceiling removal service: HEPA containment, Level 5 skim, primer, paint-ready finish near LaSalle Park.`,
    url: `${CITY_BASE}/${SLUG}/`,
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
        name: "Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn/Stipple/Stucco Ceiling Removal",
          "Ceiling Smoothing & Flattening",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
          "Ceiling Painting",
        ],
        areaServed: `${NAME}, Burlington`,
        url: `${CITY_BASE}/${SLUG}/`,
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
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
            name: "Burlington",
            item: `${CITY_BASE}/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: NAME,
            item: `${CITY_BASE}/${SLUG}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Aldershot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on texture thickness, paint layers, ceiling repairs and square footage. Bedrooms often land in a competitive per-sq-ft range. Share room sizes/photos for a fast written number.",
            },
          },
          {
            "@type": "Question",
            name: "Is the process dustless?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms, mask returns/supplies, and sand with HEPA-connected tools. Corridors and non-work areas stay clean with daily tidy wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "What if the ceiling is painted or has old patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small patch. If scraping risks damage, we safely encapsulate and skim full-field to Level 5, then prime for an even, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot-lights or painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We stain-block prime and can apply finish coats, or leave perfectly paint-ready.",
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
  const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
  const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* MODERN HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/40 to-indigo-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-tr from-indigo-600/30 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,.02)_25%,transparent_25%,transparent_50%,rgba(59,130,246,.02)_50%,rgba(59,130,246,.02)_75%,transparent_75%,transparent)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 z-10">
              <nav className="text-sm text-blue-200/70">
                <ol className="inline-flex items-center space-x-2 flex-wrap">
                  <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href="/popcorn-ceiling-removal/" className="hover:text-blue-300 transition">Popcorn Ceiling Removal</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href={CITY_BASE} className="hover:text-blue-300 transition">Burlington</Link></li>
                  <li className="text-white/30">→</li>
                  <li className="font-semibold text-blue-300">{NAME}</li>
                </ol>
              </nav>

              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-xl rounded-2xl border-2 border-blue-400/40 shadow-lg shadow-blue-500/20">
                  <span className="text-sm font-bold text-blue-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Serving {NAME} & LaSalle Park Area
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-gradient">Removal {NAME}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional <strong className="text-blue-300">popcorn ceiling removal service</strong> for {NAME} homes. HEPA dust control, Level 5 smooth finish near LaSalle Park, Plains Rd & Waterdown Rd.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-blue-300 mb-1">✓ Projects</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">50+</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl border border-indigo-400/20 hover:border-indigo-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-indigo-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">1-2d</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-cyan-300 mb-1">★ Rating</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">4.9</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={phoneHref} className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>{phoneDisplay}</span>
                  </span>
                </a>
                <a href="/quote/" className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg border-2 border-blue-400/40 hover:border-blue-400/70 transition-all hover:scale-105 shadow-lg">
                  <span className="flex items-center justify-center gap-2">✨ Get Free Quote</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-green-300 bg-green-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-green-400/30">
                  <span className="text-green-400">✓</span> Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300 bg-blue-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30">
                  <span className="text-blue-400">✓</span> 3-Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-indigo-300 bg-indigo-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-indigo-400/30">
                  <span className="text-indigo-400">✓</span> HEPA Dust Control
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-[3rem] blur-3xl transform rotate-6 scale-110"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-700" style={{ perspective: "1500px" }}>
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
                    <img src="/services/popcorn-ceiling-removal/3.webp" alt="Aldershot Burlington popcorn ceiling removal Level 5 smooth finish" loading="eager" className="w-full h-auto object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl shadow-2xl border-2 border-blue-300/50 transform hover:scale-110 transition-transform hover:rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">✨</div>
                      <div>
                        <p className="font-black text-white text-xl">Level 5</p>
                        <p className="text-sm text-blue-100 font-semibold">Smooth</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl shadow-2xl border-2 border-indigo-300/50 transform hover:scale-110 transition-transform hover:-rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">🏠</div>
                      <div>
                        <p className="font-black text-white text-xl">LaSalle</p>
                        <p className="text-sm text-indigo-100 font-semibold">Park Area</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/3 -right-16 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute -z-10 bottom-1/3 -left-16 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM - ENHANCED */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-10 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            </div>

            <div className="relative grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
              <div className="text-white">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Same-day response guaranteed
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  Get Your {NAME} Popcorn Ceiling Removal Quote
                </h2>
                
                <p className="mt-4 text-white/90 text-lg leading-relaxed">
                  Homes near LaSalle Park, Plains Rd, and Waterdown Rd. We reply same-day with Level 5 scope, HEPA dust control plan, and paint-ready finish guarantee.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">1–2 Day Projects</h4>
                      <p className="text-white/80 text-sm">Fast turnaround with Level 5 smooth finish for typical rooms</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-xl">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">HEPA Dust Control</h4>
                      <p className="text-white/80 text-sm">Sealed rooms, masked vents, vacuum-assist sanding keeps your home clean</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{NAME} Specialists</h4>
                      <p className="text-white/80 text-sm">Serving LaSalle Park, Plains Rd, Waterdown Rd & surrounding areas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">✓ WSIB Insured</span>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">✓ 3-Year Warranty</span>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">✓ Paint-Ready Finish</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Quick Quote Form</h3>
                  <p className="text-sm text-gray-600 mt-1">We'll reply within 2 hours on weekdays</p>
                </div>
                <QuoteForm />
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span>🔒</span>
                  <span>Your information is secure and never shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Recent {NAME} Projects</h2>
            <p className="text-gray-600 mt-2">Level 5 smooth finishes for Burlington homes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${NAME} Burlington popcorn ceiling removal — project ${i + 1}`}
                className="w-full h-56 object-cover rounded-2xl border shadow"
                data-lightbox="true"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="container-x mx-auto px-4 py-10">

      {/* WHY US */}
      <section id="why-us" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Why {NAME} homeowners choose us
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              House-friendly containment
            </h3>
            <p className="mt-2 text-gray-700">
              Clean entry paths, wrapped furniture, sealed rooms, and corridor
              protection keep dust in the work zone. We tidy daily so bedrooms
              and main-floor living spaces remain usable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Level 5 smoothness</h3>
            <p className="mt-2 text-gray-700">
              We skim full-field and inspect under raking light from{" "}
              <strong>LaSalle Park</strong> and lakeside daylight exposures so
              joints don’t telegraph—ideal for both mid-century homes and modern
              renovations in Aldershot.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot-lights & painting</h3>
            <p className="mt-2 text-gray-700">
              Coordinate with your electrician (or request a referral). We
              stain-block prime and can apply finish coats—or leave perfectly
              paint-ready.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Predictable quotes & schedule
            </h3>
            <p className="mt-2 text-gray-700">
              Send rough sizes and a few photos for a fast, written number.
              Choose a start date—our insured crew arrives with a clear scope
              and tidy workflow.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS - ENHANCED */}
      <section id="process" className="mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Professional Process</h2>
          <p className="text-gray-600 mt-2">6 steps to perfect ceilings in {NAME}</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Protection & Containment</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Protect floors & furniture, seal doorways, mask returns/supplies with HEPA dust control systems.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Testing & Assessment</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Test a discreet patch: controlled scrape vs safe encapsulation when paint layers are heavy.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Removal & Skim Coat</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Remove texture or encapsulate; <strong>skim full-field to Level 5</strong> for a perfectly flat read.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">HEPA Sanding</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              HEPA-connected sanding with raking-light checks and precision touch-ups for flawless results.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              5
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Stain-Block Primer</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Stain-block primer to unify the surface and prevent bleed-through from water stains or discoloration.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              6
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Final Paint</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Optional: two coats premium ceiling paint for a finished look, or leave paint-ready for your painter.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING & INTENT */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Pricing & high-intent services
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Typical scopes</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Bedrooms & primary suites</li>
              <li>Main-floor living/dining + hallways</li>
              <li>Open-plan areas and landings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()} burlington</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco / stipple ceiling removal</li>
              <li>ceiling smoothing & resurfacing</li>
              <li>skim coat ceiling Level 5</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>popcorn ceiling price per square foot Burlington</li>
              <li>asbestos testing referral (when needed)</li>
              <li>pot light installation after popcorn removal</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Helpful links</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>
                <Link
                  className="underline"
                  href="/popcorn-ceiling-removal/"
                >
                  GTA popcorn ceiling removal service hub
                </Link>
              </li>
              <li>
                <Link className="underline" href={`${CITY_BASE}/`}>
                  Burlington popcorn ceiling removal all neighborhoods
                </Link>
              </li>
              <li>
                <Link className="underline" href="/services/interior-painting/">
                  Professional interior painting services
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/services/drywall-installation/"
                >
                  Drywall installation and skim coat finishing
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/blog/popcorn-ceiling-removal-cost-timeline/"
                >
                  Popcorn ceiling removal cost and timeline guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Factors that influence <strong>price per square foot</strong> in{" "}
          {NAME} include ceiling height, paint accumulation on texture, number
          of fixtures (smoke detectors, vents), prior patching, water stains,
          and whether you’d like us to <em>paint after prime</em> or leave
          paint-ready. We keep pricing competitive for single rooms and
          multi-room groups; share sizes for a firm quote.
        </p>
      </section>

      {/* LOCAL SEO DETAILS / PROXIMITY */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Professional popcorn ceiling removal service in {NAME}
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We regularly serve homes off <strong>Plains Rd W/E</strong>, near{" "}
          <strong>Waterdown Rd</strong> and <strong>King Rd</strong>, around{" "}
          <strong>LaSalle Park & Marina</strong> and the{" "}
          <strong>Royal Botanical Gardens</strong> corridor. Many Aldershot
          ceilings are a mix of older plaster and newer drywall additions—our{" "}
          <strong>Level 5 skim</strong> blends substrates so the ceiling reads
          smooth across daylight and pot-lights. Parking and access are planned
          around QEW/403 ramps to keep workflow efficient.
        </p>
        
        <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Complete ceiling services for {NAME} Burlington
          </h3>
          <p className="text-gray-700 mb-4">
            Our <strong>popcorn ceiling removal {NAME.toLowerCase()} Burlington</strong> service includes professional{" "}
            <strong>ceiling texture removal {NAME.toLowerCase()}</strong> with HEPA dust control. As your trusted{" "}
            <strong>popcorn ceiling contractor {NAME.toLowerCase()}</strong>, we provide{" "}
            <strong>ceiling resurfacing {NAME.toLowerCase()}</strong> and{" "}
            <strong>smooth ceiling contractor {NAME.toLowerCase()}</strong> solutions. Whether you need{" "}
            <strong>stipple ceiling removal {NAME.toLowerCase()}</strong> or{" "}
            <strong>stucco ceiling removal {NAME.toLowerCase()}</strong>, our{" "}
            <strong>professional popcorn ceiling removal {NAME.toLowerCase()}</strong> team delivers Level 5 finishes.
          </p>
          <p className="text-gray-700">
            We're the <strong>popcorn ceiling removal service {NAME.toLowerCase()}</strong> that Burlington homeowners trust for{" "}
            <strong>ceiling smoothing {NAME.toLowerCase()}</strong> projects. Our{" "}
            <strong>popcorn ceiling removal contractor {NAME.toLowerCase()}</strong> expertise ensures flawless results for every project.
          </p>
        </div>

        <p className="mt-4 text-gray-700 max-w-5xl">
          Looking for nearby Burlington neighborhoods? We also provide{" "}
          <Link className="text-blue-600 font-semibold hover:underline" href={`${CITY_BASE}/tyandaga/`}>
            popcorn ceiling removal Tyandaga Burlington
          </Link>
          ,{" "}
          <Link className="text-blue-600 font-semibold hover:underline" href={`${CITY_BASE}/brant-hills/`}>
            popcorn ceiling removal Brant Hills Burlington
          </Link>
          , and{" "}
          <Link
            className="text-blue-600 font-semibold hover:underline"
            href={`${CITY_BASE}/downtown-burlington/`}
          >
            popcorn ceiling removal Downtown Burlington
          </Link>
          .
        </p>
      </section>

      {/* KEYWORDS SECTION - NEIGHBORHOOD SPECIFIC */}
      <section id="keywords" className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Common {NAME} ceiling searches we fulfill
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-bold text-lg text-blue-900 mb-3">Priority Services ({NAME})</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>popcorn ceiling removal {NAME.toLowerCase()}</strong> - Complete removal service</li>
              <li><strong>popcorn ceiling contractor {NAME.toLowerCase()}</strong> - Licensed professionals</li>
              <li><strong>popcorn ceiling removal contractor {NAME.toLowerCase()}</strong> - Expert team</li>
              <li><strong>professional popcorn ceiling removal {NAME.toLowerCase()}</strong> - Premium service</li>
              <li><strong>popcorn ceiling removal service {NAME.toLowerCase()}</strong> - Full-service solutions</li>
              <li><strong>smooth ceiling contractor {NAME.toLowerCase()}</strong> - Level 5 specialists</li>
              <li><strong>ceiling texture removal {NAME.toLowerCase()}</strong> - All texture types</li>
              <li><strong>stipple ceiling removal {NAME.toLowerCase()}</strong> - Stipple specialists</li>
              <li><strong>ceiling resurfacing {NAME.toLowerCase()}</strong> - Complete refinishing</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-bold text-lg text-indigo-900 mb-3">Additional Services ({NAME})</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>stucco ceiling removal {NAME.toLowerCase()}</strong> - Stucco texture removal</li>
              <li><strong>ceiling smoothing {NAME.toLowerCase()}</strong> - Smooth finish application</li>
              <li><strong>skim coat ceiling {NAME.toLowerCase()}</strong> - Level 5 skim coating</li>
              <li><strong>popcorn ceiling price per square foot Burlington</strong> - Transparent pricing</li>
              <li><strong>dustless popcorn removal Burlington</strong> - HEPA dust control</li>
              <li><strong>asbestos testing popcorn ceiling Burlington</strong> - Safety first</li>
              <li><strong>pot light installation after popcorn removal Burlington</strong> - Lighting upgrades</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl border">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Note:</strong> All {NAME} neighborhood-specific keywords are designed for local search intent. For broader services, visit our{" "}
            <Link href={`${CITY_BASE}/`} className="text-blue-600 font-semibold hover:underline">
              Burlington popcorn ceiling removal service page
            </Link>{" "}
            covering all neighborhoods. For GTA-wide services, see our{" "}
            <Link href="/popcorn-ceiling-removal/" className="text-blue-600 font-semibold hover:underline">
              professional popcorn ceiling removal services across the GTA
            </Link>.
          </p>
        </div>
      </section>

      {/* LINKS TO OTHER BURLINGTON NEIGHBOURHOODS */}
      <section id="links" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Popcorn Ceiling Removal Services Across Burlington
        </h2>
        <h3 className="text-lg text-gray-600 mt-2 mb-4">
          Professional ceiling removal available in all Burlington neighborhoods
        </h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {ALL.map(([s, n]) => (
            <Link 
              key={s} 
              href={s === SLUG ? `${CITY_BASE}/${s}/` : `${CITY_BASE}/${s}/`}
              className={`p-3 rounded-xl border transition-all text-sm font-medium text-center ${
                s === SLUG 
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold cursor-default' 
                  : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-600'
              }`}
              aria-current={s === SLUG ? 'page' : undefined}
              title={`Professional popcorn ceiling removal in ${n}, Burlington`}
            >
              {n}
              {s === SLUG && <span className="ml-1">✓</span>}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ - ENHANCED WITH AUTHORITY FLOW */}
      <section id="faq" className="mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions — {NAME}</h2>
          <p className="text-gray-600 mt-2">Everything you need to know about our service</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>How much does popcorn ceiling removal cost in {NAME}?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Pricing depends on texture thickness, paint layers, ceiling repairs and square footage. Bedrooms often land in a competitive per-sq-ft range. Share room sizes/photos for a fast written number. For detailed pricing information, see our{" "}
              <Link href={`${CITY_BASE}/`} className="text-blue-600 font-semibold hover:underline">
                Burlington popcorn ceiling removal pricing guide
              </Link>.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Is the popcorn ceiling removal process dustless?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We seal rooms, mask returns/supplies, and sand with HEPA-connected tools. Corridors and non-work areas stay clean with daily tidy wrap-ups. Our dust containment methods are industry-leading throughout Burlington.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>What if my ceiling is painted or has old patches?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We test a small patch first. If scraping risks damage, we safely encapsulate and skim full-field to Level 5, then prime for an even, paint-ready surface. This approach is particularly common in older {NAME} homes.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Can you coordinate pot-lights or painting?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Yes—coordinate your electrician (or request a referral). We stain-block prime and can apply finish coats, or leave perfectly paint-ready. Learn more about our{" "}
              <Link href="/services/interior-painting/" className="text-blue-600 font-semibold hover:underline">
                interior painting services
              </Link>.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>How long does a typical room take in {NAME}?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Most bedrooms take 1–2 days depending on repairs and whether we're painting after prime. Multi-room groupings improve efficiency. {NAME} projects near LaSalle Park typically follow this timeline.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Will there be odours or strong solvents?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use low-odour products and ventilate appropriately. If stain-blocking is required, we'll review primer options and ventilation. Our {NAME} projects prioritize indoor air quality.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Are you insured and do you warranty the work?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Yes—WSIB and liability insured. We include a written 3-year workmanship warranty and a clear scope before we begin. All Burlington projects are fully covered.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Do I need asbestos testing for my {NAME} ceiling?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If your home was built before 1990, we recommend asbestos testing. We provide trusted referrals for testing services. Once results are clear, we proceed with our standard HEPA dust control process. See our{" "}
              <Link href={`${CITY_BASE}/`} className="text-blue-600 font-semibold hover:underline">
                Burlington asbestos testing guide
              </Link>.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>What's the difference between Level 4 and Level 5 finish?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Level 4 shows minor imperfections under harsh light. Level 5 includes full-field skim coat and passes critical raking-light inspection—essential for {NAME} homes with large windows facing LaSalle Park. Read more about our{" "}
              <Link href="/services/drywall-installation/" className="text-blue-600 font-semibold hover:underline">
                Level 5 drywall finishing standards
              </Link>.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Can you match existing ceiling texture if I only remove part?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We don't recommend partial removal—texture matching is difficult and shows under natural light. We suggest removing all popcorn for consistent Level 5 smoothness throughout your {NAME} home.
            </p>
          </details>

          <details className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              <span>Do you serve other Burlington neighborhoods?</span>
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Yes! We serve all Burlington neighborhoods including Downtown Burlington, Tyandaga, Brant Hills, Mountainside, and more. Visit our{" "}
              <Link href={`${CITY_BASE}/`} className="text-blue-600 font-semibold hover:underline">
                Burlington popcorn ceiling removal service page
              </Link>{" "}
              to see all covered areas.
            </p>
          </details>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 text-center">
          <p className="text-gray-700 font-semibold">
            Still have questions about popcorn ceiling removal in {NAME}?
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={phoneHref} className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition shadow-lg">
              📞 Call {phoneDisplay}
            </a>
            <Link href={`${CITY_BASE}/`} className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
              View Burlington Service Page →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 p-6 bg-white rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, bright ceilings in {NAME}?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan. Tidy finish.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-blue-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a href={phoneHref} className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition shadow-lg">📞 Call</a>
          <a href="/quote/" className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition shadow-lg">Quote</a>
        </div>
      </div>
    </div>
    </>
  );
}
