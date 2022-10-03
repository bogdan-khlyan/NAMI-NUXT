<template>
  <div class="index-page">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from "@/components/pages/indexPage/banner/Banner";
import AppMenu from "@/components/pages/indexPage/menu/AppMenu";

export default {
  name: 'index-page',
  components: { Banner, AppMenu },
  beforeDestroy() {
    this.$store.commit('setIsMenu', false)
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 100vw;
  max-width: 100%;
}
</style>
