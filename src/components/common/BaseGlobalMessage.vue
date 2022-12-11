<template>
  <div v-if="config.infoMessageEnabled"
       class="base-global-message"
       ref="root">
    <p v-html="config.infoMessage"/>
    <i class="el-icon-close"
       @click="close"/>
  </div>
</template>

<script>
import configMixin from "@/api/config/config.mixin";

export default {
  name: 'base-global-message',
  mixins: [configMixin],
  methods: {
    close() {
      this.$refs.root.style.transform = `translateY(${this.$refs.root.offsetHeight}px)`
      setTimeout(() => this.$refs.root.remove(), 600)
    }
  }
}
</script>

<style scoped lang="scss">
.base-global-message {
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 26px;
  padding-bottom: 26px;

  width: 100%;
  border-top: 1px solid #eeeeee;
  background-color: #FFFFFF;

  z-index: 2000;

  transition-duration: 600ms;

  @media screen and (max-width: 980px) {
    bottom: 60px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .el-icon-close {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    height: max-content;
    font-size: 30px;
    color: rgba(196, 196, 196, 1);
    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin: unset;
      bottom: unset;
      top: 4px;
      right: 4px;
      font-size: 24px;
    }
  }

  ::v-deep p {
    margin: 0;
    max-width: 80vw;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      padding-left: 25px;
      padding-right: 25px;
    }
    @media screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 20px;
    }
    span {
      color: rgba(243, 73, 66, 1);
    }
    a {
      font-weight: 400;
      text-decoration: none;
      color: #074B72;
    }
  }
}
</style>
