<template>
  <div class="container" style="max-width: 600px">
    <main-title title="register" description="some shit "></main-title>
    <basic-auth-form
      :handler="registration"
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
    registration() {
      axios.get("/registration").then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style>
</style>