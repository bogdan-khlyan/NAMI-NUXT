import {baseError} from "@/utils/base-error";

export default ({ $axios, store, router, $toast }) => ({
  async singInCall(phone) {
    try {
      await $axios.$post('/api/user/signin/call', { phone })
    } catch (error) {
      baseError(error, $toast)
      throw error
    }
  },
  async signIn(requestData) {
      try {
        const { user } = $axios.$post('/api/user/signin', requestData)
        store.commit('userInstance.signIn')
        store.commit('userInstance.setUserInfo', user)

        router.push('/profile')
      } catch (error) {
        baseError(error, $toast)
        throw error
      }
  }
})
