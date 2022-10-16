<template>
  <div class="selected-variant">
    <label>С начинкой:</label>
    <div class="selected-variant__content">
      <img :src="`/api/product/variant/icon/${selectedVariant.icon}`" alt="">
      <span>{{ selectedVariant.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selected-variant',
  props: {
    selectedVariant: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
.selected-variant {
  margin-top: 5px;
  > label {
    display: block;
    margin-bottom: 5px;
  }
  &__content {
    display: flex;
    align-items: center;
    > img {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
    > span {
      font-family: Neucha, sans-serif;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
