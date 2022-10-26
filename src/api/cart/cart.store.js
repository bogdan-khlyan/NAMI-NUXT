const state = () => ({
  isVisibleCart: false,
  products: [],
  form: {
    deliveryCost: null,
    delivery: true,
    address: '',
    phone: '',
    username: '',
    additionalInformation: ''
  }
})

const mutations = {
  'cart.setIsVisibleCart'(state, isVisibleCart) {
    state.isVisibleCart = isVisibleCart
  },
  'cart.setProducts'(state, products) {
    state.products = products
  },
  'cart.addProduct'(state, product) {
    state.products.push(product)
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  'cart.changeProductVariant'(state, { productId, variant }) {
    const item = state.products.find(item => item._id === productId)
    if (item) {
      item.selectedVariant = variant
      localStorage.setItem('products', JSON.stringify(state.products))
    }
  },
  'cart.changeProductCount'(state, { productId, variantId, count }) {
    const item = variantId ?
      state.products.find(item => item._id === productId && item.selectedVariant._id === variantId)
      : state.products.find(item => item._id === productId)
    item.count = count
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  'cart.removeProduct'(state, { productId, variantId }) {
    const index = variantId ?
      state.products.findIndex(item => item._id === productId && item.selectedVariant._id === variantId)
      : state.products.findIndex(item => item._id === productId)
    state.products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  'cart.clear'(state) {
    state.products.splice(0)
    localStorage.removeItem('products')
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
