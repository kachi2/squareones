<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Source of funds</div>
                <span>Source of funds</span>
            </section>

            <section class="row g-2">
                <div class="col-md-8">
                    <label class=" fw-bolder">Expected source of funds</label>
                    <v-select v-model="form.income_expected_source" :clearable="false"
                        :options="startCompanyStore.sourceOfFunds" />
                    <small class="text-danger">{{ form.errors.income_expected_source }}</small>

                </div>

                <div class="col-md-8">
                    <label class=" fw-bolder">Origin source of funds</label>
                    <v-select v-model="form.origin_funds" :clearable="false" :options="startCompanyStore.countries" />
                    <small class="text-danger">{{ form.errors.origin_funds }}</small>
                </div>

                <div class="fw-bolder fs-5">Source of Wealth</div>

                <div class="col-md-8">
                    <label class=" fw-bolder">Initial source of wealth</label>
                    <v-select v-model="form.wealth_initial_source" :clearable="false"
                        :options="startCompanyStore.initialSourceOfWealth" />
                    <small class="text-danger">{{ form.errors.wealth_initial_source }}</small>

                </div>

                <div class="col-md-8">
                    <label class="fw-bolder">Ongoing source of wealth</label>
                    <v-select v-model="form.income_outgoing_source" :clearable="false"
                        :options="startCompanyStore.ongoingSourceOfIncome" />
                    <small class="text-danger">{{ form.errors.income_outgoing_source }}</small>
                </div>

            </section>

            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button v-if="!form.isSaving" @click="saveAndContinue" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>
                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Saving, Please wait
                </button>
            </div>

        </template>

        <template #info>
            <section class="section">
                <div class="fw-bold">
                    Why do I need to disclose the source of

                    funds and wealth?
                </div>
                <div>
                    Disclosure of the source of funds and wealth is a regulatory requirement to comply with anti-money
                    laundering laws. It helps maintain financial transparency and accountability.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    What qualifies as a source of funds?
                </div>
                <div>
                    The source of funds refers to the origin of the capital you will invest in the company, such as
                    personal savings, loan or credit, investment income, or any other legitimate source.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Can the source of wealth and source of

                    funds be the same?
                </div>
                <div>
                    Yes, they can be the same if your initial wealth, which is funding the company, comes from a
                    consistent ongoing source, such as a business or employment income.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { sourceForm } from './formsStore/Source'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()
const form = sourceForm()


function moveBack() {
    startCompanyStore.switchStage('-')
}

const saveAndContinue = form.handleSubmit(async (values) => {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    formData.append('income_expected_source', values.income_expected_source)
    formData.append('origin_funds', values.origin_funds)
    formData.append('wealth_initial_source', values.wealth_initial_source)
    formData.append('income_outgoing_source', values.income_outgoing_source)

    form.isSaving = true
    saveFromToApi(formData)
})

async function saveFromToApi(formData: FormData) {
    try {
        await api.companySource(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        // startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
    }
}


</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
