export default {
    namespaced: true,

    state: {
        genreList: []
    },

    getters: {
        getGenreById: ({ genreList }) => (genreId) => genreList.find(genre => genre.id === genreId),
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