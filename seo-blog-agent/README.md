# EPF SEO Blog Agent

Hidden internal tool for researching blog topics, checking competitor pages for content gaps, creating draft blog packages, manually approving drafts, and publishing approved posts into the existing EPF blog loader.

## Hidden UI

Visit:

```txt
/seo-blog-agent
```

The page exports `robots: noindex, nofollow` and is not linked from public navigation. In production, set `SEO_BLOG_AGENT_KEY` or `SITE_ADMIN_API_KEY`; the UI sends that value as a bearer token to the API.

## API

```txt
GET  /api/seo-blog-agent
GET  /api/seo-blog-agent/config
POST /api/seo-blog-agent/jobs
POST /api/seo-blog-agent/automation/daily
POST /api/seo-blog-agent/jobs/:jobId/research
POST /api/seo-blog-agent/jobs/:jobId/draft
POST /api/seo-blog-agent/drafts/:draftId/approve
POST /api/seo-blog-agent/drafts/:draftId/reject
POST /api/seo-blog-agent/drafts/:draftId/publish
```

## Storage

MVP data lives in:

```txt
seo-blog-agent/data/store.json
```

Approved published posts are written to:

```txt
data/generated-posts.json
```

That file is already imported by `lib/posts.js`, so published posts become available at `/blog/[slug]/`. When `GITHUB_TOKEN` or `SITE_ADMIN_GITHUB_TOKEN` is available, publishing commits the updated file to GitHub. Without GitHub credentials, it writes locally for development.

## Environment

Required in production for the hidden UI and API:

```txt
SEO_BLOG_AGENT_KEY=
SITE_ADMIN_API_KEY=
```

Use either `SEO_BLOG_AGENT_KEY` or `SITE_ADMIN_API_KEY`. The browser UI sends the value as a bearer token.

Required for AI competition research:

```txt
OPENAI_API_KEY=
```

Without `OPENAI_API_KEY`, the agent still runs but falls back to rule-based competitor scoring.

Optional model override:

```txt
OPENAI_RESEARCH_MODEL=gpt-5.5
```

The default research model is `gpt-5.5`.

Optional GitHub publishing credentials:

```txt
GITHUB_TOKEN=
SITE_ADMIN_GITHUB_TOKEN=
GITHUB_REPO=alexpasek/epf-2025
GITHUB_BRANCH=main
```

Use either `GITHUB_TOKEN` or `SITE_ADMIN_GITHUB_TOKEN` when approved posts should be committed to GitHub. Without a GitHub token, approved publishing writes to the local `data/generated-posts.json` file during development.

Optional daily automation and site URL:

```txt
SEO_BLOG_AGENT_DAILY_TOPICS=
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
```

## Daily automation

The daily automation endpoint creates one research job, runs automatic AI-assisted competitor research, creates a draft, and stops for manual approval.

```txt
POST /api/seo-blog-agent/automation/daily
Authorization: Bearer SEO_BLOG_AGENT_KEY
```

It does not publish automatically.

Use an external cron service, GitHub Action schedule, or platform scheduler to call the endpoint once per day. Example:

```bash
curl -X POST "https://epfproservices.com/api/seo-blog-agent/automation/daily" \
  -H "Authorization: Bearer $SEO_BLOG_AGENT_KEY" \
  -H "Content-Type: application/json" \
  -d "{}"
```

To customize the topic rotation, set `SEO_BLOG_AGENT_DAILY_TOPICS` to a JSON array:

```json
[
  {
    "service": "popcorn",
    "city": "Mississauga",
    "seedKeywords": ["popcorn ceiling removal cost Mississauga"]
  },
  {
    "service": "drywall_repair",
    "city": "Oakville",
    "seedKeywords": ["drywall repair Oakville"]
  }
]
```

## Safety

- Drafts cannot publish unless `approved_by_user` is true and status is `approved`.
- Daily automation creates drafts for review only; it does not publish.
- Competitor pages are analyzed only for title, headings, word count, and missing-topic gaps. Content is not copied.
- OpenAI is optional but recommended for AI research. If `OPENAI_API_KEY` is missing, the agent falls back to rule-based competitor scoring.
