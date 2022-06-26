<template>
    <label :for="id" class="custom-input">
        <span class="placeholder" :class="{ focused: hasFocus }">
            {{ label }}
        </span>
        <input 
            class="input"
            :type="type"
            :id="id"
            v-model="value"
            @focus="handlerFocus"
            @blur="handlerFocus"
            required />
    </label>
</template>

<script>
export default {
    name: 'InputCustom',

    props: {
        id: String,

        initialValue: {
            type: String,
            default: '',
        },

        label: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            default: 'text',
        },
    },

    data() {
        return {
            value: undefined,
            focus: false
        };
    },

    computed: {
        hasFocus() {
            return Boolean(this.value || this.focus);
        },
    },

    methods: {
        handlerFocus() {
            this.focus = !this.focus;
        }
    },

    created() {
        this.value = this.initialValue;
    },
};
</script>
