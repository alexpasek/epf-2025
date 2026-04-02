import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { CONTACT, SITE_URL } from "@/app/config";
import {
  getAreaServed,
  getDrywallContractorCityPage,
} from "./city-page-data";

const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const EMAIL = CONTACT?.email || "info@epfproservices.com";

function JsonLd({ config }) {
  const baseUrl = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
  const absoluteUrl = `${baseUrl}${config.path}`;
  const areaServed = getAreaServed(config);
  const keywords = [
    `drywall contractor ${config.city}`,
    `drywall company ${config.city}`,
    `drywall services ${config.city}`,
    `local drywall contractors ${config.city}`,
    `drywall finishing ${config.city}`,
    `skim coat drywall ${config.city}`,
    `paint-ready drywall contractor ${config.city}`,
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Drywall Contractor ${config.city}`,
        description:
          `Local drywall contractor in ${config.city} for repairs, smoother walls, damaged drywall replacement, and walls and ceilings that are ready for paint.`,
        serviceType: keywords,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          description:
            `EPF Pro Services is a local drywall contractor in ${config.city} helping with repairs, smoother walls, damaged drywall replacement, and clean ready-for-paint finishes in homes, condos, basements, and commercial interiors.`,
          telephone: PHONE_TEXT,
          email: EMAIL,
          url: baseUrl,
          image: `${baseUrl}/logo.png`,
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "6855 Glen Erin Dr #33",
            addressLocality: "Mississauga",
            addressRegion: "ON",
            postalCode: "L5N 1P6",
            addressCountry: "CA",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${baseUrl}/quote/`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": `${baseUrl}/` },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: { "@id": `${baseUrl}/services/` },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Contractor",
            item: { "@id": `${baseUrl}/services/drywall-contractor/` },
          },
          {
            "@type": "ListItem",
            position: 4,
            name: config.city,
            item: { "@id": absoluteUrl },
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

export default function DrywallContractorCityPage({ slug }) {
  const config = getDrywallContractorCityPage(slug);

  if (!config) {
    return null;
  }

  const keywordTags = [
    `drywall contractor ${config.city}`,
    `drywall company ${config.city}`,
    `local drywall contractors ${config.city}`,
    `drywall finishing ${config.city}`,
    `wall smoothing ${config.city}`,
    `walls ready for paint ${config.city}`,
    `drywall repair ${config.city}`,
    `wall and ceiling repair ${config.city}`,
  ];

  const relatedLinks = [
    ...(config.cityHubLink
      ? [
          {
            href: config.cityHubLink,
            title: `${config.city} service area`,
            text: "City page with neighbourhood coverage and local service details for this area.",
          },
        ]
      : []),
    {
      href: "/services/drywall-contractor/",
      title: "Main drywall contractor page",
      text: "Main page for GTA-wide drywall help and general service questions.",
    },
    {
      href: config.supportLinks.install,
      title: `Drywall installation ${config.city}`,
      text: "Best match when the job is mostly brand-new drywall throughout the space.",
    },
    {
      href: config.supportLinks.repair,
      title: `Drywall repair ${config.city}`,
      text: "Local page for holes, cracks, water damage, and smaller repair jobs.",
    },
    {
      href: "/blog/drywall-contractors-near-me/",
      title: "Drywall contractors near me",
      text: "Simple hiring guide for comparing local drywall companies.",
    },
  ];

  const decisionPoints = [
    {
      title: "When this page is the right fit",
      body:
        "This page fits when the room has a few drywall problems at once. It might have cracked areas, rough patches, cut-outs from plumbing or electrical work, old patch lines that still show, or damaged drywall that has to be replaced before painting can happen.",
    },
    {
      title: "When the install page is the better fit",
      body:
        "If the room has been opened up and needs brand-new drywall almost everywhere, the installation page is usually the better match. That page is more about hanging new sheets, taping, finishing, and moving from open walls to a finished room.",
    },
    {
      title: "When the repair page is the better fit",
      body:
        "If the job is mainly a few holes, one damaged ceiling area, a crack repair, or smaller water damage, the repair page is usually the clearer fit. This contractor page is for broader jobs where the drywall plan needs to cover more than one issue.",
    },
    {
      title: "Why people still choose a contractor page",
      body:
        "A lot of homeowners are not sure which narrow service term describes the job. They just know the room does not look right and they want one company to sort out what needs fixing, what needs replacing, and what needs smoothing before the painters come back.",
    },
  ];

  const roomExamples = [
    {
      title: `${config.city} basement projects`,
      body:
        "Basements often bring a mix of needs at the same time: new drywall in one area, patching in another, boxed-in sections around ductwork or pipes, and cleanup around stairs, corners, and transitions. That is why basement jobs often belong on a contractor page instead of only an installation or repair page.",
    },
    {
      title: `${config.city} kitchen and main-floor changes`,
      body:
        "Main-floor renovations can leave behind vent openings, electrical changes, damaged corners, rough walls around cabinets, and patched areas that still need smoothing. In those cases, the work is usually too broad for a simple patch quote and too mixed for a one-word service label.",
    },
    {
      title: `${config.city} condos and occupied homes`,
      body:
        "In condos and lived-in homes, the drywall work is not only about the wall itself. Access, protection, daily cleanup, and keeping the room usable all matter. People looking at this page are often trying to find a crew that can handle the work cleanly without turning the whole property into a mess.",
    },
    {
      title: `${config.city} older walls and ceilings`,
      body:
        "Older rooms often carry several layers of repair history. One crack may be sitting beside old patch lines, rough corners, uneven sanding, and previous paint that highlights every flaw. A contractor page makes sense here because the room usually needs a broader fix, not just filler in one spot.",
    },
    {
      title: `${config.city} water damage follow-through`,
      body:
        "After wet drywall is removed and damaged sections are replaced, the room still needs blending, smoothing, corner cleanup, and a finish that does not draw attention once the paint goes on. Homeowners often end up on this page because they want somebody to carry the work through all the way.",
    },
    {
      title: `${config.city} rentals and commercial spaces`,
      body:
        "Rental units, offices, and commercial interiors often need a quicker schedule, clearer communication, and several wall or ceiling issues handled at once. The work may not be glamorous, but it still has to look clean before the next tenant, employee, or customer sees the space.",
    },
  ];

  const quotePrep = [
    "Wide room photos that show the whole wall or ceiling, not only the damage close-up.",
    "A short note explaining what caused the problem, such as a leak, plumbing access, electrical work, or renovation changes.",
    "Approximate room size or the width and height of the area that needs work.",
    "A quick note about whether the space is occupied, empty, a condo, a basement, or part of an active renovation.",
    "Any timing issues that matter, such as painters booked, tenants moving in, or a project that needs to stay on schedule.",
  ];

  return (
    <>
      <JsonLd config={config} />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white">
              <p className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-200/30 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-blue-100">
                {config.heroChips.join(" • ")}
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {config.heroTitle}
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {config.heroIntro}
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                For the broader GTA hub and non-city intent, start with our{" "}
                <Link
                  href="/services/drywall-contractor/"
                  className="font-semibold underline underline-offset-2"
                >
                  drywall contractor
                </Link>{" "}
                page. {config.heroSupport}
              </p>
              <p className="text-sm text-blue-100/90 mb-8">
                If the job is entirely new board hanging, see{" "}
                <Link
                  href={config.supportLinks.install}
                  className="font-semibold underline underline-offset-2"
                >
                  drywall installation {config.city}
                </Link>
                . If the job is mostly holes, cracks, or water damage, see{" "}
                <Link
                  href={config.supportLinks.repair}
                  className="font-semibold underline underline-offset-2"
                >
                  drywall repair {config.city}
                </Link>
                .
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  ["Homes & Basements", "🏠"],
                  ["Condos", "🏢"],
                  ["Repair + Finish", "🛠️"],
                  ["Paint-Ready", "✨"],
                ].map(([label, icon]) => (
                  <div
                    key={label}
                    className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-sm font-semibold">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition shadow-lg hover:shadow-2xl"
                >
                  Call {PHONE_TEXT}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl"
                >
                  Request Drywall Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/gallery/drywall-installation/drywall-installation-hero.webp"
                  alt={`${config.city} drywall contractor handling wall and ceiling work`}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Local drywall help across {config.city}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="text-4xl font-bold text-blue-600 mb-1">4.9</div>
                <div className="text-sm text-gray-600 font-semibold">
                  Local drywall company rating
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              SERVING ALL {config.city.toUpperCase()} NEIGHBOURHOODS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {config.neighborhoods.slice(0, 12).map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote-form"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {config.quoteHeading}
              </h2>
              <p className="text-xl text-gray-600">{config.quoteBody}</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {config.whyHeading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {config.whyBody}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {config.scopeCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border-2 border-blue-100 bg-blue-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Main authority page for this topic
            </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This local page supports our main{" "}
                <Link
                  href="/services/drywall-contractor/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall contractor
                </Link>{" "}
              page. If you want the main GTA service page first, that is the
              best place to start.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                Local Scope
              </p>
              <h2 className="text-4xl font-bold mb-4">
                {config.localScopeHeading}
              </h2>
              {config.localScopeBody.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-gray-700 leading-relaxed first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-gray-700 leading-relaxed">
                If the room has been opened up and needs brand-new drywall
                throughout, the more relevant page is{" "}
                <Link
                  href={config.supportLinks.install}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall installation {config.city}
                </Link>
                . If the issue is tightly repair-focused, use{" "}
                <Link
                  href={config.supportLinks.repair}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repair {config.city}
                </Link>
                .
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                {config.city} Signals
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Local drywall contractor patterns we see often
              </h2>
              <ul className="space-y-3 text-gray-700">
                {config.localSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                {keywordTags.map((kw) => (
                  <div
                    key={kw}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {kw}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Better Context
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How to know this drywall contractor page matches your job
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many people land here before they know whether they need
              installation, repair, wall smoothing, or a mix of everything. The
              goal of this page is to make that easier to sort out.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {decisionPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Real Jobs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Common {config.city} jobs that belong on this page
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the kinds of rooms and projects that usually make
              people search for a drywall contractor instead of a narrower
              service term.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {roomExamples.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Quote Prep
            </p>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What to send if you want a better drywall quote
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The fastest way to get a useful quote is to send enough context
              for the room, not only a tight close-up of the damage. The more
              complete the information is, the easier it is to tell whether the
              work belongs under repair, installation, or a broader drywall
              contractor job.
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {quotePrep.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-blue-200 bg-white px-5 py-4 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Good quote requests save time for both sides. They help us explain
              what the room probably needs, whether the drywall should be
              repaired or replaced in certain spots, how much prep is likely,
              and whether the work should be priced as a small repair or as a
              larger contractor job. That extra context is usually the
              difference between a vague allowance and a quote that actually
              reflects the room.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Neighbourhood Coverage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall contractor service across {config.city}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {config.neighborhoodSummary}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {config.neighborhoods.map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="font-semibold text-gray-900">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {config.signals ? (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                Local Drywall Services
              </p>
              <h2 className="text-4xl font-bold mb-4">
                Local drywall services in {config.city}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local links, paint stores, and city resources that make this
                page feel tied to {config.city}, not written for anywhere.
              </p>
            </div>
            <LocalSignals signals={config.signals} />
          </div>
        </section>
      ) : null}

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Cluster Support
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Related drywall pages that support this topic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This city page sits inside a broader drywall contractor cluster,
              with links to the main service page and the closest {config.city}{" "}
              subtopics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
                  {config.ctaLabel}
                </p>
                <h2 className="mt-2 text-3xl font-bold">{config.ctaHeading}</h2>
                <p className="mt-3 text-blue-100">{config.ctaBody}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/quote/"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg hover:bg-blue-50"
                >
                  Get my quote
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Call {PHONE_TEXT}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Drywall contractor {config.city} FAQs
          </h2>
          <div className="space-y-4">
            {config.faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-gray-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer font-semibold text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
