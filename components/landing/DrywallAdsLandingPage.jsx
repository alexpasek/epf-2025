import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import LandingActionButtons from "@/components/landing/LandingActionButtons";
import DrywallEstimateCard from "@/components/landing/DrywallEstimateCard";

const gallery = [
  "/gallery/drywall-repair/drywall-repair-service00001.webp",
  "/gallery/drywall-repair/drywall-repair-service00002.webp",
  "/gallery/drywall-repair/drywall-repair-service00003.webp",
  "/gallery/drywall-repair/drywall-repair-service00004.webp",
  "/gallery/drywall-repair/drywall-repair-service00005.webp",
  "/gallery/drywall-repair/drywall-repair-service00007.webp",
];

function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.5 16.2 4.8 11.6l1.9-1.9 2.8 2.8 7.8-7.8 1.9 1.9-9.7 9.6Z"
      />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.7 3.4 3.3 5 6.7 6.7l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.6 4.1.6.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.1c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4.1.1.4 0 .9-.3 1.2l-2 2.3Z"
      />
    </svg>
  );
}

export default function DrywallAdsLandingPage() {
  const city = "GTA & Nearby Areas";

  return (
    <div className="scroll-smooth bg-sky-50 pb-[84px] md:pb-0">
      <header className="border-b border-sky-100 bg-white">
        <div className="container-x flex items-center justify-between py-3">
          <img src="/logo.png" alt="EPF Pro Services" className="h-10 w-auto" />
          <LandingActionButtons
            city={city}
            phoneHref={PHONE_HREF}
            showQuote={false}
            phoneLabel={
              <span className="inline-flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" />
                <span>{PHONE_NUMBER}</span>
              </span>
            }
            callClassName="inline-flex items-center rounded-2xl bg-sky-700 px-4 py-2 text-lg font-black text-white shadow"
          />
        </div>
      </header>

      <section className="bg-orange-500 py-2 text-center text-white">
        <p className="text-sm font-black uppercase tracking-[0.2em] md:text-base">
          Fast drywall repair quote • patch, sand, prime & optional paint
        </p>
      </section>

      <section className="bg-[radial-gradient(circle_at_18%_8%,#effbff_0,#dff4ff_38%,#bde8fb_100%)]">
        <div className="container-x grid gap-6 py-6 md:grid-cols-[1.08fr_.92fr] md:py-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Drywall Repair Specialists
            </p>
            <h1 className="mt-2 text-[3.2rem] font-black uppercase leading-[0.88] text-sky-950 md:text-[6rem]">
              Fix Wall &
              <br />
              Ceiling Damage
            </h1>
            <p className="mt-3 max-w-3xl text-2xl font-black leading-tight text-sky-800 md:text-[3.3rem]">
              Get a rough repair price before we call.
            </p>
            <p className="mt-4 max-w-2xl text-lg font-semibold text-slate-700 md:text-xl">
              Holes, cracks, ceiling patches, water-damaged drywall, and trades
              cutouts repaired with clean prep and paint-ready finishing.
            </p>

            <LandingActionButtons
              city={city}
              phoneHref={PHONE_HREF}
              quoteHref="#quick-quote"
              className="mt-5 flex flex-wrap gap-3"
              quoteLabel="Get My Drywall Repair Price"
              phoneLabel="Call for Fast Quote"
              quoteClassName="inline-flex items-center rounded-2xl bg-orange-500 px-5 py-3 text-lg font-black uppercase text-white shadow-lg"
              callClassName="inline-flex items-center rounded-2xl border-2 border-sky-700 bg-white px-5 py-3 text-lg font-black uppercase text-sky-800"
            />

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["Same-Day Response", "Dust-Controlled Sanding", "Patch + Paint Options"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-sky-200 bg-white/85 px-4 py-3 text-center font-black text-sky-950 shadow-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_.95fr]">
              <div className="rounded-3xl border border-sky-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
                  Before You Book
                </p>
                <h2 className="mt-2 text-3xl font-black text-sky-950">
                  Send photos so we can quote the repair properly.
                </h2>
                <ul className="mt-4 space-y-3 text-lg font-bold text-slate-700">
                  {[
                    "Wide photo of the wall or ceiling",
                    "Close-up of each damaged area",
                    "Tell us if paint matching is needed",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-orange-500">
                        <CheckIcon className="h-5 w-5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-700">
                  Typical Ranges
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    ["Small holes", "$350-$850"],
                    ["Large patches", "$750-$1,800"],
                    ["Ceiling repair", "$850-$2,400"],
                  ].map(([label, price]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-white px-3 py-2"
                    >
                      <span className="font-black text-sky-950">{label}</span>
                      <span className="text-lg font-black text-orange-600">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DrywallEstimateCard />
        </div>
      </section>

      <section className="border-y border-sky-100 bg-white">
        <div className="container-x grid gap-4 py-8 md:grid-cols-3">
          {[
            ["01", "Choose damage type", "Tell us if it is a hole, ceiling patch, crack, or water damage."],
            ["02", "Upload or text photos", "Photos help us price backing, taping, sanding, primer, and paint."],
            ["03", "Get a written scope", "We confirm what is included before the repair starts."],
          ].map(([step, title, text]) => (
            <article
              key={step}
              className="rounded-3xl border border-sky-100 bg-sky-50 p-5"
            >
              <p className="text-sm font-black text-orange-600">STEP {step}</p>
              <h2 className="mt-1 text-2xl font-black text-sky-950">{title}</h2>
              <p className="mt-2 font-semibold text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x py-10">
        <p className="text-center text-sm font-black uppercase tracking-[0.16em] text-orange-600">
          Common Drywall Repairs
        </p>
        <h2 className="mt-2 text-center text-[2.3rem] font-black uppercase text-sky-950 md:text-[3.4rem]">
          Every Type Of Wall & Ceiling Damage
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Doorknob holes",
            "Plumbing cutouts",
            "Electrical cutouts",
            "Ceiling patches",
            "Drywall cracks",
            "Water stains",
            "Texture matching",
            "Patch and paint",
          ].map((item, idx) => (
            <a
              key={item}
              href="#quick-quote"
              className="rounded-2xl border border-sky-200 bg-white p-4 font-black text-sky-950 shadow-sm hover:border-orange-400"
            >
              <span className="mr-2 text-orange-600">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {item}
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-100 bg-white">
        <div className="container-x py-10">
          <h2 className="text-center text-[2.3rem] font-black uppercase text-sky-950 md:text-[3.4rem]">
            Recent Drywall Repair Work
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, idx) => (
              <figure
                key={src}
                className="overflow-hidden rounded-3xl border border-sky-100 bg-sky-50 shadow-sm"
              >
                <img
                  src={src}
                  alt={`Drywall repair project photo ${idx + 1}`}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="p-3 text-sm font-semibold text-slate-700">
                  Drywall patching, sanding, and paint-ready finishing.
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="rounded-3xl bg-sky-800 p-7 text-white">
          <h2 className="text-4xl font-black uppercase">
            Ready To Fix The Damage?
          </h2>
          <p className="mt-2 max-w-3xl text-lg font-semibold text-sky-100">
            Use the estimator, send photos, and we will confirm the proper
            repair scope for your wall or ceiling.
          </p>
          <LandingActionButtons
            city={city}
            phoneHref={PHONE_HREF}
            quoteHref="#quick-quote"
            className="mt-5 flex flex-wrap gap-3"
            quoteLabel="Get My Drywall Repair Price"
            phoneLabel="Call Now"
            quoteClassName="inline-flex items-center rounded-2xl bg-orange-500 px-5 py-3 text-lg font-black uppercase text-white"
            callClassName="inline-flex items-center rounded-2xl border border-sky-200 px-5 py-3 text-lg font-black uppercase text-white"
          />
        </div>
      </section>

      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-sky-700 bg-white/95 p-2 shadow-2xl md:hidden"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        <LandingActionButtons
          city={city}
          phoneHref={PHONE_HREF}
          quoteHref="#quick-quote"
          className="grid grid-cols-2 gap-2"
          quoteLabel="Get Price"
          phoneLabel="Call"
          quoteClassName="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-2 py-3 text-sm font-black uppercase text-white"
          callClassName="inline-flex items-center justify-center rounded-2xl bg-sky-700 px-2 py-3 text-sm font-black uppercase text-white"
        />
      </div>
    </div>
  );
}
