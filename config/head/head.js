module.exports = {
  head: {
    title: 'NamiSushi | Доставка суши и роллов в Донецке и Макеевке',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', property: 'description', content: 'NamiSushi - доставка японской еды в Донецке и Макеевке. Доставка суши, роллов и другой вкусной еды.' },
      { name: 'og:title', property: 'og:title', content: 'NamiSushi | Доставка японской еды в Донецке и Макеевке' },
      { name: 'og:description', property: 'og:description', content: 'NamiSushi - доставка японской еды в Донецке и Макеевке. Доставка еды - суши, роллов и другой вкусной еды.' },
      { name: 'og:image', property: 'og:image', content: 'https://namisushi.ru/thumbnail.jpg' },
      { name: 'og:url', property: 'og:url', content: 'https://namisushi.ru' },
      { name: 'og:type', property: 'og:type', content: 'website' },
      { name: 'og:locality', property: 'og:locality', content: 'Донецк' },
      { name: 'og:region', property: 'og:region', content: 'Донецкая' },
      { name: 'og:postal_code', property: 'og:postal_code', content: '83000' },
      { name: 'og:country_name', property: 'og:country_name', content: 'Украина' },
      { name: 'og:phone_number', property: 'og:phone_number', content: '+79497009791' },
      { name: 'og:locale', property: 'og:locale', content: 'ru_RU' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'доставка еды, доставка еды донецк, доставка, суши донецк, доставка суши, доставка роллов, роллы донецк, сеты суши, донецк, макеевка, доставка, купить, заказать, самовывоз, акции, лучшие, вкусные, недорогие, бесплатная, кафе, быстрая, ресторан, акции' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ],
    script: [
      // { src: 'https://vk.com/js/api/openapi.js?169', type: 'text/javascript' },
      { type: 'text/javascript', innerHTML: 'var global = (global === undefined) ? window : global;' },
      { src: '/yandex-metrika.js', type: 'text/javascript', async: '' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/index.scss'
  ]
}
