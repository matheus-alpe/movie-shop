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
            v-if="rating"
            class="button buy"
            :class="{ success: hasAdded }"
            title="Adicionar ao carrinho"
            @click="handleBuy(product)"
        >
            <template v-if="!hasAdded">
                Adicionar
            </template>

            <template v-else>
                <div class="material-icons" title="Adicionado">done</div>
            </template>
        </button>


        <button
            v-else
            class="button buy disabled"
            title="Esgotado"
        >
            Esgotado
        </button>
    </li>
</template>

<script>
import productMixin from '@/mixin/product-mixin';

export default {
    name: 'ProductCard',

    mixins: [productMixin],

    data() {
        return {
            hasAdded: false
        }
    },

    methods: {
        handleBuy(product) {
            this.addCart(product);
            this.hasAdded = true;

            setTimeout(() => {
                this.hasAdded = false;
            }, 1500)
        }
    }
};
</script>
