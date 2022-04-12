<template>
    <form action="" class="d-flex flex-column justify-content-center" style="gap: 10px">
        <input id="email" name="email" v-model="email" type="text">
        <input id="password" name="password" v-model="password" type="password">
        <input id="passwordRepeat" name="passwordRepeat" v-model="passwordRepeat" v-if="authType === 'REGISTRATION'" type="password">
       <button type="submit" class="btn btn-success">{{this.authType}}</button>
    </form>
</template>

<script>
export default {
    name: 'basic-auth-form',
    props: {
        authType: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>