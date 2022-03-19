import Notification from "element-ui/packages/notification/src/main";
import {OrdersRepository} from "@/api/orders/orders.repository";
import {notificationsHelper} from "@/helpers/notifications.helper";

export class OrdersService {

  #store = null
  #router = null
  #repository = new OrdersRepository()

  constructor(app) {
    this.#store = app.store
    this.#router = app.router
  }

  async createOrder(requestData) {
    try {
      const data = await this.#repository.createOrder(requestData)
      notificationsHelper.success({
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

  addProductToCard(product) {
    product.count = 1
    if (product.type === 'VARIANT') {
      product.cost = product.selectedVariant.cost
    }

    this.#store.commit('orders.addProductToCard', product)

    this.notifySuccessAdd()
  }

  changeProductCartCount(productId, count) {
    this.#store.commit('orders.changeProductCartCount', { productId, count })
    this.notifySuccessAdd()
  }

  notifySuccessAdd() {
    let productCount = 0
    let productsCost = 0
    this.#store.state.orders.cart
      .forEach(item => {
        productsCost += item.cost * item.count
        productCount += item.count
      })

    notificationsHelper.success({
      title: 'Товар  добавлен в корзину',
      message: `Всего товаров ${productCount} на сумму ${productsCost}₽`
    })
  }

}

export default {}
