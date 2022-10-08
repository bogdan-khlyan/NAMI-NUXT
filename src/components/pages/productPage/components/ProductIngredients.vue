<template>
  <div class="product-ingredients">
    <label>Состав</label>
    <div class="product-ingredients__list" ref="list">
      <template v-for="item in product.ingredients">
        <span>{{item}}</span>
        <i ref="points"/>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-ingredients',
  props: {
    product: { type: Object, required: true }
  },
  data() {
    return {
      callCount: 0
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  watch: {
    windowWidth() {
      this.checkPointsOffset()
    }
  },
  mounted() {
    this.checkPointsOffset()
  },
  methods: {
    checkPointsOffset() {
      this.$refs.points?.forEach(item => {
        item.style.display = 'inline-block'
        if (item.offsetLeft === 10) {
          item.style.display = 'none'
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.product-ingredients {

  > label {
    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    text-align: left;
    letter-spacing: 0.08em;

    color: #000000;
  }

  &__list {
    position: relative;
    margin-top: 6px;

    > span {
      position: relative;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      letter-spacing: 0.08em;

      color: #050505;

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }

    > i {
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;

      width: 6px;
      height: 6px;

      border-radius: 50%;
      background-color: #0C334A;

      &:last-child { display: none!important; }
    }

  }

}
</style>
