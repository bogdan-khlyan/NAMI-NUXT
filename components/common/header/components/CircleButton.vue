<template>
  <nuxt-link
    to="/history"
    class="circle-button">
    <img src="@/assets/images/icons/icon-orders.svg" alt="">
  </nuxt-link>
</template>

<script>
export default {
  name: 'button-to-cart'
}
</script>

<style scoped lang="scss">
.circle-button {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;

  border-radius: 50%;

  background: #FFFFFF;
  box-shadow: 9px 5px 37px rgba(0, 0, 0, 0.63);

  cursor: pointer;
}
</style>
