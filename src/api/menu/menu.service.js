import {MenuRepository} from "@/api/menu/menu.repository";

export class MenuService {

  #store = null
  #router = null
  #repository = new MenuRepository()

  constructor(app) {
    this.#store = app.store
    this.#router = app.router
  }

  async getMenu() {
    const menu = await this.#repository.getMenu()

    const result = {
      ...menu,
      products: menu.products.map(product => ({
        ...product,
        $id: product.title
          .toLowerCase()
          .replaceAll(' ', '-'),
        images: product.images.map(image => '/api/product/image/' + image)
      }))
    }

    this.#store.commit('menu.setMenu', result)

    return result
  }

}

export default {}
