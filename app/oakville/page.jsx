import Link from "next/link";
import { CityCopy } from "@/components/LocalSEOCopy";
export const metadata = { title: "Oakville — Wallpaper Removal Pro" };
export default function City() {
  const images = Array.from({ length: 6 }, (_, i) => `/home/${i + 1}.webp`); //cities/oakville path to the folder for specific image
  const hidden = Array.from({ length: 120 }).map((_, i) => (
    <span key={i} className="hidden" aria-hidden="true">
      Oakville
    </span>
  ));
  return (
    <div className="container-x py-10">
      <div className="sr-only" aria-hidden="true">
        {hidden}
      </div>
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / Oakville
      </nav>
      <h1 className="text-3xl font-bold">
        Oakville — Wallpaper, Popcorn Ceiling, Drywall & Painting
      </h1>
      <p className="mt-2 text-gray-700">
        Trusted contractor for wallpaper removal, dust‑free popcorn ceiling
        removal, drywall installation & repair, and interior painting in
        Oakville.
      </p>
      <p className="mt-1 text-sm">
        Official site:{" "}
        <a
          className="underline"
          href="https://www.oakville.ca/"
          target="_blank"
          rel="noopener"
        >
          https://www.oakville.ca/
        </a>
      </p>
      <section
        data-lightbox-scope
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {images.map((src, i) => (
          <img
            data-lightbox="true"
            key={i}
            src={src}
            alt="Oakville project"
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </section>
      <CityCopy
        city="Oakville"
        neighborhoods={[
          "Bronte",
          "Glen Abbey",
          "River Oaks",
          "Kerr Village",
          "Old Oakville",
          "Clearview",
          "Falgarwood",
          "Iroquois Ridge",
          "Uptown Core",
        ]}
      />
      <p className="mt-6 flex gap-3">
        <a className="btn-cta" href="tel:+16479236784">
          📞 (647) 923‑6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get a fast quote!
        </a>
      </p>
    </div>
  );
}
