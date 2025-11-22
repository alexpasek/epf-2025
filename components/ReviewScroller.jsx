"use client";
import { useEffect, useRef, useState } from "react";

/* Smooth scroll by one card width */
function useScroller() {
  const ref = useRef(null);
  const [step, setStep] = useState(360);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const card = el.querySelector("[data-card]");
      if (!card) return;
      const next = (card.clientWidth || 0) + 16; // card width + gap
      setStep((prev) => (Math.abs(prev - next) > 0.5 ? next : prev));
    };

    // measure once and on resize without forcing repeated sync reads
    let raf = requestAnimationFrame(measure);
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(measure);
      });
      ro.observe(el);
    } else {
      window.addEventListener("resize", measure);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (ro) {
        try {
          ro.disconnect();
        } catch (e) {}
      } else {
        window.removeEventListener("resize", measure);
      }
    };
  }, []);

  const by = (dir = 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return { ref, by };
}

/* Simple stars */
function Stars({ count = 5 }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} star rating`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-yellow-400">
          <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

const REVIEWS = [
  {
    name: "Sophie A.",
    city: "Mississauga",
    service: "Popcorn Ceiling Removal",
    text: "Fast, super clean, and the ceiling looks brand new. Set up protection, HEPA sanded, and finished exactly on time.",
  },
  {
    name: "Daniel K.",
    city: "Mississauga",
    service: "Interior Painting",
    text: "Walls and closets done in two days with crisp lines. Great communication and tidy cleanup each evening.",
  },
  {
    name: "Priya N.",
    city: "Oakville",
    service: "Wallpaper Removal",
    text: "Vinyl wallpaper was stubborn, but they steamed, skim-coated, and primed to a flawless paint-ready finish.",
  },
  {
    name: "Marco R.",
    city: "Oakville",
    service: "Drywall (Board + Finish)",
    text: "Bulkhead repairs blended perfectly. Ready for paint with a smooth Level 5 finish.",
  },
  {
    name: "Hannah G.",
    city: "Burlington",
    service: "Popcorn Ceiling Removal",
    text: "Unpainted texture scraped, skimmed, and primed. Bright, flat ceilings—zero mess left behind.",
  },
  {
    name: "Ahmed Y.",
    city: "Burlington",
    service: "Interior Painting",
    text: "Colour change across main floor—efficient crew, neat edges, and honest advice on sheens.",
  },
  {
    name: "Laura C.",
    city: "Milton",
    service: "Wallpaper Removal",
    text: "Careful removal around bay window, then skim and prime. You can’t tell paper was ever there.",
  },
  {
    name: "Ethan J.",
    city: "Milton",
    service: "Popcorn Ceiling Removal",
    text: "Painted popcorn handled with a test patch, then Level 5 skim. Worth every dollar.",
  },
  {
    name: "Marta W.",
    city: "Stoney Creek",
    service: "Drywall (Board + Finish)",
    text: "New bedroom added—framing seams invisible after finishing. On schedule and professional.",
  },
  {
    name: "Ivan T.",
    city: "Stoney Creek",
    service: "Interior Painting",
    text: "Two coats, repaired dings, and a smooth result. Friendly team and fair pricing.",
  },
  {
    name: "Grace L.",
    city: "Oakville",
    service: "Popcorn Ceiling Removal",
    text: "Stain-block primer and raking-light checks made the finish look perfectly even.",
  },
  {
    name: "Noah B.",
    city: "Mississauga",
    service: "Wallpaper Removal",
    text: "Adhesive took effort, but they handled it and left walls truly paint-ready.",
  },
];

/**
 * Props:
 * - brand:  "R G B" (string)  primary brand color (matches your logo)
 * - accent: "R G B" (string)  secondary color for vivid ribbon
 * - bg: "subtle" | "vivid" | "solid"  background style for section
 * - sectionBg: any CSS color (used when bg="solid"), e.g. "#0ea5e9" or "rgb(14 165 233 / 0.08)"
 * - bgAlpha:   0..1 brand/accent background tint strength
 * - cardAlpha: 0..1 card base tint
 * - hoverAlpha:0..1 card hover tint
 */
export default function ReviewScroller({
  className = "",
  brand = "30 64 175", // #1E40AF
  accent = "236 72 153", // #EC4899 (pink)
  bg = "vivid", // "subtle" | "vivid" | "solid"
  sectionBg = "transparent", // used only when bg="solid"
  bgAlpha = 0.1,
  cardAlpha = 0.08,
  hoverAlpha = 0.16,
}) {
  const { ref, by } = useScroller();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = setTimeout(
      () => el.scrollBy({ left: 120, behavior: "smooth" }),
      1200
    );
    return () => clearTimeout(id);
  }, [ref]);

  return (
    <section
      className={`relative ${className}`}
      aria-label="Customer reviews"
      style={{
        "--brand": brand,
        "--accent": accent,
        "--bgA": String(bgAlpha),
        "--cardA": String(cardAlpha),
        "--hoverA": String(hoverAlpha),
        "--sectionBg": sectionBg,
      }}
    >
      {/* === Section background variants === */}
      {bg === "vivid" && (
        <>
          {/* Vivid gradient ribbon */}
          <div
            className="
              absolute inset-x-0 -top-6 h-28 md:h-32
              bg-[linear-gradient(100deg,rgb(var(--brand)/0.28),rgb(var(--accent)/0.28))]
              blur-xl opacity-90 rounded-3xl pointer-events-none
              mix-blend-normal
            "
          />
          {/* Radial corners + soft dots */}
          <div
            className="
            absolute inset-0 pointer-events-none
            bg-[radial-gradient(700px_260px_at_10%_0%,rgb(var(--brand)/var(--bgA)),transparent_60%),radial-gradient(700px_260px_at_90%_100%,rgb(var(--accent)/var(--bgA)),transparent_60%)]
          "
          />
          <div
            className="
            absolute inset-0 pointer-events-none
            bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.55)_1px,transparent_1px)]
            bg-[size:14px_14px] opacity-20
          "
          />
        </>
      )}

      {bg === "subtle" && (
        <div
          className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(600px_220px_at_0%_0%,rgb(var(--brand)/var(--bgA)),transparent_60%),radial-gradient(600px_220px_at_100%_100%,rgb(var(--brand)/calc(var(--bgA)*0.75)),transparent_60%)]
        "
        />
      )}

      {bg === "solid" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--sectionBg)" }}
        />
      )}

      {/* === Foreground content === */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-3">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Why Customers Love Us
            </h2>
            <p className="text-sm text-zinc-600">
              Real projects across Mississauga, Oakville, Burlington, Milton,
              and Stoney Creek.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => by(-1)}
              aria-label="Previous reviews"
              className="h-9 w-9 rounded-full border border-black/10 bg-white hover:bg-zinc-50 grid place-items-center shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              onClick={() => by(1)}
              aria-label="Next reviews"
              className="h-9 w-9 rounded-full border border-black/10 bg-white hover:bg-zinc-50 grid place-items-center shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* One-line scroller */}
        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-300/60 scrollbar-track-transparent px-0 pb-2"
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="
                p-[1px] rounded-2xl snap-start
                bg-[linear-gradient(140deg,rgb(var(--brand)/0.35),rgb(var(--accent)/0.35))]
                shadow-[0_10px_30px_-10px_rgba(0,0,0,.35)]
              "
              data-card
            >
              <article
                className="
                  min-w-[320px] max-w-[320px]
                  rounded-[14px] border border-white/30
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  hover:-translate-y-0.5 relative overflow-hidden
                  p-5 md:p-4

                  /* MOBILE: taller, more readable; desktop slightly tighter */
                  min-h-[250px] md:min-h-[200px]

                  /* Card tint + hover */
                  bg-[rgb(var(--brand)/var(--cardA))]
                  hover:bg-[rgb(var(--brand)/var(--hoverA))]
                  backdrop-blur-[1px]
                "
              >
                {/* sheen on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.18),transparent)]" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <Stars />
                  <span className="text-[11px] text-zinc-700">{r.city}</span>
                </div>

                <h3 className="text-[15px] font-medium mb-1 text-zinc-900">
                  {r.service}
                </h3>
                <p className="text-[15.5px] leading-6 md:text-[13.5px] md:leading-6 text-zinc-900/90 line-clamp-6 md:line-clamp-4">
                  {r.text}
                </p>
                <div className="mt-3 text-[12.5px] text-zinc-800">
                  — {r.name}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mobile arrows under track */}
        <div className="mt-3 md:hidden flex justify-center gap-2">
          <button
            onClick={() => by(-1)}
            aria-label="Previous reviews"
            className="h-9 px-3 rounded-full border border-black/10 bg-white hover:bg-zinc-50 shadow-sm text-sm"
          >
            Prev
          </button>
          <button
            onClick={() => by(1)}
            aria-label="Next reviews"
            className="h-9 px-3 rounded-full border border-black/10 bg-white hover:bg-zinc-50 shadow-sm text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
