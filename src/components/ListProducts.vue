<template>
    <ul class="products">
        <product-card v-for="product in products" :key="product.id" :product="product"/>

        <!-- TO-DO: pagination -->
    </ul>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
    name: 'ListProducts',
    components: {
        ProductCard
    },

    props: {
        products: Array
    }
};
</script>
