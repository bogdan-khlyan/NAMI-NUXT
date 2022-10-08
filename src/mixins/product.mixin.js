export default {
  computed: {
    productId() {
      return this.product._id
    },
    isSingle() {
      return this.product.type === 'SINGLE'
    },
    isVariant() {
      return this.product.type === 'VARIANT'
    },
    cartProduct() {
      return this.$store.state.cart.products
        .find(item => item._id === this.productId)
    },
    selectedVariant() {
      return this.product.selectedVariant
    },
    cost() {
      return this.isSingle ?
        this.product.cost
        : this.selectedVariant.cost
    },
    costAll() {
      return this.isSingle ?
        this.cartProduct.count * this.product.cost
        : this.cartProduct.count * this.selectedVariant.cost
    },
    weight() {
      return this.isSingle ?
        this.product.weight
        : this.selectedVariant.weight
    },
    cardDescription() {
      const description = this.product.ingredients.join(', ')
      if (description.length > 75) {
        return description.slice(0, 75) + '...'
      } else {
        return description
      }
    },
    count() {
      return this.cartProduct?.count
    },
    titleStyles() {
      return this.product.title.length > 14 ?
        'font-size: 16px;line-height: 18px;'
        : ''
    }
  },
  methods: {
    changeCount(count) {
      if (count === 0) {
        this.$cart.removeProduct(this.productId)
        return
      }
      this.$cart.changeProductCount(this.productId, count)
    }
  }
}
