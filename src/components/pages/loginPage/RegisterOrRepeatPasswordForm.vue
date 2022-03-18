<template>
  <form class="register-form">
    <div class="register-from__code">
      <code-input
        v-model="code"
        :error="$v.code"
        :loading="loading"
        @input="submitCode"/>
    </div>
    <div class="register-form__password">
      <password-input
        v-model="password"
        :error="$v.code"
        :loading="loading"
        placeholder="Введите пароль"/>
    </div>
    <div class="register-form__password">
      <password-input
        v-model="password"
        label="Повторите пароль"
        :error="$v.code"
        :loading="loading"
        placeholder="Введите пароль"/>
    </div>
  </form>
</template>

<script>
import CodeInput from "@/components/pages/loginPage/CodeInput";
import { validationMixin } from "vuelidate";
import PasswordInput from "@/components/pages/loginPage/PasswordInput";
import {maxLength, minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'register-or-repeat-password-form',
  mixins: [validationMixin],
  components: { CodeInput, PasswordInput },
  data() {
    return {
      loading: false,

      code: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    submitCode() {
      if (this.code?.length !== 6) return
      this.$v.code.$touch()
      if (!this.$v.code.$error) {
        console.log('code no error')
        setTimeout(() => {
          this.$v.code.$reset()
        }, 1000)
      }
    }
  },
  validations: {
    code: {
      maxLength: maxLength(6),
      minLength: minLength(6),
      required,
      isUnique(value) {
        return value !== '999999'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.register-form {

  &__password {
    margin-top: 24px;
  }

}
</style>
