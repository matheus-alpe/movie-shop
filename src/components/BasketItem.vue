<template>
    <li class="basket-item">
        <div class="thumbnail">
            <img
                :src="imgSrc"
                :alt="'Poster image from ' + product.title"
                @error="fallbackHandler"
            />
        </div>

        <p class="name" :title="product.title">{{ product.title }}</p>

        <p class="quantity" v-if="isCartItem">{{ quantity }}</p>

        <p class="price">{{ priceFormated }}</p>

        <span
            v-if="!isCartItem"
            @click="addCart(product)"
            title="Adicionar ao carrinho"
            class="material-icons cart"
        >
            shopping_cart
        </span>

        <span
            title="Remover Favorito"
            aria-label="Remover Favorito"
            @click="removeHandler(product)"
            class="material-icons remove"
        >
            delete
        </span>
    </li>
</template>

<script>
import productMixin from '@/mixin/product-mixin';

export default {
    name: 'BasketItem',

    props: {
        isCartItem: {
            type: Boolean,
            default: true,
        },
    },

    methods: {
        removeHandler(product) {
            this.isCartItem ? this.removeCart(product) : this.removeFavorite(product);
        }
    },

    watch: {
        'product.quantity'(newValue) {
            console.log('###', newValue);
        }
    },

    mixins: [productMixin],
};
</script>
