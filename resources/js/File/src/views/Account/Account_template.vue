<template>
    <sideBar />
    <headBar />
    <div class="main-content">
        <div class="container">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import sideBar from '@/components/sideBar.vue';
import headBar from '@/components/headBar.vue';
import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()
</script>

<style scoped>
.main-content {
    padding-top: 40px;
    padding-bottom: 100px;
    /* background-color: #f4f2ee87; */
}

@media (min-width: 767px) {
    .main-content {
        margin-left: v-bind('templateStore.sidebarWidth');
    }
}
</style>