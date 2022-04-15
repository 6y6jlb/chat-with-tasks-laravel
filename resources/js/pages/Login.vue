<template>
  <div class="container" style="max-width: 600px">
    <h3>Login</h3>
    <basic-auth-form :handler="login" authType="LOGIN"></basic-auth-form>
  </div>
</template>

<script>
import BasicAuthForm from "../components/auth/BasicAuthForm.vue";
export default {
  name: "login-page",
  components: { BasicAuthForm },
 
  methods: {
      login(formData) {
          axios.post('api/login',formData)
          .then(response=>{
              debugger;
          })
      }
  }
};
</script>

<style>
</style>