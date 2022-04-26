<template>
  <div class="bg-primary text-shite d-flex flex-column w-50 border rounded p-2">
    <div class="d-flex" style="gap: 4px">
      <span>{{this.message.user}}</span>
      <span class="text-success">online</span>
    </div>
    <div>
      <p>
        {{this.message.text}}
      </p>
    </div>
    <div>
      <span  class="text-mutted text-right text small"> {{this.message.created_at}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-message",
  props: ['message']
};
</script>

<style>
</style>