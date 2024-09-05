<template>
    <sideBar />
    <headBar />
    <div class="main-content">
        <div class="container">
            <!-- <div class="card p-0  border-0 exemption"> -->
            <!-- <div class="card-body p-0"> -->
            <RouterView />
            <!-- </div> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import sideBar from '@/components/sideBarAdmin.vue';
import headBar from '@/components/headBarAdmin.vue';
import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()
</script>

<style scoped>
.main-content {
    padding-top: 30px;
    padding-bottom: 100px;
    background-color: v-bind('templateStore.accountTemplateBg');
    /* background-color: #0f172acc; */
    color: v-bind('templateStore.textColor');
}

.card {
    background-color: v-bind('templateStore.cardBg') !important;
    background-color: transparent !important;
    color: v-bind('templateStore.cardTextColor');
}


@media (min-width: 767px) {
    .main-content {
        margin-left: v-bind('templateStore.sidebarWidth');
        padding-left: 10px;
    }
}
</style>