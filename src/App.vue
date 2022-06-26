<template>
    <div id="app">
        <header-dot />

        <container-view />
    </div>
</template>

<script>
import HeaderDot from '@/components/HeaderSticky.vue';
import ContainerView from '@/views/ContainerView.vue';

import movieService from '@/services/movie-service.js'

export default {
    components: {
        ContainerView,
        HeaderDot,
    },

    async created() {
        const genres = await movieService.getAllGenresTypes();
        let trending = await movieService.getTrendings();
        const searchResult = await movieService.searchByTerm('pirates')
        console.log(trending)
        console.log(genres)
        console.log(searchResult)
    }
};
</script>
