<template>
    <div class="fixed-aside">
        <div class="aside-header">
            <h2>{{ title }}</h2>
            <span
                class="material-icons close" 
                @click="openModal('')"
            >
                close
            </span>
        </div>


        <transition-group v-if="productList.length" tag="ul" name="fade-slide" class="basket-products scroll" >
            <basket-item
                v-for="product in productList"
                :key="product.id"
                :is-cart-item="isCart"
                :product="product"
            />
        </transition-group>

        <ul class="basket-products empty" v-else>
            <span class="material-icons md-48">sentiment_dissatisfied</span>
            <p>Você ainda não adicionou produtos</p>
        </ul>


        <slot />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import BasketItem from '@/components/BasketItem.vue';

export default {
    name: 'FixedAsideView',

    components: {
        BasketItem,
    },

    props: {
        title: String,

        productList: Array,

        isCart: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        ...mapActions(['openModal']),
    }
};
</script>
