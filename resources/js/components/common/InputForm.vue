<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">{{ this.title }}</span>
    <input
     @input="handleInput"
      :id=id
      :name=id
      :aria-label=id
      :type=type
      class="form-control"
      :placeholder="placeholder"
      aria-describedby="basic-addon1"
    />
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: ["title", "type", "id", "placeholder","value"],
   data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    }
  }
 
};
</script>

<style>
</style>