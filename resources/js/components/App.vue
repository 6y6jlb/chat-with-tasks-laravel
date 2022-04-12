<template>
  <div class="">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: "app-component",
  components: {
    NavBar
  }
};
</script>

<style>
</style>