<template>
  <div class="form-label">
    <div class="form-label__point">
      <span></span>
    </div>
    <div class="form-label__text">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-label',
  props: {
    text: { type: String, required: true }
  }
}
</script>

<style scoped lang="scss">
.form-label {
  display: flex;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: -14px;

  &__point {
    margin-right: 26px;
    > span {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #D34A44;
    }
  }

  &__text {
    > span {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #191919;
    }
  }

}
</style>
