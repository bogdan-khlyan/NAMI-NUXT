import Vue from 'vue'
import Vuex from 'vuex'

import categories from "@/api/categories/categories.store";
import products from "@/api/products/products.store";
import orders from "@/api/orders/orders.store";
import userInstance from "@/api/userInstance/user-instance.store";

Vue.use(Vuex)

export const state = () => ({
  page: 'index',
  isMenu: false,
  isShowCart: false,
  isShowLoginModal: false,
  isShowHeaderCollapse: false,
  windowScroll: false,
  windowWidth: null
})

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName;
  },
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

export const modules = { categories, products, orders, userInstance }
