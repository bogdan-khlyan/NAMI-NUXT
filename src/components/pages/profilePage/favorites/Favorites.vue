<template>
  <div class="profile-favorites">
    <favorites-list
      class="profile-favorites__list"
      :favorites="favorites"
    />
  </div>
</template>

<script>
import FavoritesList from "@/components/pages/favoritesPage/components/FavoritesList";

export default {
  name: 'profile-favorites',
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
.profile-favorites {
  &__list {
    width: 100%;
  }
  ::v-deep .favorites-list__list {
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 1250px) {
      grid-template-columns: 1fr 1fr;
      max-width: 650px;
    }
    @media screen and (max-width: 980px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: unset;
    }
    @media screen and (max-width: 920px) {
      grid-template-columns: 1fr 1fr;
      max-width: 650px;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      max-width: 320px;
    }
  }
  ::v-deep .favorites-list__title h1 {
    @media screen and (max-width: 360px) {
      font-size: 21px;
    }
  }
}
</style>
