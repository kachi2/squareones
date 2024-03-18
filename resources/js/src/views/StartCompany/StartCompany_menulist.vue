<script lang="ts" setup>
import { useStartCompanyStore } from './StartCompany_store';
const startCompanyStore = useStartCompanyStore()
</script>

<template>
    <ul class="list-group list-group-flush mt-4">
        <li v-for="menu in startCompanyStore.menus" @click="startCompanyStore.currentStage = menu.stage"
            class="list-group-item" :class="{ 'isActive': startCompanyStore.isActiveMenu(menu.stage) }">
            {{ menu.name }}
        </li>
    </ul>
</template>

<style lang="css" scoped>
.list-group-item {
    background: transparent;
    border: none;
    border-left: 1px solid #E2E3E5;
    font-weight: 400;
    cursor: pointer;
    padding-block: 4px;
}

.isActive {
    color: var(--primary-color) !important;
    border-color: var(--primary-color);
}
</style>
