import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export const metadata={title:'Blog'};
export const revalidate = 86400;

const ALLOWED_BLOG_IMAGE_HOSTS = new Set([
  'epfproservices.com',
  'www.epfproservices.com',
]);

const isAllowedBlogImageSrc = (src) => {
  if (!src || typeof src !== 'string') return false;
  if (src.startsWith('/')) return true;

  try {
    return ALLOWED_BLOG_IMAGE_HOSTS.has(new URL(src).hostname);
  } catch {
    return false;
  }
};

export default async function Blog(){
  const posts=await getPosts();

  return(<div className='container-x py-10'>
    <h1 className='text-3xl font-bold'>Blog</h1>
    <div className='mt-6 grid gap-4 sm:grid-cols-2'>
      {posts.map(p=>(
        <article key={p.slug} className='card p-5 bg-white'>
          {isAllowedBlogImageSrc(p.image) ? (
            <Link href={`/blog/${p.slug}/`} className='block overflow-hidden rounded-2xl'>
              <img
                src={p.image}
                alt={p.title}
                className='h-52 w-full object-cover'
                loading='lazy'
              />
            </Link>
          ) : null}
          <h2 className='text-xl font-semibold'>
            <Link href={`/blog/${p.slug}/`} className='hover:underline'>{p.title}</Link>
          </h2>
          <p className='text-sm text-gray-500'>{p.date}</p>
          <p className='mt-2 text-gray-700'>{p.excerpt}</p>
          <p className='mt-3'><Link className='btn-cta' href={`/blog/${p.slug}/`}>Read more</Link></p>
        </article>
      ))}
    </div>
  </div>);
}
