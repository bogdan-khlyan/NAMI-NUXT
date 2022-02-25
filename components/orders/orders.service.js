import Notification from "element-ui/packages/notification/src/main";
import {OrdersRepository} from "@/components/orders/orders.repository";

class OrdersService {

  #repository = new OrdersRepository()

  async createOrder(requestData) {
    try {
      const data = await this.#repository.createOrder(requestData)
      Notification.success({title: 'Успех', message: 'Заказ успешно отправлен. Ожидайте звонка оператора'})
      return data
    } catch (error) {
      console.log(error)
      if (error.response.data.message) Notification.error({title: 'Ошибка', message: error.response.data.message})
      else Notification.error({title: 'Error', message: 'Заказ не был отправлен'})
      throw error
    }
  }

}

export const ordersService = new OrdersService()
