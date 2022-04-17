export default {
    namespaced: true,
    state () {
        return {
          user: null,
          loading: false,
        }
      },
      mutations: {
       setUser (state, user) {
         state.user = user
       },
       setLoading(state, condition) {
           state.loading = condition
       }
     },
     getters: {

     },
     actions: {
        async fetchUser({commit},formData) {
            try {
                commit('setLoading', true);
                const response = await axios.post('api/auth/login',formData);
                const {token, user, message} = response.data;
                commit('setUser', user);
                commit('notification/setMessage', message);
                console.log(response);
            } catch (error) {
                const {errors, message} = error;
                commit('notification/setError', message);
                commit('notification/setError', errors);
            } finally {
                commit('setLoading', false);
            }
           
           
        }
     }
}