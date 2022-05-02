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
        id:
          this.$store?.state.essence?.user?.id ??
          0,
      };
    },
  },
  mounted() {
    window.Echo.channel("laravel_database_chat").listen(".message", (e) => {
      console.info(e);
      if (e.user != this.userId) {
        console.log(e);
        this.messages.push({
          text: e.message,
          user: e.user,
          isMe: e.user.id === this.user.id && e.user.name === this.user.name
        });
      }
    });
  },
  methods: {
    submit() {
      axios
        .post(`api/message`, {
          message: this.newMessage,
          user: this.user,
        })
        .then((response) => {
          this.messages.push({
            text: this.newMessage,
            user: this.user,
            isMe: true
          });
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