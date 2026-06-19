import "./globals.css";
import Link from "next/link";
import StickyCTA from "@/components/StickyCTA";
import TrustBar from "@/components/TrustBar";
import LightboxGlobal from "@/components/LightboxGlobal";
import SEOJsonLd from "@/components/SEOJsonLd";
import { cities } from "@/data/cities";
import {
  BRAND_NAME,
  CONTACT,
  SERVICE_AREAS,
  PHONE_NUMBER,
  PHONE_HREF,
} from "./config";
import ChatWidgetAgent from "@/components/ChatWidgetAgent";
import ReviewScroller from "@/components/ReviewScroller";

export const metadata = {
  title: {
    default: "Popcorn Ceiling Removal Pro — GTA",
    template: "%s — Popcorn Ceiling Removal Pro",
  },
  description:
    "Wallpaper removal, popcorn ceiling removal, drywall installation & repair, and interior painting across the GTA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <SEOJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/*ai widget*/}
        <ChatWidgetAgent />

        <Header />
        <TrustBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <LightboxGlobal />
      </body>
    </html>
  );
}

function Header() {
  const services = [
    { href: "/services/wallpaper-removal/", label: "Wallpaper Removal" },
    { href: "/services/popcorn-ceiling-removal/", label: "Popcorn Ceiling" },
    { href: "/services/drywall-installation/", label: "Drywall Installation" },
    { href: "/services/interior-painting/", label: "Interior Painting" },
  ];
  return (
    <header className="bg-white border-b md:sticky md:top-0 md:z-40">
      <div className=" container-x py-2 md:py-3 flex h-16 items-center gap-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <img
            src="/logo.png"
            alt="Popcorn Ceiling Removal Pro"
            className="w-auto h-14 md:h-15 object-contain"
          />
          <span className="text-lg md:text-xl font-semibold leading-none whitespace-nowrap truncate">
            Popcorn Ceiling Removal Pro
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a href={PHONE_HREF} className="btn-cta whitespace-nowrap">
            📞 {PHONE_NUMBER}
          </a>
          <Link href="/quote/" className="btn-cta whitespace-nowrap">
            Get Quote
          </Link>
        </div>
      </div>
      <div className="hidden lg:block border-t">
        <div className="container-x py-2 flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline whitespace-nowrap">
            Home
          </Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="hover:underline whitespace-nowrap"
            >
              {s.label}
            </Link>
          ))}
          <Link href="/blog/" className="hover:underline whitespace-nowrap">
            Blog
          </Link>
          <Link href="/our-work/" className="hover:underline whitespace-nowrap">
            Before & After
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="container-x py-2 space-y-2">
          <div className=" hidden sm:hidden  md:hidden  items-center justify-between px-1">
            <a
              href={PHONE_HREF}
              className="  btn-cta w-1/2 text-center flex  gap-3"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              className="  md:flex btn-cta max-w-screen-sm text-center gap-3"
              href="/quote/"
            >
              Get Quote
            </Link>
          </div>
          <div className="scroller">
            <Link href="/">Home</Link>
            <Link href="/services/wallpaper-removal/">Wallpaper</Link>
            <Link href="/services/popcorn-ceiling-removal/">Popcorn</Link>
            <Link href="/services/drywall-installation/">Drywall</Link>
            <Link href="/services/interior-painting/">Painting</Link>
          </div>
          {/* <div className="scroller">
            {cities.map((c) => (
              <Link key={c.slug} href={`/${c.slug}/`}>
                {c.name}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer
      className="mt-16 border-t bg-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <section id="reviews" className="mt-10 md:mt-16 scroll-mt-24">
        <ReviewScroller
          className="py-4 md:py-6 rounded 3xl"
          brand="30 64 175"
          accent="16 185 129"
          bg="vivid"
          bgAlpha={0.12}
          cardAlpha={0.1}
          hoverAlpha={0.2}
        />
      </section>
      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold" itemProp="name">
            Popcorn Ceiling Removal Pro
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Serving {SERVICE_AREAS.join(" · ")}
          </p>

          {/* Address */}
          <address
            className="mt-3 not-italic text-sm text-gray-700"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <div className="font-medium text-gray-900">📍 Address</div>
            <a
              className="mt-1 block hover:underline"
              href="https://maps.google.com/?q=2394+Haines+Rd,+Mississauga,+ON+L4Y+1Y6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
            >
              <span itemProp="streetAddress">2394 Haines Rd</span>,{" "}
              <span itemProp="addressLocality">Mississauga</span>,{" "}
              <span itemProp="addressRegion">ON</span>{" "}
              <span itemProp="postalCode">L4Y 1Y6</span>
            </a>
            <meta itemProp="addressCountry" content="CA" />
          </address>

          <p className="mt-3 text-sm text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/contact/" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/about/" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/blog/" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/our-work/" className="hover:underline">
                Before &amp; After
              </a>
            </li>
            <li>
              <a href="/quote/" className="hover:underline">
                Get Quote
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Legal</div>
          <p className="mt-3 text-sm text-gray-600">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
