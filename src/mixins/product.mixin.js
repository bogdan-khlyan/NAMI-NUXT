export default {
  computed: {
    isSingle() {
      return this.product.type === 'SINGLE'
    },
    isVariant() {
      return this.product.type === 'VARIANT'
    },
    cartProduct() {
      return this.$store.state.cart.products
        .find(item => item._id === this.product._id)
    },
    selectedVariant() {
      return this.product.selectedVariant
    },
    cost() {
      return this.product.type === 'SINGLE' ?
        this.product.cost
        : this.selectedVariant.cost
    },
    weight() {
      return this.product.type === 'SINGLE' ?
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
      return this.cartProduct ?
        this.cartProduct.count
        : 0
    }
  }
}
