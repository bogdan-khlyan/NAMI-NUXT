import {initUserInstanceState} from "@/api/userInstance/user-instance.store";

function initStore(app) {
  initUserInstanceState(app)
}

export default ({ app }) => {

  initStore(app)

  app.router.afterEach((to, from) => {
    scroll(0, 0)
  })

}
