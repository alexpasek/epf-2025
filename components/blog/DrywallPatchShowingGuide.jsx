import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER, SITE_URL } from "@/app/config";

const pagePath = "/blog/why-drywall-patches-show-through-paint/";
const pageUrl = `${(SITE_URL || "https://epfproservices.com").replace(/\/$/, "")}${pagePath}`;
const heroImage = "/blog/why-drywall-patches-show-through-paint-featured.png";
const lastUpdated = "May 17, 2026";
const trustBadges = [
  "Trusted since 2005",
  "Fully insured",
  "Dust-controlled sanding",
  "Paint-ready finishing",
  "3-year workmanship warranty",
];

const diagnosisRows = [
  {
    visibleProblem: "Dull or shiny spot",
    likelyCause: "Fresh compound absorbed paint differently or primer was skipped.",
    bestFix:
      "Lightly sand, clean dust, prime the repair, and repaint to a natural break point.",
  },
  {
    visibleProblem: "Raised outline around patch",
    likelyCause: "Patch was not feathered wide enough.",
    bestFix: "Sand high edges and apply wider skim coats.",
  },
  {
    visibleProblem: "Smooth spot on textured wall",
    likelyCause: "New patch texture does not match existing roller or wall texture.",
    bestFix: "Blend texture before primer and paint.",
  },
  {
    visibleProblem: "Patch only shows in daylight or side lighting",
    likelyCause: "Wall surface is not flat enough.",
    bestFix: "Inspect with side lighting, skim wider, sand evenly, then prime.",
  },
  {
    visibleProblem: "Patch keeps bubbling or staining",
    likelyCause: "Moisture, old damage, or stain is still active.",
    bestFix:
      "Fix the source first, replace damaged drywall if needed, then prime with proper stain-blocking primer.",
  },
];

const reasons = [
  {
    title: "The Patch Was Not Feathered Wide Enough",
    body:
      "Small patches often show because compound was applied only over the damaged area. Professional drywall finishing usually requires feathering the repair wider than the damage so the patch blends gradually into the wall. A patch can be only a few inches wide, but the finish area may need to extend much farther so the wall does not catch light at the edge of the repair.",
  },
  {
    title: "Too Much Compound Was Used",
    body:
      "Heavy compound can leave a raised area. Even a small ridge can become visible after paint, especially under daylight, pot lights, hallway lighting, or side lighting. Thick compound also dries slower and can shrink back, which means the patch may look flat one day and show a shadow after primer or paint.",
  },
  {
    title: "Sanding Was Uneven",
    body:
      "Over-sanding can expose tape or create low spots. Under-sanding can leave ridges and edges. The goal is not to sand everything flat in one spot, but to make the repair blend naturally into the surrounding wall. Good sanding is controlled, clean, and checked from more than one angle.",
  },
  {
    title: "Primer Was Skipped",
    body:
      "Fresh joint compound is porous. If paint is applied directly over compound, the patch may absorb paint differently than the painted wall around it. This can cause flashing, dull spots, cloudy areas, or a finish that looks slightly different even when the paint colour is correct.",
  },
  {
    title: "Texture Does Not Match",
    body:
      "Older painted walls often have roller texture, old paint build-up, slight orange peel, or sanding marks from previous repairs. A new drywall patch may be smoother than the rest of the wall. If texture is not blended before primer and paint, the patch can still show even when the surface is technically flat.",
  },
  {
    title: "Lighting Exposes the Repair",
    body:
      "Side lighting from windows, hallway lights, pot lights, and stairwell lighting can reveal small imperfections. A repair that looks fine from one angle may show clearly from another angle. This is why ceiling patches, stairwell walls, long hallways, and large-window rooms usually need more careful finishing.",
  },
  {
    title: "Moisture or Old Damage Was Not Fixed",
    body:
      "If the drywall was affected by moisture, stains, soft board, or loose tape, painting over it will not solve the problem. The damaged area must be dry, stable, and repaired properly before primer and paint. If the board is soft or swollen, replacement is usually safer than another surface skim.",
  },
];

const fixSteps = [
  "Inspect the patch from different angles.",
  "Check for raised edges, dips, rough sanding, or texture mismatch.",
  "Sand high spots carefully.",
  "Apply wider skim coats if needed.",
  "Let compound dry fully.",
  "Sand evenly with dust control.",
  "Clean dust from the wall.",
  "Prime the repaired area.",
  "Repaint to a natural break point when needed.",
];

const repaintChecklist = [
  "Is the patch flat when viewed from side lighting?",
  "Are the edges feathered wider than the damaged area?",
  "Was sanding dust fully removed?",
  "Was fresh compound sealed with primer?",
  "Does the texture match the surrounding wall?",
  "Is the paint sheen the same?",
  "Are you repainting to a natural break point?",
  "Is there any moisture, bubbling, or staining?",
  "Is the old paint still available, or will colour matching be needed?",
];

const serviceList = [
  "Drywall patch repair",
  "Ceiling patch repair",
  "Tape repair",
  "Crack repair",
  "Water-damaged drywall repair",
  "Paint-ready wall finishing",
  "Primer and repainting",
  "Smooth wall and ceiling repairs",
];

const cityLinks = [
  { label: "Drywall Repair Mississauga", href: "/services/drywall-repair/mississauga/" },
  { label: "Drywall Repair Oakville", href: "/services/drywall-repair/oakville/" },
  { label: "Drywall Repair Burlington", href: "/services/drywall-repair/burlington/" },
  { label: "Drywall Repair Hamilton", href: "/services/drywall-repair/hamilton/" },
  { label: "Drywall Repair Milton", href: "/services/drywall-repair/milton/" },
  { label: "Drywall Repair Grimsby", href: "/services/drywall-repair/grimsby/" },
];

const unlinkedServiceAreas = ["Toronto", "Etobicoke", "St. Catharines"];

const quoteChecklist = [
  "One close-up photo of the patch",
  "One wide photo of the full wall or ceiling",
  "One photo from the side angle if the patch shows in lighting",
  "Approximate size of the damaged area",
  "Whether the wall or ceiling was already painted",
  "Whether there was water damage",
  "Your city or neighbourhood",
];

const relatedProblems = [
  "Drywall patch showing after paint",
  "Paint flashing over drywall repair",
  "Visible tape lines",
  "Raised drywall patch edges",
  "Smooth patch on textured wall",
  "Water-damaged drywall patches",
  "Nail pops and settlement cracks",
  "Ceiling patch repair",
  "Drywall repairs before painting",
  "Bad DIY drywall repairs",
];

const relatedArticles = [
  {
    title: "Drywall Repair Before Painting",
    description:
      "What to fix before repainting so patches, cracks, stains, and old repairs do not show through the finish.",
    href: "/blog/drywall-repair-mississauga-before-painting/",
    image: "/blog/drywall-repair-after-electrical-plumbing-mississauga.png",
  },
  {
    title: "How to Patch Drywall",
    description:
      "A practical guide to choosing the right patch method for small holes, larger cut-outs, and paint-ready repairs.",
    href: "/blog/how-to-patch-drywall/",
    image: "/blog/drywall-repair-patching-services.png",
  },
  {
    title: "Water-Damaged Drywall Repair",
    description:
      "How to tell whether water-damaged drywall can be repaired or should be replaced before finishing.",
    href: "/blog/repairing-water-damaged-drywall/",
    image: "/blog/water-damaged-drywall-repair-mississauga.png",
  },
  {
    title: "DIY Drywall Repair vs Hiring a Professional",
    description:
      "When a small repair is reasonable for DIY and when finish quality, lighting, or moisture makes a pro the better choice.",
    href: "/blog/diy-drywall-repair-vs-hiring-a-professional/",
    image: "/gallery/drywall-repair/drywall-repair-service00007.webp",
  },
];

const faqs = [
  {
    q: "Why can I still see a drywall patch after painting?",
    a:
      "You can still see a drywall patch after painting when the repaired area does not match the surrounding wall in surface level, texture, primer absorption, or paint sheen. The patch may need wider feathering, sanding, primer, or repainting to a natural break point.",
  },
  {
    q: "Will primer hide a drywall patch?",
    a:
      "Primer helps prevent flashing by sealing fresh compound, but it will not hide raised edges, dips, poor sanding, or texture mismatch. The patch still needs to be finished properly before primer and paint.",
  },
  {
    q: "Can another coat of paint fix a visible drywall patch?",
    a:
      "Another coat of paint may help minor colour differences, but it usually will not fix visible patch outlines, ridges, sanding marks, or texture problems.",
  },
  {
    q: "Why does my drywall patch look shiny or dull?",
    a:
      "A shiny or dull spot is usually caused by paint flashing. This happens when the patched area absorbs paint differently than the surrounding painted wall, often because primer was skipped or the surface texture is different.",
  },
  {
    q: "Do I need to repaint the whole wall after fixing a patch?",
    a:
      "Not always, but repainting to a natural break point often gives the best result. Small touch-ups can still show if the existing paint has aged, faded, or developed a different texture.",
  },
  {
    q: "Can EPF Pro Services fix drywall patches before painting?",
    a:
      "Yes. EPF Pro Services repairs drywall patches, sanding marks, tape issues, water-damaged drywall, ceiling patches, and paint-ready wall repairs across Mississauga, Oakville, Burlington, Hamilton, Toronto, Etobicoke, Milton, and nearby GTA areas.",
  },
];

const articleText = [
  ...diagnosisRows.flatMap((row) => [row.visibleProblem, row.likelyCause, row.bestFix]),
  ...reasons.flatMap((reason) => [reason.title, reason.body]),
  ...fixSteps,
  ...repaintChecklist,
  ...serviceList,
  ...quoteChecklist,
  ...relatedProblems,
  ...faqs.flatMap((faq) => [faq.q, faq.a]),
].join(" ");

function JsonLd() {
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Why Drywall Patches Show Through Paint",
    description:
      "Drywall patch still showing after paint? Learn why patches flash, show outlines, look shiny, or reveal texture problems and how EPF Pro Services fixes paint-ready drywall repairs in Mississauga, Oakville, Burlington, Hamilton, Toronto, and the GTA.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-17",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    image: [`${SITE_URL.replace(/\/$/, "")}${heroImage}`],
    author: { "@type": "Organization", name: "EPF Pro Services" },
    publisher: {
      "@type": "Organization",
      name: "EPF Pro Services",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL.replace(/\/$/, "")}/logo.png`,
      },
    },
    inLanguage: "en-CA",
    articleSection: "Drywall repair",
    keywords:
      "why drywall patches show through paint, drywall patch showing after paint, visible drywall patch, drywall patch flashing, paint flashing over drywall repair, drywall repair Mississauga",
    wordCount: articleText.split(/\s+/).filter(Boolean).length,
    articleBody: articleText,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${SITE_URL.replace(/\/$/, "")}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Why Drywall Patches Show Through Paint",
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drywall patch repair and paint-ready drywall finishing",
    serviceType: "Drywall repair",
    provider: {
      "@type": "LocalBusiness",
      name: "EPF Pro Services",
      telephone: PHONE_NUMBER,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    areaServed: [
      "Mississauga",
      "Toronto",
      "Oakville",
      "Burlington",
      "Hamilton",
      "Etobicoke",
      "Milton",
      "Grimsby",
      "St. Catharines",
      "GTA",
    ],
    url: `${SITE_URL.replace(/\/$/, "")}/services/drywall-repair/`,
  };

  return (
    <>
      {[blogPosting, breadcrumb, faq, service].map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

function CTAButtons({ compact = false }) {
  return (
    <div className={`flex flex-col gap-3 ${compact ? "" : "sm:flex-row"}`}>
      <Link
        href="/quote/"
        className="inline-flex items-center justify-center rounded-lg bg-[#f59e0b] px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-[#fbbf24]"
      >
        Request Drywall Repair Quote
      </Link>
      <a
        href={PHONE_HREF}
        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
      >
        Call {PHONE_NUMBER}
      </a>
    </div>
  );
}

function TrustBadges({ dark = false }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {trustBadges.map((badge) => (
        <li
          key={badge}
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            dark
              ? "border-white/20 bg-white/10 text-white"
              : "border-slate-200 bg-slate-50 text-slate-700"
          }`}
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}

function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`mx-auto max-w-5xl px-4 ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b45309]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function ImageFigure({ src, alt, caption }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        width="1200"
        height="760"
        className="h-auto w-full object-cover"
        loading="lazy"
      />
      <figcaption className="border-t border-slate-100 px-4 py-3 text-sm text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function DrywallPatchShowingGuide() {
  return (
    <main className="bg-[#f7f8f6] pb-14 text-slate-900">
      <JsonLd />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
          <div>
            <nav className="text-sm text-slate-300">
              <Link href="/blog/" className="hover:text-white">
                Blog
              </Link>{" "}
              / Drywall repair guide
            </nav>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Why Drywall Patches Show Through Paint
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Visible drywall patches usually happen because the repaired area does not
              match the surrounding wall in surface level, texture, primer absorption,
              paint sheen, or lighting. Even if the patch is painted, small differences
              in sanding, feathering, or primer can make the repair stand out.
            </p>
            <div className="mt-7">
              <CTAButtons />
            </div>
            <div className="mt-6">
              <TrustBadges dark />
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl">
            <img
              src={heroImage}
              alt="Visible drywall patch showing through paint on an interior wall before professional repair"
              width="1672"
              height="941"
              className="h-auto w-full object-cover"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-5xl px-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-950">Quick Answer</h2>
          <p className="mt-3 leading-8 text-slate-700">
            Drywall patches show through paint when the patch is smoother, rougher,
            more porous, higher, lower, or differently textured than the rest of the
            wall. Paint alone usually does not hide these issues. The repair often
            needs wider feathering, proper sanding, primer, texture blending, or
            repainting to a natural break point. For visible rooms, start with a proper{" "}
            <Link
              href="/services/drywall-repair/"
              className="font-semibold text-blue-700 underline-offset-4 hover:underline"
            >
              professional drywall repair
            </Link>{" "}
            scope before applying more paint.
          </p>
        </div>
      </section>

      <Section title="Quick Diagnosis: Why Your Drywall Patch Is Showing" className="mt-12">
        <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-950">
              <tr>
                <th className="p-4 font-bold">Visible Problem</th>
                <th className="p-4 font-bold">Likely Cause</th>
                <th className="p-4 font-bold">Best Fix</th>
              </tr>
            </thead>
            <tbody>
              {diagnosisRows.map((row) => (
                <tr key={row.visibleProblem} className="border-t border-slate-100">
                  <td className="p-4 font-semibold text-slate-950">{row.visibleProblem}</td>
                  <td className="p-4">{row.likelyCause}</td>
                  <td className="p-4">{row.bestFix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-4 md:hidden">
          {diagnosisRows.map((row) => (
            <article key={row.visibleProblem} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">{row.visibleProblem}</h3>
              <p className="mt-3"><strong>Likely cause:</strong> {row.likelyCause}</p>
              <p><strong>Best fix:</strong> {row.bestFix}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Why Drywall Patches Show After Painting" className="mt-12">
        <p>
          A drywall patch can look good before paint but still become visible after
          the wall is painted. This usually happens because paint reflects light
          differently across the repaired area. The patch may be flatter, smoother,
          more porous, or slightly raised compared to the surrounding wall.
        </p>
        <p>
          This is common around TV mount holes, water-damaged drywall, nail pops,
          settlement cracks, ceiling patches, and previous DIY repairs. It also
          happens after plumbing, electrical, or HVAC work where a wall was opened,
          patched, and painted quickly without enough blending.
        </p>
      </Section>

      <Section title="Patch Showing vs Paint Flashing: What Is the Difference?" className="mt-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Patch showing</h3>
            <p className="mt-3">
              A patch showing means you can see the shape, outline, ridge, dip, or
              texture difference of the repair. This is a surface problem first.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Paint flashing</h3>
            <p className="mt-3">
              Paint flashing means the repaired area reflects light differently. It
              may look dull, shiny, cloudy, or slightly different in colour, even
              when the same paint was used.
            </p>
          </div>
        </div>
        <p>
          Sometimes both problems happen at the same time. A patch can be uneven
          and also absorb paint differently if it was not primed properly. That is
          why a better paint colour rarely solves a bad patch by itself.
        </p>
      </Section>

      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          7 Reasons Drywall Patches Show Through Paint
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b45309]">
                Reason {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{reason.title}</h3>
              <p className="mt-3 leading-8 text-slate-700">{reason.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-5 px-4 lg:grid-cols-3">
        <ImageFigure
          src="/gallery/drywall-repair/drywall-repair-service00007.webp"
          alt="Drywall repair feathered wider before primer in a residential room"
          caption="Wider feathering helps the patch blend into the surrounding wall instead of stopping at a hard edge."
        />
        <ImageFigure
          src="/gallery/drywall-repair/drywall-repair-service00003.webp"
          alt="Professional drywall patch sanding with dust control before paint"
          caption="Sanding should refine the repair without digging a low spot or leaving ridges."
        />
        <ImageFigure
          src="/gallery/drywall-repair/drywall-repair-service00004.webp"
          alt="Smooth drywall patch repair before painting in a bright room"
          caption="Primer and final inspection are part of getting a paint-ready repair."
        />
      </section>

      <Section title="Will Another Coat of Paint Hide a Drywall Patch?" className="mt-12">
        <p>
          Usually, no. Another coat of paint may help minor colour differences, but
          it will not fix raised edges, poor sanding, texture mismatch, missing
          primer, or uneven wall surfaces.
        </p>
        <p>
          If the patch is visible because of flashing, primer may be needed. If the
          patch is visible because of a ridge or dip, the surface needs more drywall
          finishing before repainting. Paint follows the shape underneath it, so
          adding more paint over a bad surface usually makes the problem more
          frustrating.
        </p>
      </Section>

      <Section title="How to Fix a Drywall Patch That Shows Through Paint" className="mt-12">
        <ol className="grid gap-3 md:grid-cols-3">
          {fixSteps.map((step, index) => (
            <li key={step} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="block text-sm font-bold text-[#b45309]">Step {index + 1}</span>
              <span className="mt-1 block font-semibold text-slate-900">{step}</span>
            </li>
          ))}
        </ol>
        <p>
          For highly visible walls, repainting only the small patch may still show
          because the older wall paint has aged, faded, or developed a different
          roller texture. In many living rooms, hallways, stairwells, and bedrooms,
          repainting to a corner, doorway, ceiling line, or other natural break
          gives a cleaner result.
        </p>
      </Section>

      <Section title="Before You Repaint a Drywall Patch, Check This" className="mt-12">
        <ul className="grid gap-3 md:grid-cols-2">
          {repaintChecklist.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-5 px-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">When DIY Repair Is Usually Enough</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Small low-visibility patches may be fine for DIY repair, especially in
            closets, utility rooms, or areas with low natural light. If the wall is
            not highly visible, a simple patch, primer, and repaint may be enough.
            DIY is more reasonable when the drywall is dry and solid, the damage is
            shallow, and you are comfortable waiting for compound to dry between
            coats.
          </p>
        </article>
        <article className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">When to Call EPF Pro Services</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Professional drywall repair makes sense when the patch is in a visible
            room, hallway, staircase, ceiling, large-window area, or freshly painted
            wall. These areas usually need better feathering, sanding, primer, and
            paint blending to avoid the repair showing again.
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-800 sm:grid-cols-2">
            {serviceList.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className="mt-5 leading-8 text-slate-700">
            If the repair is part of a bigger renovation, EPF can also help connect
            the scope with{" "}
            <Link href="/services/interior-painting/" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
              interior painting
            </Link>
            ,{" "}
            <Link href="/services/drywall-installation/" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
              drywall installation
            </Link>
            ,{" "}
            <Link href="/services/popcorn-ceiling-removal/" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
              popcorn ceiling removal
            </Link>
            , or{" "}
            <Link href="/services/wallpaper-removal/" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
              wallpaper removal
            </Link>{" "}
            when those services are part of the same room update.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4">
        <div className="rounded-xl border-l-4 border-[#f59e0b] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Field Note from EPF Pro Services</h2>
          <p className="mt-4 leading-8 text-slate-700">
            In occupied homes, visible drywall patches are often caused by a
            combination of narrow feathering, skipped primer, and old roller texture
            around the repair. For high-light areas like hallways, stairwells,
            ceilings, and large-window rooms, we inspect the patch from several
            angles before primer and paint.
          </p>
        </div>
      </section>

      <Section
        title="Drywall Patch Repair in Mississauga, Oakville, Burlington, Hamilton and the GTA"
        className="mt-12"
      >
        <p>
          EPF Pro Services repairs visible drywall patches, flashing, sanding
          marks, ceiling patches, wall damage, TV mount holes, water-damaged
          drywall, and paint-ready repairs across Mississauga, Toronto, Oakville,
          Burlington, Hamilton, Etobicoke, Milton, Grimsby, St. Catharines, and
          nearby areas.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-blue-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          We also serve {unlinkedServiceAreas.join(", ")} and nearby GTA areas.
          Dedicated drywall repair city pages for those areas are not linked here
          unless they exist in the site.
        </p>
      </Section>

      <section className="mx-auto mt-12 max-w-5xl px-4">
        <div className="grid gap-6 rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold">What Photos to Send for a Drywall Repair Quote</h2>
            <p className="mt-4 leading-8 text-slate-200">
              To provide a more accurate estimate, send a few clear photos of the
              damaged area. Photos help us understand the patch size, wall lighting,
              finish quality, moisture risk, and whether the repair can be blended
              or should be repainted to a natural break point.
            </p>
            <div className="mt-6">
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center rounded-lg bg-[#f59e0b] px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-[#fbbf24]"
              >
                Send Photos for a Quote
              </Link>
            </div>
          </div>
          <ul className="grid gap-2 text-sm text-slate-100">
            {quoteChecklist.map((item) => (
              <li key={item} className="rounded-lg bg-white/10 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section title="Related Drywall Repair Problems We Help With" className="mt-12">
        <div className="grid gap-3 sm:grid-cols-2">
          {relatedProblems.map((problem) => (
            <div key={problem} className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm">
              {problem}
            </div>
          ))}
        </div>
      </Section>

      <Section title="FAQ" className="mt-12">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-bold text-slate-950">
                {faq.q}
              </summary>
              <p className="mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section title="Related Drywall Repair Guides" className="mt-12">
        <div className="grid gap-5 md:grid-cols-2">
          {relatedArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={article.image}
                alt={`${article.title} related guide image`}
                width="900"
                height="560"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700">
                  {article.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="mx-auto mt-12 max-w-5xl px-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Author and Service Trust</h2>
          <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-bold text-slate-950">Written by</dt>
              <dd className="mt-1 text-slate-700">EPF Pro Services</dd>
            </div>
            <div>
              <dt className="font-bold text-slate-950">Reviewed by</dt>
              <dd className="mt-1 text-slate-700">EPF Pro Services drywall finishing team</dd>
            </div>
            <div>
              <dt className="font-bold text-slate-950">Last updated</dt>
              <dd className="mt-1 text-slate-700">{lastUpdated}</dd>
            </div>
            <div>
              <dt className="font-bold text-slate-950">Service areas</dt>
              <dd className="mt-1 text-slate-700">
                Mississauga, Toronto, Oakville, Burlington, Hamilton, Etobicoke,
                Milton, Grimsby, St. Catharines, and surrounding GTA areas.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4">
        <div className="rounded-xl bg-slate-950 p-6 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Need Help Fixing a Drywall Patch That Still Shows?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-200">
            Send us a few photos of the patch and we can let you know what likely
            needs to be done. EPF Pro Services can repair, skim, sand, prime, and
            prepare the area for a cleaner painted finish.
          </p>
          <div className="mt-6">
            <CTAButtons />
          </div>
          <div className="mt-6">
            <TrustBadges dark />
          </div>
        </div>
      </section>
    </main>
  );
}
