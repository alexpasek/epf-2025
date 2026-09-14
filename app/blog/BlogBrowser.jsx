'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';

export default function BlogBrowser({ posts }) {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('All guides');
  const topics = ['All guides', ...new Set(posts.map(post => post.topic))];
  const results = useMemo(() => posts.filter(post =>
    (topic === 'All guides' || post.topic === topic) &&
    query.trim().toLowerCase().split(/\s+/).every(term => `${post.title} ${post.excerpt}`.toLowerCase().includes(term))
  ), [posts, topic, query]);
  const reset = () => { setQuery(''); setTopic('All guides'); };
  return <section id="browse-guides" aria-labelledby="guide-browser-heading">
    <div className="guide-toolbar">
      <div><h2 id="guide-browser-heading">Find a guide for your project</h2><p>Browse a topic or search a question.</p></div>
      <div className="guide-search"><label htmlFor="guide-search">Search the guides</label><input id="guide-search" type="search" placeholder="Try “ceiling cost” or “drywall cracks”" value={query} onChange={event => setQuery(event.target.value)} /></div>
    </div>
    <div className="guide-topics" role="group" aria-label="Filter guides by topic">{topics.map(item => <button key={item} type="button" aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>)}</div>
    <div className="guide-results"><p role="status">{results.length} {results.length === 1 ? 'guide' : 'guides'}{topic !== 'All guides' ? ` · ${topic}` : ' · Newest first'}</p>{(query || topic !== 'All guides') && <button type="button" onClick={reset}>Clear filters</button>}</div>
    {results.length ? <div className="guide-grid">{results.map((post, index) => <article key={post.slug} className="guide-card">
      <Link href={`/blog/${post.slug}/`} className="guide-card-link">
        {post.image && <div className="guide-image"><ResponsiveImage src={post.image} alt="" className={post.cardImageMode === 'contain' ? 'guide-image-contain' : ''} loading={index < 3 ? 'eager' : 'lazy'} sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 380px" /></div>}
        <div className="guide-card-copy"><div className="guide-meta"><span>{post.topic}</span>{post.formattedDate && <time dateTime={post.date}>{post.formattedDate}</time>}</div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="guide-read" aria-hidden="true">Read the guide <span>↗</span></span></div>
      </Link>
    </article>)}</div> : <div className="guide-empty"><h3>No guides match that search.</h3><p>Try a shorter phrase, choose another topic, or view all guides.</p><button type="button" onClick={reset}>View all guides</button><Link href="/contact/">Ask EPF about your project →</Link></div>}
  </section>;
}
