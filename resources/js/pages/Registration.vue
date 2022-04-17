<template>
<div class="container" style="max-width: 600px" >
    <h3>Registration</h3>
   <basic-auth-form :handler="registration" authType='REGISTRATION'></basic-auth-form>
   </div>
</template>

<script>
import BasicAuthForm from '../components/auth/BasicAuthForm.vue'
export default {
    name: 'registration-page',
    components: {BasicAuthForm},

     methods: {
      registration() {
          axios.get('/registration')
          .then(response=>{
              console.log(response);
          })
      }
  }
}
</script>

<style>

</style>