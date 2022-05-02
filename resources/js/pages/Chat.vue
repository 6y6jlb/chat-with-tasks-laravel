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
    <div ref="chatRef"/>
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
      messages: [],
      newMessage: "",
    };
  },
  computed: {
    user() {
      return {
        name:
          this.$store?.state.essence?.user?.name ??
          Math.random().toString(36).slice(-5),
        id: this.$store?.state.essence?.user?.id ?? 0,
      };
    },
  },
  mounted() {
    this.getMessages();
  },
  methods: {
    scroolDown() {
      this.$nextTick(() => {
            this.$refs.chatRef.scrollTop = 0;
        });
    },
    getMessages() {
      axios
        .get(`api/messages`)
        .then((response) => {
          this.messages = response.data.data;
          this.scroolDown();
        })
        .catch((e) => console.warn(e))
        .finally(() => this.getEcho());
    },
    getEcho() {
      window.Echo.channel("laravel_database_chat").listen(".message", (e) => {
        console.info(e);
        const message = {
            ...e.message,
            isMe: e.message.user.id === this.user.id && e.message.user.name === this.user.name,
            }
            this.messages.push(message);
            this.scroolDown();
      });
    },
    submit() {
      axios
        .post(`api/message`, {
          message: this.newMessage,
          user: this.user,
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          this.newMessage = "";
        });
    },
    updateNewMessage(event) {
      this.newMessage = event.target?.value;
    },
  },
};
</script>

<style>
</style>