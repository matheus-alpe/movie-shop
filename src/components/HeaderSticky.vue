<template>
    <div class="header">
        <div class="content">
            <h1 class="logo" aria-label="Logo" @click="$router.push('/')">
                LOGO
            </h1>

            <div class="search-input">
                <input class="input" type="search" placeholder="Pesquisar" />
                <button
                    type="submit"
                    class="button"
                    aria-label="Botão Pesquisar"
                >
                    <span class="material-icons">search</span>
                </button>
            </div>

            <nav class="actions">
                <span
                    @click="handleModal('favorite')"
                    aria-label="Favoritos"
                    title="Favoritos"
                    class="material-icons md-30 md-light"
                    >favorite</span
                >

                <span
                    @click="handleModal('cart')"
                    class="cart"
                    title="Carrinho"
                >
                    <span
                        aria-label="Carrinho"
                        class="material-icons md-30 md-light"
                        >shopping_cart</span
                    >
                    <p class="badge">{{ totalQuantity }}</p>
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

    computed: {
        ...mapState(['showAsideModal']),
        ...mapGetters('cart', ['totalQuantity']),

    },

    methods: {
        ...mapActions(['openModal']),

        handleModal(name) {
            if (this.showAsideModal === name) name = '';
            this.openModal(name);
        },
    },
};
</script>
