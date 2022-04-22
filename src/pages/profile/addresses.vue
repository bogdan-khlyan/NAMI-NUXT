<template>
  <div class="address">
    <page-title
      title-icon="home"
      title="Мои адреса"/>


    <transition appear name="fade" mode="out-in">
      <address-empty v-if="myAddresses.length === 0"/>
      <div v-else class="address-items">
        <component v-for="(address,i) in myAddresses" :key="i"
                   :is="typeMode(address)"
                   :number="i"
                   :address-info="address"
                   @deleteAddress="deleteAddress"
                   @editAddress="editableAddresses.push($event)"/>
      </div>
    </transition>

    <button class="address__btn-add-address" @click="addNewAddress">
      <img src="@/assets/images/icons/icon-plus.svg" alt="add">
      Добавить новый адрес
    </button>

    <transition appear name="fade">
      <button v-if="isEditMode" class="address__btn-save-address" @click="saveForm">
        <img src="@/assets/images/icons/icon-plus.svg" alt="add">
        Сохранить адреса
      </button>
    </transition>

  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import AddressInput from "@/components/pages/profilePage/addresses/AddressInput";
import AddressInfo from "@/components/pages/profilePage/addresses/AddressInfo";
import AddressEmpty from "@/components/pages/profilePage/addresses/AddressEmpty";

export default {
  name: 'addresses',
  components: {
    PageTitle,
    AddressInput,
    AddressInfo,
    AddressEmpty
  },
  data() {
    return {
      myAddresses: [
        {
          id: 0,
          city: 'г. Донецк',
          street: 'ул. Заперевальная, д.283, кв.3'
        },
        {
          id: 1,
          city: 'г. Макеевка',
          street: 'ул.Шахтерской Дивизии, д.39'
        },
      ],
      editableAddresses: [],
      deletedAddresses: []
    }
  },
  computed: {
    isEditMode() {
      return this.editableAddresses.length > 0 ||
        this.myAddresses.filter(address => address.id === undefined).length > 0
    }
  },
  methods: {
    typeMode(address) {
      return this.editableAddresses.includes(address.id) ||
      !address.hasOwnProperty('id') ? 'address-input' : 'address-info'
    },
    saveForm() {
      this.editableAddresses = []
      this.deletedAddresses = []
    },
    addNewAddress() {
      this.myAddresses.push({city: '', street: ''})
    },
    deleteAddress(index) {
      if (this.myAddresses[index].id !== undefined)
        this.deletedAddresses.push(this.myAddresses[index].id)

      this.myAddresses.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  max-width: 500px;
  width: 100%;

  margin-bottom: 60px;
  padding-left: 70px;

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

  @media screen and (max-width: 980px) {
    padding-left: 0;
  }
}
</style>
