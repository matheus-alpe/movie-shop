<template>
    <div class="checkout">
        <h2 class="title">Finalizar Compra</h2>

        <form @submit.prevent="">
            <div class="grid-column form">
                <input-custom id="name" label="Nome Completo" />

                <div class="grid-row">
                    <input-custom id="cpf" label="CPF" class="sp-col-2" />

                    <input-custom id="cellphone" label="Celular" class="sp-col-2"/>
                </div>

                <input-custom id="email" label="Email" type="email" />

                <div class="grid-row">
                    <input-custom id="cep" label="CEP" />

                    <input-custom
                        id="address"
                        label="Endereço"
                        class="sp-col-3"
                    />
                </div>

                <div class="grid-row">
                    <input-custom id="city" label="Cidade" class="sp-col-2" />

                    <input-custom id="state" label="Estado" class="sp-col-2" />
                </div>
            </div>

            <div class="grid-column summary">
                <div class="grid-row summary-header">
                    <span>Imagem</span>
                    <span>Nome</span>
                    <span>Qtd</span>
                    <span>Preço</span>
                </div>

                <ul class="basket-products scroll">
                    <basket-item :is-cart-item="true" />
                    <basket-item :is-cart-item="true" />
                </ul>

                <div class="info">
                    <p class="total">
                        <span>Total:</span>
                        <span class="final-value">R$ 19,98</span>
                    </p>

                    <button class="button buy">Finalizar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue';
import InputCustom from '@/components/InputCustom.vue';

export default {
    name: 'CheckoutView',
    components: {
        BasketItem,
        InputCustom,
    },
};
</script>
