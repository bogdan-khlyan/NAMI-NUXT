<template>
  <label class="code-input"
         :class="[{ error: error.$error }]">
    <span class="code-input__label">Код из смс</span>
    <span class="code-input__content"
          @keydown="keyDown">
      <input v-for="(item, index) in code"
             v-model="code[index]"
             type="text" maxlength="2" placeholder="_"
             @input="input(index)"
             :uid="index"
             ref="input">
    </span>
    <span class="code-input__new-code"
          :class="{ disabled: isNewCodeDisabled }"
          @click="newCode">
      <base-svg
        :src="require('assets/images/icons/arrow-circle.svg')"/>
      <span class="text">Отправить код еще раз</span>
      <span v-if="time > 0" class="time">({{timeHuman}})</span>
    </span>
  </label>
</template>

<script>
import BaseSvg from "@/components/common/BaseSvg";

export default {
  name: 'phone-input',
  props: {
    value: { type: String, default: null },
    error: { type: Object, default: null }
  },
  components: { BaseSvg },
  computed: {
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
      code: ['', '', '', '', '', '']
    }
  },
  mounted() {
    this.newCode()
  },
  methods: {
    newCode() {
      if (this.time > 0) {
        return
      }
      this.time = 10
      this.interval = setInterval(() => {
        --this.time
        if (this.time <= 0) {
          clearInterval(this.interval)
        }
      }, 1000)
    },
    input(index) {
      if (index !== 5 && this.code[index]) {
        if (this.code[index].length === 2) {
          this.code[index + 1] = this.code[index][1]
          this.code[index] = this.code[index][0]
        }
        this.$refs.input[index + 1].focus()
      }
      if (index === 5 && this.code[index].length === 2) {
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
  }
  &__content {
    display: flex;
    justify-content: space-between;

    > input {
      display: block;
      width: 56px;
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
    margin-top: 20px;

    display: flex;
    align-items: center;
    height: 40px;

    cursor: pointer;

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
      border-color: #FFD8D8;
      background: #FFF5F5;
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
</style>
