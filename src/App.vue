<template>
    <div id="app">
        <header-dot />

        <container-view />

        <v-tour name="myTour" :steps="tourConfig.steps" :options="tourConfig.options"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { localStorage, array as arrayUtil } from '@/utils';

import HeaderDot from '@/components/HeaderSticky.vue';
import ContainerView from '@/views/ContainerView.vue';

import movieService from '@/services/movie-service.js';

export default {
    components: {
        ContainerView,
        HeaderDot,
    },

    data () {
        return {

            tourConfig: {
                options: {
                    useKeyboardNavigation: false,
                    labels: {
                        buttonSkip: 'Pular tour',
                        buttonPrevious: 'Anterior',
                        buttonNext: 'Próximo',
                        buttonStop: 'Terminar'
                    }
                },
                steps: [
                    {
                        target: '.search-input',
                        content: `Pesquise seu filme aqui`,
                        params: {
                            highlight: true
                        }
                    },
                    {
                        target: '[aria-label="Favoritar"]',
                        content: 'Adicione aos favoritos.',
                        params: {
                            placement: 'right'
                        }
                    },
                    {
                        target: '[aria-label="Favoritos"]',
                        content: 'Acompanhe sua lista de filmes favoritos.',
                    },
                    {
                        target: '.button.buy',
                        content: 'Adicione ao carrinho.',
                        params: {
                            placement: 'left'
                        }
                    },
                    {
                        target: '[aria-label="Carrinho"]',
                        content: 'Acompanhe seu carrinho de filmes.',
                    },
                ]
            },
            
        }
    },

    methods: {
        ...mapActions('genre', ['setGenreList']),
        ...mapActions('favorite', ['setFavoriteList']),
        ...mapActions('cart', ['setCartList']),
        ...mapActions('user', ['setUser']),

        initialSetup() {
            const favoriteList = arrayUtil.safeArray(
                localStorage.get('favorite_list')
            );
            this.setFavoriteList(favoriteList);

            const cartList = arrayUtil.safeArray(localStorage.get('cart_list'));
            this.setCartList(cartList);

            const user = localStorage.get('user') || {};
            this.setUser(user);
        },
    },

    async created() {
        this.initialSetup();

        try {
            const { data } = await movieService.getAllGenresTypes();
            this.setGenreList(data.genres);
        } catch (error) {
            // TO-DO: implement error handler
            console.log(error);
        }
    },

    mounted() {
        this.$tours['myTour'].start();
    }
};
</script>
