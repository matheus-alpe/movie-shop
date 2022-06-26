export default {
    namespaced: true,

    state: {
        genreList: []
    },

    mutations: {
        SET_GENRE_LIST(state, payload) {
            state.genreList = payload;
        },
    },

    actions: {
        setGenreList({ commit }, payload) {
            commit('SET_GENRE_LIST', payload);
        },
    },
}