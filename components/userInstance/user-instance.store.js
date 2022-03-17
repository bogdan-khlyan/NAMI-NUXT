const state = () => ({
  isLoggedIn: null,
  info: {
    _id: null,
    phoneNumber: null,
    username: null,
    email: null
  }
})

const mutations = {
  'userInstance.init'(state, data) {
    state.isLoggedIn = data
  },
  'userInstance.signIn'(state) {
    state.isLoggedIn = true
    localStorage.setItem('isLoggedIn', 'true')
  },
  'userInstance.setUserInfo'(state, userInfo) {
    state.info = userInfo
  }
}

export const initUserInstanceState = (app) => {
  const isLoggedIn = !!localStorage.getItem('isLoggedIn')
  if (isLoggedIn) {
    app.store.commit('userInstance.init', true)
  }
}

export default {state, mutations}
