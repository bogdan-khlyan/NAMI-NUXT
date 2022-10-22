<template>
  <div class="empty">
    <div class="empty__title">
      <span>Пока что у вас нет заказов</span>
    </div>
    <div class="empty__text">
      <span>Но вы можете это исправить, перейдя в меню нашего ресторана :)</span>
    </div>
    <div class="empty__button">
      <nuxt-link to="/">
        Выбрать суши
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'empty'
}
</script>

<style lang="scss">
.empty {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-left: 38px;
  max-width: 360px;
  &__title {
    margin-bottom: 12px;
    > span {
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      color: #062D4E;
    }
  }
  &__text {
    max-width: 280px;
    > span {
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #212121;
    }
  }
  &__button {
    margin-top: 32px;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 350px;
      height: 56px;
      background: #062C4E;
      border-radius: 4px;

      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-decoration: none;
      color: #FFFFFF;

      transition: 300ms;
      &:hover {
        background: #0e508a;
      }
    }
  }
}
</style>
