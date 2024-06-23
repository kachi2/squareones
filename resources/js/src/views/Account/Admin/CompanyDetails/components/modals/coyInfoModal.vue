<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#coyInfoModalEdit">
        </button>

        <div class="modal fade" id="coyInfoModalEdit" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Edit Company Information</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12 col-md-6">
                                <div class="form-label">Company Name:</div>
                                <input v-model="company_registered_name" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.company_registered_name }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Business Registration Number (BRN):</div>
                                <input v-model="business_registered_number" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.business_registered_number }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Incorporation Date:</div>
                                <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                    :enable-time-picker="false" auto-apply v-model="incorporated_date">
                                </VueDatePicker>
                                <small class=" text-danger">{{ errors.incorporated_date }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Company Structure:</div>
                                <input v-model="company_structure" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.company_structure }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Company Registered In:</div>
                                <input v-model="company_registered" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.company_registered }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Business Classification:</div>
                                <input v-model="business_classification" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.business_classification }}</small>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer border-0">
                        <button ref="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>

                        <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving data..
                        </button>

                        <button v-else @click="save" type="button" class="btn btn-primary">
                            Submit Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

// modal
const openModal = ref<any>(null)
const closeModal = ref<any>(null)

watch(() => paramsStore.coyInfoModal, () => {
    setValuesOnFields()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});

// form and validation
const rules = {
    company_registered_name: yup.string().required('Field is required'),
    business_registered_number: yup.string().required('Field is required'),
    incorporated_date: yup.date().required('Field is required'),
    company_structure: yup.string().required('Field is required'),
    company_registered: yup.string().required('Field is required'),
    business_classification: yup.string().required('Field is required'),
    // registration_progress_id: yup.string()
};

const { errors, handleSubmit, defineField, setFieldValue } = useForm({
    // validationSchema: yup.object(rules),
});

const [company_registered_name] = defineField('company_registered_name');
const [business_registered_number] = defineField('business_registered_number');
const [incorporated_date] = defineField('incorporated_date');
const [company_structure] = defineField('company_structure');
const [company_registered] = defineField('company_registered');
const [business_classification] = defineField('business_classification');
// const [registration_progress_id] = defineField('registration_progress_id');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const registered_company = paramsStore.currentCompanyData?.registered_company[0]
    if (registered_company) {
        setFieldValue('company_registered_name', registered_company.company_registered_name)
        setFieldValue('business_registered_number', registered_company.business_registered_number)
        setFieldValue('incorporated_date', registered_company.incorporated_date)
        setFieldValue('company_structure', registered_company.company_structure)
        setFieldValue('company_registered', registered_company.company_registered)
        setFieldValue('business_classification', registered_company.business_classification)
        // setFieldValue('registration_progress_id', registered_company.registration_progress_id)
    }
}



const save = handleSubmit(async (values) => {
    isSaving.value = true
    const formData = new FormData()
    formData.append('company_id', paramsStore.currentCompanyId)
    formData.append('company_registered_name', values.company_registered_name ?? '')
    formData.append('business_registered_number', values.business_registered_number ?? '')
    formData.append('incorporated_date', values.incorporated_date ? useFxn.formatDate(values.incorporated_date) : '')
    formData.append('company_structure', values.company_structure ?? '')
    formData.append('company_registered', values.company_registered ?? '')
    formData.append('business_classification', values.business_classification ?? '')
    // formData.append('registration_progress_id', values.registration_progress_id)


    try {
        await api.registeredCompany(formData)


        isSaving.value = false
        paramsStore.getCompanyDetails()
        closeModal.value.click()

    } catch (error) {
        console.log(error);
    }
})
</script>