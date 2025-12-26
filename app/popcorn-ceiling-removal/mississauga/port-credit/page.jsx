// app/popcorn-ceiling-removal/mississauga/port-credit/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal Port Credit, Mississauga | Residential Level 5",
  description:
    "Residential popcorn ceiling removal in Port Credit: dust-contained workflow, Level 5 skim, stain-block primer and a bright, even finish. Clear scope, tidy crew, written warranty.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/port-credit/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Port Credit, Mississauga",
    description:
      "Port Credit homes: dust-controlled popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/popcorn-ceiling-removal/mississauga/port-credit/",
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
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "Port Credit, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/port-credit/",
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
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Port Credit",
            item: "/popcorn-ceiling-removal/mississauga/port-credit/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work clean in occupied homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Rooms are sealed, floors protected end-to-end, vents masked, and sanding tools are connected to HEPA vacuums.",
            },
          },
          {
            "@type": "Question",
            name: "What if the popcorn was painted many times?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a discreet area first. If scraping risks damage, we safely encapsulate, then perform a Level 5 skim for a flat, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle pot-light cutouts, patches and stains?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We feather around fixtures and seams during the skim, then use stain-blocking primer so everything reads uniformly bright.",
            },
          },
          {
            "@type": "Question",
            name: "Is your work insured and warrantied?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We carry WSIB and liability coverage and provide a written 3-year workmanship warranty with every job.",
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

export default function Page() {
  // Pull Mississauga signals if present
  let miss = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="md:flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal Port Credit Mississauga Lakeside Pros
            </h1>
            <p className="mt-3 text-gray-700">
              Our popcorn ceiling contractor Port Credit crew handles bungalows,
              semis, townhomes and custom builds near Lakeshore and Hurontario.
              Expect professional popcorn ceiling removal Port Credit residents
              trust: dust-contained scraping or encapsulation, a{" "}
              <strong>Level 5 skim</strong>, and a bright, modern{" "}
              <strong>paint-ready</strong> surface. As the smooth ceiling
              contractor Port Credit homeowners call first, we lock in scope,
              schedule, and tidy daily wrap-ups before we start.
            </p>
            <p className="mt-2 text-gray-700">
              Need a popcorn ceiling removal service Port Credit wide? We’re the
              local team, WSIB-insured, and on call for fast quotes.
            </p>
          </div>

          {/* RIGHT CTAs (both blue) */}
          <div className="md:ml-auto flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
            </a>
            <a
              href="/quote/"
              aria-label="Open quote form"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md active:brightness-95 transition"
            >
              Get my quote
            </a>
          </div>
        </div>

        {/* in-page nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#why" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#local" className="underline-offset-2 hover:underline">
            Local details
          </a>
          <a href="#cases" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing & schedule
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQs
          </a>
        </nav>
      </header>

      {/* CONTACT FORM - ENHANCED */}
      <section className="mt-8 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-10 rounded-3xl shadow-2xl">
        {/* Animated background elements */}
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
              Get Your Port Credit Popcorn Ceiling Removal Quote
            </h2>
            
            <p className="mt-4 text-white/90 text-lg leading-relaxed">
              Condos near the marina, bungalows south of Lakeshore, and
              townhomes off Stavebank—we reply same-day with Level 5 scope,
              schedule, and dust-control notes.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-xl">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-lg">2–3 Day Main Floors</h4>
                  <p className="text-white/80 text-sm">HEPA containment keeps your home clean while we work</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-xl">
                  ✨
                </div>
                <div>
                  <h4 className="font-bold text-lg">Level 5 Smooth Finish</h4>
                  <p className="text-white/80 text-sm">Controlled scrape or encapsulate + full-field skim coat</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-lg">Local Port Credit Experts</h4>
                  <p className="text-white/80 text-sm">Familiar with Lakeshore Rd E, Hurontario, Stavebank corridors</p>
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
                <span className="text-sm font-semibold">✓ Licensed Contractor</span>
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
      </section>

      {/* WHY (sales bullets) */}
      <section id="why" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          [
            "Dust-Controlled in Lived-In Homes",
            "Full containment, floor & stair protection, vent masking, HEPA vacuum-assist sanding.",
          ],
          [
            "True Level 5 Smooth",
            "Full-field skim, raking-light checks from windows and long sightlines, stain-block primer.",
          ],
          [
            "Repairs, Pot-Lights & Patches",
            "Cutouts, seams and old repairs are feathered so they disappear after primer.",
          ],
        ].map(([h, t]) => (
          <div key={h} className="card p-6 bg-white">
            <h3 className="text-xl font-semibold">{h}</h3>
            <p className="text-gray-600 mt-2">{t}</p>
          </div>
        ))}
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Port Credit popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS (long, residential-focused) */}
      <section id="local" className="prose max-w-none mt-10">
        <h2>Local Details for Port Credit Homes</h2>
        <p>
          Port Credit’s lakeside light is beautiful—and unforgiving. Morning sun
          pouring through large windows can highlight ceiling waves and joint
          shadows, especially in older bungalows and side-splits just north and
          east of the marina. Our workflow is designed for{" "}
          <strong>occupied homes</strong>: we isolate work rooms with plastic
          containment, protect hardwood and tile from entry to work area, mask
          vents, and run vacuum-assist sanding to keep dust down while families
          continue their day. If your ceiling texture has been{" "}
          <strong>painted many times</strong>, we’ll test first. When scraping
          risks damage, we use <strong>controlled encapsulation</strong>{" "}
          followed by a full Level 5 skim so the surface reads flat—even under
          raking light. It’s professional popcorn ceiling removal Port Credit
          homeowners rely on, even while the house stays occupied.
        </p>
        <p>
          Many Port Credit houses have <strong>pot-light upgrades</strong> and
          past patches from electrical or plumbing work. We eliminate
          telegraphing seams by skimming full fields (not just spot repairs),
          feathering wide, and checking from windows and corridor sightlines.
          After inspection, we prime with a{" "}
          <strong>stain-blocking system</strong> to lock down old water marks or
          nicotine. When we deliver ceiling texture removal Port Credit
          projects, we treat every wall transition and light cutout the same
          way, which is why stipple ceiling removal Port Credit homeowners
          request from us always reads even once painted. You get a uniform,
          bright, modern ceiling that’s ready for your finish paint (or we can
          spray the ceiling for you).
        </p>
        <p>
          Home access and parking off <em>Lakeshore Rd E</em> can be tight—our
          crews plan material drops to avoid blocking driveways and we keep
          daily wrap-ups neat so rooms return to use each evening. Communication
          is simple: a clear written scope before we start,{" "}
          <strong>daily photo updates</strong> during the job, and a punch-list
          walk-through before handover. We’re WSIB and liability insured, and
          every project includes a <strong>3-year workmanship warranty</strong>.
          That ceiling resurfacing Port Credit homeowners ask for is always
          documented, warrantied, and delivered by the same crew start to
          finish.
        </p>
        <p>
          Because we run the same crew between the marina and Clarkson village,
          you can preview nearby{" "}
          <Link
            href="/popcorn-ceiling-removal/mississauga/clarkson/"
            className="text-blue-600 underline font-medium"
          >
            Clarkson ceiling removal projects
          </Link>{" "}
          to see how we treat similar split-levels and lakeside bungalows before
          we start in Port Credit.
        </p>
      </section>

      {/* Authority flow to city + neighbours */}
      <section className="mt-10 bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">
            Mississauga Popcorn Ceiling Removal + nearby neighbourhood crews
          </h2>
          <p className="mt-2 text-gray-700">
            Authority flows up to the{" "}
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="text-blue-600 underline font-medium"
            >
              Mississauga popcorn ceiling removal 
            </Link>{" "}
            and back down to the lakefront communities we serve every week.
            Browse the three closest neighbourhood teams for more photos,
            schedules, and workflow notes.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="group block h-full"
            >
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-lg transition">
                <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold">
                  City Hub
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  Mississauga popcorn ceiling removal
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  All neighbourhoods, condo towers, and scheduling info for the
                  city-wide crew.
                </p>
                <span className="mt-3 inline-flex items-center text-blue-600 font-semibold">
                  Explore Mississauga popcorn removal services →
                </span>
              </div>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/clarkson/"
              className="group block h-full"
            >
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-lg transition">
                <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">
                  5 min west
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  Clarkson ceiling removal projects
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Lakeshore bungalows and Rattray Marsh splits with Level 5
                  skim-coat detail.
                </p>
                <span className="mt-3 inline-flex items-center text-blue-600 font-semibold">
                  Clarkson popcorn ceiling removal →
                </span>
              </div>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/lorne-park/"
              className="group block h-full"
            >
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-lg transition">
                <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">
                  7 min west
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  Lorne Park smooth ceiling specialists
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Estate homes, cathedral spans, and premium painted finishes in
                  Lorne Park.
                </p>
                <span className="mt-3 inline-flex items-center text-blue-600 font-semibold">
                     Lorne Park popcorn ceiling removal →
                </span>
              </div>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/lakeview/"
              className="group block h-full"
            >
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-lg transition">
                <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">
                  5 min east
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  Lakeview popcorn ceiling resurfacing
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Applewood Acres renos, cottages, and custom builds near the
                  new Lakeview Village.
                </p>
                <span className="mt-3 inline-flex items-center text-blue-600 font-semibold">
                  Lakeview popcorn ceiling removal →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Searches block for light-use keywords */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Searches we hear in Port Credit
        </h2>
        <p className="text-gray-700 mt-2">
          Homeowners near the marina often Google different phrases before they
          end up calling us. Here are the exact searches we see once or twice
          each week, so you know you’re in the right place.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            "popcorn ceiling Port Credit",
            "popcorn removal Port Credit",
            "scraping popcorn ceiling Port Credit",
            "stripping popcorn ceiling Port Credit",
            "taking off popcorn ceiling Port Credit",
            "taking down popcorn ceiling Port Credit",
            "take out popcorn ceiling Port Credit",
            "get rid of popcorn ceiling Port Credit",
            "removing stucco ceiling Port Credit",
            "stucco ceiling removal Port Credit",
            "cottage cheese ceiling removal Port Credit",
            "painted popcorn ceiling removal Port Credit",
          ].map((term) => (
            <li key={term} className="px-3 py-2 bg-slate-50 rounded-xl border">
              “{term}”
            </li>
          ))}
        </ul>
      </section>

      {/* CASES (sales proof) */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in Port Credit
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Brick Bungalow Near Waterfront Trail",
              near: "south of Lakeshore Rd E",
              scope:
                "Multiple paint layers on texture; safe encapsulation; full Level 5 skim throughout main; stain-block prime.",
              duration: "3 days",
              outcome:
                "Ceilings read flat in strong window light; owners painted next day.",
            },
            {
              title: "Side-Split Off Stavebank Rd",
              near: "west of Hurontario",
              scope:
                "Pot-light cutouts blended; full-field skim in living/dining; raking-light checks; prime.",
              duration: "2.5 days",
              outcome:
                "No joint shadows down hallway sightlines; bright, even finish.",
            },
            {
              title: "Townhome North of the Marina",
              near: "Port St E area",
              scope:
                "Scrape where safe, encapsulate where needed; Level 5 skim to unify; prime for sprayed ceiling.",
              duration: "3–3.5 days",
              outcome:
                "Premium finish across open plan and stairwell without mess.",
            },
          ].map((cs, i) => (
            <div key={i} className="card p-5 bg-white">
              <div className="font-semibold">{cs.title}</div>
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
      </section>

      {/* PRICING & SCHEDULE (sales) */}
      <section id="pricing" className="prose max-w-none mt-10">
        <h2>Pricing & Schedule — How We Quote in Port Credit</h2>
        <p>
          We quote <strong>per project</strong> after a short photo review and,
          if needed, a quick on-site confirmation. Price reflects texture type,
          number of paint layers, access, ceiling height, pot-light/patch
          blending, and total square footage. Typical Port Credit homes fall
          within a predictable range once we confirm method (scrape vs
          encapsulate) and final scope. You receive a written plan, start date,
          and daily milestones so you always know what’s next.
        </p>
        <p>
          Curious about{" "}
          <strong>popcorn ceiling removal cost Port Credit</strong>? We send a
          transparent range after photos, then lock it in following a
          confirmation walk-through so there are no surprises once work starts.
        </p>
        <p>
          If you’re comparing <strong>popcorn removal cost Port Credit</strong>{" "}
          versus full skim, we line-item prep, skim, prime, and paint so you can
          see the difference—including the{" "}
          <strong>cost to scrape popcorn ceiling Port Credit</strong> rooms that
          still allow safe removal.
        </p>
        <ul>
          <li>
            <strong>Fast photo estimate:</strong> text or email us room photos
            for same-day pricing.
          </li>
          <li>
            <strong>Clean daily wrap-ups:</strong> rooms put back each evening;
            minimal disruption.
          </li>
          <li>
            <strong>Finish options:</strong> paint-ready handoff or we spray the
            ceilings to completion.
          </li>
        </ul>
      </section>

      {/* Local Signals (global Mississauga list if present) */}
      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* Extra local trust signals (inline, safe no-data dependency) */}
      {/* Plain-English site workflow (Port Credit) */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          How we work in Port Credit homes
        </h2>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>
            Protect from entry to work area (floor runners/ram board, stairs,
            and doorways).
          </li>
          <li>
            Seal door openings with plastic; mask supply/return vents before
            sanding.
          </li>
          <li>
            Use vacuum-connected sanders (HEPA) and keep windows/doors
            controlled to avoid dust plumes.
          </li>
          <li>
            Test a small spot first. If scraping risks damage, encapsulate
            texture and proceed to a Level 5 skim.
          </li>
          <li>
            Skim full fields, not just patches, so joints don’t telegraph in
            morning sun or down hallway sightlines.
          </li>
          <li>
            Check under raking light from windows and existing fixtures; re-skim
            where needed before primer.
          </li>
          <li>
            Prime with a stain-blocking system if there are past leaks or
            nicotine; leave a uniform, paint-ready surface.
          </li>
          <li>
            Blend around pot-light cutouts and previous repairs so trims sit
            clean and edges don’t flash.
          </li>
          <li>
            Daily tidy: remove debris, sweep/vac pathways, and keep non-work
            rooms usable.
          </li>
          <li>
            Simple comms: written scope before start, photo updates during,
            walk-through at handover.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Port Credit Homes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Will you keep dust out of the rest of the house?",
              a: "Yes. We seal work rooms, protect floors/stairs, mask vents and use HEPA-connected sanders. Non-work areas remain clean.",
            },
            {
              q: "Our ceiling has been painted several times—can it still be smooth?",
              a: "We test first. If scraping risks damage, we encapsulate safely and then Level 5 skim so it reads perfectly flat.",
            },
            {
              q: "Can you coordinate with an electrician for new pot lights?",
              a: "Absolutely. We can patch and blend their cutouts so trims sit clean and edges disappear after primer.",
            },
            {
              q: "How long does a typical main-floor take?",
              a: "Most main floors are 2–3 days depending on paint layers, height, access, and blending requirements.",
            },
            {
              q: "How do you structure quotes for Port Credit ceilings?",
              a: "We review photos, confirm ceiling height and layout, then send a project total that includes containment, skim, primer, and optional finish paint so you understand every line item.",
            },
            {
              q: "Do you help with asbestos testing?",
              a: "If the home predates 1980 we can refer local labs before starting professional popcorn ceiling removal in Port Credit.",
            },
            {
              q: "Can basement apartments stay accessible?",
              a: "Yes. We stage room-by-room, run negative air if needed, and coordinate with tenants so routes remain open.",
            },
            {
              q: "Do you work weekends or evenings?",
              a: "We can adjust hours to respect marina traffic, commuter schedules, or condo quiet-time rules when required.",
            },
            {
              q: "How much does popcorn ceiling removal cost in Port Credit?",
              a: "Popcorn ceiling removal cost Port Credit typically ranges $7-$9/sq ft depending on paint layers, ceiling height, and whether we scrape or encapsulate. We provide transparent quotes after reviewing photos.",
            },
            {
              q: "What's included in your Port Credit popcorn removal service?",
              a: "Our popcorn ceiling removal service Port Credit includes full containment, HEPA dust control, Level 5 skim coat, stain-block primer, and a 3-year workmanship warranty. Paint-ready handoff or full finish painting available.",
            },
            {
              q: "Can you handle waterfront condos and townhomes near the marina?",
              a: "Yes. Our popcorn ceiling contractor Port Credit team works in condos, townhomes, and detached homes throughout the waterfront area. We coordinate elevator access and building rules.",
            },
            {
              q: "Do you work with painted popcorn in older Port Credit homes?",
              a: "Absolutely. Painted popcorn ceiling removal Port Credit is our specialty. We test adhesion first, then encapsulate and skim for a perfectly smooth result without damaging the substrate.",
            },
            {
              q: "What areas of Port Credit do you serve?",
              a: "We cover all Port Credit including Lakeshore Rd E, Hurontario St, Stavebank Rd, the marina district, and waterfront neighborhoods. Same smooth ceiling contractor Port Credit crew for all areas.",
            },
            {
              q: "Can you match existing ceiling textures in adjacent rooms?",
              a: "Yes. For ceiling texture removal Port Credit projects where only some rooms get smoothed, we can feather transitions or match knockdown/orange peel in adjacent spaces.",
            },
            {
              q: "Do you handle stipple ceiling removal in Port Credit?",
              a: "Yes. Stipple ceiling removal Port Credit follows the same Level 5 process—test, scrape or encapsulate, full-field skim, prime. The result is equally smooth whether starting from popcorn or stipple.",
            },
            {
              q: "What's your warranty for ceiling resurfacing Port Credit?",
              a: "Our ceiling resurfacing Port Credit projects include a 3-year workmanship warranty covering cracks, tape lifts, and finish quality. We're WSIB and liability insured for your protection.",
            },
          ].map((f, i) => (
            <details key={`${f.q}-${i}`} className="card p-6 bg-white mt-4">
              <summary className="font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in Port Credit?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
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

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/popcorn-ceiling-removal/mississauga/"
          className="text-blue-600 hover:underline font-semibold"
        >
          ← Mississauga popcorn ceiling removal services citywide
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/popcorn-ceiling-removal/mississauga/clarkson/"
          className="text-blue-600 hover:underline font-semibold"
        >
          Clarkson popcorn ceiling removal lakefront bungalows →
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/popcorn-ceiling-removal/mississauga/lorne-park/"
          className="text-blue-600 hover:underline font-semibold"
        >
          Lorne Park popcorn ceiling removal →
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/popcorn-ceiling-removal/mississauga/lakeview/"
          className="text-blue-600 hover:underline font-semibold"
        >
          Lakeview popcorn ceiling removal residential homes →
        </Link>
      </nav>

      {/* Sticky mobile CTA */}
      <div className=" ">
        <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <a href={phoneHref} className="btn-cta flex-1 text-center">
            📞 Call (647) 923-6784
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
