import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Etobicoke";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/etobicoke/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const CANONICAL_URL = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const AREAS = [
  "The Kingsway",
  "Islington",
  "Mimico",
  "Humber Bay",
  "Long Branch",
  "Alderwood",
  "Rexdale",
  "Markland Wood",
  "Eatonville",
  "New Toronto",
];

const FAQS = [
  {
    q: "How much does drywall repair cost in Etobicoke?",
    a: "Cost depends on the size of the damage, wall or ceiling location, whether the drywall is wet or soft, how much sanding and priming is needed, and whether painting is included. Send photos for a clearer Etobicoke drywall repair quote.",
  },
  {
    q: "Can you repair ceiling drywall after a leak?",
    a: "Yes. Once the leak source is fixed and the area is dry, EPF can repair or replace the affected ceiling drywall, tape, mud, sand, prime, and prepare it for paint.",
  },
  {
    q: "Can you patch holes left by plumbers or electricians?",
    a: "Yes. We repair plumbing and electrical cutouts in Etobicoke walls and ceilings, including backing, new board where needed, taping, compound, sanding, primer-ready finishing, and access panel advice.",
  },
  {
    q: "Do you paint after drywall repair?",
    a: "We can leave repairs primer-ready or include paint-ready finishing and painting. In visible rooms, repainting a larger section or full wall often blends better than a small touch-up.",
  },
  {
    q: "Can you match popcorn or textured ceilings?",
    a: "Small texture repairs can sometimes be blended, but older popcorn or stipple can be hard to hide perfectly. For larger ceiling damage, smooth refinishing may be cleaner.",
  },
  {
    q: "Do you use dust control?",
    a: "Yes. EPF uses careful protection, controlled sanding, HEPA vacuum systems where practical, and cleanup planning for occupied homes and condos.",
  },
];

export const metadata = {
  title: "Drywall Repair Etobicoke | Ceiling, Water Damage & Patch Repair | EPF Pro Services",
  description:
    "Drywall repair Etobicoke for holes, cracks, ceiling leaks, water damage, plumbing cutouts, HEPA sanding, Level 5 finishing and paint-ready repairs.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: "Drywall Repair Etobicoke | Paint-Ready Wall & Ceiling Repair",
    description:
      "Etobicoke drywall repair for ceiling patches, leaks, cracks, holes, plumbing cutouts, basement repairs and smooth paint-ready finishing.",
    url: CANONICAL_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function SeoJsonLd() {
  const baseServiceUrl = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
  const mainServiceUrl = BASE_URL
    ? `${BASE_URL}/services/drywall-repair/`
    : "/services/drywall-repair/";
  const quoteUrl = BASE_URL ? `${BASE_URL}/quote/` : "/quote/";
  const providerUrl = BASE_URL ? `${BASE_URL}/` : "/";

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${SERVICE} in ${CITY}`,
      serviceType: [
        "Drywall Repair",
        "Ceiling Drywall Repair",
        "Water Damage Drywall Repair",
        "Drywall Patch Repair",
        "Drywall Repair After Plumbing",
        "Basement Drywall Repair",
      ],
      provider: {
        "@type": "LocalBusiness",
        name: "EPF Pro Services",
        telephone: phoneText,
        url: providerUrl,
        image: `${BASE_URL}/logo.png`,
        priceRange: "$$",
        sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
      },
      areaServed: { "@type": "City", name: CITY },
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
          name: "Drywall Repair Services",
          item: { "@id": mainServiceUrl },
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
  return (
    <>
      <SeoJsonLd />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/gallery/drywall-repair/drywall-repair-service00001.webp"
            alt="Drywall repair Etobicoke wall patch with smooth finish"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Etobicoke drywall repair
            </p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
              Drywall Repair Etobicoke
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-100 leading-relaxed">
              Ceiling drywall repair, water damage repair, plumbing and
              electrical cutout patching, basement drywall repair, dust control,
              and smooth paint-ready finishing for Etobicoke homes and condos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
              >
                Send Photos for a Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Call {phoneText}
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["HEPA sanding", "Ceiling repair", "Water damage", "3-year warranty"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm font-semibold"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Fast quote checklist
              </p>
              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                What to Send for a Fast Etobicoke Quote
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                Send a wide room photo, close-up photos of each damaged area,
                approximate hole or crack size, whether the drywall is wet or
                dry, and whether you want repair only, primer-ready, or painted
                completion. Ceiling height, condo access rules, parking notes,
                and timing also help us quote accurately.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Wall or ceiling location",
                  "Hole, crack, stain, soft drywall, or trade cutout",
                  "Smooth, popcorn, stipple, or painted texture",
                  "Whether plumbing or electrical work is complete",
                  "Whether painting should be included",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8 shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900">
              Common Drywall Repairs We Handle in Etobicoke
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Ceiling drywall repair", "Leak stains, plumbing access holes, cracks around seams, pot light changes, and smooth ceiling patching."],
                ["Water damage drywall repair", "Cutting out soft drywall, checking moisture, replacing damaged board, stain-blocking, sanding, and priming."],
                ["Drywall repair after plumbing/electrical work", "Patching square cutouts after trades finish, adding backing, taping, mudding, sanding, and access panel advice."],
                ["Basement drywall repair", "Finished basement wall and ceiling repairs after leaks, drain work, utility access, and renovation openings."],
                ["Drywall crack and tape repair", "Reinforcing failed seams, loose tape, corner cracks, settlement cracks, and cracks before repainting."],
                ["Paint-ready finishing", "Feathered coats, controlled sanding, primer-ready handoff, and repainting advice so repairs do not flash through paint."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                Our Etobicoke Drywall Repair Process
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                EPF starts by protecting floors, walls, furniture, and access
                paths. We remove loose material, confirm whether drywall is dry
                and stable, add backing where needed, install new board for
                larger openings, tape seams, apply controlled compound coats,
                sand with dust control, prime raw compound or stains, and leave
                the repair ready for paint.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                Ceiling work receives extra attention because light shows
                ridges and low spots quickly. Water damage is repaired only
                after the source is corrected. Trade cutouts are reviewed for
                access panel options before we close the wall permanently.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Areas We Serve in Etobicoke</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {AREAS.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold"
                  >
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-300">
                We also serve nearby West Toronto, Mississauga, North York, and
                GTA service areas for drywall repair and finishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Related drywall repair guides
              </p>
              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Helpful Reading Before You Book
              </h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["/blog/drywall-repair-vs-replacement/", "Repair vs Replacement", "When to patch, cut out, replace, or refinish drywall."],
                ["/blog/drywall-repair-after-plumbing-electrical-work/", "Plumbing & Electrical Cutouts", "How trade openings are patched properly."],
                ["/blog/ceiling-crack-drywall-repair/", "Ceiling Crack Repair", "Why cracks come back after painting."],
                ["/blog/why-drywall-patches-show-through-paint/", "Visible Patch Lines", "Why drywall patches show after paint."],
              ].map(([href, title, desc]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-700">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-4xl font-bold text-slate-900">
              Etobicoke Drywall Repair FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <summary className="cursor-pointer font-bold text-slate-900">
                    {faq.q}
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Send Photos for Drywall Repair in Etobicoke
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-slate-300">
              EPF can review your wall or ceiling damage and advise whether the
              right next step is a patch, access panel, cut-out replacement,
              ceiling skim, primer-ready finish, or paint-ready repair.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
              >
                Request a Drywall Repair Quote
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Call {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
