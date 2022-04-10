<template>
  <div class="chapter-label">
    <div class="num">{{number}}</div>
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'chapter-label',
  props: {
    number: { type: Number },
    label: { type: String }
  }
}
</script>

<style scoped lang="scss">
.chapter-label {
  display: flex;
  align-items: center;

  > label {
    padding-left: 14px;
    display: block;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    color: #191919;

    @media screen and (max-width: 480px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  > .num {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 31px;
    height: 31px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    border-radius: 50%;

    color: #FFFFFF;

    background: #D34A44;
    @media screen and (max-width: 480px) {
      left: -8px;
    }
  }

}
</style>
