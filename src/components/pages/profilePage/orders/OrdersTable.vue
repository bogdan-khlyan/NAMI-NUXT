<template>
<div class="orders-table">
  <el-table
    :data="tableData"
    class="orders-table">
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
      width="130">
      <template slot-scope="scope">{{ new Date(scope.row.dateOrder*1000).toLocaleDateString() }}</template>
    </el-table-column>
    <el-table-column
      label="Статус"
      width="160">
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
      <template slot-scope="scope">{{ scope.row.amountOrder +  scope.row.amountDelivery}} ₽</template>
    </el-table-column>
    <el-table-column width="140">
      <template slot-scope="scope">
        <button class="orders-table__btn">Повторить</button>
      </template>
    </el-table-column>
    <el-table-column type="expand" width="130">
      <template slot-scope="scope" style="width: max-content">
        <div class="orders-table__details">
          <el-table :data="scope.row.details">
            <el-table-column width="80">
              <template slot-scope="scope">
                <div class="orders-table__product-photo">
                  <img :src="scope.row.images[0]" alt="">
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Продукты"
              width="340px">
              <template slot-scope="scope">
                <div class="orders-table__product-title">
                  {{ scope.row.title }}
                </div>
                <div class="orders-table__product-info">
                     {{ scope.row.ingredients.join(', ') }} <span>({{scope.row.weight}} г)</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column width="80" label="Кол-во" prop="count"
                             class-name="product-count"/>
            <el-table-column
              class-name="product-amount"
              label="Сумма">
              <template slot-scope="scope">{{ scope.row.amount }} ₽</template>
            </el-table-column>
          </el-table>
          <hr>
          <div class="orders-table__result">
            <div class="orders-table__result-item">
              <div>Стоимость товаров</div>
              <div>{{ scope.row.amountOrder }} ₽</div>
            </div>
            <div class="orders-table__result-item">
              <div>Доставка</div>
              <div>{{ scope.row.amountDelivery }} ₽</div>
            </div>
            <div class="orders-table__result-item">
              <div>Итого к оплате</div>
              <div>{{ scope.row.amountOrder + scope.row.amountDelivery }} ₽</div>
            </div>
          </div>
        </div>
      </template>
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
          amountOrder: 1200,
          amountDelivery: 200,
          details:[
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:1,
              amount: 360
            },
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:3,
              amount: 1360
            }
          ]
        },
        {
          id:256,
          dateOrder: 1645692027,
          status:'completed',
          amountOrder: 500,
          amountDelivery: 200,
          details:[
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:2,
              amount: 360
            },
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:1,
              amount: 360
            }
          ]
        },
        {
          id:257,
          dateOrder: 1645864827,
          status:'processing',
          amountOrder: 2240,
          amountDelivery: 200,
          details:[
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:4,
              amount: 360
            },
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:5,
              amount: 360
            }
          ]
        },
        {
          id:258,
          dateOrder: 1646556027,
          status:'delivered',
          amountOrder: 584,
          amountDelivery: 200,
          details:[
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:1,
              amount: 360
            },
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:2,
              amount: 360
            }
          ]
        },
        {
          id:259,
          dateOrder: 1646556027,
          status:'cancelled',
          amountOrder: 900,
          amountDelivery: 200,
          details:[
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:3,
              amount: 360
            },
            {
              title: 'Маки суши с лососем',
              images: ['/api/product/image/6d171267-da32-4480-ae7c-92e7d7b0e0e4.png'],
              ingredients: ['Рис', 'лист нори', 'соус', 'лосось'],
              weight: 125,
              count:1,
              amount: 360
            }
          ]
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

  margin-bottom: 40px;

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

  .el-table.orders-table {
    padding: 12px 24px;
    box-shadow: 10px 10px 10px rgba(209, 222, 227, 0.05), -5px -5px 10px #FAFBFF;
    border-radius: 4px;
    margin-top: 16px;

    .el-table__cell {
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

  &__details {
    margin-left: 60px;
    width: max-content;

    .el-table {

      th {
        padding: 6px 0 !important;
        border-bottom: none !important;
      }
      td {
        vertical-align: top;
        padding: 8px 0 !important;
        border-bottom: none !important;

      }
      td.product-amount {
        .cell {
          font-size: 14px !important;
        }
      }
      td.product-count {
        .cell {
          margin-left: auto;
          margin-right: 20px;
          width: max-content;
          font-size: 14px !important;
          line-height: 18px !important;
        }
      }

      &:before {
        display: none;
      }
    }
    hr{
      height: 1px;
      margin-top: 8px;
      margin-bottom: 16px;
      background: #E8E8E8;
      border-radius: 2px;
      border: none;
    }
  }

  &__result {
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    text-align: right;
    color: #121212;

    &-item {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 6px;

      &:nth-child(2){
        margin-bottom: 24px;
      }
      &:last-child{
        margin-bottom: 34px;
        div:last-child {
          font-size: 18px;
          font-weight: 400;
        }
      }

      div:last-child {
        width: 60px;
        margin-left: 6px;
      }
    }
  }

  &__product-photo{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    background: #FFFFFF;
    border: 1px solid #F3F3F3;
    box-sizing: border-box;
    border-radius: 10px;

    img {
      width: 48px;
      height: 48px;
    }
  }
  &__product-title {
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: #121212;
    margin-bottom: 4px;
  }
  &__product-info {
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    color: #7F848B;
  }
}
</style>
