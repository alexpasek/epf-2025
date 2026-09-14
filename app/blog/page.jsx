import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import BlogBrowser from './BlogBrowser';
import './blog-index.css';

export const metadata = {
  title: { absolute: 'Home Renovation Guides for the GTA | EPF Pro Services' },
  description: 'Practical guides to popcorn ceiling removal, drywall repair and interior painting for GTA homeowners. Compare options, plan your project and find local help.',
  alternates: { canonical: '/blog/' },
  openGraph: { title: 'Home Renovation Guides | EPF Pro Services', description: 'Practical ceiling, drywall and painting advice for homeowners in the GTA and surrounding communities.', url: '/blog/', type: 'website' },
};
export const revalidate = 86400;

function topicFor(post) {
  const title = `${post.title} ${post.slug}`.toLowerCase();
  if (/garage/.test(title)) return 'Garage drywall';
  if (/popcorn|stucco|skim|smooth.ceiling/.test(title)) return 'Popcorn ceilings';
  if (/drywall|taping|ceiling.repair|ceiling.rebuild/.test(title)) return 'Drywall & repairs';
  if (/paint|wallpaper/.test(title)) return 'Painting & wallpaper';
  return 'Project planning';
}
function imageFor(src) {
  if (typeof src !== 'string' || !src || src.startsWith('//')) return null;
  if (src.startsWith('/')) return src;
  try { return ['epfproservices.com', 'www.epfproservices.com'].includes(new URL(src).hostname) ? src : null; } catch { return null; }
}
function formatDate(date) {
  if (!date) return null;
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? null : new Intl.DateTimeFormat('en-CA', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(parsed);
}
export default async function Blog() {
  const posts = (await getPosts()).map(post => ({ slug: post.slug, title: post.title, excerpt: post.excerpt || '', date: post.date || null, formattedDate: formatDate(post.date), image: imageFor(post.image), cardImageMode: post.cardImageMode || 'cover', topic: topicFor(post) }));
  const collection = { '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': 'https://epfproservices.com/blog/#webpage', url: 'https://epfproservices.com/blog/', name: 'Home renovation guides', description: metadata.description, mainEntity: { '@type': 'ItemList', itemListElement: posts.map((post, index) => ({ '@type': 'ListItem', position: index + 1, name: post.title, url: `https://epfproservices.com/blog/${post.slug}/` })) } };
  return <div className="epf-guides">
    <div className="guide-shell">
      <header className="guide-hero"><div><p className="guide-eyebrow">The EPF homeowner journal</p><h1>Practical guides.<br /><em>Better home projects.</em></h1><p className="guide-intro">Clear answers on popcorn ceiling removal, drywall repair and interior painting—so you can understand the options before you start.</p><p className="guide-local">For homeowners across the GTA and surrounding communities.</p></div><aside className="guide-help"><span className="guide-eyebrow">Have a project in mind?</span><h2>Start with your space.</h2><p>Send a few photos, your location and what you’d like to change. We’ll help you understand the next step.</p><Link href="/quote/" className="guide-cta">Get a free estimate <span aria-hidden="true">↗</span></Link><a href="tel:+16479236784">Or call (647) 923-6784</a></aside></header>
      <nav className="guide-services" aria-label="Explore EPF services"><span>Looking for a service?</span><Link href="/services/popcorn-ceiling-removal/">Popcorn ceiling removal ↗</Link><Link href="/services/drywall-repair/">Drywall repair ↗</Link><Link href="/services/interior-painting/">Interior painting ↗</Link></nav>
      <BlogBrowser posts={posts} />
      <section className="guide-coverage"><div><p className="guide-eyebrow">Local advice. Local help.</p><h2>Find EPF in your area.</h2><p>Serving Toronto, Mississauga, Oakville, Burlington, Milton and surrounding communities. Don’t see your area? Contact us directly to confirm availability.</p></div><div><Link href="/service-areas/">Explore our service areas ↗</Link><Link href="/contact/">Contact EPF Pro Services ↗</Link></div></section>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection).replace(/</g, '\\u003c') }} />
  </div>;
}
