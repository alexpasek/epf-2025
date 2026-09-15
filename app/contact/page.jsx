
import { socialImages } from "@/lib/responsiveImages";
// app/contact/page.tsx — Next.js App Router
import Link from "next/link";
import "./contact.css";
import { CONTACT, SITE_URL } from "@/app/config"; // { phoneHref, phoneNumber, email }
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const BRAND = "EPF Pro Services";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PAGE_PATH = "/contact/";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const ORG_ID = `${BASE_URL}/#org`;
const LOC_MISS_ID = `${BASE_URL}/#loc-mississauga`;
const LOC_STONEY_ID = `${BASE_URL}/#loc-stoney`;
const HERO_IMG = "/contact/popcorn-ceiling-removal.png";

export const metadata = {
  title: { absolute: `Contact — ${BRAND} | Popcorn Ceiling Removal & Level 5 Finishes` },
  description:
    "Contact EPF Pro Services for dust-controlled popcorn ceiling removal (Level 5 smooth), drywall finishing, wallpaper removal, and interior painting. Fast estimates across Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines.",
  keywords: [
    "popcorn ceiling removal",
    "ceiling smoothing",
    "Level 5 finish",
    "drywall finishing",
    "Mississauga",
    "Oakville",
    "Hamilton",
    "Toronto",
    "Etobicoke",
    "Grimsby",
    "St. Catharines",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: `Contact ${BRAND}`,
    description:
      "Local, insured crew specializing in popcorn ceiling removal with clean containment, Level 5 finishes, and on-time schedules.",
    url: PAGE_URL,
    type: "website",
    images: socialImages([{ url: HERO_IMG }]),
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": `${BASE_URL}/` },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: { "@id": PAGE_URL },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: BRAND,
        url: `${BASE_URL}/`,
        telephone: CONTACT.phone,
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": LOC_MISS_ID,
        name: `${BRAND} — Mississauga`,
        url: PAGE_URL,
        telephone: CONTACT.phone,
        branchOf: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          streetAddress: "6855 Glen Erin Dr, Unit 33",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L5N 1P6",
          addressCountry: "CA",
        },
        areaServed: [
          "Mississauga",
          "Toronto",
          "Oakville",
          "Burlington",
          "Milton",
          "Etobicoke",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": LOC_STONEY_ID,
        name: `${BRAND} — Stoney Creek`,
        url: PAGE_URL,
        telephone: CONTACT.phone,
        branchOf: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          streetAddress: "37 Dalegrove Crescent",
          addressLocality: "Stoney Creek",
          addressRegion: "ON",
          postalCode: "L8J 3R5",
          addressCountry: "CA",
        },
        areaServed: ["Hamilton", "Stoney Creek", "Grimsby", "St. Catharines"],
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Ceiling Smoothing (Level 5)",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Smoothing",
          "Drywall Finishing",
        ],
        provider: { "@id": ORG_ID },
        areaServed: [
          "Mississauga",
          "Toronto",
          "Oakville",
          "Burlington",
          "Hamilton",
          "Milton",
          "Etobicoke",
          "Grimsby",
          "St. Catharines",
        ],
      },
      {
        "@type": "ContactPage",
        name: `Contact ${BRAND}`,
        url: PAGE_URL,
        about: { "@id": ORG_ID },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ContactPage() {
  return <div className="epf-contact"><JsonLd /><div className="contact-shell">
    <header className="contact-intro"><p className="contact-eyebrow">Let’s talk about your home</p><h1>Contact <em>EPF Pro Services.</em></h1><p>Planning popcorn ceiling removal, drywall finishing, wallpaper removal or interior painting? Tell us what you have in mind. We’ll help you understand the next step.</p><a className="contact-jump" href="#estimate">Request an estimate ↓</a></header>
    <div className="contact-layout">
      <aside className="contact-direct" aria-label="Contact options">
        <h2>A conversation is a good start.</h2><p>Call to discuss your project, or text photos of the rooms you’d like to refresh.</p>
        <a className="contact-call" href={CONTACT.phoneHref}><span>Call EPF Pro Services</span><strong>{CONTACT.phone}</strong><span aria-hidden="true">↗</span></a>
        <div className="contact-other"><a href="sms:+16479236784">Text your project photos ↗</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email} ↗</a></div>
        <div className="contact-prep"><p className="contact-eyebrow">For a more useful estimate</p><ul><li>Your city and the rooms involved</li><li>Approximate room sizes and ceiling height</li><li>Wide photos and close-ups of damage</li><li>Whether popcorn texture has been painted</li><li>Your preferred timing and access needs</li></ul><p>Have photos? Send them by text or include a photo link in the form.</p></div>
        <p className="contact-note">Serving the entire GTA and surrounding communities. Don’t see your area? Contact us directly to confirm availability.</p>
      </aside>
      <section id="estimate" className="contact-estimate" aria-labelledby="estimate-heading"><p className="contact-eyebrow">Tell us about your project</p><h2 id="estimate-heading">Request an estimate.</h2><p>Start with a few details. Fields marked “required” help us get back to you.</p><QuoteForm /><p className="contact-form-note">Sending an enquiry does not book a visit or commit you to work.</p></section>
    </div>
    <section className="contact-next" aria-labelledby="contact-next-heading"><div><p className="contact-eyebrow">What happens next</p><h2 id="contact-next-heading">A clear path from here.</h2></div><ol><li><span>01</span><h3>We review your details</h3><p>Your photos, location and goals help us understand the work.</p></li><li><span>02</span><h3>We discuss the scope</h3><p>We follow up with questions and arrange an assessment when needed.</p></li><li><span>03</span><h3>You review the plan</h3><p>Confirm the inclusions, timing and quote before work begins.</p></li></ol></section>
    <section className="contact-locations" aria-labelledby="contact-locations-heading"><div className="contact-section-head"><div><p className="contact-eyebrow">Local service hubs</p><h2 id="contact-locations-heading">Find us in your area.</h2></div><Link href="/service-areas/">Explore all service areas ↗</Link></div><div className="contact-location-grid">
      <article><h3>Mississauga</h3><address>6855 Glen Erin Dr, Unit 33<br />Mississauga, ON L5N 1P6</address><p>Mississauga, Toronto, Oakville, Burlington, Milton and Etobicoke.</p><a href="https://maps.google.com/?q=6855+Glen+Erin+Dr+Unit+33+Mississauga+ON+L5N+1P6" target="_blank" rel="noopener noreferrer">Open Mississauga in Google Maps ↗</a></article>
      <article><h3>Stoney Creek</h3><address>37 Dalegrove Crescent<br />Stoney Creek, ON L8J 3R5</address><p>Hamilton, Stoney Creek, Grimsby, St. Catharines and nearby communities.</p><a href="https://maps.google.com/?q=37+Dalegrove+Crescent+Stoney+Creek+ON+L8J+3R5" target="_blank" rel="noopener noreferrer">Open Stoney Creek in Google Maps ↗</a></article>
    </div><nav className="contact-city-links" aria-label="Local popcorn ceiling removal services">{[['Mississauga','mississauga'],['Toronto','toronto'],['Oakville','oakville'],['Burlington','burlington'],['Hamilton','hamilton'],['Milton','milton'],['Etobicoke','etobicoke'],['Grimsby','grimsby'],['St. Catharines','st-catharines']].map(([name,slug]) => <Link key={slug} href={`/popcorn-ceiling-removal/${slug}/`}>{name}</Link>)}</nav></section>
    <section className="contact-services"><div><p className="contact-eyebrow">Popcorn ceiling removal & Level 5 finishing</p><h2>Smooth ceilings start with proper preparation.</h2><p>We specialize in turning dated textured ceilings into smooth, modern ceilings. Our process uses containment, vent masking and HEPA-assist sanding. We assess painted popcorn before choosing removal or resurfacing, with Level 5 skim coating and finish painting as agreed in your scope.</p></div><div><Link href="/services/popcorn-ceiling-removal/">Explore popcorn ceiling removal ↗</Link><Link href="/our-work/">See our project gallery ↗</Link><Link href="/our-process/">Understand our process ↗</Link><Link href="/quote/">Open the dedicated quote page ↗</Link></div></section>
  </div></div>;
}
