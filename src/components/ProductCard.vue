<template>
    <li class="product-item">
        <div class="thumbnail">
            <div class="wishlist" v-if="rating">
                <span
                    v-if="isFavorite"
                    @click="removeFavorite(product)"
                    class="material-icons"
                    aria-label="Remover Favorito"
                    title="Remover Favorito"
                >
                    favorite
                </span>

                <span
                    v-else
                    @click="addFavorite(product)"
                    class="material-icons"
                    aria-label="Favoritar"
                    title="Favoritar"
                >
                    favorite_border
                </span>
            </div>

            <figure>
                <img
                    :src="imgSrc"
                    :alt="'Poster image from ' + product.title"
                    @error="fallbackHandler"
                />
                <figcaption v-if="releaseDate">{{ releaseDate }}</figcaption>
            </figure>
        </div>

        <div class="info">
            <p class="name" :title="product.title">{{ product.title }}</p>

            <p class="row">
                <span class="rating">
                    <span class="material-icons">star</span>
                    <span class="value">{{ rating }}</span>
                </span>

                <span class="genre" :title="genre">{{ genre }}</span>
            </p>

            <p class="price" v-if="rating">{{ priceFormated }}</p>
        </div>

        <!-- TO-DO: implement a visual feedback on add -->
        <button
            class="button buy"
            :class="{ disabled: !rating }"
            title="Adicionar ao carrinho"
            @click="handleBuy(product)"
        >
            {{ rating ? 'Adicionar': 'EM BREVE' }}
        </button>
    </li>
</template>

<script>
import productMixin from '@/mixin/product-mixin';

export default {
    name: 'ProductCard',

    mixins: [productMixin],

    methods: {
        handleBuy(product) {
            if (!this.rating) return;
            this.addCart(product);
        }
    }
};
</script>
