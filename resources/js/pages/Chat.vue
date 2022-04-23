<template>
  <div class="container" style="max-width: 800px">
    <main-title title="chat" description="some shit"></main-title>
    <div class="card p-3" style="min-height: 60vh">
        <chat-message :key="message.id" v-for="message in messages"
        :message=message
        ></chat-message>
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
   data () {
            return {
                userId: Math.random().toString(36).slice(-5),
                messages: [],
                newMessage: ''
            }
        },
        mounted () {
            Echo.channel('chat')
                .listen('NewChatMessage', (e) => {
                    if(e.user != this.userId) {
                        this.messages.push({
                            text: e.message,
                            user: e.user
                        });
                    }
                });
        },
        methods: {
            submit() {
                // axios.post(`${process.env.MIX_WEBSOCKET_SERVER_BASE_URL}/api/message`, {
                axios.post(`/api/message`, {
                    user: this.userId,
                    message: this.newMessage
                }).then((response) => {
                    this.messages.push({
                        text: this.newMessage,
                        user: this.userId
                    });

                    this.newMessage = '';
                }, (error) => {
                    console.log(error);
                });

            }
        }
};
</script>

<style>
</style>