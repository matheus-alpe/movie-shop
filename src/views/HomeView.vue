<template>
    <div class="home">
        <list-products />
    </div>
</template>

<script>
import ListProducts from '@/components/ListProductsDot.vue';

export default {
    name: 'HomeView',
    components: {
        ListProducts,
    },
};
</script>
