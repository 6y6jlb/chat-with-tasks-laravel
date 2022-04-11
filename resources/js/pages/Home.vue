<template>
  <div>
    <h2>home page</h2>
    <example-component></example-component>
  </div>
</template>

<script>
import ExampleComponent from "../components/ExampleComponent.vue";
export default {
  name: "home-page",
  components: {
    ExampleComponent,
  },
};
</script>

<style>
</style>