import Vue from "vue";
import Vuex from "vuex";

import orders from "@/api/orders/orders.store";
import userInstance from "@/api/userInstance/user-instance.store";
import menu from "@/api/menu/menu.store";
import cart from "@/api/cart/cart.store";

Vue.use(Vuex)

export const state = () => ({
  isMenu: false,
  isShowCart: false,
  isShowLoginModal: false,
  isShowHeaderCollapse: false,
  windowScroll: false,
  windowWidth: null
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

export const modules = { orders, userInstance, menu, cart }
