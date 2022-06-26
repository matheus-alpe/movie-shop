import { localStorage } from '@/utils';

export default {
    namespaced: true,

    state: {
        cartList: [],
    },

    getters: {
        getCartProductById: ({ cartList }) => (productId) => cartList.filter((cartProduct) => cartProduct.id === productId),

        getUniqueProductsList: ({ cartList }) => [
            ...new Map(cartList.map((item) => [item["id"], item])).values(),
        ]
    },

    mutations: {
        SET_CART_LIST(state, payload) {
            state.cartList = payload;
        },

        ADD_CART_PRODUCT(state, payload) {
            state.cartList.push(payload);
        },

    },

    actions: {
        setCartList({ commit, dispatch }, payload) {
            commit('SET_CART_LIST', payload);
            dispatch('setCartLocalStorage', payload);
        },

        setCartLocalStorage({ state }) {
            localStorage.set('cart_list', state.cartList);
        },

        addCart({ commit, dispatch, state }, payload) {
            
            commit('ADD_CART_PRODUCT', payload);
            dispatch('setCartList', state.cartList);
        },

        removeCart({ dispatch, state }, payload) {
            const newCartList = state.cartList.filter((cartProduct) => cartProduct.id !== payload.id);

            dispatch('setCartList', newCartList);
        }
    },
};
