module.exports = {
  build: {
    transpile: [/^element-ui/],
  },
  buildModules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Raleway: true,
        Neucha: true,
        Kalam: true,
        Manrope: true,
        Ubuntu: [300, 400, 500, 600]
      }
    }]
  ]
}
