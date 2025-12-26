// app/popcorn-ceiling-removal/mississauga/cooksville/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Cooksville, Mississauga | Level 5, Dust-Controlled",
  description:
    "Cooksville popcorn ceiling removal around Dundas, Hurontario and Cawthra. Safe scrape or encapsulation, Level 5 skim, stain-block primer, and a bright, even finish. Insured + 3-year warranty.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/cooksville/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Cooksville, Mississauga",
    description:
      "Residential popcorn removal in Cooksville: clean protection, Level 5 skim, prime & paint-ready. Trusted crew, predictable schedule.",
    url: "/popcorn-ceiling-removal/mississauga/cooksville/",
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
        areaServed: "Cooksville, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/cooksville/",
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
            name: "Cooksville",
            item: "/popcorn-ceiling-removal/mississauga/cooksville/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you work in stages so bedrooms or kitchen stay usable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We isolate rooms, keep routes protected, and tidy daily so the house keeps moving.",
            },
          },
          {
            "@type": "Question",
            name: "Do you blend old patches and pot-light rings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather during the Level 5 skim so edges vanish after primer.",
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
      <header className="max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white p-8 md:p-12 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="w-64 h-64 bg-white rounded-full blur-3xl absolute -top-10 -right-10"></div>
            <div className="w-72 h-72 bg-pink-400 rounded-full blur-3xl absolute bottom-0 left-0"></div>
          </div>
          <div className="relative z-10 flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:gap-10">
            <div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-purple-200">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Cooksville • Mississauga
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Dundas & Hurontario Corridor
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-5">
                Popcorn Ceiling Removal Crafted for Cooksville Homes & Condos
              </h1>
              <p className="mt-4 text-lg text-purple-100">
                Split-levels off Confederation Pkwy, Camilla bungalows, and new
                condo walkthroughs near Hurontario all get the same{" "}
                <strong>Level 5 finish</strong>. We control dust in tight
                driveways, stage materials near Cooksville GO, and keep rooms
                usable between school runs.
              </p>
              <p className="mt-4 text-base text-purple-100">
                Our professional popcorn ceiling removal Cooksville specialists
                are the popcorn ceiling contractor Cooksville neighbours refer
                to because the same crew shows up every time. When schedules are
                tight, that popcorn ceiling removal contractor Cooksville trusts
                can stage containment before breakfast and keep the evening calm.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={phoneHref}
                  className="btn-cta shadow-lg bg-white text-indigo-900 hover:bg-purple-50"
                >
                  📞 {phoneDisplay}
                </a>
                <a
                  href="/quote/"
                  className="btn-cta bg-transparent border border-white/70 text-white hover:bg-white/10"
                >
                  Get my quote
                </a>
                <p className="text-sm text-purple-200">
                  Fast photo estimate • Written 3-year warranty
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/services/popcorn-ceiling-removal/3.webp"
                alt="Cooksville crew using HEPA sander on popcorn ceiling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/80 text-indigo-900 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.3em]">
                HEPA Sander On Site
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Average main floor",
                    value: "2–3 days",
                    note: "Room-by-room so hallways stay open.",
                  },
                  {
                    label: "Dust control",
                    value: "Sealed & HEPA",
                    note: "Floors, vents and returns protected start to finish.",
                  },
                  {
                    label: "Local logistics",
                    value: "5 km radius",
                    note: "Paint pick-ups from Burnhamthorpe & Dundas suppliers.",
                  },
                  {
                    label: "Work windows",
                    value: "7am–7pm",
                    note: "Quiet-hour friendly for condo/high-rise slots.",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/90 text-indigo-900 p-4 shadow-lg"
                  >
                    <p className="text-xs uppercase tracking-wider text-indigo-500">
                      {stat.label}
                    </p>
                    <p className="text-xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-indigo-700">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <nav className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          {[
            ["#highlights", "Why us"],
            ["#details", "Local details"],
            ["#homes", "Home types"],
            ["#workflow", "Workflow"],
            ["#resources", "Local resources"],
            ["#pricing", "Pricing"],
            ["#signals", "Landmarks"],
            ["#cases", "Projects"],
            ["#faq", "FAQs"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="mt-12 py-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
              Why Cooksville homeowners call us
            </p>
            <h2 className="text-3xl font-bold mt-3">
              Downtown convenience, boutique drywall finish
            </h2>
            <p className="text-gray-600 mt-2">
              Purpose-built workflows for mid-century bungalows, split-levels
              and densest transit corridors in Mississauga.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🚈",
                title: "Transit-Friendly Staging",
                copy:
                  "Tight driveways near Confederation Pkwy? We stage materials at Cooksville GO parking and roll in only what’s needed each day.",
              },
              {
                icon: "🧱",
                title: "Mixed Ceilings Solved",
                copy:
                  "Older plaster meets new drywall in Cooksville additions. We skim entire fields so transitions disappear under raking light.",
              },
              {
                icon: "🧼",
                title: "True Dust Containment",
                copy:
                  "Zipwalls, negative air movers and HEPA-assist sanding keep pets and families comfortable in compact semis and condo-townhomes.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {card.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE OFFERING */}
      <section id="services" className="mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 font-semibold">
                Service 01
              </p>
              <h3 className="text-2xl font-semibold mt-3">
                Popcorn ceiling removal service Cooksville
              </h3>
              <p className="text-gray-600 mt-3">
                Our popcorn ceiling removal service Cooksville residents choose
                wraps full protection, negative air, and tidy wrap-ups around
                every block from Mississauga Valley to the Queensway. It’s the
                same crew delivering popcorn ceiling removal Cooksville condos,
                semis and rentals rely on when daylight is unforgiving.
              </p>
            </article>
            <article className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 font-semibold">
                Service 02
              </p>
              <h3 className="text-2xl font-semibold mt-3">
                Smooth ceiling contractor Cooksville
              </h3>
              <p className="text-gray-600 mt-3">
                As the smooth ceiling contractor Cooksville neighbours text,
                our lead is also the popcorn ceiling contractor Cooksville
                trades lean on to coordinate pot-light installs. You get a
                dedicated popcorn ceiling removal contractor Cooksville property
                managers know by name plus status updates directly from site.
              </p>
            </article>
            <article className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 font-semibold">
                Service 03
              </p>
              <h3 className="text-2xl font-semibold mt-3">
                Ceiling texture removal Cooksville
              </h3>
              <p className="text-gray-600 mt-3">
                From stipple ceiling removal Cooksville homeowners request after
                pot-light upgrades to ceiling resurfacing Cooksville designers
                specify for modern lofts, we tailor each ceiling texture removal
                Cooksville project with Level 5 skims and stain-block primers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Cooksville — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL DETAILS */}
      <section id="details" className="py-16">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
          <div className="prose max-w-none">
            <h2>Cooksville-specific planning notes</h2>
            <p>
              Houses tucked between Dundas St, Hurontario, Cawthra and the
              Queensway often have decades of paint on the texture plus patch
              seams from electricians prepping for the Hazel McCallion LRT. We
              test each ceiling plane—if scraping risks the gypsum, we stabilize
              and run a full <strong>Level 5 skim</strong> so hallway sightlines
              and bay-window light don’t expose waves.
            </p>
            <p>
              Near Cooksville GO and Hillcrest Ave, parking is limited. We stage
              materials off-site, roll carts in via garages or rear lanes, and
              isolate rooms with plastic to keep condos/townhomes livable.
              Families moving between TL Kennedy, Corsair P.S., or daycare runs
              still have access because we protect the main axis from entry to
              kitchen each day.
            </p>
            <p>
              After the skim, we inspect under raking light at sunrise and dusk
              (when those east-west windows are most unforgiving), feather
              around pot-light trims, then lock everything down with a
              stain-block primer so old nicotine or bath stains never telegraph
              through the new paint.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow border border-gray-100">
            <h3 className="text-xl font-semibold">
              Where we pay extra attention
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
              <li>
                <strong>Dundas Connects builds:</strong> bulkhead tie-ins when
                kitchens were opened up.
              </li>
              <li>
                <strong>Camilla & Jarvis corridors:</strong> narrow stairwells
                with tall walls needing safe staging.
              </li>
              <li>
                <strong>High-rise rentals:</strong> odour and dust migration to
                adjacent units (we work with management ahead of time).
              </li>
              <li>
                <strong>Basement apartments:</strong> fire separations remain
                intact while ceilings are updated.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOME TYPES */}
      <section id="homes" className="py-16 bg-gray-50 rounded-3xl mt-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Cooksville layouts we perfect</h2>
            <p className="text-gray-600 mt-2">
              Whether you’re near Mississauga Valley, King St E, or the
              Queensway, we know how each typology behaves under light.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-3xl shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">
                Classic Builds & Renos
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Post-war bungalows with painted popcorn and patch layers.</li>
                <li>Split-levels where stair lighting exposes seams.</li>
                <li>
                  Mississauga Valley semis with additions tied into original
                  plaster.
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">
                Urban Dwellings & Condos
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Condo-townhomes off Hillcrest and Floradale corridors.</li>
                <li>
                  Rental towers near Cooksville GO needing odour/dust control.
                </li>
                <li>
                  Basement apartments + duplexes that must remain accessible for
                  tenants.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              On-site workflow tuned to Cooksville commutes
            </h2>
            <p className="text-gray-600 mt-2">
              Morning drop-offs, evening GO train returns and condo quiet hours
              are baked into our sequencing.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Protect entries, elevator lobbies, floors and stairs; stage negative air filtration when working in multi-family buildings.",
              "Test each ceiling to decide on scrape vs encapsulation; prep pot-light cutouts, HVAC vents and bulkhead tie-ins.",
              "Full-field Level 5 skim with raking-light checks from windows and corridor LEDs; re-skim seams until they disappear.",
              "Prime with a stain-block system, tidy routes nightly, and perform a walkthrough/hand-off that’s paint-ready or sprayed by us.",
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-white rounded-3xl shadow border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold absolute -top-4 -left-4 shadow-lg">
                  {idx + 1}
                </div>
                <p className="text-gray-700 ml-4">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL RESOURCES */}
      <section
        id="resources"
        className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
              Local Resources
            </p>
            <h2 className="text-3xl font-bold">
              Trusted links for permits, paint & recycling
            </h2>
            <p className="text-gray-600 mt-2">
              The suppliers and municipal references we tap when running Cooksville
              projects.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-3xl shadow border border-white/70">
              <h3 className="text-xl font-semibold">Quality paint counters</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <strong>Benjamin Moore — The Paint People</strong> (Dundas & Dixie)
                  for custom colour matches and Level 5-friendly primers.
                </li>
                <li>
                  <strong>Sherwin-Williams — Dundas East</strong> near Tomken Rd for
                  same-day coatings.
                </li>
                <li>
                  <strong>Home Depot — Mavis & Dundas</strong> for protection
                  supplies, Ram Board and consumables.
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow border border-white/70">
              <h3 className="text-xl font-semibold">Permits & drop-offs</h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
                <li>
                  <strong>City permits & inspections:</strong> Mississauga building
                  counter (Dundas St W) for interior finish clarifications.
                </li>
                <li>
                  <strong>Household hazardous waste:</strong> Peel Region HHW depot
                  on Fewster Dr for mud buckets, primer cans or solvents.
                </li>
                <li>
                  <strong>Drop-off depots:</strong> Cooksville-area Community
                  Recycling Centre (Mavis Rd) for drywall scrap and bagged texture
                  waste.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO SIGNALS */}
      <section id="signals" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Landmarks & micro-areas we know</h2>
            <p className="text-gray-600 mt-2">
              We pre-plan access, parking and staging by block so there are no
              surprises.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Dundas St corridor",
                "Hoisting materials via side yards, timing around peak traffic.",
              ],
              ["Hurontario & LRT works", "Coordination with trades upgrading lighting."],
              [
                "Cooksville GO & Hillcrest",
                "Tight visitor parking, elevator bookings and condo quiet hours.",
              ],
              [
                "Mississauga Valley / TL Kennedy area",
                "Long hallway sightlines and natural light from both ends.",
              ],
              [
                "Camilla, Jarvis & Cawthra pockets",
                "Mature trees = low natural light; we add inspection lighting.",
              ],
              [
                "John C. Price & Floradale parks",
                "Split-levels with multiple additions needing uniform finishes.",
              ],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="flex items-start gap-3 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <span className="text-indigo-600 text-xl">▹</span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-600 text-sm">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY FLOW */}
      <section
        id="network"
        className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
              Mississauga network
            </p>
            <h2 className="text-3xl font-bold">
              Cooksville plugged into the wider city
            </h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Explore the main Mississauga smooth-ceiling guide or hop to nearby
              neighbourhood pages, then loop back here when you’re ready to book
              the Cooksville crew.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/popcorn-ceiling-removal/mississauga/",
                title: "Mississauga City Hub",
                copy:
                  "See citywide coverage, pricing signals and process before zooming into Cooksville specifics.",
                cta: "← Back to Mississauga overview",
              },
              {
                href: "/popcorn-ceiling-removal/mississauga/applewood/",
                title: "Applewood Hills & Acres",
                copy:
                  "East of Hurontario with similar painted textures—perfect companion read if you split projects between the areas.",
                cta: "View Applewood projects →",
              },
              {
                href: "/popcorn-ceiling-removal/mississauga/hurontario/",
                title: "Hurontario Corridor",
                copy:
                  "North toward Eglinton/Matheson and the Hazel McCallion LRT where condo towers share our Cooksville crews.",
                cta: "Hurontario ceiling removal →",
              },
              {
                href: "/popcorn-ceiling-removal/mississauga/mineola/",
                title: "Mineola & Port Credit Edge",
                copy:
                  "Custom builds south of the QEW that often finish with the same Cooksville Level 5 workflow.",
                cta: "Explore Mineola finishes →",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {card.copy}
                </p>
                <span className="mt-4 inline-flex items-center text-indigo-600 font-semibold group-hover:underline">
                  {card.cta}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 rounded-3xl bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-indigo-300">
                Pricing & schedule
              </p>
              <h2 className="text-3xl font-bold mt-2">
                Cost clarity for busy Cooksville projects
              </h2>
              <p className="text-slate-200 mt-3">
                We publish the popcorn ceiling removal cost Cooksville
                homeowners should expect before booking so there’s no guessing
                when school runs, rentals or condo boards are involved.
              </p>
              <p className="text-slate-200 mt-3">
                For fresh texture, the popcorn removal cost Cooksville clients see in
                photo estimates typically lands between $6–$7 per sq ft because scraping
                is efficient. When multiple paint layers or plaster repairs are involved,
                the cost to scrape popcorn ceiling Cooksville properties safely averages
                $8–$9 per sq ft since we encapsulate, Level 5 skim, and block stains.
              </p>
              <ul className="mt-4 space-y-3 text-slate-200">
                <li>
                  ✅ 2–3 day runs for main floors with daily tidy and protected
                  kitchen/stair access.
                </li>
                <li>
                  ✅ Condo/high-rise slots booked around elevator times +
                  quiet-hour rules.
                </li>
                <li>
                  ✅ Written schedule + completion checklist so cleaners,
                  painters or movers can follow right after.
                </li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Unpainted texture", "$6–$7 / sq ft", "Fast scrape + skim + primer."],
                [
                  "Painted/encapsulated",
                  "$8–$9 / sq ft",
                  "Controlled removal, Level 5 skim, stain-block primer.",
                ],
                [
                  "Main floor timeline",
                  "2–3 days",
                  "Room-by-room to keep hallways & kitchens open.",
                ],
                [
                  "Warranty",
                  "3 years",
                  "WSIB + liability insured, written handover.",
                ],
              ].map(([label, value, note]) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl border border-white/20 bg-white/5"
                >
                  <p className="text-xs uppercase tracking-wide text-indigo-200">
                    {label}
                  </p>
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-sm text-slate-200">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-cta bg-white text-slate-900" href="/quote/">
              Get your estimate
            </a>
            <a className="btn-cta border border-white/40 text-white" href={phoneHref}>
              Call {phoneDisplay}
            </a>
            <p className="text-sm text-slate-300">
              Includes protection, HEPA dust control, Level 5 skim and primer.
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Recent projects in Cooksville</h2>
            <p className="text-gray-600 mt-2">
              Real schedules, real homes within a few blocks of Dundas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Two-storey near Cawthra",
                near: "Cawthra Rd × Dundas St E",
                scope:
                  "Encapsulated painted popcorn, Level 5 skim across main + second floor, stain-block primer.",
                duration: "3 days",
                outcome:
                  "Living/dining reads flat even with west-facing windows; owners painted on day 4.",
              },
              {
                title: "Bungalow south of Dundas",
                near: "Camilla Rd pocket",
                scope:
                  "Safe scrape where possible, full skim, pot-light ring feathering, primer + touch-up paint.",
                duration: "2.5 days",
                outcome:
                  "Continuous brightness through kitchen-to-den sightline with zero seam shadowing.",
              },
              {
                title: "Stairwell & landing refresh",
                near: "Hurontario transit corridor",
                scope:
                  "Portable scaffold, skim + sand tall walls, block stains, spray-ready finish.",
                duration: "1.5 days",
                outcome:
                  "Crisp returns and uniform sheen even under new LED strips.",
              },
            ].map((cs, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm"
              >
                <p className="text-sm uppercase tracking-wide text-indigo-500">
                  {cs.near}
                </p>
                <h3 className="text-xl font-semibold mt-2">{cs.title}</h3>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Scope:</strong> {cs.scope}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Duration:</strong> {cs.duration}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Result:</strong> {cs.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Cooksville</h2>
        {[
          {
            q: "Can you keep rooms accessible?",
            a: "Yes. We sequence rooms, keep routes protected and tidy daily.",
          },
          {
            q: "Do pot-light rings and patches disappear?",
            a: "We feather during Level 5 skim so they vanish after primer.",
          },
          {
            q: "Insurance & warranty?",
            a: "WSIB + liability; written 3-year workmanship warranty.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in Cooksville?
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

      <section className="mt-4">
        <p className="text-sm text-gray-600 text-center">
          <strong>Popular searches near Cooksville:</strong> popcorn ceiling
          Cooksville | popcorn removal Cooksville | scraping popcorn ceiling
          Cooksville | stripping popcorn ceiling Cooksville | taking off popcorn
          ceiling Cooksville | taking down popcorn ceiling Cooksville | take out
          popcorn ceiling Cooksville | get rid of popcorn ceiling Cooksville |
          removing stucco ceiling Cooksville | stucco ceiling removal Cooksville
          | cottage cheese ceiling removal Cooksville | painted popcorn ceiling
          removal Cooksville
        </p>
      </section>

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/popcorn-ceiling-removal/mississauga/"
          className="underline"
        >
          ← Popcorn ceiling removal Mississauga
        </Link>
        <Link href="/popcorn-ceiling-removal/" className="underline">
          Popcorn ceiling removal service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Popcorn ceiling removal services →
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
