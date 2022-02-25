<template>
  <div class="home">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from "~/components/home/banner/Banner";
import AppMenu from "~/components/home/menu/AppMenu";

export default {
  name: 'IndexPage',
  components: { Banner, AppMenu },
  layout: 'base'
}
</script>

<style lang="scss" scoped>
.home { width: 100vw; }
</style>
