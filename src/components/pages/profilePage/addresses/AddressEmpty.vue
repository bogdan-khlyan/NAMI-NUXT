<template>
<div class="address-info-empty">
  <img class="address-info-empty__icon" src="@/assets/images/myAddress/logo.png"/>
  <div class="address-info-empty__description">
    Пока что у вас нет адресов для доставки. <br>
    Добавьте адреса и оформляйте заказы проще и быстрее :)
  </div>
</div>
</template>

<script>
export default {
  name: "AddressEmpty"
}
</script>

<style lang="scss" scoped>
.address-info-empty {

  display: flex;
  align-items: center;

  &__icon {
    margin-right: 22px;
  }
  &__description {
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #000000;
    word-break: break-word;
  }
}
</style>
