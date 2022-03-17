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

    this.#store.commit('menu.setMenu', menu)

    return menu
  }

}

export default {}
