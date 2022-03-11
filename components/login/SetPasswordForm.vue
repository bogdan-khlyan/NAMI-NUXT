<template>
  <div class="set-password-form">
    <password-input/>
    <password-input/>
  </div>
</template>

<script>
import PasswordInput from "@/components/login/PasswordInput";

export default {
  name: 'set-password-form',
  components: { PasswordInput }
}
</script>

<style scoped lang="scss">
.set-password-form {

}
</style>
