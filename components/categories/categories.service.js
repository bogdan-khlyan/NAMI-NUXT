import {CategoriesRepository} from "~/components/categories/categories.repository";

class CategoriesService {

  #repository = new CategoriesRepository()

  async getList(context) {
    try {
      const data = await this.#repository.getList()
      context.$store.commit('setListCategories', data)
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}

export const categoryService = new CategoriesService()
export default null
