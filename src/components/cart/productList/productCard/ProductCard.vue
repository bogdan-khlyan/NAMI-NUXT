<template>
  <desktop
    v-if="windowWidth > 550"
    :product="product"/>
  <mobile
    v-else
    :product="product"/>
</template>

<script>
import Desktop from "@/components/cart/productList/productCard/Desktop";
import Mobile from "@/components/cart/productList/productCard/Mobile";

export default {
  name: 'product-card',
  components: { Desktop, Mobile },
  props: {
    product: { type: Object }
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
