<template>
    <pageLoadingComponent v-if="isLoading" />

    <!-- <Structure v-if="startCompanyStore.currentStage == 1" /> -->
    <div v-else>
        <Name v-if="startCompanyStore.currentStage == 2" />
        <Description v-if="startCompanyStore.currentStage == 3" />
        <Address v-if="startCompanyStore.currentStage == 4" />
        <Founders v-if="startCompanyStore.currentStage == 5" />
        <Ownership v-if="startCompanyStore.currentStage == 6" />
        <Secretary v-if="startCompanyStore.currentStage == 7" />
        <Source v-if="startCompanyStore.currentStage == 8" />
        <Activities v-if="startCompanyStore.currentStage == 9" />
        <!-- <Uploads v-if="startCompanyStore.currentStage == 10" /> -->
        <Summary v-if="startCompanyStore.currentStage == 10" />
        <Sign v-if="startCompanyStore.currentStage == 11" />
        <Pay v-if="startCompanyStore.currentStage == 12" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useStartCompanyStore } from './StartCompany_store';
import pageLoadingComponent from '@/components/pageLoadingComponent.vue'

import Name from './pages/Name.vue';
// import Structure from './pages/Structure.vue';
import Description from './pages/Description.vue';
import Address from './pages/Address.vue';
import Founders from './pages/Founders.vue';
import Ownership from './pages/Ownership.vue';
import Secretary from './pages/Secretary.vue';
import Source from './pages/Source.vue';
import Activities from './pages/Activities.vue';
// import Uploads from './pages/Uploads.vue';
import Summary from './pages/Summary.vue';
import Sign from './pages/Sign.vue';
import Pay from './pages/Pay.vue';


// allforms #####################################
import { descriptionForm } from './pages/formsStore/Description';
import { nameForm } from './pages/formsStore/Name';
import { sourceForm } from './pages/formsStore/Source';
import { activitiesForm } from './pages/formsStore/Activities';


const description_form = descriptionForm()
const name_form = nameForm()
const source_form = sourceForm()
const activities_form = activitiesForm()

const startCompanyStore = useStartCompanyStore()

const isLoading = ref(true)

onMounted(async () => {
    await startCompanyStore.getCompanyInProgress()
    isLoading.value = false
    startCompanyStore.getBusinessNatures()
    startCompanyStore.getCountries()


    updateForms()
})

function updateForms() {
    // name
    const choiceNames = startCompanyStore.companyInProgress?.names ?? []
    if (choiceNames.length) {

        const level1 = choiceNames.find((x: any) => x.choice_level == 1);
        if (level1) {
            // name_form.choice_level1_eng_name = name_form.choice_level1_eng_name || level1.eng_name
            // name_form.choice_level1_prefix = name_form.choice_level1_prefix || level1.eng_prefix
            // name_form.choice_level1_chn_name = name_form.choice_level1_chn_name || level1.chn_name
            // name_form.choice_level1_chn_prefix = name_form.choice_level1_chn_prefix || level1.chn_prefix
        }

        const level2 = choiceNames.find((x: any) => x.choice_level == 2);
        if (level2) {
            name_form.isSecond = true
            // name_form.choice_level2_eng_name = name_form.choice_level2_eng_name || level2.eng_name
            // name_form.choice_level2_prefix = name_form.choice_level2_prefix || level2.eng_prefix
            // name_form.choice_level2_chn_name = name_form.choice_level2_chn_name || level2.chn_name
            // name_form.choice_level2_chn_prefix = name_form.choice_level2_chn_prefix || level2.chn_prefix
        }

        const level3 = choiceNames.find((x: any) => x.choice_level == 3);
        if (level3) {
            name_form.isThird = true
            // name_form.choice_level3_eng_name = name_form.choice_level3_eng_name || level3.eng_name
            // name_form.choice_level3_prefix = name_form.choice_level3_prefix || level3.eng_prefix
            // name_form.choice_level3_chn_name = name_form.choice_level3_chn_name || level3.chn_name
            // name_form.choice_level3_chn_prefix = name_form.choice_level3_chn_prefix || level3.chn_prefix
        }

        const level4 = choiceNames.find((x: any) => x.choice_level == 4);
        if (level4) {
            name_form.isForth = true
            // name_form.choice_level4_eng_name = name_form.choice_level4_eng_name || level4.eng_name
            // name_form.choice_level4_prefix = name_form.choice_level4_prefix || level4.eng_prefix
            // name_form.choice_level4_chn_name = name_form.choice_level4_chn_name || level4.chn_name
            // name_form.choice_level4_chn_prefix = name_form.choice_level4_chn_prefix || level4.chn_prefix
        }

        const level5 = choiceNames.find((x: any) => x.choice_level == 5);
        if (level5) {
            name_form.isFifth = true
            // name_form.choice_level5_eng_name = name_form.choice_level5_eng_name || level5.eng_name
            // name_form.choice_level5_prefix = name_form.choice_level5_prefix || level5.eng_prefix
            // name_form.choice_level5_chn_name = name_form.choice_level5_chn_name || level5.chn_name
            // name_form.choice_level5_chn_prefix = name_form.choice_level5_chn_prefix || level5.chn_prefix
        }
    }

    // description_form.updateFields(startCompanyStore.companyInProgress)
    // activities_form.updateFields(startCompanyStore.companyInProgress)

    // activities
    // const locations = startCompanyStore.companyInProgress?.activity?.customer_location_operation ?? ''
    // activities_form.customer_location_operation = locations !== '' ? locations.split(',') : ''

    // const countries = startCompanyStore.companyInProgress?.activity?.country ?? ''
    // activities_form.country = countries !== '' ? countries.split(',') : ''


}
</script>