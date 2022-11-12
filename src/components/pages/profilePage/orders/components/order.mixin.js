export default {
  computed: {
    conditionName() {
      const conditionsMap = new Map()
        .set('NEW', 'Новый')
        .set('IN_PROGRESS', 'В обработке')
        .set('IN_THE_WAY', 'Доставляется')
        .set('DONE', 'Завершен')
        .set('REJECT', 'Отменен')
      return conditionsMap.get(this.order.condition)
    }
  },
  methods: {
    async repeatOrder() {
      await this.getOrder()
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
      this.order.full = await this.$orders.getOrderById(this.order.number)
    }
  }
}
