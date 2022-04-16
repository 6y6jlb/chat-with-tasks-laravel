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
      login(formData) {
        const data = {
          email: formData.email.trim(),
          password: formData.password.trim(),
        };
          axios.post('api/login',data)
          .then(response=>{
              console.log(response);
          })
      }
  }
};
</script>

<style>
</style>