export default ({ app }) => {
  app.router.afterEach((to, from) => {
    scroll(0, 0)
  })
}
