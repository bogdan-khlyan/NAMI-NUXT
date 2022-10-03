<template>
  <nuxt-link
    class="product"
    :class="count > 0 ? 'product_active' : ''"
    :to="`/product/${product.$id}`"
  >
    <div class="product__slider">
      <img :src="product.images[0]" alt="">
    </div>
    <div class="product__content"
         :style="contentStyles">
      <div class="product__content--name">
        <span :style="titleStyles">{{ product.title }}</span>
        <i>{{ weight }}г</i>
      </div>
      <div v-if="product.type === 'SINGLE'"
           class="product__content--info">
        <div>
          <span class="description">{{ product.ingredients.join(', ') }}</span>
        </div>
      </div>
      <select-variant
        v-else
        label="Выберите начинку"
        :product="product"
        @change="changeVariant"/>
    </div>
    <div class="product__footer">
      <div class="price">
        <span>{{ cost }}₽</span>
      </div>
      <div @click="stopPropagation" class="btn">
        <button
          v-if="count < 1"
          class="product__btn-to-cart"
          @click="toCard">В корзину</button>
        <plus-minus
          v-else
          class="plus-minus-btn"
          :product-id="product._id"/>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import PlusMinus from "@/components/common/ui/buttons/PlusMinus";
import SelectVariant from "@/components/common/SelectVariant";

export default {
  name: 'home',
  components: { PlusMinus, SelectVariant },
  props: {
    product: {type: Object}
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
    contentStyles() {
      if (this.product.type === 'VARIANT') {
        return 'min-height: 160px'
      }
      return null
    },
    titleStyles() {
      if (this.product.title.length > 14) {
        return 'font-size: 16px;line-height: 18px;'
      } else {
        return ''
      }
    },
    description() {
      if (this.product.description.length > 75) {
        return this.product.description.slice(0, 75) + '...'
      } else {
        return this.product.description
      }
    },
    cartProduct() {
      return this.$store.state.cart.products
        .find(item => item._id === this.product._id)
    },
    count() {
      if (this.cartProduct) {
        return this.cartProduct.count
      } else {
        return 0
      }
    }
  },
  data() {
    return {
      selectedVariant: null
    }
  },
  methods: {
    changeVariant(variant) {
      this.selectedVariant = variant
    },
    toCard($event) {
      $event.preventDefault()
      // this.$metrika.reachGoal('add-product-to-card')
      // this.$store.commit('pushProductToCart', this.product._id)
      this.$cart.addProduct({
        ...this.product,
        selectedVariant: this.selectedVariant
      })
    },
    stopPropagation($event) {
      $event.stopPropagation()
    }
  }
}
</script>

<style scoped lang="scss">
.product_active {
  background: #312525 !important;

  .product__content--name > span,
  .product__content--name > i,
  .product__content--info .description {
    color: #FFFFFF !important;
  }

  .price > span {
    color: #FFFFFF !important;
  }

}

.product {
  position: relative;
  width: 270px;

  margin: 20px 20px 40px 20px;
  border-radius: 8px;

  background: #FAFAFA;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);

  box-sizing: border-box;
  padding: 20px 30px 30px 30px;

  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;

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

  &__btn-to-cart {
    width: 100px;
    height: 35px;

    border: none;

    background: #312525;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
    border-radius: 8px;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #FFFFFF;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
      background: #504040;
    }

  }

  &__like {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 5;
  }

  &__icons {
    position: absolute;
    top: -20px;
    right: 0;

    display: flex;

    &--item {
      position: relative;
      width: 25px;

      > .app-icon {
        position: absolute;
      }

    }

  }

  &__slider {
    width: 100%;
    margin: 0 auto;

    > img {
      width: 180px;
      height: 150px;
      object-fit: contain;
      filter: drop-shadow(15px 12px 12px rgba(203, 182, 137, 0.7));

      @media screen and (max-width: 700px) {
        width: 200px;
        height: 200px;
      }
      @media screen and (max-width: 400px) {
        width: 160px;
        height: 160px;
      }
    }

    &--item {
      > img {
        width: 180px;
        height: 150px;
        object-fit: contain;
        filter: drop-shadow(15px 12px 12px rgba(203, 182, 137, 0.7));

        @media screen and (max-width: 700px) {
          width: 200px;
          height: 200px;
        }
        @media screen and (max-width: 400px) {
          width: 160px;
          height: 160px;
        }
      }

    }

  }

  &__content {
    position: relative;

    > .select-variant {
      margin-top: 8px;
    }

    @media screen and (max-width: 700px) {
      margin-top: 20px;
      height: 200px;
    }

    &--name {
      display: flex;
      height: 30px;

      > span {
        display: block;
        width: 100%;

        text-align: left;
        float: left;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;

        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #141414;

        transition: 0.3s;

        @media screen and (max-width: 700px) {
          font-size: 30px;
        }
        @media screen and (max-width: 700px) {
          font-size: 24px;
        }
      }

      > i {
        text-align: right;
        float: right;
        padding-top: 3px;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;

        color: #808080;

        transition: 0.3s;

        @media screen and (max-width: 700px) {
          font-size: 16px;
        }
        @media screen and (max-width: 700px) {
          font-size: 14px;
        }
      }
    }

    &--info {
      margin-top: 10px;
      padding-bottom: 65px;

      min-height: 50px;
      overflow: hidden;

      text-align: left;
      text-overflow: ellipsis;

      @media screen and (max-width: 700px) {
        margin-top: 20px;
      }

      .description {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        white-space: pre-line;
        word-break: break-word;

        color: #808080;

        transition: 0.3s;

        @media screen and (max-width: 700px) {
          font-size: 18px;
        }
        @media screen and (max-width: 700px) {
          font-size: 15px;
        }
      }
    }

  }

  &__footer {
    padding-top: 20px;

    position: absolute;
    bottom: 30px;

    display: flex;
    width: 210px;

    .plus-minus-btn {
      height: 35px;
    }

    @media screen and (max-width: 800px) {
      width: 32vw;
      min-width: 32vw;
      max-width: 32px;
    }
    @media screen and (max-width: 700px) {
      width: 52vw;
      min-width: 52vw;
      max-width: 52px;
    }
    @media screen and (max-width: 540px) {
      width: 63vw;
      min-width: 63vw;
      max-width: 63px;
    }

    > .price {
      margin-right: auto;
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 27px;
      line-height: 30px;

      color: #000000;

      transition: 0.3s;
    }

  }

}
</style>

<style lang="scss">
.product .el-carousel__container {
  height: 165px;
  @media screen and (max-width: 700px) {
    height: 235px;
  }
  @media screen and (max-width: 400px) {
    height: 195px;
  }
}

.product .el-carousel__indicators {
  display: none;
}

.product .el-carousel__arrow--left, .product .el-carousel__arrow--right {
  margin-top: -15px;
  border: none;
  background-color: transparent;
  color: #000000;

  > i {
    font-size: 22px;
    font-weight: 900;
  }

  &:hover {
    background-color: transparent;
  }

}

.product_active {
  .select-variant__label > span {
    color: #FFFFFF;
  }

  .select-variant__variants--item {
    border-color: #FFFFFF;
    background-color: #312525!important;
    > svg path {
      fill: #FFFFFF;
    }
    &:hover {
      border-color: #ececec;
      background-color: #FFFFFF!important;
      > svg path {
        fill: #312525;
      }
    }
    &.active {
      border-color: #ececec;
      background-color: #FFFFFF!important;
      > svg path {
        fill: #312525;
      }
    }
  }

}

.product_active .product__like .like__test {
  fill: #FFFFFF !important;
}

.product_active .plus-minus__circle {
  background: #FFFFFF !important;
  color: #000000 !important;
}

.product_active .plus-minus__value {
  color: #FFFFFF;
}
</style>
