<template>
  <form class="d-flex flex-column justify-content-center" style="gap: 10px">
    <input-form
      id="email"
      title="email"
      type="text"
      placeholder="enter your name"
      v-bind:value="form.email"
      v-on:input="updateEmail"
    ></input-form>

    <input-form
      id="password"
      title="password"
      type="password"
      placeholder="enter password"
      v-bind:value="form.password"
      v-on:input="updatePassword"
    ></input-form>

    <input-form
      v-if="authType === 'REGISTRATION'"
      id="passwordRepeat"
      title="repeat"
      type="password"
      placeholder="repeat password"
      v-bind:value="form.passwordRepeat"
      v-on:input="updateRepeatedPassword"
    ></input-form>

    <button @click.prevent="$emit('submit', this.form)" class="btn btn-success">
      {{ authType }}
    </button>
  </form>
</template>

<script>
import InputForm from "../common/InputForm.vue";
export default {
  components: { InputForm },
  name: "basic-auth-form",
  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordRepeat: "",
      },
    };
  },
  props: ["authType"],
  
  methods: {
    updateEmail(event) {
      this.form.email = event.target?.value;
    },
    updatePassword(event) {
      this.form.password = event.target?.value;
    },
    updateRepeatedPassword(event) {
      this.form.passwordRepeat = event.target?.value;
    }
    
  }
};
</script>

<style>
</style>