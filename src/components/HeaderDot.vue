<template>
    <div class="header">
        <div class="content">
            <h1 class="logo" aria-label="Logo">LOGO</h1>

            <div class="search-input">
                <input class="input" type="search" placeholder="Pesquisar" />
                <button type="submit" class="button" aria-label="Botão Pesquisar">
                    <span class="material-icons">search</span>
                </button>
            </div>

            <nav class="actions">
                <span aria-label="Favoritos" class="material-icons md-30 md-light">favorite</span>
                <span aria-label="Carrinho" class="material-icons md-30 md-light">shopping_cart</span>
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
