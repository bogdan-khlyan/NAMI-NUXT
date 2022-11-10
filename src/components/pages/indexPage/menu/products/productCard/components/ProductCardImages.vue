<template>
  <div class="product-card-images">
    <img v-if="product.type === 'SINGLE'" :src="product.images[0]" alt="">
    <img v-else-if="selectedVariant"
         :src="`/api/product/variant/image/${selectedVariant.image}`" alt=""
         :key="selectedVariant.image">
  </div>
</template>

<script>
import productMixin from "@/mixins/product.mixin";

export default {
  name: 'product-card-images',
  mixins: [productMixin],
  props: {
    product: { type: Object }
  }
}
</script>

<style scoped lang="scss">
.product-card-images {
  > img {
    width: 180px;
    height: 150px;
    object-fit: contain;
    filter: drop-shadow(15px 12px 12px rgba(203, 182, 137, 0.7));

    @media screen and (max-width: 700px) {
      width: 160px;
      height: 160px;
    }
    //@media screen and (max-width: 400px) {
    //  width: 160px;
    //  height: 160px;
    //}
  }
}
</style>
