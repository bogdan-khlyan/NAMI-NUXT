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

<style lang="scss" scoped>
</style>
