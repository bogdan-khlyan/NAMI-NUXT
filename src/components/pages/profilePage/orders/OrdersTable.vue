<template>
<div class="orders-table">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      class-name="number-column"
      width="60">
    </el-table-column>
    <el-table-column
      prop="id"
      label="Номер"
      width="80">
    </el-table-column>
    <el-table-column
      label="Дата заказа"
      width="120">
      <template slot-scope="scope">{{ new Date(scope.row.dateOrder*1000).toLocaleDateString() }}</template>
    </el-table-column>
    <el-table-column
      label="Статус"
      width="120">
      <template slot-scope="scope">
        <div class="orders-table__btn-order-status"
             :class="`orders-table__btn-order-status--${scope.row.status}`">
          {{ getStatusName(scope.row.status) }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="Сумма"
      class-name="amount-column"
      width="120">
      <template slot-scope="scope">{{ scope.row.amount }} ₽</template>
    </el-table-column>
    <el-table-column width="140">
      <template slot-scope="scope">
        <button class="orders-table__btn">Повторить</button>
      </template>
    </el-table-column>
    <el-table-column type="expand" width="140">
      <div class="orders-table__detalis">
        Детали
      </div>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
export default {
  name: "OrdersTable",
  data(){
    return{
      tableData:[
        {
          id:255,
          dateOrder: 1645519227,
          status:'new',
          amount: 1200
        },
        {
          id:256,
          dateOrder: 1645692027,
          status:'completed',
          amount: 500
        },
        {
          id:257,
          dateOrder: 1645864827,
          status:'processing',
          amount: 2240
        },
        {
          id:258,
          dateOrder: 1646556027,
          status:'delivered',
          amount: 584
        },
        {
          id:259,
          dateOrder: 1646556027,
          status:'cancelled',
          amount: 900
        }
      ]
    }
  },
  methods: {
    getStatusName(type){
      return type==='new'?'Новый': type==='completed' ? 'Завершен' : type==='processing' ?
        'В обработке': type==='delivered'?'Доставляется': 'Отменен'
    }
  }
}
</script>

<style lang="scss">
.orders-table {

  &__btn{
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;

    width: 108px;
    min-width: 108px;
    height: 36px;

    padding: 0;
    background: #FFFFFF;
    border: 1px solid #D7EAFF;
    box-sizing: border-box;
    border-radius: 20px;
    color: #062D4E;

    cursor: pointer;

    transition: 0.2s;

    &:hover, &:active {
      background: #D7EAFF;
    }
  }
  &__btn-order-status {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: Manrope, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

    width: 106px;
    height: 36px;

    background: #FFF7EB;
    border-radius: 50px;

    &--new {
      background: #E4F7FF;
      color: #1F86F8;
    }
    &--completed {
      background: #E9FFED;
      color: #31AA27;
    }
    &--processing {
      background: #FFF7EB;
      color: #FF8B20;
    }
    &--delivered {
      background: #E9FFED;
      color: #31AA27;
    }
    &--cancelled {
      background: #FFF0F0;
      color: #F93232;
    }
  }
  .el-table {
    padding: 12px 24px;
    box-shadow: 10px 10px 10px rgba(209, 222, 227, 0.05), -5px -5px 10px #FAFBFF;
    border-radius: 4px;
    margin-top: 16px;

    &__cell {
      padding: 15px 0;
      div.cell {
        font-family: Ubuntu, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        color: #121212;
      }
    }
    td.number-column {
      div.cell{
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        width: 24px;
        height: 24px;
        background: #062D4E;

        div {
          color: #FFFFFF;
          font-weight: 400;
        }
      }
    }
    td.amount-column > .cell{
      font-weight: 400 !important;
    }
    td.el-table__expand-column {

      font-family: Ubuntu, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;

      .el-table__expand-icon {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 110px;
        height: 36px;

        padding: 0;
        background: #FFFFFF;
        border: 1px solid #D7EAFF;
        box-sizing: border-box;
        border-radius: 20px;
        color: #062D4E;

        cursor: pointer;

        transition: 0.2s;
        &:hover, &:active {
          background: #D7EAFF;
        }

        &--expanded {
          transform: none;

          i {
            &:after {
              transform: rotate(-90deg) !important;
            }
          }
        }
        i {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          top: 0;
          left: 0;
          margin: 0;

          &:before {
            content: 'Детали';
            font-family: Ubuntu, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 24px;
            margin-right: 6px;
          }
          &:after {
            content: "\e6e0";
            transform: rotate(90deg);
            font-size: 10px;
            font-weight: 600;
            color: #062D4E;
            transition: 0.2s;
          }

        }
      }
    }

    thead {
      th.el-table__cell.is-leaf {
        border-color: #062D4E;

        > div.cell {
          font-family: Manrope, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #7A7A7A;
        }
      }
    }

    tr:last-child td {
      border: none;
    }
  }

}
</style>
