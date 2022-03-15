import axios from "axios";

export class CategoriesRepository {

    async getList () {
        const response = await axios.get(`/api/categories`)
        return response.data.categories
    }

}

export default null
