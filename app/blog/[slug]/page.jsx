import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import PopcornCeilingCostCalculator from "@/components/blog/PopcornCeilingCostCalculator";
import {
  getPostBySlug,
  getPosts,
} from "@/lib/posts";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const DEFAULT_SITE_URL = "https://epfproservices.com";
const SITE_HOSTS = new Set(["epfproservices.com", "www.epfproservices.com"]);
const UNORDERED_LIST_RE = /^\s*[-*]\s+/;
const ORDERED_LIST_RE = /^\s*\d+\.\s+/;
const HEADING_HTML_RE = /^<strong>(.+)<\/strong>$/i;
const BLOCK_HTML_RE = /^<(figure|div|section)\b/i;

if (SITE_URL) {
  try {
    SITE_HOSTS.add(new URL(SITE_URL).hostname);
  } catch {}
}

const isAllowedBlogImageSrc = (src) => {
  if (!src || typeof src !== "string") return false;
  if (src.startsWith("/")) return true;

  try {
    return SITE_HOSTS.has(new URL(src).hostname);
  } catch {
    return false;
  }
};

const isAfterFaqPhoto = (photo) =>
  photo?.placement === "afterFaq" ||
  photo?.description ===
    "Shared drywall repair image used at the bottom of the cluster article.";

const toAbsoluteBlogImageUrl = (src, baseUrl = SITE_URL || DEFAULT_SITE_URL) => {
  if (!isAllowedBlogImageSrc(src)) return undefined;
  return src.startsWith("/") ? `${baseUrl}${src}` : src;
};

const isHtmlEntry = (entry) =>
  entry && typeof entry === "object" && "html" in entry;

const isFigureEntry = (entry) =>
  entry && typeof entry === "object" && "figure" in entry;

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

const CITY_LABELS = {
  mississauga: "Mississauga",
  toronto: "Toronto",
  oakville: "Oakville",
  burlington: "Burlington",
  hamilton: "Hamilton",
  milton: "Milton",
  etobicoke: "Etobicoke",
  grimsby: "Grimsby",
  "st-catharines": "St. Catharines",
};

const cityToAreaServed = (name) => ({
  "@type": "City",
  name,
  address: {
    "@type": "PostalAddress",
    addressLocality: name,
    addressRegion: "ON",
    addressCountry: "CA",
  },
});

const deriveAreaServed = (post) => {
  const slug = post.slug || "";
  const matches = Object.entries(CITY_LABELS)
    .filter(([citySlug]) => slug.includes(citySlug))
    .map(([, name]) => cityToAreaServed(name));

  if (matches.length) return matches;

  if (slug.includes("gta")) {
    return ["Mississauga", "Toronto", "Oakville", "Burlington", "Hamilton"].map(
      cityToAreaServed
    );
  }

  return undefined;
};

const getPostContext = (post) => {
  const haystack = [
    post.slug,
    post.title,
    post.articleSection,
    post.serviceType,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const isDrywall = haystack.includes("drywall");
  const isWallpaper = haystack.includes("wallpaper");
  const isProject =
    haystack.includes("project spotlight") || haystack.includes("project");

  const fallbackGallery = isDrywall
    ? [
        {
          src: "/gallery/drywall-installation/drywall-installation-hero.webp",
          alt: "Drywall installation project detail",
          description:
            "Professional drywall hanging and finishing ready for primer.",
        },
        {
          src: "/gallery/drywall-repair/drywall-repair-service00003.webp",
          alt: "Drywall taping and finish work",
          description:
            "Multiple coats, sanding, and final checks before paint.",
        },
        {
          src: "/services/drywall/6.webp",
          alt: "Paint-ready drywall finish",
          description:
            "Straight walls and ceilings prepared for final paint.",
        },
      ]
    : [
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

  let cityName = null;
  for (const [slug, label] of Object.entries(CITY_LABELS)) {
    if ((post.slug || "").includes(slug)) {
      cityName = label;
      break;
    }
  }

  const articleSection = post.articleSection
    || (isDrywall
      ? "Drywall installation"
      : isWallpaper
        ? "Wallpaper removal"
        : "Popcorn ceiling removal");

  const serviceType = post.serviceType || articleSection;
  const about = post.about || serviceType;

  const keywordPanelTitle = isDrywall
    ? "Drywall terms this page covers"
    : isWallpaper
      ? "Wallpaper removal terms this page covers"
      : "Popcorn ceiling terms this page covers";

  const keywordPanelDescription = isDrywall
    ? "Useful terms to compare scopes, finish levels, and scheduling before you book."
    : isWallpaper
      ? "Useful terms to compare prep, removal, skim coating, and repaint scope."
      : "Useful terms to compare removal, skim coating, and finish scope before you book.";

  let quoteLocationLine;
  if (isDrywall && cityName && isProject) {
    quoteLocationLine = `Share photos, room sizes, and a short note about your ${cityName} drywall scope. We reply the same day with availability and a cleaner written scope.`;
  } else if (isDrywall && cityName) {
    quoteLocationLine = `Share photos, room sizes, and timing. We reply the same day with ${cityName} drywall availability and a clearer written scope.`;
  } else if (isDrywall) {
    quoteLocationLine = "Share photos, room sizes, and timing. We reply the same day with GTA drywall availability and a clearer written scope.";
  } else if (cityName) {
    quoteLocationLine = `Share photos, ceiling heights, and timing. We reply the same day with ${cityName} availability.`;
  } else {
    quoteLocationLine = "Share photos, ceiling heights, and timing. We reply the same day with Mississauga, Oakville, and GTA availability.";
  }

  const quoteEyebrow = isDrywall
    ? "Plan your drywall scope"
    : isWallpaper
      ? "Plan your wallpaper removal"
      : "Ready to plan your ceilings?";

  const quoteHeading = isDrywall
    ? "Get a drywall quote today"
    : isWallpaper
      ? "Get a wallpaper removal quote today"
      : "Get a popcorn ceiling quote today";

  const quoteBullets = isDrywall
    ? [
        "Clear finish-level scope and drywall sequencing",
        "Basements, ceilings, condos, and commercial buildouts",
        "Flexible scheduling for occupied homes, condos, and active sites",
      ]
    : [
        "HEPA dust control and Level 5 skim finishing",
        "Pot-light coordination and interior painting add-ons",
        "Flexible scheduling for condos and single-family homes",
      ];

  return {
    articleSection,
    serviceType,
    about,
    fallbackGallery,
    keywordPanelTitle,
    keywordPanelDescription,
    quoteEyebrow,
    quoteHeading,
    quoteBullets,
    quoteLocationLine,
  };
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
    if (isFigureEntry(entry)) {
      flushList();
      const figure = entry.figure || {};
      const safeFigureSrc = isAllowedBlogImageSrc(figure.src) ? figure.src : null;
      if (!safeFigureSrc) return;
      nodes.push(
        <figure
          key={`figure-${keyIndex++}`}
          className="my-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
        >
          <img
            src={safeFigureSrc}
            alt={figure.alt}
            className="w-full"
            loading="lazy"
          />
          {figure.caption ? (
            <figcaption className="px-5 py-4 text-sm text-slate-600">
              {figure.caption}
            </figcaption>
          ) : null}
        </figure>
      );
      return;
    }

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
      const isBlockHtml = BLOCK_HTML_RE.test(entry.html.trim());
      const Tag = isBlockHtml ? "div" : "p";
      nodes.push(
        <Tag
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
    return { title: "Post" };
  }
  const path = `/blog/${slug}/`;
  const url = SITE_URL ? `${SITE_URL}${path}` : path;
  const image = post.image || post.photos?.[0]?.src;
  const imageUrl = toAbsoluteBlogImageUrl(image, SITE_URL || DEFAULT_SITE_URL);
  const description =
    post.metaDescription || post.excerpt || post.content?.[0]?.slice(0, 155);
  const seoTitle = post.metaTitle || post.title;
  return {
    title: seoTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
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
      title: seoTitle,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
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
  const pageTitle = post.h1 || post.title;
  const context = getPostContext(post);
  const image = post.image || post.photos?.[0]?.src;
  const imageUrl = toAbsoluteBlogImageUrl(image, baseUrl);
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
  const areaServed = deriveAreaServed(post);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": post.schemaType || "Article",
    headline: pageTitle,
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
    articleSection: context.articleSection,
    keywords: post.keywords?.join(", "),
    wordCount,
    articleBody,
    areaServed,
    about: context.about,
    serviceType: context.serviceType,
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
        name: pageTitle,
        item: { "@id": url },
      },
    ],
  };
  const faqJsonLd =
    post.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  const hasCustomPhotos = post.photos && post.photos.length > 0;
  const rawPhotos = hasCustomPhotos ? post.photos : context.fallbackGallery;
  const galleryPhotos = rawPhotos.filter((photo) => !isAfterFaqPhoto(photo));
  const afterFaqPhotos = rawPhotos.filter(isAfterFaqPhoto);
  const photosForGallery = hasCustomPhotos ? galleryPhotos : context.fallbackGallery;
  const gallery = photosForGallery.map((photo, idx) => {
    const fallback =
      context.fallbackGallery[idx % context.fallbackGallery.length];
    const src = isAllowedBlogImageSrc(photo.src) ? photo.src : fallback.src;
    return {
      src,
      alt: photo.alt || fallback.alt,
      description: photo.description || fallback.description,
    };
  });
  const featuredPhoto = !post.hideFeaturedImage && isAllowedBlogImageSrc(image)
    ? {
        src: image,
        alt:
          rawPhotos.find((photo) => photo.src === image)?.alt || pageTitle,
        description:
          rawPhotos.find((photo) => photo.src === image)?.description ||
          post.excerpt ||
          description,
      }
    : null;
  const isBurlingtonCostGuide =
    post.slug === "popcorn-ceiling-removal-cost-burlington-2026-price-guide";
  const showCostCalculator = post.slug === "popcorn-ceiling-removal-cost";
  const keywordPanelTitle = isBurlingtonCostGuide
    ? "Common Burlington terms homeowners use"
    : showCostCalculator
      ? "GTA popcorn ceiling cost terms homeowners search"
      : context.keywordPanelTitle;
  const keywordPanelDescription = isBurlingtonCostGuide
    ? "Skim these before you call so your quote scope, neighborhood access, and timeline stay clear."
    : showCostCalculator
      ? "These are the local authority phrases this guide covers across Toronto, Mississauga, Oakville, Burlington, Hamilton, Milton, and North York."
      : context.keywordPanelDescription;
  const quoteLocationLine = showCostCalculator
    ? "Share photos, ceiling heights, and the cities you need priced. We reply the same day with GTA availability and a tighter written scope."
    : context.quoteLocationLine;

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
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
        <div className="container-x px-4 py-12">
          <nav className="text-sm text-slate-300">
            <Link href="/blog/" className="hover:text-white">
              Blog
            </Link>{" "}
            / {pageTitle}
          </nav>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-3 text-sm text-slate-300">{post.date}</p>
          {post.excerpt && (
            <p className="mt-4 max-w-3xl text-slate-200">{post.excerpt}</p>
          )}
        </div>
      </section>

      {featuredPhoto ? (
        <section className="container-x px-4 -mt-8">
          <figure className="mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-white shadow-xl ring-1 ring-black/5">
            <img
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              className="mx-auto max-h-[520px] w-full bg-slate-100 object-contain p-4 md:p-6"
              loading="eager"
              fetchPriority="high"
            />
            {featuredPhoto.description ? (
              <figcaption className="border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm text-slate-600">
                {featuredPhoto.description}
              </figcaption>
            ) : null}
          </figure>
        </section>
      ) : null}

      {showCostCalculator ? (
        <section className="container-x px-4 -mt-8">
          <PopcornCeilingCostCalculator />
        </section>
      ) : null}

      <section className={`container-x px-4 ${showCostCalculator ? "" : "-mt-8"}`}>
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

      {post.faqs?.length > 0 && (
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
            <div className="mt-6 space-y-4">
              {post.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-slate-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {afterFaqPhotos.length > 0 && (
        <section className="container-x px-4">
          <div className="space-y-6">
            {afterFaqPhotos.map((photo, idx) => (
              <figure
                key={`${photo.src}-${idx}`}
                className="overflow-hidden rounded-3xl border bg-white shadow-xl ring-1 ring-black/5"
              >
                <img
                  src={photo.src}
                  alt={photo.alt || pageTitle}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      )}

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
            <h2 className="text-2xl font-semibold">{keywordPanelTitle}</h2>
            <p className="text-sm text-slate-500">{keywordPanelDescription}</p>
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
              {context.quoteEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              {context.quoteHeading}
            </h2>
            <p className="mt-3 text-slate-600">{quoteLocationLine}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-500">
              {context.quoteBullets.map((bullet) => (
                <p key={bullet}>• {bullet}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Quick next step
            </p>
            <p className="mt-3 text-slate-700">
              Send photos and room sizes through the main quote page, or call for
              a same-day reply.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote/" className="btn-cta text-center">
                Go to quote page
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Keeping the form on the main quote page helps this article stay
              lighter and faster.
            </p>
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
