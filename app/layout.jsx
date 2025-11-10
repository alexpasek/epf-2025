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
import HeaderNav from "@/components/HeaderNav"; // ✅ NEW
import Footer from "@/components/Footer";
export const metadata = {
  title: {
    default: "Wallpaper Removal Pro — GTA",
    template: "%s — Wallpaper Removal Pro",
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://epf-2025.pages.dev"
    ),
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
        <ChatWidgetAgent />
        <HeaderNav /> {/* ✅ use the client header */}
        <TrustBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <LightboxGlobal />
      </body>
    </html>
  );
}
