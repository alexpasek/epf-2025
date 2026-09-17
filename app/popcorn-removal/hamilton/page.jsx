
import ResponsiveImage from "@/components/ResponsiveImage";
import Link from "next/link";
import { CityCopy } from "@/components/LocalSEOCopy";
export const metadata = { title: { absolute: "Popcorn Ceiling Removal Hamilton | EPF Pro Services" }, alternates: { canonical: "/popcorn-ceiling-removal/hamilton/" } };
export default function City() {
  const images = Array.from({ length: 6 }, (_, i) => `/home/${i + 1}.webp`);
  return (
    <div className="container-x py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / Hamilton
      </nav>
      <h1 className="text-3xl font-bold">
        Hamilton — Wallpaper, Popcorn Ceiling, Drywall & Painting
      </h1>
      <p className="mt-2 text-gray-700">
        Trusted contractor for wallpaper removal, dust-controlled popcorn ceiling
        removal, drywall installation & repair, and interior painting in
        Hamilton.
      </p>
      <p className="mt-4">For texture assessment, finishing options and local coverage, see our <Link className="underline" href="/popcorn-ceiling-removal/hamilton/">Hamilton popcorn ceiling removal service</Link>.</p>
      <p className="mt-1 text-sm">
        Official site:{" "}
        <a
          className="underline"
          href="https://www.hamilton.ca/"
          target="_blank"
          rel="noopener"
        >
          https://www.hamilton.ca/
        </a>
      </p>
      <section
        data-lightbox-scope
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {images.map((src, i) => (
          <ResponsiveImage
            data-lightbox="true"
            key={i}
            src={src}
            alt={`Residential renovation interior ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </section>
      <CityCopy
        city="Hamilton"
        neighborhoods={[
          "Ancaster",
          "Dundas",
          "Waterdown",
          "Westdale",
          "Kirkendall",
          "Durand",
          "Stoney Creek",
          "Binbrook",
          "Glanbrook",
        ]}
      />
      <p className="mt-6 flex gap-3">
        <a className="btn-cta" href="tel:+16479236784">
          📞 (647) 923‑6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get a fast quote
        </a>
      </p>
    </div>
  );
}
