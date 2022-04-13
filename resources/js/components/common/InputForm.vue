<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">{{ this.title }}</span>
    <input
      :type=type
      :name=id
      :id=id
      class="form-control"
      :placeholder="placeholder"
      :aria-label=id
      aria-describedby="basic-addon1"
    />
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: ["title", "type", "id", "placeholder"],
};
</script>

<style>
</style>