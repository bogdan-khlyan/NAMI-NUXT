<template>
  <div class="settings-form">

    <h2>Настройки аккаунта</h2>

    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.phoneNumber"
        label="Номер телефона"
        :loading="loading.phone"
        ref="phoneInputWrapper">
        <base-input
          v-model="form.phoneNumber"
          v-mask="'+38(071)-###-##-##'"
          :loading="loading.phone"
          label="Номер телефона"
          placeholder="Вы еще не указали свой номер"/>
      </profile-input-wrapper>
    </div>

    <div class="settings-form__item">
      <profile-input-wrapper
        :value="form.username"
        label="Имя"
        placeholder="Вы еще не указали свое имя"
        :loading="loading.userName"
        @submit="submitUsername"
        ref="usernameInputWrapper">
        <base-input
          v-model="form.username"
          :loading="loading.userName"
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

    <div class="settings-form__item settings-form__item-telegram">
      <profile-input-wrapper
        :value="form.telegram"
        label="Telegram"
        placeholder="Вы еще не указали свой аккаунт"
        :loading="loading.telegram"
        @submit="submitTelegram"
        ref="emailInputTelegram">
        <base-input
          v-model="form.telegram"
          :loading="loading.telegram"
          label="Telegram"
          placeholder="Вы еще не указали свой аккаунт"/>

        <div class="help">
          <div class="help-title">Для подключения уведомлений вам нужно:</div>
          <ol class="help-list">
            <li>Зайти в указанный аккаунт телеграма</li>
            <li>Найти бота <span>@namisushi_bot</span></li>
            <li>Написать боту <span>/start</span></li>
          </ol>
        </div>

      </profile-input-wrapper>

      <img class="icon-telegram" src="@/assets/images/icons/icon-telegram.svg" alt="icon">
      <el-tooltip popper-class="tooltip-edit-telegram" effect="dark" placement="right-start">
        <img class="icon-help" src="@/assets/images/icons/icon-help.svg" alt="icon">
        <div slot="content">
          <div class="tooltip-title">Для чего нужен telegram?</div>
          <div class="tooltip-description">
            После привязки телеграм аккаунта к боту приложения
            NamiSushi - вам будут приходить уведомления о статусе заказа
          </div>
          <div class="tooltip-description">
            * Для привязки телеграм аккаунта у вас должен быть линк - сслыка на ваш профиль
          </div>
        </div>
      </el-tooltip>
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
        phone: false,
        userName: false,
        email: false,
        telegram: false
      },
      form: {
        phoneNumber: '+38(071)-700-97-91',
        username: null,
        email: null,
        telegram: null
      }
    }
  },
  methods: {
    submitUsername() {
      console.log('submit username')
      this.loading.userName = true
      setTimeout(() => {
        this.loading.userName = false
        this.$refs.usernameInputWrapper.setEditMode(false)
      }, 3000)
    },
    submitEmail() {
      this.loading.email = true
      setTimeout(() => {
        this.loading.email = false
        this.$refs.emailInputWrapper.setEditMode(false)
      }, 3000)
    },
    submitTelegram() {
      this.loading.telegram = true
      setTimeout(() => {
        this.loading.telegram = false
        this.$refs.emailInputTelegram.setEditMode(false)
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.settings-form {
  width: max-content;
  margin-bottom: 72px;

  h2 {
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
  &__item-telegram {
    .profile-input-wrapper__label, .password-input__label {
      margin-left: 24px;
    }

    .help-title {
      font-family: Ubuntu, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: #062D4E;
      margin: 4px 0;
    }
    .help-list {
      font-family: Ubuntu, sans-serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      text-align: left;
      color: #121212;

      margin: 0;
      padding-left: 16px;
      span {
        font-weight: 400;
      }
    }
  }
  .icon-telegram {
    position: absolute;
    top: 0;
    left: 0;
  }
  .icon-help {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

}

.tooltip-edit-telegram {
  max-width: 234px;
  padding: 6px 10px;
  box-sizing: border-box;
  background: #051523 !important;

  .tooltip-title {
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #FFFFFF;
    word-break: break-word;
  }

  .tooltip-description {
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    color: #FFFFFF;
    word-break: break-word;

    &:last-child {
      margin-top: 16px;
    }
  }
}
</style>
