<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'

export default {
  components: { SignupForm },
  name: 'SignupView'
}
</script>