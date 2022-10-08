<template>
  <div class="product-card-content">

    <div class="product-card-content__name">
      <span :style="titleStyles">{{ product.title }}</span>
      <i>{{ weight }}г</i>
    </div>

    <div
      v-if="product.type === 'SINGLE'"
      class="product-card-content__info"
    >
      <div>
        <span class="description">{{ cardDescription }}</span>
      </div>
    </div>
    <select-variant
      v-else
      label="Выберите начинку"
      :product="product"
    />

  </div>
</template>

<script>
import SelectVariant from "@/components/common/SelectVariant";
import productMixin from "@/mixins/product.mixin";

export default {
  name: 'product-card-content',
  mixins: [productMixin],
  components: { SelectVariant },
  props: {
    product: { type: Object }
  }
}
</script>

<style scoped lang="scss">
.product-card-content {
  position: relative;

  > .select-variant {
    margin-top: 8px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 20px;
    height: 200px;
  }

  &__name {
    display: flex;
    height: 30px;

    > span {
      display: block;
      width: 100%;

      text-align: left;
      float: left;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.1em;
      text-transform: uppercase;

      color: #141414;

      transition: 0.3s;

      @media screen and (max-width: 700px) {
        font-size: 30px;
      }
      @media screen and (max-width: 700px) {
        font-size: 24px;
      }
    }

    > i {
      text-align: right;
      float: right;
      padding-top: 3px;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;

      color: #808080;

      transition: 0.3s;

      @media screen and (max-width: 700px) {
        font-size: 16px;
      }
      @media screen and (max-width: 700px) {
        font-size: 14px;
      }
    }
  }

  &__info {
    margin-top: 10px;
    padding-bottom: 65px;

    min-height: 50px;
    overflow: hidden;

    text-align: left;
    text-overflow: ellipsis;

    @media screen and (max-width: 700px) {
      margin-top: 20px;
    }

    .description {
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      white-space: pre-line;
      word-break: break-word;

      color: #808080;

      transition: 0.3s;

      @media screen and (max-width: 700px) {
        font-size: 18px;
      }
      @media screen and (max-width: 700px) {
        font-size: 15px;
      }
    }
  }
}
</style>
