<template>
  <div class="delivery-method">
    <div class="delivery-method__content">
      <checkbox :class="{'checkbox-disabled': cost < 500}"
                v-model="check"
                :show="true"
                :icon="require('@/assets/images/icons/delivery.svg')"
                :disabled="cost < 500"
                @input="emit">
        <div class="label">Курьер</div>
        <div>
          <span v-if="cost < 500" class="delivery-disabled">Сумма заказа для доставки курьером должна составлять не менее 500 ₽</span>
          <el-tooltip v-else-if="!order.deliveryCost" class="item" effect="dark" content="Введите адрес для расчета стоимости доставки" placement="top">
            <i class="el-icon-question"></i>₽
          </el-tooltip>
          <span v-else>{{order.deliveryCost}}₽</span>
        </div>
      </checkbox>
      <checkbox v-model="check"
                :show="false"
                :icon="require('@/assets/images/cart/shopping-bag.svg')"
                @input="emit">
        <div>Самовывоз</div><div v-if="!isDiscount" class="text-adaptive-small">Скидка - 10%</div>
      </checkbox>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/cart/order/deliveryMethod/Checkbox";

export default {
  name: 'delivery-method',
  components: { Checkbox },
  model: { prop: 'data', event: 'input' },
  props: {
    data: { type: Boolean },
    order: { type: Object }
  },
  data() {
    return {
      check: true
    }
  },
  computed: {
    isDiscount() {
      return this.$store.state.isDiscount
    },
    cartProducts() {
      return this.$store.state.orders.list
    },
    products() {
      return this.$store.state.menu.products.filter(item => {
        if(this.cartProducts.find(cartItem => item._id === cartItem._id))
          return item
      })
    },
    cost() {
      return this.$store.getters['cart.cost']
    }
  },
  mounted() {
    if (this.cost < 500) {
      this.check = false
      this.emit()
    }
  },
  methods: {
    emit: function () {
      this.$emit('input', this.check)
    }
  }
}
</script>

<style scoped lang="scss">
.delivery-method {
  padding-left: 45px;

  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 360px) {
    padding-right: 10px;
  }

  > .delivery-method__content {
    padding-top: 10px;
  }

  .text-adaptive-small {
    @media screen and (max-width: 420px) {
      font-size: 12px!important;
    }
  }

  .delivery-disabled {
    display: block;
    margin-right: -14px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.03em;

    color: #FF0000;
    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
    @media screen and (max-width: 570px) {
      font-size: 12px;
      line-height: 14px;
    }
    //@media screen and (max-width: 540px) {
    //  font-size: 12px;
    //  line-height: 14px;
    //}
    //@media screen and (max-width: 510px) {
    //  font-size: 8px;
    //  line-height: 10px;
    //}
    //@media screen and (max-width: 480px) {
    //  font-size: 10px;
    //  line-height: 12px;
    //}
    //@media screen and (max-width: 480px) {
    //  font-size: 8px;
    //  line-height: 10px;
    //}
  }

  .checkbox-disabled .label {
    color: #A5A5A5!important;
  }

}
</style>
