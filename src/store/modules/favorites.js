import { localStorage } from '@/utils';

export default {
    namespaced: true,

    state: {
        favoriteList: [],
    },

    getters: {
        getFavoriteById:
            ({ favoriteList }) =>
            (productId) =>
                favoriteList.find((favorite) => favorite.id === productId),
    },

    mutations: {
        SET_FAVORITE_LIST(state, payload) {
            state.favoriteList = payload;
        },

        ADD_FAVORITE_PRODUCT(state, payload) {
            state.favoriteList.push(payload);
        },

        REMOVE_FAVORITE_PRODUCT(state, payload) {
            state.favoriteList.splice(payload, 1);
        },
    },

    actions: {
        setFavoriteList({ commit, dispatch }, payload) {
            commit('SET_FAVORITE_LIST', payload);
            dispatch('setFavoriteLocalStorage', payload);
        },

        setFavoriteLocalStorage({ state }) {
            localStorage.set('favorite_list', state.favoriteList);
        },

        addFavorite({ commit, dispatch, state }, payload) {

            commit('ADD_FAVORITE_PRODUCT', payload);
            dispatch('setFavoriteList', state.favoriteList);
        },

        removeFavorite({ commit, dispatch, state }, payload) {
            const favoriteIndex = state.favoriteList.findIndex((favorite) => favorite.id === payload.id);

            commit('REMOVE_FAVORITE_PRODUCT', favoriteIndex);
            dispatch('setFavoriteList', state.favoriteList);
        }
    },
};
