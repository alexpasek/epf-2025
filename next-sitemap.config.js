/** @type {import('next-sitemap').IConfig} */

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://epfproservices.com";

module.exports = {
    siteUrl, // real domain comes from env in production
    generateRobotsTxt: true,
    trailingSlash: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.7,
    autoLastmod: true,

    // only exclude things that should never be indexed
    exclude: ["/api/*", "/404", "/500"],

    // Runs for every URL that next-sitemap is about to add
    transform: async(config, path) => {
        // 1) Drop ONLY placeholder/template URLs like /blog/[slug]/
        //    All real URLs with real city/neighborhood names are kept.
        if (path.includes("[")) {
            return null; // do not include this <url> in sitemap
        }

        // 2) Basic <url> entry – NO images attached
        const entry = {
            loc: path, // next-sitemap will prefix with siteUrl
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
        };

        return entry;
    },

    // Add real video watch pages (on-site URLs) explicitly so they appear even though we block bracketed routes
    additionalPaths: async(config) => {
        const { videoLibrary, videoPagePath } = await import("./data/videos.js");
        const now = new Date().toISOString();
        const videos = videoLibrary.map((video) => ({
            loc: videoPagePath(video).replace(/\/?$/, "/"),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: now,
        }));
        return [
            {
                loc: "/videos/",
                changefreq: config.changefreq,
                priority: config.priority,
                lastmod: now,
            },
            ...videos,
        ];
    },

    robotsTxtOptions: {
        policies: [{
            userAgent: "*",
            allow: "/",
        }, ],
        // robots.txt will automatically include:
        // Sitemap: https://epfproservices.com/sitemap.xml
    },
};
