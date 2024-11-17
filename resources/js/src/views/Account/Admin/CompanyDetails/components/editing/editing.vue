<template>
    <div class="row g-3">
        <div class="col-lg-4">
            <div class="card exemption bg-dynamic shadow-sm h-100">
                <ul class="list-group list-group-flush">
                    <li v-for="i in menuList" @click="goToNextStage(i.stage)" class="list-group-item border-0"
                        :class="{ 'activee': currentStage == i.stage }">
                        <span v-if="i.meta !== 'summary'">{{ i.name }}</span>
                        <span v-else-if="i.meta == 'summary' && canShowSummary">{{ i.name }}</span>
                        <i v-if="hasNoNullsOrEmptyStrings(i.meta)" class="bi bi-check-circle-fill text-success"></i>
                    </li>
                </ul>
            </div>

        </div>
        <div class="col-lg-8">
            <div class="card exemption bg-dynamic shadow-sm  h-100 ">
                <div class="card-header fw-bold bg-transparent border-0">
                    {{ menuList.find(x => x.stage == currentStage)?.name }}
                </div>
                <div class="card-body" style="max-height: 600px; overflow-y: auto;">
                    <stage1 v-if="currentStage == 1" @done="goToNextStage(2)" />
                    <stage2 v-if="currentStage == 2" @done="goToNextStage(3)" />
                    <stage3 v-if="currentStage == 3" @done="goToNextStage(4)" />
                    <stage4 v-if="currentStage == 4" @done="goToNextStage(5)" />
                    <stage5 v-if="currentStage == 5" @done="goToNextStage(6)" />
                    <stage6 v-if="currentStage == 6" @done="goToNextStage(7)" />
                    <stage7 v-if="currentStage == 7" @done="goToNextStage(8)" />
                    <stage8 v-if="currentStage == 8" @done="goToNextStage(9)" />
                    <stage9 v-if="currentStage == 9" @done="goToNextStage(10)" />
                    <stage10 v-if="currentStage == 10" @done="goToNextStage(11)" />
                    <stage11 v-if="currentStage == 11" @done="goToNextStage(12)" />
                    <stage12 v-if="currentStage == 12" @done="goToNextStage(13)" />
                    <stage13 v-if="currentStage == 13" @done="goToNextStage(14)" />
                    <stage14 v-if="currentStage == 14" @done="goToNextStage(15)" />
                    <summaryStage v-if="currentStage == 15" @done="emit('done')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import stage1 from './components/stage_information.vue';
import stage2 from './components/stage_incorportation.vue';
import stage3 from './components/stage_regOfficeAddress.vue';
import stage4 from './components/stage_compReporting.vue';
import stage5 from './components/stage_regOfDirectors.vue';
import stage6 from './components/stage_regOfShareholders.vue';
import stage7 from './components/stage_secRegister.vue';
import stage8 from './components/stage_regOfAllotments.vue';
import stage9 from './components/stage_regOfTransfers.vue';
import stage10 from './components/stage_coyNameChanges.vue';
import stage11 from './components/stage_regOfCharges.vue';
import stage12 from './components/stage_regSigControllers.vue';
import stage13 from './components/stage_desgRepresentatives.vue';
import stage14 from './components/stage_documents.vue'
import summaryStage from './components/CompanySummary.vue';

import { useAdminParamsStore } from '../../adminParamsStore';

const emit = defineEmits(['done'])

const adminParamsStore = useAdminParamsStore()

onMounted(async () => {
    await adminParamsStore.getCompanyDetails()
   // console.log(adminParamsStore.currentCompanyData, 'current');
})

const currentStage = ref<string | number>(1)

function goToNextStage(stage: string | number) {
    currentStage.value = stage
}

const menuList = [
    { stage: 1, name: 'Information', meta: 'registered_company' },
    { stage: 2, name: 'Incorporation', meta: 'incoporation' },
    { stage: 3, name: 'Registered Office and Contact', meta: 'office_contract' },
    { stage: 4, name: 'Compliance and Reporting', meta: 'compliance_reporting' },
    { stage: 5, name: 'Register of Directors', meta: 'register_of_director' },
    { stage: 6, name: 'Register of Shareholders', meta: 'register_of_shareholders' },
    { stage: 7, name: 'Register of Secretaries', meta: 'register_of_secretary' },
    // { stage: 8, name: 'Register of Allotments', meta: 'register_of_allotments' },
    // { stage: 9, name: 'Register of Transfers', meta: 'register_of_transfer' },
    // { stage: 10, name: 'Register of Company Name Changes', meta: 'register_of_company_name' },
    // { stage: 11, name: 'Register of Charges', meta: 'register_of_charge' },
    { stage: 12, name: 'Register of Significant Controllers', meta: 'significant_controller' },
    { stage: 13, name: 'Designated Representative', meta: 'designated_representative' },
    { stage: 14, name: 'Documents', meta: 'documents' },
    { stage: 15, name: 'Summary', meta: 'summary' },
]



function hasNoNullsOrEmptyStrings(meta: string) {
    if (meta == 'incoporation') return true
    else if(meta == 'registered_company') return registeredCompany('registered_company')
    else if (meta == 'summary' || meta == 'documents') return false
    else if(meta == 'register_of_director'){
        return checkMarks('register_of_director')
    }
    else if(meta == 'register_of_secretary'){
       return checkMarks('register_of_secretary')
    }
    else if(meta == 'register_of_shareholders'){
       return checkMarks('register_of_shareholders')
    }
    else if(meta == 'significant_controller'){
       return checkMarks('significant_controller')
    }
    else {
        try {
            const data = adminParamsStore.currentCompanyData?.[meta] ?? [];
            if (data.length == 0) return false
    
            return data.every((obj: any) => Object.values(obj).every(value => value !== null && value !== ''));
        } catch (error) {
          //  console.log('caught error hasNoNullsOrEmptyStrings: ', error);
            return false
        }
    }
}

function checkMarks(metaType:any)
{
    const data = adminParamsStore.currentCompanyData?.[metaType] ?? []
    if(data.length === 0) return false
   return data.every((obj:any) => Object.entries(obj).every(([key,value]) => (key =='ceasing_of_act' || key=='remarks'|| key =='cease_to_act' || key == 'date_cease_to_be_member' || key == 'date_ceased_to_be_rep_person' || key == 'type') || (value != null && value != '')));
}

function registeredCompany(meta: any)
{
    const data = adminParamsStore.currentCompanyData?.[meta] ?? []
    if(data.length === 0) return false
   return  Object.entries(data).every(([key,value]) => (key =='business_classification' || key=='tax_id'|| key =='registration_progress_id' || key == 'renewal_date' || key == 'main_contact'|| key == 'pdf_doc'|| key == 'is_published'|| key == 'is_incorporated') || (value != null && value != ''));
}


const canShowSummary = computed(() => {
    let bool = false
    menuList.forEach((element: any) => {
        const excluded = ['incoporation', 'summary', 'documents']
        console.log(element, 'element.data')
        if (!excluded.includes(element.meta)) {
            const storeData = adminParamsStore.currentCompanyData?.[element.meta] ?? [];
            
            if (storeData.length == 0) {
                bool = false
            }
            else {
                try {
                    bool = storeData.every((obj: any) => Object.values(obj).every(value => value !== null && value !== ''));
                } catch (error) {
                    //console.log('caught error canShowSummary: ', error);

                }
            }

        }
    });
    return bool;
})

</script>

<style lang="css" scoped>
.list-group-item {
    cursor: pointer;
}

.list-group-item:hover,
.activee {
    color: var(--bs-primary) !important;
}

.cardd {
    border-left: 1px solid #ccc;
}
</style>
