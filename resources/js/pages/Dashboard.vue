<template>
  <div>
dashboard
{{user?.email}}
  </div>
</template>

<script>
export default {
    name:'dashboard',
    mounted() {
      !this.user && this.$router.push({name:'home'})
    },
    data() {
        return {
            user: this.$store.state.essence.user
        }
    },
}
</script>

<style>

</style>