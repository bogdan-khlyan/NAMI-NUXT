const proxy = {}
if (process.env.NODE_ENV === 'development' && process.env.PAPO_PROXY_HOST) {
  proxy['/api'] = process.env.PAPO_PROXY_HOST
}

module.exports = {
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/scroll-to',
    '~/plugins/mask',
    '~/plugins/perfect-scrollbar.js',
    { src: '~/plugins/yandex-map.js',  mode: 'client' },
    { src: '~/plugins/main.js', mode: 'client' },
    { src: '~/plugins/api-services.js', mode: 'client' }
  ],
  modules: [],
  proxy,
  axios: {
    progress: false,
    baseURL: process.env.PAPO_BACKEND_HOST,
    browserBaseURL: process.env.PAPO_BACKEND_HOST
  },
  toast: {
    position: 'top-center',
    duration: 3000
  }
}
