<template>
  <div class="address-not-found">
    <div>
      <img src="./images/address-not-found.png" alt="адрес не найден">
      <div class="text">Диспетчер обработает адрес доставки самостоятельно и сообщит вам стоимость доставки по телефону</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'address-not-found'
}
</script>

<style scoped lang="scss">
.address-not-found {
  width: 100%;
  min-height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  img {
    width: 100%;
  }

  .text {
    margin-top: 8px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    letter-spacing: 0.05em;

    color: #222222;

  }

  .btn-address {
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

    &.active, &:hover {
      color: #FFFFFF;
      background-color: #0C334A;
    }
  }

}
</style>
