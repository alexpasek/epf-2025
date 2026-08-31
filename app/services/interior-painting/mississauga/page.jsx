import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const revalidate = 86400;

const PATH = "/services/interior-painting/mississauga/";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PAGE_URL = `${BASE_URL}${PATH}`;
const HERO_IMAGE =
  "/services/interior-painting/mississauga/interior-painter-mississauga-condo-finish.jpg";

const FAQS = [
  {
    q: "How much does interior painting cost in Mississauga?",
    a: "The quote depends on room size, ceiling height, wall condition, colour changes, primer needs, the number of doors and trim details, furniture protection, access, and whether ceilings or drywall repairs are included. Photos can establish the likely scope, followed by an on-site confirmation when needed.",
  },
  {
    q: "Do you repair drywall before painting?",
    a: "Yes. Dents, holes, cracks, loose tape, rough patches, and other surface defects can be assessed as part of the painting scope. Larger or more involved repairs can be coordinated through EPF Pro Services before primer and finish coats are applied.",
  },
  {
    q: "Can you paint an occupied home or condo?",
    a: "Yes. The schedule can be organized room by room with floor and furniture protection, dust control during preparation, practical access planning, and daily cleanup so the home remains manageable.",
  },
  {
    q: "Do you paint ceilings, trim, baseboards, doors, and frames?",
    a: "Yes. Interior painting can include walls, ceilings, baseboards, window and door casing, doors, and frames. Each surface is assessed separately because preparation, primer, sheen, and application methods differ.",
  },
  {
    q: "How do I request a photo estimate?",
    a: "Send wide photos of each room plus close-ups of repairs, ceilings, trim, and doors. Include approximate room sizes, ceiling height, the surfaces you want painted, whether the home is occupied, and your preferred timing.",
  },
];

const neighbourhoods = [
  "Port Credit",
  "Clarkson",
  "Erin Mills",
  "Meadowvale",
  "Streetsville",
  "Churchill Meadows",
  "Cooksville",
  "Lakeview",
  "City Centre",
  "Square One",
];

const gallery = [
  {
    src: "/services/painting/1.webp",
    width: 1024,
    height: 1024,
    alt: "Interior wall painting with clean ceiling and trim lines",
  },
  {
    src: "/services/painting/2.webp",
    width: 1024,
    height: 1024,
    alt: "Finished interior painting project showing smooth wall coverage",
  },
  {
    src: "/services/painting/3.webp",
    width: 1536,
    height: 1024,
    alt: "Residential interior painting finish on walls and architectural trim",
  },
];

export const metadata = {
  title: { absolute: "Interior Painter Mississauga | EPF Pro Services" },
  description:
    "Professional interior painter in Mississauga for walls, ceilings, trim, doors and drywall repairs. Dust-controlled prep, insured crews and a 3-year warranty.",
  keywords: [
    "interior painter Mississauga",
    "interior painting Mississauga",
    "interior painters Mississauga",
    "house painters Mississauga",
    "residential painter Mississauga",
    "Mississauga painting company",
    "condo painting Mississauga",
    "interior house painting Mississauga",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Interior Painter Mississauga | EPF Pro Services",
    description:
      "Professional interior painter in Mississauga for walls, ceilings, trim, doors and drywall repairs. Dust-controlled prep, insured crews and a 3-year warranty.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1731,
        height: 909,
        alt: "Interior painter Mississauga condo with smooth walls, ceiling, trim and door finish",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Interior Painter in Mississauga",
        serviceType: "Interior Painting",
        url: PAGE_URL,
        description: metadata.description,
        areaServed: {
          "@type": "City",
          name: "Mississauga",
          containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
        },
        provider: {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#business`,
          name: "EPF Pro Services",
          url: `${BASE_URL}/`,
          telephone: CONTACT.phone,
          email: CONTACT.email,
          image: `${BASE_URL}/logo.png`,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${BASE_URL}/quote/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Interior Painting",
            item: `${BASE_URL}/services/interior-painting/`,
          },
          { "@type": "ListItem", position: 4, name: "Mississauga", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white text-slate-800">
      <JsonLd />

      <nav aria-label="Breadcrumb" className="container-x py-4 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link className="hover:text-blue-700 hover:underline" href="/services/">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link className="hover:text-blue-700 hover:underline" href="/services/interior-painting/">Interior Painting</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-900">Mississauga</li>
        </ol>
      </nav>

      <header className="overflow-hidden bg-slate-950 text-white">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Walls • ceilings • trim • repairs
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Interior Painter in Mississauga
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Careful interior painting for Mississauga condos, townhomes, and detached homes—built around surface preparation, clean cut lines, durable finishes, and a tidy handover. We coordinate wall and ceiling repairs before paint so the finished room looks consistent in real daylight.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              {['Fully insured', 'Dust-controlled prep', '3-year warranty'].map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2">✓ {item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-cta text-center" href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
              <a className="rounded-xl border border-white/30 px-6 py-3 text-center font-bold hover:bg-white/10" href="#photo-estimate">
                Request a photo estimate
              </a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
            <Image
              src={HERO_IMAGE}
              width={1731}
              height={909}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              alt="Interior painter Mississauga condo with smooth blue-grey walls, white ceiling, baseboards and door trim"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-slate-300">
              A smooth, coordinated finish across walls, ceiling, baseboards, door, and frame.
            </figcaption>
          </figure>
        </div>
      </header>

      <main>
        <section className="container-x py-16">
          <SectionHeading eyebrow="Complete room finishing">Interior painting services for the whole room</SectionHeading>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            A good repaint is more than rolling colour onto open walls. EPF Pro Services can build the scope around the surfaces that belong together, from drywall preparation and primer through the final wall, ceiling, and trim coats. That gives Mississauga homeowners one clear plan for the defects that paint alone will not hide.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Walls and feature walls", "Patching, sanding, spot priming, clean cut-ins, and consistent coverage for bedrooms, living areas, halls, kitchens, and stairwells."],
              ["Ceilings", "Ceiling repainting with attention to repaired areas, stains, light openings, vents, edges, and the flat finish expected overhead."],
              ["Trim and baseboards", "Cleaning, filling, sanding, caulking where appropriate, and a durable finish for baseboards, casing, and other painted trim."],
              ["Doors and frames", "Preparation and coating planned for the extra handling, edge wear, and adhesion demands found on doors, jambs, and frames."],
              ["Surface preparation", "Floor and furniture protection, defect checks, filling, vacuum-assisted sanding, caulking, primer selection, and dust cleanup."],
              ["Drywall repair before paint", "Coordinated repair for holes, dents, cracks, loose tape, rough patches, or visible transitions before finish coats begin."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <SectionHeading eyebrow="Preparation first">Why the surface matters as much as the colour</SectionHeading>
            <div className="mt-7 grid gap-8 text-lg leading-8 text-slate-700 lg:grid-cols-2">
              <div>
                <p>Fresh paint changes colour and sheen, but it does not flatten a raised patch edge, secure loose tape, remove a sanding ridge, or close a failed caulk line. Those issues often become more visible after the new finish reflects daylight from large windows or pot lights.</p>
                <p className="mt-4">We assess the wall and ceiling condition before defining the coating scope. Small prep items may fit naturally into the painting work. Deeper damage can be handled through our <Link className="font-semibold text-blue-700 hover:underline" href="/services/drywall-repair/mississauga/">Mississauga drywall repair service</Link>, allowing repair, primer, and paint to be sequenced correctly.</p>
              </div>
              <div>
                <p>Primer is selected for the surface in front of us: raw compound, a repaired section, a strong colour change, a stain, or another problem area. Trim and doors are treated differently from walls because they receive more contact and usually need a harder-wearing finish.</p>
                <p className="mt-4">Planning a larger room update? We can also coordinate <Link className="font-semibold text-blue-700 hover:underline" href="/services/baseboard-installation/mississauga/">baseboard installation in Mississauga</Link> before the final caulking and paint stages.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-x py-16">
          <SectionHeading eyebrow="From setup to handover">Our interior painting process</SectionHeading>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Confirm the scope", "Review rooms, surfaces, repairs, colours, access, furniture, timing, and what is included in the quote."],
              ["2", "Protect and prepare", "Cover floors and furniture, mask as needed, repair defects, sand with dust control, clean, caulk, and prime."],
              ["3", "Apply the finish", "Cut and roll the specified surfaces with the appropriate coating, sheen, coverage, and drying sequence."],
              ["4", "Inspect and clean", "Check the dry finish, complete agreed touch-ups, remove protection, organize the work area, and complete final cleanup."],
            ].map(([number, title, copy]) => (
              <li key={number} className="rounded-2xl border border-slate-200 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">{number}</span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-blue-950 py-16 text-white">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Homes we paint">Condos, townhomes, detached homes, and occupied spaces</SectionHeading>
              <p className="mt-6 text-lg leading-8 text-blue-100">Condo painting in Mississauga may require elevator timing, loading access, hallway protection, parking planning, and working-hour coordination. In townhomes and detached houses, connected hallways, stairwells, and main-floor sightlines can make sheen consistency and wall preparation especially important.</p>
              <p className="mt-4 text-lg leading-8 text-blue-100">For an occupied home, work can be sequenced room by room. We discuss furniture movement, usable rooms, drying time, pets or family routines, and daily cleanup before the schedule is set.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 text-slate-900">
              <h3 className="text-2xl font-bold">Mississauga neighbourhood coverage</h3>
              <p className="mt-3 leading-7 text-slate-700">Interior painting is available across Mississauga, including:</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {neighbourhoods.map((area) => <li key={area} className="rounded-xl bg-slate-100 px-4 py-3 font-semibold">{area}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="container-x py-16">
          <SectionHeading eyebrow="Clear quote scope">What affects an interior painting quote?</SectionHeading>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">We do not publish a fixed room price because the same room count can represent very different work. A useful quote explains the surfaces, preparation, products, access, and exclusions so you can compare the actual scope—not just the bottom line.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ["Size and access", "Room dimensions, ceiling height, stairs, open-to-above areas, condo access, parking, and working-hour restrictions."],
              ["Surface condition", "Nail holes, dents, cracks, loose tape, previous patches, stains, caulk failure, glossy coatings, or damaged drywall."],
              ["Painting scope", "Walls only or walls plus ceilings, baseboards, casing, doors, frames, closets, feature walls, and connected spaces."],
              ["Finish system", "Colour changes, primer requirements, sheen, product choice, required coverage, and drying or recoat sequence."],
              ["Protection and occupancy", "Furniture movement, floor protection, room-by-room scheduling, daily setup, cleanup, and keeping parts of the home usable."],
              ["Related renovation work", "Drywall repair, smooth ceiling refinishing, popcorn ceiling removal, wallpaper removal, or new baseboards completed before paint."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16">
          <div className="container-x">
            <SectionHeading eyebrow="Local planning details">How Mississauga homes change the painting plan</SectionHeading>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
              Mississauga is not one uniform housing market. A City Centre condo,
              a connected Churchill Meadows townhome, and a detached house near
              Streetsville can present very different access, lighting, trim,
              repair, and scheduling needs. We use the property type and actual
              surface condition to shape the scope rather than relying on a
              city-wide room-price formula.
            </p>
            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              {[
                [
                  "Square One and City Centre condos",
                  "Condo work can involve elevator reservations, loading access, parking, hallway protection, management rules, and limited space for tools or furniture. Large windows and long wall runs also make patch edges, roller variation, and sheen changes easier to see in daylight.",
                ],
                [
                  "Churchill Meadows and Erin Mills family homes",
                  "Connected kitchens, family rooms, hallways, and stairwells need a coordinated colour and sheen plan. High-touch walls, stair rails, baseboards, and door frames may require more preparation than quiet bedrooms.",
                ],
                [
                  "Cooksville, Lakeview, Clarkson, and older interiors",
                  "Previously painted rooms may have several generations of patches, caulk, glossy trim coatings, old nail holes, settlement cracks, or ceiling repairs. These conditions are assessed individually; paint is not presented as a substitute for proper repair.",
                ],
                [
                  "Port Credit and Streetsville character details",
                  "Rooms with detailed casing, deep baseboards, multiple doors, built-ins, or strong natural light take more cutting, preparation, and inspection than a simple open wall. The quote should identify those details instead of hiding them under a generic room count.",
                ],
              ].map(([title, copy]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 grid gap-6 rounded-3xl bg-slate-950 p-7 text-white md:grid-cols-3 md:p-9">
              <div>
                <h3 className="text-xl font-bold">Before moving in</h3>
                <p className="mt-3 leading-7 text-slate-300">An empty home can simplify access and protection, but repairs, colour transitions, trim scope, and the renovation sequence still need to be confirmed before the schedule is promised.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Before listing</h3>
                <p className="mt-3 leading-7 text-slate-300">Prioritize visible defects, connected main-floor spaces, entry areas, trim condition, and consistent neutral finishes. We do not invent resale-value claims; the goal is a clean, properly prepared presentation.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">While living at home</h3>
                <p className="mt-3 leading-7 text-slate-300">Room-by-room sequencing, furniture planning, ventilation, drying time, and daily cleanup help keep an occupied painting project practical for the household.</p>
              </div>
            </div>
            <p className="mt-7 max-w-4xl leading-7 text-slate-700">
              Planning several connected rooms or a complete interior? See our
              focused guide to hiring a{" "}
              <Link className="font-semibold text-blue-700 hover:underline" href="/services/house-painter/mississauga/">
                house painter in Mississauga
              </Link>{" "}
              for whole-home sequencing, quote comparison, and occupied-house logistics.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <SectionHeading eyebrow="Project gallery">Interior painting work and finish details</SectionHeading>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">Examples from EPF Pro Services’ existing interior painting gallery. Open an image to view the finish more closely.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {gallery.map((image) => (
                <Image key={image.src} {...image} sizes="(min-width: 768px) 33vw, 100vw" data-lightbox="true" className="aspect-[4/3] h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm" />
              ))}
            </div>
            <Link className="mt-6 inline-flex font-bold text-blue-700 hover:underline" href="/our-work/">See more EPF Pro Services project photos →</Link>
          </div>
        </section>

        <section className="container-x py-16">
          <SectionHeading eyebrow="Planning resources">Connect painting with the right Mississauga services</SectionHeading>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Interior painting prep and finish guide", "/blog/interior-painting-mississauga-prep-finish-guide/", "Compare preparation, primer, sheen, repairs, and quote scope before hiring a painter."],
              ["Whole-house painting planning guide", "/blog/whole-house-interior-painting-mississauga-planning-guide/", "Plan connected rooms, protection, repair, sequence, timeline factors, and estimate photos."],
              ["Popcorn ceiling removal in Mississauga", "/popcorn-ceiling-removal/mississauga/", "Plan ceiling texture removal and smooth refinishing before walls and trim receive final paint."],
              ["Drywall installation in Mississauga", "/services/drywall-installation/mississauga/", "Coordinate new board, taping, sanding, primer, and final interior coatings."],
            ].map(([title, href, copy]) => (
              <article key={href} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold"><Link className="text-blue-700 hover:underline" href={href}>{title}</Link></h3>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="container-x">
            <SectionHeading eyebrow="Questions homeowners ask">Interior painting FAQ</SectionHeading>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="rounded-2xl border border-white/15 bg-white/5 p-6 open:bg-white/10">
                  <summary className="cursor-pointer text-lg font-bold">{q}</summary>
                  <p className="mt-3 leading-7 text-slate-200">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="photo-estimate" className="container-x scroll-mt-24 py-16">
          <div className="grid gap-10 rounded-3xl border border-blue-100 bg-blue-50 p-7 md:p-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Photo estimate</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Show us the rooms and surfaces you want painted</h2>
              <p className="mt-5 leading-7 text-slate-700">Include room sizes, ceiling height, walls, ceilings, trim, doors, visible repairs, occupancy, and preferred timing. We’ll use those details to define the next step for your Mississauga painting quote.</p>
              <a className="mt-6 inline-flex font-bold text-blue-700 hover:underline" href={CONTACT.phoneHref}>Prefer to talk? Call {CONTACT.phone}</a>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
