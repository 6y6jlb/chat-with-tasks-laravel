<template>
  <div>
dashboard
{{user?.email}}
  </div>
</template>

<script>
export default {
    name:'dashboard',
    data() {
        return {
            user: this.$store.state.user.user
        }
    },
}
</script>

<style>

</style>