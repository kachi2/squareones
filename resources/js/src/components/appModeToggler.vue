<template>
    <!-- <span class="dropdown">
        <span data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
            <span v-if="templateStore.appMode == 'light'">Light Mode <i class="bi bi-sun-fill"></i></span>
            <span v-else> Dark Mode <i class="bi bi-moon-fill"></i></span>
            <i class="bi bi-chevron-down small"></i>
        </span>
        <div class="dropdown-menu">
            <span @click="templateStore.appMode = 'light'" class="dropdown-item"
                v-if="templateStore.appMode == 'dark'">Change to Light Mode <i class="bi bi-sun-fill"></i></span>
            <span @click="templateStore.appMode = 'dark'" class="dropdown-item" v-else>Change to Dark Mode <i
                    class="bi bi-moon-fill"></i></span>
        </div>
    </span> -->

    <span class="cursor-pointer" @click="templateStore.appMode = templateStore.appMode == 'light' ? 'dark' : 'light'">
        <span v-if="templateStore.appMode == 'light'"> Dark Mode <i class="bi bi-moon-fill"></i></span>
        <span v-else>Light Mode <i class="bi bi-sun-fill"></i></span>
    </span>
</template>

<script lang="ts" setup>

import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()

</script>
<style scoped>
/* .dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
    min-width: unset !important;
} */
</style>
