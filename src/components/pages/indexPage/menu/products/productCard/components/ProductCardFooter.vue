<template>
  <div class="product-card-footer">
    <div class="price">
      <span>{{ cost }}₽</span>
    </div>
    <div @click="$event.stopPropagation()" class="btn">
      <button
        v-if="!count"
        class="product-card-footer__btn-to-cart"
        @click="toCard">В корзину</button>
      <plus-minus
        v-else
        class="plus-minus-btn"
        :value="count"
        @input="changeCount"
      />
    </div>
  </div>
</template>

<script>
import PlusMinus from "@/components/common/ui/buttons/PlusMinus";
import productMixin from "@/mixins/product.mixin";

export default {
  name: 'product-card-footer',
  mixins: [productMixin],
  components: { PlusMinus },
  props: {
    product: { type: Object }
  },
  methods: {
    toCard($event) {
      $event.preventDefault()
      this.$cart.addProduct(this.product)
    },
  }
}
</script>

<style scoped lang="scss">
.product-card-footer {
  padding-top: 20px;

  position: absolute;
  bottom: 30px;

  display: flex;
  width: 210px;

  .plus-minus-btn {
    height: 35px;
  }

  @media screen and (max-width: 800px) {
    width: 32vw;
    min-width: 32vw;
    max-width: 32px;
  }
  @media screen and (max-width: 700px) {
    width: 52vw;
    min-width: 52vw;
    max-width: 52px;
  }
  @media screen and (max-width: 540px) {
    width: 63vw;
    min-width: 63vw;
    max-width: 63px;
  }

  > .price {
    margin-right: auto;
    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 30px;

    color: #000000;

    transition: 0.3s;
  }

  &__btn-to-cart {
    width: 100px;
    height: 35px;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #FFFFFF;

    background: #312525;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
    border: none;
    border-radius: 8px;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #504040;
    }
  }

}
</style>
