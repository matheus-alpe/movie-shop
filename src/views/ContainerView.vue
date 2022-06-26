<template>
    <div class="container">
        <div class="content">
            <router-view />
        </div>

        <!-- TO-DO: refact this component -->
        <fixed-aside class="cart-modal" v-show="showCart">
            <div class="aside-header">
                <h2>Meu Carrinho</h2>
                <span
                    class="material-icons close" 
                    @click="openModal('')"
                >
                    close
                </span>
            </div>

            <ul class="basket-products scroll">
                <basket-item
                    v-for="cartProduct in getUniqueProductsList"
                    :key="cartProduct.id"
                    :product="cartProduct"
                />
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
                <span class="material-icons close" @click="openModal('')"
                    >close</span
                >
            </div>

            <ul class="basket-products scroll">
                <basket-item
                    :is-cart-item="false"
                    v-for="favoriteProduct in favoriteList"
                    :key="favoriteProduct.id"
                    :product="favoriteProduct"
                />
            </ul>
        </fixed-aside>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import FixedAside from '@/views/FixedAsideView.vue';
import BasketItem from '@/components/BasketItem.vue';

export default {
    name: 'ContainerView',

    components: {
        FixedAside,
        BasketItem,
    },

    computed: {
        ...mapState(['showAsideModal']),
        ...mapState('product', ['product']),
        ...mapState('favorite', ['favoriteList']),
        ...mapState('cart', ['cartList']),
        ...mapGetters('cart', ['getUniqueProductsList']),

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
