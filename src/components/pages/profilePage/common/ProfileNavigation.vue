<template>
  <nav class="profile-navigation">
    <nuxt-link to="/profile/orders"
               class="profile-navigation__item">
      <base-svg
        :src="require('@/assets/images/icons/icon-orders.svg')"/>
      <span>Мои заказы</span>
    </nuxt-link>
    <nuxt-link to="/profile/favorites"
               class="profile-navigation__item">
      <heart-icon/>
      <span>Избранное</span>
    </nuxt-link>
    <nuxt-link to="/profile"
               class="profile-navigation__item">
      <base-svg
        :src="require('@/assets/images/icons/icon-user.svg')"/>
      <span>Личные данные</span>
    </nuxt-link>
  </nav>
</template>

<script>
import BaseSvg from "@/components/common/BaseSvg";
import HeartIcon from "@/components/common/icons/HeartIcon";

export default {
  name: 'profile-navigation',
  components: { BaseSvg, HeartIcon }
}
</script>

<style lang="scss" scoped>
.profile-navigation {

  &__item {
    margin-top: 12px;
    margin-bottom: 12px;

    display: flex;
    align-items: center;
    height: 32px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #757575;
    text-decoration: none;

    cursor: pointer;

    transition: 200ms;

    &:before {
      content: '';

      position: absolute;
      top: 0;
      left: -2px;

      width: 3px;
      height: 32px;

      background: transparent;
      border-radius: 3px;

      transition: 200ms;
    }

    &.nuxt-link-exact-active {
      position: relative;

      color: #062D4E;

      &:before {
        background: #062D4E;
      }
    }

  }

}
</style>

<style lang="scss">
.profile-navigation__item {
  svg {
    margin-right: 8px;
    margin-left: 16px;

    path {
      fill: #757575;
    }
  }
  &.nuxt-link-exact-active {
    svg path {
      fill: #062D4E;
    }
  }
}
</style>
