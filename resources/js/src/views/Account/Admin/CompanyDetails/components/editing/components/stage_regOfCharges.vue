<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">

                <div class="col-12 col-md-6">
                    <div class="form-label">Charge Creation Date:</div>
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="charge_creation_date">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.charge_creation_date }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Amount Secured by the Charge HKD:</div>
                    <input v-model="account_secured_by_charge" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.account_secured_by_charge }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Type of Charge:</div>
                    <input v-model="type_of_charge" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.type_of_charge }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Description of Charge:</div>
                    <input v-model="charge_description" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.charge_description }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Name of Charge:</div>
                    <input v-model="names_of_charge" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.names_of_charge }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Terms of Charge:</div>
                    <input v-model="terms_of_charge" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.terms_of_charge }}</small>
                </div>

                <div class="col-12 col-md-12">
                    <div class="form-label">Registration details:</div>
                    <input v-model="registration_details" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.registration_details }}</small>
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
import { ref, watch, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';
import { vMaska } from "maska"

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()
const emit = defineEmits(['done'])


onMounted(() => {
    setValuesOnFields()
})

// form and validation
const rules = {
    charge_creation_date: yup.date().required('Field is required'),
    account_secured_by_charge: yup.string().required('Field is required'),
    type_of_charge: yup.string().required('Field is required'),
    charge_description: yup.string().required('Field is required'),
    names_of_charge: yup.string().required('Field is required'),
    terms_of_charge: yup.string().required('Field is required'),
    registration_details: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [charge_creation_date] = defineField('charge_creation_date');
const [account_secured_by_charge] = defineField('account_secured_by_charge');
const [type_of_charge] = defineField('type_of_charge');
const [charge_description] = defineField('charge_description');
const [names_of_charge] = defineField('names_of_charge');
const [terms_of_charge] = defineField('terms_of_charge');
const [registration_details] = defineField('registration_details');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const register_of_charge = paramsStore.currentCompanyData?.register_of_charge[0]
    if (register_of_charge) {
        setFieldValue('charge_creation_date', register_of_charge.charge_creation_date)
        setFieldValue('account_secured_by_charge', register_of_charge.account_secured_by_charge)
        setFieldValue('type_of_charge', register_of_charge.type_of_charge)
        setFieldValue('charge_description', register_of_charge.charge_description)
        setFieldValue('names_of_charge', register_of_charge.names_of_charge)
        setFieldValue('terms_of_charge', register_of_charge.terms_of_charge)
        setFieldValue('registration_details', register_of_charge.registration_details)
    }
}

const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('charge_creation_date', values.charge_creation_date ? useFxn.formatDate(values.charge_creation_date) : '')
            formData.append('account_secured_by_charge', values.account_secured_by_charge ?? '')
            formData.append('type_of_charge', values.type_of_charge ?? '')
            formData.append('charge_description', values.charge_description ?? '') 
            formData.append('names_of_charge', values.names_of_charge ?? '')
            formData.append('terms_of_charge', values.terms_of_charge ?? '')
            formData.append('registration_details', values.registration_details ?? '')
            if (paramsStore.idToEdit)
                formData.append('charges_id', paramsStore.idToEdit)


            try {
                await api.registerOfCharge(formData)
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