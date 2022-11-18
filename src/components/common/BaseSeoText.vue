<template>
  <div class="text-block">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'base-seo-text',
}
</script>

<style scoped lang="scss">
.text-block {
  display: block;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
