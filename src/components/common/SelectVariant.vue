<template>
  <div class="select-variant"
       @click="($event) => $event.preventDefault()">
    <div v-if="label" class="select-variant__label">
      <span>{{ label }}</span>
    </div>
    <div class="select-variant__variants">
      <el-tooltip class="item" effect="dark"
                  v-for="variant in product.variants" :key="variant._id"
                  :content="variant.title"
                  placement="bottom">
        <div class="select-variant__variants--item"
             :class="{ 'active': isActiveVariant(variant) }"
             @click="changeVariant(variant)"
             :ref="`variant${variant._id}`">
          <div class="icon"
               :ref="`variant${variant._id}`">
            <i class="el-icon-loading"/>
          </div>
          <transition name="el-fade-in-linear">
            <div v-if="selectedVariantCount(variant)"
                 class="count">{{ selectedVariantCount(variant) }}</div>
          </transition>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import productMixin from "@/mixins/product.mixin";

export default {
  name: 'select-variant',
  mixins: [productMixin],
  props: {
    label: { type: String, default: null },
    product: { type: Object, default: null }
  },
  mounted() {
    this.getIcons()
  },
  methods: {
    getIcons() {
      this.product.variants
        .forEach(variant => this.getIcon(variant))
    },
    async getIcon(variant) {
      const blob = await this.$axios.$get(`/api/product/variant/icon/${variant.icon}`, { responseType: 'blob' })
      this.$refs[`variant${variant._id}`][0].innerHTML = await blob.text()
    },
    changeVariant(variant) {
      this.$emit('change', variant)
      this.$menu.changeProductVariant(this.productId, variant)
      // this.$cart.changeProductVariant(this.productId, variant)
    }
  }
}
</script>

<style scoped lang="scss">
.select-variant {
  margin-top: 14px;
  margin-bottom: 14px;

  &__label {
    //margin-bottom: 8px;
    text-align: left;
    > span {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #3D3D3D;
    }
  }

  &__variants {
    display: flex;
    flex-wrap: wrap;

    &--item {
      position: relative;
      margin-top: 4px;
      //margin-left: 5px;
      margin-right: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 36px;
      height: 36px;

      border: 1px solid #312525;
      border-radius: 50%;
      box-sizing: border-box;

      transition: 200ms;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }

      &:hover, &.active {
        background-color: #312525;
      }

      > .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
      }

      .count {
        position: absolute;
        bottom: -3px;
        right: -3px;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid #312525;
        background: #FFFFFF;

        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        color: #3D3D3D;
      }

    }

  }

}
</style>

<style lang="scss">
.select-variant__variants--item {
  .el-icon-loading {
    color: #312525;
  }
  svg {
    width: 20px;
    height: 20px;
    svg path {
      fill: #312525;
      transition: 200ms;
    }
  }
  &:hover, &.active {
    .el-icon-loading {
      color: #FFFFFF;
    }
    svg path {
      fill: #FFFFFF;
    }
  }
}
</style>
