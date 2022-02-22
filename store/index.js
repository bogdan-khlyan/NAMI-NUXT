import Vue from 'vue'
import Vuex from 'vuex'

import categories from "~/components/categories/categories.store";
import products from "~/components/products/products.store";

Vue.use(Vuex)

export const state = () => ({
  host: 'http://localhost:8000',//process.env.VUE_APP_BACKEND_HOST,
  isMenu: false,
  isShowCart: false,
  isShowLoginModal: false,
  isShowHeaderCollapse: false,
  windowScroll: false,
  windowWidth: 1920
})

export const mutations = {
  setIsMenu (state, data) {
    state.isMenu = data
  },
  setWindowScroll (state, data) {
    state.windowScroll = data
  },
  showHeaderCollapse(state) {
    state.isShowHeaderCollapse = true
  },
  hideHeaderCollapse(state) {
    state.isShowHeaderCollapse = false
  },
  showCart(state) {
    state.isShowCart = true
  },
  hideCart(state) {
    state.isShowCart = false
  },
  showLoginModal(state) {
    state.isShowLoginModal = true
  },
  hideLoginModal(state) {
    state.isShowLoginModal = false
  },
  setWindowWidth(state, width) {
    state.windowWidth = width
  }
}

export const modules = { categories, products }