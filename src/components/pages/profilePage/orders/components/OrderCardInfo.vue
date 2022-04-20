<template>
  <div class="order-card-info">

    <div class="order-card-info__header">
      <div class="order-card-info__item-number">
        {{ number }}
      </div>
      <div class="order-card-info__buttons">
        <div class="orders-row-info__item-btn-action">
          Повторить
        </div>
        <div class="order-card-info__item-btn-action" @click="clickDetails">
          Детали
          <img class="order-card-info__show-details"
               :class="{'order-card-info__show-details--active': showDetails}"
               src="@/assets/images/orders/icon-expand.svg" alt="">
        </div>
      </div>
    </div>

    <el-collapse-transition>
      <order-card-details v-show="showDetails" :order-info="orderInfo"/>
    </el-collapse-transition>

    <div class="order-card-info__information">
      <div class="order-card-info__info-row">
        <div class="order-card-info__info-title">Номер заказа</div>
        <div class="order-card-info__info">{{ orderInfo.id }}</div>
      </div>
      <div class="order-card-info__info-row">
        <div class="order-card-info__info-title">Дата заказа</div>
        <div class="order-card-info__info">{{ new Date(orderInfo.dateOrder * 1000).toLocaleDateString() }}</div>
      </div>
      <div class="order-card-info__info-row">
        <div class="order-card-info__info-title">Статус</div>
        <div class="order-card-info__info-status"
             :class="`order-card-info__info-status--${orderInfo.status}`">
          {{ getStatusName }}
        </div>
      </div>
      <div class="order-card-info__info-row">
        <div class="order-card-info__info-title">Сумма</div>
        <div class="order-card-info__info order-card-info__info--amount">
          {{ orderInfo.amountOrder + orderInfo.amountDelivery }} ₽
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import OrderCardDetails from "@/components/pages/profilePage/orders/components/OrderCardDetails";

export default {
  name: "OrderCardInfo",
  components: {
    OrderCardDetails
  },
  props: {
    orderInfo: {type: Object},
    number: {type: Number},
    showDetails: {type: Boolean}
  },
  computed: {
    getStatusName() {
      const status = this.orderInfo.status
      return status === 'new' ? 'Новый' : status === 'completed' ? 'Завершен' : status === 'processing' ?
        'В обработке' : status === 'delivered' ? 'Доставляется' : 'Отменен'
    }
  },
  methods: {
    clickDetails() {
      this.$emit('clickDetails', this.showDetails ? null : this.orderInfo.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.order-card-info {

  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 10px 10px 10px rgba(212, 217, 230, 0.12), -5px -5px 10px rgba(212, 217, 230, 0.1);
  border-radius: 4px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item-number {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    width: 24px;
    height: 24px;
    background: #062D4E;

    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  &__item-btn-action {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Manrope, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    width: 108px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #D7EAFF;
    box-sizing: border-box;
    border-radius: 20px;
    color: #062D4E;

    cursor: pointer;

    transition: 0.2s;

    img {
      margin-left: 10px;
    }

    &:hover, &:active {
      background: #D7EAFF;
    }
  }

  &__main {

  }

  &__information {
    margin-top: 16px;
  }

  &__info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__info-title {
    font-family: Manrope, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
    color: #7F848B;
  }

  &__info {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: right;
    color: #121212;

    &--amount {
      font-weight: 400;
    }
  }

  &__info-status {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: Manrope, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

    width: 106px;
    height: 36px;

    background: #FFF7EB;
    border-radius: 50px;

    &--new {
      background: #E4F7FF;
      color: #1F86F8;
    }

    &--completed {
      background: #E9FFED;
      color: #31AA27;
    }

    &--processing {
      background: #FFF7EB;
      color: #FF8B20;
    }

    &--delivered {
      background: #E9FFED;
      color: #31AA27;
    }

    &--cancelled {
      background: #FFF0F0;
      color: #F93232;
    }
  }

  &__show-details {
    pointer-events: none;
    transition: 0.2s;

    &--active {
      transform: rotate(180deg);
    }
  }
}
</style>
