<template>
  <div class="profile-page-wrapper">

    <div class="profile-page-wrapper__nav">
      <div class="profile-page-wrapper__nav--account-info">
        <account-info/>
      </div>
      <!-- TODO v-if-else -->
      <div class="profile-page-wrapper__nav--links">
        <profile-navigation/>
      </div>
      <profile-navigation-tabs/>
    </div>

      <transition name="el-fade-in-linear" mode="out-in">
        <nuxt-child/>
      </transition>
  </div>
</template>

<script>
import AccountInfo from "@/components/pages/profilePage/common/AccountInfo";
import ProfileNavigation from "@/components/pages/profilePage/common/ProfileNavigation";
import ProfileNavigationTabs from "@/components/pages/profilePage/common/ProfileNavigationTabs";

export default {
  name: 'profile',
  layout: 'base',
  components: { AccountInfo, ProfileNavigation, ProfileNavigationTabs },
  computed: {
    windowWidth () {
      return this.$store.state.windowWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-page-wrapper {
  position: relative;
  display: flex;

  padding-top: 180px;
  box-sizing: border-box;

  max-width: 1140px;
  min-height: 100vh;

  transition: 0.2s;
  margin: 0 auto;

  &__nav {
    width: 280px;
    min-width: 280px;

    &--links {
      margin-top: 24px;
      border-left: 1px solid #E4E4E4;
    }

    .profile-navigation-tabs {
      display: none;
    }
    @media screen and (max-width: 980px) {
      width: 100%;
      .profile-navigation-tabs {
        display: block;
      }
      &--links {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1140px) {
    padding: 150px 24px 0 24px
  }

  @media screen and (max-width: 980px) {
    padding-top: 100px;
    display: block;
  }
}
</style>
