<template>
    <div class="header">
        <div class="content">
            <h1>LOGO</h1>

            <form @submit.prevent="console.log('hello')">
                <div class="search-input">
                    <input type="search" placeholder="Pesquisar" />
                    <button type="submit" aria-label="Botão Pesquisar">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </form>

            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/checkout">Checkout</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderDot',
    props: {
        msg: String,
    },
};
</script>
