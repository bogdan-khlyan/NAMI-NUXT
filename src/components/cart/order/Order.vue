<template>
  <div class="order"
       v-loading="loading">

    <h2>Оформление заказа</h2>

    <button v-if="windowWidth > 640"
            class="order__btn-back"
            @click="$emit('changeMode', 'INDEX')">
      <i class="el-icon-back"></i>
    </button>

    <div class="order__chapter order__delivery-method">
      <chapter-label
        label="Способ доставки"
        :number="1"/>
      <delivery-method
        v-model="order.delivery"
        :order="order"/>
    </div>
    <div class="order__chapter order__form">
      <chapter-label
        label="Данные для доставки"
        :number="2"/>
      <order-form
        v-model="order"
        ref="orderChapter3"/>
    </div>
    <div class="order__chapter order__confirm">
      <confirm-order
        :delivery="order.delivery"
        :delivery-cost="order.deliveryCost"
        @send="createOrder"/>
    </div>


    <div style="height: 40px"></div>


  </div>
</template>

<script>
import DeliveryMethod from "@/components/cart/order/deliveryMethod/DeliveryMethod";
import OrderForm from "@/components/cart/order/orderForm/OrderForm";
import ConfirmOrder from "@/components/cart/order/confirmOrder/ConfirmOrder";
import ChapterLabel from "@/components/cart/order/common/ChapterLabel";

export default {
  name: 'cart-order',
  components: { DeliveryMethod, OrderForm, ConfirmOrder, ChapterLabel },
  computed: {
    windowWidth () {
      return this.$store.state.windowWidth
    },
    cartProducts() {
      return this.$store.state.cart.products
    }
  },
  data() {
    return {
      loading: false,
      order: {
        // products: null,
        deliveryCost: null,
        delivery: true,
        address: '',
        phone: '',
        username: '',
        additionalInformation: ''
      }
    }
  },
  methods: {
    createOrder: function () {
      if (this.$refs.orderChapter3.validate(true)) {
        let tmp = {
          products: this.cartProducts.map(product => ({
            productId: product._id,
            variantId: product.selectedVariant?._id,
            number: product.count
            // ...product,

          })),
          ...this.order,
          phone: this.order.phone // .slice(0, 8) + this.order.phone.slice(9)
        }
        if (!tmp.deliveryCost && tmp.delivery) tmp.deliveryCalculateManually = true
        if (tmp.additionalInformation.length === 0)
          delete tmp.additionalInformation
        if (tmp.username.length === 0)
          delete tmp.username
        this.loading = true
        this.$orders.createOrder(tmp)
            .then(() => {
              this.$cart.hideCart()
              this.$store.commit('clearCartProducts')
              this.$store.commit('setPhoneNumber', tmp.phone)
              // this.$metrika.reachGoal('create-order')
              this.$nextTick(() => this.$router.push('/successful-order'))
            })
            .finally(() => this.loading = false)
      }
    },
  }
}
</script>

<style scoped lang="scss">
.order {
  position: relative;

  width: 100%;
  height: 100vh;
  padding: 40px;

  box-sizing: border-box;

  background: #D0C0B4;

  @media screen and (max-width: 640px) {
    padding: 60px 20px 20px 20px;
    //min-height: calc(100vh - 42px);
  }


  > h2 {
    position: relative;
    margin: 0 auto 24px auto;
    width: max-content;


    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 35px;
    color: #191919;

    @media screen and (max-width: 640px) {
      margin-top: 16px;
      margin-bottom: 16px;

      font-size: 26px;
      line-height: 30px;
    }

    &:after, &:before {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      margin: auto;

      width: 5px;
      height: 5px;

      background: #312525;
      border-radius: 50%;
    }

    &:after {
      right: -20px;
    }

    &:before {
      left: -20px;
    }

  }

  &__chapter {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 16px;

    background-color: #FFFFFF;
    border-radius: 8px;
  }

  > .order__btn-back {
    position: fixed;
    top: 22px;
    right: 574px;

    width: 52px;
    height: 52px;

    border: none;
    border-radius: 50%;

    background-color: #0C334A;

    cursor: pointer;

    transition: 0.3s;

    &:hover { background-color: #173e54; }

    > i {
      font-size: 26px;
      font-weight: bold;
      color: #FFFFFF;
    }

  }

}
</style>
