<template>
  <desktop
    v-if="windowWidth > 550"
    :product="data"/>
  <mobile
    v-else
    :product="data"/>
</template>

<script>
import Desktop from "@/components/cart/productList/productCard/Desktop";
import Mobile from "@/components/cart/productList/productCard/Mobile";

export default {
  name: 'cart-product',
  components: { Desktop, Mobile },
  props: {
    data: { type: Object }
  },
  computed: {
    windowWidth () {
      return this.$store.state.windowWidth
    }
  }
}
</script>

<style scoped lang="scss">

</style>
