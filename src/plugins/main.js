import {initUserInstanceState} from "@/api/userInstance/user-instance.store";

function initStore(app) {
  initUserInstanceState(app)

  const currentDate = new Date()
  const currentDay = currentDate.getDay()
  if (currentDay !== 0 && currentDay !== 5 && currentDay !== 6) {
    const hours = currentDate.getHours()
    if (hours < 16) {
      app.store.commit('app.setIsDiscount', true)
    }
  }

}

export default ({ app }) => {

  initStore(app)

  app.router.afterEach((to, from) => {
    scroll(0, 0)
  })

  app.router.beforeEach((to, from, next) => {
    if (to.name === 'index' && from.name === 'product') {
      const product = app.store.state.menu.products
        .find(item => item.$id === from.params.id)
      app.store.commit('app.setScrollToProduct', product._id)
    }
    next()
  })

}
