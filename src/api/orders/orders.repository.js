import axios from "axios";

export class OrdersRepository {

    async createOrder(requestData) {
        const response = axios.post(`/api/order`, requestData)
        return response.data
    }

}

export default {}
