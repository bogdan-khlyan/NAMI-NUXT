import {initUserInstanceState} from "@/api/userInstance/user-instance.store";

function initStore(app) {
  initUserInstanceState(app)
}

export default ({ app }) => {

  initStore(app)

  app.router.afterEach((to, from) => {
    scroll(0, 0)
  })

  app.router.beforeEach((to, from, next) => {
    if (to.name === 'index' && from.name === 'product-id') {
      const product = app.store.state.menu.products
        .find(item => item.$id === from.params.id)
      app.store.commit('app.setScrollToProduct', product._id)
    }
    next()
  })

}
