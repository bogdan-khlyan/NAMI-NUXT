<template>
  <div class="orders">
    <page-title
      title-icon="orders"
      title="Мои заказы"/>

    <div v-loading="loading" class="orders__content">
      <orders-table
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
      loading: true,
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
      this.loading = true
      const { total, data } = await this.$orders.getOrders()
      this.orders.push(...data)
      this.total = total
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  margin-left: auto;
  width: 100%;
  transition: 0.2s;
  ::v-deep .el-loading-mask {
    background: #FFFFFF;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 10px 10px 10px rgba(212, 217, 230, 0.12), -5px -5px 10px rgba(212, 217, 230, 0.1);
  }
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
