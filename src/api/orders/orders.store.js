const state = () => ({
  loading: true,
  phoneNumber: null,
  orders: [],
  total: 0,
  page: 1
})

const mutations = {
  setPhoneNumber(state, phoneNumber) {
    localStorage.setItem('last-phone-number', phoneNumber)
    state.phoneNumber = phoneNumber
  },
  'orders.pushOrders'(state, { data, total }) {
    state.orders.push(...data)
    state.total = total
    ++state.page
  },
  'orders.setFullOrder'(state, order) {
    const item = state.orders.find(item => item._id === order._id)
    if (item) {
      item.full = order
    }
  },
  'orders.changeOrderCondition'(state, data) {
    const item = state.orders.find(item => item._id === data._id)
    if (item) {
      item.condition = data.condition
    }
  },
  'orders.unshiftOrder'(state, order) {
    state.orders.unshift(order)
    if (state.orders.length !== state.total && state.total >= 10) {
      state.orders.splice(state.orders.length - 1, 1)
    }
    ++state.total
  }
}

const actions = {
  removeProductFromCart({state, commit}, id) {
    let index = state.list.findIndex(item => item._id === id)
    if (index !== null && index !== undefined)
      commit('removeProductFromCartByIndex', index)
  }
}

export default {state, mutations, actions}
