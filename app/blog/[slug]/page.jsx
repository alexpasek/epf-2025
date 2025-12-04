import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';

export const dynamic='force-dynamic';
export const runtime='edge';

const SITE_URL=(process.env.NEXT_PUBLIC_SITE_URL||'').replace(/\/$/,'');

export async function generateMetadata({ params }){
  const resolvedParams=await params;
  const slug=resolvedParams?.slug;
  const post=await getPostBySlug(slug);
  if(!post){
    return{title:'Post — Popcorn Ceiling Removal Pro'};
  }
  const path=`/blog/${slug}/`;
  const url=SITE_URL?`${SITE_URL}${path}`:path;
  const description=post.metaDescription
    || post.excerpt
    || post.content?.[0]?.slice(0,155);
  return{
    title:`${post.title} — Popcorn Ceiling Removal Pro`,
    description,
    alternates:{canonical:url},
    openGraph:{
      title:post.title,
      description,
      url,
      type:'article',
      locale:'en_CA',
      publishedTime:post.date,
      modifiedTime:post.date,
      authors:['EPF Pro Services']
    },
    twitter:{
      card:'summary_large_image',
      title:post.title,
      description
    }
  };
}

export default async function Post({ params }){
  const resolvedParams=await params;
  const slug=resolvedParams?.slug;
  const post=await getPostBySlug(slug);
  if(!post){ return <div className='container-x py-10'><p>Not found</p></div>; }
  const path=`/blog/${post.slug}/`;
  const url=SITE_URL?`${SITE_URL}${path}`:path;
  const description=post.metaDescription
    || post.excerpt
    || post.content?.[0]?.slice(0,155);
  const wordCount=post.content?.reduce((sum,para)=>sum+(para?.split(/\s+/).filter(Boolean).length||0),0);
  const articleBody=post.content?.join(' ');
  const areaServed=post.slug.includes('mississauga')
    ? [{
        '@type':'City',
        name:'Mississauga',
        address:{'@type':'PostalAddress',addressLocality:'Mississauga',addressRegion:'ON',addressCountry:'CA'}
      }]
    : undefined;
  const articleJsonLd={
    '@context':'https://schema.org',
    '@type':'Article',
    headline:post.title,
    description,
    datePublished:post.date,
    dateModified:post.date,
    mainEntityOfPage:{'@type':'WebPage','@id':url},
    author:{'@type':'Organization',name:'EPF Pro Services'},
    publisher:{'@type':'Organization',name:'EPF Pro Services'},
    inLanguage:'en-CA',
    articleSection:'Popcorn ceiling removal',
    keywords:post.keywords?.join(', '),
    wordCount,
    articleBody,
    areaServed,
    about:'Popcorn ceiling removal',
    serviceType:'Popcorn ceiling removal'
  };
  const breadcrumbJsonLd={
    '@context':'https://schema.org',
    '@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Blog',item: SITE_URL?`${SITE_URL}/blog/`:'/blog/'},
      {'@type':'ListItem',position:2,name:post.title,item:url}
    ]
  };
  return(<div className='container-x py-10'>
    <script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}} />
    <script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbJsonLd)}} />
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
          {post.keywords.map((k,idx)=><li key={`${k}-${idx}`}>{k}</li>)}
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
          {post.links.map((link,idx)=>(
            <li key={`${link.href}-${idx}`} className='text-gray-700'>
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
