import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import { CONTACT } from "@/app/config";
import LocalSignals from "@/components/LocalSignals";
import { buildPopcornHoodCopy } from "@/lib/seoCopy";

export const revalidate = 86400;

export async function generateStaticParams() {
  var out = [];
  for (var i = 0; i < cities.length; i++) {
    var c = cities[i];
    var hoods = c && c.neighborhoods ? c.neighborhoods : [];
    for (var j = 0; j < hoods.length; j++)
      out.push({ city: c.slug, neighborhood: hoods[j].slug });
  }
  return out;
}

export async function generateMetadata({ params }) {
  const city = (await params).city;
  const neighborhood = (await params).neighborhood;
  const c = cities.find(function (x) {
    return x.slug === city;
  });
  const n =
    c && c.neighborhoods
      ? c.neighborhoods.find(function (x) {
          return x.slug === neighborhood;
        })
      : undefined;
  if (!c || !n) return {};
  return {
    title:
      "Popcorn Ceiling Removal — " +
      n.name +
      ", " +
      c.name +
      " | Level 5 Skim, Prime, Paint",
    description:
      "Popcorn removal in " +
      n.name +
      ", " +
      c.name +
      ": dust-contained, Level 5 skim, prime & paint. Condo-friendly workflow.",
    alternates: {
      canonical:
        "/service-areas/popcorn-ceiling-removal/" + c.slug + "/" + n.slug,
    },
  };
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default async function NeighborhoodPopcornPage({ params }) {
  const city = (await params).city;
  const neighborhood = (await params).neighborhood;
  const c = cities.find(function (x) {
    return x.slug === city;
  });
  const n =
    c && c.neighborhoods
      ? c.neighborhoods.find(function (x) {
          return x.slug === neighborhood;
        })
      : undefined;
  if (!c || !n) return notFound();

  const copy = buildPopcornHoodCopy(c.slug, n.slug);
  const nearby = (c.neighborhoods || [])
    .filter(function (x) {
      return x.slug !== n.slug;
    })
    .slice(0, 6);

  return (
    <div className="container-x mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Popcorn Ceiling Removal — {n.name}, {c.name}
      </h1>

      <p className="mt-3 text-gray-700 max-w-3xl">{copy.intro}</p>

      <section className="grid md:grid-cols-3 gap-4 mt-8">
        {copy.highlights.map(function (h, idx) {
          return (
            <div key={idx} className="card p-5 bg-white">
              <div className="text-lg font-semibold">{h.split("—")[0]}</div>
              <p className="text-gray-700">
                {h.indexOf("—") > -1 ? h.split("—").slice(1).join("—") : ""}
              </p>
            </div>
          );
        })}
      </section>

      <section className="prose max-w-none mt-10">
        <h2>What to Expect</h2>
        <ul>
          <li>Containment, floor protection, vent masking.</li>
          <li>
            Scrape vs. encapsulation chosen after on-site tests
            (painted/multi-layer texture handled safely).
          </li>
          <li>
            Repairs + Level 5 skim; vacuum-assist sanding; critical-light
            inspection.
          </li>
          <li>
            Prime with stain-blocker; optional finishing paint (Benjamin Moore /
            Sherwin-Williams).
          </li>
        </ul>
      </section>

      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Recent Work</h2>
        <p className="mt-2 text-gray-700">{copy.recent}</p>
      </section>

      {/* SEO funnel links */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            See our full Popcorn process
          </h3>
          <p className="text-gray-600">
            Detailed steps, dust control, and Level 5 finishing.
          </p>
        </div>
        <div className="flex gap-3">
          <Link className="btn-cta" href="/services/popcorn/">
            View the Popcorn Removal page →
          </Link>
        </div>
      </section>

      {/* Local signals inherit from city */}
      <LocalSignals signals={c.signals} />

      <div className="mt-8 flex gap-3">
        <a className="btn-cta" href={phoneHref}>
          📞 (647) 923-6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get my quote
        </a>
      </div>

      {nearby.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Nearby Areas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map(function (x) {
              return (
                <Link
                  key={x.slug}
                  href={
                    "/service-areas/popcorn-ceiling-removal/" +
                    c.slug +
                    "/" +
                    x.slug
                  }
                  className="pill"
                >
                  {x.name}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <nav className="mt-10 text-sm text-gray-600">
        <Link
          href={"/service-areas/popcorn-ceiling-removal/" + c.slug}
          className="underline"
        >
          ← Back to {c.name}
        </Link>
      </nav>
    </div>
  );
}
