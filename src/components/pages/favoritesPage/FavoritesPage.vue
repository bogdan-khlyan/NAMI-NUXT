<template>
  <div class="favorites-page">
    <favorites-list :favorites="favorites"/>
  </div>
</template>

<script>
import FavoritesList from "@/components/pages/favoritesPage/components/FavoritesList";

export default {
  name: 'favorites-page',
  layout: 'base',
  components: { FavoritesList },
  data() {
    return {
      favorites: []
    }
  },
  async mounted() {
    await this.$userInstance.initFavorites()
    this.favorites = this.$store.state.menu.products
      .filter(item => this.$store.state.userInstance.favorites.find(productId => productId === item._id))
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
