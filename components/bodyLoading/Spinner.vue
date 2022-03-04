<template>
  <div class="spinner">
    <svg width="450" height="2" viewBox="0 0 450 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M449 0H1C0.447715 0 0 0.4477 0 1C0 1.5523 0.447715 2 1 2H449C449.552 2 450 1.5523 450 1C450 0.4477 449.552 0 449 0Z" fill="white" fill-opacity="0.2"/>
    </svg>
    <svg width="225" height="2" viewBox="0 0 225 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M223.897 0H1.10294C0.494118 0 0 0.4477 0 1C0 1.5523 0.494118 2 1.10294 2H223.897C224.506 2 225 1.5523 225 1C225 0.4477 224.506 0 223.897 0Z" fill="#F22F0F"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'spinner'
}
</script>

<style scoped lang="scss">
.spinner {
  position: relative;
  overflow: hidden;

  width: 450px;
  height: 2px;
  @media screen and (max-width: 800px) {
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 240px;
  }
  svg {
    position: absolute;
    left: 0; top: 0;
  }
  svg:nth-child(2) {
    left: -225px; top: 0;
    animation: spin 2s infinite linear;
  }
  @keyframes spin {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(675px);
    }
    100% {
      transform: translateX(0px);
    }
  }
}
</style>
