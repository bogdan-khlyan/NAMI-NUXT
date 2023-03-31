<template>
  <div class="reviews-page">
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
  &__content {
    max-width: 1200px;
  }
}
</style>
