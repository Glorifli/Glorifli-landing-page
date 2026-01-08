/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://glorifli.com',
    generateRobotsTxt: false, // We use app/robots.ts
    sitemapSize: 7000,
    exclude: ['/icon.png', '/apple-icon.png'],
}
