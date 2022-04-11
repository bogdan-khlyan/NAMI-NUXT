<template>
  <div class="address-info">

    <div class="address-info__label">
      <div class="address-info__number">{{ number }}</div>
      <div class="address-info__title">Адрес доставки</div>
    </div>

    <div class="address-info__information">
      <div class="address-info__city">{{ addressInfo.city }}</div>
      <div class="address-info__delimiter"/>
      <div class="address-info__street">{{ addressInfo.street }}</div>

      <img class="address-info__icon-edit"
           @click="$emit('editAddress', addressInfo.id)"
           src="@/assets/images/myAddress/icon-edit.svg" alt="edit">
    </div>

  </div>
</template>

<script>
export default {
  name: "AddressInfo",
  props: {
    number: Number,
    addressInfo: Object
  }
}
</script>

<style lang="scss" scoped>
.address-info {

  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 44px;
  }

  &__label {
    display: flex;
    align-items: center;
    width: max-content;
    margin-bottom: 4px;
  }

  &__title {
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    color: #404040;
  }

  &__number {
    height: 16px;
    width: 16px;

    font-family: Ubuntu, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #ffffff;

    margin-right: 16px;
    background: #062D4E;
    border-radius: 50%;
  }

  &__information {
    position: relative;

    display: flex;
    align-items: center;

    padding: 16px;
    background: #F8FAFF;
    border-radius: 4px;

    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
  }
  &__city {
    width: 88px;
    min-width: 88px;
    margin-right: 16px
  }
  &__delimiter {
    height: 24px;
    width: 1px;
    background: #D4D9E6;
    border-radius: 2px;
    margin-left: 12px;
    margin-right: 16px
  }
  &__street {
    padding-right: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &__icon-edit {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
}
</style>
