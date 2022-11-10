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
  mounted() {
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites-page {
  padding-top: 160px;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
