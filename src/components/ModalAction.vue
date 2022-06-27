<template>
    <form @submit.prevent="callback" @click="callback" class="modal-container">
        <div class="modal-content">
            <h3 class="title">Obrigado {{ name }}!</h3>
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
    
    props: {
        callback: Function,

        name: String
    },

}
</script>