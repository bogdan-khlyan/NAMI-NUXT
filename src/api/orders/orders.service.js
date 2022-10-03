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
  }
})
