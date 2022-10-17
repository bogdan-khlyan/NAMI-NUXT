const state = () => ({
  isInit: false,
  categories: [],
  products: []
})

const mutations = {
  'menu.setMenu'(state, menu) {
    state.isInit = true
    state.categories = menu.categories
    state.products = menu.products
  },
  'menu.changeProductVariant'(state, { productId, variant }) {
    const item = state.products.find(item => item._id === productId)
    if (item) {
      item.selectedVariant = variant
    }
  },
}

export default {state, mutations}
