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
       
        async fetchUser({ dispatch, commit, getters, rootGetters },formData) {
            try {
                commit('setLoading', true);
                const response = await axios.post('api/auth/login',formData);
                const {token, user, message} = response.data;
                commit('setUser', user);
                commit('notification/setMessage', message,{ root: true });
            } catch (error) {
                const {errors, message} = error;
                commit('notification/setError', errors,{ root: true });
                commit('notification/setMessage', message,{ root: true });
            } finally {
                commit('setLoading', false);
            }
           
           
        }
     }
}