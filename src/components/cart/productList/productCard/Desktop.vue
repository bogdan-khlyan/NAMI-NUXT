<template>
  <div
    class="product-card-desktop"
    :class="{ 'product-card-desktop_variant-many': isVariant && product.variants.length > 4 }"
  >
    <div class="product-card-desktop__img">
      <img v-if="isSingle" :src="product.images[0]" alt="">
      <img v-else-if="selectedVariant"
           :src="`/api/product/variant/image/${selectedVariant.image}`" alt=""
           :key="selectedVariant.image">
    </div>
    <div class="product-card-desktop__info">
      <div class="product-card-desktop__info--name">
        <h3 :style="titleStyles">{{product.title}}</h3>
      </div>
      <div class="product-card-desktop__info--description">
        <span v-if="isSingle">{{ cardDescription }}</span>
        <select-variant
          v-else
          :product="product"
        />
      </div>
    </div>
    <div class="product-card-desktop__price">
      <div class="product-card-desktop__price--cost">
        Цена <span><span v-number-transition="{ target: cost, iteration: 10, speed: 1000 }"/>₽</span>
      </div>
      <div class="product-card-desktop__price--button">
        <plus-minus
          :value="count"
          @input="changeCount"
        />
      </div>
      <el-collapse-transition>
        <div v-if="count > 1"
             class="product-card-desktop__price--cost">
          Сумма <span><span v-number-transition="{ target: costAll, iteration: 30, speed: 1000 }"/>₽</span>
        </div>
      </el-collapse-transition>
    </div>
    <div class="product-card-desktop__actions">
      <div class="product-card-desktop__actions--delete"
           @click="removeProduct">
        <img src="@/assets/images/icons/trash.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import PlusMinus from "@/components/common/ui/buttons/PlusMinus";
import SelectVariant from "@/components/common/SelectVariant";
import productMixin from "@/mixins/product.mixin";

export default {
  name: 'desktop',
  components: { PlusMinus, SelectVariant },
  mixins: [productMixin],
  props: {
    product: { type: Object }
  },
  methods: {
    removeProduct() {
      this.$cart.removeProduct(this.product._id)
    }
  }
}
</script>

<style scoped lang="scss">
.product-card-desktop {
  margin-top: 5px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;

  width: 100%;
  height: 140px;
  box-sizing: border-box;

  padding-left: 20px;

  background: #FAFAFA;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  &__img {
    width: max-content;

    > img {
      width: 90px;
      height: 90px;
      object-fit: contain;
    }
  }

  &__info {
    width: 190px;
    margin-left: 20px;
    padding-right: 15px;

    &--like {
      margin-left: auto;
    }

    &--name {
      > h3 {
        margin: 0;
        //max-width: 220px!important;
        max-width: 100%;
        width: max-content;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: left;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #141414;
      }
    }

    &--description {
      overflow-y: hidden;

      max-width: 300px;
      height: 60px;

      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      text-align: left;
      color: #717171;

    }

  }

  &__price {
    padding-top: 6px;
    width: 120px;
    margin-left: auto;

    &--cost {
      text-align: left;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 14px;
      letter-spacing: 0.05em;

      color: #141414;

      > span {
        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 22px;

        letter-spacing: 0.05em;

        color: #141414;
      }

    }

    &--button {
      margin-top: 10px;
      margin-bottom: 10px;
    }

  }

  &__actions {

    &--delete {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 61px;
      height: 86px;

      background: #312525;
      border-radius: 200px 0px 0px 200px;

      cursor: pointer;

      transition: 0.3s;

      > img {
        width: 20px;
        height: 20px;
      }

      &:hover {
        background: #5b4a4a;
      }

    }

  }

}
</style>

<style lang="scss">
.product-card-desktop_variant-many {
  .product-card-desktop__info {
    //margin-top: -10px;
  }
  .product-card-desktop__info--description {
    height: 80px;
    .select-variant {
      margin: 0;
    }
  }
}
</style>
