<template>
  <header class="header__mobile show">
    <div class="burger"
         @click="$store.commit('showHeaderCollapse')">
      <burger-icon
        width="30px"
        height="30px"/>
    </div>
    <nuxt-link class="logo"
               to="/?menu">
      <logo-icon
        :width="logoSize.width"
        :height="logoSize.height"
        :cap="logoSize.cap"/>
    </nuxt-link>
    <div v-if="windowWidth > 600"
         class="phone">
      <a :href="`tel:+79497009791`">
        <div class="circle">
          <img src="@/assets/images/icons/phone-black.svg" alt="Телефон">
        </div>
        <span>+7 949 700 97 91</span>
      </a>
    </div>
    <div v-if="windowWidth > 980"
         class="header__mobile--favorites">
      <circle-button to="/favorites" :value="favoritesCount">
        <heart-icon/>
      </circle-button>
    </div>
    <div v-if="windowWidth > 980"
         class="cart">
      <circle-button
        tag="a"
        :value="cartCount"
        @click.native="showCart"
      >
        <cart-icon/>
      </circle-button>
    </div>
    <div v-if="isLoggedIn" class="avatar">
      <avatar-popover/>
    </div>
    <button v-else
            class="login"
            @click="$router.push('/login')">Войти</button>
  </header>
</template>

<script>
import CartHeaderButton from "@/components/common/header/common/CartHeaderButton";
import BurgerIcon from "@/components/common/icons/BurgerIcon";
import LogoIcon from "@/components/common/icons/LogoIcon";
import CircleButton from "@/components/common/header/common/CircleButton";
import CartIcon from "@/components/common/icons/CartIcon";
import HeartIcon from "@/components/common/icons/HeartIcon";
import AvatarPopover from "@/components/common/header/common/AvatarPopover";

export default {
  name: 'cart-mobile-header',
  components: {
    CartHeaderButton, BurgerIcon, LogoIcon,
    CircleButton, CartIcon, HeartIcon, AvatarPopover
  },
  props: {
    alwaysBg: { type: Boolean, default: false }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.userInstance.isLoggedIn
    },
    logoSize() {
      return {
        width: '100px',
        height: '50px',
        cap: {
          top: '-12px',
          left: '-22px',
          transform: 'scale(0.85)'
        }
      }
      // if (this.windowWidth > 480) {
      //   return {
      //     width: '120px',
      //     height: '60px',
      //     cap: {
      //       top: '-9px',
      //       left: '-22px',
      //       transform: null
      //     }
      //   }
      // } else if (this.windowWidth > 420) {
      //   return {
      //     width: '100px',
      //     height: '50px',
      //     cap: {
      //       top: '-12px',
      //       left: '-22px',
      //       transform: 'scale(0.85)'
      //     }
      //   }
      // } else {
      //   return {
      //     width: '83px',
      //     height: '42px',
      //     cap: {
      //       top: '-15px',
      //       left: '-23px',
      //       transform: 'scale(0.7)'
      //     }
      //   }
      // }
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },
    cartCount() {
      let count = 0
      this.$store.state.cart.products.forEach(item => count += item.count)
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
.header__mobile {
  position: fixed;
  width: 100vw;
  max-width: 100%;
  height: 72px!important;
  background-color: #fff;
  box-sizing: border-box;

  border-bottom: 1px solid #e3e3e3;

  z-index: 99;

  display: flex;
  align-items: center;
  //padding-left: 20px;
  padding-right: 30px;
  @media screen and (max-width: 600px) {
    padding-right: 12px;
  }

  &--favorites {
    margin-right: 12px;
    ::v-deep svg path {
      fill: #212121;
    }
    @media screen and (max-width: 700px) {
      margin-left: auto;
    }
  }

  .avatar {
    margin-left: 12px;
    z-index: 1;
    @media screen and (max-width: 600px) {
      margin-left: auto;
    }
  }

  .burger {
    cursor: pointer;
    padding: 10px 10px 10px 30px;
    @media screen and (max-width: 600px) {
      padding-left: 20px;
      padding-right: 5px;
    }
  }

  &.show {
    border-bottom: none;

    background-color: #0C334A;

    > .burger > svg > rect {
      fill: #FFFFFF;
    }

  }

  > .cart {
    top: -10px;

    > .btn {
      box-shadow: 2px 1px 13px rgba(0, 0, 0, 0.26);
    }

  }

  > .logo {
    margin-top: 6px;
    margin-left: 20px;
    @media screen and (max-width: 420px) {
      margin-left: 15px;
    }
    > img {
      height: 60px;
    }
  }

  > .phone {
    display: flex;
    align-items: center;

    margin-left: auto;
    margin-right: 20px;


    > a {
      display: flex;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 19px;
      line-height: 21px;

      letter-spacing: 0.08em;

      color: #222222;

      text-decoration: none;

      > .circle {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 45px;
        height: 45px;

        border-radius: 50%;

        background-color: #FFFFFF;
      }

      > span {
        margin-left: 15px;
        line-height: 50px;
        color: #FFFFFF;
      }

    }

  }

  .login {
    margin-left: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 102px;
    height: 45px;

    border: none;

    background: #FFFFFF;
    box-shadow: 9px 5px 37px rgba(0, 0, 0, 0.63);
    border-radius: 36px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-decoration: none;
    letter-spacing: 0.07em;
    color: #000000;

    //cursor: no-drop;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      margin-left: auto;
    }
    @media screen and (max-width: 480px) {
      width: 90px;
    }

  }

}
</style>
