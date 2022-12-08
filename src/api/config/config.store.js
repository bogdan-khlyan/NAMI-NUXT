const state = () => ({
  theme: 'new-year',
  config: {
    theme: 'new-year',
    infoMessage: null,
    infoMessageEnabled: false,
    globalDiscountPercent: 0,
    globalDiscountEnabled: false
  }
})

const mutations = {
  'config.setConfig'(state, config) {
    state.config = config
  }
}

export default {state, mutations}
