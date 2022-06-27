import { localStorage } from '@/utils';

export default {
    namespaced: true,

    state: {
        user: {},
    },

    getters: {
        hasUserLogged: ({ user }) => Boolean(user.email),
    },

    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        },
    },

    actions: {
        setUser({ commit, dispatch }, payload) {
            commit('SET_USER', payload);
            dispatch('setUserLocalStorage', payload);
        },

        setUserLocalStorage({ state }) {
            localStorage.set('user', state.user);
        },
    },
};
