<template>
  <div>
    <transition name="el-fade-in-linear">
      <body-loading
        v-show="loading"
        @done="loadingDone"/>
    </transition>
    <transition name="el-fade-in-linear">
      <div v-show="!loading"
           class="base-layout">
        <app-header/>
        <div class="base-layout__content">
          <transition name="el-fade-in-linear" mode="out-in">
            <nuxt/>
          </transition>
          <app-footer/>
        </div>
        <cart/>
      </div>
    </transition>
  </div>
</template>

<script>
import AppHeader from "@/components/common/header/AppHeader";
import AppFooter from "@/components/common/footer/AppFooter";
import Cart from "@/components/cart/Cart";
import BodyLoading from "@/components/BodyLoading";

export default {
  name: 'base-layout',
  components: { AppHeader, AppFooter, Cart, BodyLoading },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    this.resize()

    window.addEventListener('scroll', this.scroll)
    this.scroll()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('resize', this.scroll)
  },
  methods: {
    loadingDone() {
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
    width: 100%;
    min-height: 100vh;
    background-image: url('@/assets/images/menu-bg.png');
    background-size: 100% auto;

    overflow-y: hidden;
    overflow-x: hidden;

    @media screen and (max-width: 1400px) { background-image: none; }

  }

}
</style>
