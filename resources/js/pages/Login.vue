<template>
  <div class="container" style="max-width: 600px">
    <main-title title="login" description="some shit "></main-title>
    <basic-auth-form @submit="login" authType="LOGIN"></basic-auth-form>
  </div>
</template>

<script>
import { nextTick } from "@vue/runtime-core";
import BasicAuthForm from "../components/auth/BasicAuthForm.vue";
import MainTitle from "../components/common/MainTitle.vue";
export default {
  name: "login-page",
  components: { BasicAuthForm, MainTitle },
  computed: {
    isAuth() {
      return !!this.$store.state.essence?.user;
    },
  },
  methods: {
    async login(formData) {
      const data = {
        form: {
          email: formData.email.trim(),
          password: formData.password.trim(),
        },
        route: "login",
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