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

const getBlogCardImage = (post) => (
  isAllowedBlogImageSrc(post?.image) ? post.image : null
);

const getBlogCardImageClassName = (post) => (
  post?.cardImageMode === 'contain'
    ? 'h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.015]'
    : 'h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]'
);

const formatPostDate = (date) => {
  if (!date) return null;
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;

  return new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
};

export default async function Blog(){
  const posts=await getPosts();

  return(
    <main className='bg-[#fcfcfb] py-10 sm:py-14 lg:py-16'>
      <div className='container-x'>
        <div className='mx-auto max-w-[1220px]'>
          <header className='sr-only'>
            <h1>Blog</h1>
          </header>

          <div className='grid gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3'>
            {posts.map((p) => {
              const imageSrc = getBlogCardImage(p);
              const formattedDate = formatPostDate(p.date);

              return(
                <article key={p.slug} className='h-full'>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className='group flex h-full flex-col overflow-hidden bg-white transition duration-200 hover:-translate-y-0.5'
                  >
                    {imageSrc ? (
                      <div className='aspect-[1.34/1] overflow-hidden bg-[#dde5ec]'>
                        <img
                          src={imageSrc}
                          alt={p.title}
                          className={getBlogCardImageClassName(p)}
                          loading='lazy'
                        />
                      </div>
                    ) : (
                      <div className='aspect-[1.34/1] bg-gradient-to-br from-[#d9e2ea] via-[#edf2f6] to-[#d6dee6]' />
                    )}

                    <div className='flex flex-1 flex-col bg-[#eef2f6] px-6 pb-5 pt-4'>
                      {formattedDate ? (
                        <time
                          dateTime={p.date}
                          className='mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#6b7f91]'
                        >
                          {formattedDate}
                        </time>
                      ) : null}
                      <h2 className='line-clamp-2 text-[1.02rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#324a65] sm:text-[1.08rem]'>
                        {p.title}
                      </h2>
                      <p className='mt-3 line-clamp-3 text-[0.98rem] leading-8 text-[#4b6177]'>
                        {p.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
