<template>

  <nav class="profile-navigation-tabs">
    <nuxt-link to="/profile"
               class="profile-navigation-tabs__item"
               ref="profile-info">
      <span>Личные данные</span>
    </nuxt-link>
    <nuxt-link to="/profile/orders"
               class="profile-navigation-tabs__item"
               ref="profile-orders">
      <span>Мои заказы</span>
    </nuxt-link>
    <nuxt-link to="/profile/favorites"
               class="profile-navigation-tabs__item"
               ref="profile-favorites">
      <span>Избранное</span>
    </nuxt-link>
    <div ref="tabPanel" class="profile-navigation-tabs__tab-panel"/>
  </nav>
</template>

<script>

export default {
  name: "ProfileNavigationTabs",
  data() {
    return {
      resizeObserver: null,
    }
  },
  watch: {
    '$route.name'(value) {
      if (this.$refs[value]) {
        this.updateTabPanel(this.$refs[value].$el)
      }
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      const el = document.querySelector('.profile-navigation-tabs__item.nuxt-link-exact-active')

      this.$refs.tabPanel.style.transition = 'all 0s'
      this.updateTabPanel(el)
      this.$refs.tabPanel.style.transition = '0.3s'
    })

    this.$nextTick(() =>
      this.resizeObserver.observe(document.querySelector('.profile-navigation-tabs'))
    )
  },
  methods: {
    handleClick(event) {
      this.updateTabPanel(event.path[0])
    },
    updateTabPanel(event) {
      this.$refs.tabPanel.style.left = `${event.offsetLeft - 12}px`
      this.$refs.tabPanel.style.width = `${event.offsetWidth + 24}px`
    }
  },
  beforeDestroy() {
    this.resizeObserver.disconnect();
  }
}
</script>

<style lang="scss">
.profile-navigation-tabs {
  position: relative;
  display: flex;
  justify-content: flex-start;

  margin-bottom: 40px;
  transition: 0.2s;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    bottom: -5px;
    background: #E4E4E4;
    border-radius: 2px;
  }

  &__tab-panel {
    position: absolute;
    content: '';
    width: 80px;
    height: 3px;
    left: 24px;
    bottom: -6px;
    background: #062D4E;
    border-radius: 4px;
    transition: 0.3s;
  }

  &__item {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    color: #757575;
    transition: 0.2s;

    &:nth-child(1) {
      margin-left: 24px;
    }

    &:nth-child(2) {
      margin: 0 90px;
    }

    &:nth-child(3) {
      margin-right: 24px;
    }

    &.nuxt-link-exact-active {
      color: #062D4E;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 590px) {
    &__item:nth-child(2) {
      margin: 0 auto;
    }

    margin-bottom: 20px;
  }
  @media screen and (max-width: 460px) {
    &__item {
      font-size: 14px;
      line-height: 20px;

      &:nth-child(1) {
        margin-left: 8px;
      }

      &:nth-child(3) {
        margin-right: 5px;
      }
    }
  }
  @media screen and (max-width: 370px) {
    &__item {
      font-size: 13px;
      line-height: 16px;
    }
    &__tab-panel {
      height: 2px;
    }
  }
  @media screen and (max-width: 330px) {
    &__item {
      font-size: 12px;
    }
  }
}
</style>
