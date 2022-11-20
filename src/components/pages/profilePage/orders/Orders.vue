<template>
  <div class="orders">
    <page-title
      title-icon="orders"
      title="Мои заказы"/>

    <div v-loading="loading && !orders.length" class="orders__content">
      <template v-if="orders.length > 0">
        <orders-table
          :orders="orders"
        />
        <base-submit-button
          v-if="orders.length !== total"
          class="orders__btn-more"
          :loading="loading"
          @click.native="getOrders"
        >Показать еще</base-submit-button>
      </template>
      <empty v-else/>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import OrdersTable from "@/components/pages/profilePage/orders/components/table/OrdersTable";
import Empty from "@/components/pages/profilePage/orders/components/Empty";
import BaseSubmitButton from "@/components/common/ui/buttons/BaseSubmitButton";
import ordersMixin from "@/api/orders/orders.mixin";

export default {
  name: 'orders',
  mixins: [ordersMixin],
  components: { PageTitle, OrdersTable, Empty, BaseSubmitButton },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    getOrders() {
      this.loading = true
      this.$orders.getOrders()
        .finally(() => this.loading = false)
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  margin-left: auto;
  width: 100%;
  transition: 0.2s;
  padding-bottom: 40px;

  &__btn-more {
    max-width: 350px;
    margin: 20px auto 0 auto;
  }

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
