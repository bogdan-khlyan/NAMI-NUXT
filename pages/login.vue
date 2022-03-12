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
            @input="$v.phone.$reset()"/>
        </div>

        <transition name="el-fade-in-linear">
          <div v-if="isShowCodeInput" class="login__form--code">
            <register-or-repeat-password-form/>
          </div>
        </transition>

        <transition name="el-fade-in-linear">
          <div v-if="isPasswordAuth" class="login__form--password">
            <password-input
              placeholder="Введите пароль"/>
          </div>
        </transition>

        <button v-loading="loading"
                class="login__form--btn-submit">
          <span>Продолжить</span>
        </button>

      </form>

    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

import phoneInput from "@/components/login/PhoneInput";
import RegisterOrRepeatPasswordForm from "@/components/login/RegisterOrRepeatPasswordForm";
import PasswordInput from "@/components/login/PasswordInput";

export default {
  name: 'login',
  layout: 'base',
  mixins: [validationMixin],
  components: {phoneInput, RegisterOrRepeatPasswordForm, PasswordInput},
  computed: {
    isPasswordAuth() {
      return this.type === 'auth-password'
    },
    isShowCodeInput() {
      return this.type === 'pending-code' || this.type === 'register' || this.type === 'reset-password'
    }
  },
  data() {
    return {
      loading: false,

      phone: null,
      code: null,

      type: 'pending-phone', // 'auth-password' / 'register' / 'reset-password'
    }
  },
  methods: {
    submit() {
      if (this.type === 'pending-phone')
        this.submitPhone()
    },
    submitPhone() {
      this.$v.phone.$touch()
      if (!this.$v.phone.$error) {
        this.loading = true
        setTimeout(() => { // TODO запрос на бэк, если номер уже был зареган, просим пароль
          // this.type = 'auth-password'
          this.type = 'register' // если номера еще не было, отсылаем смс с кодом

          this.loading = false
        }, 1000)
      }
    }
  },
  validations: {
    phone: {
      maxLength: maxLength(20),
      minLength: minLength(20),
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding-top: 130px;
  min-height: calc(100vh - 130px);


  display: flex;
  justify-content: center;

  &__content {
    max-width: 500px;

    > h1 {
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 36px;

      text-align: center;
      letter-spacing: 0.01em;

      color: #384673;
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
