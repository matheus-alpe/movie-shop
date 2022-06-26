<template>
    <li class="product-item">
        <div class="thumbnail">
            <div class="wishlist">
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
                <figcaption>{{ releaseDate }}</figcaption>
            </figure>
        </div>

        <div class="info">
            <p class="name" :title="product.title">{{ product.title }}</p>

            <p class="row">
                <span class="rating">
                    <span class="material-icons">star</span>
                    <span class="value">{{ rating }}</span>
                </span>

                <span class="genre" :title="genre.name">{{ genre.name }}</span>
            </p>

            <p class="price">{{ priceFormated }}</p>
        </div>

        <button class="button buy" title="Adicionar ao carrinho">
            Adicionar
        </button>
    </li>
</template>

<script>
import productMixin from '@/mixin/product-mixin';

export default {
    name: 'ProductCard',

    mixins: [productMixin],
};
</script>
