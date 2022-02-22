<template>
  <base-wrapper>
    <div class="home">
      <banner/>
      <app-menu id="menu"/>
    </div>
  </base-wrapper>
</template>

<script>
import BaseWrapper from "~/components/common/baseWrapper/BaseWrapper";
import Banner from "~/components/home/banner/Banner";
import AppMenu from "~/components/home/menu/AppMenu";

export default {
  name: 'IndexPage',
  components: { Banner, BaseWrapper, AppMenu }
}
</script>

<style lang="scss" scoped>
.home { width: 100vw; }
</style>
