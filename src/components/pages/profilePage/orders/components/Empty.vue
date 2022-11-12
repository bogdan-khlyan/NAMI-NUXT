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
        <sushi-icon/>
        Выбрать суши
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import SushiIcon from "@/components/common/icons/SushiIcon";

export default {
  name: 'empty',
  components: { SushiIcon }
}
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-left: 38px;
  max-width: 360px;
  @media screen and (max-width: 980px) {
    margin: 0 auto;
    padding-left: 0;
  }
  &__title {
    margin-bottom: 12px;
    > span {
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      color: #062D4E;
      @media screen and (max-width: 980px) {
        font-size: 24px;
      }
      @media screen and (max-width: 420px) {
        font-size: 22px;
      }
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

      @media screen and (max-width: 980px) {
        width: 240px;
      }

      &:hover {
        background: #0e508a;
      }
      ::v-deep svg {
        margin-right: 8px;
      }
    }
  }
}
</style>
