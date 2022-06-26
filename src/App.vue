<template>
    <div id="app">
        <header-dot />

        <container-view />
    </div>
</template>

<script>
import HeaderDot from '@/components/HeaderSticky.vue';
import ContainerView from '@/views/ContainerView.vue';
export default {
    components: {
        ContainerView,
        HeaderDot,
    },

    async created() {
        const apikey = process.env.VUE_APP_API_KEY || '';
        const query = 'piratas';

        const genres = await this.$axios.get(`genre/movie/list?api_key=${apikey}&language=pt-BR`)
        const trending = await this.$axios.get(`/trending/movie/week?api_key=${apikey}&language=pt-BR`)
        const searchResult = await this.$axios.get(`/search/movie?query=${query}&api_key=${apikey}&language=pt-BR`)
        console.log(genres)
        console.log(trending)
        console.log(searchResult)
    }
};
</script>
