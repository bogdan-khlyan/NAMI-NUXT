<template>
  <div class="favorites-list">
    <div class="favorites-list__title">
      <heart-icon/>
      <h1>Избранные продукты</h1>
    </div>
    <div class="favorites-list__auth-message">
      <p>
        <nuxt-link to="/login">Авторизуйтесь</nuxt-link>, чтобы сохранить список избранного для просмотра на этом и других устройствах
      </p>
    </div>
    <favorites-empty v-if="favorites.length === 0"/>
    <div v-else>
      {{ favorites }}
    </div>
  </div>
</template>

<script>
import HeartIcon from "@/components/common/icons/HeartIcon";
import FavoritesEmpty from "@/components/pages/favoritesPage/components/FavoritesEmpty";

export default {
  name: 'favorites-list',
  components: { HeartIcon, FavoritesEmpty },
  props: {
    favorites: { type: Array, default: [] }
  }
}
</script>

<style lang="scss" scoped>
.favorites-list {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
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
    margin-bottom: 20px;
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

}
</style>
