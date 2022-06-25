<template>
    <div class="home">
        <list-products />
    </div>
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';

export default {
    name: 'HomeView',
    components: {
        ListProducts,
    },
};
</script>
