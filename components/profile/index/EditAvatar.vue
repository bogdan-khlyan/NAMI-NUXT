<template>
  <div class="edit-avatar">

    <div class="edit-avatar__my-avatar">
      <base-user-avatar
        avatar="asfajf&23LA932jk2(*&"
        :size="52"/>
      <div class="edit-avatar__btn-edit">
        <button @click="clickButton">
          <svg v-if="editMode"
               width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.48578 3.33405C8.70858 2.98941 9.16012 2.89628 9.49433 3.12604L11.6761 4.62603C12.0103 4.85579 12.1007 5.32144 11.8779 5.66608L10.4233 7.91606C10.2005 8.2607 9.74897 8.35383 9.41476 8.12407C9.08056 7.89431 8.99025 7.42866 9.21305 7.08402L9.78602 6.19772C7.29293 6.87524 5.45455 9.21622 5.45455 12C5.45455 14.8545 7.38821 17.245 9.97912 17.8513C10.3708 17.9429 10.6163 18.3447 10.5274 18.7486C10.4385 19.1526 10.049 19.4057 9.65725 19.3141C6.41837 18.5562 4 15.5702 4 12C4 8.56908 6.23398 5.67624 9.28371 4.784L8.68749 4.37411C8.35329 4.14434 8.26298 3.6787 8.48578 3.33405ZM13.4726 5.25136C13.5615 4.84742 13.951 4.59426 14.3428 4.68592C17.5816 5.44382 20 8.42977 20 12C20 15.4309 17.766 18.3238 14.7163 19.216L15.3125 19.6259C15.6467 19.8557 15.737 20.3213 15.5142 20.6659C15.2914 21.0106 14.8399 21.1037 14.5057 20.874L12.3239 19.374C11.9897 19.1442 11.8993 18.6786 12.1221 18.3339L13.5767 16.0839C13.7995 15.7393 14.251 15.6462 14.5852 15.8759C14.9194 16.1057 15.0097 16.5713 14.7869 16.916L14.214 17.8023C16.7071 17.1248 18.5455 14.7838 18.5455 12C18.5455 9.14552 16.6118 6.755 14.0209 6.14872C13.6292 6.05706 13.3837 5.6553 13.4726 5.25136Z" fill="#FFFFFF"/></svg>
          <svg v-else
               width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1452 3.62698C12.9916 3.47119 12.8079 3.34996 12.6059 3.27105C12.4038 3.19214 12.1878 3.1573 11.9718 3.16876C11.5323 3.19369 11.1186 3.38872 10.8145 3.71426L6.07851 8.53649C6.05412 8.5639 6.0343 8.59523 6.01984 8.62922C5.99881 8.65999 5.98093 8.69289 5.96651 8.72741L5.29984 10.9531C5.27607 11.0362 5.27198 11.1238 5.28791 11.2089C5.30383 11.2939 5.33932 11.3738 5.39144 11.4421C5.44355 11.5103 5.51079 11.5649 5.5876 11.6012C5.66442 11.6376 5.74859 11.6548 5.83317 11.6513C5.88265 11.6593 5.93303 11.6593 5.98251 11.6513L8.11584 11.0131L8.21184 10.9585C8.24507 10.9437 8.2757 10.9235 8.30251 10.8985L13.0332 6.05446C13.3515 5.74346 13.5421 5.32025 13.5665 4.87072C13.5873 4.64465 13.5605 4.41664 13.4878 4.20208C13.4151 3.98752 13.2983 3.79141 13.1452 3.62698Z" fill="white"/><path d="M13.3 13.8333H3.70002C3.55857 13.8333 3.42292 13.7758 3.3229 13.6735C3.22288 13.5712 3.16669 13.4325 3.16669 13.2878C3.16669 13.1431 3.22288 13.0044 3.3229 12.9021C3.42292 12.7998 3.55857 12.7423 3.70002 12.7423H13.3C13.4415 12.7423 13.5771 12.7998 13.6771 12.9021C13.7772 13.0044 13.8334 13.1431 13.8334 13.2878C13.8334 13.4325 13.7772 13.5712 13.6771 13.6735C13.5771 13.7758 13.4415 13.8333 13.3 13.8333Z" fill="white"/></svg>
        </button>
      </div>
    </div>

    <div v-if="editMode"
         class="list">
      <base-user-avatar
        v-for="avatar in avatars"
        :key="avatar"
        class="item"
        :avatar="avatar"
        :size="52"/>
    </div>
  </div>
</template>

<script>
import BaseUserAvatar from "@/components/common/BaseUserAvatar";
import BaseSvg from "@/components/common/BaseSvg";
import { v4 as uuid } from 'uuid';

export default {
  name: 'edit-avatar',
  components: { BaseUserAvatar, BaseSvg },
  data() {
    return {
      editMode: false,
      avatars: []
    }
  },
  created() {
    this.generateAvatars()
  },
  methods: {
    clickButton() {
      if (!this.editMode) {
        this.editMode = true
      } else {
        this.generateAvatars()
      }
    },
    generateAvatars() {
      this.avatars.splice(0)
      for(let i = 0; i < 5; ++i) {
        this.avatars.push(uuid())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-avatar {
  display: flex;

  width: max-content;

  .list {
    display: flex;

    margin-left: 12px;

    .item {
      margin-left: 6px;
      margin-right: 6px;
    }
  }

  &__my-avatar {
    position: relative;
  }

  &__btn-edit {
    position: absolute;
    right: -6px;
    bottom: 0;
    > button {
      position: relative;

      width: 24px;
      height: 24px;

      border: none;
      border-radius: 50%;
      background: #F34942;

      cursor: pointer;
      transition: 200ms;

      &:hover {
        background: #f67570;
      }

    }
  }

}
</style>

<style lang="scss">
.edit-avatar__btn-edit > button > svg {
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  margin: auto;

  width: 16px;
  height: 16px;
}
</style>
