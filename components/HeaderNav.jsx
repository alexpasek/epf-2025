"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

/* Accent used only for nav/dropdowns (CTAs unchanged) */
const ACCENT = {
  text: "text-red-700",
  textStrong: "text-red-800",
  ring: "ring-red-500/15",
  border: "border-red-200",
  bgSoft: "bg-red-50",
  linkHover: "hover:text-red-800",
};

const SAFE_VW_PX = 24; // safe padding from viewport edges
const SERVICES_PANEL_W = 420; // narrow column for Services
const LOCATIONS_MEGA_W = 860; // roomy grid for Locations

/* ---------- Breadcrumb helpers ---------- */

/** Map slugs to pretty labels when we know them */
const SLUG_LABELS = {
  services: "Services",
  "popcorn-ceiling-removal": "Popcorn Ceiling Removal",
  popcorn: "Popcorn Ceiling Removal",
  "drywall-installation": "Drywall Installation",
  wallpaper: "Wallpaper Removal",
  "interior-painting": "Interior Painting",
  "our-work": "Our Work",
  "our-process": "Our Process",
  "service-areas": "Service Areas",
  contact: "Contact",
  blog: "Blog",

  // location hubs
  "popcorn-removal": "Popcorn Removal",

  // cities
  mississauga: "Mississauga",
  toronto: "Toronto",
  oakville: "Oakville",
  burlington: "Burlington",
  hamilton: "Hamilton",
  milton: "Milton",
  etobicoke: "Etobicoke",
  grimsby: "Grimsby",
  "st-catharines": "St. Catharines",
};

/** Fallback: turn "st-catharines" -> "St Catharines" (or use SLUG_LABELS if present) */
function labelFromSlug(slug) {
  if (SLUG_LABELS[slug]) return SLUG_LABELS[slug];
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

/** Build breadcrumb items from pathname */
function buildCrumbs(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [{ href: "/", label: "Home" }];
  let acc = "";
  for (let i = 0; i < parts.length; i++) {
    acc += `/${parts[i]}`;
    const isLast = i === parts.length - 1;
    crumbs.push({
      href: acc + "/", // keep your trailing slash style
      label: labelFromSlug(decodeURIComponent(parts[i])),
      current: isLast,
    });
  }
  return crumbs;
}

/** JSON-LD for breadcrumbs */
function BreadcrumbJsonLd({ crumbs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.label,
      item: c.href, // relative is OK; absolute even better if you set site URL
    })),
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Header ---------- */

export default function HeaderNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const services = [
    {
      href: "/services/popcorn-ceiling-removal/",
      label: "Popcorn Ceiling Removal",
    },
    { href: "/services/drywall-installation/", label: "Drywall Installation" },
    { href: "/services/wallpaper-removal/", label: "Wallpaper Removal" },
    { href: "/services/interior-painting/", label: "Interior Painting" },
  ];

  const locations = [
    { href: "/popcorn-removal/mississauga/", label: "Mississauga" },
    { href: "/popcorn-ceiling-removal/toronto/", label: "Toronto" },
    { href: "/popcorn-ceiling-removal/oakville/", label: "Oakville" },
    { href: "/popcorn-ceiling-removal/burlington/", label: "Burlington" },
    { href: "/popcorn-ceiling-removal/hamilton/", label: "Hamilton" },
    { href: "/popcorn-ceiling-removal/milton/", label: "Milton" },
    { href: "/popcorn-ceiling-removal/etobicoke/", label: "Etobicoke" },
    { href: "/grimsby/", label: "Grimsby" },
    { href: "/st-catharines/", label: "St. Catharines" },
  ];

  const crumbs = buildCrumbs(pathname);

  return (
    <header className="sticky top-0 z-50">
      {/* Row 1: taller + stylish glassy header */}
      <div className="border-b bg-gradient-to-r from-white via-white to-red-50/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_10px_30px_-20px_rgba(0,0,0,.55)]">
        <div className="container-x py-2 md:py-3 flex h-24 md:h-28 items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 min-w-0"
            title="Popcorn ceiling Removal EPF Pro Services — Home"
          >
            <img
              src="/logo.png"
              alt="Popcorn ceiling removal EPF Pro Services"
              className="w-auto h-14 md:h-16 object-contain"
            />
            <span className="underline decoration-red-500 text-lg md:text-2xl font-semibold leading-none whitespace-nowrap truncate text-slate-800">
              Popcorn Ceiling Removal
            </span>
          </Link>

          {/* Desktop/tablet CTAs */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a
              href={PHONE_HREF}
              className="btn-cta whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              title="Call for a fast popcorn ceiling removal estimate"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="btn-cta whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              title="Get a free popcorn ceiling removal quote"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden ml-auto inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-slate-300/60 shadow-sm bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Row 2: right-aligned menu */}
      <div className="hidden lg:block border-b bg-gradient-to-r from-red-50/60 via-white to-red-50/60">
        <nav
          className="container-x py-3 flex items-center gap-2 text-[15px] justify-end"
          aria-label="Primary navigation"
        >
          <NavItem href="/" label="HOME" active={isActive("/")} />
          <NavItem href="/about/" label="ABOUT" active={isActive("/about/")} />

          {/* SERVICES — narrow vertical column */}
          <SmoothDropdown
            label="SERVICES"
            active={isActive("/services/")}
            align="right"
            widthPx={SERVICES_PANEL_W}
            closeKey={pathname}
          >
            <Panel>
              <div className="flex flex-col gap-2 max-h-[70vh] overflow-auto pr-1">
                {services.map((s) => (
                  <MenuItemCard key={s.href} href={s.href} label={s.label} />
                ))}
              </div>
              <PanelFooter>
                <DropdownLink href="/services/" label="All Services →" bold />
                <Link
                  href="/quote/"
                  className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  Free Quote →
                </Link>
              </PanelFooter>
            </Panel>
          </SmoothDropdown>

          <NavItem
            href="/our-work/"
            label="OUR WORK"
            active={isActive("/our-work/")}
          />

          {/* LOCATIONS */}
          <SmoothDropdown
            label="LOCATIONS"
            active={
              isActive("/service-areas/") ||
              locations.some((l) => isActive(l.href))
            }
            align="right"
            widthPx={LOCATIONS_MEGA_W}
            closeKey={pathname}
          >
            <Panel>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                <DropdownLink href="/service-areas/" label="All Areas →" bold />
                {locations.map((l) => (
                  <MenuItemCard key={l.href} href={l.href} label={l.label} />
                ))}
              </div>
            </Panel>
          </SmoothDropdown>

          <NavItem
            href="/our-process/"
            label="OUR PROCESS"
            active={isActive("/our-process/")}
          />
          <NavItem
            href="/contact/"
            label="CONTACT"
            active={isActive("/contact/")}
          />
          <NavItem href="/blog/" label="BLOG" active={isActive("/blog/")} />
        </nav>
      </div>

      {/* Row 3: Breadcrumb stripe (blue) */}
      {pathname !== "/" && (
        <>
          <BreadcrumbJsonLd crumbs={crumbs} />
          <div className="border-b border-[#3EC5F1] bg-[#00AEEF] text-slate-100">
            <nav
              aria-label="Breadcrumb"
              className="container-x py-1 text-[13px] leading-5"
            >
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                {crumbs.map((c, i) => {
                  const isLast = i === crumbs.length - 1;
                  return (
                    <div key={c.href} className="flex items-center shrink-0">
                      {i > 0 && <span className="mx-2 opacity-70">/</span>}
                      {isLast ? (
                        <span
                          className="font-semibold"
                          aria-current="page"
                          title={c.label}
                        >
                          {c.label}
                        </span>
                      ) : (
                        <Link
                          href={c.href}
                          className="underline decoration-slate-900/30 underline-offset-2 hover:decoration-slate-900/60 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 rounded"
                          title={c.label}
                        >
                          {c.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden border-b bg-white/95 backdrop-blur transition-[max-height] overflow-hidden",
          mobileOpen ? "max-h-[75vh]" : "max-h-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="container-x py-3">
          <nav className="space-y-1 text-[16px]" aria-label="Mobile">
            <MobileLink href="/" label="Home" active={isActive("/")} />
            <MobileLink
              href="/about/"
              label="About"
              active={isActive("/about/")}
            />
            <MobileDisclosure
              label="Services"
              open={mobileServicesOpen}
              setOpen={setMobileServicesOpen}
              items={[
                { href: "/services/", label: "All Services" },
                ...services,
              ]}
              isActive={(href) => isActive(href)}
            />
            <MobileLink
              href="/our-work/"
              label="Our Work"
              active={isActive("/our-work/")}
            />
            <MobileDisclosure
              label="Locations"
              open={mobileLocationsOpen}
              setOpen={setMobileLocationsOpen}
              items={[
                { href: "/service-areas/", label: "All Areas" },
                ...locations,
              ]}
              isActive={(href) => isActive(href)}
            />
            <MobileLink
              href="/our-process/"
              label="Our Process"
              active={isActive("/our-process/")}
            />
            <MobileLink
              href="/contact/"
              label="Contact"
              active={isActive("/contact/")}
            />
            <MobileLink
              href="/blog/"
              label="Blog"
              active={isActive("/blog/")}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ----------------- Desktop helpers ----------------- */

function NavItem({ href, label, active }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "px-3 py-2 rounded-xl transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
        active
          ? `bg-white ${ACCENT.textStrong} shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)] ring-1 ${ACCENT.ring}`
          : `hover:bg-white/70 ${ACCENT.linkHover}`,
      ].join(" ")}
      title={label}
    >
      {label}
    </Link>
  );
}

/* Right-anchored dropdown with hover intent and viewport clamp */
function SmoothDropdown({
  label,
  active,
  children,
  align = "right",
  widthPx = 860,
  closeKey,
}) {
  const [open, setOpen] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpen(true), 80);
  };
  const handleLeave = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 110);
  };

  useEffect(() => {
    setOpen(false);
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
  }, [closeKey]);

  // right-anchored and constrained to viewport
  const style = {
    width: `${widthPx}px`,
    maxWidth: `calc(100vw - ${SAFE_VW_PX * 2}px)`,
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className={[
          "px-3 py-2 rounded-xl transition-all inline-flex items-center gap-1",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
          active
            ? `bg-white ${ACCENT.textStrong} shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)] ring-1 ${ACCENT.ring}`
            : `hover:bg-white/70 ${ACCENT.linkHover}`,
        ].join(" ")}
      >
        <span>{label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-70">
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      <div
        className={[
          "absolute top-full mt-2 pt-1",
          align === "right" ? "right-0" : "left-0",
          "transition-all duration-150 ease-out will-change-transform",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none",
        ].join(" ")}
        style={style}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
}

/* Panel shell (shared by Services + Locations) */
function Panel({ children }) {
  return (
    <div
      className={`p-3 md:p-4 rounded-2xl border ${ACCENT.border} bg-white shadow-xl ring-1 ${ACCENT.ring} min-w-[320px]`}
    >
      <div className={`h-1.5 w-full rounded-full ${ACCENT.bgSoft} mb-3`} />
      {children}
    </div>
  );
}
function PanelFooter({ children }) {
  return (
    <div className="mt-3 flex items-center justify-between">{children}</div>
  );
}

/* Simple, high-contrast menu card (no icons, no blurbs) */
function MenuItemCard({ href, label }) {
  return (
    <Link
      href={href}
      title={label}
      aria-label={label}
      className={[
        "group p-3 rounded-xl border bg-white",
        ACCENT.border,
        "hover:bg-red-50/70 hover:border-red-300",
        "shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_8px_18px_-12px_rgba(0,0,0,.35)]",
        "transition",
      ].join(" ")}
    >
      <div className="font-semibold text-slate-900 group-hover:text-red-800">
        {label}
      </div>
    </Link>
  );
}

function DropdownLink({ href, label, bold }) {
  return (
    <Link
      href={href}
      role="menuitem"
      title={label}
      className={[
        "block px-3 py-2 rounded-xl text-[15px] transition",
        bold ? "font-semibold text-slate-900" : "text-slate-700",
        `hover:bg-slate-50 ${ACCENT.linkHover} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30`,
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

/* ----------------- Mobile helpers ----------------- */

function MobileLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={[
        "block w-full px-3 py-2 rounded-xl",
        active ? "bg-slate-100 font-semibold" : "hover:bg-slate-50",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function MobileDisclosure({ label, open, setOpen, items, isActive }) {
  return (
    <div className="rounded-xl border border-slate-200/60">
      <button
        type="button"
        className="w-full flex items-center justify-between px-3 py-2"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{label}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={
            open ? "rotate-180 transition-transform" : "transition-transform"
          }
        >
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div
        className={
          open
            ? "max-h-96 overflow-hidden transition-[max-height]"
            : "max-h-0 overflow-hidden transition-[max-height]"
        }
      >
        <div className="p-1 pt-0">
          {items.map((i) => (
            <Link
              key={"href" in i ? i.href : i.label}
              href={"href" in i ? i.href : "#"}
              className={[
                "block px-3 py-2 rounded-lg text-[15px]",
                isActive("href" in i ? i.href : "")
                  ? "bg-slate-100 font-semibold"
                  : "hover:bg-slate-50",
              ].join(" ")}
            >
              {"label" in i ? i.label : i}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
