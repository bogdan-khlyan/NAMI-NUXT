<template>
  <div v-if="product" class="product">
    <div class="product__content">
      <div class="product__media">
        <product-media
          :product="product"/>
      </div>
      <div class="product__info">
        <product-ingredients
          :product="product"/>
        <div class="product__info--descr">{{product.description}}</div>
        <div class="product__info--cost">
          <span>{{product.cost}} ₽ - {{product.weight}} г</span>
        </div>
        <div class="product__info--actions">
          <button v-if="count === 0"
            @click="toCard">Добавить в коризну</button>
          <plus-minus v-else
            :id="productId"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMedia from "@/components/pages/productPage/ProductMedia";
import ProductIngredients from "@/components/pages/productPage/ProductIngredients";
import PlusMinus from "@/components/common/ui/buttons/PlusMinus";

export default {
  name: 'product',
  components: { PlusMinus, ProductMedia, ProductIngredients },
  layout: 'base',
  computed: {
    productId() {
      return this.$route.params.id
    },
    product() {
      return this.$store.state.products.list
        .find(product => product._id === this.productId)
    },
    count() {
      const orderProduct = this.$store.state.orders.list
        .find(item => item._id === this.productId)
      return orderProduct ? orderProduct.count : 0
    }
  },
  methods: {
    toCard: function () {
      this.$store.commit('pushProductToCart', this.productId)
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 88px;

  width: 100vw;
  min-height: calc(100vh - 88px);


  &__content {
    max-width: 1200px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    @media screen and (max-width: 480px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }


  &__info {
    padding-top: 30px;
    text-align: left;

    @media screen and (max-width: 768px) {
      padding-top: 0;
    }

    &--descr {
      margin-top: 24px;
      padding-right: 20px;
      max-width: 600px;

      box-sizing: border-box;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;

      letter-spacing: 0.01em;

      color: #242424;
    }

    &--cost {
      margin-top: 26px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      letter-spacing: 0.05em;

      color: #000000;
    }

    &--actions {
      padding-top: 24px;

      > button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 218px;
        height: 47px;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        text-align: justify;
        letter-spacing: 0.08em;

        color: #FFFFFF;

        background: #0C334A;
        border-radius: 2px;
        border: none;

        cursor: pointer;
        transition: 200ms;

        &:hover {
          background: #1C657E;
        }

      }

    }

  }

}
</style>

<style lang="scss">
.product__info--actions {

  .plus-minus {

    .plus-minus__circle {
      background-color: rgba(12, 51, 74, 0.25) !important;
    }

  }

}
</style>
