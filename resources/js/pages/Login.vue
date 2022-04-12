<template>
<div class="container" style="max-width: 600px" >
 <basic-auth-form  authType='LOGIN'></basic-auth-form>
</div>
</template>

<script>
import BasicAuthForm from '../components/auth/BasicAuthForm.vue'
export default {
    name: 'login-page',
    components: {BasicAuthForm}
}
</script>

<style>

</style>