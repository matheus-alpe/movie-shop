<template>
    <ul class="products">
        <product-card v-for="i in 10" :key="i"/>
    </ul>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
    name: 'ListProducts',
    components: {
        ProductCard
    }
};
</script>
