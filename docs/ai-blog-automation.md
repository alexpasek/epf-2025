# AI blog automation

## Correct production flow for EPF blog to GBP

The live EPF site is the Cloudflare Pages project `epf-2025`, served at `https://epfproservices.com`.

The GBP/poster webhook must receive the real EPF URL only after that blog URL is live.

Correct flow:

1. Generate or add the blog in this repository.
2. Commit/push/deploy the site to the Cloudflare Pages project `epf-2025`.
3. Verify the final URL returns `200`, for example `https://epfproservices.com/blog/example-slug/`.
4. Send the webhook to the poster agent.

Use:

```
npm run blog:webhook -- --slug example-slug
```

For the newest not-yet-notified post:

```
npm run blog:webhook
```

Do not send `wallpaper-removal-pro.webtoronto22.workers.dev` URLs to the poster agent for EPF blog promotion. That Worker URL is only for the separate Worker deployment/testing path. The GBP/poster workflow should use `https://epfproservices.com/blog/...`.

## Cloudflare-native scheduler (production)

1. **KV storage** – make sure a namespace is bound to `BLOG_KV` (configured in `functions/wrangler.toml`). It stores the generated posts and the last-run timestamp.
2. **Secrets / vars** (Cloudflare Pages → Settings → Functions → Environment Variables)  
   - `OPENAI_API_KEY` *(required)*  
   - `OPENAI_MODEL` *(optional, default `gpt-4.1-mini`)*  
   - `NEXT_PUBLIC_SITE_URL` *(required so copy links to the live domain)*  
   - `BLOG_POST_LIMIT` *(optional, number as a string, default `30`)*  
   - `BLOG_CRON_TOKEN` *(optional bearer token to protect the manual refresh endpoint)*
   - `GMB_POSTER_WEBHOOK_URL` *(optional, full GMB poster webhook endpoint)*
   - `EPF_WEBHOOK_SECRET` *(optional, sent as `x-epf-webhook-secret`)*
3. **Cron trigger** – `functions/wrangler.toml` already declares `crons = ["0 6 */3 * *"]`, so once deployed Cloudflare will call the worker every 3 days at 06:00 UTC.
4. **What happens**  
   - `_worker.js` now implements both the site request handler and a `scheduled` handler. Each run requests a new popcorn ceiling article from OpenAI (keywords, internal links, GTA focus, photo ideas), prepends it to `BLOG_KV`, and trims to `BLOG_POST_LIMIT`.  
   - After a post is saved, the worker sends a blog-created webhook to the GMB poster when `GMB_POSTER_WEBHOOK_URL` and `EPF_WEBHOOK_SECRET` are configured. Webhook failure is logged but does not delete or roll back the generated blog post.
   - The worker exposes `GET /api/generated-posts` so the Next.js blog can read the current list, and `POST /api/generated-posts/refresh` so you can trigger an immediate update (requires the optional `BLOG_CRON_TOKEN` if set).
5. **Manual trigger example**

```
curl -X POST https://epfproservices.com/api/generated-posts/refresh \
     -H "Authorization: Bearer $BLOG_CRON_TOKEN"
```

## Local development fallback

- `app/blog` now fetches generated posts dynamically; if the Cloudflare endpoint is unreachable (e.g., offline dev), it falls back to `/data/generated-posts.json`.
- `npm run blog:generate` still creates a post locally using the `.env.local` OpenAI key so you can preview layouts. It also sends the same GMB poster webhook when `GMB_POSTER_WEBHOOK_URL` and `EPF_WEBHOOK_SECRET` are set. Production ignores the JSON file because the runtime pulls from `/api/generated-posts`.

## Blog-created webhook

Configure:

```
GMB_POSTER_WEBHOOK_URL=https://YOUR-GMB-POSTER-DOMAIN.com/api/webhooks/blog-created
EPF_WEBHOOK_SECRET=YOUR_SECRET_KEY
```

Payload:

```json
{
  "event": "BLOG_POST_CREATED",
  "url": "https://epfproservices.com/blog/example-post/",
  "title": "Popcorn Ceiling Removal in Burlington",
  "excerpt": "Short blog description here...",
  "city": "Burlington",
  "service": "Popcorn Ceiling Removal",
  "publishedAt": "2026-06-12T18:00:00.000Z"
}
```

Request header:

```
x-epf-webhook-secret: YOUR_SECRET_KEY
```

## Rendering changes

- Blog listing and detail pages are now dynamic (`dynamic = 'force-dynamic'`) so newly generated posts appear immediately without redeploying.
- Each post detail view surfaces the AI-provided keyword list, suggested photos (with alt text cues), and related internal links to reinforce local SEO signals.

Once this deployment reaches Cloudflare Pages, the cron scheduler keeps the popcorn ceiling blog fresh every three days with no manual commits, while still giving you local tools for previews or emergency triggers.
