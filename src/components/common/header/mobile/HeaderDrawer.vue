<template>
  <div v-if="isShowHeaderCollapse"
       class="header-drawer__wrapper"
       @click="clickWrapper"
       ref="wrapper">

    <div class="header-drawer"
         ref="drawer">
      <div class="header-drawer__header">
        <button class="header-drawer__close-btn"
                @click="close">
          <close-icon/>
        </button>
      </div>

      <nuxt-link v-if="isLoggedIn"
                 to="/profile"
                 class="header-drawer__profile"
                 @click.native="close">
        <div class="header-drawer__profile--avatar">
          <base-user-avatar
            :avatar="userInfo.avatar"
            :size="42"
          />
        </div>
        <div class="header-drawer__profile--info">
          <span v-if="userInfo.name" class="bold name">{{ userInfo.name }}</span>
          <span :class="userInfo.name ? 'phone' : 'bold'">{{ userInfo.phone }}</span>
        </div>
      </nuxt-link>

      <hr v-if="isLoggedIn">

      <nav class="header-drawer__menu">
        <nuxt-link to="/?menu"
                   @click.native="close">
          <span class="icon">
            <menu-icon/>
          </span>
          <span>Меню</span>
        </nuxt-link>
        <nuxt-link to="/delivery"
                   @click.native="close">
          <span class="icon">
            <delivery-icon/>
          </span>
          <span>Доставка</span>
        </nuxt-link>
        <nuxt-link to="/stocks"
                   @click.native="close">
          <span class="icon">
            <stock-icon/>
          </span>
          <span>Акции</span>
        </nuxt-link>
        <nuxt-link to="/contacts"
                   @click.native="close">
          <span class="icon">
            <email-icon/>
          </span>
          <span>Контакты</span>
        </nuxt-link>
        <el-tooltip class="item" effect="dark" placement="bottom-start" content="Временно недоступно :(">
          <a>
            <span class="icon">
              <reviews-icon/>
            </span>
            <span>Отзывы</span>
          </a>
        </el-tooltip>
      </nav>

      <hr>

      <div class="header-drawer__footer">
        <button
          v-if="isLoggedIn"
          class="header-drawer__footer--btn-logout"
          @click="logout"
        >Выйти</button>
        <nuxt-link
          v-else
          class="header-drawer__footer--btn-login"
          to="/login"
          @click.native="close"
        >Войти</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
import CloseIcon from "@/components/common/icons/CloseIcon";
import MenuIcon from "@/components/common/icons/MenuIcon";
import DeliveryIcon from "@/components/common/icons/DeliveryIcon";
import StockIcon from "@/components/common/icons/StockIcon";
import ReviewsIcon from "@/components/common/icons/ReviewsIcon";
import EmailIcon from "@/components/common/icons/EmailIcon";
import BaseUserAvatar from "@/components/common/BaseUserAvatar";

export default {
  name: 'header-collapse',
  components: { CloseIcon, MenuIcon, DeliveryIcon, StockIcon, ReviewsIcon, EmailIcon, BaseUserAvatar },
  computed: {
    isLoggedIn() {
      return this.$store.state.userInstance.isLoggedIn
    },
    userInfo() {
      return this.$store.state.userInstance.info
    },
    isShowHeaderCollapse() {
      return this.$store.state.isShowHeaderCollapse
    }
  },
  watch: {
    isShowHeaderCollapse(value) {
      if (value) {
        this.visible = true
      }
    },
    visible(value) {
      if (value) {
        setTimeout(() => {
          this.$refs.wrapper.style.opacity = '1'
          this.$refs.drawer.style.transform = 'translateX(0)'
          document.body.style.overflowY = 'hidden'
        }, 100)
      } else {
        this.$refs.wrapper.style.opacity = '0'
        this.$refs.drawer.style.transform = 'translateX(-280px)'
        document.body.style.overflowY = null
        setTimeout(() => {
          this.$store.commit('hideHeaderCollapse')
        }, 200)
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    logout() {
      this.$userInstance.logout()
        .then(() => this.close())
    },
    clickWrapper($event) {
      if ($event.target.classList[0] === 'header-drawer__wrapper') {
        this.close()
      }
    },
    close() {
      this.visible = false
      this.$cart.hideCart()
    }
  }
}
</script>

<style scoped lang="scss">
.header-drawer {
  position: fixed;
  bottom: 60px;

  padding: 20px 32px 32px 32px;
  box-sizing: border-box;

  width: 280px;
  //min-height: 360px;

  background: #062D4E;
  border-radius: 0px 16px 16px 0px;

  transform: translateX(-280px);
  transition: 200ms;

  z-index: 999999;

  &__header {
    width: 100%;
    text-align: right;
  }

  &__profile {
    display: flex;
    align-items: center;
    text-decoration: none;

    &--info {
      padding-left: 16px;
      text-align: left;
      .name {
        display: block;
        max-width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .bold {
        font-family: 'Ubuntu', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
      }
      .phone {
        display: block;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.8);
      }
    }

  }

  &__menu {
    > a {
      margin-top: 14px;
      margin-bottom: 14px;

      display: flex;
      align-items: center;
      text-decoration: none;

      > .icon {
        margin-right: 16px;
        display: flex;
        justify-content: center;
        width: 30px;
      }

      > span {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(60, 75, 97, 0.6);
    backdrop-filter: blur(10px);

    opacity: 0;
    transition: opacity 300ms;
    z-index: 9999;
  }

  &__footer {
    margin-top: 10px;
    text-align: left;
    &--btn-login {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 160px;
      height: 48px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      text-decoration: none;
      color: #303030;

      background: #FFFFFF;
      border-radius: 100px;
      border: none;
    }
    &--btn-logout {
      width: 160px;
      height: 48px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #FFFFFF;

      background: #1F4260;
      border-radius: 100px;
      border: none;

      cursor: pointer;
    }
  }

  &__close-btn {
    margin-right: -10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 1px;
    border: none;
    background: rgba(255, 255, 255, 0.2);
  }

}
</style>
