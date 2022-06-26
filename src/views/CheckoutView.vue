<template>
    <div class="checkout">
        <h2 class="title">Finalizar Compra</h2>

        <form class="register" @submit.prevent="">
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
                    <basket-item
                        v-for="cartProduct in getUniqueProductsList"
                        :key="cartProduct.id"
                        :product="cartProduct"
                    />
                </ul>

                <div class="info">
                    <p class="total">
                        <span>Total:</span>
                        <span class="final-value">{{ finalPrice }}</span>
                    </p>

                    <button 
                        class="button buy"
                        :class="{ disabled: !hasItemInCart }"
                        @click="buyAction"
                    >
                        Finalizar
                    </button>
                </div>
            </div>
        </form>

        <modal-action v-if="showModal" :callback="handleRedirect" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BasketItem from '@/components/BasketItem.vue';
import InputCustom from '@/components/InputCustom.vue';
import ModalAction from '@/components/ModalAction.vue';

export default {
    name: 'CheckoutView',

    components: {
        BasketItem,
        InputCustom,
        ModalAction,
    },

    data() {
        return {
            showModal: false
        }
    },

    computed: {
        ...mapGetters('cart', ['getUniqueProductsList', 'finalPrice']),

        hasItemInCart() {
            return Boolean(this.getUniqueProductsList.length);
        },
    },

    methods: {
        ...mapActions('cart', ['setCartList']),

        buyAction() {
            this.showModal = true;
        },

        handleRedirect() {
            this.showModal = false;
            this.setCartList([]);
            this.$router.push('/');
        }
    }
};
</script>
