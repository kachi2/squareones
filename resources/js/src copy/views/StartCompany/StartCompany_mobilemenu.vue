<script lang="ts" setup>
import StartCompany_menulist from './StartCompany_menulist.vue';
</script>

<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="startMobileOffcanvas"
        aria-labelledby="startMobileOffcanvasLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="startMobileOffcanvasLabel">
                Menu
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <StartCompany_menulist data-bs-dismiss="offcanvas" />
        </div>
    </div>


</template>

<style lang="css" scoped>
.offcanvas {
    width: 230px;
}

.offcanvas-header {
    background-color: #F5F9FC;
}
</style>
