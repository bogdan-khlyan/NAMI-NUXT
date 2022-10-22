export default ({ app }) => {

  app.router.afterEach((to, from) => {
    scroll(0, 0)
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
