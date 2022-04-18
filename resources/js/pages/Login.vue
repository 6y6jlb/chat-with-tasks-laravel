<template>
  <div class="container" style="max-width: 600px">
    <h3>Login</h3>
    <basic-auth-form @submit="login" authType="LOGIN"></basic-auth-form>
  </div>
</template>

<script>
import { nextTick } from "@vue/runtime-core";
import BasicAuthForm from "../components/auth/BasicAuthForm.vue";
export default {
  name: "login-page",
  components: { BasicAuthForm },
  computed: {
    isAuth() {
      return !!this.$store.state.essence?.user;
    },
  },
  methods: {
    async login(formData) {
      const data = {
        email: formData.email.trim(),
        password: formData.password.trim(),
      };
      await this.$store.dispatch("essence/fetchUser", data);
      this.$router.push({ name: "dashboard" });
      await nextTick();
      this.$router.push({ name: this.isAuth ? "dashboard" : "home" });
    },
  },
};
</script>

<style>
</style>