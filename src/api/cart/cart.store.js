const state = () => ({
  products: []
})

const mutations = {
  'cart.addProduct'(state, product) {
    console.log(product)
    state.products.push(product)
  },
  'cart.changeProductCount'(state, { productId, count }) {
    const item = state.products.find(item => item._id === productId)
    item.count = count
  },
  'cart.removeProduct'(state, productId) {
    const index = state.products.findIndex(item => item._id === productId)
    state.products.splice(index, 1)
  }
}

export default {state, mutations}
