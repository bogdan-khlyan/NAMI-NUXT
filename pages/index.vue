<template>
  <base-wrapper>
    <div class="home">
      <banner/>
    </div>
  </base-wrapper>
</template>

<script>
import BaseWrapper from "~/components/common/baseWrapper/BaseWrapper";
import Banner from "~/components/home/banner/Banner";

export default {
  name: 'IndexPage',
  components: { Banner, BaseWrapper },
  computed: {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.home { width: 100vw; }
</style>
