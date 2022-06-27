<template>
    <label :for="id" class="custom-input">
        <span class="placeholder" :class="{ focused: hasFocus }">
            {{ label }}
        </span>
        <input 
            class="input"
            :type="type"
            :id="id"
            :value="value"
            @focus="handlerFocus"
            @blur="handlerFocus"
            @input="$emit('input', $event.target.value)"
            :minlength="minLength"
            :pattern="pattern"
            required />
    </label>
</template>

<script>
export default {
    name: 'InputCustom',

    props: {
        id: String,

        minLength: {
            type: String,
            default: '2'
        },

        value: {
            type: String,
        },

        label: {
            type: String,
            required: true,
        },

        pattern: String,

        type: {
            type: String,
            default: 'text',
        },
    },

    data() {
        return {
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
};
</script>
