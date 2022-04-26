<template>
  <div class="order-card-details">

    <div class="order-card-details__product"
         v-for="(detail,i) in orderInfo.details" :key="i">
      <div class="order-card-details__product-photo">
        <img :src="detail.images[0]" alt="">
      </div>

      <div class="order-card-details__product-info">

        <div class="order-card-details__product-title">{{ detail.title }}</div>
        <div class="order-card-details__product-details">
          {{ detail.ingredients.join(', ') }}
          <span>({{ detail.weight }} г)</span>
        </div>

        <div class="order-card-details__info-row">
          <div class="order-card-details__info-title">Кол-во</div>
          <div class="order-card-details__info">{{ detail.count }}</div>
        </div>

        <div class="order-card-details__info-row">
          <div class="order-card-details__info-title">Сумма</div>
          <div class="order-card-details__info">{{ detail.amount }}</div>
        </div>
      </div>

    </div>

    <hr>

    <div class="order-card-details__result">
      <div class="order-card-details__result-item">
        <div>Стоимость товаров</div>
        <div>{{ orderInfo.amountOrder }} ₽</div>
      </div>
      <div class="order-card-details__result-item">
        <div>Доставка</div>
        <div>{{ orderInfo.amountDelivery }} ₽</div>
      </div>
      <div class="order-card-details__result-item">
        <div>Итого к оплате</div>
        <div>{{ orderInfo.amountOrder + orderInfo.amountDelivery }} ₽</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OrderCardDetails",
  props: {
    orderInfo: {type: Object}
  }
}
</script>

<style lang="scss" scoped>
.order-card-details {

  position: relative;
  padding: 24px 0;

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    width: calc(100% + 32px);
    left: -16px;
    bottom: 0;
    background: #E9ECF2;
  }
  &__product {
    display: flex;
    margin-bottom: 24px;
  }
  &__product-info {
    flex: 1;
  }
  &__product-photo {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    background: #FFFFFF;
    border: 1px solid #F3F3F3;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 16px;

    img {
      width: 54px;
      height: 54px;
      object-fit: contain;
    }
  }

  &__product-title {
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    word-break: break-word;
    color: #121212;
    margin-bottom: 4px;
  }

  &__product-details {
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    text-align: left;
    word-break: break-word;
    color: #7F848B;
    margin-bottom: 16px;
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
    font-weight: 300;
    line-height: 18px;
    text-align: right;
    color: #7F848B;
  }
  &__info{
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    text-align: right;
    color: #121212;
  }

  hr {
    height: 1px;
    margin: -8px 0 16px 0;
    background: #E8E8E8;
    border-radius: 2px;
    border: none;
  }

  &__result {
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    text-align: right;
    color: #121212;

    max-width: 575px;

    &-item {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 24px;

      &:nth-child(1) {
        margin-bottom: 6px;
      }

      &:last-child {
        position: relative;
        margin-bottom: 0px;
        div:last-child {
          font-size: 18px;
          font-weight: 400;
        }
      }

      div:last-child {
        width: 72px;
      }
    }
  }

}
</style>
