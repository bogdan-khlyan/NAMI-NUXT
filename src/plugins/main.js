import {updateCartProducts} from "@/utils/update-cart-products";

export default ({ app }) => {

  window.addEventListener('storage', ($event) => {
    if ($event.key === 'products') {
      const products = JSON.parse($event.newValue)
      updateCartProducts(app.store, products)
    }
  })

  app.router.afterEach((to, from) => {
    if (to.name !== from.name) {
      scroll(0, 0)
    }
  })

  app.router.beforeEach((to, from, next) => {
    if (to.name === 'index' && from.name === 'product') {
      const product = app.store.state.menu.products
        .find(item => item.$id === from.params.id)
      app.store.commit('app.setScrollToProduct', product?._id)
    }
    next()
  })

}
