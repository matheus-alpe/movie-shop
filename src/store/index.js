import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showAsideModal: '',
        isLoading: false
    },

    mutations: {
        SET_SHOW_ASIDE_MODAL(state, payload) {
            state.showAsideModal = payload;
        },
    
        SET_IS_LOADING(state, payload) {
            state.isLoading = payload;
        },
    },
    actions: {
        openModal({ commit }, payload) {
            commit('SET_SHOW_ASIDE_MODAL', payload);
        },

        setLoadingState({ commit }, payload) {
            commit('SET_IS_LOADING', payload);
        }
    },

    modules,
});
