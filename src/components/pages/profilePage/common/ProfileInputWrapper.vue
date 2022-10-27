<template>
  <div class="profile-input-wrapper">

    <transition appear name="el-fade-in-linear" mode="out-in">
      <div v-if="!isEditMode || disabled"
           class="profile-input-wrapper__preview"
           @click="setEditMode(true)">
        <span class="profile-input-wrapper__label">{{ label }}</span>
        <div class="profile-input-wrapper__preview--value"
             :class="{ disabled: disabled }">
          <span v-if="value">{{ value }}</span>
          <span v-else class="empty">{{ placeholder }}</span>
          <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.1452 3.62698C12.9916 3.47119 12.8079 3.34996 12.6059 3.27105C12.4038 3.19214 12.1878 3.1573 11.9718 3.16876C11.5323 3.19369 11.1186 3.38872 10.8145 3.71426L6.07851 8.53649C6.05412 8.5639 6.0343 8.59523 6.01984 8.62922C5.99881 8.65999 5.98093 8.69289 5.96651 8.72741L5.29984 10.9531C5.27607 11.0362 5.27198 11.1238 5.28791 11.2089C5.30383 11.2939 5.33932 11.3738 5.39144 11.4421C5.44355 11.5103 5.51079 11.5649 5.5876 11.6012C5.66442 11.6376 5.74859 11.6548 5.83317 11.6513C5.88265 11.6593 5.93303 11.6593 5.98251 11.6513L8.11584 11.0131L8.21184 10.9585C8.24507 10.9437 8.2757 10.9235 8.30251 10.8985L13.0332 6.05446C13.3515 5.74346 13.5421 5.32025 13.5665 4.87072C13.5873 4.64465 13.5605 4.41664 13.4878 4.20208C13.4151 3.98752 13.2983 3.79141 13.1452 3.62698Z"
              fill="white"/>
            <path
              d="M13.3 13.8333H3.70002C3.55857 13.8333 3.42292 13.7758 3.3229 13.6735C3.22288 13.5712 3.16669 13.4325 3.16669 13.2878C3.16669 13.1431 3.22288 13.0044 3.3229 12.9021C3.42292 12.7998 3.55857 12.7423 3.70002 12.7423H13.3C13.4415 12.7423 13.5771 12.7998 13.6771 12.9021C13.7772 13.0044 13.8334 13.1431 13.8334 13.2878C13.8334 13.4325 13.7772 13.5712 13.6771 13.6735C13.5771 13.7758 13.4415 13.8333 13.3 13.8333Z"
              fill="white"/>
          </svg>
        </div>
      </div>
      <div v-else key="edit-input">
       <div><slot/></div>

        <base-submit-button
          :loading="loading"
          @click.native="$emit('submit', $event)">Сохранить
        </base-submit-button>

      </div>
    </transition>

  </div>
</template>

<script>
import BaseInput from "@/components/common/ui/inputs/BaseInput";
import BaseSubmitButton from "@/components/common/ui/buttons/BaseSubmitButton";

export default {
  name: 'profile-input-wrapper',
  components: {BaseInput, BaseSubmitButton},
  props: {
    value: {type: String, default: null},
    label: {type: String, default: null},
    placeholder: {type: String, default: null},
    disabled: {type: Boolean, default: false},
    loading: {type: Boolean, default: false}
  },
  data() {
    return {
      isEditMode: false
    }
  },
  methods: {
    setEditMode(mode) {
      this.isEditMode = mode
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-input-wrapper {
  position: relative;
  min-height: 80px;

  &__label {
    display: block;
    margin-bottom: 4px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    color: #404040;
  }

  &__preview {
    &--value {
      position: relative;

      display: flex;
      align-items: center;

      padding-left: 16px;
      box-sizing: border-box;

      max-width: 386px;
      height: 56px;

      background: #F8FAFF;
      border-radius: 4px;

      cursor: pointer;

      &.disabled {
        cursor: no-drop;
      }

      > span {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #212121;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 50px;
      }

      .empty {
        color: #B5BAC7;
      }

      > svg {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 16px;

        width: 24px;
        height: 24px;

        path {
          fill: #000000;
        }
      }

    }
  }

}
</style>
