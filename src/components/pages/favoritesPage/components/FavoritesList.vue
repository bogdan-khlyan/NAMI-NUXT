<template>
  <div class="favorites-list">
    <div class="favorites-list__title">
      <heart-icon/>
      <h1>Избранные продукты</h1>
    </div>
    <div v-if="!isLoggedIn" class="favorites-list__auth-message">
      <p>
        <nuxt-link to="/login">Авторизуйтесь</nuxt-link>, чтобы сохранить список избранного для просмотра на этом и других устройствах
      </p>
    </div>
    <favorites-empty v-if="favorites.length === 0"/>
    <div v-else class="favorites-list__list">
      <product-card
        v-for="item of favorites" :key="item._id"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import HeartIcon from "@/components/common/icons/HeartIcon";
import FavoritesEmpty from "@/components/pages/favoritesPage/components/FavoritesEmpty";
import ProductCard from "@/components/pages/indexPage/menu/products/productCard/ProductCard";

export default {
  name: 'favorites-list',
  components: { HeartIcon, FavoritesEmpty, ProductCard },
  props: {
    favorites: { type: Array, default: [] }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.userInstance.isLoggedIn
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites-list {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 60px;
  box-sizing: border-box;
  margin: 0 auto;

  &__title {
    display: flex;
    align-items: center;
    ::v-deep svg {
      margin-right: 8px;
      path {
        fill: #062D4E;
      }
    }
    > h1 {
      margin: 0;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #062D4E;
    }
  }

  &__auth-message {
    margin-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    background: #F8FAFF;
    border-radius: 4px;
    > p {
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      color: #212121;
      > a {
        font-family: 'Ubuntu', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
        color: #185598;
      }
    }
  }

  &__list {
    margin-top: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 1150px) {
      margin: 20px auto 0 auto;
      max-width: 900px;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 860px) {
      max-width: 600px;
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 650px) {
      max-width: 320px;
      grid-template-columns: 1fr;
    }

    ::v-deep .product-card {
      margin: 0;
      width: 100%;
    }

  }

}
</style>
