<template>
  <nav class="d-flex justify-content-between m-4 fs-3 fw-bolder">
    <a class="btn btn-info btn-lg"
    style="width: 200px"
      href="/portfolio">me</a>
    <div class="d-flex gap-5">
      <router-link
        class="btn btn-outline-secondary btn-lg d-block"
        v-for="route in routes"
        v-bind:key="route.name"
        :to="{ name: route.name }"
      >
        {{ route.label ?? route.name }}
      </router-link>
      <a href="#" @click.prevent="logout" class="btn btn-success btn-lg" v-if="isAuth">Logout</a>
    </div>
  </nav>
</template>

<script>
import privateRoutes from "../router/private";
import publicRoutes from "../router/public";
export default {
  name: "nav-bar",

  computed: {
    isAuth() {
      return !!this.$store.state.essence?.user.id;
    },
    routes() {
      return this.isAuth ? privateRoutes : publicRoutes;
    },
  },

  methods: {
    async logout() {
      await this.$store.dispatch("essence/logout");
      await nextTick();
      this.$router.push({ name:"home" });
    },
  },
};
</script>

<style>
</style>