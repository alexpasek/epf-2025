import Link from "next/link";

export default function SkylightPopcornBacklinkBlock({ city, slug }) {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
            Skylight detail work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Need Popcorn Removal Around a Skylight?
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Skylights and light wells require extra detail because natural light
            shows every ceiling imperfection. EPF Pro Services also provides
            drywall repair, skim coating, and popcorn ceiling removal around
            skylights.
          </p>
          <Link
            href={`/skylight-drywall-repair/${slug}/`}
            className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Learn more about skylight drywall repair in {city}
          </Link>
        </div>
      </div>
    </section>
  );
}
