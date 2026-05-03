import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PARENT_PATH = "/locations/drywall-repair-mississauga/";
const SERVICE_PATH = "/services/drywall-repair/mississauga/";
const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";

const AREAS = [
  {
    slug: "port-credit",
    name: "Port Credit",
    title: "Drywall Repair in Port Credit, Mississauga",
    intro:
      "Port Credit drywall repair often has a waterfront context: condos near Lakeshore Road, older homes close to the village, townhomes near the GO station, and renovated rooms where daylight from the lake side makes patch lines easy to see.",
    property:
      "We regularly plan around condo access, older plaster-adjacent walls, lake humidity, balcony doors, main-floor living rooms, and kitchens where a rough patch would be obvious after painting.",
    common:
      "Common calls include ceiling stains from units above, wall dents from move-ins, fixture relocation patches, bubbling tape near exterior walls, and small water-damage repairs after plumbing or window leaks.",
    access:
      "Condo buildings may need elevator booking, hallway protection, parking notes, and work-hour planning. Houses near the village often need careful protection around finished floors, trim, and occupied rooms.",
    example:
      "A typical Port Credit job might be a living-room wall opened for fixture wiring, then patched, feathered, sanded, primed, and repainted from corner to corner so the repair does not catch side light.",
  },
  {
    slug: "streetsville",
    name: "Streetsville",
    title: "Drywall Repair in Streetsville, Mississauga",
    intro:
      "Streetsville drywall repair often involves older homes, finished basements, stairwells, additions, and renovated rooms where past repairs may already be hidden under several paint layers.",
    property:
      "Many Streetsville homes have long hallway views, stair transitions, older framing movement, and ceiling lines that need more than a quick fill before paint.",
    common:
      "Common issues include settlement cracks, failed tape seams, basement water marks, stairwell dents, nail pops, and patch repairs after electrical or plumbing updates.",
    access:
      "House access is usually simpler than high-rise access, but stairwell height, finished floors, family schedules, and basement furniture still affect protection and setup.",
    example:
      "A realistic Streetsville repair is a recurring stairwell seam crack that gets opened, reinforced, mudded in controlled coats, sanded under light, primed, and left paint-ready.",
  },
  {
    slug: "erin-mills",
    name: "Erin Mills",
    title: "Drywall Repair in Erin Mills, Mississauga",
    intro:
      "Erin Mills drywall repair usually serves detached homes, townhomes, condos, and family spaces where clean staging matters because the rooms stay in daily use.",
    property:
      "Homes around Erin Mills often include finished basements, open living rooms, smooth ceilings, bedrooms, and renovation areas where dust control and paint-ready finishing are important.",
    common:
      "We see ceiling stains after bathroom leaks, wall patches after shelving removal, drywall openings after plumbing access, nail pops, and dent repair before repainting.",
    access:
      "Some Erin Mills jobs are in condo or townhouse settings with parking and hallway limits. Detached homes still need floor protection, furniture planning, and clean sanding.",
    example:
      "A typical Erin Mills repair might be a ceiling leak stain below an upstairs bathroom where the board is checked, repaired, stain-block primed, and prepared for repainting.",
  },
  {
    slug: "city-centre",
    name: "City Centre",
    title: "Drywall Repair in City Centre, Mississauga",
    intro:
      "City Centre drywall repair is heavily condo-focused. High-rise units near Square One often need precise patching, controlled sanding, elevator coordination, and clean work that respects shared building areas.",
    property:
      "The walls are often smooth, the rooms are compact, and the windows bring strong light across repairs. A small patch can stand out quickly if sanding or primer is rushed.",
    common:
      "Common requests include TV mount holes, move-out dents, ceiling stains from units above, fan access patches, electrical cut-outs, and cracks near windows or bulkheads.",
    access:
      "Most City Centre repairs need building access planning: concierge rules, service elevator booking, parking instructions, hallway protection, quiet hours, and insurance documents when requested.",
    example:
      "A common City Centre job is a condo wall opened for plumbing access, then backed, patched, taped, sanded with protection, primed, and prepared for a clean repaint.",
  },
  {
    slug: "cooksville",
    name: "Cooksville",
    title: "Drywall Repair in Cooksville, Mississauga",
    intro:
      "Cooksville drywall repair covers apartments, condos, older homes, rentals, and family properties near transit where repairs often need practical scheduling and clean turnover.",
    property:
      "Some Cooksville walls have older repairs under paint, mixed finishes, previous tenant damage, or utility access marks that need a careful finish plan instead of another quick patch.",
    common:
      "Typical repairs include rental unit wall damage, outlet and cable cut-outs, plumbing access patches, ceiling stains, nail pops, and wall repairs before painting or listing.",
    access:
      "Apartments and condos may need elevator and parking coordination. Homes and rentals often need efficient work windows, protection, and a clear paint-ready handoff.",
    example:
      "A Cooksville rental turnover may involve repairing anchor holes, a dented hallway wall, and a small ceiling stain before primer and repainting.",
  },
  {
    slug: "meadowvale",
    name: "Meadowvale",
    title: "Drywall Repair in Meadowvale, Mississauga",
    intro:
      "Meadowvale drywall repair often involves family homes, basements, townhomes, and long-used rooms where drywall damage builds up from everyday living, leaks, and renovations.",
    property:
      "Finished basements, rec rooms, utility areas, stairwells, bedrooms, and main-floor living spaces all need different protection and finishing decisions.",
    common:
      "Common calls include basement water damage, ceiling stains, drywall cracks, nail pops, dents from moving furniture, and cut-outs after plumbing or electrical work.",
    access:
      "Meadowvale homes are usually accessible, but basement stairs, furniture, occupied rooms, and family schedules still influence how the work area is protected and cleaned.",
    example:
      "A typical Meadowvale repair is lower-wall basement drywall damaged after a leak, cut back after the source is fixed, replaced, taped, sanded, primed, and left ready for paint.",
  },
  {
    slug: "churchill-meadows",
    name: "Churchill Meadows",
    title: "Drywall Repair in Churchill Meadows, Mississauga",
    intro:
      "Churchill Meadows drywall repair often happens in newer detached homes and townhomes where settlement cracks, nail pops, basement repairs, and move-in damage are common.",
    property:
      "Modern layouts, bright rooms, smooth walls, stairwells, and finished basements make repair quality visible after paint, especially under pot lights and side light.",
    common:
      "We see settlement cracks, screw pops, stairwell seams, TV mount holes, wall dents, basement cut-outs, and ceiling patches after bathroom or plumbing work.",
    access:
      "Most jobs are house or townhouse access, but the work still needs floor protection, dust-aware sanding, furniture planning, and clean daily handoff for occupied family homes.",
    example:
      "A common Churchill Meadows repair is a line of screw pops and a seam crack in a hallway that is secured, patched, feathered, sanded, primed, and prepared for repainting.",
  },
  {
    slug: "clarkson",
    name: "Clarkson",
    title: "Drywall Repair in Clarkson, Mississauga",
    intro:
      "Clarkson drywall repair can involve lake-area homes, condos near transit, older properties, and renovated spaces where moisture history and bright rooms affect the repair plan.",
    property:
      "Some Clarkson homes have previous patching, exterior-wall moisture sensitivity, finished basements, and ceiling repairs after roof, plumbing, or bathroom leaks.",
    common:
      "Typical requests include water stains, drywall tape repair, wall dents, cracks near exterior walls, ceiling patches, and repair after fixture or plumbing access.",
    access:
      "Condo and apartment repairs need access planning. Detached homes need protection around finished floors, kitchens, basements, and rooms that stay occupied during repair.",
    example:
      "A realistic Clarkson repair is a ceiling stain near an exterior wall where the source is addressed first, then the drywall is repaired, stain-block primed, and made paint-ready.",
  },
  {
    slug: "lorne-park",
    name: "Lorne Park",
    title: "Drywall Repair in Lorne Park, Mississauga",
    intro:
      "Lorne Park drywall repair often involves larger homes, premium interiors, older renovations, smooth ceilings, and bright rooms where patch quality and paint blending matter.",
    property:
      "High-visibility living rooms, stairwells, kitchens, finished basements, and custom renovation areas need careful sanding, priming, and finish checks before paint.",
    common:
      "Common issues include ceiling cracks, wall dents, water stains, failed seams, patch repairs after electrical changes, and drywall work before repainting or listing.",
    access:
      "House access is usually manageable, but protection matters because floors, trim, furniture, and finished millwork need to be respected while drywall dust is controlled.",
    example:
      "A typical Lorne Park repair is a smooth living-room ceiling crack that needs wider feathering, light checks, primer, and a full paint plan to avoid a visible repair line.",
  },
];

const getArea = (slug) => AREAS.find((area) => area.slug === slug);

export function generateStaticParams() {
  return AREAS.map((area) => ({ neighborhood: area.slug }));
}

export async function generateMetadata({ params }) {
  const { neighborhood } = await params;
  const area = getArea(neighborhood);
  if (!area) return {};
  const path = `${PARENT_PATH}${area.slug}/`;
  const url = `${BASE_URL}${path}`;
  return {
    title: `${area.title} | Wall & Ceiling Repair`,
    description: `${area.title} by EPF Pro Services. Clean wall repair, ceiling repair, water damage drywall repair, patching, sanding, priming, and paint-ready finishing.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${area.title} | EPF Pro Services`,
      description: `Local drywall repair near ${area.name} for walls, ceilings, water damage, patching, condo access, and paint-ready repairs.`,
      url,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/gallery/drywall-repair/drywall-repair-service00001.webp`,
          width: 1200,
          height: 630,
          alt: `${area.name} drywall repair and paint-ready wall patching in Mississauga`,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

function JsonLd({ area, faqs }) {
  const url = `${BASE_URL}${PARENT_PATH}${area.slug}/`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${area.name} drywall repair in Mississauga`,
      serviceType: [
        "Drywall Repair",
        "Wall Repair",
        "Ceiling Repair",
        "Water Damage Drywall Repair",
        "Drywall Patch Repair",
      ],
      areaServed: {
        "@type": "Place",
        name: `${area.name}, Mississauga, ON`,
      },
      provider: {
        "@type": "LocalBusiness",
        name: "EPF Pro Services",
        telephone: PHONE_TEXT,
        url: BASE_URL,
        image: `${BASE_URL}/logo.png`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          addressCountry: "CA",
        },
      },
      url,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "CAD",
        url: `${BASE_URL}/quote/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Drywall Repair Mississauga",
          item: { "@id": `${BASE_URL}${SERVICE_PATH}` },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mississauga Neighbourhoods",
          item: { "@id": `${BASE_URL}${PARENT_PATH}` },
        },
        {
          "@type": "ListItem",
          position: 3,
          name: area.name,
          item: { "@id": url },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
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

const visibleFaqs = (area) => [
  {
    q: `Do you provide drywall repair near ${area.name}?`,
    a: `Yes. EPF Pro Services provides drywall repair near ${area.name} for wall patches, ceiling repairs, water stains, cracks, trade cut-outs, and paint-ready finishing.`,
  },
  {
    q: `Can you repair ceiling water damage in ${area.name}?`,
    a: `Yes, once the leak source has been addressed and the drywall is ready for repair. The work may include cut-out replacement, compound, sanding, stain-block primer, and repaint planning.`,
  },
  {
    q: `Can you quote ${area.name} drywall repair from photos?`,
    a: `Often, yes. Send one close-up, one wide room photo, the damage size, ceiling height if relevant, and whether painting is needed.`,
  },
  {
    q: `Do you handle condo and house access in ${area.name}?`,
    a: `${area.access} We plan the repair around the actual building or home so the work stays clean and practical.`,
  },
];

export default async function Page({ params }) {
  const { neighborhood } = await params;
  const area = getArea(neighborhood);
  if (!area) notFound();
  const faqs = visibleFaqs(area);

  return (
    <main className="bg-white text-slate-900">
      <JsonLd area={area} faqs={faqs} />

      <section className="bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-16">
          <nav className="text-sm text-slate-300">
            <Link href={SERVICE_PATH} className="hover:text-white">
              drywall repair Mississauga
            </Link>{" "}
            / <Link href={PARENT_PATH}>{area.name}</Link>
          </nav>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {area.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
            {area.intro} If you need the main city service page first, review
            our{" "}
            <Link href={SERVICE_PATH} className="font-semibold text-blue-200 underline">
              drywall repair Mississauga
            </Link>{" "}
            page for quote details, repair types, and photo requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white">
              Request a Quote
            </a>
            <a href={PHONE_HREF} className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950">
              Call {PHONE_TEXT}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-[2fr_1fr]">
        <article className="prose-custom max-w-none space-y-8 text-slate-700">
          <section>
            <h2>Local drywall repair context in {area.name}</h2>
            <p>{area.property}</p>
            <p>
              The repair plan depends on the room, the surface, and the final
              paint expectation. A utility-room patch can be simpler than a
              smooth ceiling under pot lights. A condo hallway repair needs
              different protection than a detached-home basement. In every case,
              EPF Pro Services builds the scope around stable drywall, clean
              sanding, primer where needed, and a paint-ready handoff.
            </p>
            <p>
              For homeowners comparing local options, the city hub for{" "}
              <Link href={SERVICE_PATH}>Mississauga wall and ceiling repair</Link>{" "}
              explains how drywall patching, ceiling repair, water damage,
              crack repair, and condo access fit together.
            </p>
          </section>

          <section>
            <h2>Common drywall problems in {area.name}</h2>
            <p>{area.common}</p>
            <p>
              Small repairs can include nail pops, screw pops, anchor holes,
              doorknob marks, shelving damage, TV mount holes, and moving dents.
              Larger repairs often follow plumbing access, electrical work,
              fixture relocation, leak investigation, or damaged board removal.
              Cracks and failed tape need extra judgment because the visible line
              may be only part of the loose seam.
            </p>
            <p>
              {area.example} That kind of repair should not be treated as a
              quick fill. The surface has to be cleaned, supported, taped,
              coated, sanded, primed, and prepared so it does not stand out
              after repainting.
            </p>
          </section>

          <section>
            <h2>Wall repair near {area.name}</h2>
            <p>
              Wall repair usually starts by identifying whether the damage is
              shallow, deep, loose, damp, or connected to movement. A shallow
              dent may need compound and sanding. A hole from plumbing or
              electrical access usually needs backing and a new drywall insert.
              A failed seam may need tape removed and rebuilt before it can be
              painted.
            </p>
            <p>
              EPF Pro Services protects the floor and nearby surfaces before
              opening or sanding the repair. Loose paper is sealed or removed,
              backing is added where needed, and compound is feathered wide
              enough to reduce patch lines. The goal is a clean wall that is
              ready for primer and paint, not a raised patch that catches light.
            </p>
          </section>

          <section>
            <h2>Ceiling repair near {area.name}</h2>
            <p>
              Ceiling repair is usually more sensitive than wall repair because
              light travels across the surface and makes ridges, dips, and
              sanding scratches easier to see. Ceiling cracks, fixture openings,
              fan cut-outs, and leak stains may all need a wider blend than the
              damaged spot suggests.
            </p>
            <p>
              When ceilings are high, textured, smooth, or lit with pot lights,
              the repair sequence matters even more. We plan access, floor
              protection, overhead sanding, primer, and repainting before the
              work starts. If the ceiling was stained by water, stain-block
              primer may be needed before finish paint.
            </p>
          </section>

          <section>
            <h2>Water damage drywall repair near {area.name}</h2>
            <p>
              Water damage repair should begin only after the source is stopped.
              A stain can sometimes be repaired if the drywall is dry and firm.
              Soft, swollen, sagging, crumbling, or repeatedly wet drywall
              usually needs to be cut out and replaced. If mold is suspected,
              the homeowner should contact a qualified remediation professional
              before cosmetic drywall repair.
            </p>
            <p>
              Once the area is ready, EPF Pro Services removes unstable
              material, installs new board where needed, tapes and compounds the
              repair, sands with care, primes stains or raw compound, and leaves
              the surface paint-ready. For pricing and service details, use the
              main{" "}
              <Link href={SERVICE_PATH}>drywall repair near {area.name}</Link>{" "}
              pathway through the Mississauga service hub.
            </p>
          </section>

          <section>
            <h2>Condo, house, and access notes</h2>
            <p>{area.access}</p>
            <p>
              Access details affect timing and cost. Condos may need elevator
              reservations, hallway protection, property management forms, and
              quiet-hour scheduling. Houses may need stair protection, furniture
              moving, basement access planning, and dust control in rooms that
              remain occupied. Good drywall repair respects the space around the
              patch as much as the damaged drywall itself.
            </p>
          </section>

          <section>
            <h2>EPF Pro Services process</h2>
            <p>
              Our process starts with photos and a clear scope. We ask for one
              close-up, one wide room photo, the approximate size of the repair,
              ceiling height if relevant, whether water was involved, and
              whether painting is needed. Those details help decide whether the
              repair is a small fill, reinforced patch, board replacement, tape
              repair, or ceiling repair.
            </p>
            <p>
              On site, we protect floors, isolate the work area, remove loose or
              damaged drywall, add backing where needed, tape and compound in
              controlled coats, sand with dust awareness, check the surface under
              light, prime raw compound or stains, and leave the repair
              paint-ready. If you want citywide details, our{" "}
              <Link href={SERVICE_PATH}>drywall repair Mississauga</Link> page
              explains the full service.
            </p>
          </section>

          <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <h2>Request drywall repair near {area.name}</h2>
            <p>
              Send photos of the damage, the room, ceiling height, access notes,
              and whether painting is needed. EPF Pro Services can review the
              repair and provide a written estimate for clean, protected,
              paint-ready drywall repair in {area.name}.
            </p>
            <Link href="/quote/" className="mt-4 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">
              Send Photos for a Quote
            </Link>
          </section>

          <section>
            <h2>FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer font-semibold text-slate-900">
                    {faq.q}
                  </summary>
                  <p className="mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Nearby Mississauga repair pages</h2>
            <div className="mt-4 space-y-3">
              {AREAS.filter((item) => item.slug !== area.slug).slice(0, 6).map((item) => (
                <Link
                  key={item.slug}
                  href={`${PARENT_PATH}${item.slug}/`}
                  className="block rounded-2xl bg-white p-4 text-sm font-semibold text-slate-800 hover:text-blue-700"
                >
                  Drywall repair near {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">Related repair guides</h2>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/blog/drywall-repair-cost-mississauga/" className="block font-semibold text-blue-700">
                Drywall repair cost in Mississauga
              </Link>
              <Link href="/blog/drywall-patch-repair-mississauga/" className="block font-semibold text-blue-700">
                Drywall patch repair in Mississauga
              </Link>
              <Link href="/blog/ceiling-drywall-repair-mississauga/" className="block font-semibold text-blue-700">
                Ceiling drywall repair in Mississauga
              </Link>
              <Link href="/blog/water-damaged-drywall-repair-mississauga/" className="block font-semibold text-blue-700">
                Water damaged drywall repair in Mississauga
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section id="quote" className="bg-slate-50 py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-3xl font-bold">Get a {area.name} drywall repair quote</h2>
            <p className="mt-3 text-slate-600">
              Upload photos and notes so we can confirm the repair type, access,
              painting needs, and schedule.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
