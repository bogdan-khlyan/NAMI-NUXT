<template>
  <div class="stars"
       :class="`hover${hover} select${select}`">
    <star-icon
      v-for="index in 5" :key="index"
      @mouseenter.native="hover = index"
      @mouseleave.native="hover = null"
      @click.native="select = index"
    />
  </div>
</template>

<script>
import StarIcon from "@/components/common/icons/StarIcon.vue";

export default {
  name: 'stars',
  components: { StarIcon },
  data() {
    return {
      hover: null,
      select: null
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.stars {
  cursor: pointer;
  ::v-deep svg {
    path {
      transition-duration: 600ms;
    }
  }
  &.hover1 {
    ::v-deep svg {
      &:nth-child(1) {
        path {
          fill: #F9B93E!important;
        }
      }
      &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        path {
          fill: #D4D9E6!important;
        }
      }
    }
  }
  &.hover2 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2) {
        path {
          fill: #F9B93E!important;
        }
      }
      &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        path {
          fill: #D4D9E6!important;
        }
      }
    }
  }
  &.hover3 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        path {
          fill: #F9B93E!important;
        }
      }
      &:nth-child(4), &:nth-child(5) {
        path {
          fill: #D4D9E6!important;
        }
      }
    }
  }
  &.hover4 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        path {
          fill: #F9B93E!important;
        }
      }
      &:nth-child(5) {
        path {
          fill: #D4D9E6!important;
        }
      }
    }
  }
  &.hover5 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        path {
          fill: #F9B93E!important;
        }
      }
    }
  }
  &.select1 {
    ::v-deep svg {
      &:nth-child(1) {
        path {
          fill: #F9B93E;
        }
      }
    }
  }
  &.select2 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2) {
        path {
          fill: #F9B93E;
        }
      }
    }
  }
  &.select3 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        path {
          fill: #F9B93E;
        }
      }
    }
  }
  &.select4 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        path {
          fill: #F9B93E;
        }
      }
    }
  }
  &.select5 {
    ::v-deep svg {
      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        path {
          fill: #F9B93E;
        }
      }
    }
  }
}
</style>
