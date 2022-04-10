<template>
  <h1 @click="increment">{{ this.count }}</h1>
</template>
<script>
export default {
data() {
    return {

    }
},
computed: {
    count () {
      return this.$store.state.count
    }
},

  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>