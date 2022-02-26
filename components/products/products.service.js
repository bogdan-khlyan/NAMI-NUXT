import {ProductsRepository} from "~/components/products/products.repository";
import {categoryService} from "~/components/categories/categories.service";

class ProductsService {

  #repository = new ProductsRepository()

  async getAll(context) {
    if (context.$store.state.categories.list.length > 0) {
      return Promise.resolve()
    }
    try {
      const categories = await categoryService.getList(context)
      const promises = []
      categories.forEach(category => {
        promises.push(this.getList(context, category._id))
      })
      return await Promise.all(promises)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getList(context, categoryId) {
    try {
      const data = await this.#repository.getList(categoryId)
      context.$store.commit('pushArrToProductsList', {
        categoryId: categoryId,
        array: data.products
      })
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}

export const productService = new ProductsService()
