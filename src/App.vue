<template>
    <div id="app">
        <header-dot />

        <container-view />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { localStorage } from '@/utils';

import HeaderDot from '@/components/HeaderSticky.vue';
import ContainerView from '@/views/ContainerView.vue';

import movieService from '@/services/movie-service.js';

export default {
    components: {
        ContainerView,
        HeaderDot,
    },

    methods: {
        ...mapActions('product', ['setProductList']),
        ...mapActions('genre', ['setGenreList']),
        ...mapActions('favorite', ['setFavoriteList']),
    },

    async created() {
        let favoriteList = localStorage.get('favorite_list');
        favoriteList = favoriteList && favoriteList.length ? favoriteList : [];
        this.setFavoriteList(favoriteList);


        // TO-DO: refactor this part
        try {
            const { data } = await movieService.getAllGenresTypes();
            this.setGenreList(data.genres);
        } catch (error) {
            // TO-DO: implement error handler
            console.log(error);
        }

        try {
            const { data } = await movieService.getTrendings();
            this.setProductList(data.results);
        } catch (error) {
            // TO-DO: implement error handler
            console.log(error);
        }
    },
};
</script>
