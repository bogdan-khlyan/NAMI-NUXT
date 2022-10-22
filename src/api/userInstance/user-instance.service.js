import {baseError} from "@/utils/base-error";

export async function getMe($axios, store) {
  const { user } = await $axios.$get('/api/user')
  store.commit('userInstance.setUserInfo', user)
  return user
}

export default ({ $axios, store, router, $toast }) => ({
  getMe() {
    return getMe($axios, store)
  },
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
        store.commit('userInstance.setUserInfo', user)
        router.push('/profile')
      } catch (error) {
        baseError(error, $toast)
        throw error
      }
  }
})
