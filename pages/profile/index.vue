<template>
  <div class="profile-info">
    <page-title
      title-icon="user"
      title="Личные данные"/>
  </div>
</template>

<script>
import PageTitle from "@/components/profile/PageTitle";

export default {
  name: 'profile-index',
  components: { PageTitle }
}
</script>

<style lang="scss" scoped>
.profile-info {

}
</style>
