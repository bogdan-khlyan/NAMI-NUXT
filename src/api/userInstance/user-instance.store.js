const state = () => ({
  isLoggedIn: null,
  info: {
    _id: null,
    avatar: null,
    phoneNumber: null,
    username: null,
    email: null
  },
  favorites: []
})

const mutations = {
  'userInstance.setUserInfo'(state, userInfo) {
    state.isLoggedIn = true
    state.info = userInfo
  },
  'userInstance.pushFavorite'(state, product) {
    if (!state.isLoggedIn) {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      favorites.push(product._id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    state.favorites.push(product._id)
  },
  'userInstance.removeFavorite'(state, productId) {
    if (!state.isLoggedIn) {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      const index = favorites.findIndex(item => item === productId)
      if (index !== -1) {
        favorites.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
    }
    const index = state.favorites.findIndex(item => item === productId)
    if (index !== -1) {
      state.favorites.splice(index, 1)
    }
  },
  'userInstance.setFavorites'(state, favorites) {
    state.favorites = favorites
  }
}

export default {state, mutations}
