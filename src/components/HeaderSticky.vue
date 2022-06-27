<template>
    <div class="header">
        <div class="content">
            <h1 class="logo" aria-label="Logo">
                <span @click="handleRedirect">LOGO</span>
            </h1>

            <div class="search-input">
                <input class="input" v-model="localTerm" type="search" placeholder="Pesquisar" @input="handleSearch" />
                <button
                    type="submit"
                    class="button"
                    aria-label="Botão Pesquisar"
                >
                    <span type="submit" class="material-icons">search</span>
                </button>
            </div>

            <nav class="actions">
                <span
                    @click="handleModal('favorite-view')"
                    aria-label="Favoritos"
                    title="Favoritos"
                    class="material-icons md-30 md-light"
                    >favorite</span
                >

                <span
                    @click="handleModal('cart-view')"
                    class="cart"
                    title="Carrinho"
                >
                    <span
                        aria-label="Carrinho"
                        class="material-icons md-30 md-light"
                        >shopping_cart</span
                    >
                    <p class="badge" v-show="totalQuantity">{{ totalQuantity }}</p>
                </span>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
    name: 'HeaderDot',
    props: {
        msg: String,
    },

    data() {
        return {
            localTerm: '',
        }
    },

    computed: {
        ...mapState(['showAsideModal']),
        ...mapState('product', ['term']),
        ...mapGetters('cart', ['totalQuantity']),
    },

    watch: {
        term(newTerm) {
            if (!newTerm) this.localTerm = '';
        }
    },

    methods: {
        ...mapActions(['openModal']),
        ...mapActions('product', ['setTerm']),

        handleModal(name) {
            if (this.showAsideModal === name) name = '';
            this.openModal(name);
        },

        handleSearch() {
            this.setTerm(this.localTerm);
        },

        handleRedirect() {
            this.setTerm('');
            if (!window.location.href.includes('checkout')) return;
            this.$router.push('/');
        }
    },
};
</script>
