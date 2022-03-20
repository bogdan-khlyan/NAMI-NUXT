<template>
  <div class="mobile-header">
    <img class="back"
         src="images/arrow-circle.svg" alt=""
         @click="hideCart">
    <img class="logo" src="images/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'mobile-header',
  methods: {
    hideCart() {
      this.$cart.hideCart()
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-header {
  position: fixed;
  display: flex;
  align-items: center;

  width: 100%;
  height: 42px;

  background: #0C334A;
  z-index: 1;

  .back {
    margin-left: 20px;
  }

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>
