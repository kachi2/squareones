<script setup>
defineProps({
    type: {
        type: String,
        default: "button",
    },
});
</script>

<template>
    <button
        :type="type"
        class="focus:shadow-outline rounded-lg bg-white px-4 py-2 font-normal text-black hover:bg-gray-200 focus:outline-none border border-[#D9D9D9]">
        <slot />
    </button>
</template>
