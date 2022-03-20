<template>
  <div class="select-variant"
       @click="($event) => $event.stopPropagation()">
    <div v-if="label" class="select-variant__label">
      <span>{{ label }}</span>
    </div>
    <div class="select-variant__variants">
      <div class="select-variant__variants--item"
           :class="{ 'active': value && value._id === variant._id }"
           v-for="variant in product.variants"
           v-html="variant.icon"
           @click="changeVariant(variant)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-variant',
  props: {
    label: { type: String, default: null },
    product: { type: Object, default: null }
  },
  computed: {
    value() {
      const item = this.$store.state.cart.products
        .find(item => item._id === this.product._id)
      if (item) {
        return item.selectedVariant
      } else {
        return this.selectedVariant
      }
    }
  },
  data() {
    return {
      selectedVariant: null
    }
  },
  mounted() {
    if (this.product?.variants?.[0] && !this.product?.selectedVariant) {
      this.changeVariant(this.product.variants[0])
    }
  },
  methods: {
    changeVariant(variant) {
      this.$emit('change', variant)
      this.selectedVariant = variant
      this.$cart.changeProductVariant(this.product._id, variant)
    }
  }
}
</script>

<style scoped lang="scss">
.select-variant {
  margin-top: 14px;
  margin-bottom: 14px;

  &__label {
    margin-bottom: 8px;
    text-align: left;
    > span {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #3D3D3D;
    }
  }

  &__variants {
    display: flex;

    &--item {
      margin-left: 5px;
      margin-right: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 36px;
      height: 36px;

      border: 1px solid #312525;
      border-radius: 50%;
      box-sizing: border-box;

      transition: 200ms;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }

      &:hover, &.active {
        background-color: #312525;
      }

    }

  }

}
</style>

<style lang="scss">
.select-variant__variants--item {
  svg {
    width: 20px;
    height: 20px;
    svg path {
      fill: #312525;
      transition: 200ms;
    }
  }
  &:hover, &.active {
    svg path {
      fill: #FFFFFF;
    }
  }
}
</style>
