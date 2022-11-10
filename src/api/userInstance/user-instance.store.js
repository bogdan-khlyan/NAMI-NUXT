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
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites.push(product._id)
    state.favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },
  'userInstance.removeFavorite'(state, product) {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    let index = favorites.findIndex(item => item === product._id)
    if (index !== -1) {
      favorites.splice(index, 1)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    index = state.favorites.findIndex(item => item._id === product._id)
    if (index !== -1) {
      state.favorites.splice(index, 1)
    }
  },
  'userInstance.setFavorites'(state, favorites) {
    state.favorites = favorites
  }
}

export default {state, mutations}
