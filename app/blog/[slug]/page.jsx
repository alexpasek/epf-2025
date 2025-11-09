import Link from 'next/link';
import { posts } from '@/data/posts';

export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})); }
export function generateMetadata({ params }){
  const post = posts.find(p=>p.slug===params.slug);
  return { title: post ? `${post.title} — Wallpaper Removal Pro` : 'Post — Wallpaper Removal Pro' };
}

export default function Post({ params }){
  const post = posts.find(p=>p.slug===params.slug);
  if(!post){ return <div className='container-x py-10'><p>Not found</p></div>; }
  return(<div className='container-x py-10'>
    <nav className='text-sm text-gray-500 mb-6'><Link href='/blog/'>Blog</Link> / {post.title}</nav>
    <h1 className='text-3xl font-bold'>{post.title}</h1>
    <p className='text-sm text-gray-500 mt-1'>{post.date}</p>
    <div className='prose-custom mt-6'>
      {post.content.map((t,i)=><p key={i}>{t}</p>)}
    </div>
    <p className='mt-8'><Link className='btn-cta' href='/blog/'>Back to blog</Link></p>
  </div>);
}
