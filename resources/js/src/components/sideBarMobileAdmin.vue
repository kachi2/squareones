<script lang="ts" setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router';

import { useTemplateStore } from '@/stores/templateStore';
import MenuListAdmin from './menuListAdmin.vue';
const templateStore = useTemplateStore()

const route = useRoute()
const btnClose = ref<any>(null)
watch(() => route.path, () => {
    btnClose.value.click()
})
</script>

<template>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="sideBarMobileOffcanvas"
        aria-labelledby="sideBarMobileOffcanvasLabel">
        <div class="offcanvas-header">
            <img class="m-3" src="/icons/sidebar/squareone_main.png" width="100" alt="">
            <button ref="btnClose" type="button" class="btn-close text-reset btn-close-white"
                data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <MenuListAdmin />
        </div>
    </div>

</template>

<style lang="css" scoped>
.offcanvas {
    width: 230px;
    background-color: v-bind('templateStore.bgColor');
}
</style>
