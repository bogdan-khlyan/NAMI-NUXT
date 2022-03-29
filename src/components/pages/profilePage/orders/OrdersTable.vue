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
      prop="status"
      label="Статус"
      width="120">
    </el-table-column>
    <el-table-column
      label="Сумма"
    width="100">
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

  .el-table {
    .cell {
      font-family: Ubuntu, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
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
        margin-left: 24px;
        div {
          color: #FFFFFF;
          font-weight: 400;
        }
      }
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
            margin-right: 4px;
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
  }

}
</style>
