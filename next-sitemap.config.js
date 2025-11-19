/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://epf-2025.pages.dev',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/api/*'],
};
