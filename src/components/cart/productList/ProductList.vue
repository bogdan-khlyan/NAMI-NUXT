<template>
  <div class="product-list">
    <h2>корзина</h2>
    <div class="product-list__products">
      <product-card
        v-for="product in cartProducts" :key="product._id"
        :product="product"
      />
      <div v-if="cartProducts.length === 0"
           class="product-list__products--empty">
        <div class="content">
          <img src="@/assets/images/dino.gif" alt="">
          <span>Вы ещё не выбрали ни одного продукта</span>
        </div>
      </div>
    </div>
    <div class="product-list__cost">
      Общая сумма <span>{{cost}} ₽</span>
    </div>
    <div class="product-list__footer">
      <button class="product-list__footer--back"
              @click="close">
        {{windowWidth > 500 ? 'Вернуться к покупкам' : 'Назад'}}
      </button>
      <button class="product-list__footer--submit"
              :class="{'disabled': cartProducts.length === 0}"
              @click="send"
      >Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/cart/productList/productCard/ProductCard";

export default {
  name: 'product-list',
  components: { ProductCard },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    },
    cartProducts() {
      return this.$store.state.cart.products
    },
    cost() {
      return this.$store.getters['cart.cost']
    }
  },
  methods: {
    send() {
      if (this.cartProducts.length !== 0) {
        // this.$metrika.reachGoal('making-an-order')
        this.$emit('changeMode', 'ORDER')
      }
    },
    close() {
      this.$cart.hideCart()
    },
  }
}
</script>

<style scoped lang="scss">
.product-list {
  padding: 40px;

  width: 100%;
  height: 100vh;

  box-sizing: border-box;

  @media screen and (max-width: 640px) {
    padding: 80px 20px 20px 20px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }

  > h2 {
    position: relative;
    margin: 0 auto;
    width: max-content;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 66px;
    text-transform: uppercase;
    color: #312525;
    @media screen and (max-width: 640px) {
      font-size: 32px;
      line-height: 46px;

      &:after {
        right: -30px;
      }

      &:before {
        left: -30px;
      }
    }

    &:after, &:before {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      margin: auto;

      width: 10px;
      height: 10px;

      background: #312525;
      border-radius: 50%;
      @media screen and (max-width: 640px) {
        width: 6px;
        height: 6px;
      }
    }

    &:after {
      right: -50px;
      @media screen and (max-width: 640px) {
        right: -30px;
      }
    }

    &:before {
      left: -50px;
      @media screen and (max-width: 640px) {
        left: -30px
      }
    }

  }

  &__products {
    padding-top: 40px;
    min-height: calc(100vh - 350px);

    @media screen and (max-width: 640px) {
      padding-top: 10px;
      min-height: calc(100vh - 280px);
    }

    &--empty {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: calc(100vh - 350px);

      @media screen and (max-width: 640px) {
        height: calc(100vh - 280px);
      }
      .content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      img {
        display: block;
        width: 300px;
        object-fit: contain;
        @media screen and (max-height: 700px) {
          width: 260px;
        }
        @media screen and (max-height: 600px) {
          display: none;
        }
      }
      span {
        display: block;
        width: 100%;
        font-family: Neucha, sans-serif;
        font-weight: bold;
        font-size: 22px;
        @media screen and (max-width: 640px) {
          font-size: 18px;
        }

        @media screen and (max-height: 800px) {
          margin-top: -30px;
        }
      }


    }

  }

  &__cost {
    margin-top: 40px;
    margin-bottom: 30px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    text-align: left;
    letter-spacing: 0.05em;
    color: #000000;

    @media screen and (max-width: 640px) {
      margin-top: 20px;
      margin-bottom: 10px;

      font-size: 18px;
    }

    > span {
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.05em;

      color: #000000;
    }

  }

  &__footer {
    padding-bottom: 40px;
    text-align: left;

    > button {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.25)!important;
      border-radius: 8px!important;
    }

    &--back {
      margin-right: 20px;
      padding: 0 20px;
      height: 58px;

      cursor: pointer;

      border: none;

      background: #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      letter-spacing: 0.05em;

      color: #000000;

      transition: opacity 300ms;

      @media screen and (max-width: 640px) {
        height: 50px;
      }

      &:hover {
        opacity: 0.8;
      }

    }

    &--submit {
      padding: 0 20px;

      height: 58px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 0.05em;
      color: #FFFFFF;

      background: #312525;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
      border: none;

      transition: opacity 300ms;
      cursor: pointer;

      @media screen and (max-width: 640px) {
        height: 50px;
      }

      &.disabled {
        cursor: no-drop;
        background-color: #666666;
      }

      &:hover {
        opacity: 0.8;
      }

    }

  }

}
</style>
