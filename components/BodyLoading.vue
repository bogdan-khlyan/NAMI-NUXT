<template>
  <div class="body-loading">
    <div class="body-loading__inner">
      <div class="body-loading__content">
        <span class="spinner"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {productService} from "~/components/products/products.service";

export default {
  name: 'body-loading',
  data() {
    return {
      promise: null
    }
  },
  created() {
    this.promise = productService.getAll(this)
  },
  async mounted() {
    await this.promise
    setTimeout(() =>
        this.$emit('done'), 100)
  }
}
</script>

<style scoped lang="scss">
.body-loading {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: #064163;

  &__inner {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner {
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;
  }

}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
