// app/popcorn-ceiling-removal/mississauga/streetsville/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Streetsville Popcorn Ceiling Removal | Level 5 Smooth Ceilings",
  description:
    "Popcorn ceiling removal Streetsville: HEPA containment, Level 5 skim coat, stain-block primer for heritage homes along Queen St S, Thomas St, and Credit River area.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/streetsville/",
  },
  openGraph: {
    title: "Streetsville Popcorn Ceiling Removal | Level 5 Finish",
    description:
      "Professional popcorn ceiling removal service Streetsville homeowners trust—ceiling texture removal, Level 5 skim, primer, and paint-ready handoff.",
    url: "/popcorn-ceiling-removal/mississauga/streetsville/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Streetsville Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Streetsville, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/streetsville/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Popcorn Ceiling Removal",
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Streetsville",
            item: "/popcorn-ceiling-removal/mississauga/streetsville/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work in Streetsville heritage homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Popcorn ceiling removal Streetsville crews handle older plaster and mixed drywall in heritage homes along Queen St S and Credit River area.",
            },
          },
          {
            "@type": "Question",
            name: "Can you blend pot-light rings and old patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather repairs during Level 5 skim so pot-light rings and previous patches disappear after stain-block primer.",
            },
          },
        ],
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";

export default function Page() {
  const gallery = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* MODERN HERO SECTION - TEAL/CYAN THEME */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white min-h-[90vh] flex items-center">
        {/* ...existing animated background elements... */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-teal-500/40 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* ...existing hero grid layout matching Lakeview... */}
      </section>

      {/* Continue with remaining sections matching Lakeview structure */}
    </>
  );
}
