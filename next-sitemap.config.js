/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://blog.magia.runteq.jp/',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://blog.magia.runteq.jp/server-sitemap.xml'],
  },
}

module.exports = config