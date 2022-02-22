<template>
  <div class="main-wrapper">
    <app-header/>
    <div class="main-wrapper__content">
      <slot/>
      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/common/baseWrapper/header/AppHeader";
import AppFooter from "~/components/common/baseWrapper/footer/AppFooter";

export default {
  name: 'main-wrapper',
  components: { AppHeader, AppFooter },
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
.main-wrapper {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  .main-wrapper__content {
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
