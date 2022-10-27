<template>
  <div class="settings-form">

    <h2>Настройки аккаунта</h2>

    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.name"
        label="Имя"
        placeholder="Вы еще не указали свое имя"
        :loading="loading.name"
        @submit="submitUsername"
        ref="usernameInputWrapper">
        <base-input
          v-model="form.name"
          :loading="loading.name"
          label="Имя"
          placeholder="Вы еще не указали свое имя"/>
      </profile-input-wrapper>
    </div>

    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.email"
        label="Email"
        placeholder="Вы еще не указали свой email"
        :loading="loading.email"
        @submit="submitEmail"
        ref="emailInputWrapper">
        <base-input
          v-model="form.email"
          :loading="loading.email"
          label="Email"
          placeholder="Вы еще не указали свой email"/>
      </profile-input-wrapper>
    </div>

  </div>
</template>

<script>
import ProfileInputWrapper from "@/components/pages/profilePage/common/ProfileInputWrapper";
import BaseInput from "@/components/common/ui/inputs/BaseInput";

export default {
  name: 'settings-form',
  components: {
    ProfileInputWrapper,
    BaseInput,
  },
  data() {
    return {
      loading: {
        name: false,
        email: false
      },
      form: {
        name: null,
        email: null
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInstance.info
    }
  },
  created() {
    this.form.name = this.userInfo.name
    this.form.email = this.userInfo.email
  },
  methods: {
    submitUsername() {
      this.loading.name = true
      this.$userInstance.updateUser({ name: this.form.name })
        .then(user => {
          this.form.name = user.name
          this.$refs.usernameInputWrapper.setEditMode(false)
        })
        .finally(() => this.loading.name = false)
    },
    submitEmail() {
      this.loading.email = true
      this.$userInstance.updateUser({ name: this.form.email })
        .then(user => {
          this.form.email = user.email
          this.$refs.emailInputWrapper.setEditMode(false)
        })
        .finally(() => this.loading.userName = false)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-form {
  width: max-content;
  margin-bottom: 72px;

  > h2 {
    margin-top: 32px;
    margin-bottom: 0;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    color: #062D4E;
  }

  &__item {
    position: relative;
    margin: 24px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
