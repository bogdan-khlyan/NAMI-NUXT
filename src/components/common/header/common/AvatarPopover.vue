<template>
  <el-popover
    class="avatar-popover"
    popper-class="avatar-popover__popover"
    placement="bottom-end"
    width="264"
    :trigger="windowWidth > 980 ? 'hover' : 'click'"
    ref="popover"
    :key="$route.name"
  >
    <component class="avatar-popover__reference"
               slot="reference"
               :is="windowWidth > 980 ? 'nuxt-link' : 'a'"
               to="/profile">
      <base-user-avatar
        :avatar="userInfo.avatar"
        :size="42"/>
    </component>
    <div class="avatar-popover__content">
      <div class="avatar-popover__profile">
        <base-user-avatar
          :avatar="userInfo.avatar"
          :size="32"/>
        <span class="avatar-popover__profile--phone">{{ userInfo.phone }}</span>
      </div>
      <hr>
      <div class="avatar-popover__menu">
        <nuxt-link to="/profile/orders">
          <list-icon/>
          <span>Мои заказы</span>
        </nuxt-link>
        <nuxt-link to="/profile">
          <user-icon/>
          <span>Личные данные</span>
        </nuxt-link>
        <nuxt-link to="/profile/favorites">
          <heart-icon/>
          <span>Избранное</span>
        </nuxt-link>
      </div>
      <br>
      <hr>
      <a class="avatar-popover__logout"
         @click="logout">
        <logout-icon/>
        <span>Выход</span>
      </a>
    </div>
  </el-popover>
</template>

<script>
import BaseUserAvatar from "@/components/common/BaseUserAvatar";
import HeartIcon from "@/components/common/icons/HeartIcon";
import ListIcon from "@/components/common/icons/ListIcon";
import UserIcon from "@/components/common/icons/UserIcon";
import LogoutIcon from "@/components/common/icons/LogoutIcon";

export default {
  name: 'button-to-cart',
  components: { BaseUserAvatar, HeartIcon, LogoutIcon, ListIcon, UserIcon },
  computed: {
    userInfo() {
      return this.$store.state.userInstance.info
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    logout() {
      this.$userInstance.logout()
    }
  }
}
</script>

<style scoped lang="scss">
.avatar-popover {
  &__reference {
    cursor: pointer;
  }
  &__content {
    hr {
      margin-top: 12px;
      margin-bottom: 12px;
      width: 100%;
      height: 1px;
      border: none;
      background: #E9ECF2;
    }
  }
  &__profile {
    display: flex;
    align-items: center;

    &--phone {
      margin-left: 12px;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #062D4E;
    }

  }
  &__menu {
    > a {
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      width: 100%;
      text-decoration: none;
      > span {
        margin-left: 10px;
        font-family: 'Ubuntu', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #303030;
      }
    }
  }
  &__logout {
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    > span {
      margin-left: 10px;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #F34942;
    }
  }
}
</style>

<style lang="scss">
.avatar-popover__popover {
  padding: 12px 16px;
  box-sizing: border-box;
}
</style>
