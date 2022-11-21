<template>
  <div class="profile-favorites" v-loading="loading">
    <favorites-list
      class="profile-favorites__list"
      :favorites="data"
    />
  </div>
</template>

<script>
import FavoritesList from "@/components/pages/favoritesPage/components/FavoritesList";
import userInstanceMixin from "@/api/userInstance/user-instance.mixin";

export default {
  name: 'profile-favorites',
  mixins: [userInstanceMixin],
  components: { FavoritesList },
  data() {
    return {
      loading: true,
      data: []
    }
  },
  watch: {
    favorites() {
      this.init()
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.data = this.$store.state.menu.products
        .filter(item => this.$store.state.userInstance.favorites.find(productId => productId === item._id))
      this.$nextTick(() => this.loading = false)
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-favorites {
  width: 100%;
  height: max-content;
  &__list {
    width: 100%;
  }
  ::v-deep .favorites-list__list {
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 1250px) {
      grid-template-columns: 1fr 1fr;
      max-width: 650px;
    }
    @media screen and (max-width: 980px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: unset;
    }
    @media screen and (max-width: 920px) {
      grid-template-columns: 1fr 1fr;
      max-width: 650px;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      max-width: 320px;
    }
  }
  ::v-deep .favorites-list__title h1 {
    @media screen and (max-width: 360px) {
      font-size: 21px;
    }
  }
  ::v-deep .favorites-empty {
    margin: 0;
    padding-left: 38px;
    @media screen and (max-width: 980px) {
      margin: 0 auto;
      padding-left: 0;
    }
  }
  ::v-deep .el-loading-mask {
    background: #FFFFFF;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 10px 10px 10px rgba(212, 217, 230, 0.12), -5px -5px 10px rgba(212, 217, 230, 0.1);
  }
}
</style>
