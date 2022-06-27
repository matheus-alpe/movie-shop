<template>
    <div class="checkout">
        <h2 class="title">Finalizar Compra</h2>

        <form @submit.prevent="buyAction" class="register">
            <div class="grid-column form">
                <input-custom id="name" label="Nome Completo" v-model="userForm.name" />

                <div class="grid-row">
                    <input-custom id="cpf" label="CPF" class="sp-col-2" v-model="userForm.cpf" minLength="11" pattern="[0-9]+"/>

                    <input-custom id="cellphone" label="Celular" class="sp-col-2" v-model="userForm.cellphone" minLength="10" pattern="[0-9]+"/>
                </div>

                <input-custom id="email" label="Email" type="email" v-model="userForm.email" />

                <div class="grid-row">
                    <input-custom id="cep" label="CEP" v-model="userForm.cep" minLength="8" pattern="[0-9]+"/>

                    <input-custom
                        id="address"
                        label="Endereço"
                        class="sp-col-3"
                        v-model="userForm.address"
                    />
                </div>

                <div class="grid-row">
                    <input-custom id="city" label="Cidade" class="sp-col-2" v-model="userForm.city" />

                    <input-custom id="state" label="Estado" class="sp-col-2" v-model="userForm.state" />
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
                        type="submit"
                        :class="{ disabled: !hasValidInformation }"
                    >
                        Finalizar
                    </button>
                </div>
            </div>
        </form>

        <modal-action v-if="showModal" :callback="handleRedirect" :name="userForm.name" />
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

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
            showModal: false,
            userForm: {
                name: '',
                cpf: '',
                cellphone: '',
                email: '',
                cep: '',
                address: '',
                city: '',
                state: '',
            }
        }
    },

    computed: {
        ...mapGetters('cart', ['getUniqueProductsList', 'finalPrice']),
        ...mapState('user', ['user']),
        ...mapGetters('user', ['hasUserLogged']),

        hasItemInCart() {
            return Boolean(this.getUniqueProductsList.length);
        },

        hasFulfilledForm() {
            return Object.values(this.userForm).every(Boolean);
        },

        hasValidInformation() {
            return this.hasFulfilledForm && this.hasItemInCart;
        }
    },

    methods: {
        ...mapActions('cart', ['setCartList']),
        ...mapActions('user', ['setUser']),

        buyAction() {
            if (!this.hasValidInformation) return;
            this.setUser({ ...this.userForm });
            this.showModal = true;
        },

        handleRedirect() {
            this.showModal = false;
            this.setCartList([]);
            this.$router.push('/');
        }
    },

    created() {
        if (!this.hasUserLogged) return;
        this.userForm = Object.assign(this.user);
    }
};
</script>
