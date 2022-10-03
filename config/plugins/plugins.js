const proxy = {}
if (process.env.NODE_ENV === 'development' && process.env.NAMI_PROXY_HOST) {
  proxy['/api'] = process.env.NAMI_PROXY_HOST
}

module.exports = {
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/scroll-to',
    '~/plugins/mask',
    '~/plugins/perfect-scrollbar.js',
    '~/plugins/api-services.js',
    { src: '~/plugins/yandex-map.js',  mode: 'client' },
    { src: '~/plugins/main.js', mode: 'client' }
  ],
  modules: [
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
    position: 'top-center',
    duration: 26000
  }
}
