<template>
  <div class="profile-info">
    <page-title
      title-icon="user"
      title="Личные данные"/>

    <div class="profile-info__avatar">
      <edit-avatar/>
    </div>

    <div class="profile-info__content">
      <settings-form/>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/profile/common/PageTitle";
import EditAvatar from "@/components/profile/index/EditAvatar";
import SettingsForm from "@/components/profile/index/SettingsForm";

export default {
  name: 'profile-index',
  components: { PageTitle, EditAvatar, SettingsForm }
}
</script>

<style lang="scss" scoped>
.profile-info {
  height: 100%;

  &__avatar {
    margin-top: 20px;
  }

}
</style>
