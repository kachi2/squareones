<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Source of funds</div>
                <span>Source of funds</span>
            </section>

            <section class="row g-3">
                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select append-to-body :calculate-position="useFunctions.vueSelectPositionCalc" 
                             @search:blur="form.validateVueSelectOnBlur('income_expected_source')"
                            :class="{ 'error-field': form.errors.income_expected_source }"
                            v-bind="form.income_expected_sourceAttr" v-model="form.income_expected_source"
                            :clearable="true" placeholder=" " :options="startCompanyStore.sourceOfFunds" id="source" />
                        <label class=" fw-bolder" for="source">Expected Source of Funds <small
                                class="text-danger">*</small></label>
                    </div>
                    <small class="text-danger">{{ form.errors.income_expected_source }}</small>

                </div>

                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select append-to-body :calculate-position="useFunctions.vueSelectPositionCalc"
                            @search:blur="form.validateVueSelectOnBlur('origin_funds')"
                            :class="{ 'error-field': form.errors.origin_funds }" v-model="form.origin_funds"
                            :clearable="true" :options="startCompanyStore.countries" placeholder="" />
                        <label class=" fw-bolder">Origin Source of Funds <small class="text-danger">*</small></label>
                    </div>
                    <small class="text-danger">{{ form.errors.origin_funds }}</small>
                </div>

                <div class="fw-bolder fs-5">Source of Wealth</div>

                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select append-to-body :calculate-position="useFunctions.vueSelectPositionCalc"
                            @search:blur="form.validateVueSelectOnBlur('wealth_initial_source')"
                            :class="{ 'error-field': form.errors.wealth_initial_source }"
                            v-model="form.wealth_initial_source" :clearable="true"
                            :options="startCompanyStore.initialSourceOfWealth" placeholder=" " />
                        <label class=" fw-bolder">Initial Source of Wealth <small class="text-danger">*</small></label>
                    </div>
                    <small class="text-danger">{{ form.errors.wealth_initial_source }}</small>

                </div>

                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select append-to-body :calculate-position="useFunctions.vueSelectPositionCalc"
                            @search:blur="form.validateVueSelectOnBlur('income_outgoing_source')"
                            :class="{ 'error-field': form.errors.income_outgoing_source }"
                            v-model="form.income_outgoing_source" :clearable="true"
                            :options="startCompanyStore.ongoingSourceOfIncome" placeholder="" />
                        <label class="fw-bolder">Ongoing Source of Wealth <small class="text-danger">*</small></label>
                    </div>
                    <small class="text-danger">{{ form.errors.income_outgoing_source }}</small>
                </div>

            </section>

            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-info me-3">
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
import { onMounted, watch } from 'vue';
import useFunctions from '@/stores/Helpers/useFunctions';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()
const form = sourceForm()

onMounted(() => {
    form.updateFields(startCompanyStore.companyInProgress)
})

watch(() => form, () => { form.saveToLocalStorage() }, { deep: true })

function moveBack() {
    startCompanyStore.switchStage('-')
}

const saveAndContinue = form.handleSubmit(async (values) => {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.error('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    function showError(value: any, param: any) {
        if (value == '') {
            form.errors.param == ""
        }
    }
    if (Object.keys(form.errors).length > 0) {
        toast.error("Some fields still have errors", { position: 'top-right' });
        return true;
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
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        // console.log(error);

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
