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
    if (to.name === 'index' && from.name === 'product-id' && !to.query.product) {
      next({
        path: '/',
        query: { product: from.params.id }
      })
      return
    }
    next()
  })

}
