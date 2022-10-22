import {getMenu} from "@/api/menu/menu.service";
import {getMe} from "@/api/userInstance/user-instance.service";

export default async function ({ redirect, error, route, req, store, $axios, $cookies }) {
  if (!store.state.menu.isInit) {
    await getMenu($axios, store)
  }
  if (!store.state.userInstance.isLoggedIn && $cookies.get('sessionId')) {
    await getMe($axios, store)
  }
  if (route.meta.find(item => item.requiresAuth) && !store.state.userInstance.isLoggedIn) {
    redirect('/login')
  }
  if (route.name === 'product') {
    const product = store.state.menu.products
      .find(product => product.$id === route.params.id)
    if (!product) {
      error({ statusCode: 404 })
    }
  }
}
