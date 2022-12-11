export default ({ $axios, store, router, $toast }) => ({
  async getConfig() {
    try {
      const { config } = await $axios.$get('/api/config')
      store.commit('config.setConfig', config)
      return config
    } catch (error) {
      console.log(error)
      throw error
    }
  }
})
