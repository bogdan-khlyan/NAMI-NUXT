<template>
<div class="orders-row-header">
  <div class="orders-row-header__item orders-row-header__item--number">
    Номер
  </div>
  <div class="orders-row-header__item orders-row-header__item--date">
    Дата заказа
  </div>
  <div class="orders-row-header__item orders-row-header__item--status"
       style="visibility: hidden">
    Статус
  </div>
  <div class="orders-row-header__item orders-row-header__item--amount">
    Сумма
  </div>
  <hr>
</div>
</template>

<script>
export default {
  name: "OrdersRowHeader"
}
</script>

<style lang="scss">
.orders-row-header {
  display: flex;
  flex-wrap: wrap;

  padding: 16px 24px 0 24px;

  &__item {
    font-family: Manrope, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: right;
    color: #7F848B;
    margin-right: 48px;
    height: 18px;

    &--number {
      width: 56px;
      margin-left: 24px;
    }
    &--date{
      width: 88px;
    }
    &--status {
      width: 106px;
      text-align: left;
    }
    &--amount {
      width: 56px;
      margin-right: 0;
    }
  }

  hr {
    width: 100%;
    height: 1px;

    margin-top: 16px;
    margin-bottom: 0;
    border: none;
    background: #062D4E;
  }
}
</style>
