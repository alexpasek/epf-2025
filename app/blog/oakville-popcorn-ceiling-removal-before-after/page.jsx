import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

const SITE_URL = "https://epfproservices.com";
const PAGE_PATH = "/blog/oakville-popcorn-ceiling-removal-before-after/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Oakville Popcorn Ceiling Before & After | EPF Project";
const H1 = "Oakville Popcorn Ceiling Removal Before and After: From Texture to Level 5";
const DESCRIPTION = "See how EPF Pro Services protects, removes, repairs, skim coats, sands and finishes a popcorn ceiling, with real project photos and practical field notes.";
const PUBLISHED = "2026-08-09";
const HERO = "/gallery/popcornceilingremoval_4234.jpeg";
const ORG_ID = `${SITE_URL}/#org`;

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "en_CA",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [{ url: `${SITE_URL}${HERO}`, width: 565, height: 640, alt: "EPF project example showing a smooth finished ceiling in an empty living area" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}${HERO}`] },
};

const photos = [
  { src: "/gallery/popcornceilingremoval_4240.jpeg", width: 533, height: 640, alt: "Popcorn ceiling texture above a room protected with wall sheeting", caption: "EPF project example: textured ceiling and wall protection before the finishing work. The photo location is not verified as Oakville." },
  { src: "/gallery/popcorn-ceiling-removal4.jpeg", width: 565, height: 640, alt: "Vacuum-connected ceiling sander working across textured ceiling", caption: "EPF project example: mechanical sanding with a connected vacuum helps control airborne dust. The photo location is not verified as Oakville." },
  { src: "/gallery/popcorn-ceiling-removal.jpeg", width: 480, height: 640, alt: "Contractor checking a skim-coated ceiling beside a staircase", caption: "EPF project example: ceiling correction and inspection continue after the texture is gone. The photo location is not verified as Oakville." },
  { src: "/gallery/popcornceilingremoval_4232.jpeg", width: 480, height: 640, alt: "Contractor using a vacuum system beneath a finished hallway ceiling", caption: "EPF project example: vacuum-assisted cleanup and dust control during ceiling work. The photo location is not verified as Oakville." },
  { src: "/gallery/popcornceilingremoval_4241.jpeg", width: 533, height: 640, alt: "Smooth white ceiling finished around recessed lights", caption: "EPF project example: a smooth ceiling checked around recessed-light openings. The photo location is not verified as Oakville." },
  { src: "/gallery/popcornceilingremoval_4238.jpeg", width: 640, height: 640, alt: "Finished smooth ceiling with recessed lights and daylight from windows", caption: "EPF project example: the completed smooth surface viewed in natural and fixture light. The photo location is not verified as Oakville." },
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: H1, description: DESCRIPTION,
  image: [`${SITE_URL}${HERO}`, ...photos.map((photo) => `${SITE_URL}${photo.src}`)], datePublished: PUBLISHED, dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Person", name: "Alex", jobTitle: "Owner and Project Lead", worksFor: { "@id": ORG_ID } },
  publisher: { "@id": ORG_ID }, inLanguage: "en-CA", articleSection: "Popcorn ceiling removal",
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
    { "@type": "ListItem", position: 3, name: "Oakville Popcorn Ceiling Removal Before and After", item: PAGE_URL },
  ],
};

const Section = ({ id, title, children }) => <section id={id} className="scroll-mt-24"><h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2><div className="mt-4 space-y-4 leading-8 text-slate-700">{children}</div></section>;
const Photo = ({ photo, priority = false }) => <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} className="h-auto w-full object-cover" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} /><figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">{photo.caption}</figcaption></figure>;

export default function OakvilleBeforeAfterArticle() {
  return <main className="bg-[#f7f8f6] pb-16 text-slate-900">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <header className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-14">
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300"><Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">›</span> <Link href="/blog/" className="hover:text-white">Blog</Link> <span aria-hidden="true">›</span> <span>Oakville Popcorn Ceiling Removal Before and After</span></nav>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{H1}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">A textured ceiling becomes a truly smooth ceiling through the work that follows removal: surface assessment, repairs, full-field skim coating, controlled sanding, inspection and primer. This photo-led field guide shows that transformation with real EPF project examples. For local scope and availability, visit our <Link href="/popcorn-ceiling-removal/oakville/" className="font-semibold text-amber-300 underline underline-offset-4">Oakville popcorn ceiling removal service</Link>.</p>
          <p className="mt-4 text-sm text-slate-300">Published August 9, 2026</p>
        </div>
        <Photo photo={{ src: HERO, width: 565, height: 640, alt: "EPF project example showing a smooth finished ceiling in an empty living area", caption: "EPF project example: a finished smooth ceiling. This image is real EPF field photography; its location is not verified as Oakville." }} priority />
      </div>
    </header>

    <div className="mx-auto -mt-5 max-w-5xl px-4"><aside className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-lg"><h2 className="text-xl font-bold text-slate-950">What this before-and-after shows</h2><p className="mt-2 leading-8 text-slate-700">Scraping removes texture; it does not automatically create a paint-ready ceiling. The smooth result comes from correcting the exposed drywall, skim coating the full field when needed, sanding with dust control, checking the surface under demanding light and applying the specified primer or paint system.</p></aside></div>

    <div className="mx-auto mt-10 grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_270px]">
      <article className="space-y-12">
        <Section id="project-at-a-glance" title="Project examples at a glance">
          <p>The repository does not contain one complete Oakville project record that ties these photographs to a verified neighbourhood, property, room count, ceiling area, height, texture coating, repair list and duration. To protect accuracy and client privacy, no missing facts have been inferred.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white"><table className="min-w-full text-left text-sm"><tbody className="divide-y divide-slate-200"><tr><th className="w-2/5 bg-slate-50 px-4 py-3">Evidence used</th><td className="px-4 py-3">Real EPF field photographs from multiple ceiling projects</td></tr><tr><th className="bg-slate-50 px-4 py-3">Oakville location</th><td className="px-4 py-3">Not verified for the photographs</td></tr><tr><th className="bg-slate-50 px-4 py-3">Visible stages</th><td className="px-4 py-3">Texture, protection, sanding, surface inspection and finished smooth ceilings</td></tr><tr><th className="bg-slate-50 px-4 py-3">Method explained</th><td className="px-4 py-3">Scrape where suitable; bond-and-skim or encapsulate where the surface requires it</td></tr><tr><th className="bg-slate-50 px-4 py-3">Finish goal</th><td className="px-4 py-3">A uniform smooth ceiling suitable for the agreed primer or paint handoff</td></tr><tr><th className="bg-slate-50 px-4 py-3">Duration</th><td className="px-4 py-3">Not stated; no single verified timeline is available</td></tr></tbody></table></div>
        </Section>

        <Section id="before" title="What the ceiling looks like before work">
          <p>Before work begins, the important condition is not only the stipple or stucco pattern. We look at whether the texture is sound, painted, stained or loose; whether old drywall joints telegraph through it; and whether fixture changes, cracks or patches have interrupted the field. Texture can disguise shallow waves and repair edges. Once it comes off, those defects become easier to see.</p>
          <Photo photo={photos[0]} />
          <p>Potentially older textured ceiling material should be assessed before it is disturbed. Ontario provides an overview of <a href="https://www.ontario.ca/page/asbestos-workplace" className="font-semibold text-blue-700 underline" rel="noopener noreferrer">asbestos requirements and responsibilities</a>, while the <a href="https://www.ccohs.ca/oshanswers/chemicals/asbestos/home.html" className="font-semibold text-blue-700 underline" rel="noopener noreferrer">Canadian Centre for Occupational Health and Safety</a> explains asbestos concerns in homes. This is a reason to arrange appropriate assessment or testing when relevant, not a DIY removal instruction.</p>
        </Section>

        <Section id="method" title="Why the surface determines the method">
          <p>Unpainted texture that softens and releases cleanly can often be scraped. Painted popcorn behaves differently because the paint can prevent moisture from reaching the texture and can lock the aggregate together. Aggressive scraping may tear drywall face paper or gouge the board. In that condition, a controlled test area helps determine whether partial removal followed by bonding and skim coating is more reliable.</p>
          <p>Encapsulation is another option when the existing material is stable and disturbing it is unsuitable, but the build-up, transitions, fixture openings and final plane still need to be planned. The right decision comes from the surface, not from a one-method promise. Our <Link href="/services/popcorn-ceiling-removal/" className="font-semibold text-blue-700 underline">complete popcorn ceiling removal process</Link> explains how protection, removal and refinishing fit together.</p>
        </Section>

        <Section id="protection" title="Protection and dust-control setup">
          <p>Ceiling work happens over everything in the room, so protection starts below the work. Floors need suitable covering, wall edges and built-ins need masking, and furniture is removed or fully isolated according to the scope. Doorways and traffic paths are planned so debris does not migrate through the home. Supply and return openings are protected as appropriate, and fixtures are made safe before work begins.</p>
          <p>Sanding is managed with vacuum-connected equipment and containment. That makes the work dust-controlled, not dust-free. The distinction matters: careful setup reduces spread, but no responsible contractor should promise that renovation dust can be eliminated completely. See how EPF approaches <Link href="/blog/dustless-popcorn-ceiling-removal-oakville/" className="font-semibold text-blue-700 underline">dust-controlled popcorn ceiling removal</Link> when comparing scopes.</p>
          <div className="grid gap-4 sm:grid-cols-2"><Photo photo={photos[1]} /><Photo photo={photos[3]} /></div>
        </Section>

        <Section id="repairs" title="Removal and repairs after the texture is open">
          <p>Removal is a diagnostic stage as much as a demolition stage. With the texture gone, old tape edges, fastener movement, torn paper, shallow gouges, stains and fixture changes can become visible. Loose material is removed, damaged paper is sealed where required, and joints or isolated defects are corrected before the full-field finish begins. Any active leak must be resolved before cosmetic ceiling work proceeds.</p>
          <p>Repair scope varies, so it should be identified rather than assumed. Where the ceiling work exposes repair needs beyond normal refinishing, the related <Link href="/services/drywall-repair/oakville/" className="font-semibold text-blue-700 underline">Oakville drywall repair</Link> scope should describe what will be fixed before primer.</p>
        </Section>

        <Section id="level-5" title="Level 5 skim coating and sanding">
          <p>A scraped ceiling can still show every joint, patch and paper change. A full-field skim helps equalize texture and porosity while correcting small variations across the plane. Coats are kept controlled and are allowed to dry before the next correction. Heavy compound is not a substitute for flat work; building too much material at once can shrink, crack or create more sanding.</p>
          <p>After sanding, the ceiling is checked from more than one position. Raking or critical light—daylight from large windows, temporary side lighting or rows of pot lights—can expose ridges and depressions that flat overhead light hides. The target is a uniform surface suited to the room’s lighting. For bright, open rooms, <Link href="/blog/level-5-drywall-finishing-oakville/" className="font-semibold text-blue-700 underline">Level 5 drywall finishing in Oakville</Link> explains why final inspection matters.</p>
          <Photo photo={photos[2]} />
        </Section>

        <Section id="primer" title="Primer and final finish">
          <p>Primer is a checkpoint, not a way to hide unfinished drywall. It seals the repaired field and makes scratches, pinholes and uneven areas easier to identify before the finish coat. If the agreed handoff is primer-ready, the quote should say so. If painting is included, it should state the primer and finish-paint scope rather than leaving homeowners to assume that “smooth” means fully painted.</p>
          <p>Flat ceiling paint is normally chosen because added sheen can emphasize minor surface variation. Fixture openings and ceiling-to-wall lines also deserve a final check; a smooth centre field does not compensate for ragged edges around lights, vents or crown moulding.</p>
        </Section>

        <Section id="timeline" title="How the project sequence affects the timeline">
          <p>Without a verified single-project log, a day-by-day claim would be misleading. The dependable sequence is assessment and testing where appropriate, room protection, a removal or bonding test, the selected removal or encapsulation work, repairs, skim-coat stages, drying, dust-controlled sanding, critical-light inspection, primer and any specified painting. Room size, painted texture, ceiling height, occupancy, hidden defects and drying conditions all affect the schedule.</p>
          <p>For planning and price comparisons, use the <Link href="/blog/popcorn-ceiling-removal-cost-oakville/" className="font-semibold text-blue-700 underline">Oakville popcorn ceiling removal cost guide</Link> and ask every contractor to separate removal, repairs, skim coating, sanding, primer, paint, protection and cleanup. A short timeline can simply mean that fewer stages are included.</p>
        </Section>

        <Section id="gallery" title="Before-and-after gallery: finished ceiling checks">
          <p>These final EPF project examples show the change homeowners are looking for: a continuous ceiling plane without the heavy shadow pattern of popcorn texture. Recessed-light edges, wall transitions and the field between fixtures remain part of the inspection. Because these photographs are not tied to a verified Oakville project record, they are examples of EPF workmanship rather than evidence of one Oakville address.</p>
          <div className="grid gap-4 sm:grid-cols-2"><Photo photo={photos[4]} /><Photo photo={photos[5]} /></div>
        </Section>

        <Section id="field-note" title="Field note from Alex">
          <blockquote className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5 text-slate-800">“The texture coming off is the obvious change, but the finish is decided afterward. I check the whole ceiling plane, the repaired joints and the fixture edges under light that will reveal defects before primer or paint makes them harder to correct.”</blockquote>
        </Section>

        <Section id="quote-details" title="What Oakville homeowners should include in a quote request">
          <p>Useful information reduces guessing and makes it easier to compare the same scope. Send wide room photos for access and protection planning, close photos of the texture and any problem areas, rough room dimensions, ceiling height, and whether the popcorn appears painted or unpainted. Point out pot lights, vents, stains, cracks, old patches, stairwells, vaulted sections and other high areas.</p>
          <p>Also explain whether the home is occupied, what furniture can be moved and the timing you are considering. Photos cannot answer every technical question, but they help identify whether an on-site review or test area is needed before a written scope is finalized.</p>
        </Section>

        <Section id="faqs" title="Frequently asked questions">
          <div className="space-y-4"><details className="rounded-xl border bg-white p-5"><summary className="cursor-pointer font-bold text-slate-950">Why does scraping alone not produce a finished smooth ceiling?</summary><p className="mt-3">Texture can hide seams, patches, torn paper and shallow waves. Scraping exposes the substrate; repairs, skim coating, sanding and inspection create the uniform surface needed before primer.</p></details><details className="rounded-xl border bg-white p-5"><summary className="cursor-pointer font-bold text-slate-950">How does painted texture change the method?</summary><p className="mt-3">Paint can seal the popcorn so it will not soften or release evenly. A test area may show that controlled removal plus bonding and skim coating is safer than aggressive scraping.</p></details><details className="rounded-xl border bg-white p-5"><summary className="cursor-pointer font-bold text-slate-950">How is the ceiling checked before primer or paint?</summary><p className="mt-3">The surface is inspected from several angles under daylight, fixture light or temporary raking light. Joints, repair edges, scratches, pinholes and openings are corrected before the specified primer or paint stage.</p></details></div>
        </Section>

        <section className="rounded-2xl bg-slate-950 p-7 text-white"><h2 className="text-3xl font-bold">Get an Oakville Popcorn Ceiling Removal Quote</h2><p className="mt-4 leading-8 text-slate-200">Send room photos, rough dimensions, ceiling height and your preferred timing. Include close-ups of the texture and note any paint, cracks, stains, pot lights, vents or high areas so EPF can review the actual ceiling scope.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link href="/quote/" className="rounded-lg bg-amber-400 px-5 py-3 text-center font-bold text-slate-950 hover:bg-amber-300">Request an Oakville popcorn ceiling removal quote</Link><a href={PHONE_HREF} className="rounded-lg border border-white/30 px-5 py-3 text-center font-bold hover:bg-white/10">Call {PHONE_NUMBER}</a></div></section>

        <footer className="rounded-xl border border-slate-200 bg-white p-6"><p className="font-bold text-slate-950">Alex</p><p className="text-slate-600">Owner and Project Lead, EPF Pro Services</p></footer>
      </article>

      <aside className="hidden lg:block"><nav aria-label="On this page" className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5 text-sm shadow-sm"><p className="font-bold text-slate-950">On this page</p><ol className="mt-3 space-y-2 text-slate-600">{[["project-at-a-glance","Project at a glance"],["before","Before work"],["method","Selected method"],["protection","Protection"],["repairs","Removal and repairs"],["level-5","Level 5 finish"],["primer","Primer and finish"],["timeline","Timeline"],["gallery","Before and after"],["field-note","Field note"],["quote-details","Quote request"],["faqs","FAQs"]].map(([id,label])=><li key={id}><a href={`#${id}`} className="hover:text-amber-700">{label}</a></li>)}</ol></nav></aside>
    </div>
  </main>;
}
