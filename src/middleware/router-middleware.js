import {getMenu} from "@/api/menu/menu.service";

export default async function ({ redirect, error, route, req, store, $axios }) {
  if (!store.state.menu.isInit) {
    await getMenu($axios, store)
  }
  if (route.name === 'product') {
    const product = store.state.menu.products
      .find(product => product.$id === route.params.id)
    if (!product) {
      error({ statusCode: 404 })
    }
  }
}
