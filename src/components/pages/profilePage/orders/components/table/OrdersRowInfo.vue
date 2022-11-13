<template>
  <div class="orders-row-info">

    <div class="orders-row-info__main">

      <div class="orders-row-info__item-number">
        {{ number }}
      </div>
      <div class="orders-row-info__item-id">
        {{ order.number }}
      </div>
      <div class="orders-row-info__item-date">
        {{ new Date(order.createdAt).toLocaleDateString() }}
      </div>
      <div class="orders-row-info__item-status"
           :class="`orders-row-info__item-status--${order.condition}`"
           style="visibility: hidden">
        {{ conditionName }}
      </div>
      <div class="orders-row-info__item-amount">
        {{ order.cost }} ₽
      </div>

    </div>

    <div class="orders-row-info__buttons">
      <div class="orders-row-info__item-btn-action"
           @click="repeatOrder">
        Повторить
      </div>
      <div class="orders-row-info__item-btn-action"
           @click="clickDetails">
        Детали
        <i v-if="loading" class="el-icon-loading"/>
        <img v-else
             class="orders-row-info__show-details"
             :class="{'orders-row-info__show-details--active': showDetails}"
             src="@/assets/images/orders/icon-expand.svg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import orderMixin from "@/components/pages/profilePage/orders/components/order.mixin";

export default {
  name: "orders-row-info",
  mixins: [orderMixin],
  props: {
    order: {type: Object},
    number: {type: Number},
    showDetails: {type: Boolean}
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style lang="scss">
.orders-row-info {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 16px 24px;

  transition: 0.2s;

  &__main {
    display: flex;
    align-items: center;
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

  &__item-id {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: right;
    color: #121212;

    width: 56px;
    height: 24px;

    margin-right: 48px;
  }

  &__item-date {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: right;
    color: #121212;

    width: 88px;
    height: 24px;

    margin-right: 48px;
  }

  &__item-status {
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

    margin-right: 48px;
    background: #FFF7EB;
    border-radius: 50px;

    &--NEW {
      background: #E4F7FF;
      color: #1F86F8;
    }

    &--DONE {
      background: #E9FFED;
      color: #31AA27;
    }

    &--IN_PROGRESS {
      background: #FFF7EB;
      color: #FF8B20;
    }

    //&--delivered {
    //  background: #E9FFED;
    //  color: #31AA27;
    //}

    &--REJECT {
      background: #FFF0F0;
      color: #F93232;
    }
  }

  &__item-amount {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    color: #121212;
    width: 60px;
    margin-right: 40px;
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

    img, .el-icon-loading {
      margin-left: 10px;
    }

    &:hover, &:active {
      background: #D7EAFF;
    }
  }

  &:before {
    content: '';
    height: 1px;
    width: 100%;
    background: rgba(212, 217, 230, 0.5);

    position: absolute;
    top: 0;
    left: 0;
  }

  &__show-details {

    pointer-events: none;
    transition: 0.2s;

    &--active {
      transform: rotate(180deg);
    }
  }

  @media screen and (max-width: 730px) {
    display: block;
    &__main {
      margin-bottom: 16px;
    }
    &__item-amount {
      margin-right: 0;
    }
    &__buttons {
      margin-right: 14px;
      justify-content: flex-end;
    }
  }
}
</style>
