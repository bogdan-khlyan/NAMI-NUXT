import axios from "axios";

export class MenuRepository {

  async getMenu() {
    const response = await axios.get('/api/products')
    return response.data
  }

}

export default {}
