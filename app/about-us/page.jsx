import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

const HERO_IMG ="/about-us/wallpaper-removal-proteam.png"; // your provided photo

export const metadata = {
  title: "About Us — Wallpaper Removal Pro",
  description:
    "Hard-working, detail-obsessed pros for wallpaper removal, popcorn ceiling smoothing (Level 5), drywall finishing, and interior painting. Dust-controlled, tidy, and schedule-reliable.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Wallpaper Removal Pro",
    description:
      "GTA crew focused on clean containment, Level 5 finishes, and on-time delivery. Wallpaper, popcorn ceilings, drywall, and painting.",
    url: "/about/",
    type: "article",
    images: [{ url: HERO_IMG }],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "About", item: "/about/" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#business",
        name: "Wallpaper Removal Pro",
        url: "/",
        image: HERO_IMG,
        telephone: PHONE_NUMBER,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2394 Haines Rd",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L4Y 1Y6",
          addressCountry: "CA",
        },
        areaServed: [
          "Mississauga",
          "Oakville",
          "Burlington",
          "Milton",
          "Stoney Creek",
          "Hamilton",
          "Toronto",
        ],
        sameAs: [],
      },
      {
        "@type": "Service",
        name: "Wallpaper Removal & Popcorn Ceiling Smoothing",
        serviceType: [
          "Wallpaper Removal",
          "Popcorn Ceiling Removal",
          "Drywall Taping & Level 5 Skim",
          "Interior Painting",
        ],
        provider: { "@id": "/#business" },
        areaServed: [
          "Mississauga",
          "Oakville",
          "Burlington",
          "Milton",
          "Stoney Creek",
          "Hamilton",
          "Toronto",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you contain dust?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We isolate rooms, protect floors and vents, use vacuum-assist sanding, and keep daily tidy wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle painted popcorn?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small area; if scraping risks damage, we encapsulate and Level 5 skim, then prime with stain-block.",
            },
          },
          {
            "@type": "Question",
            name: "Can you also paint after?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can leave paint-ready or complete finish coats on request.",
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

export default function AboutPage() {
  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-blue-700">Wallpaper Removal Pro</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We’re a small, hard-working crew that treats your home like our own:
            tight containment, careful protection, and a finish that looks
            fantastic in daylight. Our specialty is{" "}
            <strong>dust-controlled wallpaper removal</strong>,{" "}
            <strong>popcorn ceiling smoothing to Level 5</strong>,{" "}
            <strong>drywall taping & repairs</strong>, and{" "}
            <strong>interior painting</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
            <Link href="/quote/" className="btn-cta">
              Get My Quote
            </Link>
          </div>
        </div>

        <figure className="rounded-2xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
          <img
            src={HERO_IMG}
            alt="Our team at work — dust-controlled setup and detail prep"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </figure>
      </header>

      {/* VALUES / PROCESS */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Detail-Obsessed</h2>
          <p className="text-gray-700 mt-2">
            From raking-light checks to feathered seams, we chase the small
            things that make a ceiling or wall read perfectly flat.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Clean & Contained</h2>
          <p className="text-gray-700 mt-2">
            Plastic barriers, floor & stair protection, vent masking, and
            HEPA-assist sanding keep dust in control and your home livable.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Schedule-Reliable</h2>
          <p className="text-gray-700 mt-2">
            Clear start/finish plan, daily updates, and tidy wrap-ups. Insured &
            WSIB covered with a solid workmanship warranty.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6 bg-white">
          <h3 className="text-2xl font-semibold">What We Do</h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              <Link href="/services/wallpaper/" className="hover:underline">
                Wallpaper removal
              </Link>{" "}
              → score, steam/gel soften, remove backing & adhesive, substrate
              wash, repairs, Level 5 skim, bond prime.
            </li>
            <li>
              <Link href="/services/popcorn/" className="hover:underline">
                Popcorn ceiling to smooth
              </Link>{" "}
              → safe scrape or encapsulate, full Level 5 skim, stain-block
              prime.
            </li>
            <li>
              <Link
                href="/services/drywall-installation/"
                className="hover:underline"
              >
                Drywall finishing & repairs
              </Link>{" "}
              → board, tape, feather, sand, light test.
            </li>
            <li>
              <Link
                href="/services/interior-painting/"
                className="hover:underline"
              >
                Interior painting
              </Link>{" "}
              → neat edges, proper primers, and durable finishes.
            </li>
          </ul>
        </div>

        {/* LOCAL SIGNALS / AREAS */}
        <div className="card p-6 bg-white">
          <h3 className="text-2xl font-semibold">Local, Friendly, Nearby</h3>
          <p className="mt-3 text-gray-700">
            We work across{" "}
            <Link href="/mississauga/" className="hover:underline">
              Mississauga
            </Link>
            ,{" "}
            <Link href="/oakville/" className="hover:underline">
              Oakville
            </Link>
            ,{" "}
            <Link href="/burlington/" className="hover:underline">
              Burlington
            </Link>
            ,{" "}
            <Link href="/milton/" className="hover:underline">
              Milton
            </Link>
            ,{" "}
            <Link href="/stoney-creek/" className="hover:underline">
              Stoney Creek
            </Link>
            , and nearby. Ask about{" "}
            <Link href="/before-after/" className="hover:underline">
              before/after photos
            </Link>{" "}
            and a quick schedule check.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/quote/" className="btn-cta">
              Fast Quote
            </Link>
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="mt-10 card p-6 bg-white">
        <h3 className="text-2xl font-semibold">Our Promise</h3>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>No surprise mess — real containment and daily tidy.</li>
          <li>Level 5 attention to detail on ceilings and walls.</li>
          <li>Clear scope, timeline, and solid workmanship warranty.</li>
          <li>Respectful in-home conduct and careful protection.</li>
        </ul>
      </section>

      {/* FAQ (matches JSON-LD) */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">FAQ</h3>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Do you contain dust?</summary>
          <p className="mt-2 text-gray-700">
            Yes — plastic barriers, floor/stair protection, vent masking, and
            HEPA-assist sanding.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Painted popcorn plan?</summary>
          <p className="mt-2 text-gray-700">
            Test patch first; if scraping isn’t safe, we encapsulate and Level 5
            skim, then prime and finish.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Do you also paint?</summary>
          <p className="mt-2 text-gray-700">
            Yes — we can leave paint-ready or complete finish coats on request.
          </p>
        </details>
      </section>

      {/* CTA BAR */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold">
            Ready for a tidy, guaranteed job?
          </h4>
          <p className="text-gray-600">
            Fast estimate with photos. Clear plan & schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a href={PHONE_HREF} className="btn-cta">
            📞 {PHONE_NUMBER}
          </a>
          <Link href="/quote/" className="btn-cta">
            Get My Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
