<template>
  <div class="reviews-page">
    <h1>Отзывы наших клиентов</h1>
    <div class="reviews-page__header">
      <base-submit-button>Оставить отзыв</base-submit-button>
    </div>
  </div>
</template>

<script>
import BaseSubmitButton from "@/components/common/ui/buttons/BaseSubmitButton.vue";

export default {
  name: 'profile',
  layout: 'base',
  components: { BaseSubmitButton }
}
</script>

<style lang="scss" scoped>
.reviews-page {
  padding-top: 100px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  > h1 {
    font-family: 'Neucha', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #053468;
  }
  &__header {
    > button {
      margin-left: auto;
      max-width: 270px;
    }
  }
}
</style>
