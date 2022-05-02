<template>
  <div class="container" style="max-width: 600px">
    <main-title title="register" description="some shit "></main-title>
    <basic-auth-form
      @submit="register"
      authType="REGISTRATION"
    ></basic-auth-form>
  </div>
</template>

<script>
import BasicAuthForm from "../components/auth/BasicAuthForm.vue";
import MainTitle from "../components/common/MainTitle.vue";
export default {
  name: "registration-page",
  components: { BasicAuthForm, MainTitle },

  methods: {
    async register(formData) {
      const data = {
        form: {
          email: formData.email.trim(),
          password: formData.password.trim(),
          confirmPassword: formData.password.trim(),
        },
        route: "register",
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