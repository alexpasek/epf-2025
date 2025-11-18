import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import { buildPopcornHoodCopy } from "@/lib/seoCopy";

export const dynamic = "force-static";
export const revalidate = 86400;
export const dynamicParams = false;

function titleCase(slug = "") {
  return slug
    .split("-")
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");
}

export function generateStaticParams() {
  const out = [];
  for (const c of cities) {
    for (const n of c.neighborhoods || []) {
      out.push({ city: c.slug, neighborhood: n.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }) {
  const { city, neighborhood } = await params; // Next 15 requires await
  const c = cities.find((x) => x.slug === city);
  if (!c) return {};

  const hoodName = titleCase(neighborhood);
  const cityName = c.name;
  const url = `/popcorn-ceiling-removal/${city}/${neighborhood}/`;

  const title = `Popcorn Ceiling Removal — ${hoodName}, ${cityName} | Level 5 Smooth`;
  const description = `${hoodName}, ${cityName} popcorn ceiling removal: dust-controlled workflow, Level 5 skim, stain-block primer and a bright, even finish. Clear scope, tidy crew, written warranty.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    robots: { index: true, follow: true },
  };
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default async function Page({ params }) {
  const { city, neighborhood } = await params; // Next 15 requires await
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  const hoodName = titleCase(neighborhood);
  const copy = buildPopcornHoodCopy(city, neighborhood);

  const nearby = (c.neighborhoods || [])
    .filter((x) => x.slug !== neighborhood)
    .slice(0, 6);

  return (
    <div className="container-x mx-auto px-4 py-10">
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — {hoodName}, {c.name}
            </h1>
            <p className="mt-3 text-gray-700">{copy.intro}</p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              Get my quote
            </a>
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#recent" className="underline-offset-2 hover:underline">
            Recent
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQs
          </a>
        </nav>
      </header>

      <section
        id="highlights"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {copy.highlights.map((h, i) => {
          const [h1, ...rest] = h.split(" — ");
          return (
            <div key={i} className="card p-6 bg-white">
              <h3 className="text-lg font-semibold">{h1}</h3>
              <p className="text-gray-600 mt-2">{rest.join(" — ")}</p>
            </div>
          );
        })}
      </section>

      <section id="recent" className="prose max-w-none mt-10">
        <h2>Recent in {hoodName}</h2>
        <p>{copy.recent}</p>
      </section>

      {nearby.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Nearby Areas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map((x) => (
              <Link
                key={x.slug}
                href={`/popcorn-ceiling-removal/${c.slug}/${x.slug}/`}
                className="pill"
              >
                {x.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        {[
          {
            q: `Is the process dust-controlled in ${hoodName}?`,
            a: "Yes—containment, vent masking, and HEPA vacuum-assist sanding keep non-work rooms clean.",
          },
          {
            q: "Can you handle heavily painted texture?",
            a: "We test first. If scraping risks damage, we encapsulate and then Level 5 skim for a uniform surface.",
          },
          {
            q: "Do you blend pot-light cutouts and patches?",
            a: "Yes—we feather around fixtures and seams during the skim so they disappear after primer.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling in {hoodName}?
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

      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href={`/popcorn-ceiling-removal/${c.slug}/`}
          className="underline"
        >
          ← Back to {c.name} Popcorn page
        </Link>
        <Link href="/popcorn-ceiling-removal/" className="underline">
          Browse all Popcorn service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>
    </div>
  );
}
