<template>
  <div class="categories">
    <div class="categories__item"
         v-for="category in categories" :key="category._id"
         @click="selectCategory(category)">
      <h3 :class="{ active: selectedCategory && (category._id === selectedCategory._id) }">
        {{ category.title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categories',
  model: { prop: 'value', event: 'change' },
  props: {
    value: { type: Object, default: null }
  },
  data() {
    return {
      selectedCategory: this.value
    }
  },
  computed: {
    categories () {
      return this.$store.state.menu.categories
    }
  },
  watch: {
    value(value) {
      this.selectedCategory = value
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
      this.$emit('change', category)
    }
  }
}
</script>

<style scoped lang="scss">
.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__item {
    margin: 4px;
    > h3 {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0;
      padding-left: 32px;
      padding-right: 32px;
      height: 64px;

      border-radius: 100px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 32px;
      text-transform: uppercase;
      color: #B3A296;
      background-color: #FFFFFF;

      cursor: pointer;
      transition: 300ms;

      @media screen and (max-width: 1200px) {
        font-size: 24px;
      }
      @media screen and (max-width: 1000px) {
        padding-left: 24px;
        padding-right: 24px;
        height: 50px;
        font-size: 20px;
      }
      @media screen and (max-width: 800px) {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 18px;
      }
      @media screen and (max-width: 480px) {
        padding-left: 16px;
        padding-right: 16px;
        height: 44px;
        font-size: 16px;
      }

      &:hover, &.active {
        background-color: #312525;
        color: #FFFFFF;
      }

    }
  }

}
</style>
