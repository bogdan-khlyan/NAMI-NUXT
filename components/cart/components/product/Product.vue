<template>
  <desktop v-if="windowWidth > 550" :data="data" />
  <mobile v-else :data="data" />
</template>

<script>
import Desktop from "@/components/cart/components/product/Desktop";
import Mobile from "@/components/cart/components/product/Mobile";

export default {
  name: 'cart-product',
  components: { Desktop, Mobile },
  props: {
    data: { type: Object }
  },
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  },
  data () {
    return {
      count: 1
    }
  }
}
</script>

<style scoped lang="scss">

</style>
