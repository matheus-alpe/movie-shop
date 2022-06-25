<template>
    <div class="container">
        <div class="content">
            <router-view />
        </div>

        <fixed-aside class="cart-modal" v-if="true">
            <div class="aside-header">
                <h2>Meu Carrinho</h2>
                <button class="button" title="Esvaziar carrinho">Esvaziar</button>
            </div>

            <ul class="basket-products scroll">
                <cart-item />
            </ul>

            <div class="summary">
                <p class="total">
                    <span>Total:</span>
                    <span class="final-value">R$ 19,98</span>
                </p>

                <button class="button buy">Finalizar compra</button>
            </div>
        </fixed-aside>

        <fixed-aside class="favorite-modal" v-if="true">
            <div class="aside-header">
                <h2>Meus Favoritos</h2>
                <button class="button" title="Esvaziar favoritos">Esvaziar</button>
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
import FixedAside from '@/views/FixedAsideView.vue';
import CartItem from '@/components/BasketItem.vue';

export default {
    name: 'ContainerView',
    components: {
        FixedAside,
        CartItem
    },
};
</script>
