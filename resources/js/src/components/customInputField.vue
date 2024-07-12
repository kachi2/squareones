<template>
    <div class="form-floating-custom">
        <input :type="type" v-model="modelValue" class="form-control" :id="id" placeholder="" @input="handleInput">
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    label: String,
    type: String,
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const id = ref(`custom-input-${Math.random().toString(36).substring(2, 15)}`);

const handleInput = (event: any) => {
    emit('update:modelValue', event.target.value);
};
</script>

<style lang="css" scoped>
.form-floating-custom {
    position: relative;
}

.form-floating-custom .form-control {
    height: auto;
    padding: 1rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.form-floating-custom label {
    position: absolute;
    top: 1rem;
    left: 0.75rem;
    transition: all 0.1s ease-in-out;
    pointer-events: none;
    padding: 0 0.25rem;
    background: transparent;
    border: none;
}

.form-floating-custom .form-control:focus~label,
.form-floating-custom .form-control:not(:placeholder-shown)~label {
    top: -0.75em;
    left: 0.75rem;
    font-size: 0.85em;
    color: #6c757d;
    background-color: white;
    padding: 0 0.25rem;
    border-radius: 0.25rem;
    z-index: 1;
}

.form-floating-custom .form-control:focus,
.form-floating-custom .form-control:not(:placeholder-shown) {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
}
</style>