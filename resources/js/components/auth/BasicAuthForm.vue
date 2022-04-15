<template>
  <form
    class="d-flex flex-column justify-content-center"
    style="gap: 10px"
    @submit.prevent="handler"
  >
    <input-form
      id="email"
      title="email"
      type="text"
      v-bind:vaue="email"
      @input="email"
      placeholder="enter your name"
    ></input-form>

    <input-form
      id="password"
      title="password"
      type="password"
      v-bind:vaue="password"
      @input="password"
      placeholder="enter password"
    ></input-form>

    <input-form
      v-if="authType === 'REGISTRATION'"
      id="passwordRepeat"
      title="repeat"
      type="password"
      v-bind:vaue="passwordRepeat"
      @input="passwordRepeat"
      placeholder="repeat password"
    ></input-form>

    <button type="submit" class="btn btn-success">{{ this.authType }}</button>
  </form>
</template>

<script>
import InputForm from "../common/InputForm.vue";
export default {
  components: { InputForm },
  name: "basic-auth-form",
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
    };
  },
  props: {
    authType: {
      type: String,
      required: true,
    },
    handler: {
      type: Function,
    },
  },
};
</script>

<style>
</style>