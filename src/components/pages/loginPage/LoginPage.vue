<template>
  <div class="login">
    <div class="login__content">
      <h1>Добро пожаловать <br>
        в японский ресторан NamiSushi</h1>

      <form class="login__form"
            @submit.prevent="submit">

        <transition name="el-fade-in-linear">
          <div v-if="!isCalled"
               class="login__phone">
            <base-phone-input
              v-model="phone"
              :error="$v.phone"
              :loading="loadingPhone"
              :is-done="isCalled"
              @input="$v.phone.$reset()"/>
          </div>
          <div v-else
               class="login__code">
            <div class="login__code--text">
              Для подтверждения <span>{{ phone }}</span>
              <br>
              Впишите <span class="blink">последние 4 цифры звонившего номера</span>
            </div>
            <base-code-input
              v-model="code"
              :error="$v.code"
              @input="handleInputCode"
              @send-new-code="submitPhone"
            />
          </div>
        </transition>

        <base-submit-button :loading="loading">Продолжить</base-submit-button>

      </form>

    </div>

  </div>
</template>

<script>
import BasePhoneInput from "@/components/common/ui/inputs/BasePhoneInput";
import BaseSvg from "@/components/common/BaseSvg";
import BaseCodeInput from "@/components/common/ui/inputs/BaseCodeInput";
import BaseSubmitButton from "@/components/common/ui/buttons/BaseSubmitButton";

import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  name: 'login-page',
  layout: 'base',
  mixins: [validationMixin],
  components: { BasePhoneInput, BaseSvg, BaseCodeInput, BaseSubmitButton },
  computed: {
    loadingPhone() {
      return !this.isCalled && this.loading
    }
  },
  data() {
    return {
      loading: false,

      phone: null,
      code: null,

      isCalled: false
    }
  },
  methods: {
    submit() {
      if (this.isCalled) {
        this.auth()
      } else {
        this.submitPhone()
      }
    },
    auth() {
      this.$v.code.$touch()
      if (!this.$v.code.$error) {
        this.loading = true
        this.$userInstance.signIn({
          phone: this.phone,
          code: this.code
        }).finally(() => this.loading = false)
      }
    },
    async submitPhone() {
      this.$v.phone.$touch()
      if (!this.$v.phone.$error) {
        this.loading = true
        this.$userInstance.singInCall(this.phone)
          .then(() => this.isCalled = true)
          .finally(() => this.loading = false)
      }
    },
    handleInputCode(code) {
      if (code.length === 4) {
        this.auth()
      }
    }
  },
  validations: {
    phone: {
      maxLength: maxLength(16),
      minLength: minLength(16),
      required
    },
    code: {
      required,
      maxLength: maxLength(4),
      minLength: minLength(4)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  padding-top: 130px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 130px);
  @media screen and (max-width: 1250px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 80px;
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

  &__form { }

  &__phone {
    margin-bottom: 44px;
  }

  &__code {
    margin-top: 24px;
    margin-bottom: 20px;

    &--text {
      margin-bottom: 25px;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      color: #212121;
      > span {
        font-weight: 500;
        color: #384673;
      }
      .blink {
        animation: blink 1.5s linear infinite;
        @keyframes blink {
          0% { color: rgb(45, 58, 100); }
          33% { color: rgba(56, 70, 115, 0.5); }
          66% { color: rgba(56, 70, 115, 1); }
        }
      }
    }

  }

}
</style>
