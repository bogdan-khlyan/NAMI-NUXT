<template>
  <svg class="favorite-icon"
       :class="!active ? 'no-active' : ''"
       width="24" height="24"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path :d="d"
          :fill="fill"
          :stroke="stroke"
          :stroke-width="strikeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
    />
  </svg>
</template>

<script>
export default {
  name: 'favorite-icon',
  props: {
    active: { type: Boolean, default: false }
  },
  computed: {
    strokeLinejoin() {
      return this.active ? null : 'round'
    },
    strokeLinecap() {
      return this.active ? null : 'round'
    },
    strikeWidth() {
      return this.active ? '0' : '1.5'
    },
    stroke() {
      return this.active ? 'transparent' : '#282B32'
    },
    fill() {
      return this.active ? '#F43030' : 'transparent'
    },
    d() {
      return this.active ?
        'M19.57 5.44C20.4866 6.36024 21.0012 7.60616 21.0012 8.905C21.0012 10.2038 20.4866 11.4498 19.57 12.37L12 20L4.43 12.37C3.74924 11.6846 3.28577 10.8137 3.09761 9.86623C2.90944 8.91874 3.00494 7.9368 3.37215 7.04333C3.73936 6.14985 4.36197 5.38455 5.16202 4.84321C5.96208 4.30188 6.90405 4.00857 7.87 4C9.16164 4.00784 10.3979 4.52536 11.31 5.44C11.576 5.70322 11.8078 5.99888 12 6.32C12.1922 5.99888 12.424 5.70322 12.69 5.44C13.1394 4.98405 13.6749 4.62199 14.2655 4.37486C14.856 4.12774 15.4898 4.00047 16.13 4.00047C16.7702 4.00047 17.404 4.12774 17.9945 4.37486C18.5851 4.62199 19.1206 4.98405 19.57 5.44V5.44Z'
        : 'M19.57 5.44C20.4866 6.36024 21.0012 7.60616 21.0012 8.905C21.0012 10.2038 20.4866 11.4498 19.57 12.37L12 20L4.43 12.37C3.74924 11.6846 3.28577 10.8137 3.09761 9.86623C2.90944 8.91874 3.00494 7.9368 3.37215 7.04333C3.73936 6.14985 4.36197 5.38455 5.16202 4.84321C5.96208 4.30188 6.90405 4.00857 7.87 4C9.16164 4.00784 10.3979 4.52536 11.31 5.44C11.576 5.70322 11.8078 5.99888 12 6.32C12.1922 5.99888 12.424 5.70322 12.69 5.44C13.1394 4.98405 13.6749 4.62199 14.2655 4.37486C14.856 4.12774 15.4898 4.00047 16.13 4.00047C16.7702 4.00047 17.404 4.12774 17.9945 4.37486C18.5851 4.62199 19.1206 4.98405 19.57 5.44V5.44Z'
    }
  }
}
</script>

<style scoped lang="scss">
.favorite-icon {
  cursor: pointer;
  > path {
    transition: 600ms;
  }
}
</style>
