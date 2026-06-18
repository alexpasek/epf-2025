import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";
import { skylightRepairCities } from "@/data/skylightRepairCities";

const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const COMPANY_NAME = "EPF Pro Services";
const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";
const phoneText = CONTACT?.phone || "(647) 923-6784";
const email = CONTACT?.email || "info@epfproservices.com";

const hubPath = "/services/skylight-drywall-repair/";
const hubHeroImage = "/services/popcorn-ceiling-removal/2.webp";
const hubHeroAlt =
  "Skylight drywall repair, ceiling water damage repair, and smooth finish preparation around a light well";
const serviceNames = [
  "Skylight Drywall Repair",
  "Drywall Repair Around Skylights",
  "Skylight Shaft Repair",
  "Popcorn Ceiling Removal Around Skylights",
  "Ceiling Water Damage Repair After Skylight Leak",
];

const processSteps = [
  "Inspect visible drywall and ceiling damage around the skylight.",
  "Confirm the leak source has been repaired or needs to be handled first.",
  "Protect floors, walls, furniture, and the surrounding work area.",
  "Remove loose texture, damaged drywall, failed tape, or peeling paint.",
  "Repair drywall, inside corners, corner bead, and damaged tape where needed.",
  "Apply skim coats to create a smooth, even finish.",
  "Sand with dust control.",
  "Apply primer or stain-blocking primer where required.",
  "Finish paint-ready or complete ceiling painting if included in the quote.",
];

const faqs = [
  {
    q: "Do I need a roofer or drywall contractor for damage around a skylight?",
    a: "If the skylight is actively leaking, the leak source should be repaired first. EPF Pro Services handles the interior drywall, ceiling repair, texture removal, skim coating, and finishing after the leak is fixed or confirmed.",
  },
  {
    q: "Can you repair drywall around a skylight after a leak?",
    a: "Yes. We repair stained, cracked, bubbling, or damaged drywall around skylights and skylight shafts.",
  },
  {
    q: "Can you remove popcorn ceiling around a skylight?",
    a: "Yes. We remove popcorn or stipple texture around skylights, including detail areas inside the skylight shaft when required.",
  },
  {
    q: "Can you make the skylight area smooth?",
    a: "Yes. After removal or repair, we can skim coat, sand, prime, and prepare the skylight area for a smooth finish.",
  },
  {
    q: "Why does drywall around skylights show imperfections so much?",
    a: "Skylights bring direct natural light onto the ceiling and shaft, so poor patches, uneven sanding, and bad tape lines are more visible.",
  },
  {
    q: "Should older popcorn ceilings be tested before removal?",
    a: "If the home is older and the ceiling texture may contain asbestos, testing should be completed before disturbing the material.",
  },
];

const serviceBlocks = [
  {
    title: "Drywall Repair Around Skylights",
    body:
      "Skylights bring in strong natural light, which means every crack, patch, tape line, and uneven ceiling repair becomes easier to see. EPF Pro Services repairs damaged drywall around skylights, including cracked inside corners, failed tape, soft drywall, water stains, peeling paint, and damaged skylight shafts. We protect the surrounding area, remove loose or damaged material, repair tape and corner bead where needed, apply proper drywall compound and skim coats, then sand the area smooth for primer and paint.",
    terms: [
      "drywall repair around skylight",
      "skylight drywall repair",
      "skylight shaft repair",
      "light well drywall repair",
      "drywall repair after skylight leak",
    ],
  },
  {
    title: "Ceiling Water Damage Repair After a Skylight Leak",
    body:
      "A leaking skylight can leave stains, bubbling paint, cracked drywall, or damaged texture around the opening. Before finishing the ceiling, the water source should be repaired or confirmed. Once the area is ready, EPF Pro Services can restore the interior ceiling damage with proper patching, skim coating, stain-blocking primer where needed, and a clean finish. This service is ideal when the skylight leak has already been fixed but the ceiling still looks damaged.",
    terms: [
      "skylight water damage repair",
      "ceiling water damage around skylight",
      "ceiling stain from skylight leak",
      "repair water damaged ceiling around skylight",
      "drywall repair after skylight leak",
    ],
  },
  {
    title: "Popcorn Ceiling Removal Around Skylights",
    body:
      "Popcorn and stipple texture around skylights can be difficult to remove cleanly because the area often has inside corners, height, angled drywall, and strong daylight showing every imperfection. EPF Pro Services provides careful popcorn ceiling removal around skylights, including detail work inside the skylight shaft, skim coating, sanding, priming, and smooth finish preparation. For older textured ceilings, asbestos testing may be required before disturbing the ceiling material.",
    terms: [
      "popcorn ceiling removal around skylight",
      "remove popcorn ceiling around skylight",
      "stipple removal around skylight",
      "skylight popcorn ceiling removal",
      "smooth ceiling around skylight",
    ],
  },
  {
    title: "Skylight Shaft & Light Well Refinishing",
    body:
      "The skylight shaft, also called a light well, often takes more detailed drywall work than a flat ceiling. Inside corners, narrow openings, daylight exposure, and previous water damage can make the area look rough. We repair and refinish skylight shafts with clean taping, corner repair, skim coating, sanding, and primer-ready finishing. This is a strong service for homes with vaulted ceilings, tall skylight tunnels, or older repairs that no longer look clean.",
    terms: [
      "skylight shaft repair",
      "light well repair",
      "skylight tunnel drywall repair",
      "drywall repair inside skylight shaft",
      "skylight ceiling repair",
    ],
  },
];

const photos = [
  {
    src: "/services/popcorn-ceiling-removal/3.webp",
    alt: "Ceiling refinishing and popcorn removal detail around a bright ceiling area",
    caption: "Texture removal and ceiling refinishing need more care around bright openings.",
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00003.webp",
    alt: "Drywall compound and taping repair before sanding",
    caption: "Failed tape, cracks, and patches need proper compound work before paint.",
  },
  {
    src: "/services/painting/3.webp",
    alt: "Finished interior painting after wall and ceiling preparation",
    caption: "Primer and paint are the final handoff after the ceiling is smooth.",
  },
];

export function getSkylightRepairJsonLd({ city, path }) {
  const url = `${BASE_URL}${path}`;
  const areaServed = city
    ? { "@type": "City", name: `${city.city}, ON` }
    : skylightRepairCities.map((item) => ({ "@type": "City", name: `${item.city}, ON` }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: COMPANY_NAME,
      url: BASE_URL,
      telephone: phoneText,
      email,
      image: `${BASE_URL}/logo.png`,
      priceRange: "$$",
      areaServed,
      sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: city ? `Skylight Drywall Repair in ${city.city}` : "Skylight Drywall Repair",
      serviceType: serviceNames,
      description:
        "Interior drywall repair, ceiling water damage repair, popcorn ceiling removal, skylight shaft refinishing, skim coating, primer, and paint-ready finishing around skylights.",
      provider: {
        "@type": "LocalBusiness",
        name: COMPANY_NAME,
        telephone: phoneText,
        url: BASE_URL,
      },
      areaServed,
      url,
      potentialAction: {
        "@type": "RequestQuoteAction",
        target: `${BASE_URL}/quote/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: { "@id": `${BASE_URL}/` },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Skylight Drywall Repair",
          item: { "@id": `${BASE_URL}${hubPath}` },
        },
        ...(city
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: city.city,
                item: { "@id": url },
              },
            ]
          : []),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
}

function JsonLd({ city, path }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSkylightRepairJsonLd({ city, path })),
      }}
    />
  );
}

function CtaButtons({ city }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/quote/"
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
      >
        {city ? `Request a ${city.city} Skylight Ceiling Repair Quote` : "Get a Skylight Ceiling Repair Quote"}
      </Link>
      <a
        href={phoneHref}
        className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white/20"
      >
        {phoneText}
      </a>
    </div>
  );
}

function RelatedLinksBlock({ city }) {
  const cityLinks = city
    ? [
        {
          href: city.relatedPopcornPage,
          title: `popcorn ceiling removal in ${city.city}`,
          body: "Texture removal, skim coating, sanding, and smooth ceiling finishing for the matching city page.",
        },
        {
          href: city.relatedDrywallPage,
          title: `drywall repair in ${city.city}`,
          body: "Local drywall repair page for stains, cracks, patches, ceiling damage, and paint-ready repair.",
        },
      ]
    : skylightRepairCities.map((item) => ({
        href: `/skylight-drywall-repair/${item.slug}/`,
        title: `skylight drywall repair in ${item.city}`,
        body: item.cityAngle,
      }));

  const hubLinks = [
    {
      href: "/services/popcorn-ceiling-removal/",
      title: "popcorn ceiling removal",
      body: "Main service page for popcorn, stipple, and smooth ceiling refinishing.",
    },
    {
      href: "/services/drywall-repair/",
      title: "drywall repair",
      body: "Main service page for water stains, damaged drywall, cracks, and ceiling repairs.",
    },
    {
      href: "/services/interior-painting/",
      title: "interior painting after ceiling repair",
      body: "Primer, ceiling painting, wall painting, and clean finish coats after drywall prep.",
    },
    {
      href: "/quote/",
      title: "send photos for a repair quote",
      body: "Share wide photos, close-ups, ceiling height, and whether the leak has been fixed.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
            Service authority links
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Plan the Right Interior Skylight Repair Next
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...cityLinks, ...hubLinks].slice(0, city ? 6 : 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="font-bold text-slate-950">{link.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{link.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SkylightDrywallRepairPage({ city = null }) {
  const isCity = Boolean(city);
  const path = isCity ? `/skylight-drywall-repair/${city.slug}/` : hubPath;
  const heroTitle = isCity ? city.h1 : "Skylight Drywall Repair & Ceiling Damage Repair";
  const heroSubtitle = isCity
    ? `Interior drywall repair, ceiling water damage repair, skylight shaft refinishing, and popcorn ceiling removal around skylights in ${city.city}.`
    : "Water stains, cracked drywall, peeling paint, or popcorn texture damage around a skylight? EPF Pro Services repairs the interior drywall, ceiling finish, and texture around skylights and light wells.";
  const heroImage = city?.heroImage || hubHeroImage;
  const heroAlt = city?.imageAlt || hubHeroAlt;

  return (
    <main className="bg-slate-50 text-slate-900">
      <JsonLd city={city} path={path} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
              Interior skylight damage repair
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              {heroSubtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Dust-controlled protection, drywall repair, skim coating, primer,
              and smooth paint-ready finish. Active skylight leaks should be
              repaired or confirmed before final drywall finishing.
            </p>
            <div className="mt-8">
              <CtaButtons city={city} />
            </div>
          </div>
        </div>
      </section>

      {!isCity ? (
        <section className="bg-white py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                Local skylight ceiling repair pages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Choose Your City for Skylight Drywall Repair
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                Start with the main skylight drywall repair service page, then
                choose the city page that matches your project. Each local page
                connects skylight interior damage to the matching popcorn
                ceiling removal, drywall repair, painting, and quote paths.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {skylightRepairCities.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/skylight-drywall-repair/${item.slug}/`}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.heroImage}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-slate-950">
                        {item.city}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.cityAngle}
                      </p>
                      <span className="mt-4 inline-flex text-sm font-bold text-blue-700">
                        Skylight drywall repair in {item.city}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {isCity ? (
        <section className="bg-white py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-3xl font-bold text-slate-950">
                  Drywall Repair Around Skylights in {city.city}
                </h2>
                <p className="mt-4 leading-8 text-slate-700">{city.intro}</p>
                <p className="mt-4 leading-8 text-slate-700">{city.cityAngle}</p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Service Areas Near {city.city}
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {city.localAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {serviceBlocks.map((block) => (
                <article
                  key={block.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-slate-950">{block.title}</h2>
                  <p className="mt-4 leading-8 text-slate-700">{block.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {block.terms.slice(0, 4).map((term) => (
                      <span
                        key={term}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isCity ? (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 p-7">
                <h2 className="text-2xl font-bold text-slate-950">
                  Popcorn Ceiling Removal Around Skylights in {city.city}
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                  Popcorn and stipple texture around skylight shafts needs
                  detailed removal, careful corner work, skim coating, sanding,
                  and a finish that still looks clean in daylight.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-7">
                <h2 className="text-2xl font-bold text-slate-950">
                  Ceiling Water Damage Repair After Skylight Leaks in {city.city}
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                  Once the leak source is fixed or confirmed, EPF can repair
                  stained drywall, failed tape, bubbling paint, and rough ceiling
                  texture around the skylight opening.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-7">
                <h2 className="text-2xl font-bold text-slate-950">
                  Why Homeowners in {city.city} Call EPF Pro Services
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                  The goal is not skylight replacement. It is restoring the
                  interior ceiling, skylight shaft, drywall, primer, and paint
                  finish after the source of the damage is handled.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr,1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                Repair process
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Our Skylight Ceiling Repair Process
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                The best sequence is leak first, interior finish second. EPF
                restores the ceiling and drywall after the water source is
                handled, so the repair has a better chance of staying clean.
              </p>
            </div>
            <div className="grid gap-3">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[3rem,1fr] gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="font-black text-blue-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-950">
              Finish Details That Matter Around Skylights
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-5 text-sm leading-6 text-slate-600">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinksBlock city={city} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-950">FAQ</h2>
            <div className="mt-6 grid gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer font-bold text-slate-950">
                    {faq.q}
                  </summary>
                  <p className="mt-3 leading-8 text-slate-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                Send photos for estimate
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Get a Skylight Ceiling Repair Quote
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Send wide photos of the room, close-ups of the skylight shaft,
                ceiling height, whether popcorn or stipple is present, and
                whether the leak has already been fixed.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-2xl">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
