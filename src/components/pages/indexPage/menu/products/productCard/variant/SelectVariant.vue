<template>
  <div class="select-variant"
       @click="($event) => $event.stopPropagation()">
    <div class="select-variant__label">
      <span>Выберите начинку</span>
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
  model: { prop: 'value', event: 'change' },
  props: {
    value: { type: Object, default: null },
    product: { type: Object, default: null }
  },
  mounted() {
    if (this.product?.variants?.[0]) {
      this.changeVariant(this.product.variants[0])
    }
  },
  methods: {
    changeVariant(variant) {
      this.$emit('change', variant)
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
