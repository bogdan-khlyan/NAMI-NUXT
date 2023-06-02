<template>
  <div class="base-layout-wrapper"
       :class="theme">
    <button
      style="position: absolute;right: 0;top:0;z-index: 10000000000000"
      @click="eruda.init()"
    >test</button>
    <transition name="el-fade-in-linear">
      <body-loading v-if="loading" @done="loadingDone"/>
    </transition>
    <div class="base-layout">
      <app-header/>
      <div class="base-layout__content"
           :class="{'base-bg': baseBg}">
        <transition name="el-fade-in-linear" mode="out-in">
          <nuxt/>
        </transition>
        <app-footer/>

        <transition name="el-fade-in-linear" mode="out-in">
          <img v-if="weaveBg"
               class="bg-waves"
               src="@/assets/images/bg-waves.svg" alt="волны">
        </transition>
      </div>
    </div>

    <cart/>
    <header-drawer/>
    <base-global-message/>
    <base-mobile-nav-bar v-if="windowWidth <= 980"/>
  </div>
</template>

<script>
import AppHeader from "@/components/common/header/AppHeader";
import AppFooter from "@/components/common/footer/AppFooter";
import Cart from "@/components/cart/Cart";
import HeaderDrawer from "@/components/common/header/mobile/HeaderDrawer";
import BodyLoading from "@/components/common/bodyLoading/BodyLoading";
import BaseMobileNavBar from "@/components/common/BaseMobileNavBar";
import BaseGlobalMessage from "@/components/common/BaseGlobalMessage";
import configMixin from "@/api/config/config.mixin";
import {updateCartProducts} from "@/utils/update-cart-products";
import {initWebsocket} from "@/api/websocket/websocket";

export default {
  name: 'base-layout',
  mixins: [configMixin],
  components: {
    AppHeader, AppFooter, Cart,
    BodyLoading, HeaderDrawer,
    BaseMobileNavBar, BaseGlobalMessage
  },
  head() {
    return {
      link: [
        { href: `${process.env.NAMI_BACKEND_HOST}${this.$route.path}`, rel: 'canonical' }
      ]
    }
  },
  computed: {
    baseBg () {
      return this.$route.name === 'index' || this.$route.meta.background === 'base'
    },
    weaveBg() {
      return this.$route.meta.background === 'waves' && this.windowWidth > 980
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },
    isLoggedIn() {
      return this.$store.state.userInstance.isLoggedIn
    }
  },
  data() {
    return {
      loading: true
    }
  },
  watch: {
    isLoggedIn(value) {
      if (value) {
        initWebsocket(this)
      }
    }
  },
  async fetch() {
    await this.$appConfig.getConfig()
  },
  mounted() {

    if (this.isLoggedIn) {
      initWebsocket(this)
    }
    this.$userInstance.initFavorites()

    window.addEventListener('resize', this.resize)
    this.resize()

    window.addEventListener('scroll', this.scroll)
    this.scroll()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    loadingDone() {
      if (localStorage.getItem('products')) {
        const products = JSON.parse(localStorage.getItem('products'))
        updateCartProducts(this.$store, products)
      }
      this.loading = false
    },
    resize() {
    this.$store.commit('setWindowWidth', document.documentElement.clientWidth)
  },
    scroll: function () {
      this.$store.commit('setWindowScroll', pageYOffset) // TODO deprecated pageYOffset
    }
  }
}
</script>

<style scoped lang="scss">
.base-layout-wrapper {
  @media screen and (max-width: 980px) {
    padding-bottom: 60px;
  }
}
.base-layout {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  &__content {
    position: relative;

    width: 100%;
    min-height: 100vh;

    overflow-y: hidden;
    overflow-x: hidden;

    @media screen and (max-width: 1400px) { background-image: none; }

    &.base-bg {
      background-image: url('@/assets/images/menu-bg.webp');
      background-size: 100% auto;
    }

    .bg-waves {
      position: absolute;
      left: 0;
      bottom: 100px;
      z-index: -1;

      width: 100vw;
      max-width: 100%;

      object-fit: contain;
    }

  }

}
</style>

<style lang="scss">
.new-year {
  .base-bg {
    background-image: url('@/assets/images/bg-ny.webp') !important;
  }
}
</style>
