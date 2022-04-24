import {UserInstanceRepository} from "@/api/userInstance/user-instance.repository";

export class UserInstanceService {

  #store = null
  #router = null
  #repository = new UserInstanceRepository()

  constructor(app) {
    this.#store = app.store
    this.#router = app.router
  }

  async verifyOTP({ phone, code }) {
    try {
      return await this.#repository.verifyOTP({ phone, code })
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async sendOTP(phone) {
    try {
      return this.#repository.sendOTP({ phone })
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getStatus(phone) {
    try {
      const { status } = await this.#repository.getStatus({ phone })
      if (status === 'SIGN_UP') {
        this.sendOTP(phone)
      }
      return status
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async signIn() {
    try {
      const user = await this.#repository.signIn()

      this.#store.commit('userInstance.signIn')
      this.#store.commit('userInstance.setUserInfo', user)

      this.#router.push('/')

      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}

export default {}
