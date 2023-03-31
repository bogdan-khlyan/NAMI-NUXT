<template>
  <div class="default-page-wrapper">
    <div class="default-page">
      <h1>акции</h1>
      <div class="default-page__content">
        <div class="stocks">
          <stock
            class="stocks__item"
            :circle="5"
            :image="require('@/assets/images/stocks/image1.png')"
            title="скидка за отзыв"
            sum="* не суммируется с другими скидками"
          >
            <template v-slot:description>
              Оставьте отзыв во <a href="https://vk.com/topic-196997705_41675840" target="_blank">Вконтакте</a>, <a href="https://instagram.com/namisushidn">Instagram</a> или <a href="https://yandex.ru/maps/org/namisushi/156334799082/?ll.." target="_blank">Яндекс Картах</a> и получите скидку 5% на следующий заказ!
            </template>
            <template v-slot:footer>
              <el-tooltip
                class="item" effect="dark"
                placement="bottom">
                <span class="stocks__question">
                  <i class="el-icon-question"></i>
                  <span>Как это работает?</span>
                </span>
                <template v-slot:content>
                  <div class="stock__tooltip-text">Необходимо выполнить всего несколько шагов:</div>
                  <div class="stock__tooltip-text li">• оставить отзыв на любой из предложенных платформ</div>
                  <div class="stock__tooltip-text li">• сделать скрин</div>
                  <div class="stock__tooltip-text li">• отправить скрин и номер телефона нам в сообщения группы Вк, чтоб в следующий раз мы смогли применить скидку на ваш заказ!</div>
                </template>
              </el-tooltip>
            </template>
          </stock>
          <stock
            class="stocks__item"
            :circle="10"
            circle-pos="bottom-left"
            :image="require('@/assets/images/stocks/image2.png')"
            title="скидка на самовывоз"
            description="Скидка на любой заказ 10 %. Нужно только прийти и забрать"
            sum="* не суммируется с другими скидками"
          />
          <stock
            class="stocks__item"
            circle-pos="top-right"
            :image="require('@/assets/images/stocks/image3.png')"
            title="Акция ролл в подарок"
            description="Получи ролл бесплатно! Ролл Калипсо в подарок при заказе от 2 тысяч"/>
          <stock
            class="stocks__item"
            :circle="15"
            circle-pos="top-right"
            :image="require('@/assets/images/stocks/image4.png')"
            title="скидка именинника"
            description="Делайте заказ на любую сумму, а мы подарим скидку 15% в ваш День Рождения и 2 дня после него"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from "@/components/pages/stocksPage/components/Stock";

export default {
  name: 'Stocks',
  layout: 'base',
  components: { Stock },
  head: {
    title: `NamiSushi | Акции`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Акции и скидки от NamiSushi. Заказывайте вкусные суши, роллы и другую вкусную еду.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'акции доставка еды донецк, акции роллы донецк, акции суши донецк, скидки суши донецк, скидки роллы донецк, скидки доставка еды донецк'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.stocks {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px) { justify-content: center; }

  &__question {
    font-family: 'PT Sans Narrow', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #185598;
  }

  .stocks__item {
    &:nth-child(2), &:nth-child(3) {
      margin-top: 150px;
      @media screen and (max-width: 1100px) { margin-top: unset; }
    }
    @media screen and (max-width: 500px) {
      align-items: center;
    }
  }

}



.default-page {
  margin: 0 auto;

  padding: 88px 50px 60px;

  max-width: 1200px;
  width: 100%;

  box-sizing: border-box;

  @media screen and (max-height: 780px) {
    padding-top: 0;
  }

  @media screen and (max-width: 1250px) {
    padding-top: 20px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }


  > h1 {
    position: relative;

    width: max-content;
    margin: 30px auto;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 53px;

    text-transform: uppercase;

    color: #191919;

    @media screen and (max-width: 980px) {
      font-size: 42px;
    }
    @media screen and (max-width: 600px) {
      margin: 15px auto;
      font-size: 38px;
    }
    @media screen and (max-width: 420px) {
      font-size: 34px;
    }

    &:before, &:after {
      content: '';
      position: absolute;

      width: 10px;
      height: 10px;

      border-radius: 50%;
      background-color: #0C334A;
    }
    &:before {
      top: 15px;
      left: -40px;
      @media screen and (max-width: 980px) {
        left: -34px;
      }
      @media screen and (max-width: 600px) {
        top: 17px;
        left: -30px;
      }
      @media screen and (max-width: 420px) {
        left: -27px;
      }
    }
    &:after {
      top: 15px;
      right: -40px;
      @media screen and (max-width: 980px) {
        right: -34px;
      }
      @media screen and (max-width: 600px) {
        top: 17px;
        right: -30px;
      }
      @media screen and (max-width: 420px) {
        right: -27px;
      }
    }

  }

  .default-page__content {

  }

}
.default-page-wrapper {
  display: flex;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-height: 780px) {
    width: 100%;
    padding-top: 100px;
    display: block;
  }

  @media screen and (max-width: 1250px) {
    padding-top: 60px!important;
    display: block;
    width: 100%;
  }
}
</style>
