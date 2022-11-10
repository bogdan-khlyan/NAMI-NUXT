<template>
  <div class="favorites-empty">
    <div class="favorites-empty__title">
      <p>Пока что список пуст</p>
    </div>
    <div class="favorites-empty__content">
      <p>Добавляйте товар в избранное,</p>
      <p>кликнув на <heart-icon/> в карточке товара</p>
    </div>
    <div class="favorites-empty__button">
      <nuxt-link to="/?menu">
        <sushi-icon/>
        Выбрать суши
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import HeartIcon from "@/components/common/icons/HeartIcon";
import SushiIcon from "@/components/common/icons/SushiIcon";

export default {
  name: 'favorites-empty',
  layout: 'base',
  components: { HeartIcon, SushiIcon }
}
</script>

<style lang="scss" scoped>
.favorites-empty {
  padding-top: 28px;
  margin: 0 auto;
  max-width: max-content;
  &__title {
    margin: 0 auto 12px auto;
    > p {
      margin: 0;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      color: #062D4E;
    }
  }
  &__content {
    margin: 0 auto;
    max-width: max-content;
    > p {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #212121;
      ::v-deep svg {
        margin-left: 2px;
        margin-right: 2px;
      }
    }
  }
  &__button {
    margin-top: 32px;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 280px;
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
      ::v-deep svg {
        margin-right: 8px;
      }
    }
  }
}
</style>
