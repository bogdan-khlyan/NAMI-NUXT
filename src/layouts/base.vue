<template>
  <div class="base-layout-wrapper"
       :class="theme">
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
               src="@/assets/images/bg-waves.svg" alt="">
        </transition>
      </div>
    </div>

    <cart/>
    <header-drawer/>
  </div>
</template>

<script>
import AppHeader from "@/components/common/header/AppHeader";
import AppFooter from "@/components/common/footer/AppFooter";
import Cart from "@/components/cart/Cart";
import HeaderDrawer from "@/components/common/header/mobile/HeaderDrawer";
import BodyLoading from "@/components/common/bodyLoading/BodyLoading";
import configMixin from "@/api/config/config.mixin";

export default {
  name: 'base-layout',
  mixins: [configMixin],
  components: { AppHeader, AppFooter, Cart, BodyLoading, HeaderDrawer },
  computed: {
    baseBg () {
      return this.$route.name === 'index' || this.$route.meta.background === 'base'
    },
    weaveBg() {
      return this.$route.meta.background === 'waves' && this.windowWidth > 980
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {

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
        this.$store.commit('cart.setProducts', products)
      }
      this.loading = false
      setTimeout(() => {
        const script = document.createElement('script')
        script.src = '/yandex-metrika.js'
        script.type = 'text/javascript'
        script.async = true
        document.head.appendChild(script)
      }, 1000)
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
