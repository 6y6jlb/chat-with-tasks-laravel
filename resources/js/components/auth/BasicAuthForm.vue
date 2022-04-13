<template>
  <form
    class="d-flex flex-column justify-content-center"
    style="gap: 10px"
    @submit.prevent="handler"
    action="/login"
  >
    <input-form
      id="email"
      title="email"
      type="text"
      placeholder="enter your name"
    ></input-form>

    <input-form
      id="password"
      title="password"
      type="password"
      placeholder="enter password"
    ></input-form>

    <input-form
      v-if="authType === 'REGISTRATION'"
      id="passwordRepeat"
      title="repeat"
      type="password"
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
  props: {
    authType: {
      type: String,
      required: true,
    },
    handler: {
        type: Function,
    }
  },
};
</script>

<style>
</style>