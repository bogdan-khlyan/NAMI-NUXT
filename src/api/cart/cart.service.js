import {OrdersRepository} from "@/api/orders/orders.repository";
import {notificationsHelper} from "@/helpers/notifications.helper";

export class CartService {

  #store = null
  #router = null
  #repository = new OrdersRepository()

  constructor(app) {
    this.#store = app.store
    this.#router = app.router
  }

  addProduct(product) {
    product.count = 1
    if (product.type === 'VARIANT') {
      product.cost = product.selectedVariant.cost
    }

    this.#store.commit('cart.addProduct', product)

    this.notifyOrderInfo()
  }

  changeProductCount(productId, count) {
    this.#store.commit('cart.changeProductCount', { productId, count })
    this.notifyOrderInfo()
  }

  removeProduct(productId) {
    this.#store.commit('cart.removeProduct', productId)
    this.notifyOrderInfo('Товар удален из корзины')
  }

  notifyOrderInfo(title = 'Товар добавлен в корзину') {
    let productCount = 0
    let productsCost = 0
    this.#store.state.cart.products
      .forEach(item => {
        productsCost += item.cost * item.count
        productCount += item.count
      })

    notificationsHelper.success({
      title,
      message: productCount ?
        `Всего товаров ${productCount} на сумму ${productsCost}₽` :
        'Корзина пуста'
    })
  }

}

export default {}
