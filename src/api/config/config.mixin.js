export default {
  computed: {
    theme() {
      return this.config.theme
    },
    config() {
      return this.$store.state.config.config
    }
  }
}
