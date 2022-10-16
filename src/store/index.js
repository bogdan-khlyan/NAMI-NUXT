import Vue from "vue";
import Vuex from "vuex";

import orders from "@/api/orders/orders.store";
import userInstance from "@/api/userInstance/user-instance.store";
import menu from "@/api/menu/menu.store";
import cart from "@/api/cart/cart.store";

Vue.use(Vuex)

export const state = () => ({
  isMenu: false,
  isShowHeaderCollapse: false,
  windowScroll: false,
  windowWidth: null,

  scrollToProduct: null,

  isDiscount: true
})

export const mutations = {
  'app.setIsDiscount'(state, isDiscount) {
    state.isDiscount = isDiscount
  },

  'app.setScrollToProduct' (state, data) {
    state.scrollToProduct = data
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
  setWindowWidth(state, width) {
    state.windowWidth = width
  }
}

export const modules = { orders, userInstance, menu, cart }
