<script lang="ts" setup>
import { useTemplateStore } from '@/stores/templateStore';

const templateStore = useTemplateStore()
</script>

<template>
    <button type="button" class="btn-close" :class="{ 'btn-close-white': templateStore.appMode == 'dark' }"
        data-bs-dismiss="modal" aria-label="Close"></button>
</template>
