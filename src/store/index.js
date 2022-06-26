import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showAsideModal: '',
    },
    getters: {},
    mutations: {
        SET_SHOW_ASIDE_MODAL(state, payload) {
            state.showAsideModal = payload;
        },
    },
    actions: {
        openModal({ commit }, payload) {
            commit('SET_SHOW_ASIDE_MODAL', payload);
        },
    },

    modules,
});
