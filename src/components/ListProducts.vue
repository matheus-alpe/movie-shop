<template>
    <div>
        <transition-group name="fade" class="products">
            <product-card
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </transition-group>

        <div class="pagination">
            <span class="material-icons md-48 rotating" v-if="isLoading">refresh</span>
        </div>

        <h3 v-if="!isLoading && !products.length">
            Não achamos nenhum resultado, tente novamente!
        </h3>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { mapState } from 'vuex';

export default {
    name: 'ListProducts',
    components: {
        ProductCard,
    },

    props: {
        products: Array,
    },

    computed: {
        ...mapState(['isLoading']),
    }
};
</script>
