<template>
  <div class="address">
    <page-title
      title-icon="home"
      title="Мои адреса"/>

    <div>

      <component v-for="(address,i) in myAddresses" :key="i"
                  :is="typeMode(address)"
                 :number="i+1" :address-info="address"
                 @editAddress="editableAddresses.push($event)"/>

    </div>

    <button class="address__btn-add-address" @click="addNewAddress">
      <img src="@/assets/images/icons/icon-plus.svg" alt="add">
      Добавить новый адрес
    </button>

    <button v-if="isEditMode" class="address__btn-save-address" @click="addNewAddress">
      <img src="@/assets/images/icons/icon-plus.svg" alt="add">
      Сохранить адреса
    </button>


  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import AddressInput from "@/components/pages/profilePage/addresses/AddressInput";
import AddressInfo from "@/components/pages/profilePage/addresses/AddressInfo";

export default {
  name: 'addresses',
  components: {PageTitle, AddressInput, AddressInfo},
  data() {
    return {
      myAddresses: [
        {
          id: 0,
          city: '',
          street: 'ул. Заперевальная, д.283, кв.3'
        },
        {
          id: 1,
          city: '',
          street: 'ул.Шахтерской Дивизии, д.39'
        },
        {
          id: 2,
          city: '',
          street: ''
        },
      ],
      editableAddresses: []
    }
  },
  computed:{
    isEditMode(){
      return this.editableAddresses.length > 0 ||
        this.myAddresses.filter(address => address.id === undefined).length>0
    }
  },
  methods: {

    typeMode(address){
      return this.editableAddresses.includes(address.id) || !address.hasOwnProperty('id') ?'address-input':'address-info'
    },
    saveForm() {
      alert('save')
    },
    addNewAddress() {
      alert('addNewAddress')
      this.myAddresses.push({city:'',street:''})
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  max-width: 500px;

  .page-title {
    margin-bottom: 18px;
  }

  &__btn-add-address {
    margin-top: 44px;
    margin-bottom: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

    width: 100%;
    height: 56px;

    background: #062D4E;
    border-radius: 4px;
    border: none;

    cursor: pointer;
    transition: 200ms;

    img {
      margin-right: 10px;
    }

    @media screen and (max-width: 420px) {
      width: calc(100vw - 20px);
    }

    &:hover {
      background: #0e508a;
    }
  }

  &__btn-save-address {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #062D4E;

    width: 100%;
    height: 56px;

    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #062D4E;

    cursor: pointer;
    transition: 200ms;

    img {
      margin-right: 10px;
    }

    @media screen and (max-width: 420px) {
      width: calc(100vw - 20px);
    }

    &:hover {
      background: #062D4E;
      color: #FFFFFF;
    }
  }
}
</style>
