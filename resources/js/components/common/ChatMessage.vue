<template>
  <div class="text-dark d-flex flex-column w-50 border rounded p-2"
  :class="[userBg, userPossition]">
    <div class="d-flex" style="gap: 4px">
      <span>{{this.message.user.name}}</span>
      <span class="text-mutted" v-if="this.message.user.id">{{this.message.user.id}}</span>
      <!-- <span class="text-success">online</span> -->
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
  props: ['message'],
  data() {
   return { 
     userBg: this.message.isMe ? 'bg-deep' : 'bg-light',
     userPossition: this.message.isMe ? 'align-self-end' : 'align-self-start'
     }
  }
};
</script>

<style scoped>
  .bg-light {
    background-color: rgb(170, 192, 250);
  }
  .bg-deep {
    background-color: rgb(127, 149, 207);
  }
</style>