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
import PageTitle from "@/components/pages/profilePage/common/PageTitle";
import EditAvatar from "@/components/pages/profilePage/index/EditAvatar";
import SettingsForm from "@/components/pages/profilePage/index/SettingsForm";

export default {
  name: 'profile-index',
  components: { PageTitle, EditAvatar, SettingsForm }
}
</script>

<style lang="scss" scoped>
.profile-info {
  height: 100%;
  min-height: 600px;
  padding-left: 70px;

  &__avatar {
    margin-top: 20px;
  }

  @media screen and (max-width: 980px) {
    padding-left: 0;
  }
}
</style>
