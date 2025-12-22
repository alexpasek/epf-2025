// const path = require("path");
// /** @type {import('next').NextConfig} */
// module.exports = {
//     output: "export",
//     trailingSlash: true,
//     images: { unoptimized: true },
//     outputFileTracingRoot: __dirname,
// };
//
//
/** @type {import('next').NextConfig} */
const nextConfig = {
    // DO NOT set: output: 'export'
    trailingSlash: true,
    images: { unoptimized: true },
    outputFileTracingRoot: __dirname,
    experimental: {
        devtoolSegmentExplorer: false,
        // Drop legacy browser transforms/polyfills; target modern browsers only
        legacyBrowsers: false,
    },
    async redirects() {
        return [
            // General: redirect /popcorn-removal and any children to /popcorn-ceiling-removal/
            {
                source: "/popcorn-removal",
                destination: "/popcorn-ceiling-removal/",
                permanent: true,
            },
            {
                source: "/popcorn-removal/:path*",
                destination: "/popcorn-ceiling-removal/:path*/",
                permanent: true,
            },

            // General: /locations/popcorn-ceiling-removal-:city -> /popcorn-ceiling-removal/:city/
            {
                source: "/locations/popcorn-ceiling-removal-:city",
                destination: "/popcorn-ceiling-removal/:city/",
                permanent: true,
            },
            {
                source: "/locations/popcorn-ceiling-removal-:city/:path*",
                destination: "/popcorn-ceiling-removal/:city/:path*/",
                permanent: true,
            },

            // Preserve a few explicit legacy redirects (kept for compatibility)
            {
                source: "/popcorn-removal/hamilton",
                destination: "/popcorn-ceiling-removal/hamilton/",
                permanent: true,
            },
            {
                source: "/popcorn-removal/hamilton/",
                destination: "/popcorn-ceiling-removal/hamilton/",
                permanent: true,
            },
            {
                source: "/locations/popcorn-ceiling-removal-burlington",
                destination: "/popcorn-ceiling-removal/burlington/",
                permanent: true,
            },
            {
                source: "/locations/popcorn-ceiling-removal-burlington/",
                destination: "/popcorn-ceiling-removal/burlington/",
                permanent: true,
            },
            {
                source: "/locations/popcorn-ceiling-removal-mississauga",
                destination: "/popcorn-ceiling-removal/mississauga/",
                permanent: true,
            },
            {
                source: "/locations/popcorn-ceiling-removal-mississauga/",
                destination: "/popcorn-ceiling-removal/mississauga/",
                permanent: true,
            },
            {
                source: "/popcorn-ceiling-removal/mississauga/lorne-park",
                destination: "/popcorn-ceiling-removal/mississauga/lorne-park/",
                permanent: true,
            },
            {
                source: "/popcorn-ceiling-removal/mississauga/lorne-park/",
                destination: "/popcorn-ceiling-removal/mississauga/lorne-park/",
                permanent: true,
            },
        ];
    },
};
module.exports = nextConfig;