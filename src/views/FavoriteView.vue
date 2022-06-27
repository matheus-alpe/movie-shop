<template>
    <aside-fixed
        title="Meus Favoritos"
        :is-cart="false"
        :product-list="favoriteList"
    />
</template>

<script>
import { mapActions, mapState } from 'vuex';

import AsideFixed from '@/components/AsideFixed.vue';

export default {
    name: 'FavoriteView',

    components: {
        AsideFixed,
    },

    computed: {
        ...mapState('favorite', ['favoriteList']),
    },
    methods: {
        ...mapActions(['openModal']),
    },
};
</script>
