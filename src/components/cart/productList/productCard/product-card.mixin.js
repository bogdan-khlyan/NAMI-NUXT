export const productCardMixin = {
    computed: {
      cost() {
        if (this.product.type === 'SINGLE') {
          return this.product.cost
        }
        if (this.product.type === 'VARIANT') {
          return this.product.selectedVariant.cost
        }
        return 0
      },
      costAll() {
        if (this.product.type === 'SINGLE') {
          return this.product.count * this.product.cost
        }
        if (this.product.type === 'VARIANT') {
          return this.product.count * this.product.selectedVariant.cost
        }
        return 0
      },
      count() {
        return this.product.count
      },
      titleStyles() {
        if (this.product.title.length > 14) {
          return 'font-size: 16px;line-height: 18px;'
        } else {
          return ''
        }
      }
    }
}
