import Link from "next/link";
import ResponsiveImage from "@/components/ResponsiveImage";
import QuoteForm from "@/components/QuoteForm";
import { socialImages } from "@/lib/responsiveImages";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import styles from "./hamilton.module.css";
import AreaCards from "@/components/hamilton/AreaCards";

export const revalidate = 86400;

const PATH = "/services/drywall-installation/hamilton/";
const BASE = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const URL = `${BASE}${PATH}`;
const TITLE = "Drywall Installation Hamilton | EPF Pro Services";
const DESCRIPTION = "Drywall installation in Hamilton for basements, walls and ceilings. Board hanging, taping, mudding and Level 4 or 5 finishing. Request an itemized quote.";
const PHONE = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const MAP_URL = "https://maps.google.com/maps?cid=15344480136538896175";
const HERO = "/services/drywall/3.webp";
const SOCIAL_IMAGES = socialImages([{ url: HERO, alt: "Two installers positioning a drywall panel against timber framing" }]);

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: "en_CA", images: SOCIAL_IMAGES },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: SOCIAL_IMAGES.map((image) => image.url) },
};

const FAQS = [
  { q: "How much does drywall installation cost in Hamilton?", a: "The quote depends on the wall and ceiling area, board specification, ceiling height, access and finish level. Demolition, disposal, insulation, priming and painting should be listed separately when needed. Send room dimensions, photos or drawings so we can prepare an itemized scope and confirm any site visit requirements." },
  { q: "Do you handle board hanging, taping and mudding together?", a: "Yes. We provide board installation, joint taping, mudding and sanding as a coordinated scope. We agree on the finish level before starting and identify whether primer and painting are included or will be completed by another trade." },
  { q: "Can you install drywall in a Hamilton basement?", a: "Yes. Basement projects can include walls, ceilings, bulkheads and stair transitions. Before boarding, the framing, mechanical rough-ins, moisture conditions and any required inspections need to be ready. Tell us about the intended use of the space and any specified fire or sound assemblies." },
  { q: "Should I choose a Level 4 or Level 5 finish?", a: "Level 4 is a common finish for many painted walls. Level 5 adds a thin skim coat over the whole surface to reduce differences between the drywall paper and finished joints. It is worth considering for strong side lighting, broad ceilings or higher-sheen paint. Primer, paint selection and lighting still affect the final appearance." },
  { q: "How long will installation and finishing take?", a: "Timing depends on the area, layout, access and number of finishing coats. Joint compound needs appropriate drying time between coats, and temperature, humidity and ventilation affect that schedule. We set out the stages and drying allowances in your quote rather than promise the same turnaround for every room." },
  { q: "Do you work in occupied homes and condos?", a: "Yes. We plan floor protection, dust containment, material handling and cleanup around the rooms still in use. Condo projects also need suitable delivery access, elevator bookings and building work hours. Discuss those requirements before booking so the schedule reflects the property." },
];

const SCOPES = [
  { number: "01", title: "Basements & renovations", text: "Board installation for rec rooms, additions and interior renovations, including bulkheads, openings and transitions to existing walls.", detail: "New spaces, planned from framing to finish" },
  { number: "02", title: "Walls & ceilings", text: "New panels and replacement sections, with attention to board layout, backing, joints and the lighting that will reveal the finished surface.", detail: "A consistent foundation for your paint" },
  { number: "03", title: "Condos & commercial spaces", text: "Installation for condo updates, offices and retail interiors, coordinated with delivery access, building rules and other trades.", detail: "A scope that works with your site" },
];

const STEPS = [
  { title: "Review the space", text: "We review your drawings or photos, dimensions, framing condition, access and finish expectations. Any repairs or preparation become part of the written scope." },
  { title: "Prepare & hang", text: "Once the site and required inspections are ready, we plan material handling and protection, then cut and fasten the board around openings and services." },
  { title: "Tape, mud & sand", text: "Joints, corners and fasteners are finished in stages, allowing drying time between coats. Sanding and surface checks prepare the agreed finish." },
  { title: "Check & hand over", text: "We review the surface under appropriate lighting, address touch-ups and clean the work area. Primer and painting follow according to your quote." },
];

const GUIDES = [
  { href: "/blog/drywall-contractor-hamilton-guide/", title: "Choosing a Hamilton drywall contractor", text: "Compare what is included in an installation and finishing quote." },
  { href: "/blog/basement-drywall-contractor-hamilton/", title: "Planning your basement drywall", text: "Think through bulkheads, access and the finishing sequence." },
  { href: "/blog/drywall-hanging-taping-finishing-gta/", title: "Hanging, taping & finishing explained", text: "Understand the stages between open framing and paint." },
  { href: "/blog/level-4-vs-level-5-drywall-finish-gta/", title: "Level 4 or Level 5?", text: "Choose a finish for the room, lighting and paint you have in mind." },
];

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function JsonLd({ neighborhoods }) {
  const hubId = `${BASE}/#stoney-creek-service-hub`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness", "@id": hubId,
        name: "Popcorn Ceiling Removal Burlington /Oakville/Hamilton Grimsby",
        url: URL, telephone: PHONE, email: CONTACT?.email || "info@epfproservices.com",
        image: `${BASE}${HERO}`, parentOrganization: { "@id": `${BASE}/#org` },
        hasMap: MAP_URL,
        address: { "@type": "PostalAddress", streetAddress: "37 Dalegrove Crescent", addressLocality: "Stoney Creek", addressRegion: "ON", postalCode: "L8J 3R5", addressCountry: "CA" },
        areaServed: [{ "@type": "City", name: "Hamilton" }, ...neighborhoods.map((n) => ({ "@type": "Place", name: n.name }))],
      },
      {
        "@type": "Service", "@id": `${URL}#service`, name: "Drywall Installation in Hamilton", url: URL,
        description: DESCRIPTION, serviceType: "Drywall installation, taping, mudding and finishing",
        provider: { "@id": hubId }, areaServed: { "@type": "City", name: "Hamilton" },
        potentialAction: { "@type": "ContactAction", target: `${URL}#quote-form` },
      },
      { "@type": "FAQPage", "@id": `${URL}#faq`, mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function Page() {
  const neighborhoods = cities.find((city) => city.slug === "hamilton")?.neighborhoods || [];
  return (
    <div className={styles.page}>
      <JsonLd neighborhoods={neighborhoods} />
      <section className={styles.hero} aria-labelledby="hamilton-title">
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>EPF Pro Services · Hamilton, Ontario</p>
              <h1 id="hamilton-title">Drywall installation<br /><em>in Hamilton.</em></h1>
              <p className={styles.heroLead}>A better finish starts<br className={styles.desktopBreak} /> beneath the paint.</p>
              <p className={styles.heroText}>From basement walls to new ceilings, we handle board hanging, taping, mudding and sanding. One clear scope, with the finish your space needs.</p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#quote-form">Request a drywall quote <Arrow /></a>
                <a className={styles.phoneLink} href={PHONE_HREF}>Call {PHONE}</a>
              </div>
              <ul className={styles.heroNotes}><li>Room protection</li><li>Level 4 & 5 finishes</li><li>Itemized estimates</li></ul>
            </div>
            <figure className={styles.heroPhoto}>
              <ResponsiveImage src={HERO} alt="Two installers positioning a drywall panel against timber framing" width={640} height={427} priority sizes="(max-width: 800px) 92vw, (max-width: 1280px) 48vw, 590px" />
              <figcaption><span>From the first board</span><strong>to the final surface.</strong><span className={styles.photoMark} aria-hidden="true">01 / INSTALL</span></figcaption>
            </figure>
          </div>
          <div className={styles.coverageLine}><span>Serving Hamilton & surrounding communities</span><p>Ancaster · Dundas · Stoney Creek · Waterdown · Hamilton Mountain</p></div>
        </div>
      </section>

      <nav className={styles.sectionNav} aria-label="On this page"><div className={styles.shell}>
        <a href="#installation-scope">What we install</a><a href="#finish-options">Finish options</a><a href="#installation-process">Our process</a><a href="#installation-cost">Cost & timing</a><a href="#faq">Questions</a>
      </div></nav>

      <section id="installation-scope" className={`${styles.section} ${styles.shell}`} aria-labelledby="scope-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Built around your project</p><h2 id="scope-title">Your space.<br />A complete drywall scope.</h2></div><p>Hamilton homes and job sites come with different access, layouts and finish requirements. We plan the installation around yours, from the board specification to the final handover.</p></div>
        <div className={styles.scopeGrid}>{SCOPES.map((scope) => <article key={scope.number} className={styles.scopeCard}><span className={styles.number}>{scope.number}</span><h3>{scope.title}</h3><p>{scope.text}</p><span className={styles.cardDetail}>{scope.detail}</span></article>)}</div>
        <p className={styles.inlineNote}>Only a small area needs attention? Explore <Link href="/services/drywall-repair/hamilton/">drywall repair in Hamilton</Link>. Updating textured ceilings too? See our <Link href="/popcorn-ceiling-removal/hamilton/">Hamilton popcorn ceiling removal service</Link>.</p>
      </section>

      <section id="finish-options" className={styles.finishSection} aria-labelledby="finish-title"><div className={`${styles.shell} ${styles.finishGrid}`}>
        <figure className={styles.detailPhoto}><ResponsiveImage src="/services/drywall/6.webp" alt="Installer fastening a new drywall panel beside a window" width={640} height={427} loading="lazy" sizes="(max-width: 800px) 92vw, 500px" /><figcaption>Board placement, joint preparation and finishing all shape the final result.</figcaption></figure>
        <div><p className={styles.eyebrow}>Choose the right surface</p><h2 id="finish-title">The finish should suit<br />the light in your room.</h2><p className={styles.finishIntro}>Bright windows, long ceilings and paint sheen can reveal small surface differences. We discuss your finish before the first board goes up.</p>
          <div className={styles.finishOption}><span>04</span><div><h3>Level 4 · A practical everyday finish</h3><p>Taped joints, finished fasteners and sanded compound. A common starting point for many painted walls, with suitable primer and paint specified for the room.</p></div></div>
          <div className={styles.finishOption}><span>05</span><div><h3>Level 5 · A full-surface skim coat</h3><p>Adds a thin skim coat across the whole surface to help reduce differences between paper and joints. Consider it for critical side lighting, broad ceilings or higher-sheen finishes.</p></div></div>
          <Link className={styles.textLink} href="/blog/level-4-vs-level-5-drywall-finish-gta/">Compare Level 4 and Level 5 finishes <Arrow /></Link>
        </div>
      </div></section>

      <section id="installation-process" className={`${styles.section} ${styles.shell}`} aria-labelledby="process-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>From planning to paint-ready</p><h2 id="process-title">A clear sequence.<br />No missing steps.</h2></div><p>Good drywall work depends on preparation, coordination and enough drying time. Here is how we approach the job.</p></div>
        <ol className={styles.process}>{STEPS.map((step, i) => <li key={step.title}><span className={styles.stepNumber}>0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        <div className={styles.readiness}><strong>Before we close the walls</strong><p>Plumbing, electrical and HVAC rough-ins, backing and any required inspections should be complete. For replacement after a leak, the moisture source must be resolved and the affected area assessed and dry. Fire-rated or acoustic assemblies follow the project specification.</p></div>
      </section>

      <section id="installation-cost" className={styles.costSection} aria-labelledby="cost-title"><div className={`${styles.shell} ${styles.costGrid}`}>
        <div><p className={styles.eyebrow}>Know what you are paying for</p><h2 id="cost-title">Drywall installation cost<br />in Hamilton.</h2><p>A useful quote explains the work, materials and finish. We estimate from your dimensions, drawings or photos, then confirm site conditions where needed.</p><a className={styles.primary} href="#quote-form">Get an itemized estimate <Arrow /></a></div>
        <div className={styles.costFactors}>{[
          ["Area & layout", "Wall and ceiling area, room count, bulkheads, openings and ceiling height."],
          ["Board & finish", "Board thickness and specified assemblies, joint finishing, skim coating and primer."],
          ["Access & preparation", "Deliveries, stair carries, elevator bookings, protection, removal and disposal where included."],
          ["Timing & drying", "Project size, site readiness, temperature and humidity affect the number and spacing of visits."],
        ].map(([title, text], i) => <div key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      </div></section>

      <section className={`${styles.section} ${styles.shell} ${styles.localGrid}`} aria-labelledby="local-title">
        <div><p className={styles.eyebrow}>Local service, practical planning</p><h2 id="local-title">Across Hamilton.<br />Ready for your neighbourhood.</h2><p>From established homes in Westdale and Kirkendall to basement renovations on Hamilton Mountain, we plan around access, existing surfaces and the rooms you need to keep using.</p><ul className={styles.neighborhoods}>{neighborhoods.map((n) => <li key={n.slug}><Link href={`/services/drywall-installation/hamilton/${n.slug}/`}>{n.name}</Link></li>)}</ul></div>
        <aside className={styles.localCard}><span className={styles.locationLabel}>Popcorn Ceiling Removal Burlington /Oakville/Hamilton Grimsby</span><h3>Let’s start with<br />your project.</h3><address>37 Dalegrove Crescent<br />Stoney Creek, ON L8J 3R5</address><p>Tell us your neighbourhood, room sizes and the stage of your renovation. We’ll discuss the next step for an estimate.</p><a href={MAP_URL} className={styles.textLink}>View the Hamilton service location <Arrow /></a><a href={PHONE_HREF} className={styles.textLink}>Speak with estimating: {PHONE}</a></aside>
      </section>

      <section className={`${styles.section} ${styles.shell}`} aria-labelledby="area-pages-title"><p className={styles.eyebrow}>Explore your area</p><h2 id="area-pages-title">Drywall installation by neighbourhood</h2><p>Find preparation details and project considerations for your part of Hamilton.</p><AreaCards type="drywall" /></section>

      <section id="quote-form" className={styles.quoteSection} aria-labelledby="quote-title"><div className={`${styles.shell} ${styles.quoteGrid}`}>
        <div className={styles.quoteIntro}><p className={styles.eyebrow}>Tell us what you are building</p><h2 id="quote-title">Let’s put your<br />drywall plan on paper.</h2><p>Share a few details and we’ll follow up about the scope, finish and timing. Include a link to photos or drawings if you have them.</p><ul><li>Your Hamilton neighbourhood and property type</li><li>Approximate wall and ceiling dimensions</li><li>New installation, replacement or finishing only</li><li>Preferred start date and access requirements</li></ul><a href={PHONE_HREF} className={styles.phoneLink}>Prefer to talk? {PHONE}</a></div>
        <div className={styles.formCard}><h3>Request your drywall estimate</h3><p>Start with the details you know. We can work through the rest together.</p><QuoteForm /><p className={styles.formNote}>We use these details to respond to your project enquiry.</p></div>
      </div></section>

      <section id="faq" className={`${styles.section} ${styles.shell} ${styles.faqGrid}`} aria-labelledby="faq-title"><div><p className={styles.eyebrow}>Before you book</p><h2 id="faq-title">A few good<br />questions.</h2><p>Practical answers about drywall installation in Hamilton.</p></div><div>{FAQS.map(({ q, a }) => <details key={q} className={styles.faq}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

      <section className={styles.guidesSection} aria-labelledby="guides-title"><div className={styles.shell}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Plan with confidence</p><h2 id="guides-title">Useful reading for your renovation.</h2></div><Link className={styles.textLink} href="/services/drywall-installation/">All drywall installation services <Arrow /></Link></div><div className={styles.guideGrid}>{GUIDES.map((guide) => <Link key={guide.href} href={guide.href} className={styles.guide}><h3>{guide.title}</h3><p>{guide.text}</p><span>Read the guide <Arrow /></span></Link>)}</div>
        <div className={styles.moreGuides}><p>Related planning: <Link href="/blog/drywall-installation-after-water-damage-mississauga/">drywall replacement after water damage</Link> · <Link href="/blog/commercial-fit-out-drywall-project-burlington/">Burlington commercial fit-out guide</Link> · <Link href="/blog/ceiling-rebuild-after-leak-oakville-project/">Oakville ceiling rebuild guide</Link>.</p><p>Nearby installation services: <Link href="/services/drywall-installation/burlington/">Burlington</Link> · <Link href="/services/drywall-installation/oakville/">Oakville</Link> · <Link href="/services/drywall-installation/grimsby/">Grimsby</Link> · <Link href="/services/drywall-installation/mississauga/">Mississauga</Link>.</p></div>
      </div></section>
    </div>
  );
}
