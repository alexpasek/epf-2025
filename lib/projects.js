import projects from '@/data/projects.json';

// Drafts stay out of cards, static routes and structured data until real assets are ready.
export const publicProjects = projects.filter(project =>
  project.status === 'published' && project.publicationDate &&
  project.images.some(image => image.featured && image.src && image.width && image.height)
);
export function projectPath(project) { return `/our-work/${project.slug}/`; }
export function findProject(slug) { return publicProjects.find(project => project.slug === slug); }
