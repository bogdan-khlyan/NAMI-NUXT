const proxy = {}
if (process.env.NODE_ENV === 'development' && process.env.NAMI_PROXY_HOST) {
  proxy['/api'] = {
    target: process.env.NAMI_PROXY_HOST,
    changeOrigin: true,
    cookieDomainRewrite: 'localhost'
  }
  proxy['/ws'] = {
    target: process.env.NAMI_PROXY_HOST,
    changeOrigin: true,
    cookieDomainRewrite: 'localhost',
    ws: true
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
    'nuxt-speedkit',
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
  },

  speedkit: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 1, max: 48 },
        deviceMemory: { min: 1 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    loader: {
      dataUri: null,
      size: '100px',
      backgroundColor: 'grey'
    }

  }

}
