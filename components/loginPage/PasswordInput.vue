<template>
  <label class="password-input"
         :class="[{ 'focus': isFocus }, { 'loading': loading }, { 'error': error.$error }]">
    <span class="password-input__label">
      {{ label }}
      <img v-if="loading" src="@/assets/images/spinner.gif" alt="">
    </span>
    <span class="password-input__input">
      <input :type="visible ? 'text' : 'password'"
             :value="value"
             :disabled="loading"
             :placeholder="placeholder"
             maxlength="126"
             @input="$emit('input', $event.target.value)"
             @focus="isFocus = true"
             @blur="isFocus = false">
      <span class="eye"
            @click="visible = !visible">
        <base-svg v-if="visible"
                  :src="require('@/assets/images/icons/password-visible.svg')"/>
        <base-svg v-else
                  :src="require('@/assets/images/icons/password-invisible.svg')"/>
      </span>
    </span>
  </label>
</template>

<script>
import BaseSvg from "@/components/common/BaseSvg";

export default {
  name: 'password-input',
  components: { BaseSvg },
  model: { prop: 'value', event: 'input' },
  props: {
    value: { type: String, default: null },
    label: { type: String, default: 'Пароль' },
    placeholder: { type: String, default: null },
    loading: { type: Boolean, default: false },
    error: { type: Object }
  },
  data() {
    return {
      visible: false,
      isFocus: false
    }
  }
}
</script>

<style scoped lang="scss">
.password-input {

  &.focus {
    input {
      border-color: #7695CC;
    }
  }

  &.error {
    input {
      color: #9a9a9a;
      border-color: #FFD8D8;
      background: #FFF5F5;

      &::placeholder {
        color: #9a9a9a;
      }
    }
  }

  &.loading {
    input {
      cursor: wait;
    }
  }

  &__label {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    text-align: left;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #404040;

    > img {
      margin-left: 6px;
      width: 16px;
      height: 16px;
    }

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
      letter-spacing: 0.4em;
      color: #212121;

      background: #FFFFFF;
      border: 1px solid #D4D9E6;
      box-sizing: border-box;
      border-radius: 4px;

      transition: 200ms;

      &::placeholder {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #D4D9E6;
      }

    }

    .eye {
      position: absolute;
      top: 0; bottom: 0;
      margin: auto;
      right: 16px;

      cursor: pointer;
    }

  }

}
</style>

<style lang="scss">
.password-input {
  .password-input__input {
    svg path {
      transition: 200ms;
    }
  }
  &.focus {
    .password-input__input {
      svg path {
        fill: #7695CC;
      }
    }
  }
  &.error {
    svg path {
      fill: #9a9a9a!important;
    }
  }
}
</style>
