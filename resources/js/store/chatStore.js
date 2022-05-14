import service from "../request"

export default {
    namespaced: true,
    state() {
        return {
            messages: [],
            loading: false,
            withEcho: false

        }
    },
    mutations: {
        setMessages(state, payload) {
            state.messages = payload.default ? payload.messages : [...state.messages, ...payload.messages]

        },
        setEcho(state, isEchoOn) {
            state.withEcho = isEchoOn

        },
        setLoading(state, condition) {
            state.loading = condition
        }
    },
    getters: {
        echoGetter(state, getters, rootState, rootGetters) {
            return state.withEcho
        },
    },
    actions: {
        sendMessage({ dispatch, commit, getters, rootGetters }, { message, user }) {
            try {
                axios
                    .post(`message`, {
                        message: message,
                        user: user,
                    })
            } catch (error) {
                console.warn(error);
            }
        },
        getEcho({ dispatch, commit, getters, rootGetters }) {
            window.Echo.channel("laravel_database_chat").listen(".message", (e) => {
                const user = rootGetters['essence/userGetter'];
                const message = {
                    ...e.message,
                    isMe: e.message.user.id === user.id || e.message.user.name === user.name,
                }
                commit('setMessages', {messages: [message], default: false});
                commit('setEcho', true)
            });
        },

        async getMessages({ dispatch, commit, getters, rootGetters }) {
            const token = rootGetters['essence/tokenGetter'];
            try {
                const response = await service.get(`messages`);
                commit('setMessages', {messages: response.data.data, default: true});
            } catch (error) {
                const { errors, message } = error;
                commit('notification/setError', errors, { root: true });
                commit('notification/setMessage', message, { root: true });
            } finally {
                if (!getters['echoGetter']) {
                    dispatch('getEcho');
                }

            }
        },
    }
}