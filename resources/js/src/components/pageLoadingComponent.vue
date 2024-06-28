<template>
    <div class="container">
        <div class="row g-3 justify-content-center align-items-center min-vh-100">
            <div class="col-lg-7">
                <SkeletonLoader class="loader" /> <br>
                <SkeletonLoader class="loader" height="400" />
            </div>

            <div class="col-lg-5">
                <SkeletonLoader class="loader" height="450" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()
</script>

<style lang="css" scoped>
.loader {
    background-color: v-bind('templateStore.accountTemplateBg')
}
</style>