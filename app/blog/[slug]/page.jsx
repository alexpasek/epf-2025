import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';

export const dynamic='force-dynamic';

export async function generateMetadata({ params }){
  const post=await getPostBySlug(params.slug);
  return { title: post ? `${post.title} — Wallpaper Removal Pro` : 'Post — Wallpaper Removal Pro' };
}

export default async function Post({ params }){
  const post=await getPostBySlug(params.slug);
  if(!post){ return <div className='container-x py-10'><p>Not found</p></div>; }
  return(<div className='container-x py-10'>
    <nav className='text-sm text-gray-500 mb-6'><Link href='/blog/'>Blog</Link> / {post.title}</nav>
    <h1 className='text-3xl font-bold'>{post.title}</h1>
    <p className='text-sm text-gray-500 mt-1'>{post.date}</p>
    <div className='prose-custom mt-6'>
      {post.content.map((t,i)=><p key={i}>{t}</p>)}
    </div>
    {post.keywords?.length>0&&(
      <div className='mt-8'>
        <h2 className='text-xl font-semibold'>Local SEO keywords</h2>
        <ul className='list-disc pl-6 text-gray-700'>
          {post.keywords.map(k=><li key={k}>{k}</li>)}
        </ul>
      </div>
    )}
    {post.photos?.length>0&&(
      <div className='mt-8'>
        <h2 className='text-xl font-semibold'>Photo ideas</h2>
        <ul className='space-y-3'>
          {post.photos.map((photo,idx)=>(
            <li key={idx} className='border rounded-md p-3 bg-gray-50'>
              <p className='font-medium'>{photo.description}</p>
              <p className='text-sm text-gray-500'>Alt suggestion: {photo.alt}</p>
            </li>
          ))}
        </ul>
      </div>
    )}
    {post.links?.length>0&&(
      <div className='mt-10 border-t border-gray-200 pt-6'>
        <h2 className='text-xl font-semibold'>Related resources</h2>
        <ul className='space-y-2 mt-2'>
          {post.links.map(link=>(
            <li key={link.href} className='text-gray-700'>
              <Link className='text-primary underline' href={link.href}>{link.anchor}</Link>
              {link.description?<> — {link.description}</>:null}
            </li>
          ))}
        </ul>
      </div>
    )}
    <p className='mt-8'><Link className='btn-cta' href='/blog/'>Back to blog</Link></p>
  </div>);
}
