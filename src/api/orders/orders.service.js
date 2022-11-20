export default ({ $axios, store, router, $toast }) => ({
  async createOrder(requestData) {
    try {
      const data = await $axios.$post(`/api/order`, requestData)
      $toast.success('Заказ успешно отправлен. Ожидайте звонка оператора')
      return data
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) $toast.error(error.response.data.message)
      else $toast.error('Заказ не был отправлен')
      throw error
    }
  },
  async getOrders() {
    try {
      const { data, total } = await $axios.$get('/api/user/orders', {
        params: {
          limit: 10,
          page: store.state.orders.page
        }
      })
      const result = {
        total,
        data: data.map(item => ({
          ...item,
          full: null
        }))
      }
      store.commit('orders.pushOrders', result)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async getOrderById(number) {
    const { order } = await $axios.$get(`/api/user/order/${number}`)
    store.commit('orders.setFullOrder', order)
    return order
  }
})
