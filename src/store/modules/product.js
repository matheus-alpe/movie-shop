export default {
    namespaced: true,

    state: {
        productList: []
    },

    mutations: {
        SET_PRODUCT_LIST(state, payload) {
            state.productList = payload;
        },
    },

    actions: {
        setProductList({ commit }, payload) {
            commit('SET_PRODUCT_LIST', payload);
        },
    },
}