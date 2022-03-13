<template>
  <div class="profile-page-wrapper">
    <div class="profile-page-wrapper__nav">
      <div class="profile-page-wrapper__nav--account-info">
        <account-info/>
      </div>
      <div class="profile-page-wrapper__nav--links">
        <nuxt-link to="/profile/orders"
                   class="profile-page-wrapper__nav--link">
          <base-svg
            :src="require('@/assets/images/icons/icon-orders.svg')"/>
          <span>Мои заказы</span>
        </nuxt-link>
        <nuxt-link to="/profile/address"
                   class="profile-page-wrapper__nav--link">
          <base-svg
            :src="require('@/assets/images/icons/icon-home.svg')"/>
          <span>Мои адреса</span>
        </nuxt-link>
        <nuxt-link to="/profile"
                   class="profile-page-wrapper__nav--link">
          <base-svg
            :src="require('@/assets/images/icons/icon-user.svg')"/>
          <span>Личные данные</span>
        </nuxt-link>
      </div>
    </div>
    <div class="profile-page-wrapper__content">
<!--      <div class="profile-page-wrapper__content&#45;&#45;title">-->
<!--        <base-svg-->
<!--          :src="titleIcon"/>-->
<!--        <h1>{{ title }}</h1>-->
<!--      </div>-->
      <transition name="el-fade-in-linear" mode="out-in">
        <nuxt-child/>
      </transition>

    </div>

<!--    <img class="right-wave"-->
<!--         src="@/assets/images/bg-wave.svg" alt="">-->
  </div>
</template>

<script>
import AccountInfo from "@/components/profile/AccountInfo";
import BaseSvg from "@/components/common/BaseSvg";

export default {
  name: 'profile',
  layout: 'base',
  components: { AccountInfo, BaseSvg }
}
</script>

<style lang="scss" scoped>
.profile-page-wrapper {
  position: relative;
  display: flex;

  padding-top: 200px;
  box-sizing: border-box;

  max-width: 1140px;
  min-height: 100vh;

  margin: 0 auto;

  //background-image: url('@/assets/images/menu-bg.png');
  //background-size: 100% auto;

  &__nav {
    max-width: 250px;

    &--links {
      margin-top: 24px;
      border-left: 1px solid #E4E4E4;
    }
    &--link {
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

      &.nuxt-link-exact-active {
        position: relative;

        color: #062D4E;

        &:before {
          content: '';

          position: absolute;
          top: 0;
          left: -2px;

          width: 3px;
          height: 32px;

          background: #062D4E;
          border-radius: 3px;
        }
      }

    }
  }

  &__content {
    padding-left: 100px;
  }

}
</style>

<style lang="scss">
.profile-page-wrapper__nav--link {
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

.profile-page-wrapper__content--title {

}
</style>
