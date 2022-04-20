<template>
  <div class="home">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from "@/components/pages/indexPage/banner/Banner";
import AppMenu from "@/components/pages/indexPage/menu/AppMenu";

export default {
  name: 'IndexPage',
  components: { Banner, AppMenu },
  layout: 'base',
  // created() {
    // console.log(this.$route)
  // },
  // watch: {
  //   '$route'(val) {
  //     console.log(val)
  //   }
  // },
  // computed: {
  //   route() {
  //     return this.$route
  //   }
  // },
  beforeDestroy() {
    this.$store.commit('setIsMenu', false)
  }
}
</script>

<style lang="scss" scoped>
.home { width: 100vw; max-width: 100%; }
</style>
