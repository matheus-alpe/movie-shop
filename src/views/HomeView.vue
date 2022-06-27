<template>
    <div class="home">
        <list-products :products="getUniqueProductsList"/>

        
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import movieService from '@/services/movie-service.js';

import ListProducts from '@/components/ListProducts.vue';

export default {
    name: 'HomeView',
    components: {
        ListProducts,
    },

    data() {
        return {
            actualPage: undefined,
            lastPage: undefined,
        }
    },

    computed: {
        ...mapGetters('product', ['getUniqueProductsList']),
        ...mapState('product', ['term']),

        apiCallback()  {
            return this.term ? movieService.searchByTerm : movieService.getTrendings
        }
    },

    watch: {
        async term(newTerm) {
            this.scrollToTop();
            const { data } = await this.apiCallback(1, newTerm);
            this.actualPage = data.page;
            this.lastPage = data.total_pages;
            this.setProductList(data.results);
        }
    },

    methods: {
        ...mapActions('product', ['setProductList', 'concatProductList']),

        async concatProductResult () {
            if (this.actualPage === this.lastPage) return;
            try {
                const { data } = await this.apiCallback(this.actualPage + 1, this.term);
                this.actualPage = data.page;
                this.concatProductList(data.results);
            } catch (error) {
                // TO-DO: implement error handler
                console.log(error);
            }
        },

        scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },

    async created() {
        try {
            const { data } = await movieService.getTrendings();
            this.actualPage = data.page;
            this.lastPage = data.total_pages;
            this.setProductList(data.results);
        } catch (error) {
            // TO-DO: implement error handler
            console.log(error);
        }

        window.onscroll = async () => {
            const bottomOfWindow = (document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight;
            if (!bottomOfWindow) return;
            await this.concatProductResult()
        }
    }
};
</script>
