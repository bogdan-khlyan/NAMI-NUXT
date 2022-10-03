<template>
  <div class="orders">
    <page-title
      title-icon="orders"
      title="Мои заказы"/>

    <div class="orders__content">
      <orders-info/>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import OrdersInfo from "@/components/pages/profilePage/orders/OrdersInfo";

export default {
  name: 'orders',
  components: {PageTitle, OrdersInfo}
}
</script>

<style lang="scss" scoped>
.orders {
  margin-left: auto;
  transition: 0.2s;
  @media screen and (max-width: 1140px) {
    padding-left: 70px;
    margin-left: 0;
  }
  @media screen and (max-width: 1060px) {
    padding-left: 0;
    margin-left: auto;
  }
}
</style>
