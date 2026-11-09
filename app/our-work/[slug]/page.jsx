import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResponsiveImage from '@/components/ResponsiveImage';
import { publicProjects, findProject, projectPath } from '@/lib/projects';

export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return publicProjects.map(({ slug }) => ({ slug })); }
const base = 'https://epfproservices.com';

export async function generateMetadata({ params }) {
  const project = findProject((await params).slug);
  if (!project) return {};
  const image = project.images.find(photo => photo.featured);
  const url = base + projectPath(project);
  return {
    title: { absolute: `${project.title} | EPF Pro Services` }, description: project.description,
    alternates: { canonical: url },
    openGraph: { type: 'article', title: project.title, description: project.description, url,
      publishedTime: project.publicationDate, images: [{ url: base + image.src, width: image.width, height: image.height, alt: image.alt }] },
    twitter: { card: 'summary_large_image', title: project.title, description: project.description, images: [base + image.src] },
  };
}
function Photo({ photo, priority = false }) {
  return <figure className="overflow-hidden rounded-xl bg-slate-50">
    <ResponsiveImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
      priority={priority} loading={priority ? undefined : 'lazy'} sizes={priority ? '(max-width: 1024px) 92vw, 960px' : '(max-width: 639px) 92vw, 460px'}
      className="w-full object-contain" style={{ maxHeight: priority ? 620 : 500 }} />
    <figcaption className="p-4 text-sm leading-relaxed text-slate-600">{photo.caption}</figcaption>
  </figure>;
}
export default async function ProjectPage({ params }) {
  const project = findProject((await params).slug);
  if (!project) notFound();
  const url = base + projectPath(project);
  const hero = project.images.find(photo => photo.featured);
  const breadcrumbs = [{ name: 'Home', item: base + '/' }, { name: 'Our Work', item: base + '/our-work/' }, { name: project.title, item: url }];
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': url + '#article', headline: project.title, description: project.description, mainEntityOfPage: url,
      datePublished: project.publicationDate, image: project.images.map(photo => base + photo.src),
      author: { '@type': 'Organization', name: 'EPF Pro Services', url: base + '/' },
      publisher: { '@type': 'Organization', name: 'EPF Pro Services', url: base + '/' },
      contentLocation: { '@type': 'Place', name: 'Dundas, Hamilton, Ontario' } },
    { '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb })) },
  ] };
  return <main className="mx-auto max-w-5xl px-4 py-10 text-slate-900">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="mb-8"><p className="font-semibold text-slate-600">Our Work · Dundas, Ontario</p><h1 className="my-4 text-3xl font-bold leading-tight md:text-5xl">{project.title}</h1><p className="text-lg leading-relaxed">{project.summary}</p>
      <p className="mt-4 text-sm text-slate-600">By EPF Pro Services · Published <time dateTime={project.publicationDate}>{new Date(project.publicationDate + 'T12:00:00Z').toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></p>
    </header>
    <Photo photo={hero} priority />
    <dl className="my-8 grid gap-4 rounded-xl bg-slate-100 p-6 sm:grid-cols-3">
      {[['Project location', 'Dundas, Hamilton, Ontario'], ['Work completed', 'Heavy texture removal and replastering'], ['Result', 'Smooth finished ceiling']].map(([term, value]) => <div key={term}><dt className="text-sm text-slate-600">{term}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}
    </dl>
    {project.sections.map((section, index) => <section key={section.heading} className="my-10">
      <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph} className="mb-4 max-w-3xl text-lg leading-relaxed">{paragraph}</p>)}
      {index === 0 && <p className="mb-4 max-w-3xl text-lg leading-relaxed">Explore our <Link className="underline underline-offset-4" href="/services/popcorn-ceiling-removal/">texture removal and smooth ceiling services</Link> or see <Link className="underline underline-offset-4" href="/popcorn-ceiling-removal/hamilton/dundas/">ceiling removal in Dundas</Link> for local planning.</p>}
      {index === 2 && <p className="mb-4 max-w-3xl text-lg leading-relaxed">Our guide to <Link className="underline underline-offset-4" href="/blog/why-popcorn-ceiling-removal-needs-skim-coating-hamilton/">skim coating after ceiling removal</Link> explains why the finishing stage matters.</p>}
      {index < 4 && <div className="mt-6 grid gap-6 sm:grid-cols-2">{project.images.filter(photo => photo.group === index && !photo.featured).map(photo => <Photo key={photo.src} photo={photo} />)}</div>}
    </section>)}
    <nav aria-label="Related ceiling services and guidance" className="my-8 rounded-xl border p-6"><h2 className="mb-4 text-xl font-bold">Plan similar ceiling work</h2><ul className="space-y-3">{project.links.map(link => <li key={link.href}><Link href={link.href} className="underline underline-offset-4">{link.label}</Link></li>)}</ul></nav>
    <section className="rounded-2xl bg-slate-900 p-6 text-white md:p-8"><h2 className="text-2xl font-bold">Have a heavily textured ceiling?</h2><p className="my-4 max-w-2xl leading-relaxed">Send a wide room photo, a texture close-up, your city and the finish you want. For Dundas, Hamilton or Burlington, we can discuss the removal, repair and finishing scope for your home.</p><Link href="/quote/" className="inline-block rounded-lg bg-white px-5 py-3 font-semibold text-slate-900">Request a ceiling quote →</Link></section>
  </main>;
}
