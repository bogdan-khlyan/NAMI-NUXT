<template>
  <div class="favorites-page">
    <favorites-list :favorites="favorites"/>
  </div>
</template>

<script>
import FavoritesList from "@/components/pages/favoritesPage/components/FavoritesList";
import {copyDeep} from "@/utils/copy-deep";

export default {
  name: 'favorites-page',
  layout: 'base',
  components: { FavoritesList },
  data() {
    return {
      favorites: []
    }
  },
  mounted() {
    this.favorites = copyDeep(this.$store.state.userInstance.favorites)
  }
}
</script>

<style lang="scss" scoped>
.favorites-page {
  padding-top: 160px;
  box-sizing: border-box;
  min-height: 100vh;
  @media screen and (max-width: 1250px) {
    padding-top: 100px;
  }
}
</style>
