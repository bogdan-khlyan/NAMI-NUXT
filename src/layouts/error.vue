<template>
  <div class="error-layout">
    <div class="error-layout__content">
      <div class="error-layout__image">
        <img src="@/assets/images/page404/4.svg" alt="">
        <img class="roll" src="@/assets/images/page404/roll.svg" alt="">
        <img src="@/assets/images/page404/4.svg" alt="">
      </div>
      <div class="error-layout__title">
        <span>УУПС...!!</span>
      </div>
      <div class="error-layout__text">
        <span>Похоже, кто-то укусил наш сервер</span>
      </div>
      <div class="error-layout__button">
        <nuxt-link to="/">Вернуться на сайт</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-layout',
  layout: 'base'
}
</script>

<style scoped lang="scss">
.error-layout {
  padding-top: 88px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background: url('../assets/images/page404/bg.png');
  background-size: 100% 100%;

  &__content {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  &__image {

    .roll {
      margin-left: 15px;
      margin-right: 15px;
      filter: drop-shadow(15px 12px 37px rgba(255, 255, 255, 0.7));
    }

  }

  &__title {
    margin-top: 50px;
    > span {
      font-family: Raleway, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;

      color: #FFFFFF;
    }
  }

  &__text {
    margin-top: 22px;
    > span {
      font-family: Raleway, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;

      color: #FFFFFF;
    }
  }

  &__button {
    width: max-content;
    margin: 40px auto 0 auto;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 302px;
      height: 60px;

      background: #F34942;
      border-radius: 4px;
      border: 1px solid #F34942;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      text-align: center;
      letter-spacing: 0.04em;
      text-decoration: none;

      color: #FFFFFF;

      cursor: pointer;
      transition: 200ms;

      &:hover {
        background: transparent;
      }

    }
  }

}
</style>
