import {UserInstanceRepository} from "@/components/userInstance/user-instance.repository";

export class UserInstanceService {

  #store = null
  #router = null
  #repository = new UserInstanceRepository()

  constructor(app) {
    this.#store = app.store
    this.#router = app.router
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
    }
  }

}

export default {}
