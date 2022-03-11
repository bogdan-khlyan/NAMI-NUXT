<template>
  <label class="code-input">
    <span class="code-input__label">Код из смс</span>
    <span class="code-input__content"
          @keydown="keyDown">
      <input v-for="(item, index) in code"
             v-model="code[index]"
             type="text" maxlength="1" placeholder="_"
             @input="input(index)"
             :uid="index"
             ref="input">
    </span>
  </label>
</template>

<script>
export default {
  name: 'phone-input',
  data() {
    return {
      code: ['', '', '', '', '', '']
    }
  },
  // watch: {
  //   code: {
      // handler() {
        // console.log('watch')
        // console.log(this.$refs.input1)
        // this.$refs.input1.focus()
      // },
      // deep: true
    // }
  // },
  methods: {
    input(index) {
      // console.log(value, index)
      // console.log(this.$refs.input)
      // console.log(this.$refs.input[index + 1])
      if (index !== 5 && this.code[index])
        this.$refs.input[index + 1].focus()
    },
    keyDown($event) {
      if ($event.key === 'Backspace') {
        const index = +$event.target.getAttribute('uid')
        if (index !== 0)
          this.$refs.input[index - 1].focus()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.code-input {
  &__label {
    display: block;
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
}
</style>
