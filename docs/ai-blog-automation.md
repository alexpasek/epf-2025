# AI blog automation

## Cloudflare-native scheduler (production)

1. **KV storage** – make sure a namespace is bound to `BLOG_KV` (configured in `functions/wrangler.toml`). It stores the generated posts and the last-run timestamp.
2. **Secrets / vars** (Cloudflare Pages → Settings → Functions → Environment Variables)  
   - `OPENAI_API_KEY` *(required)*  
   - `OPENAI_MODEL` *(optional, default `gpt-4.1-mini`)*  
   - `NEXT_PUBLIC_SITE_URL` *(required so copy links to the live domain)*  
   - `BLOG_POST_LIMIT` *(optional, number as a string, default `30`)*  
   - `BLOG_CRON_TOKEN` *(optional bearer token to protect the manual refresh endpoint)*
3. **Cron trigger** – `functions/wrangler.toml` already declares `crons = ["0 6 */3 * *"]`, so once deployed Cloudflare will call the worker every 3 days at 06:00 UTC.
4. **What happens**  
   - `_worker.js` now implements both the site request handler and a `scheduled` handler. Each run requests a new popcorn ceiling article from OpenAI (keywords, internal links, GTA focus, photo ideas), prepends it to `BLOG_KV`, and trims to `BLOG_POST_LIMIT`.  
   - The worker exposes `GET /api/generated-posts` so the Next.js blog can read the current list, and `POST /api/generated-posts/refresh` so you can trigger an immediate update (requires the optional `BLOG_CRON_TOKEN` if set).
5. **Manual trigger example**

```
curl -X POST https://epf-2025.pages.dev/api/generated-posts/refresh \
     -H "Authorization: Bearer $BLOG_CRON_TOKEN"
```

## Local development fallback

- `app/blog` now fetches generated posts dynamically; if the Cloudflare endpoint is unreachable (e.g., offline dev), it falls back to `/data/generated-posts.json`.
- `npm run blog:generate` still creates a post locally using the `.env.local` OpenAI key so you can preview layouts. Production ignores the JSON file because the runtime pulls from `/api/generated-posts`.

## Rendering changes

- Blog listing and detail pages are now dynamic (`dynamic = 'force-dynamic'`) so newly generated posts appear immediately without redeploying.
- Each post detail view surfaces the AI-provided keyword list, suggested photos (with alt text cues), and related internal links to reinforce local SEO signals.

Once this deployment reaches Cloudflare Pages, the cron scheduler keeps the popcorn ceiling blog fresh every three days with no manual commits, while still giving you local tools for previews or emergency triggers.
