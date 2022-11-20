export default {
  computed: {
    orders() {
      return this.$store.state.orders.orders
    },
    total() {
      return this.$store.state.orders.total
    }
  }
}
