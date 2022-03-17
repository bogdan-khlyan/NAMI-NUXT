<template>
  <div class="profile-page-wrapper">
    <div class="profile-page-wrapper__nav">
      <div class="profile-page-wrapper__nav--account-info">
        <account-info/>
      </div>
      <div class="profile-page-wrapper__nav--links">
        <profile-navigation/>
      </div>
    </div>
    <div class="profile-page-wrapper__content">
      <transition name="el-fade-in-linear" mode="out-in">
        <nuxt-child/>
      </transition>
    </div>
  </div>
</template>

<script>
import AccountInfo from "@/components/pages/profilePage/common/AccountInfo";
import ProfileNavigation from "@/components/pages/profilePage/common/ProfileNavigation";

export default {
  name: 'profile',
  layout: 'base',
  components: { AccountInfo, ProfileNavigation }
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

  &__nav {
    max-width: 250px;

    &--links {
      margin-top: 24px;
      border-left: 1px solid #E4E4E4;
    }
  }

  &__content {
    padding-left: 100px;
  }

}
</style>
