import service from '../request';
import router from '../router';
import { PRIVATE_ROUTES } from '../router/private';

export default {
  namespaced: true,
  state() {
    return {
      user: {
        name: Math.random().toString(36).slice(-5),
        id: 0,
      },
      token: null,
      loading: false,
      refreshed: false,
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    },
    setLoading(state, condition) {
      state.loading = condition
    }
  },
  getters: {
    tokenGetter(state, getters, rootState, rootGetters) {
      return state.token
    },
    userGetter(state, getters, rootState, rootGetters) {
      return state.user
    },
  },
  actions: {
    async fetchUser({ dispatch, commit, getters, rootGetters }, data) {
      try {
        commit('setLoading', true);
        const response = await service.post('/auth/' + data.route, data.form);
        const { token, user, message } = response.data;

        commit('setUser', user);
        commit('setToken', token);
        commit('notification/setMessage', message, { root: true });

        router.push(PRIVATE_ROUTES.CHAT)
      } catch (error) {
        const { errors, message } = error;

        commit('notification/setError', errors, { root: true });
        commit('notification/setMessage', message, { root: true });

      } finally {

        commit('setLoading', false);
      }
    },
    async logout({ dispatch, commit, getters, rootGetters }) {
      try {
        commit('setLoading', true);
        const user = getters['userGetter'];
        const response = await service.get(`auth/logout/${user.id}`);
        const { message } = response.data;

        commit('setUser', {});
        commit('notification/setMessage', message, { root: true });

      } catch (error) {
        const { errors, message } = error;

        commit('notification/setError', errors, { root: true });
        commit('notification/setMessage', message, { root: true });

      } finally {

        commit('setLoading', false);
      }
    },
    async refresh() { },
    async resetToken() { },
  }
}