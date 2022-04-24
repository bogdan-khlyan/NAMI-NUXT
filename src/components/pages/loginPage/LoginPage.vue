<template>
  <div class="login">
    <div class="login__content">
      <h1>Добро пожаловать <br>
        в японский ресторан NamiSushi</h1>

      <form class="login__form"
            @submit.prevent="submit">

        <div class="login__form--phone">
          <phone-input
            v-model="phone"
            :error="$v.phone"
            :loading="loadingPhone"
            :is-done="type !== 'pending-phone'"
            @input="$v.phone.$reset()"/>
        </div>

        <transition name="el-fade-in-linear">
          <div v-if="isShowCodeInput" class="login__form--code">
            <register-form
              :loading="loading"
              :phone="phone"
              ref="registerForm"/>
          </div>
        </transition>

        <transition name="el-fade-in-linear">
          <div v-if="isPasswordAuth"
               class="login__form--password">
            <password-input
              v-model="password"
              placeholder="Введите пароль"
              :error="$v.password"
              :loading="loading"
              @input="$v.password.$reset()"/>
          </div>
        </transition>

        <button class="login__form--btn-submit">
          <transition name="el-fade-in-linear" mode="out-in">
            <img v-if="loading"
                 src="@/assets/images/spinner.svg" alt="">
            <span v-else>Продолжить</span>
          </transition>
        </button>

      </form>

    </div>

    <img class="bg"
         src="@/assets/images/bg-waves.svg" alt="">
  </div>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

import phoneInput from "@/components/common/ui/inputs/BasePhoneInput";
import RegisterForm from "@/components/pages/loginPage/components/RegisterForm";
import PasswordInput from "@/components/common/ui/inputs/BasePasswordInput";
import BaseSvg from "@/components/common/BaseSvg";

export default {
  name: 'login-page',
  mixins: [validationMixin],
  components: {phoneInput, RegisterForm, PasswordInput, BaseSvg},
  computed: {
    isPasswordAuth() {
      return this.type === 'auth-password'
    },
    isShowCodeInput() {
      return this.type === 'pending-code' || this.type === 'SIGN_UP' || this.type === 'reset-password'
    },
    loadingPhone() {
      return this.type === 'pending-phone' && this.loading
    },
    loadingPassword() {
      return this.type === 'auth-password' && this.loading
    }
  },
  data() {
    return {
      loading: false,

      phone: null,
      code: null,

      password: null,

      type: 'pending-phone', // 'auth-password' / 'register' / 'reset-password'
    }
  },
  methods: {
    submit() {
      if (this.type === 'pending-phone') {
        this.submitPhone()
      }
      if (this.type === 'auth-password') {
        this.auth()
      }
      if (this.type === 'SIGN_UP') {
        this.loading = true
        this.$refs.registerForm.submit()
          .finally(() => this.loading = false)
      }
    },
    auth() {
      this.$v.password.$touch()
      if (!this.$v.password.$error) {
        this.loading = true
        setTimeout(() => {
          this.$userInstance.signIn()
            .finally(() => this.loading = false)
        }, 3000)
      }
    },
    async submitPhone() {
      this.$v.phone.$touch()
      if (!this.$v.phone.$error) {
        this.loading = true

        this.$userInstance.getStatus(this.phone)
          .then((status) => this.type = status)
          .finally(() => this.loading = false)
      }
    }
  },
  validations: {
    phone: {
      maxLength: maxLength(17),
      minLength: minLength(17),
      required
    },
    password: {
      maxLength: maxLength(128),
      minLength: minLength(6),
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  padding-top: 130px;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 130px);
  @media screen and (max-width: 1250px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }

  > .bg {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &__content {
    max-width: 500px;
    padding-bottom: 50px;

    > h1 {
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 36px;

      text-align: center;
      letter-spacing: 0.01em;

      color: #384673;
      @media screen and (max-width: 420px) {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  &__form {

    &--code {
      margin-top: 24px;
    }

    &--password {
      margin-top: 24px;
    }

    &--btn-submit {
      margin-top: 44px;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 386px;
      height: 56px;

      background: #062D4E;
      border-radius: 4px;
      border: none;

      cursor: pointer;
      transition: 200ms;

      @media screen and (max-width: 420px) {
        width: calc(100vw - 20px);
      }

      &:hover {
        background: #0e508a;
      }

      > span {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
      }

    }

  }

}
</style>
