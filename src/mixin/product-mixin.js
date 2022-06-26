import { mapGetters } from 'vuex';

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
            const date = new Date(this.product.release_date);
            const day = date.getUTCDate();
            let month = this.capitalizeIt(
                date.toLocaleString('pt-BR', { month: 'long' })
            );
            const year = date.getUTCFullYear();
            return `${day} de ${month}, ${year}`;
        },

        rating() {
            return Math.floor(this.product.vote_average);
        },

        genre() {
            return this.getGenreById()(this.product.genre_ids[0]);
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

        fallbackHandler(event) {
            event.target.src = require('@/assets/images/fallback.png');
        },

        capitalizeIt(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
};
