<template>
  <div class="address">
    <page-title
      title-icon="home"
      title="Мои адреса"/>

    <address-input v-for="(address,i) in myAddresses" :number="i" :my-address="address"/>

  </div>
</template>

<script>
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import AddressInput from "@/components/pages/profilePage/addresses/AddressInput";
export default {
  name: 'addresses',
  components: { PageTitle, AddressInput },
  data(){
    return {
      myAddresses:[
        {
          city:'',
          street:'ул. Заперевальная, д.283, кв.3'
        },
        {
          city:'',
          street:'ул.Шахтерской Дивизии, д.39'
        },
        {
          city:'',
          street:''
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.address {

  .page-title {
    margin-bottom: 18px;
  }
}
</style>
