<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="focus:shadow-outline rounded-lg bg-primary-500 px-4 py-2 font-normal text-white hover:bg-blue-600 focus:outline-none">
        <slot />
    </button>
</template>
