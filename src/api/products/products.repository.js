import axios from "axios";

export class ProductsRepository {

  async getList(categoryId) {
    const response = await axios.get(`/api/products`,
      {params: {category: categoryId}})
    return response.data
  }

}

export default null
