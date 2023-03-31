<template>
  <div class="reviews-page">
    <h1>Отзывы</h1>
    <div class="reviews-page__content">
      <div id="vk-reviews"/>
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
    title: `NamiSushi | Отзывы`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Отзывы о NamiSushi'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'отзывы доставка еды донецк, отзывы роллы донецк, отзывы суши донецк, скидки суши донецк, скидки роллы донецк, скидки доставка еды донецк'
      }
    ]
  },
  async mounted() {
    await this.$vk.initVk()
    this.$vk.initApp()
      .Widgets.Comments('vk-reviews', {
        limit: 10,
        attach: '*'
      })
  }
}
</script>

<style lang="scss" scoped>
.reviews-page {
  padding-top: 100px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  min-height: 100vh;
  @media screen and (max-width: 1250px) {
    padding-top: 70px;
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
  &__content {
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
