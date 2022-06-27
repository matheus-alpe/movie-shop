import { mapGetters, mapActions } from 'vuex';
import { string as stringUtil } from '@/utils';

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },

    computed: {
        imgSrc() {
            return (
                process.env.VUE_APP_IMAGE_BASE_URL + this.product.poster_path
            );
        },

        releaseDate() {
            if(!this.product.release_date) return '';

            const date = new Date(this.product.release_date);
            const day = date.getUTCDate();
            let month = stringUtil.capitalizeIt(
                date.toLocaleString('pt-BR', { month: 'long' })
            );
            const year = date.getUTCFullYear();
            return `${day} de ${month}, ${year}`;
        },

        rating() {
            return Math.floor(this.product.vote_average);
        },

        genre() {
            const genre = this.getGenreById()(this.product.genre_ids[0]);
            return genre && genre.name || '';
        },

        isFavorite() {
            return Boolean(this.getFavoriteById()(this.product.id));
        },

        quantity() {
            const products = this.getCartProductById()(this.product.id);
            return products && products.length;
        },

        price() {
            if (this.rating >= 7) {
                return 79.99;
            } else if (this.rating >= 4) {
                return 49.99;
            }

            return 19.99;
        },

        priceFormated() {
            return this.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL',
            });
        },
    },

    methods: {
        ...mapGetters('genre', ['getGenreById']),
        ...mapGetters('favorite', ['getFavoriteById']),
        ...mapGetters('cart', ['getCartProductById']),

        ...mapActions('favorite', ['addFavorite', 'removeFavorite']),
        ...mapActions('cart', ['addCart', 'removeCart']),

        fallbackHandler(event) {
            event.target.src = require('@/assets/images/fallback.png');
        },
    },

    created() {
        this.product.price = this.price;
    },
};
