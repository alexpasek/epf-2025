import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Lakeview Popcorn Ceiling Removal | Level 5 Smooth Ceilings",
  description:
    "Popcorn ceiling removal Lakeview corridor: HEPA containment, Level 5 skim, stain-block primer, and tidy wrap-ups along Lakeshore Rd E, Cawthra, Dixie, and Haig Blvd.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/lakeview/",
  },
  openGraph: {
    title: "Lakeview Popcorn Ceiling Removal | Level 5 Finish",
    description:
      "Professional popcorn ceiling removal service Lakeview homeowners rely on—ceiling texture removal, Level 5 skims, primer, and paint-ready handoff.",
    url: "/popcorn-ceiling-removal/mississauga/lakeview/",
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
        name: "Lakeview Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Lakeview, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/lakeview/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Popcorn Ceiling Removal", item: "/services/popcorn-ceiling-removal/" },
          { "@type": "ListItem", position: 2, name: "Mississauga", item: "/popcorn-ceiling-removal/mississauga/" },
          { "@type": "ListItem", position: 3, name: "Lakeview", item: "/popcorn-ceiling-removal/mississauga/lakeview/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work near the Lakeview Village redevelopment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Popcorn ceiling removal Lakeview crews cover Lakeshore Rd E, Cawthra, Dixie, and Haig Blvd every week.",
            },
          },
          {
            "@type": "Question",
            name: "Should older bungalows test for asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the home predates ~1990 we refer third-party labs before professional popcorn ceiling removal Lakeview begins.",
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
  const gallery = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* MODERN HERO SECTION - TEAL/CYAN THEME */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-teal-500/40 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(20,184,166,.02)_25%,transparent_25%,transparent_50%,rgba(20,184,166,.02)_50%,rgba(20,184,166,.02)_75%,transparent_75%,transparent)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 z-10">
              {/* Breadcrumb */}
              <nav className="text-sm text-cyan-200/70">
                <ol className="inline-flex items-center space-x-2 flex-wrap">
                  <li>
                    <Link href="/" className="hover:text-cyan-300 transition">
                      Home
                    </Link>
                  </li>
                  <li className="text-white/30">→</li>
                  <li>
                    <Link
                      href="/services/popcorn-ceiling-removal/"
                      className="hover:text-cyan-300 transition"
                    >
                      Popcorn Ceiling Removal
                    </Link>
                  </li>
                  <li className="text-white/30">→</li>
                  <li>
                    <Link
                      href="/popcorn-ceiling-removal/mississauga/"
                      className="hover:text-cyan-300 transition"
                    >
                      Mississauga
                    </Link>
                  </li>
                  <li className="text-white/30">→</li>
                  <li className="font-semibold text-cyan-300">Lakeview</li>
                </ol>
              </nav>

              {/* Location Badge */}
              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-xl rounded-2xl border-2 border-teal-400/40 shadow-lg shadow-teal-500/20">
                  <span className="text-sm font-bold text-cyan-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Serving Lakeview & Lakeshore Area
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 animate-gradient">
                    Removal Lakeview
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional <strong className="text-cyan-300">popcorn ceiling removal service</strong> for Lakeview homes. HEPA dust control, Level 5 smooth finish along Lakeshore Rd E, Cawthra & Dixie.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-teal-300 mb-1">✓ Homes</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    80+
                  </div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-cyan-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    2-3d
                  </div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm rounded-2xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-emerald-300 mb-1">★ Rating</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                    4.9
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="group relative px-8 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-2xl font-bold text-lg shadow-2xl shadow-teal-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>{phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href="/quote/"
                  className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg border-2 border-cyan-400/40 hover:border-cyan-400/70 transition-all hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    ✨ Get Free Quote
                  </span>
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-emerald-300 bg-emerald-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-400/30">
                  <span className="text-emerald-400">✓</span> Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300 bg-cyan-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-400/30">
                  <span className="text-cyan-400">✓</span> 3-Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-300 bg-teal-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-400/30">
                  <span className="text-teal-400">✓</span> HEPA Dust Control
                </div>
              </div>
            </div>

            {/* Hero Image with Modern Frame */}
            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Floating background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 rounded-[3rem] blur-3xl transform rotate-6 scale-110"></div>
                
                <div
                  className="relative transform hover:scale-105 transition-transform duration-700"
                  style={{ perspective: "1500px" }}
                >
                  {/* Main image with rounded frame */}
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-teal-400/30 shadow-2xl shadow-teal-500/30 backdrop-blur-sm bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
                    <img
                      src="/services/popcorn-ceiling-removal/6.webp"
                      alt="Lakeview popcorn ceiling removal Level 5 smooth finish"
                      loading="eager"
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-500 to-green-600 p-6 rounded-3xl shadow-2xl border-2 border-emerald-300/50 transform hover:scale-110 transition-transform hover:rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">✨</div>
                      <div>
                        <p className="font-black text-white text-xl">Level 5</p>
                        <p className="text-sm text-emerald-100 font-semibold">
                          Smooth
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl border-2 border-cyan-300/50 transform hover:scale-110 transition-transform hover:-rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">🏖️</div>
                      <div>
                        <p className="font-black text-white text-xl">Lake</p>
                        <p className="text-sm text-cyan-100 font-semibold">
                          Area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative orbs */}
                <div
                  className="absolute -z-10 top-1/3 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute -z-10 bottom-1/3 -left-16 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Lakeview Homeowners Choose Us</h2>
            <p className="text-gray-600 text-lg">Professional ceiling transformation for Lakeshore homes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lakeshore-friendly staging",
                copy: "Driveways near Lakeshore Rd E stay clear and materials stay inside so neighbours aren’t blocked.",
              },
              {
                title: "Level 5 guarantee",
                copy: "Every popcorn ceiling removal Lakeview project ends with a Level 5 skim and stain-block primer.",
              },
              {
                title: "Clean wrap-ups",
                copy: "Daily tidy and negative air options keep families comfortable in cottages, bungalows, and condos.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-white rounded-3xl border border-slate-100 shadow">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Lakeview Transformations</h2>
            <p className="text-gray-600 text-lg">From textured to smooth Level 5 finish</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={src}
                    alt={`Lakeview popcorn ceiling removal project ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-lg">Lakeview Project {i + 1}</p>
                    <p className="text-sm text-teal-200">Level 5 Smooth Finish</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL INSIGHT */}
      <section id="local" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Local insight for Lakeview</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Popcorn ceiling removal service Lakeview homes often handle painted stipple in post-war bungalows and townhomes near Dixie, Ogden, and Haig. We test adhesion, choose controlled scrape or encapsulate, then skim to Level 5 so Lakeshore sunlight doesn't show seams.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Lakeview Village construction means tighter parking; we schedule load-ins and keep material runs inside.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Need pot-light coordination, painting, or drywall repairs? Our popcorn ceiling removal contractor Lakeview lead handles it end-to-end.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-b from-cyan-50 to-white rounded-3xl border-2 border-cyan-100 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Common requests</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Popcorn ceiling removal Lakeview bungalows before sale
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Professional popcorn ceiling removal Lakeview condos near Dixie
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Ceiling texture removal Lakeview townhomes near Haig Blvd
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Stipple ceiling removal Lakeview basements and lofts
                </li>
              </ul>
              <div className="mt-6 p-4 rounded-2xl bg-white shadow">
                <p className="text-sm text-gray-600">
                  Working near Marie Curtis Park? We stage around tight lots and keep ventilation controlled so lake breezes don't pull dust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Lakeview Ceiling Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Popcorn ceiling removal service Lakeview",
                copy: "Protect, test, scrape or encapsulate, Level 5 skim, stain-block primer, paint-ready handoff.",
              },
              {
                title: "Popcorn ceiling removal contractor Lakeview",
                copy: "We coordinate pot lights, drywall repairs, and painting so you have one crew.",
              },
              {
                title: "Ceiling resurfacing Lakeview",
                copy: "Smooth ceiling contractor Lakeview workflows for foyers, basements, and additions.",
              },
            ].map((svc) => (
              <div key={svc.title} className="group relative p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-3">{svc.title}</h3>
                <p className="text-gray-600">{svc.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">
              Pricing & schedule
            </p>
            <h2 className="text-3xl font-bold mt-2">
              Popcorn ceiling removal cost Lakeview homeowners expect
            </h2>
            <p className="mt-4 text-slate-200">
              Popcorn removal cost Lakeview projects typically ranges $6–$7/sq ft when texture is unpainted. Painted or stubborn ceilings needing encapsulation + Level 5 skim run $8–$9/sq ft.
            </p>
            <p className="mt-3 text-slate-200">
              The cost to scrape popcorn ceiling Lakeview bungalows depends on paint build, access, and repairs, which we confirm during our walk-through.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Method", "Scrape or encapsulate + Level 5"],
              ["Finish", "Stain-block primer paint-ready"],
              ["Warranty", "3 years workmanship"],
              ["Access", "Stair/foyer staging included"],
            ].map(([label, value]) => (
              <div key={label} className="p-4 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-xs uppercase tracking-wide text-indigo-200">{label}</p>
                <p className="text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105" href="/quote/">
            Get estimate
          </a>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105" href={phoneHref}>
            Call {phoneDisplay}
          </a>
          <p className="text-sm text-slate-300">
            Includes protection, HEPA dust control, Level 5 skim, primer.
          </p>
        </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Lakeview projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Lakeshore bungalow",
              near: "Lakeshore Rd E & Cawthra",
              scope: "Popcorn ceiling removal Lakeview bungalow, Level 5 skim, stain-block prime",
              duration: "3 days",
              outcome: "Bright ceiling ready for listing",
            },
            {
              title: "Townhome near Haig Blvd",
              near: "Haig Blvd corridor",
              scope: "Stipple ceiling removal Lakeview townhome, pot-light blending",
              duration: "2.5 days",
              outcome: "Smooth ceiling contractor Lakeview finish with LED pot lights",
            },
            {
              title: "Condos near Dixie",
              near: "Dixie Rd & Lakeshore",
              scope: "Ceiling texture removal Lakeview condo, HEPA containment, Level 5",
              duration: "2 days",
              outcome: "Clean, modern ceilings for new owners",
            },
          ].map((proj) => (
            <div key={proj.title} className="p-6 bg-white rounded-3xl border">
              <p className="text-sm uppercase tracking-wide text-indigo-600">
                {proj.near}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{proj.title}</h3>
              <p className="mt-3 text-gray-700">
                <strong>Scope:</strong> {proj.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {proj.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {proj.outcome}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center">Lakeview local resources</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-3xl border">
            <h3 className="text-xl font-semibold">Paint & supplies</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Sherwin-Williams — Lakeshore Rd E & Cawthra</li>
              <li>Benjamin Moore — Dixie outlet area</li>
              <li>Home Depot — Dixie & Dundas for staging gear</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-3xl border">
            <h3 className="text-xl font-semibold">Permits & disposal</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>City of Mississauga building counter for interior clarification</li>
              <li>Peel Community Recycling Centre (Mavis Rd) for drywall/textured waste</li>
              <li>Hazardous waste drop-off (Fewster Dr) for primer/mud pails</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8">Lakeview FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Can you keep Lakeshore homes livable during popcorn ceiling removal Lakeview projects?",
              a: "Yes. We stage room-by-room, seal openings, and run HEPA sanders so kitchens and stairways stay usable.",
            },
            {
              q: "Do you handle painted popcorn ceiling removal Lakeview bungalows have?",
              a: "We test adhesion, encapsulate if needed, and skim to Level 5 so Lakeshore sunlight doesn’t flash seams.",
            },
            {
              q: "What about pot lights and painting?",
              a: "Our smooth ceiling contractor Lakeview lead coordinates electricians and painters so trims sit clean.",
            },
            {
              q: "Do we need asbestos testing?",
              a: "If your ceiling predates 1990 we refer third-party labs before professional popcorn ceiling removal Lakeview begins.",
            },
          ].map((faq) => (
            <details key={faq.q} className="p-6 bg-white rounded-3xl border">
              <summary className="font-semibold text-lg">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section id="keywords" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-semibold">Searches we hear in Lakeview</h2>
          <p className="mt-2 text-gray-700">
            popcorn ceiling removal Lakeview • popcorn ceiling contractor Lakeview • popcorn ceiling removal contractor Lakeview • professional popcorn ceiling removal Lakeview • popcorn ceiling removal service Lakeview • smooth ceiling contractor Lakeview • ceiling texture removal Lakeview • stipple ceiling removal Lakeview • ceiling resurfacing Lakeview. Light mentions kept here only: popcorn ceiling Lakeview • popcorn removal Lakeview • scraping popcorn ceiling Lakeview • stripping popcorn ceiling Lakeview • taking off popcorn ceiling Lakeview • taking down popcorn ceiling Lakeview • take out popcorn ceiling Lakeview • get rid of popcorn ceiling Lakeview • removing stucco ceiling Lakeview • stucco ceiling removal Lakeview • cottage cheese ceiling removal Lakeview • painted popcorn ceiling removal Lakeview.
          </p>
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section id="neighbourhoods" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Popcorn Ceiling Removal Across Mississauga
          </h2>
          <p className="mt-2 text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Our <strong>professional popcorn ceiling removal</strong> service extends throughout Mississauga. 
            Whether you're in Lakeview, Port Credit, or Cooksville, we deliver the same <strong>Level 5 smooth ceiling</strong> finish 
            with HEPA dust control and expert <strong>ceiling resurfacing</strong>.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="group p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏢</span>
                <h3 className="font-bold text-lg text-teal-600">Mississauga Central</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Popcorn ceiling contractor</strong> serving all Mississauga neighborhoods. 
                View complete service areas, pricing guides, and <strong>ceiling texture removal</strong> options citywide.
              </p>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/port-credit/"
              className="group p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">⚓</span>
                <h3 className="font-bold text-lg">Port Credit</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Waterfront <strong>popcorn ceiling removal Port Credit</strong> homes. 
                Specialized in heritage bungalows, lakefront condos, and <strong>stipple ceiling removal</strong> with moisture management.
              </p>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/cooksville/"
              className="group p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏘️</span>
                <h3 className="font-bold text-lg">Cooksville</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Central <strong>popcorn ceiling removal Cooksville</strong> service. 
                High-rise condos, townhomes, and residential <strong>ceiling resurfacing</strong> near Hurontario and Dundas corridor.
              </p>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/streetsville/"
              className="group p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏛️</span>
                <h3 className="font-bold text-lg">Streetsville</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Heritage district <strong>popcorn ceiling removal Streetsville</strong>. 
                Historic homes, village properties, and <strong>smooth ceiling contractor</strong> services for character homes.
              </p>
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl border border-teal-200">
            <h3 className="text-xl font-bold text-center mb-3">Same Professional Service, Every Neighborhood</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>HEPA dust control</strong> in all areas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>Level 5 finish</strong> standard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>3-year warranty</strong> citywide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-black">
                Ready for Professional Popcorn Ceiling Removal in Lakeview?
              </h3>
              <p className="text-xl text-white/90 mt-2">
                Send photos, choose dates, and let our smooth ceiling contractor Lakeview team handle the mess.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
                href={phoneHref}
              >
                📞 {phoneDisplay}
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105"
                href="/quote/"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-teal-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            📞 Call
          </a>
          <a
            href="/quote/"
            className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
