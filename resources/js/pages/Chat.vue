<template>
  <div class="container" style="max-width: 800px">
    <main-title title="chat" description="some shit"></main-title>
    <div class="card p-3" style="min-height: 60vh">
      <chat-message
        :key="message.id"
        v-for="message in messages"
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
        :disabled="!this.newMessage.trim()"
        @click.prevent="submit"
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
          Math.ceil(Math.random() * 10000),
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
        });
      }
    });
  },
  methods: {
    submit() {
      axios
        .post(`api/message`, {
          message: this.newMessage,
          user: this.user.name,
        })
        .then((response) => {
          this.messages.push({
            text: this.newMessage,
            user: this.user.name,
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