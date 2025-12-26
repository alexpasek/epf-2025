// app/popcorn-ceiling-removal/mississauga/streetsville/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Streetsville Popcorn Ceiling Removal | Level 5 Smooth Ceilings",
  description:
    "Popcorn ceiling removal Streetsville: HEPA containment, Level 5 skim coat, stain-block primer for heritage homes along Queen St S, Thomas St, and Credit River area.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/streetsville/",
  },
  openGraph: {
    title: "Streetsville Popcorn Ceiling Removal | Level 5 Finish",
    description:
      "Professional popcorn ceiling removal service Streetsville homeowners trust—ceiling texture removal, Level 5 skim, primer, and paint-ready handoff.",
    url: "/popcorn-ceiling-removal/mississauga/streetsville/",
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
        name: "Streetsville Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Streetsville, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/streetsville/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Popcorn Ceiling Removal",
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Streetsville",
            item: "/popcorn-ceiling-removal/mississauga/streetsville/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work in Streetsville heritage homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Popcorn ceiling removal Streetsville crews handle older plaster and mixed drywall in heritage homes along Queen St S and Credit River area.",
            },
          },
          {
            "@type": "Question",
            name: "Can you blend pot-light rings and old patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather repairs during Level 5 skim so pot-light rings and previous patches disappear after stain-block primer.",
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

      {/* MODERN HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-teal-500/40 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(20,184,166,.02)_25%,transparent_25%,transparent_50%,rgba(20,184,166,.02)_50%,rgba(20,184,166,.02)_75%,transparent_75%,transparent)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 z-10">
              <nav className="text-sm text-cyan-200/70">
                <ol className="inline-flex items-center space-x-2 flex-wrap">
                  <li><Link href="/" className="hover:text-cyan-300 transition">Home</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href="/popcorn-ceiling-removal/" className="hover:text-cyan-300 transition">Popcorn Ceiling Removal</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href="/popcorn-ceiling-removal/mississauga/" className="hover:text-cyan-300 transition">Mississauga</Link></li>
                  <li className="text-white/30">→</li>
                  <li className="font-semibold text-cyan-300">Streetsville</li>
                </ol>
              </nav>

              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-xl rounded-2xl border-2 border-teal-400/40 shadow-lg shadow-teal-500/20">
                  <span className="text-sm font-bold text-cyan-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Serving Streetsville & Heritage District
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 animate-gradient">Removal Streetsville</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional <strong className="text-cyan-300">popcorn ceiling removal service</strong> for Streetsville heritage homes. HEPA dust control, Level 5 smooth finish along Queen St S, Thomas St & Credit River area.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-teal-300 mb-1">✓ Homes</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">75+</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-cyan-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">2-3d</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm rounded-2xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-emerald-300 mb-1">★ Rating</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">4.9</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={phoneHref} className="group relative px-8 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-2xl font-bold text-lg shadow-2xl shadow-teal-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>{phoneDisplay}</span>
                  </span>
                </a>
                <a href="/quote/" className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg border-2 border-cyan-400/40 hover:border-cyan-400/70 transition-all hover:scale-105 shadow-lg">
                  <span className="flex items-center justify-center gap-2">✨ Get Free Quote</span>
                </a>
              </div>

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

            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 rounded-[3rem] blur-3xl transform rotate-6 scale-110"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-700" style={{ perspective: "1500px" }}>
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-teal-400/30 shadow-2xl shadow-teal-500/30 backdrop-blur-sm bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
                    <img src="/services/popcorn-ceiling-removal/1.webp" alt="Streetsville popcorn ceiling removal Level 5 smooth finish" loading="eager" className="w-full h-auto object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-500 to-green-600 p-6 rounded-3xl shadow-2xl border-2 border-emerald-300/50 transform hover:scale-110 transition-transform hover:rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">✨</div>
                      <div>
                        <p className="font-black text-white text-xl">Level 5</p>
                        <p className="text-sm text-emerald-100 font-semibold">Smooth</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl border-2 border-cyan-300/50 transform hover:scale-110 transition-transform hover:-rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">🏘️</div>
                      <div>
                        <p className="font-black text-white text-xl">Heritage</p>
                        <p className="text-sm text-cyan-100 font-semibold">Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/3 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute -z-10 bottom-1/3 -left-16 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Heritage Home Expertise</h3>
              <p className="text-gray-600 mt-2">Careful handling of older plaster, mixed substrates, and heritage architecture along Queen St corridor.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">HEPA Dust Control</h3>
              <p className="text-gray-600 mt-2">Sealed containment, vacuum-assist sanding, and air filtration keep village homes clean during work.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
              <p className="text-gray-600 mt-2">Full-field skim, raking-light inspection, stain-block primer for uniform brightness in period homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((src, i) => (
              <img key={i} src={src} alt={`Popcorn ceiling removal in a Streetsville home — project ${i + 1}`} className="w-full h-56 object-cover rounded-2xl border shadow" data-lightbox="true" />
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL INSIGHT */}
      <section id="local" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Popcorn ceiling removal for Streetsville heritage homes</h2>
            <p>
              Streetsville's heritage character brings unique challenges—older plaster substrates, mixed drywall repairs, and ceiling heights that vary room to room. Our approach respects period architecture: we test surfaces carefully, protect original millwork, and choose scrape-or-encapsulate methods based on substrate condition. The result is a Level 5 smooth finish that honors your home's history while delivering modern, flat ceilings.
            </p>
            <p>
              Along Queen St S, Thomas St, and near the Credit River, older homes often have painted texture with multiple coats. We test adhesion first. When scraping risks damage to plaster below, we encapsulate safely then full-field skim for raking-light perfection. Every transition, pot-light ring, and previous patch is feathered wide so imperfections disappear after stain-block primer.
            </p>
            <p>
              Village parking and narrow streets require coordinated material drops and tidy staging. We communicate clearly: written scope before start, photo updates during, punch-list walk-through at handover. WSIB and liability insured with 3-year workmanship warranty on every Streetsville project.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Streetsville ceiling services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {title: "Popcorn ceiling removal service Streetsville", copy: "Heritage-safe protection, substrate testing, scrape or encapsulate, Level 5 skim, stain-block primer, paint-ready handoff."},
              {title: "Popcorn ceiling removal contractor Streetsville", copy: "We coordinate millwork protection, pot lights, plaster repairs so you have one heritage-aware crew."},
              {title: "Ceiling resurfacing Streetsville", copy: "Smooth ceiling contractor Streetsville workflows for Queen St homes, Credit River properties, village renovations."},
            ].map((svc) => (
              <div key={svc.title} className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-4">🏘️</div>
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
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Pricing & schedule</p>
              <h2 className="text-3xl font-bold mt-2">Popcorn ceiling removal cost Streetsville homes expect</h2>
              <p className="mt-4 text-slate-200">
                Popcorn removal cost Streetsville village homes typically ranges $6–$8/sq ft for standard texture. Heritage homes with plaster substrates or multiple paint layers needing encapsulation + Level 5 skim run $8–$10/sq ft.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Method", "Scrape or encapsulate + Level 5"],
                ["Finish", "Stain-block primer paint-ready"],
                ["Warranty", "3 years workmanship"],
                ["Heritage", "Plaster-safe techniques"],
              ].map(([label, value]) => (
                <div key={label} className="p-4 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-xs uppercase tracking-wide text-indigo-200">{label}</p>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105" href="/quote/">Get estimate</a>
            <a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105" href={phoneHref}>Call {phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Streetsville projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {title: "Queen St S Heritage Home", near: "village core", scope: "Plaster substrate; careful encapsulation; Level 5 skim; stain-block primer.", duration: "3 days", outcome: "Smooth finish respecting original millwork and period details."},
              {title: "Thomas St Semi-Detached", near: "east of Creditview", scope: "Painted texture scrape; pot-light blending; prime; paint-ready.", duration: "2 days", outcome: "Bright, even ceiling through hallway and living areas."},
              {title: "Credit River Area Custom", near: "south of Britannia", scope: "Mixed drywall; full skim; raking-light checks; primer for homeowner paint.", duration: "2.5 days", outcome: "Flat surface under natural light from large windows."},
            ].map((cs, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border">
                <p className="text-sm uppercase tracking-wide text-teal-600">{cs.near}</p>
                <h3 className="mt-2 text-xl font-semibold">{cs.title}</h3>
                <p className="mt-3 text-gray-700"><strong>Scope:</strong> {cs.scope}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {cs.duration}</p>
                <p className="text-gray-700"><strong>Result:</strong> {cs.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8">Streetsville FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {q: "Do you work in Streetsville heritage homes with plaster ceilings?", a: "Yes. We handle older plaster and mixed drywall carefully. If substrate is fragile, we encapsulate safely then Level 5 skim for smooth results."},
              {q: "Can you blend pot-light rings and old patches in period homes?", a: "We feather wide during full-field skim so rings and patches disappear after stain-block primer, maintaining period character."},
              {q: "How do you protect original millwork and heritage details?", a: "Floor-to-ceiling masking, careful staging around trim, and dust containment protect heritage features during popcorn ceiling removal Streetsville projects."},
              {q: "How much does popcorn ceiling removal cost in Streetsville?", a: "Popcorn ceiling removal cost Streetsville ranges $6-$8/sq ft standard, $8-$10/sq ft for heritage homes with plaster or multiple paint layers."},
              {q: "How long does a Streetsville village home project take?", a: "Most village homes take 2-3 days: day 1 protection & texture removal, day 2 Level 5 skim & sand, day 3 prime. We coordinate around your schedule."},
              {q: "Do you test for asbestos in older Streetsville homes?", a: "Yes. For homes built before 1990 we recommend testing. If positive, we encapsulate safely rather than scrape."},
              {q: "Can you work in narrow streets and limited parking areas?", a: "We coordinate material drops, respect village parking rules, and keep staging minimal for tight Queen St and Thomas St access."},
              {q: "What's your warranty for Streetsville heritage projects?", a: "3-year workmanship warranty covering cracks, tape lifts, finish quality. WSIB and liability insured for heritage property protection."},
              {q: "Do you handle varying ceiling heights in older homes?", a: "Yes. We feather transitions between different ceiling heights and blend additions to original rooms for seamless results."},
              {q: "Can you coordinate with heritage designation requirements?", a: "We work with homeowners to meet heritage guidelines, using reversible methods and protecting designated features."},
              {q: "What areas of Streetsville do you serve?", a: "We cover all Streetsville including Queen St S, Thomas St, Credit River area, Britannia corridor, and Creditview neighborhoods."},
              {q: "Do you handle stipple ceiling removal in Streetsville?", a: "Yes. Stipple ceiling removal Streetsville follows same process—test, scrape or encapsulate, Level 5 skim, prime for uniform smooth finish."},
            ].map((faq) => (
              <details key={faq.q} className="p-6 bg-white rounded-3xl border">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section id="keywords" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-4">Searches we hear in Streetsville</h2>
          <p className="text-gray-700 leading-relaxed">
            popcorn ceiling removal Streetsville • popcorn ceiling contractor Streetsville • popcorn ceiling removal contractor Streetsville • professional popcorn ceiling removal Streetsville • popcorn ceiling removal service Streetsville • smooth ceiling contractor Streetsville • ceiling texture removal Streetsville • stipple ceiling removal Streetsville • ceiling resurfacing Streetsville
          </p>
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section id="neighbourhoods" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Explore popcorn ceiling removal across Mississauga</h2>
          <p className="mt-2 text-center text-gray-600 mb-8">Compare nearby neighborhoods and services</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/popcorn-ceiling-removal/mississauga/" className="p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg text-teal-600">← All Mississauga areas</h3>
              <p className="text-sm text-gray-600 mt-2">Citywide popcorn ceiling removal Mississauga services</p>
            </Link>
            <Link href="/popcorn-ceiling-removal/mississauga/meadowvale/" className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg">Meadowvale</h3>
              <p className="text-sm text-gray-600 mt-2">Popcorn ceiling removal Meadowvale suburban homes</p>
            </Link>
            <Link href="/popcorn-ceiling-removal/mississauga/erin-mills/" className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg">Erin Mills</h3>
              <p className="text-sm text-gray-600 mt-2">Popcorn ceiling removal Erin Mills family homes</p>
            </Link>
            <Link href="/popcorn-ceiling-removal/mississauga/cooksville/" className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg">Cooksville</h3>
              <p className="text-sm text-gray-600 mt-2">Popcorn ceiling removal Cooksville central residential</p>
            </Link>
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
              <h3 className="text-3xl md:text-4xl font-black">Ready for popcorn ceiling removal in Streetsville?</h3>
              <p className="text-xl text-white/90 mt-2">Get a Level 5 smooth finish from heritage-aware ceiling specialists</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a className="inline-flex items-center justify-center px-8 py-5 bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105" href={phoneHref}>📞 {phoneDisplay}</a>
              <a className="inline-flex items-center justify-center px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105" href="/quote/">Get Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex flex-wrap gap-4 text-sm justify-center" aria-label="Related services">
            <Link href="/popcorn-ceiling-removal/mississauga/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">← Mississauga popcorn ceiling removal</Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/mississauga/meadowvale/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">Meadowvale popcorn ceiling removal </Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/mississauga/erin-mills/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">Erin Mills popcorn ceiling removal </Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/mississauga/cooksville/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">Cooksville popcorn ceiling removal </Link>
          </nav>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-teal-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a href={phoneHref} className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">📞 Call</a>
          <a href="/quote/" className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">Quote</a>
        </div>
      </div>
    </>
  );
}
