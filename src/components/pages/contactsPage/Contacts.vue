<template>
  <div class="default-page-wrapper">
    <base-seo-text>
      <p>Добро пожаловать на страницу контактов NamiSushi в городе Донецк! Мы рады быть на связи с вами и готовы помочь вам с любыми вопросами или запросами.</p>
      <p>Ниже представлены наши контактные данные:</p>
      <ul>
        <li>Телефон: +7 949 700 97 91</li>
        <li>Адрес: г. Донецк, ул. Университетская, 33</li>
        <li>График работы: Ежедневно с 10:00 до 19:00</li>
      </ul>
      <p>Если у вас есть вопросы о нашем меню, акциях или условиях доставки, не стесняйтесь звонить нам. Наш дружелюбный и профессиональный персонал всегда готов помочь вам и предоставить всю необходимую информацию.</p>
      <p>Пожалуйста, обратите внимание, что у нас отсутствует электронная почта в данный момент. Но вы всегда можете связаться с нами по указанному номеру телефона.</p>
      <p>Приходите по указанному адресу в наш ресторан, чтобы насладиться атмосферой и вкусом нашей японской кухни прямо на месте.</p>
      <p>Мы работаем для вас каждый день, с 10:00 до 19:00. Не стесняйтесь посетить нас в удобное для вас время, и мы с удовольствием предложим вам лучшие блюда и обслуживание.</p>
      <p>Спасибо, что выбрали NamiSushi! Мы с нетерпением ждем вашего визита и готовы сделать ваше гастрономическое путешествие незабываемым.</p>
    </base-seo-text>
    <div class="default-page">
      <h1>контакты</h1>
      <div class="default-page__content">
        <info/>
        <widgets/>
      </div>
    </div>
  </div>
</template>

<script>
import Info from "@/components/pages/contactsPage/components/Info";
import Widgets from "@/components/pages/contactsPage/components/Widgets";
import BaseSeoText from "@/components/common/BaseSeoText.vue";

export default {
  name: 'Contacts',
  layout: 'base',
  components: { Info, Widgets, BaseSeoText },
  head: {
    title: `Контакты - Свяжитесь с нами для вопросов и заказа суши | NamiSushi`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Свяжитесь с нами для получения дополнительной информации, ответов на вопросы или оформления заказа суши. Наши контактные данные доступны на странице контактов. Мы готовы помочь вам насладиться свежими и вкусными роллами, нигири и сашими от NamiSushi. Обращайтесь к нам сегодня!'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
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
