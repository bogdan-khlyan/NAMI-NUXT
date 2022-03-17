const state = () => ({
  categories: [],
  products: []
})

const mutations = {
  'menu.setMenu'(state, menu) {
    state.categories = menu.categories
    state.products = menu.products
  }
}

export default {state, mutations}
