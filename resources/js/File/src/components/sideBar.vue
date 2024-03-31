<template>
    <div class="sidebar">
        <div class="brand-icon">
            <img src="/icons/sidebar/squareone_main.png" alt="">
        </div>
        <div class="mt-5">
            <menuList />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import menuList from './menuList.vue';

import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()

const router = useRouter()

</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: v-bind('templateStore.sidebarWidth') !important;
    /* border-right: 1px solid #cccccc44; */
    background-color: var(--sidebar-bg);
    overflow-y: auto;
    padding-right: 0px;
}

.brand-icon {
    margin: 20px;
}

@media (max-width: 767px) {
    .sidebar {
        display: none;
    }
}
</style>
