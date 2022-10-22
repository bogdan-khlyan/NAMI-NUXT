<template>
  <div class="order-form">

    <div class="order-form__content">
      <input-expand v-model="data.username"
                    class="order-form__input"
                    placeholder="Имя"
                    :isValid="fieldsValid.username"
                    @input="validateUsername(false)">
        <user-icon/>
      </input-expand>
      <input-expand v-model="data.phone"
                    class="order-form__input"
                    v-mask="'+7(949)###-##-##'"
                    :isValid="fieldsValid.phone"
                    placeholder="Телефон"
                    @focus="focusInputPhone"
                    @input="validatePhone(false)"
                    ref="inputPhone">
        <phone-icon/>
      </input-expand>
      <input-expand v-model="data.additionalInformation"
                    class="order-form__input"
                    placeholder="Дополнительная информация">
        <info-icon/>
      </input-expand>
      <input-expand v-if="data.delivery"
                    v-model="data.address"
                    class="order-form__input"
                    :isValid="fieldsValid.address"
                    @input="handleInputAddress"
                    placeholder="Адрес доставки">
        <home-icon/>
      </input-expand>
      <ymap
        v-if="calcDeliveryCost && data.delivery"
        v-model="data.deliveryCost"
        :data="data"
        :address="data.address"
        @deliveryCalculateManually="deliveryCalculateManually"/>
      <div v-else-if="data.address.length > 5 && data.delivery"
           @click="calcDeliveryCost = true">
        <button class="btn-calc-cost">Рассчитать цену доставки</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "@/components/common/icons/UserIcon";
import PhoneIcon from "@/components/common/icons/PhoneIcon";
import InfoIcon from "@/components/common/icons/InfoIcon";
import HomeIcon from "@/components/common/icons/HomeIcon";

import ChapterLabel from "@/components/cart/order/common/ChapterLabel";
import InputExpand from "@/components/common/ui/inputs/InputExpand";
import Ymap from "@/components/cart/order/orderForm/map/Map";

export default {
  name: 'order-chapter3',
  components: {
    UserIcon, PhoneIcon, InfoIcon, HomeIcon,
    ChapterLabel, InputExpand, Ymap
  },
  model: { prop: 'data', event: 'input' },
  props: {
    data: { type: Object }
  },
  data() {
    return {
      calcDeliveryCost: false,
      fieldsValid: {
        address: true,
        phone: true,
        username: true
      }
    }
  },
  methods: {
    deliveryCalculateManually() {
      this.data.deliveryCalculateManually = true
    },
    handleInputAddress() {
      this.data.deliveryCost = null
      this.data.deliveryCalculateManually = false
      this.validateAddress()
      if (this.calcDeliveryCost) this.calcDeliveryCost = false
    },
    focusInputPhone() {
      if (this.data.phone.length === 0) this.$refs.inputPhone.setData('+7(949)')
    },
    validateAddress(notify) {
      if (!this.data.address || this.data.address.length <= 5) {
        this.fieldsValid.address = false
        if (notify)
          setTimeout(() => this.$toast.error('Введен некорректный адрес!'), 100)
        return false
      } else {
        this.fieldsValid.address = true
        return true
      }
    },
    validateUsername(notify) {
      if (!this.data.username || this.data.username.length <= 2) {
        this.fieldsValid.username = false
        if (notify)
          setTimeout(() => this.$toast.error('Ведите имя!'), 200)
        return false
      } else {
        this.fieldsValid.username = true
        return true
      }
    },
    validatePhone(notify) {
      if (this.data.phone.length !== 16) {
        this.fieldsValid.phone = false
        if (notify) {
          if (this.data.phone.length === 8 || this.data.phone.length === 0)
            this.$toast.error('Введите номер телефона!')
          else
            this.$toast.error('Введен некорректный номер телефона!')
        }
        return false
      } else {
        this.fieldsValid.phone = true
        return true
      }
    },
    validate(notify = false) {
      let valid = true

      if (this.data.delivery && !this.validateAddress(notify)) valid = false

      if (!this.validatePhone(notify)) valid = false

      if (!this.validateUsername(notify)) valid = false

      return valid
    }
  }
}
</script>

<style scoped lang="scss">
.order-form {
  padding-left: 45px;
  padding-right: 30px;
  background-color: #FFFFFF;

  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 360px) {
    padding-right: 10px;
  }

  .order-form__content {
    padding-top: 10px;
  }

  .order-form__input {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .btn-calc-cost {
    width: 100%;
    height: 48px;

    background-color: #FFFFFF;
    border: 1px solid #0C334A;
    border-radius: 4px;


    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #0C334A;

    cursor: pointer;
    transition: 300ms;

    &:hover {
      color: #FFFFFF;
      background-color: #0C334A;
    }

  }

}
</style>
