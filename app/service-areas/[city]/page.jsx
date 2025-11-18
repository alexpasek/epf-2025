import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { CONTACT } from "@/app/config";
import LocalSignals from "@/components/LocalSignals";
import { buildCityCopy } from "@/lib/seoCopy";

export const dynamic = "force-static";
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

//old metadata
// export function generateMetadata({ params }) {
//   const c = cities.find((x) => x.slug === params.city);
//   return c
//     ? {
//         title: `${c.name} Wallpaper Removal | Adhesive Wash, Skim-Coat, Paint`,
//         description: `Wallpaper removal in ${c.name}: clean glue removal, drywall repairs, skim-coat, primer and paint-ready finish. Free onsite estimates.`,
//         alternates: { canonical: `/service-areas/${c.slug}` },
//       }
//     : {};
// }

// new:
export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  return c
    ? {
        title: `${c.name} Wallpaper Removal | Adhesive Wash, Skim-Coat, Paint`,
        description: `Wallpaper removal in ${c.name}: clean glue removal, drywall repairs, skim-coat, primer and paint-ready finish. Free onsite estimates.`,
        alternates: { canonical: `/service-areas/${c.slug}` },
      }
    : {};
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
// new:
export default async function CityPage({ params }) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  const copy = buildCityCopy(c.slug); // keep your original usage
  // ...everything else in your file stays the same

  return (
    <div className="container-x mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Wallpaper Removal in {c.name}
      </h1>

      <p className="mt-3 text-gray-700 max-w-3xl">{copy.opening}</p>
      <p className="mt-2 text-gray-700 max-w-3xl">{copy.housing}</p>
      <p className="mt-2 text-gray-700 max-w-3xl">{copy.trust}</p>

      {/* Neighbourhoods */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Neighbourhoods We Serve</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {(c.neighborhoods || []).map((n) => (
            <Link
              key={n.slug}
              href={`/service-areas/${c.slug}/${n.slug}`}
              className="pill"
            >
              {n.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Process for depth */}
      <section className="prose max-w-none mt-10">
        <h2>Our 5-Step Process</h2>
        <ol>
          <li>
            Protect floors/furniture, seal vents, and set up HEPA dust control.
          </li>
          <li>Score seams, soften with controlled steam or enzyme remover.</li>
          <li>
            Lift facing & backing, then <strong>fully wash adhesive</strong>.
          </li>
          <li>
            Repairs + Level 4/5 skim-coat where needed; raking-light inspection.
          </li>
          <li>
            Prime with stain-blocker and leave a paint-ready surface (or we
            paint).
          </li>
        </ol>
      </section>

      {/* Local signals */}
      <LocalSignals signals={c.signals} />

      {/* CTAs */}
      <div className="mt-10 flex gap-3">
        <a className="btn-cta" href={phoneHref}>
          📞 (647) 923-6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get my quote
        </a>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Wallpaper Removal",
              areaServed: c.name,
              serviceType: "Wallpaper removal and finishing",
              url: `/service-areas/${c.slug}`,
            },
            {
              "@context": "https://schema.org",
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
                  name: c.name,
                  item: `/service-areas/${c.slug}`,
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
