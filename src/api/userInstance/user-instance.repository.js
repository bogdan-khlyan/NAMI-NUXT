import axios from "axios";

export class UserInstanceRepository {

  async verifyOTP(requestData) {
    const response = await axios.post('/api/user/signup/verify', requestData)
    return response.data
  }

  async sendOTP(requestData) {
    const response = await axios.post('/api/user/signup/send', requestData)
    return response.data
  }

  async getStatus(requestData) {
    const response = await axios.put('/api/user/status', requestData)
    return response.data
  }

  async signIn() {
    return {
      _id: 'devid',
      phoneNumber: '+38 (071) 700-97-91',
      username: null,
      email: null
    }
  }

}

export default {}
