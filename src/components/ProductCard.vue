<template>
    <li class="product-item">
        <div class="thumbnail">
            <div class="wishlist">
                <span class="material-icons">favorite_border</span>
            </div>

            <figure>
                <img src="movie-image.png" alt="name movie" @error="fallbackHandler" />
                <figcaption>7 de Janeiro, 2019</figcaption>
            </figure>
        </div>

        <div class="info">
            <p class="name">Nome do Filme</p>

            <p class="row">
                <span class="rating">
                    <span class="material-icons">star</span>
                    <span class="value">7</span>
                </span>

                <span class="gender"> Gênero </span>
            </p>

            <p class="price">R$ 79.99</p>
        </div>

        <button class="button buy">Adicionar</button>
    </li>
</template>

<script>
export default {
    name: 'ProductCard',
    methods: {
        fallbackHandler(event) {
            event.target.src = require('@/assets/images/fallback.png');
        }
    }
};
</script>
