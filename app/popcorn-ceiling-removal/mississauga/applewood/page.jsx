// app/popcorn-ceiling-removal/mississauga/applewood/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Applewood, Mississauga | Level 5 Smooth Ceilings",
  description: "Professional popcorn ceiling removal contractor Applewood Hills & Acres. Expert ceiling texture removal near Bloor St, Dixie Rd & Fieldgate Dr with HEPA dust control. Serving Applewood Mississauga neighborhoods.",
  keywords: ["popcorn ceiling removal applewood", "popcorn ceiling removal applewood hills", "popcorn ceiling removal applewood acres", "ceiling contractor applewood mississauga", "ceiling texture removal applewood", "ceiling resurfacing applewood", "popcorn ceiling near bloor street", "popcorn ceiling dixie road", "stipple ceiling removal applewood", "smooth ceiling contractor applewood", "popcorn ceiling fieldgate drive", "ceiling removal burnhamthorpe"],
  alternates: { canonical: "/popcorn-ceiling-removal/mississauga/applewood/" },
  openGraph: { title: "Popcorn Ceiling Removal Applewood, Mississauga | Level 5 Finish", description: "Trusted popcorn ceiling removal service Applewood Hills & Applewood Acres with dust-controlled workflow. Licensed contractors serving Applewood near Bloor, Dixie & Burnhamthorpe.", url: "/popcorn-ceiling-removal/mississauga/applewood/", type: "website" },
  robots: { index: true, follow: true }
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: "Popcorn Ceiling Removal Applewood", serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5", "Stipple Ceiling Removal"], areaServed: "Applewood, Mississauga, Ontario", url: "/popcorn-ceiling-removal/mississauga/applewood/", potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://epfproservices.com/" }, { "@type": "ListItem", position: 2, name: "Popcorn Ceiling Removal", item: "https://epfproservices.com/popcorn-ceiling-removal/" }, { "@type": "ListItem", position: 3, name: "Mississauga", item: "https://epfproservices.com/popcorn-ceiling-removal/mississauga/" }, { "@type": "ListItem", position: 4, name: "Applewood", item: "https://epfproservices.com/popcorn-ceiling-removal/mississauga/applewood/" }] },
      { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "How much does popcorn ceiling removal cost in Applewood, Mississauga?", acceptedAnswer: { "@type": "Answer", text: "Popcorn ceiling removal cost in Applewood typically ranges from baseline pricing for unpainted textures to 30-40% more for heavily painted ceilings requiring encapsulation. We provide transparent estimates after assessment with firm pricing." } }, { "@type": "Question", name: "Can you keep key rooms available during the project?", acceptedAnswer: { "@type": "Answer", text: "Yes. We plan room-by-room workflow with sealed containment, keeping stairs and key routes protected. Daily cleanup ensures kitchens and bedrooms remain usable." } }] }
    ]
  };
  return <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";

export default function Page() {
  let miss = null;
  for (let i = 0; i < cities.length; i++) if (cities[i].slug === "mississauga") miss = cities[i];
  const images = Array.from({ length: 6 }, (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`);

  return (
    <>
      <JsonLd />

      {/* MODERN HERO WITH IMAGE */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images[0]}
            alt="Professional popcorn ceiling removal Applewood Mississauga - before and after smooth ceiling transformation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-6 text-sm text-white/80">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <Link href="/popcorn-ceiling-removal/" className="hover:underline">
                    Popcorn Ceiling Removal
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li>
                  <Link href="/popcorn-ceiling-removal/mississauga/" className="hover:underline">
                    Mississauga
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li className="font-semibold">Applewood</li>
              </ol>
            </nav>

            <div className="text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  Serving Applewood Hills & Applewood Acres
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Popcorn Ceiling Removal
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Applewood, Mississauga
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Professional <strong>popcorn ceiling removal contractor Applewood</strong> specializing in <strong>Applewood Hills ceiling texture removal</strong>, <strong>stipple ceiling removal near Bloor St</strong>, and <strong>ceiling resurfacing Applewood Acres</strong>. Serving homes near Fieldgate Dr, Dixie Rd, Burnhamthorpe, and throughout Applewood neighborhoods.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span className="mr-2">📞</span>{phoneDisplay}
                </a>
                <a
                  href="/quote/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:scale-105"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Level 5 Smooth Finish</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>HEPA Dust Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>3-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK QUOTE FORM */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-10 shadow-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-blue-500 font-semibold">
                Fast estimate
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Get your Applewood popcorn ceiling quote
              </h2>
              <p className="mt-3 text-gray-600">
                Upload photos, list rooms, and choose your timeline. We reply in
                under 4 hours with Level 5 scope, timing, and dust-control notes
                for Applewood Hills and Applewood Acres homes.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>• Same-day quote with written scope + schedule</li>
                <li>• Level 5 skim + HEPA dust control outlined up front</li>
                <li>• Coordination for painting, pot lights, or drywall patches</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Applewood</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl">
              <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
              <p className="text-gray-600 mt-2">
                Skim full fields; inspect in raking light; uniform reflectance in
                day or LED.
              </p>
            </div>
            <div className="card p-6 bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl">
              <h3 className="text-xl font-semibold">Clean & Tidy</h3>
              <p className="text-gray-600 mt-2">
                Sealed rooms, masked vents, HEPA vacuum-assist sanding; daily
                cleanup.
              </p>
            </div>
            <div className="card p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-2xl">
              <h3 className="text-xl font-semibold">Straightforward Handover</h3>
              <p className="text-gray-600 mt-2">
                Paint-ready finish; simple updates; 3-year workmanship warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">What Applewood Homeowners Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-4">"Hallway and master bedroom done in 2 days. No mess left behind. The smooth finish looks incredible under our LED lights."</p>
              <p className="text-sm font-semibold text-gray-900">— Sarah T., Fieldgate Drive</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-4">"They worked around our schedule and kept the kitchen usable. Quote was exactly what we paid—no surprises."</p>
              <p className="text-sm font-semibold text-gray-900">— Mike R., Applewood Acres</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-4">"Old water stains completely gone. They primed everything and it's been perfect for 2 years now."</p>
              <p className="text-sm font-semibold text-gray-900">— Jennifer L., near Bloor St</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE PROCESS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">How We Work (Applewood)</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Free Quote</h3>
                <p className="text-gray-700">Send us photos and room dimensions. We reply in under 4 hours with firm pricing and timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Protect Your Home</h3>
                <p className="text-gray-700">Seal doorways, cover floors, mask vents. Room-by-room containment keeps the rest of your house clean.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Remove & Smooth</h3>
                <p className="text-gray-700">Scrape or encapsulate (depending on paint layers), then apply Level 5 skim coat. HEPA dust control throughout.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prime & Finish</h3>
                <p className="text-gray-700">Stain-block primer, final inspection, thorough cleanup. Paint-ready surface with 3-year warranty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Applewood Projects</h2>
            <p className="text-gray-600 text-lg">See the transformation from textured to smooth Level 5 finish</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, i) => {
              const altTexts = [
                "Popcorn ceiling removal Applewood Hills - Level 5 smooth finish ceiling texture removal",
                "Professional popcorn removal Applewood Acres - ceiling resurfacing contractor",
                "Stipple ceiling removal Applewood Mississauga - smooth ceiling transformation",
                "Popcorn ceiling contractor Applewood - painted ceiling texture removal service",
                "Ceiling resurfacing Applewood near Bloor St - stucco popcorn removal",
                "Popcorn ceiling removal cost Applewood - affordable ceiling texture removal Dixie Rd area"
              ];
              const projectTitles = [
                "Two-Storey Hallway Near Fieldgate",
                "Main Floor Kitchen & Living",
                "Stairwell with LED Shadows Fixed",
                "Painted Ceiling on Bloor St",
                "Applewood Acres Full Home",
                "Water Damage Repair & Refinish"
              ];
              const projectSubtitles = [
                "Smooth finish, no seam lines",
                "Even reflectance across rooms",
                "Tall surfaces, safe staging",
                "Multiple paint layers handled",
                "Whole-home transformation",
                "Stains blocked, fully restored"
              ];
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={src}
                      alt={altTexts[i]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm font-semibold">{projectTitles[i]}</p>
                      <p className="text-xs mt-1 opacity-90">{projectSubtitles[i]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL DETAILS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Why Applewood Homes Need Special Attention</h2>
            <p>
              Most homes in Applewood Hills and Acres were built in the 60s-80s with popcorn texture that's been painted multiple times over the years. We see this constantly off Fieldgate Dr, Bloor St, Dixie Rd, and Burnhamthorpe—thick paint buildup means we can't always scrape safely.
            </p>
            <p>
              Instead, we do a test patch first. If the paint is heavy or scraping risks damaging drywall, we encapsulate with a bonding coat before applying our Level 5 skim. We also handle old pot light rings, water stains from roof leaks, and seam shadows that show up under LED lighting. Everything gets a stain-blocking primer so nothing bleeds through later.
            </p>
            <p>
              We work room-by-room with sealed containment so your kitchen and bedrooms stay usable. Daily cleanup, clear communication, predictable handoff—that's how we do it.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - ALL COST INFO IN ONE PLACE */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Applewood Pricing (Ballpark)</h2>
            <p className="text-gray-700 mb-4">
              Here's what drives the cost for ceiling work in Applewood:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Standard bedroom (10'×12'):</strong> Unpainted texture is your baseline. This is the simplest job.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Painted ceilings:</strong> Common in Applewood Hills—adds 30-40% because we encapsulate first.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Repair work:</strong> Water damage, cracks, old patches increase scope. We quote after assessment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Whole-home projects:</strong> Bundling multiple rooms reduces per-square-foot pricing significantly.</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Send us photos and dimensions—we'll reply within 4 hours with firm pricing. Most Applewood homes get quotes the same day.
            </p>
          </div>
        </div>
      </section>

      {/* HOME TYPES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold">
              Typical Applewood Homes We Handle
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Two-storey family homes with long hallways that show seam shadows</li>
              <li>Bungalows in Applewood Acres with painted texture throughout</li>
              <li>Open-concept main floors where reflectance needs to match across rooms</li>
              <li>Stairwells and tall landings requiring safe scaffolding</li>
              <li>Basements with old moisture stains or nicotine buildup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ON-SITE WORKFLOW - REMOVED, REPLACED BY NUMBERED PROCESS ABOVE */}

      {/* LOCAL SEO SIGNALS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold">
              Landmarks & Micro-Areas We Know
            </h2>
            <p className="text-gray-700">
              Applewood Hills Park, Burnhamthorpe Rd E, Bloor St, Dixie Rd,
              Fieldgate Dr, Tomken Rd, Willowcreek, Fleetwood, Rathburn Rd E.
              Materials typically sourced via nearby suppliers along
              Dixie/Burnhamthorpe for fast logistics.
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Projects in Applewood</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Two-Storey Near Fieldgate",
                near: "Fieldgate Dr & Bloor St",
                scope: "Encapsulation + Level 5 skim; stain-block primer; paint-ready.",
                duration: "3 days",
                outcome: "Flat ceilings down hallway runs; no seam shadowing.",
              },
              {
                title: "Main Floor Refresh",
                near: "Dixie Rd corridor",
                scope: "Scrape + skim; rings feathered; raking-light checks; primer system.",
                duration: "2.5 days",
                outcome: "Even reflectance across kitchen/living; crisp edges at trims.",
              },
              {
                title: "Stairwell & Landing",
                near: "Burnhamthorpe Rd E area",
                scope: "Safe staging; full skim; stain-block prime; paint-ready finish.",
                duration: "1.5 days",
                outcome: "Uniform look on tall surfaces; tidy daily wrap-ups.",
              },
            ].map((cs, i) => (
              <div key={i} className="card p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="font-semibold text-xl mb-2">{cs.title}</div>
                <div className="text-sm text-blue-600 font-semibold mb-4">{cs.near}</div>
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
      </section>

      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}
      
      {/* FAQ - REMOVED COST QUESTION, CONSOLIDATED ABOVE */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions About Applewood Projects</h2>
          <div className="space-y-4">
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">Can you stage work so bedrooms and kitchen stay available?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Yes. We plan room-by-room workflow with sealed containment, keeping stairs and key routes protected. Daily cleanup ensures kitchens and bedrooms remain usable throughout your project.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">Do you handle old leaks and patch edges?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We feather old patches, blend pot-light rings, repair water damage, and use stain-block primer to prevent bleed-through. Common in aging Applewood homes—we see it constantly.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">What is Level 5 finish?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Level 5 is the highest drywall finish standard—full-field skim coating for uniform texture and light reflection. Eliminates shadows and imperfections visible under modern LED lighting.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">Do you test for asbestos in older homes?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                For pre-1980 homes, we recommend asbestos testing before starting. We coordinate with certified labs and follow appropriate protocols based on results.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">How long does a typical project take?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Most two-storey homes take 2-3 days. Single bedrooms typically complete in 1-1.5 days. Timeline depends on paint layers, repairs needed, and drying conditions.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">Do you offer same-day estimates?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Yes. Most estimates delivered within 4 hours of receiving photos and dimensions. On-site assessments within 24-48 hours for complex projects.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">What's included in your warranty?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                3-year written workmanship warranty on all projects, covering finish quality, adhesion, and structural integrity. WSIB + comprehensive liability insurance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE APPLEWOOD SEO CONTENT - DRASTICALLY REDUCED */}
      <section className="mt-16 container mx-auto px-4 mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl border max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              About Our Applewood Service
            </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Applewood's housing stock is predominantly 1960s-1980s construction—Applewood Hills and Applewood Acres feature painted popcorn that's accumulated multiple layers over the decades. We're specialists in these mid-century homes because we've done hundreds of them locally.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most ceiling challenges in this neighborhood come down to paint buildup, old pot light installations that disturbed the original texture, and settling that creates visible seams under LED lighting. Our approach is straightforward: test a patch, choose scrape or encapsulate based on what's safe, then apply a full Level 5 skim for uniform smoothness.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We also serve nearby Mississauga neighborhoods—<Link href="/popcorn-ceiling-removal/mississauga/erin-mills/" className="text-blue-600 font-semibold hover:underline">Erin Mills</Link>, <Link href="/popcorn-ceiling-removal/mississauga/port-credit/" className="text-blue-600 font-semibold hover:underline">Port Credit</Link>, and <Link href="/popcorn-ceiling-removal/mississauga/streetsville/" className="text-blue-600 font-semibold hover:underline">Streetsville</Link>—with the same crews, quality standards, and warranty. See our full <Link href="/popcorn-ceiling-removal/mississauga/" className="text-blue-600 font-semibold hover:underline">Mississauga service area</Link> for details.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Ready to start?</strong> Whether you're updating a family home near Fieldgate Drive or preparing an Applewood Hills property for sale, we handle the full process from quote to final cleanup.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/quote/" className="text-blue-600 font-semibold hover:underline">Request a quote</Link> with photos and room dimensions, or call <a href={phoneHref} className="text-blue-600 font-semibold hover:underline">{phoneDisplay}</a> to discuss your project. Most estimates delivered within 4 hours with firm pricing and clear timelines.
          </p>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready for a Level 5 smooth ceiling in Applewood?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Fast photo estimate. Clear plan and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-full shadow-xl transition-all hover:scale-105" href={phoneHref}>
                📞 {phoneDisplay}
              </a>
              <a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white font-bold rounded-full transition-all hover:scale-105" href="/quote/">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex flex-wrap gap-3 text-sm justify-center" aria-label="Related pages">
            <Link href="/popcorn-ceiling-removal/mississauga/" className="text-blue-600 hover:underline font-semibold">
              ← Popcorn ceiling removal Mississauga
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/" className="text-blue-600 hover:underline font-semibold">
              All Service Areas
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/services/popcorn-ceiling-removal/" className="text-blue-600 hover:underline font-semibold">
              Main Service Page →
            </Link>
          </nav>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-gray-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a href={phoneHref} className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">
            📞 Call
          </a>
          <a href="/quote/" className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
