<template>
    <form @submit.prevent="handleRedirect" class="modal-container">
        <div class="modal-content">
            <h3 class="title">Obrigado {user_name}!</h3>
            <p class="message">Sua compra foi finalizada com sucesso!</p>
            <button class="button buy" type="submit">
                Ir para loja
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ModalAction',
    
    methods: {
        handleRedirect() {
            this.$router.push('/')
        }
    }
}
</script>