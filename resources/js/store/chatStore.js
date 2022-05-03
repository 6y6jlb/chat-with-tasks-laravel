export default {
    namespaced: true,
    state() {
        return {
            messages: [],
            loading: false

        }
    },
    mutations: {
        setMessages(state, messages) {
            state.messages = [...state.messages, ...messages]

        },
        setLoading(state, condition) {
            state.loading = condition
        }
    },
    getters: {
    },
    actions: {
        sendMessage({ dispatch, commit, getters, rootGetters },{message, user}) {
            try {
                axios
                    .post(`api/message`, {
                        message: message,
                        user: user,
                    })
            } catch (error) {
                console.warn(error);
            }
        },
        getEcho({ dispatch, commit, getters, rootGetters }) {
            const user = rootGetters['essence/userGetter'];
            window.Echo.channel("laravel_database_chat").listen(".message", (e) => {
                console.info(e);
                const message = {
                    ...e.message,
                    isMe: e.message.user.id === user.id && e.message.user.name === user.name,
                }
                commit('setMessages', [message]);
            });
        },

        async getMessages({ dispatch, commit, getters, rootGetters }) {
            const token = rootGetters['essence/tokenGetter'];
            try {
                const response = await axios.create({
                    baseURL: 'api/',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }).get(`messages`);
                commit('setMessages', response.data.data);
            } catch (error) {
                const { errors, message } = error;
                commit('notification/setError', errors, { root: true });
                commit('notification/setMessage', message, { root: true });
            } finally {
                dispatch('getEcho');
            }
        },
    }
}