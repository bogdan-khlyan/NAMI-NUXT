<template>
  <div class="selected-variant">
    <div class="selected-variant__icon">
      <img :src="`/api/product/variant/icon/${selectedVariant.icon}`" :alt="selectedVariant.title">
    </div>
    <div class="selected-variant__title">
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
  display: flex;
  align-items: center;
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid rgba(49, 37, 37, 0.1);
    > img {
      width: 20px;
      height: 20px;
    }
  }
  &__title {
    padding-left: 6px;
    > span {
      font-family: 'Neucha', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      color: #000000;
    }
  }
}
</style>
