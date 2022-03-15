<template>
  <div class="settings-form">
    <h2>Настройки аккаунта</h2>
    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.phoneNumber"
        label="Номер телефона"
        :loading="loading"
        :disabled="true"
        ref="phoneInputWrapper">
          <!-- TODO phone input -->
      </profile-input-wrapper>
    </div>
    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.username"
        label="Имя"
        placeholder="Вы еще не указали свое имя"
        :loading="loading"
        @submit="submitUsername"
        ref="usernameInputWrapper">
        <base-input
          v-model="form.username"
          :loading="loading"
          label="Имя"
          placeholder="Вы еще не указали свое имя"/>
      </profile-input-wrapper>
    </div>
    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.email"
        label="Email"
        placeholder="Вы еще не указали свой email"
        :loading="loading"
        @submit="submitEmail"
        ref="emailInputWrapper">
        <base-input
          v-model="form.username"
          :loading="loading"
          label="Имя"
          placeholder="Вы еще не указали свое имя"/>
      </profile-input-wrapper>
    </div>
  </div>
</template>

<script>
import ProfileInputWrapper from "@/components/profile/common/ProfileInputWrapper";
import BaseInput from "@/components/common/ui/inputs/BaseInput";

export default {
  name: 'settings-form',
  components: { ProfileInputWrapper, BaseInput },
  data() {
    return {
      loading: false,
      form: {
        phoneNumber: '+38 (071) 700-97-91',
        username: null,
        email: null
      }
    }
  },
  methods: {
    submitUsername() {
      console.log('submit username')
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$refs.usernameInputWrapper.setEditMode(false)
      }, 3000)
    },
    submitEmail() {
      console.log('submit email')
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$refs.emailInputWrapper.setEditMode(false)
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-form {

  h2 {
    margin-top: 32px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    color: #062D4E;
  }

  &__item {
    margin-top: 12px;
    margin-bottom: 12px;
  }

}
</style>
