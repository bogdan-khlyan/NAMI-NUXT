const state = () => ({
  isVisibleCart: false,
  products: []
})

const mutations = {
  'cart.setIsVisibleCart'(state, isVisibleCart) {
    state.isVisibleCart = isVisibleCart
  },
  'cart.addProduct'(state, product) {
    state.products.push(product)
  },
  'cart.changeProductVariant'(state, { productId, variant }) {
    const item = state.products.find(item => item._id === productId)
    if (item) {
      item.selectedVariant = variant
    }
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

const getters = {
  'cart.count'(state) {
    let count = 0
    state.products.forEach(product => {
      count += product.count
    })
    return count
  },
  'cart.cost'(state) {
    let cost = 0
    state.products.forEach(product => {
      if (product.type === 'SINGLE') {
        cost += product.count * product.cost
      }
      if (product.type === 'VARIANT') {
        cost += product.count * product.selectedVariant.cost
      }
    })
    return cost
  }
}

export default {state, mutations, getters}
