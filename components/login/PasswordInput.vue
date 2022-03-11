<template>
  <label class="password-input">
    <span class="password-input__label">Пароль</span>
    <span class="password-input__input">
      <input :type="visible ? 'text' : 'password'"
             :placeholder="placeholder">
      <img v-if="visible"
           src="@/assets/images/icons/password-visible.svg" alt=""
           @click="visible = !visible">
      <img v-else
           src="@/assets/images/icons/password-invisible.svg" alt=""
           @click="visible = !visible">
    </span>
  </label>
</template>

<script>
export default {
  name: 'password-input',
  props: {
    placeholder: { type: String, default: null }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped lang="scss">
.password-input {

  &__label {
    display: block;
    margin-bottom: 4px;

    text-align: left;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #404040;
  }

  &__input {
    position: relative;

    > input {
      padding-left: 16px;

      width: 386px;
      height: 56px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #212121;

      background: #FFFFFF;
      border: 1px solid #D4D9E6;
      box-sizing: border-box;
      border-radius: 4px;

      &::placeholder {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #D4D9E6;
      }

    }

    > img {
      position: absolute;
      top: 0; bottom: 0;
      margin: auto;
      right: 16px;

      cursor: pointer;
    }
  }

}
</style>
