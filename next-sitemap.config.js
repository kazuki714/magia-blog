/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://jirorious.com/',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://jirorious.com/server-sitemap.xml'],
  },
}

module.exports = config