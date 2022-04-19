<template>
  <div class="container" style="max-width: 800px">
    <main-title title="chat" description="some shit"></main-title>
    <div class="card p-3" style="min-height: 60vh">
        <chat-message></chat-message>
        <chat-message></chat-message>
        <chat-message></chat-message>
    </div>
    <input-form id="message" name="message" type="text" title="text">
    <button @click.prevent="$emit('submit', this.form)" class="btn btn-success">
      send it
    </button>
    </input-form>
  </div>
</template>

<script>
import ChatMessage from '../components/common/ChatMessage.vue';
import InputForm from '../components/common/InputForm.vue';
import MainTitle from "../components/common/MainTitle.vue";

export default {
  components: {
    MainTitle,
    ChatMessage,
    InputForm,
  },
};
</script>

<style>
</style>