<template>
  <div class="index-page">
    <banner/>
    <app-menu id="menu"/>
    <base-seo-text>
      <h1>Доставка суши, роллов и другой еды в Донецке и Макеевке по выгодным ценам!</h1>
      <h2>Самовывоз заказа со скидкой 10%!</h2>
      <h2>Ознакомиться с акциями нашего ресторана можно на странице <a href="/stocks">акций</a></h2>

      <h3>Категории продуктов</h3>
      <ul>
        <li>Роллы</li>
        <li>Суши</li>
        <li>Гунканы</li>
        <li>Горячие блюда</li>
        <li>Салаты</li>
        <li>Сеты</li>
      </ul>

      <h2>Заказать суши и роллы в с доставкой в Донецк и Макеевку</h2>
      <p>Лучшие роллы и суши в Донецке и Макеевке! Быстрая доставка заказа прямо к вам домой! Большой выбор суши, роллов и другой еды в нашем меню. Заказывайте с сайта и учавствуйте в <a href="/stocks">акциях</a></p>
      <p>Красная рыба с красной икрой…. Идеальное сочетание!!!</p>
      <p>
        Оставайтесь с нами - с NAMI вкусно!
        ГРАФИК РАБОТЫ
        с 10:00 до 19:00
        БЕЗ ВЫХОДНЫХ И ПЕРЕРЫВОВ!!!
      </p>
      <p>Самые свежие и вкусные роллы в Донецке - у нас!Роллы действительно большие, цены действительно низкие</p>
    </base-seo-text>
  </div>
</template>

<script>
import Banner from "@/components/pages/indexPage/banner/Banner";
import AppMenu from "@/components/pages/indexPage/menu/AppMenu";
import BaseSeoText from "@/components/common/BaseSeoText";

export default {
  name: 'index-page',
  components: { Banner, AppMenu, BaseSeoText },
  head: {
    link: [
      { href: 'https://namisushi.ru/', rel: 'canonical' }
    ]
  },
  beforeDestroy() {
    this.$store.commit('setIsMenu', false)
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 100vw;
  max-width: 100%;
}
</style>
