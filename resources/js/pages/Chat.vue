<template>
  <div class="container" style="max-width: 800px">
    <main-title title="chat" description="some shit"></main-title>
    <div class="card p-3" style="min-height: 60vh; gap: 10px">
      <chat-message
        v-for="message in messages"
        :key="message.id"
        :message="message"
      ></chat-message>
    </div>
    <input-form
      :value="this.newMessage"
      @input="updateNewMessage"
      id="newMessage"
      name="newMessage"
      type="text"
      title="text"
      placeholder="message"
    >
      <button
        @click.prevent="submit"
        :disabled="!this.newMessage.trim()"
        class="btn btn-success"
      >
        send it
      </button>
    </input-form>
    <div ref="chatRef" />
  </div>
</template>

<script>
import ChatMessage from "../components/common/ChatMessage.vue";
import InputForm from "../components/common/InputForm.vue";
import MainTitle from "../components/common/MainTitle.vue";

export default {
  components: {
    MainTitle,
    ChatMessage,
    InputForm,
  },
  data() {
    return {
      newMessage: "",
      user: this.$store?.state.essence?.user,
    };
  },
  mounted() {
    this.getMessages();
  },
  computed: {
    messages() {
      return this.$store?.state.chat.messages;
    },
  },
  methods: {
    scroolDown() {
      this.$nextTick(() => {
        this.$refs.chatRef.scrollTop = 0;
      });
    },
    async getMessages() {
      await this.$store.dispatch("chat/getMessages");
      await this.scroolDown();
    },
    async submit() {
      await this.$store.dispatch("chat/sendMessage", {
        message: this.newMessage,
        user: this.user,
      });
      this.newMessage = "";
    },
    updateNewMessage(event) {
      this.newMessage = event.target?.value;
    },
  },
};
</script>

<style>
</style>