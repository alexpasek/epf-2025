import Link from 'next/link';
import { posts } from '@/data/posts';
export const metadata={title:'Blog — Wallpaper Removal Pro'};
export default function Blog(){
  return(<div className='container-x py-10'>
    <h1 className='text-3xl font-bold'>Blog</h1>
    <div className='mt-6 grid gap-4 sm:grid-cols-2'>
      {posts.map(p=>(
        <article key={p.slug} className='card p-5 bg-white'>
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
