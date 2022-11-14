const proxy = {}
if (process.env.NODE_ENV === 'development' && process.env.NAMI_PROXY_HOST) {
  proxy['/api'] = {
    target: process.env.NAMI_PROXY_HOST,
    changeOrigin: true,
    cookieDomainRewrite: 'localhost'
  }
}

module.exports = {
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/mask',
    '~/plugins/perfect-scrollbar.js',
    '~/plugins/api-services.js',
    { src: '~/plugins/yandex-map.js',  mode: 'client' },
    { src: '~/plugins/main.js', mode: 'client' },
    { src: '~/plugins/directives.js', mode: 'client' }
  ],
  modules: [
    'vue-scrollto/nuxt',
    'cookie-universal-nuxt',
    '@nuxtjs/proxy',
    ['@nuxtjs/dotenv', { path: '~/../' }],
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  proxy,
  axios: {
    progress: false,
    baseURL: process.env.NAMI_BACKEND_HOST,
    browserBaseURL: process.env.NAMI_BACKEND_HOST
  },
  toast: {
    position: 'top-left',
    duration: 6000,
    closeOnSwipe: true
  }
}
