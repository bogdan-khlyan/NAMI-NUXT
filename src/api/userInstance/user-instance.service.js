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
        const { user } = await $axios.$post('/api/user/signin', requestData)
        store.commit('userInstance.setUserInfo', user)
        this.saveLocalFavorites()
        router.push('/profile')
      } catch (error) {
        baseError(error, $toast)
        throw error
      }
  },
  async saveLocalFavorites() {
    if (localStorage.getItem('favorites')) {
      try {
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const promises = favorites.map(productId =>
          $axios.$post(`/api/product/${productId}/favorite`)
        )
        await Promise.all(promises)
      } catch (error) {
        throw error
      } finally {
        localStorage.removeItem('favorites')
        await this.getFavorites()
      }
    }
  },
  async logout() {
    try {
      await $axios.delete('/api/user/signout')
      store.commit('userInstance.logout')
      this.initFavorites()
      router.push('/')
    } catch (error) {
      console.log(error)
      baseError(error, $toast)
      throw error
    }
  },
  async updateUser(requestData) {
    try {
      const { user } = await $axios.$patch('/api/user', requestData)
      store.commit('userInstance.setUserInfo', user)
      return user
    } catch (error) {
      baseError(error, $toast)
      throw error
    }
  },
  async initFavorites() {
    if (store.state.userInstance.isLoggedIn) {
      await this.getFavorites()
    } else {
      if (localStorage.getItem('favorites')) {
        const productIds = JSON.parse(localStorage.getItem('favorites'))
        store.commit('userInstance.setFavorites', productIds)
      } else {
        localStorage.setItem('favorites', '[]')
      }
    }
  },
  async getFavorites() {
    try {
      const { products } = await $axios.$get('/api/product/favorites')
      store.commit('userInstance.setFavorites',
        products.map(product =>
          product._id
        )
      )
      return products
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async pushProductToFavorites(product) {
    if (store.state.userInstance.isLoggedIn) {
      try {
        store.commit('userInstance.pushFavorite', product)
        await $axios.$post(`/api/product/${product._id}/favorite`)
      } catch (error) {
        console.log(error)
        store.commit('userInstance.removeFavorite', product)
        throw error
      }
    } else {
      store.commit('userInstance.pushFavorite', product)
    }
  },
  async removeProductFromFavorites(product) {
    if (store.state.userInstance.isLoggedIn) {
      try {
        store.commit('userInstance.removeFavorite', product._id)
        await $axios.$delete(`/api/product/${product._id}/favorite`)
      } catch (error) {
        console.log(error)
        store.commit('userInstance.pushFavorite', product._id)
        throw error
      }
    } else {
      store.commit('userInstance.removeFavorite', product._id)
    }
  }
})
