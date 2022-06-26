<template>
    <div id="app">
        <header-dot />

        <container-view />
    </div>
</template>

<script>
import HeaderDot from '@/components/HeaderSticky.vue';
import ContainerView from '@/views/ContainerView.vue';

import movieService from '@/services/movie-service.js';
import { mapActions } from 'vuex';

export default {
    components: {
        ContainerView,
        HeaderDot,
    },

    methods: {
        ...mapActions('product', ['setProductList']),
        ...mapActions('genre', ['setGenreList']),
    },

    async created() {
        // TO-DO: refactor this part
        try {
            const { data } = await movieService.getAllGenresTypes();
            this.setGenreList(data.genres);
            console.log(data);
        } catch (error) {
            // TO-DO: implement error handler
            console.log(error);
        }

        try {
            const { data } = await movieService.getTrendings();
            this.setProductList(data.results);
            console.log(data.results);
        } catch (error) {
            // TO-DO: implement error handler
            console.log(error);
        }
    },
};
</script>
