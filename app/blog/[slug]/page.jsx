import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { getPostBySlug } from "@/lib/posts";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const UNORDERED_LIST_RE = /^\s*[-*]\s+/;
const ORDERED_LIST_RE = /^\s*\d+\.\s+/;
const HEADING_HTML_RE = /^<strong>(.+)<\/strong>$/i;

const isHtmlEntry = (entry) =>
  entry && typeof entry === "object" && "html" in entry;

const decodeEntities = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const stripHtmlTags = (value) => value.replace(/<[^>]+>/g, "");

const slugifyHeading = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const extractHeading = (entry) => {
  if (!isHtmlEntry(entry)) return null;
  const trimmed = entry.html.trim();
  const match = trimmed.match(HEADING_HTML_RE);
  if (!match) return null;
  const innerHtml = match[1].trim();
  const text = decodeEntities(stripHtmlTags(innerHtml)).trim();
  if (!text) return null;
  const level = /^\d+\./.test(text) ? "h3" : "h2";
  return { innerHtml, text, id: slugifyHeading(text), level };
};

const getListType = (entry) => {
  const value = typeof entry === "string" ? entry : isHtmlEntry(entry) ? entry.html : "";
  if (!value) return null;
  if (ORDERED_LIST_RE.test(value.trim())) return "ol";
  if (UNORDERED_LIST_RE.test(value.trim())) return "ul";
  return null;
};

const stripListPrefix = (value, listType) => {
  if (listType === "ol") return value.replace(ORDERED_LIST_RE, "");
  return value.replace(UNORDERED_LIST_RE, "");
};

const renderContent = (content) => {
  const nodes = [];
  let listItems = [];
  let listType = null;
  let keyIndex = 0;

  const flushList = () => {
    if (!listItems.length || !listType) return;
    const Tag = listType;
    nodes.push(
      <Tag key={`list-${keyIndex++}`}>
        {listItems.map((item, idx) => {
          const key = `li-${keyIndex++}-${idx}`;
          if (typeof item === "string") {
            return <li key={key}>{stripListPrefix(item.trim(), listType)}</li>;
          }
          if (isHtmlEntry(item)) {
            const html = stripListPrefix(item.html.trim(), listType);
            return (
              <li
                key={key}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }
          return <li key={key}>{String(item ?? "")}</li>;
        })}
      </Tag>
    );
    listItems = [];
    listType = null;
  };

  content.forEach((entry) => {
    const heading = extractHeading(entry);
    if (heading) {
      flushList();
      const HeadingTag = heading.level;
      nodes.push(
        <HeadingTag
          key={`h-${heading.id}-${keyIndex++}`}
          id={heading.id}
          dangerouslySetInnerHTML={{ __html: heading.innerHtml }}
        />
      );
      return;
    }
    const entryListType = getListType(entry);
    if (entryListType) {
      if (listType && listType !== entryListType) {
        flushList();
      }
      listType = entryListType;
      listItems.push(entry);
      return;
    }
    flushList();
    if (typeof entry === "string") {
      nodes.push(<p key={`p-${keyIndex++}`}>{entry}</p>);
      return;
    }
    if (isHtmlEntry(entry)) {
      nodes.push(
        <p
          key={`p-${keyIndex++}`}
          dangerouslySetInnerHTML={{ __html: entry.html }}
        />
      );
      return;
    }
    nodes.push(<p key={`p-${keyIndex++}`}>{String(entry ?? "")}</p>);
  });

  flushList();
  return nodes;
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Post — Popcorn Ceiling Removal Pro" };
  }
  const path = `/blog/${slug}/`;
  const url = SITE_URL ? `${SITE_URL}${path}` : path;
  const image = post.image || post.photos?.[0]?.src;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : SITE_URL
        ? `${SITE_URL}${image}`
        : image
    : undefined;
  const description =
    post.metaDescription || post.excerpt || post.content?.[0]?.slice(0, 155);
  return {
    title: `${post.title} — Popcorn Ceiling Removal Pro`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      locale: "en_CA",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || "EPF Pro Services"],
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function Post({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return (
      <div className="container-x py-10">
        <p>Not found</p>
      </div>
    );
  }
  const path = `/blog/${post.slug}/`;
  const baseUrl = SITE_URL || "https://epfproservices.com";
  const url = `${baseUrl}${path}`;
  const description =
    post.metaDescription || post.excerpt || post.content?.[0]?.slice(0, 155);
  const image = post.image || post.photos?.[0]?.src;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${baseUrl}${image}`
    : undefined;
  const getParagraphText = (para) => {
    if (typeof para === "string") return para;
    if (para && typeof para === "object" && "html" in para) {
      return (para.html || "").replace(/<[^>]+>/g, " ");
    }
    return para ? String(para) : "";
  };
  const plainParagraphs = post.content?.map(getParagraphText) || [];
  const wordCount = plainParagraphs.reduce((sum, para) => {
    const words = para
      .split(/\s+/)
      .map((w) => w.trim())
      .filter(Boolean).length;
    return sum + words;
  }, 0);
  const articleBody = plainParagraphs.join(" ");
  const areaServed = post.slug.includes("mississauga")
    ? [
        {
          "@type": "City",
          name: "Mississauga",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mississauga",
            addressRegion: "ON",
            addressCountry: "CA",
          },
        },
      ]
    : undefined;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: imageUrl ? [imageUrl] : undefined,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: "EPF Pro Services" },
    publisher: {
      "@type": "Organization",
      name: "EPF Pro Services",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    inLanguage: "en-CA",
    articleSection: "Popcorn ceiling removal",
    keywords: post.keywords?.join(", "),
    wordCount,
    articleBody,
    areaServed,
    about: "Popcorn ceiling removal",
    serviceType: "Popcorn ceiling removal",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: { "@id": `${baseUrl}/blog/` },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: post.title,
        item: { "@id": url },
      },
    ],
  };

  const fallbackGallery = [
    {
      src: "/services/popcorn-ceiling-removal/1.webp",
      alt: "Popcorn ceiling removal project detail",
      description: "Dust-controlled popcorn removal with ceiling protection.",
    },
    {
      src: "/services/popcorn-ceiling-removal/2.webp",
      alt: "Before and after ceiling smoothing",
      description: "Level 5 skim coat inspection under raking light.",
    },
    {
      src: "/services/popcorn-ceiling-removal/3.webp",
      alt: "Ceiling primed and paint-ready",
      description: "Primer + finish coats for a bright Oakville living room.",
    },
  ];
  const basePhotos =
    post.photos && post.photos.length > 0 ? post.photos : fallbackGallery;
  const gallery = basePhotos.map((photo, idx) => {
    const fallback = fallbackGallery[idx % fallbackGallery.length];
    return {
      src: photo.src || fallback.src,
      alt: photo.alt || fallback.alt,
      description: photo.description || fallback.description,
    };
  });

  return (
    <div className="space-y-12 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
        <div className="container-x px-4 py-12">
          <nav className="text-sm text-slate-300">
            <Link href="/blog/" className="hover:text-white">
              Blog
            </Link>{" "}
            / {post.title}
          </nav>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate-300">{post.date}</p>
          {post.excerpt && (
            <p className="mt-4 max-w-3xl text-slate-200">{post.excerpt}</p>
          )}
        </div>
      </section>

      <section className="container-x px-4 -mt-8">
        <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
          <div className="prose-custom max-w-none text-slate-800">
            {renderContent(post.content || [])}
            {post.links?.length > 0 && (
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Related local pages
                </h3>
                {post.links.map((link, idx) => (
                  <p key={`${link.href}-${idx}`} className="text-slate-700">
                    <Link
                      href={link.href}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      {link.anchor}
                    </Link>{" "}
                    — {link.description}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {gallery?.length > 0 && (
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
                  Field photos
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Inspiration for your project
                </h2>
              </div>
              <a
                href="/our-work/"
                className="text-sm font-semibold text-amber-700 hover:underline"
              >
                Browse our work →
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((photo, idx) => (
                <figure
                  key={`${photo.alt}-${idx}`}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-3 text-sm text-slate-600">
                    {photo.description}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {post.keywords?.length > 0 && (
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <h2 className="text-2xl font-semibold">
              Mississauga ceiling terminology to know
            </h2>
            <p className="text-sm text-slate-500">
              Skim these phrases before you call so conversations with our crew
              stay clear and focused.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
              {post.keywords.map((k, idx) => (
                <li
                  key={`${k}-${idx}`}
                  className="rounded-full border border-slate-200 px-4 py-2"
                >
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="container-x px-4">
        <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5 grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
              Ready to plan your ceilings?
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Get a popcorn ceiling quote today
            </h2>
            <p className="mt-3 text-slate-600">
              Share photos, ceiling heights, and timing. We reply the same day
              with Mississauga, Oakville, and GTA availability.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <p>• HEPA dust control and Level 5 skim finishing</p>
              <p>• Pot-light coordination and interior painting add-ons</p>
              <p>• Flexible scheduling for condos and single-family homes</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 shadow-inner">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="container-x px-4">
        <Link href="/blog/" className="btn-cta">
          ← Back to blog
        </Link>
      </section>
    </div>
  );
}
