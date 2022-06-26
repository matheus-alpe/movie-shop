<template>
    <div class="container">
        <div class="content">
            <router-view />
        </div>

        <fixed-aside class="cart-modal" v-show="showCart">
            <div class="aside-header">
                <h2>Meu Carrinho</h2>
                <span class="material-icons" @click="openModal('')">close</span>
            </div>

            <ul class="basket-products scroll">
                <cart-item />
            </ul>

            <div class="summary">
                <p class="total">
                    <span>Total:</span>
                    <span class="final-value">R$ 19,98</span>
                </p>

                <button class="button buy" @click="handleCartRedirect">
                    Finalizar compra
                </button>
            </div>
        </fixed-aside>

        <fixed-aside class="favorite-modal" v-show="showFavorite">
            <div class="aside-header">
                <h2>Meus Favoritos</h2>
                <span class="material-icons" @click="openModal('')">close</span>
            </div>

            <ul class="basket-products scroll">
                <cart-item :is-cart-item="false" />
                <cart-item :is-cart-item="false" />
                <cart-item :is-cart-item="false" />
            </ul>
        </fixed-aside>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import FixedAside from '@/views/FixedAsideView.vue';
import CartItem from '@/components/BasketItem.vue';

export default {
    name: 'ContainerView',

    components: {
        FixedAside,
        CartItem,
    },

    computed: {
        ...mapState(['showAsideModal']),
        ...mapState('product', ['product']),

        showFavorite() {
            return this.showAsideModal === 'favorite';
        },

        showCart() {
            return this.showAsideModal === 'cart';
        },
    },

    methods: {
        ...mapActions(['openModal']),

        handleCartRedirect() {
            this.openModal('');
            this.$router.push('/checkout');
        },
    },
};
</script>
