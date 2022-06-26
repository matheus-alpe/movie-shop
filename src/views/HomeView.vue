<template>
    <div class="home">
        <list-products :products="productList"/>

        
    </div>
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import { mapState } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        ListProducts,
    },

    computed: {
        ...mapState('product', ['productList'])
    }
};
</script>
