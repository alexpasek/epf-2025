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
    exclude: [
        "/api/*",
        "/404",
        "/500",
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

    robotsTxtOptions: {
        policies: [{
            userAgent: "*",
            allow: "/",
        }],
        // robots.txt will automatically include:
        // Sitemap: https://epfproservices.com/sitemap.xml
    },
};
