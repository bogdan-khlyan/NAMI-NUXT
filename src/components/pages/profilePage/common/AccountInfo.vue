<template>
  <div class="account-info">
    <div class="account-info__avatar">
      <base-user-avatar
        :avatar="userInfo.avatar"
        :size="60"/>
    </div>
    <div class="account-info__info">
      <span v-if="userInfo.name" class="bold name">{{ userInfo.name }}</span>
      <span :class="{ bold: !userInfo.name }">{{ userInfo.phone }}</span>
    </div>
  </div>
</template>

<script>
import BaseUserAvatar from "@/components/common/BaseUserAvatar";

export default {
  name: 'account-info',
  components: { BaseUserAvatar },
  computed: {
    userInfo() {
      return this.$store.state.userInstance.info
    }
  }
}
</script>

<style lang="scss" scoped>
.account-info {
  display: flex;
  align-items: center;
  max-width: 250px;

  &__avatar {

  }

  &__info {
    margin-left: 18px;
    > span {
      display: block;
      text-align: left;
    }
    > .name {
      max-width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > .bold {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #212121;
    }
  }

  @media screen and (max-width: 980px) {
    margin-bottom: 32px;
  }
}
</style>
