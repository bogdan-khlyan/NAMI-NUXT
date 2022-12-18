<template>
  <div class="reviews-page">
    <h1>Ваш отзыв о ресторане</h1>
    <stars/>
  </div>
</template>

<script>
import Stars from "@/components/pages/newReviewPage/components/Stars.vue";

export default {
  name: 'profile',
  layout: 'base',
  components: { Stars }
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
}
</style>
