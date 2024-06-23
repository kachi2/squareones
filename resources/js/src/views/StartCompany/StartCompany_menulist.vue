<script lang="ts" setup>
import { useStartCompanyStore } from './StartCompany_store';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()

const router = useRouter()

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

function goToStage(stage: number) {
    const company = startCompanyStore.companyInProgress;

    if (stage == 11 || stage == 12) {
        toast.info('You cannot access this page <br> here from here,complete all forms', { position: 'top-right' });
    } else if ((stage === 10 || stage == 11 || stage == 12) && (!company || !company?.description || !company?.address
        || !company.company_entity.length || !company.owner_share.length
        || !company.fund_source.length || !company.activity)) {
        toast.info('You cannot access this page <br> here from here,complete all forms', { position: 'top-right' });
    } else {
        router.push({ name: 'Start' })
        startCompanyStore.currentStage = stage;
    }
}

function isformCompleted(dataSource: any, menuStage: any) {

    if (menuStage != 5) {
        if (dataSource instanceof Array) {
            return dataSource?.length
        } else if (dataSource != null) {
            return true
        }
        return false
    } else {
        const entity = startCompanyStore.companyInProgress?.company_entity ?? [];
        const individual = entity.find((x: any) => x.entity_capacity_id.includes(2) && x.entity_type_id == 1)
        const Corporate = entity.find((x: any) => x.entity_capacity_id.includes(1))
        if (!Corporate || !individual) {
            return false
        }
        return true
    }

}


</script>

<template>
    <ul class="list-group list-group-flush mt-4">
        <li v-for="menu in startCompanyStore.menus" @click="goToStage(menu.stage)" class="list-group-item"
            :class="{ 'isActive': startCompanyStore.isActiveMenu(menu.stage) }">
            {{ menu?.name }}
            <!-- {{startCompanyStore.companyInProgress[menu.dataSource]?.length || startCompanyStore.companyInProgress[menu.dataSource] != null }} -->
            <span v-if="startCompanyStore.companyInProgress">
                <small style="font-size:10px"
                    v-if="isformCompleted(startCompanyStore?.companyInProgress[menu.dataSource], menu.stage)"><i
                        class="bi bi-check-circle text-primary "></i></small>
            </span>
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
    color: v-bind('templateStore.textColor');
}

.isActive {
    color: var(--primary-color) !important;
    border-color: var(--primary-color);
}
</style>
