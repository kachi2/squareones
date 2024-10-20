<template>
    <div>



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
                    <VueDatePicker :teleport="true" :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                        :enable-time-picker="false" auto-apply v-model="incorporated_date">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.incorporated_date }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Company Structure:</div>
                    <select v-model="company_structure" class="form-select">
                        <option value="Private_Limited_Company" selected>Private Limited Company</option>
                    </select>
                    <small class=" text-danger">{{ errors.company_structure }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Company Registered In: </div>

                    <v-select class="exemption" style="line-height: 1rem !important;" append-to-body
                        :calculate-position="useFxn.vueSelectPositionCalc" v-model="company_registered"
                        :clearable="true" :options="paramsStore.countries" />
                    <small class=" text-danger">{{ errors.company_registered }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Business Classification:</div>
                    <input v-model="business_classification" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.business_classification }}</small>
                </div>

            </div>

        </div>
        <div class="modal-footer mt-4 border-0">

            <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving data..
            </button>

            <button v-else @click="save" type="button" class="btn btn-primary">
                Update Data
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useAdminParamsStore } from '../../../adminParamsStore';

const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])
onMounted(() => {
    setValuesOnFields()
})

// form and validation
const rules = {
    company_registered_name: yup.string().required('Field is required'),
    business_registered_number: yup.string().required('Field is required'),
    incorporated_date: yup.date().required('Field is required'),
    company_structure: yup.string().required('Field is required'),
    company_registered: yup.string().required('Field is required'),
    business_classification: yup.string(),
    // registration_progress_id: yup.string()
};

const { errors, handleSubmit, defineField, setFieldValue } = useForm({
     validationSchema: yup.object(rules),
    // initialValues : {
    //     company_structure: 'Private_Limited_Company',
    //     company_registered_name: '',
    //     business_registered_number: '',
    //     incorporated_date: new Date(),
    //     company_registered: '',
    //     business_classification: ''
    // },
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
    const registered_company = paramsStore.currentCompanyData?.registered_company
    if (registered_company) {
        setFieldValue('company_registered_name', registered_company.company_registered_name)
        setFieldValue('business_registered_number', registered_company.business_registered_number)
        setFieldValue('incorporated_date', registered_company.incorporated_date)
        setFieldValue('company_structure', registered_company.company_structure)
        setFieldValue('company_registered', registered_company.company_registered)
        setFieldValue('business_classification', registered_company.business_classification??'')
        // setFieldValue('registration_progress_id', registered_company.registration_progress_id)
    }
}



const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
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
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                // emit('done')

            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>

<style>
.exemption .v-select * {
    line-height: 1.7rem !important;
}
</style>