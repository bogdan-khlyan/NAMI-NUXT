export default ({ $axios, store, router, $toast }) => ({
  showCart() {
    store.commit('cart.setIsVisibleCart', true)
  },
  hideCart() {
    store.commit('cart.setIsVisibleCart', false)
  },
  addProduct(product) {
    product.count = 1
    store.commit('cart.addProduct', product)
    this.notifyOrderInfo()
  },
  changeProductVariant(productId, variant) {
    store.commit('cart.changeProductVariant', { productId, variant })
  },
  changeProductCount(productId, count) {
    store.commit('cart.changeProductCount', { productId, count })
    this.notifyOrderInfo()
  },
  removeProduct(productId) {
    store.commit('cart.removeProduct', productId)
    this.notifyOrderInfo('Товар удален из корзины')
  },
  notifyOrderInfo(title = 'Товар добавлен в корзину') {
    let productCount = store.getters['cart.count']
    let productsCost = store.getters['cart.cost']

    $toast.success(
      (title ? title + '<br>' : '') +
      (productCount ?
        `Всего товаров ${productCount} на сумму ${productsCost}₽` :
        'Корзина пуста')
    )
  }
})
