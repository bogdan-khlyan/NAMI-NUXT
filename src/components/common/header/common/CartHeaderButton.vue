<template>
  <div class="cart-header-btn"
       @click="showCart">
    <cart-icon/>
    <div class="cart-header-btn__count">
      <span>{{ count }}</span>
    </div>
  </div>
</template>

<script>
import CartIcon from "@/components/common/icons/CartIcon";

export default {
  name: 'button-to-cart',
  components: {CartIcon},
  computed: {
    count() {
      let count = 0
      this.$store.state.cart.products.forEach(item => count += item.count)
      return count
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
.cart-header-btn {
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

  > svg {
    width: 30px;
    height: 30px;
  }

  &__count {
    position: absolute;
    right: -3px;
    bottom: -3px;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.51);

    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      padding-top: 3px;
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.07em;

      color: #000000;
    }

  }

}
</style>
