<template>
  <div class="cart-wrapper">
    <el-drawer
      :visible="isVisibleCart"
      @close="close"
      :with-header="false">
      <div class="content">
        <mobile-header v-if="windowWidth < 640"/>
        <scroll ref="scroll">
          <transition name="fade" mode="out-in">
            <product-list
              v-if="mode === 'INDEX'"
              @changeMode="changeMode"/>
            <order
              v-else-if="mode === 'ORDER'"
              @changeMode="changeMode" />
          </transition>
        </scroll>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ProductList from "@/components/cart/productList/ProductList";
import Order from "@/components/cart/order/Order";
import Scroll from "@/components/common/Scroll";
import MobileHeader from "@/components/cart/common/MolileHeader";

export default {
  name: 'cart',
  components: {ProductList, Order, Scroll, MobileHeader},
  computed: {
    isVisibleCart() {
      return this.$store.state.cart.isVisibleCart
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  data() {
    return {
      mode: 'INDEX'
    }
  },
  methods: {
    changeMode: function (mode) {
      this.mode = mode
      this.$refs.scroll.scrollTop()
    },
    close: function () {
      if (this.mode !== 'INDEX') {
        this.changeMode('INDEX')
      }
      this.$cart.hideCart()
    },
  }
}
</script>

<style scoped lang="scss">
.cart-wrapper .content {
  height: 100vh;
  background: #D0C0B4;
}
</style>

<style lang="scss">
.cart-wrapper .content .ps {
  height: 100vh;
}

.cart-wrapper .el-drawer {
  width: 600px !important;

  @media screen and (max-width: 640px) {
    width: 100% !important;
  }

}
</style>
