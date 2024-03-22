<template>
    <Structure v-if="startCompanyStore.currentStage == 1" />
    <Name v-if="startCompanyStore.currentStage == 2" />
    <Description v-if="startCompanyStore.currentStage == 3" />
    <Address v-if="startCompanyStore.currentStage == 4" />
    <Founders v-if="startCompanyStore.currentStage == 5" />
    <Ownership v-if="startCompanyStore.currentStage == 6" />
    <Secretary v-if="startCompanyStore.currentStage == 7" />
    <Source v-if="startCompanyStore.currentStage == 8" />
    <Activities v-if="startCompanyStore.currentStage == 9" />
    <Uploads v-if="startCompanyStore.currentStage == 10" />
    <Summary v-if="startCompanyStore.currentStage == 11" />
    <Sign v-if="startCompanyStore.currentStage == 12" />
    <Pay v-if="startCompanyStore.currentStage == 13" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useStartCompanyStore } from './StartCompany_store';
import api from '@/stores/Helpers/axios'

import Name from './pages/Name.vue';
import Structure from './pages/Structure.vue';
import Description from './pages/Description.vue';
import Address from './pages/Address.vue';
import Founders from './pages/Founders.vue';
import Ownership from './pages/Ownership.vue';
import Secretary from './pages/Secretary.vue';
import Source from './pages/Source.vue';
import Activities from './pages/Activities.vue';
import Uploads from './pages/Uploads.vue';
import Summary from './pages/Summary.vue';
import Sign from './pages/Sign.vue';
import Pay from './pages/Pay.vue';

const startCompanyStore = useStartCompanyStore()

onMounted(async () => {
    await startCompanyStore.getCompanyInProgress()
    startCompanyStore.getBusinessNatures()
    startCompanyStore.getCountries()

})

</script>

<style lang="css" scoped></style>
