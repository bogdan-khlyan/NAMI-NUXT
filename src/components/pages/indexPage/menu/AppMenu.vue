<template>
  <div class="menu">
    <h2>МЕНЮ</h2>

    <div class="menu__categories">
      <categories
        v-model="selectedCategory"/>
    </div>

    <keep-alive>
      <transition
        v-if="!refresh"
        name="el-fade-in-linear">
        <div class="menu__products">
          <product-list
            :category="selectedCategory"/>
        </div>
      </transition>
    </keep-alive>

  </div>
</template>

<script>
import ProductList from "@/components/pages/indexPage/menu/products/ProductList";
import Categories from "@/components/pages/indexPage/menu/categoties/Categories";

export default {
  name: 'app-menu',
  components: {ProductList, Categories},
  computed: {
    queryProduct() {
      return this.$route.query.product
    },
    categories() {
      return this.$store.state.menu.categories
    }
  },
  data() {
    return {
      refresh: false,
      selectedCategory: null
    }
  },
  watch: {
    selectedCategoryId() {
      this.refresh = true
      this.$nextTick(() => this.refresh = false)
    },
    categories() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.queryProduct) {
        const category = this.categories
          .find(item => item.productIds.indexOf(this.queryProduct) !== -1)
        this.$nextTick(() => {
          this.selectedCategory = category
          this.$nextTick(() => this.$scrollTo(`#product-card-${this.queryProduct}`, { offset: -100 }))
          this.$router.push({ query: { product: undefined } })
        })

      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  padding-bottom: 1px;
  min-height: 600px;

  > h2 {
    padding-top: 60px;

    position: relative;

    width: max-content;
    margin: 0 auto;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 66px;

    color: #312525;

    &:after {
      position: absolute;
      content: '';
      left: -40px;
      top: 85px;
      width: 10px;
      height: 10px;
      border-radius: 50%;

      background: #312525;
    }

    &:before {
      position: absolute;
      content: '';
      right: -40px;
      top: 85px;
      width: 10px;
      height: 10px;
      border-radius: 50%;

      background: #312525;
    }

  }

  &__categories {
    margin-top: 30px;
  }

  &__products {
    margin-top: 30px;
    margin-bottom: 60px;
  }

}
</style>

<style lang="scss">
.menu .el-tabs__nav-scroll {
  @media screen and (max-width: 1250px) {
    max-width: 85vw;
  }
}

.menu .el-tabs__item {
  font-family: Neucha, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 33px;

  text-transform: uppercase;

  color: #988D8D;

  &.is-active {
    color: #312525 !important;
  }

  &:hover {
    color: #312525 !important;
  }

}

.menu .el-tabs__active-bar {
  background-color: #312525;
}

.menu .el-tab-pane {
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.menu .el-tabs__header {
  max-width: calc(100% - 40px);
  width: max-content;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.menu .el-tabs__nav-prev > .el-icon-arrow-left, .el-tabs__nav-next > .el-icon-arrow-right {
  font-size: 24px;
  font-weight: 900;
  color: #000000;
}

.menu .el-tabs__nav-prev {
  width: 40px;
}

.el-tabs__nav-wrap {
  &.is-scrollable {
    padding: 0 40px !important;
  }
}
</style>
