<template>
  <div v-if="windowWidth > 600" class="orders-table">

    <orders-row-header/>

    <div class="orders-table__row"
         v-for="(item,index) in orders" :key="item.id">

      <orders-row-info
        :order="item"
        :number="index + 1"
        :show-details="selectedOrder === item._id"
        @click-details="showDetails"
      />

      <el-collapse-transition v-if="item.full">
        <orders-row-details
          v-show="selectedOrder === item._id"
          :order-info="item"
        />
      </el-collapse-transition>

    </div>

  </div>
  <div v-else>
    <order-card-info
      v-for="(item,index) in orders" :key="item.id"
      :order="item"
      :number="index + 1"
      :show-details="selectedOrder === item._id"
      @click-details="showDetails"
    />
  </div>
</template>

<script>
import OrdersRowHeader from "@/components/pages/profilePage/orders/components/table/OrdersRowHeader";
import OrdersRowInfo from "@/components/pages/profilePage/orders/components/table/OrdersRowInfo";
import OrdersRowDetails from "@/components/pages/profilePage/orders/components/table/OrderTableDetails";
import OrderCardInfo from "@/components/pages/profilePage/orders/components/card/OrderCardInfo";

export default {
  name: 'orders-table',
  components: {
    OrdersRowHeader,
    OrdersRowInfo,
    OrdersRowDetails,
    OrderCardInfo
  },
  props: {
    orders: { type: Array }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  data() {
    return {
      selectedOrder: null
    }
  },
  methods: {
    showDetails(orderId) {
      if (this.selectedOrder === orderId) {
        this.selectedOrder = null
      } else if (this.selectedOrder) {
        this.selectedOrder = null
        setTimeout(() => this.selectedOrder = orderId, 500)
      } else {
        this.selectedOrder = orderId
      }
    }
  }
}
</script>

<style lang="scss">
.orders-table {
  max-width: 796px;
  margin-bottom: 40px;
  padding: 12px 0;

  background: #FFFFFF;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 10px 10px 10px rgba(212, 217, 230, 0.12), -5px -5px 10px rgba(212, 217, 230, 0.1);
  transition: 0.2s;

  &__row {
    position: relative;

    &:hover {
      &:after {
        opacity: 1;
        transition: 0.1s;
      }

      .orders-row-info {
        background: #FBFCFF;
      }

      .order-table-details {
        background: #FBFCFF;

        .el-table {
          background: #FBFCFF;

          tr, th.el-table__cell {
            background: #FBFCFF;
          }
        }
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: -6px;
      z-index: 1;
      height: 100%;
      width: 6px;

      background: #062D4E;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      opacity: 0;
    }

    &:nth-child(2) {
      .orders-row-info {
        &:before {
          display: none;
        }
      }
    }
  }

}
</style>
