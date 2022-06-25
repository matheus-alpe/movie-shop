<template>
    <li class="basket-item">
        <div class="thumbnail">
            <img src="movie-image.png" alt="name movie" @error="fallbackHandler" />
        </div>

        <p class="name" title="nome do filme">Nome do Filme</p>

        <p class="quantity" v-if="isCartItem">1</p>

        <p class="price">R$ 79.99</p>

        <span title="Adicionar ao carrinho" class="material-icons cart" v-if="!isCartItem">shopping_cart</span>

        <span title="Remover" class="material-icons remove">delete</span>
    </li>
</template>

<script>
export default {
    name: 'BasketItem',

    props: {
        isCartItem: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        fallbackHandler(event) {
            event.target.src = require('@/assets/images/fallback.png');
        }
    }
};
</script>
