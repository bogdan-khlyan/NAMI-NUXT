<template>
  <div class="orders">
    <page-title
      title-icon="orders"
      title="Мои заказы"/>

    <div class="orders__content">
      <orders-table
        v-if="windowWidth > 600 && orders.length > 0"
        :orders="orders"
      />
      <empty v-if="orders.length === 0"/>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import OrdersTable from "@/components/pages/profilePage/orders/components/table/OrdersTable";
import Empty from "@/components/pages/profilePage/orders/components/Empty";

export default {
  name: 'orders',
  components: {PageTitle, OrdersTable, Empty},
  data() {
    return {
      orders: [],
      total: 0
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  created() {
    this.getOrders()
  },
  methods: {
    async getOrders() {
      const { total, data } = await this.$orders.getOrders()
      this.orders.push(...data)
      this.total = total
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  margin-left: auto;
  width: 100%;
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
