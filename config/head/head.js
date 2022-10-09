module.exports = {
  head: {
    title: 'NamiSushi | Доставка японской еды в Донецке и Макеевке',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description',
        content: 'NamiSushi - доставка японской еды в Донецке и Макеевке. Доставка еды - суши, роллов и другой вкусной еды.'
      },
      { name: 'og:title', content: 'NamiSushi | Доставка японской еды в Донецке и Макеевке' },
      { name: 'og:description', content: 'NamiSushi - доставка японской еды в Донецке и Макеевке. Доставка еды - суши, роллов и другой вкусной еды.' },
      { name: 'og:image', content: 'https://namisushi.ru/thumbnail.jpg' },
      { name: 'og:url', content: 'https://namisushi.ru' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://vk.com/js/api/openapi.js?169', type: 'text/javascript' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/style.scss'
  ]
}
