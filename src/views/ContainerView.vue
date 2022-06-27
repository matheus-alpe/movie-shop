<template>
    <div class="container">
        <div class="content">
            <router-view />
        </div>

        <transition name="slide" mode="out-in">
            <keep-alive>
                <component :is="showAsideModal"></component>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import CartView from '@/views/CartView.vue';
import FavoriteView from '@/views/FavoriteView.vue';

export default {
    name: 'ContainerView',

    components: {
        CartView,
        FavoriteView,
    },

    computed: {
        ...mapState(['showAsideModal']),
    },
};
</script>
