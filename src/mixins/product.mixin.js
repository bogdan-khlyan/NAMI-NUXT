import {minusDiscount} from "@/utils/discount";

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
      if (this.isSingle) {
        return this.$store.state.cart.products
            .find(item => item._id === this.productId)
      } else {
        return this.$store.state.cart.products
            .find(item => item._id === this.productId && this.selectedVariant._id === item.selectedVariant._id)
      }
    },
    selectedVariant() {
      return this.product.selectedVariant
    },
    cartProducts() { // в случае с VARIANT продуктами в корзине может быть несколько продуктов с одним id и разными variant
      return this.$store.state.cart.products
          .filter(item => item._id === this.productId)
    },
    cost() {
      return this.isSingle ?
        this.product.cost
        : this.selectedVariant?.cost
    },
    costAll() {
      return this.isSingle ?
        this.cartProduct.count * this.product.cost
        : this.cartProduct.count * this.selectedVariant.cost
    },
    weight() {
      return this.isSingle ?
        this.product.weight
        : this.selectedVariant?.weight
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
    },
    isFavorite() {
      return !!this.$store.state.userInstance.favorites.find(item => item === this.productId)
    },

    isDiscount() {
      return this.$store.state.isDiscount
    },
    discountCost() {
      return minusDiscount(this.cost)
    }
  },
  methods: {
    isActiveVariant(variant) {
      return !!this.cartProducts?.find(item => item.selectedVariant._id === variant._id) || this.selectedVariant._id === variant._id
    },
    selectedVariantCount(variant) {
      return this.cartProducts?.find(item => item.selectedVariant._id === variant._id)?.count
    },
    changeCount(count) {
      if (count === 0) {
        this.$cart.removeProduct(this.productId, this.selectedVariant?._id)
        return
      }
      this.$cart.changeProductCount(
        this.productId,
        this.selectedVariant?._id,
        count,
        count > this.count ? 'Товар добавлен в корзину' : 'Товар удален из корзины'
      )
    }
  }
}
