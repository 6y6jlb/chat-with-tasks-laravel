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
      :value="newMessage"
      @input="updateNewMessage"
      id="newMessage"
      name="newMessage"
      type="text"
      title="text"
    >
      <button @click.prevent="submit" class="btn btn-success">send it</button>
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
      userId: Math.random().toString(36).slice(-5),
      messages: [],
      newMessage: "",
    };
  },
  mounted() {
    window.Echo.channel("chat").listen("NewChatMessage", (e) => {
      console.log(e);
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
          user: this.userId,
          message: this.newMessage,
        })
        .then(
          (response) => {
            console.dir(response)
            this.messages.push({
              text: this.newMessage,
              user: this.userId,
            });
          }
        )
        .catch(err=>{
            console.warn(err)
        })
        .finally(()=>{
            this.newMessage = '';
        })
    },
      updateNewMessage(event) {
      this.newMessage = event.target?.value;
    },
  },
};
</script>

<style>
</style>