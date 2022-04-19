<template>
  <div class="mb-3">
      <h3 class="text-uppercase">{{title}}</h3>
      <small class="text-muted">{{description}}</small>
  </div>
</template>

<script>
export default {
    name: 'main-title',
    props:['title','description'],
}
</script>

<style>

</style>