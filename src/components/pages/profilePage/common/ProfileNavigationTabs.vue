<template>
  <el-tabs class="profile-navigation-tabs" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Личные данные" name="profile"/>
    <el-tab-pane label="Мои заказы" name="profile-orders"/>
    <el-tab-pane label="Мои адреса" name="profile-addresses"/>
  </el-tabs>
</template>

<script>
export default {
  name: "ProfileNavigationTabs",
  data() {
    return {
      activeName: 'profile'
    };
  },
  created() {
    this.activeName = this.$route.name
    console.log('ProfileNavigationTabs')
  },
  methods: {
    handleClick() {
      this.$router.push(`/${this.activeName.replace('-','/')}`)
    }
  }
}
</script>

<style lang="scss">
.profile-navigation-tabs {
  .el-tabs__item {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 40px;
    text-align: left;
    color: #757575;
    transition: 0.1s;
    padding: 0 45px;
  }
  .el-tabs__item.is-active {
    font-weight: 400;
    color: #062D4E;
  }
  .el-tabs__active-bar {
    background-color: #062D4E;
    z-index: 1;
  }

  @media screen and (max-width: 530px) {
    .el-tabs__item {
      font-size: 14px;
      padding: 0 30px;
    }
  }
}
</style>
