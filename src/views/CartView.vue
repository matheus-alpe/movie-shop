<template>
    <!-- TO-DO: refact this component -->
    <aside-fixed
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
    </aside-fixed>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import AsideFixed from '@/components/AsideFixed.vue';

export default {
    name: 'CartView',

    components: {
        AsideFixed,
    },

    computed: {
        ...mapGetters('cart', ['getUniqueProductsList', 'finalPrice']),

        hasItemInCart() {
            return Boolean(this.getUniqueProductsList.length);
        },
    },

    methods: {
        ...mapActions(['openModal']),

        handleCartRedirect() {
            if (!this.hasItemInCart) return;
            this.openModal('');
            if (window.location.href.includes('checkout')) return;
            this.$router.push('/checkout');
        },
    },
};
</script>
