import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { publicProjects, projectPath } from '@/lib/projects';

export default function ProjectCard({ id = 'dundas-heavy-texture-ceiling', nearby = false }) {
  const project = publicProjects.find(item => item.id === id);
  if (!project) return null;
  const photo = project.images.find(image => image.featured);
  return <article className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 md:grid md:grid-cols-2">
    <Link href={projectPath(project)} className="block" tabIndex={-1} aria-hidden="true">
      <ResponsiveImage src={photo.src} alt="" width={photo.width} height={photo.height} loading="lazy" sizes="(max-width: 767px) 92vw, 480px" className="h-72 w-full object-cover" />
    </Link>
    <div className="p-6 self-center">
      <p className="text-sm font-semibold text-slate-600">{nearby ? 'Nearby project · ' : 'Completed project · '}{project.city}, Ontario</p>
      <h3 className="mt-2 text-2xl font-bold"><Link href={projectPath(project)} className="hover:underline">{project.title}</Link></h3>
      <p className="mt-3 leading-relaxed">Heavy patterned texture removed, ceiling replastered and finished smooth. See the actual preparation and result.</p>
      <Link href={projectPath(project)} className="mt-4 inline-block font-semibold underline underline-offset-4">View the Dundas project →</Link>
    </div>
  </article>;
}
