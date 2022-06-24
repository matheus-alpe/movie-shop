<template>
    <div id="app">
        <header-dot />

        <container-view />
    </div>
</template>

<script>
import HeaderDot from '@/components/HeaderDot.vue';
import ContainerView from '@/views/ContainerView.vue';
export default {
    components: {
        ContainerView,
        HeaderDot,
    },
};
</script>
