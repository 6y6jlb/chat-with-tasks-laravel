<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">{{ this.title }}</span>
    <input
      v-model="value"
      :id="id"
      :name="id"
      :aria-label="id"
      :type="type"
      :placeholder="placeholder"
      aria-describedby="basic-addon1"
      class="form-control"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: ["title", "type", "id", "placeholder","value"],
};
</script>

<style>
</style>