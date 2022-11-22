<template>
  <nav class="base-mobile-nav-bar">
    <nuxt-link
      class="base-mobile-nav-bar__item"
      to="/?menu"
    >
      <img src="@/assets/images/icons/menu.svg" alt="меню">
    </nuxt-link>
    <nuxt-link
      class="base-mobile-nav-bar__item"
      to="/favorites"
    >
      <img src="@/assets/images/icons/favorites.svg" alt="избранное">
      <transition name="el-fade-in-linear">
        <div v-if="favoritesCount" class="count">{{ favoritesCount }}</div>
      </transition>
    </nuxt-link>
    <nuxt-link
      class="base-mobile-nav-bar__item"
      to="/profile/orders"
    >
      <img src="@/assets/images/icons/user.svg" alt="профиль">
    </nuxt-link>
    <a class="base-mobile-nav-bar__item cart"
       @click="showCart">
      <cart-icon/>
      <div class="count">{{ cartCount }}</div>
    </a>
  </nav>
</template>

<script>
import CartIcon from "@/components/common/icons/CartIcon";

export default {
  name: 'base-mobile-nav-bar',
  components: { CartIcon },
  computed: {
    cartCount() {
      let count = 0
      this.$store.state.cart.products
        .forEach(item => count += item.count)
      return count
    },
    favoritesCount() {
      return this.$store.state.userInstance.favorites.length
    }
  },
  methods: {
    showCart() {
      this.$cart.showCart()
    }
  }
}
</script>

<style scoped lang="scss">
.base-mobile-nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;

  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  background: #062D4E;
  z-index: 2000;

  &__item {
    position: relative;
    text-decoration: none;
    padding: 10px;
    > img {
      width: 40px;
      height: 40px;
    }
    &.cart {
      ::v-deep svg {
        width: 40px;
        height: 40px;
        path {
          fill: #FFFFFF;
        }
      }
    }
    .count {
      position: absolute;
      top: 10px;
      right: 2px;

      padding-left: 6px;
      padding-right: 6px;
      box-sizing: border-box;

      display: flex;
      justify-content: center;
      align-items: center;

      min-width: 24px;
      height: 20px;
      background: #D34A44;
      border-radius: 50px;

      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
    }
  }
}
</style>
