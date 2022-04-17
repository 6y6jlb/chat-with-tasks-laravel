<template>
  <h1>{{ this.count }}</h1>
  <button :disabled="loading" @click="increment">increment</button>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    count() {
      return this.$store.state.example.count;
    },
  },

  methods: {
    async increment() {
      this.loading = true;
      await this.$store.dispatch("example/asyncIncrement");
      console.log(this.$store.state.example.count);
      this.loading = false;
    },
  },
};
</script>