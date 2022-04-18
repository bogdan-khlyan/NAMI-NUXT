<template>
  <div class="orders">
    <page-title
      title-icon="orders"
      title="Мои заказы"/>

    <div class="orders__content">
      <orders-table/>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import OrdersTable from "@/components/pages/profilePage/orders/OrdersTable";

export default {
  name: 'orders',
  components: { PageTitle, OrdersTable }
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
    .orders-table {
    margin-top: 16px;
  }
}
</style>
