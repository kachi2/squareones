<script lang="ts" setup>
import { useStartCompanyStore } from './StartCompany_store';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';

const router = useRouter()

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

function goToStage(stage: number) {
    const company = startCompanyStore.companyInProgress;

    if ((stage === 10 || stage == 11 || stage == 12) && (!company || !company.description || !company.address
        || !company.company_entity.length || !company.owner_share.length
        || !company.fund_source.length || !company.activity)) {
        toast.info('You cannot access this page here <br> Complete all forms!', { position: 'top-right' });
    } else {
        router.push({ name: 'Start' })
        startCompanyStore.currentStage = stage;
    }


}
</script>

<template>
    <ul class="list-group list-group-flush mt-4">
        <li v-for="menu in startCompanyStore.menus" @click="goToStage(menu.stage)" class="list-group-item"
            :class="{ 'isActive': startCompanyStore.isActiveMenu(menu.stage) }">
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
