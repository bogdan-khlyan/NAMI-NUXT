export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
      { name: 'og:image', content: 'https://namisushi.dn.ua/thumbnail.jpg' },
      { name: 'og:url', content: 'https://namisushi.dn.ua' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://vk.com/js/api/openapi.js?169', type: 'text/javascript' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/_style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/scroll-to',
    '~/plugins/mask',
    { src: '~/plugins/yandex-map.js',  mode: 'client' },
    { src: '~/plugins/route', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
