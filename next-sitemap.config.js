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

    // Add all static and dynamic paths
    additionalPaths: async (config) => {
        const paths = [];
        const now = new Date().toISOString();

        // Service pages
        paths.push(
            { loc: "/services/", changefreq: "weekly", priority: 0.9, lastmod: now },
            { loc: "/services/popcorn-ceiling-removal/", changefreq: "weekly", priority: 1.0, lastmod: now },
            { loc: "/services/interior-painting/", changefreq: "weekly", priority: 0.8, lastmod: now },
            { loc: "/services/wallpaper-removal/", changefreq: "weekly", priority: 0.8, lastmod: now },
            { loc: "/services/drywall-installation/", changefreq: "weekly", priority: 0.8, lastmod: now }
        );

        // City pages for popcorn ceiling removal
        const cities = [
            "burlington", "mississauga", "oakville", "toronto", "hamilton", 
            "milton", "georgetown", "vaughan", "markham", "richmond-hill",
            "etobicoke", "scarborough", "north-york", "brampton", "stoney-creek"
        ];

        cities.forEach(city => {
            paths.push({
                loc: `/popcorn-ceiling-removal/${city}/`,
                changefreq: "weekly",
                priority: 0.9,
                lastmod: now
            });
        });

        // Blog posts
        paths.push(
            { loc: "/blog/", changefreq: "weekly", priority: 0.8, lastmod: now },
            { loc: "/blog/popcorn-ceiling-removal-cost-timeline/", changefreq: "monthly", priority: 0.7, lastmod: now }
        );

        // Other important pages
        paths.push(
            { loc: "/quote/", changefreq: "monthly", priority: 0.9, lastmod: now },
            { loc: "/contact/", changefreq: "monthly", priority: 0.8, lastmod: now },
            { loc: "/our-work/", changefreq: "weekly", priority: 0.8, lastmod: now },
            { loc: "/our-process/", changefreq: "monthly", priority: 0.7, lastmod: now },
            { loc: "/service-areas/", changefreq: "monthly", priority: 0.8, lastmod: now }
        );

        // Video pages
        try {
            const { videoLibrary, videoPagePath } = await import("./data/videos.js");
            const videos = videoLibrary.map((video) => ({
                loc: videoPagePath(video).replace(/\/?$/, "/"),
                changefreq: "monthly",
                priority: 0.6,
                lastmod: now,
            }));
            paths.push(
                { loc: "/videos/", changefreq: "weekly", priority: 0.7, lastmod: now },
                ...videos
            );
        } catch (error) {
            console.warn("Could not load video library for sitemap:", error);
        }

        return paths;
    },

    // Transform function for discovered pages
    transform: async(config, path) => {
        // Skip template/bracket routes 
        if (path.includes("[") || path.includes("]")) {
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
