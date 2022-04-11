<template>
<label class="address-input__wrapper">

  <div class="address-input__label">
    <div class="address-input__number">{{ number }}</div>
    <div class="address-input__title">Адрес доставки</div>
  </div>

  <div class="address-input__input-wrapper">
    <div class="address-input__switch-city">
      <transition name="fade" :duration="60" mode="out-in">
        <span :key="addressInfo.city">{{addressInfo.city}}</span>
      </transition>
      <img @click="changeCity"
           class="icon-change"
           :class="{'icon-change--transform': addressInfo.city === typeCity[1]}"
           src="@/assets/images/myAddress/icon-exchange.svg"
           alt="change">
    </div>
    <input required
           type="text"
           minlength="10"
           :value="addressInfo.street"
           placeholder="Название улицы, № дома, № квартиры">

    <img class="icon-delete" src="@/assets/images/myAddress/icon-delete.svg" alt="delete">
  </div>

</label>
</template>

<script>
export default {
  name: "AddressInput",
  props:{
    addressInfo: Object,
    number: Number
  },
  data(){
    return{
    typeCity:['г. Донецк', 'г. Макеевка']
    }
  },
  created() {
    if(!this.addressInfo.city)
    this.addressInfo.city = this.typeCity[0]
  },
  methods:{
    changeCity(){
      this.addressInfo.city === 'г. Донецк' ?
        this.addressInfo.city = this.typeCity[1] :
        this.addressInfo.city = this.typeCity[0]
    }
  }

}
</script>

<style lang="scss" scoped>
.address-input {
  &__wrapper {
    display: block;
    max-width: 500px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 44px;
    }
  }
  &__label {
    display: flex;
    align-items: center;
    width: max-content;
    margin-bottom: 4px;
  }
  &__title {
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    color: #404040;
  }
  &__number {
    height: 16px;
    width: 16px;

    font-family: Ubuntu, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #ffffff;

    margin-right: 16px;
    background: #062D4E;
    border-radius: 50%;
  }
  &__input-wrapper {
    display: flex;
    align-items: center;
    position: relative;

    padding: 16px;

    height: 56px;
    max-width: 500px;

    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;

    background: #FFFFFF;
    border: 1px solid #D4D9E6;
    box-sizing: border-box;
    border-radius: 4px;

    .icon-delete {
      position: absolute;
      top: 16px;
      right: 16px;

      cursor: pointer;
    }

    input {
      max-width: 290px;
      width: 100%;

      font-family: Ubuntu, sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      text-align: left;

      border: none;

      &::placeholder {
        color: #D4D9E6;
      }
    }
  }
  &__switch-city{

    display: flex;
    align-items: center;
    margin-right: 16px;
    span {
      width: 88px;
      margin-right: 10px;
    }
    .icon-change{
      cursor: pointer;

      transition: 0.3s;
      &--transform {
        transform: rotate(180deg);
      }
    }
  }

}
</style>
