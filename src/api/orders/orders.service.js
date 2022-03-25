import Notification from "element-ui/packages/notification/src/main";
import {OrdersRepository} from "@/api/orders/orders.repository";

export class OrdersService {

  #store = null
  #router = null
  #notify = null
  #repository = new OrdersRepository()

  constructor(app, notify) {
    this.#store = app.store
    this.#router = app.router
    this.#notify = notify
  }

  async createOrder(requestData) {
    try {
      const data = await this.#repository.createOrder(requestData)
      this.#notify.success({
        title: 'Заказ создан',
        message: 'Заказ успешно отправлен. Ожидайте звонка оператора'
      })
      return data
    } catch (error) {
      console.log(error)
      if (error.response.data.message) Notification.error({title: 'Ошибка', message: error.response.data.message})
      else Notification.error({title: 'Error', message: 'Заказ не был отправлен'})
      throw error
    }
  }

}

export default {}
