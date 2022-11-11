<template>
  <component
    :is="tag"
    :to="to"
    class="circle-button">
    <slot/>
    <transition name="el-fade-in-linear">
      <div v-if="value" class="circle-button__value">{{ value }}</div>
    </transition>
  </component>
</template>

<script>
export default {
  name: 'button-to-cart',
  props: {
    tag: { type: String, default: 'nuxt-link' },
    to: { type: String },
    value: { type: Number, default: null }
  }
}
</script>

<style scoped lang="scss">
.circle-button {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;

  border-radius: 50%;

  background: #FFFFFF;
  box-shadow: 9px 5px 37px rgba(0, 0, 0, 0.63);

  cursor: pointer;

  &__value {
    position: absolute;
    right: -6px;
    bottom: -3px;

    padding-left: 6px;
    padding-right: 6px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 24px;
    height: 20px;
    background: #D34A44;
    border-radius: 50px;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
  }

}
</style>
