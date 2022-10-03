module.exports = {
  build: {
    transpile: [/^element-ui/],
  },
  buildModules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Neucha: true,
        Kalam: true,
        Manrope: true,
        Ubuntu: [300, 400, 500, 600]
      }
    }]
  ]
}
