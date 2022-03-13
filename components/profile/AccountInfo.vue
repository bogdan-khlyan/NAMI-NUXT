<template>
  <div class="account-info">
    <div class="account-info__avatar">
      <base-user-avatar
        avatar="asfas&asf)))&^asf"
        :size="60"/>
    </div>
    <div class="account-info__phone">
      <span>+ 38 071 265 12 12</span>
    </div>
  </div>
</template>

<script>
import BaseUserAvatar from "@/components/common/header/components/BaseUserAvatar";

export default {
  name: 'account-info',
  components: { BaseUserAvatar }
}
</script>

<style lang="scss" scoped>
.account-info {
  display: flex;
  align-items: center;
  max-width: 250px;

  &__avatar {

  }

  &__phone {
    margin-left: 18px;
    > span {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #212121;
    }
  }

}
</style>
