<template>
  <nav class="d-flex justify-content-between m-4 mt-1 fs-3 fw-bolder">
    <a href="/portfolio">me</a>
    <div class="d-flex gap-5">
    <router-link v-for="route in routes" v-bind:key="route.name" :to="{ name: route.name }">
          {{route.label ?? route.name}}
        </router-link>
    </div>
  </nav>
</template>

<script>
import privateRoutes from '../router/private';
import publicRoutes from '../router/public';
export default {
  name: "nav-bar",

  computed: {
    isAuth() {
      return !!this.$store.state.essence?.user;
    },
    routes() {
      return this.isAuth ? privateRoutes : publicRoutes;
    }
  }
};
</script>

<style>
</style>