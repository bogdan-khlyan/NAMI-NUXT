<template>
  <el-tooltip class="item" effect="dark"
              :content="content"
              :placement="placement"
              ref="tooltip"
  >
    <slot/>
  </el-tooltip>
</template>

<script>
export default {
  name: 'base-tooltip',
  props: {
    content: { type: String },
    placement: { type: String, default: 'bottom' }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  mounted() {
    this.$refs.tooltip.$el.addEventListener('mouseenter', this.show)
    this.$refs.tooltip.$el.addEventListener('click', this.show)
  },
  methods: {
    show() {
      this.$refs.tooltip.show()
      if (this.windowWidth < 1250) {
        setTimeout(() => this.close(), 3000)
      }
    },
    close() {
      this.$refs.tooltip.hide()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
