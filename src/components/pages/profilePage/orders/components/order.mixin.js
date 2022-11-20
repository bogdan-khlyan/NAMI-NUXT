import {conditionsMap} from "@/utils/condition-map";

export default {
  computed: {
    conditionName() {
      return conditionsMap.get(this.order.condition)
    }
  },
  methods: {
    async repeatOrder() {
      this.repeatLoading = true
      await this.getOrder()
      this.repeatLoading = false
      this.$store.commit('cart.clear')
      this.order.full.products.forEach(item => {
        const product = this.$store.state.menu.products.find(i => i._id === item.product._id)
        if (product) {
          this.$cart.addProduct(product, false)
        }
      })
      this.$cart.showCart()
    },
    clickDetails() {
      if (this.order.full) {
        this.$emit('click-details', this.order._id)
      } else {
        this.loading = true
        this.getOrder()
          .then(() => {
            this.$emit('click-details', this.order._id)
          })
          .finally(() => this.loading = false)
      }
    },
    async getOrder() {
      await this.$orders.getOrderById(this.order.number)
    }
  }
}
