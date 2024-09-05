<template>
    <sideBar />
    <headBar />
    <div class="main-content">
        <div class="container">
            <div class="col-12">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong>Information Alert!</strong> You should check out this information details.
                </div>
            </div>
            <!-- <div class="card border-0 exemption"> -->
            <!-- <div class="card-body"> -->
            <RouterView />
            <!-- </div> -->
            <!-- </div> -->
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
    padding-top: 30px;
    padding-bottom: 100px;
    background-color: v-bind('templateStore.accountTemplateBg');
    /* background-color: #0f172acc; */
    color: v-bind('templateStore.textColor');
}

.card {
    background-color: v-bind('templateStore.cardBg') !important;
    color: v-bind('templateStore.cardTextColor');
}


@media (min-width: 767px) {
    .main-content {
        margin-left: v-bind('templateStore.sidebarWidth');
        padding-left: 10px;
    }
}
</style>