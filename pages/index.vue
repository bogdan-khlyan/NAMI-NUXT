<template>
  <div class="home">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from "~/components/indexPage/banner/Banner";
import AppMenu from "~/components/indexPage/menu/AppMenu";

export default {
  name: 'IndexPage',
  components: { Banner, AppMenu },
  layout: 'base',
  beforeDestroy() {
    this.$store.commit('setIsMenu', false)
  }
}
</script>

<style lang="scss" scoped>
.home { width: 100vw; }
</style>
