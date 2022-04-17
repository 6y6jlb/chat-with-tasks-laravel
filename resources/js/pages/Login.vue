<template>
  <div class="container" style="max-width: 600px">
    <h3>Login</h3>
    <basic-auth-form @submit="login" authType="LOGIN"></basic-auth-form>
  </div>
</template>

<script>
import BasicAuthForm from "../components/auth/BasicAuthForm.vue";
export default {
  name: "login-page",
  components: { BasicAuthForm },
 
  methods: {
      async login(formData) {
        const data = {
          email: formData.email.trim(),
          password: formData.password.trim(),
        };
        await this.$store.dispatch("user/fetchUser", data);
          console.log(this.$store.state.user.user);
      }
  }
};
</script>

<style>
</style>