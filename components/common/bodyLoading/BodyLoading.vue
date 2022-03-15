<template>
  <div class="body-loading">
    <div class="body-loading__inner">
      <div class="body-loading__content">
        <div class="body-loading__content--logo">
          <svg width="123" height="53" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.943848 13.4832H2.13033V2.18371C5.35826 4.52092 6.98095 8.01796 6.98095 12.5694C6.98095 12.8681 6.98095 13.1844 6.9635 13.4832H8.14999V0.26825H6.9635L7.12054 7.01629C6.23068 4.02888 4.06709 1.56865 0.943848 0.057373V13.4832ZM9.51285 13.4832H10.6121C10.6121 11.5853 10.6819 9.98614 10.8389 8.65059H16.8237C16.9807 9.75769 17.0505 11.1987 17.0505 13.0087C17.0505 13.1317 17.0505 13.2899 17.0505 13.4832H18.1672C18.1846 13.1141 18.1846 12.7627 18.1846 12.4288C18.1846 7.29746 16.9633 3.44897 13.84 0.0925191C10.6993 3.46654 9.4954 7.33261 9.4954 12.4991C9.4954 12.8154 9.4954 13.1493 9.51285 13.4832ZM11.0483 7.45562C11.4671 5.57531 12.2871 3.64227 13.84 1.63895C15.3929 3.69499 16.2479 5.61045 16.6317 7.45562H11.0483ZM19.5338 13.4832H20.7203V1.83225C22.9014 2.39459 24.1751 4.34519 24.1751 7.35018C24.1751 7.50834 24.1576 7.6665 24.1576 7.82465H25.2045C25.2045 7.6665 25.2045 7.52591 25.2045 7.38533C25.2045 4.48578 26.3561 2.55274 28.3801 1.83225V13.4832H29.5666V0.26825C27.0715 0.584564 25.4663 1.90254 24.6462 4.23976C24.0006 2.02555 22.186 0.584564 19.5338 0.26825V13.4832ZM31.6991 13.4832H32.9205V0.26825H31.6991V13.4832Z" fill="white"/>
          </svg>
        </div>
        <div class="body-loading__content--spinner">
          <spinner/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/common/bodyLoading/Spinner";
import {productService} from "@/components/products/products.service";

export default {
  name: 'body-loading',
  components: { Spinner },
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
        this.$emit('done'), 500)
  }
}
</script>

<style scoped lang="scss">
.body-loading {
  position: fixed;
  top: 0; left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: #0F2130;

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

    &--logo {
      display: flex;
      justify-content: center;
    }

    &--spinner {
      margin-top: 20px;
    }

  }

}
</style>
