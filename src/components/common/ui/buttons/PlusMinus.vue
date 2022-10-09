<template>
  <div class="plus-minus" @click="($event) => $emit('click', $event)">
    <div class="plus-minus__circle"
         @click="dec">-</div>
    <div class="plus-minus__value">{{ value }}</div>
    <div class="plus-minus__circle"
         @click="inc">+</div>
  </div>
</template>

<script>
export default {
  name: 'plus-minus',
  model: { prop: 'value', event: 'input' },
  props: {
    value: { type: Number }
  },
  methods: {
    inc($event) {
      $event.preventDefault()
      this.$emit('input', this.value + 1)
    },
    dec($event) {
      $event.preventDefault()
      this.$emit('input', this.value - 1)
    }
  }
}
</script>

<style scoped lang="scss">
  .plus-minus {
    display: flex;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */

    &__circle {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;

      border-radius: 50%;

      background: #312525;

      color: #FFFFFF;

      cursor: pointer;
    }

    &__value {
      width: 16px;
      height: 30px;
      line-height: 30px;
      padding-left: 8px;
      padding-right: 8px;


      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      text-align: center;

      letter-spacing: 0.05em;

      color: #353535;
    }

  }
</style>
