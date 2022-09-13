/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.ayuret.com/',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.ayuret.com/server-sitemap.xml'],
  },
}

module.exports = config