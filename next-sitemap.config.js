/** @type {import('next-sitemap').IConfig} */

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://epfproservices.com";

module.exports = {
    siteUrl, // real domain comes from env in production
    generateRobotsTxt: true,
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

    robotsTxtOptions: {
        policies: [{
            userAgent: "*",
            allow: "/",
        }, ],
        // robots.txt will automatically include:
        // Sitemap: https://epfproservices.com/sitemap.xml
    },
};