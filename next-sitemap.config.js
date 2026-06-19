const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://epfproservices.com";

function collectBlogSlugs() {
    const root = __dirname;
    const generatedPostsPath = path.join(root, "data/generated-posts.json");
    const jsSources = fs
        .readdirSync(path.join(root, "lib"))
        .filter((file) => file === "posts.js" || /Posts\.js$/.test(file))
        .map((file) => path.join(root, "lib", file));
    const slugs = new Set();

    if (fs.existsSync(generatedPostsPath)) {
        try {
            const generatedPosts = JSON.parse(
                fs.readFileSync(generatedPostsPath, "utf8"),
            );
            if (Array.isArray(generatedPosts)) {
                for (const post of generatedPosts) {
                    if (post?.slug && post?.title) slugs.add(post.slug);
                }
            }
        } catch {}
    }

    for (const source of jsSources) {
        if (!fs.existsSync(source)) continue;
        const content = fs.readFileSync(source, "utf8");
        const pattern = /(?:^|[,{]\s*)slug\s*:\s*["']([^"']+)["']/gm;
        let match;
        while ((match = pattern.exec(content)) !== null) {
            const before = content.slice(Math.max(0, match.index - 800), match.index);
            const after = content.slice(match.index, match.index + 1200);
            const nearby = `${before}\n${after}`;
            if (
                /title\s*:/.test(nearby) &&
                /(metaTitle|metaDescription|excerpt|quickAnswer|date)\s*:/.test(nearby) &&
                match[1]
            ) {
                slugs.add(match[1]);
            }
        }
    }

    return [...slugs].sort();
}

module.exports = {
    siteUrl, // real domain comes from env in production
    generateRobotsTxt: true,
    trailingSlash: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.7,
    autoLastmod: true,

    // only exclude things that should never be indexed
    exclude: [
        "/api/*",
        "/404",
        "/500",
        "/seo",
        "/seo-blog-agent",
        "/locations/drywall-repair",
        "/locations/popcorn-ceiling-removal",
        "/locations/popcorn-ceiling-removal-*",
    ],

    // Transform function for discovered pages
    transform: async(config, path) => {
        // Skip template/bracket routes 
        if (path.includes("[") || path.includes("]")) {
            return null;
        }

        // Keep hidden internal tools out of public sitemap output.
        if (path === "/seo" || path === "/seo-blog-agent") {
            return null;
        }

        // Exclude paid-ads landing pages from indexing/sitemaps
        if (
            path === "/locations/drywall-repair" ||
            path === "/locations/popcorn-ceiling-removal" ||
            path.startsWith("/locations/popcorn-ceiling-removal-")
        ) {
            return null;
        }

        // Set priorities based on path
        let priority = 0.7;
        if (path === "/") priority = 1.0;
        else if (path.startsWith("/services/popcorn-ceiling-removal")) priority = 0.9;
        else if (path.startsWith("/popcorn-ceiling-removal/")) priority = 0.9;
        else if (path.startsWith("/services/")) priority = 0.8;
        else if (path.startsWith("/blog/")) priority = 0.7;
        else if (path.includes("/quote") || path.includes("/contact")) priority = 0.9;

        return {
            loc: path,
            changefreq: "weekly",
            priority,
            lastmod: new Date().toISOString(),
        };
    },

    additionalPaths: async() =>
        collectBlogSlugs().map((slug) => ({
            loc: `/blog/${slug}/`,
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date().toISOString(),
        })),

    robotsTxtOptions: {
        policies: [{
            userAgent: "*",
            allow: "/",
        }],
        // robots.txt will automatically include:
        // Sitemap: https://epfproservices.com/sitemap.xml
    },
};
