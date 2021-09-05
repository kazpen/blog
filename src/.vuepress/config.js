module.exports = {
  title: 'kazpen.github.io',
  description: 'ソフトウェアエンジニアの徒然雑記',
  plugins: [ '@vuepress/blog' ],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' }
    ]
  },
  base: '/blog/',
  dest: 'docs'
}