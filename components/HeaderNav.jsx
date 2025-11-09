"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config"; // used on desktop

export default function HeaderNav() {
  const pathname = usePathname();

  const services = [
    { href: "/services/wallpaper/", label: "Wallpaper Removal" },
    { href: "/services/popcorn/", label: "Popcorn Ceiling" },
    { href: "/services/drywall-installation/", label: "Drywall Installation" },
    { href: "/services/interior-painting/", label: "Interior Painting" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40">
      {/* Row 1: Logo + CTAs (CTAs visible md+ only) */}
      <div className="bg-white">
        <div className="container-x py-2 md:py-3 flex h-16 items-center gap-3">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <img
              src="/logo.png"
              alt="Popcorn Ceiling removal"
              className="w-auto h-12 md:h-14 object-contain"
            />
            <span className="text-lg md:text-xl font-semibold leading-none whitespace-nowrap truncate text-slate-800">
              Popcorn Ceilign Removal EPF Pro Services
            </span>
          </Link>

          {/* Desktop/tablet CTAs only */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a
              href={PHONE_HREF}
              className="btn-cta whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="btn-cta whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Row 2: Light gradient menu (desktop) */}
      <div className="hidden lg:block border-b bg-gradient-to-r from-sky-50 via-white to-indigo-50 text-slate-700">
        <nav
          className="container-x py-2 flex items-center gap-2 text-[15px]"
          aria-label="Primary navigation"
        >
          {[
            { href: "/", label: "Home" },
            ...services,
            { href: "/before-after/", label: "Before & After" },

            { href: "/services/", label: "Locations" },
            { href: "/about-us/", label: "About us" },
            { href: "/contact/", label: "Contact us" },
            { href: "/blog/", label: "Blog" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={[
                "px-3 py-2 rounded-xl transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
                isActive(item.href)
                  ? "bg-white text-blue-700 shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)] ring-1 ring-blue-600/15"
                  : "hover:bg-white/70 hover:text-slate-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile: only pill scroller (no phone/quote buttons in header) */}
      <div className="lg:hidden border-b bg-gradient-to-r from-sky-50 via-white to-indigo-50">
        <div className="container-x py-2">
          {/* removed the mobile CTAs row to keep header clean on phones */}
          <nav
            className="flex gap-2 overflow-x-auto pb-1"
            aria-label="Primary navigation"
          >
            {[
              { href: "/", label: "Home" },
              ...services,
              { href: "/before-after/", label: "Before & After" },
              { href: "/blog/", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "shrink-0 px-3 py-2 rounded-2xl text-[15px] transition-all",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
                  isActive(item.href)
                    ? "bg-white text-blue-700 font-semibold shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45)] ring-1 ring-blue-600/15"
                    : "bg-white/70 text-slate-800 hover:bg-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
