import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import LandingActionButtons from "@/components/landing/LandingActionButtons";
import LandingGoogleReviewCards from "@/components/landing/LandingGoogleReviewCards";
import QuickEstimateCard from "@/components/landing/QuickEstimateCard";

const titleFont = {
  fontFamily:
    '"Arial Narrow Bold", "Franklin Gothic Medium", Impact, sans-serif',
};

function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2 4 5v6c0 5 3.4 9.4 8 10.8 4.6-1.4 8-5.8 8-10.8V5l-8-3Zm-1 13.7-3.2-3.1 1.3-1.4 1.9 1.8 4-4 1.4 1.4-5.4 5.3Z"
      />
    </svg>
  );
}

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

function EditIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="m3 17.2 10.8-10.8 4 4L7 21.2H3v-4Zm16.7-9.6a1 1 0 0 0 0-1.4L17.8 4.3a1 1 0 0 0-1.4 0l-1.7 1.7 4 4 1-1.1Z"
      />
    </svg>
  );
}

function BeforeAfterPanel({ landing, compact = false }) {
  const before = landing.gallery?.[0];
  if (!before) return null;

  return (
    <div
      className={[
        "overflow-hidden border border-white/30 bg-[#184f42]/60 p-2",
        compact ? "rounded-xl" : "rounded-sm",
      ].join(" ")}
    >
      <div className="grid grid-cols-2 gap-1.5">
        <figure className="relative overflow-hidden border border-white/20 bg-black">
          <img
            src={before.src}
            alt={`${landing.city} popcorn ceiling before removal`}
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="800"
            className={
              compact ? "h-32 w-full object-cover" : "h-56 w-full object-cover"
            }
          />
          <figcaption className="absolute bottom-3 left-0 bg-[#143f33]/90 px-3 py-1 text-2xl font-bold text-white md:text-[2rem]">
            Before
          </figcaption>
        </figure>
        <figure className="relative overflow-hidden border border-white/20 bg-black">
          <img
            src="/gallery/popcorn-ceiling-removal.jpeg"
            alt={`${landing.city} popcorn ceiling after removal`}
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="800"
            className={
              compact ? "h-32 w-full object-cover" : "h-56 w-full object-cover"
            }
          />
          <figcaption className="absolute bottom-3 left-0 bg-[#e2542e]/95 px-3 py-1 text-2xl font-bold text-white md:text-[2rem]">
            After
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

function DesktopHeader({ landing }) {
  return (
    <header className="hidden border-b border-[#d8ded8] bg-white md:block">
      <div className="container-x flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.png" alt="EPP Pro Services" className="h-12 w-auto" />
        </a>

        <nav
          className="flex items-center text-[1.08rem] font-medium text-[#2f4d43]"
          aria-label="In-page"
        >
          <a href="#hero" className="px-4 py-2 hover:text-[#0b5a44]">
            Home
          </a>
          <span className="h-6 w-px bg-[#d9ddd9]" />
          <a href="#services" className="px-4 py-2 hover:text-[#0b5a44]">
            Services
          </a>
          <span className="h-6 w-px bg-[#d9ddd9]" />
          <a href="#photos" className="px-4 py-2 hover:text-[#0b5a44]">
            Photos
          </a>
          <span className="h-6 w-px bg-[#d9ddd9]" />
          <a href="#testimonials" className="px-4 py-2 hover:text-[#0b5a44]">
            Testimonials
          </a>
        </nav>

        <LandingActionButtons
          city={landing.city}
          phoneHref={PHONE_HREF}
          showQuote={false}
          phoneLabel={
            <span className="inline-flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span>{PHONE_NUMBER}</span>
            </span>
          }
          callClassName="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#f26437] to-[#df4b22] px-6 py-3 text-3xl font-bold text-white shadow-[0_14px_24px_-15px_rgba(0,0,0,.65)]"
        />
      </div>
    </header>
  );
}

function MobileHeader({ landing }) {
  return (
    <header className="md:hidden">
      <div className="flex items-center justify-between border-b border-[#d7ddd7] bg-white px-3 py-3">
        <img src="/logo.png" alt="EPP Pro Services" className="h-8 w-auto" />
        <LandingActionButtons
          city={landing.city}
          phoneHref={PHONE_HREF}
          showQuote={false}
          phoneLabel={
            <span className="inline-flex items-center gap-1">
              <PhoneIcon className="h-4 w-4" />
              <span>{PHONE_NUMBER}</span>
            </span>
          }
          callClassName="inline-flex items-center gap-1 rounded-xl bg-gradient-to-b from-[#f26437] to-[#df4b22] px-3 py-2 text-[1.15rem] font-bold text-white shadow"
        />
      </div>
    </header>
  );
}

export default function PopcornAdsLandingPage({ landing }) {
  const promoText =
    landing.topPromoText ||
    "FREE SAME-DAY QUOTE • PROVEN DUST-FREE CEILING REMOVAL";

  return (
    <div className="scroll-smooth bg-[#ecede8] pb-[84px] md:pb-0">
      <div className="hidden h-3 bg-gradient-to-r from-[#08372c] via-[#0d6148] to-[#08372c] md:block" />

      <MobileHeader landing={landing} />
      <DesktopHeader landing={landing} />

      <section className="border-y border-[#ce4520] bg-[#e24f26] py-2 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white md:text-[1.05rem]">
          {promoText}
        </p>
      </section>

      <section
        id="hero"
        className="scroll-mt-28 border-b border-[#2f6a58] bg-[radial-gradient(circle_at_12%_8%,#2f7b68_0,#0d5b47_45%,#0b4b39_100%)]"
      >
        <div className="container-x py-4 md:py-7">
          <div className="grid items-start gap-5 md:grid-cols-[1.15fr_.85fr] md:gap-6">
            <div>
              <p className="md:hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#d2e6dd]">
                Local Popcorn Ceiling Specialists
              </p>

              <h1
                className="mt-2 text-[2.35rem] font-bold uppercase leading-[0.92] text-white md:mt-0 md:text-[5.6rem] md:leading-[0.9]"
                style={titleFont}
              >
                Popcorn Ceiling
                <br />
                Removal <span className="text-[#ffd03f]">{landing.city}</span>
              </h1>

              <p className="mt-2 text-[1.7rem] italic leading-tight text-[#eaf7f1] md:max-w-[94%] md:text-[4.1rem]">
                {landing.heroSubline ||
                  "Get a Smooth, Modern Ceiling in No Time!"}
              </p>

              <div className="mt-4 hidden md:block">
                <BeforeAfterPanel landing={landing} />
              </div>

              <div className="mt-4 hidden md:flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#f26437] to-[#df4b22] px-7 py-3.5 text-xl font-bold text-white shadow-[0_14px_24px_-15px_rgba(0,0,0,.65)]"
                >
                  <PhoneIcon className="h-5 w-5" /> Call for Free Quote
                </a>
                <a
                  href="#quick-quote"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#81a696] bg-[#145640] px-7 py-3.5 text-xl font-bold text-white"
                >
                  <EditIcon className="h-5 w-5" /> Get Quote Online
                </a>
              </div>

              <div className="mt-3 hidden items-center justify-start gap-0.5 rounded-md bg-[#0f4a3a]/92 px-3 py-2 text-base font-semibold text-white md:flex">
                {[
                  "Dust-Free Process",
                  "Proven Results",
                  "Satisfaction Guaranteed",
                ].map((item, idx) => (
                  <div key={item} className="flex items-center gap-2">
                    {idx > 0 ? (
                      <span className="mx-2 h-5 w-px bg-white/35" />
                    ) : null}
                    <span className="text-[#8fcab4]">
                      <ShieldIcon />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:hidden">
                <div className="rounded-2xl border border-white/35 bg-white/95 p-2.5 shadow-lg">
                  <h2
                    className="text-[1.85rem] font-bold text-[#173f35]"
                    style={titleFont}
                  >
                    See the difference
                  </h2>
                  <p className="text-lg text-[#324741]">
                    From textured popcorn to smooth, modern ceilings.
                  </p>
                  <LandingActionButtons
                    city={landing.city}
                    phoneHref={PHONE_HREF}
                    quoteHref="#quick-quote"
                    className="mt-3 grid grid-cols-2 gap-2"
                    quoteClassName="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#f16537] to-[#df4b23] px-2 py-2.5 text-[1.15rem] font-bold uppercase text-white"
                    callClassName="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#2a6c5a] to-[#1b4a3d] px-2 py-2.5 text-[1.15rem] font-bold uppercase text-white"
                  />
                  <div className="mt-2">
                    <BeforeAfterPanel landing={landing} compact />
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-2 text-[1.04rem] text-[#1d3f35]">
                    {landing.heroStats?.map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-2 font-medium"
                      >
                        <span className="text-[#185441]">
                          <ShieldIcon className="h-5 w-5" />
                        </span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:ml-auto md:w-full md:max-w-[40.5rem] md:self-start md:pt-0">
              <div className="mb-3 rounded-2xl border border-[#b9c8c0] bg-[#f6f8f6] p-4 shadow-sm">
                <h2 className="text-[1.32rem] font-bold uppercase text-[#114c3a] md:text-[2rem]">
                  Typical Pricing & Timeline
                </h2>
                <ul className="mt-2 space-y-1.5 text-[0.96rem] text-[#2e4841] md:text-[1.08rem]">
                  <li>Most single-room projects: 1-2 days.</li>
                  <li>Main floors and larger homes: 2-5 days.</li>
                  <li>
                    Pricing depends on size, height, painted texture, and repair
                    level.
                  </li>
                </ul>
                <p className="mt-2 text-[0.85rem] font-medium text-[#50645d] md:text-sm">
                  Get a same-day estimate from photos and room sizes, then a
                  written final scope.
                </p>
              </div>
              <QuickEstimateCard city={landing.city} />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-28 border-b border-[#cfd6cf] bg-[linear-gradient(180deg,#f7f7f5_0%,#f0f2ee_100%)]"
      >
        <div className="container-x py-7 md:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.02fr_.98fr] md:gap-8">
            <div>
              <p className="inline-flex rounded-full border border-[#d5ddd5] bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1f5143]">
                Smooth Ceiling Upgrade
              </p>
              <h2
                className="mt-3 max-w-4xl text-[2.15rem] font-bold leading-[0.95] text-[#163f35] md:text-[4.2rem]"
                style={titleFont}
              >
                Experience a Modern,{" "}
                <span className="italic">Smooth Ceiling Finish</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#2c463f] md:text-xl">
                We remove dated texture with controlled prep and deliver a
                clean, even surface ready for paint.
              </p>

              <ul className="mt-5 space-y-2.5">
                {(
                  landing.servicesIncluded || [
                    "Quick & Clean Removal",
                    "Expert Setup for Lived-In Homes",
                    "Paint-Ready Smooth Finish",
                  ]
                ).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#d4dad4] bg-white px-4 py-3 shadow-[0_10px_22px_-18px_rgba(0,0,0,.55)]"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f26f46]/15 text-[#df4f26]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-lg font-semibold text-[#1f3f36] md:text-[1.65rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#d0d7cf] bg-[#dfe5df] shadow-[0_24px_40px_-28px_rgba(0,0,0,.5)]">
              <img
                src="/gallery/popcornceilingremoval_4238.jpeg"
                alt={`${landing.city} ceiling finish after popcorn removal`}
                loading="lazy"
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(108deg,rgba(14,84,65,.34)_0%,rgba(18,95,73,.2)_42%,rgba(18,95,73,0)_74%)]" />
              <div className="absolute left-3 top-3 rounded-lg bg-[#0f4a3a]/90 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.1em] text-white md:text-base">
                Professional Finishing Crew
              </div>
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-1 gap-2 md:grid-cols-3">
                {(landing.heroStats || []).slice(0, 3).map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/35 bg-[#113f33]/86 px-2.5 py-2 text-center text-xs font-semibold text-white md:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2a6655] bg-[#0f4f3a]">
        <div className="container-x grid gap-2 py-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "LICENSED & INSURED",
            "3-YEAR WARRANTY",
            "DUST-FREE GUARANTEED",
            "700+ PROJECTS DONE",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#2d6d58] bg-[#145640] px-3 py-2 text-[13px] font-bold tracking-wide text-white md:text-base"
            >
              <span className="text-[#9fd4bf]">
                <ShieldIcon />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="photos" className="scroll-mt-28 container-x py-10">
        <h2
          className="text-center text-[2rem] font-bold uppercase text-[#114c3a] md:text-[3.2rem]"
          style={titleFont}
        >
          See The Difference
        </h2>
        <p className="mt-2 text-center text-lg text-[#2a483f] md:text-2xl">
          Real local ceilings: textured before, smooth finish after.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {landing.gallery.slice(0, 9).map((item, idx) => (
            <figure
              key={`${item.src}-${idx}`}
              className="overflow-hidden rounded-xl border border-[#ccd3cc] bg-white shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-52 w-full object-cover md:h-56"
              />
              <figcaption className="p-3 text-sm text-[#3a4a45]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-28 container-x py-10">
        <h2
          className="text-center text-[2rem] font-bold uppercase text-[#114c3a] md:text-[3.2rem]"
          style={titleFont}
        >
          Customer Reviews
        </h2>
        <LandingGoogleReviewCards
          fallbackReviews={landing.featuredReviews || []}
        />
      </section>

      <section
        id="other-services"
        className="scroll-mt-28 border-y border-[#cfd6cf] bg-[#f7f8f4]"
      >
        <div className="container-x py-10">
          <h2
            className="text-center text-[2rem] font-bold uppercase text-[#114c3a] md:text-[3.2rem]"
            style={titleFont}
          >
            Other Services We Provide
          </h2>
          <p className="mt-2 text-center text-lg text-[#2b473f] md:text-2xl">
            Need more details? Ask us about full-service options while we quote
            your ceiling.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(landing.otherServices || []).map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#c8d0c5] bg-white p-5 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#134636] md:text-[1.85rem]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[#33433d]">{service.description}</p>
                <a
                  href={service.href}
                  className="mt-4 inline-flex rounded-xl bg-gradient-to-b from-[#f26537] to-[#df4b23] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Ask for More Details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-8">
        <h2
          className="text-center text-[2rem] font-bold uppercase text-[#114c3a] md:text-[3.2rem]"
          style={titleFont}
        >
          FAQ
        </h2>
        <div className="mx-auto mt-5 max-w-5xl space-y-3">
          {landing.faq.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-[#c8d0c5] bg-white p-5 shadow-sm"
            >
              <details>
                <summary className="cursor-pointer font-semibold text-[#0f4f3a]">
                  {item.q}
                </summary>
                <p className="mt-3 text-[#33413d]">{item.a}</p>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x py-10">
        <div className="rounded-3xl border border-[#2e6e59] bg-[#0f4f3a] p-7 text-white shadow-xl">
          <h2
            className="text-[2rem] font-bold uppercase md:text-[3rem]"
            style={titleFont}
          >
            Get Your Free {landing.city} Quote Today
          </h2>
          <p className="mt-2 text-[#d6e4de] text-lg">
            {landing.heroPromise || landing.servingLine}
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {[
              "Same-Day Response",
              "No Obligation",
              "Licensed & Insured",
              "3-Year Warranty",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#2d6d58] bg-[#145640] px-3 py-1 text-[#9fd4bf] font-semibold"
              >
                ✓ {t}
              </span>
            ))}
          </div>
          <LandingActionButtons
            city={landing.city}
            phoneHref={PHONE_HREF}
            quoteHref="#quick-quote"
            className="mt-6 flex flex-wrap gap-3"
            quoteClassName="inline-flex items-center rounded-xl bg-gradient-to-b from-[#f36537] to-[#df4c24] px-5 py-3 text-lg font-bold uppercase tracking-wide text-white"
            callClassName="inline-flex items-center rounded-xl border border-[#81a696] px-5 py-3 text-lg font-bold uppercase tracking-wide text-white hover:bg-[#0b3f2f]"
          />
        </div>
      </section>

      <footer className="border-t border-[#c8d0c4] bg-[#f7f8f4]">
        <div className="container-x py-6 text-sm text-[#44524d]">
          <p className="font-semibold uppercase tracking-wide text-[#0f4f3a]">
            Service areas
          </p>
          <p>{landing.servingLine}</p>
          <p className="mt-2">Hours: Mon-Sun, 8:00 AM - 9:00 PM</p>
          <p className="mt-2">
            Insurance: Fully insured crew with protected setup.
          </p>
          <p className="mt-2">
            Privacy: Form details are used only to prepare your quote and
            project follow-up.
          </p>
        </div>
      </footer>

      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#264f42] bg-[#0f3f32]/95 p-2 shadow-2xl md:hidden"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        <LandingActionButtons
          city={landing.city}
          phoneHref={PHONE_HREF}
          quoteHref="#quick-quote"
          className="grid grid-cols-2 gap-2"
          phoneLabel={
            <span className="inline-flex items-center gap-1.5">
              <PhoneIcon className="h-4 w-4" />
              <span>Call for instant quote</span>
            </span>
          }
          quoteLabel={
            <span className="inline-flex items-center gap-1.5">
              <EditIcon className="h-4 w-4" />
              <span>Get estimate online</span>
            </span>
          }
          callClassName="inline-flex items-center justify-center rounded-xl border border-[#3f7a66] bg-gradient-to-b from-[#2c6f5d] to-[#1e4f42] px-2 py-3 text-sm font-bold text-white"
          quoteClassName="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#f2ad17] to-[#e39500] px-2 py-3 text-sm font-bold text-white"
        />
      </div>
    </div>
  );
}
