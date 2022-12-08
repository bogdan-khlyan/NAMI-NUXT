export default {
  computed: {
    theme() {
      return this.config.theme
    },
    isDiscount() {
      return this.config.globalDiscountEnabled
    },
    config() {
      return this.$store.state.config.config
    }
  }
}
