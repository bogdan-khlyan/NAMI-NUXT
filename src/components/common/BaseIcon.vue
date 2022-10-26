<template>
  <span class="base-icon"
        ref="root">
    <i class="el-icon-loading"/>
  </span>
</template>

<script>
export default {
  name: 'base-icon',
  props: {
    src: String
  },
  created() {
    this.getIcon()
  },
  methods: {
    async getIcon() {
      try {
        const blob = await this.$axios.$get(this.src, { responseType: 'blob' })
        this.$refs.root.innerHTML = await blob.text()
      } catch (error) { }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
