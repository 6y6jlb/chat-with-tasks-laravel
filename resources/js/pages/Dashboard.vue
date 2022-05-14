<template>
  <div>
    dashboard
    {{ user?.email }}
  </div>
</template>

<script>
import service from '../request'
export default {
  name: "dashboard",
  mounted() {
    !this.user && this.$router.push({ name: "home" });
    service.get("user").then((res) => console.log(res));
  },
  data() {
    return {
      user: this.$store.state.essence.user,
    };
  },
};
</script>

<style>
</style>