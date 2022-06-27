<template>
    <div class="container">
        <div class="content">
            <router-view />
        </div>

        <!-- TO-DO: refact this component -->
        <fixed-aside 
            v-show="showCart"
            class="cart-modal"
            title="Meu Carrinho"
            :product-list="getUniqueProductsList"
        > 
            <div class="summary">
                <p class="total">
                    <span>Total:</span>
                    <span class="final-value">{{ finalPrice }}</span>
                </p>

                <button 
                    class="button buy"
                    :class="{ disabled: !hasItemInCart }"
                    @click="handleCartRedirect"
                >
                    <span class="material-icons">shopping_cart_checkout</span>
                    Finalizar compra
                </button>
            </div>
        </fixed-aside>

        <fixed-aside
            v-show="showFavorite"
            title="Meus Favoritos"
            :is-cart="false"
            :product-list="favoriteList"
        />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import FixedAside from '@/views/FixedAsideView.vue';

export default {
    name: 'ContainerView',

    components: {
        FixedAside,
    },

    computed: {
        ...mapState(['showAsideModal']),
        ...mapState('product', ['product']),
        ...mapState('favorite', ['favoriteList']),
        ...mapGetters('cart', ['getUniqueProductsList', 'finalPrice']),

        hasItemInCart() {
            return Boolean(this.getUniqueProductsList.length);
        },

        showFavorite() {
            return this.showAsideModal === 'favorite';
        },

        showCart() {
            return this.showAsideModal === 'cart';
        },
    },

    methods: {

        handleCartRedirect() {
            if (!this.hasItemInCart) return;
            this.openModal('');
            this.$router.push('/checkout');
        },
    },
};
</script>
