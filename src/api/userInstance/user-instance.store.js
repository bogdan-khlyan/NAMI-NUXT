const state = () => ({
  isLoggedIn: null,
  info: {
    _id: null,
    avatar: null,
    phoneNumber: null,
    username: null,
    email: null
  }
})

const mutations = {
  'userInstance.setUserInfo'(state, userInfo) {
    state.isLoggedIn = true
    state.info = userInfo
  }
}

export default {state, mutations}
