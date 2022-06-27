export default {
    namespaced: true,

    state: {
        term: '',
        productList: []
    },

    getters: {
        getUniqueProductsList: ({ productList }) => [
            ...new Map(productList.map((item) => [item["id"], item])).values(),
        ],
    },

    mutations: {
        SET_PRODUCT_LIST(state, payload) {
            state.productList = payload;
        },

        SET_TERM(state, payload) {
            state.term = payload;
        },
    },

    actions: {
        setProductList({ commit }, payload) {
            commit('SET_PRODUCT_LIST', payload);
        },
        
        concatProductList({ dispatch, state }, payload) {
            const newProductList = state.productList.concat(payload);
            dispatch('setProductList', newProductList);
        },

        setTerm({ commit }, payload) {
            commit('SET_TERM', payload);
        },
    },
}