<template>
  <label class="code-input"
         :class="[{ error: error.$error }]">
    <span class="code-input__label">
      Код из смс
      <img v-if="loading" src="@/assets/images/spinner.gif" alt="">
      <check-icon v-if="verified"/>
    </span>
    <span class="code-input__content"
          @keydown="keyDown">
      <input v-for="(item, index) in code"
             v-model="code[index]"
             type="text"
             maxlength="2"
             placeholder="_"
             inputmode="numeric"
             :disabled="disabled"
             @input="input(index)"
             :uid="index"
             ref="input">
    </span>
    <span v-if="!verified"
          class="code-input__new-code"
          :class="{ disabled: isNewCodeDisabled }"
          @click="newCode">
      <base-svg
        :src="require('@/assets/images/icons/arrow-circle.svg')"/>
      <span class="text">Отправить код еще раз</span>
      <span v-if="time > 0" class="time">({{timeHuman}})</span>
    </span>
  </label>
</template>

<script>
import BaseSvg from "@/components/common/BaseSvg";
import CheckIcon from "@/components/common/icons/CheckIcon";

export default {
  name: 'phone-input',
  components: { BaseSvg, CheckIcon },
  props: {
    value: { type: String, default: null },
    error: { type: Object, default: null },
    loading: { type: Boolean, default: false },
    verified: { type: Boolean, default: false }
  },
  computed: {
    disabled() {
      return this.loading || this.verified
    },
    timeHuman() {
      const minutes = Math.trunc(this.time / 60)
      const seconds = this.time - (minutes * 60)
      return `0${minutes}:` + (seconds >= 10 ? seconds : `0${seconds}`)
    },
    isNewCodeDisabled() {
      return this.time > 0
    }
  },
  data() {
    return {
      time: 0,
      interval: null,
      code: ['', '', '', '']
    }
  },
  mounted() {
    this.newCode(null, true)
  },
  methods: {
    newCode($event, init = false) {
      if (this.time > 0) {
        return
      }
      if (!init) {
        this.$emit('send-new-code')
      }
      this.time = 180
      this.interval = setInterval(() => {
        --this.time
        if (this.time <= 0) {
          clearInterval(this.interval)
        }
      }, 1000)
    },
    input(index) {
      if (index !== 3 && this.code[index]) {
        if (this.code[index].length === 2) {
          this.code[index + 1] = this.code[index][1]
          this.code[index] = this.code[index][0]
        }
        this.$refs.input[index + 1].focus()
      }
      if (index === 3 && this.code[index].length === 2) {
        this.code[index] = this.code[index][1]
      }
      this.$emit('input', this.code.join(''))
    },
    keyDown($event) {
      if ($event.key === 'Backspace') {
        const index = +$event.target.getAttribute('uid')
        if (index !== 0)
          setTimeout(() => this.$refs.input[index - 1].focus(), 100)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.code-input {
  &__label {
    display: block;
    margin-bottom: 4px;
    width: 100%;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    color: #404040;

    > img {
      margin-left: 6px;
      width: 16px;
      height: 16px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;

    > input {
      display: block;
      width: 80px;
      height: 56px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #212121;

      background: #FFFFFF;
      border: 1px solid #D4D9E6;
      box-sizing: border-box;
      border-radius: 4px;

      transition: 200ms;

      @media screen and (max-width: 380px) {
        width: 70px;
      }
      @media screen and (max-width: 360px) {
        width: 65px;
      }

      &:focus {
        border-color: #7695CC;
      }

      &::placeholder {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #D4D9E6;
      }
    }
  }

  &__new-code {
    margin-top: 10px;

    display: flex;
    align-items: center;
    height: 40px;

    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }

    &.disabled {
      cursor: no-drop;
      > .text {
        color: #D4D9E6;
      }
    }

    > .text {
      margin-left: 10px;
      margin-right: 12px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #212121;
    }
    > .time {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #384673;
    }
  }

  &.error {
    input {
      color: #212121;
      border-color: #FFD8D8;
      background: #FFF5F5;
      &::placeholder {
        color: #212121;
      }
    }
  }

}
</style>

<style lang="scss">
.code-input__new-code {
  &.disabled {
    svg path {
      fill: #D4D9E6;
    }
  }
  svg path {
    fill: #212121;
  }
}
.code-input__label {
  > svg {
    width: 16px;
    height: 16px;
    margin-left: 6px;
    path {
      fill: #0AB258;
    }
  }
}
</style>
