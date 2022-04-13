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
      login() {
          axios.get('/login')
          .then(response=>{
              console.log(response);
          })
      }
  }
};
</script>

<style>
</style>