export default {
  namespaced: true,
  state() {
    return {
      errors: [],
      messages: [],
    }
  },
  mutations: {
    setError(state,error) {
      state.errors = [...state.errors, error];
    },
    setMessage(state,message) {
      state.message = [...state.messages, message];
    }
  },
  getters: {},
  actions: {}
}