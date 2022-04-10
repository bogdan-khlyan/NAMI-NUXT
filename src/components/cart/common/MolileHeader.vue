<template>
  <div class="mobile-header">
    <arrow-circle-icon
      class="mobile-header__arrow-icon"
      @click.native="hideCart"/>
    <logo-icon
      class="mobile-header__logo-icon"
      :width="windowWidth > 480 ? '100px' : '80px'"
      :height="windowWidth > 480 ? '50px' : '40px'"
      @click.native="hideCart"/>
    <burger-icon
      class="mobile-header__burger-icon"
      @click.native="showHeaderCollapse"/>
  </div>
</template>

<script>
import LogoIcon from "@/components/common/icons/LogoIcon";
import ArrowCircleIcon from "@/components/common/icons/ArrowCircleIcon";
import BurgerIcon from "@/components/common/icons/BurgerIcon";

export default {
  name: 'mobile-header',
  components: { LogoIcon, ArrowCircleIcon, BurgerIcon },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    hideCart() {
      this.$cart.hideCart()
    },
    showHeaderCollapse() {
      this.$store.commit('showHeaderCollapse')
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-header {
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  width: 100%;
  height: 60px;

  background: #0C334A;
  z-index: 1;

  @media screen and (max-width: 480px) {
    height: 50px;
  }

  .back {
    margin-left: 20px;
  }

  &__arrow-icon {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 480px) {
      width: 26px;
      height: 26px;
    }
  }

  &__burger-icon {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 480px) {
      width: 26px;
      height: 26px;
    }
  }

}
</style>
