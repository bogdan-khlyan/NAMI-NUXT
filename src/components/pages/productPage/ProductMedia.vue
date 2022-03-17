<template>
  <div class="product-media">
    <h1>{{product.title}}</h1>
    <div class="product-media__image">
      <img class="image" :src="product.images[0]" alt="">
      <img class="bg" src="@/assets/images/product/bg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-media',
  props: {
    product: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
.product-media {
  min-width: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }

  > h1 {
    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 37px;
    letter-spacing: 0.08em;

    color: #000000;

    @media screen and (max-width: 1100px) {
      font-size: 30px;
    }
  }

  &__image {
    position: relative;

    .image {
      width: 280px;
      height: 280px;
      object-fit: contain;
      @media screen and (max-width: 480px) {
        width: 224px;
      }
    }

    .bg {
      position: absolute;
      top: 130px;
      //left: 40px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: -1;

      @media screen and (max-width: 480px) {
        top: 100px;
        width: 250px;
        object-fit: contain;
      }
    }

  }

}
</style>
