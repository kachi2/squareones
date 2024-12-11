<template>
    <StartCompany_template>
        <template #main>
        </template>

        <template #info>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../AdminStartCompany_store';

const startCompanyStore = useStartCompanyStore()

</script>
<style lang="css" scoped></style>
