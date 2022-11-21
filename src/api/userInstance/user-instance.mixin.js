export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.userInstance.isLoggedIn
    },
    userInfo() {
      return this.$store.state.userInstance.info
    },
    favorites() {
      return this.$store.state.userInstance.favorites
    }
  }
}
