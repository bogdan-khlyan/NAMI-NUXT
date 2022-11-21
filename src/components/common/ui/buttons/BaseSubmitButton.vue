<template>
  <button
    class="base-submit-button">
    <transition name="el-fade-in-linear" mode="out-in">
      <img v-if="loading"
           src="@/assets/images/spinner.svg" alt="...">
      <span v-else>
        <slot/>
      </span>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'base-submit-button',
  props: {
    loading: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="scss">
.base-submit-button {
  margin-top: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;

  background: #062D4E;
  border-radius: 4px;
  border: none;

  cursor: pointer;

  transition: 200ms;

  &:hover {
    background: #0e508a;
  }

  > span {
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }

}
</style>
