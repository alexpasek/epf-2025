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
  async redirects() {
    return [
      {
        source: "/service-areas/popcorn-ceiling-removal/mississauga/lorne-park",
        destination:
          "/service-areas/popcorn-ceiling-removal/mississauga/lorne-park/",
        permanent: true,
      },
      {
        source:
          "/service-areas/popcorn-ceiling-removal/mississauga/lorne-park/",
        destination:
          "/service-areas/popcorn-ceiling-removal/mississauga/lorne-park/",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
