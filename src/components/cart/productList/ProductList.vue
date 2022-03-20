<template>
  <div class="product-list">
    <h2>корзина</h2>
    <div class="product-list__products">
      <product-card
        v-for="product in cartProducts" :key="product._id"
        :product="product"/>
      <div v-if="cartProducts.length === 0"
           class="product-list__products--empty">
        <span>Вы ещё не выбрали ни одного продукта</span>
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
              @click="send">Оформить заказ</button>
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
    padding: 60px 20px 20px 20px;
  }

  > h2 {
    margin: 0;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 66px;

    text-transform: uppercase;

    color: #312525;
    @media screen and (max-width: 640px) {
      font-size: 42px;
      line-height: 46px;
    }
  }

  &__products {
    padding-top: 40px;
    min-height: calc(100vh - 350px);

    @media screen and (max-width: 640px) {
      padding-top: 10px;
    }

    &--empty {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: calc(100vh - 350px);

      > span {
        font-family: Neucha, sans-serif;
        font-weight: bold;
        font-size: 22px;
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
