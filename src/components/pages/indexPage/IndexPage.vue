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
  head: {
    link: [
      { href: 'https://namisushi.ru/', rel: 'canonical' }
    ]
  },
  computed: {
    isScrollToMenu() {
      return this.$route.query.menu === null
    }
  },
  watch: {
    isScrollToMenu() {
      this.checkScrollToMenu()
    }
  },
  mounted() {
    this.checkScrollToMenu()
  },
  beforeDestroy() {
    this.$store.commit('setIsMenu', false)
  },
  methods: {
    checkScrollToMenu() {
      if (this.isScrollToMenu) {
        this.$scrollTo('#menu')
        this.$router.replace({ query: null })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 100vw;
  max-width: 100%;
}
</style>
