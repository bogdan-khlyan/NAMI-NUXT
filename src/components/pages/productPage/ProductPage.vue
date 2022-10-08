<template>
  <div v-if="product" class="product">
    <div class="product__content">
      <div class="product__media">
        <product-media
          :product="product"
          :selected-variant="selectedVariant"
        />
      </div>
      <div class="product__info">
        <product-ingredients
          :product="product"/>
        <div class="product__info--descr">{{product.description}}</div>
        <select-variant
          v-if="product.type === 'VARIANT'"
          :product="product"
          @change="changeVariant"/>
        <div class="product__info--cost">
          <span>{{cost}} ₽ - {{weight}} г</span>
        </div>
        <div class="product__info--actions">
          <button v-if="count === 0"
            @click="toCard">Добавить в коризну</button>
          <plus-minus
            v-else
            :product-id="productId"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMedia from "@/components/pages/productPage/ProductMedia";
import ProductIngredients from "@/components/pages/productPage/ProductIngredients";
import PlusMinus from "@/components/common/ui/buttons/PlusMinus";
import SelectVariant from "@/components/common/SelectVariant";

export default {
  name: 'product',
  components: { PlusMinus, ProductMedia, ProductIngredients, SelectVariant },
  layout: 'base',
  data() {
    return {
      selectedVariant: null
    }
  },
  computed: {
    weight() {
      if (this.product.type === 'SINGLE') {
        return this.product.weight
      } else if (this.selectedVariant) {
        return this.selectedVariant.weight
      }
      return 0
    },
    cost() {
      if (this.product.type === 'SINGLE') {
        return this.product.cost
      }
      if (this.cartProduct?.selectedVariant) {
        return this.cartProduct.selectedVariant.cost
      }
      if (this.selectedVariant) {
        return this.selectedVariant.cost
      }
      return 0
    },
    cartProduct() {
      return this.$store.state.cart.products
        .find(item => item._id === this.productId)
    },
    productId() {
      return this.product._id
    },
    product() {
      return this.$store.state.menu.products
        .find(product => product.$id === this.$route.params.id)
    },
    count() {
      if (this.cartProduct) {
        return this.cartProduct.count
      } else {
        return 0
      }
    }
  },
  created() {
    if (!this.product) {
      this.$router.push('/404')
    }
  },
  methods: {
    changeVariant(variant) {
      this.selectedVariant = variant
    },
    toCard: function () {
      // this.$store.commit('pushProductToCart', this.productId)
      this.$cart.addProduct({
        ...this.product,
        selectedVariant: this.selectedVariant
      })
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

  &__media {
    padding-right: 20px;
  }

  &__info {
    padding-top: 30px;
    min-width: 300px;
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
