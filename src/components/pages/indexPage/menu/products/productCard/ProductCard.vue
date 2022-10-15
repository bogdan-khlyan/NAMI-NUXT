<template>
  <nuxt-link
    class="product-card"
    :class="[
      { 'active': count > 0 },
      { 'variant-many': isVariant && product.variants.length > 4 }
    ]"
    :to="`/product/${product.$id}`"
  >

    <product-card-images
      :product="product"
    />

    <product-card-content
      :product="product"
    />

    <product-card-footer
      :product="product"
    />

  </nuxt-link>
</template>

<script>
import ProductCardImages from "@/components/pages/indexPage/menu/products/productCard/components/ProductCardImages";
import ProductCardContent from "@/components/pages/indexPage/menu/products/productCard/components/ProductCardContent";
import ProductCardFooter from "@/components/pages/indexPage/menu/products/productCard/components/ProductCardFooter";
import productMixin from "@/mixins/product.mixin";

export default {
  name: 'home',
  mixins: [productMixin],
  components: { ProductCardImages, ProductCardContent, ProductCardFooter },
  props: {
    product: {type: Object}
  }
}
</script>

<style scoped lang="scss">
.product-card {
  position: relative;

  margin: 20px 20px 40px 20px;
  padding: 20px 30px 30px 30px;
  box-sizing: border-box;
  width: 270px;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  text-decoration: none;

  background: #FAFAFA;
  border-radius: 8px;

  transition: 0.3s;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 40vw;
  }
  @media screen and (max-width: 700px) {
    padding-top: 50px;
    padding-bottom: 30px;
    width: 60vw;
    height: auto;
  }
  @media screen and (max-width: 540px) {
    width: 78vw;
    margin: 20px 60px;
    &:first-child {
      margin-top: 0
    }
  }
  @media screen and (max-width: 480px) {
    margin: 40px 40px 20px 40px;
  }
  @media screen and (max-width: 440px) {
    margin: 20px;
  }

}
</style>

<style lang="scss">
.product-card {

  &.active {
    background: #312525 !important;

    .product-card-content__name > h4,
    .product-card-content__name > i,
    .product-card-content__info .description {
      color: #FFFFFF !important;
    }

    .price > span {
      color: #FFFFFF !important;
    }

    .select-variant {
      .select-variant__label > span {
        color: #FFFFFF!important;
      }

      .select-variant__variants--item {
        border-color: #FFFFFF!important;
        background-color: #312525!important;
        > .icon > svg path {
          fill: #FFFFFF;
        }
        &:hover {
          border-color: #ececec;
          background-color: #FFFFFF!important;
          > .icon > svg path {
            fill: #312525!important;
          }
        }
        &.active {
          border-color: #ececec!important;
          background-color: #FFFFFF!important;
          > .icon > svg path {
            fill: #312525;
          }
        }
      }
    }

    .plus-minus {
      .plus-minus__circle {
        background: #FFFFFF !important;
        color: #000000 !important;
      }
      .plus-minus__value {
        color: #FFFFFF!important;
      }
    }

  }

  .select-variant {
    padding-bottom: 40px;
  }

}
</style>
