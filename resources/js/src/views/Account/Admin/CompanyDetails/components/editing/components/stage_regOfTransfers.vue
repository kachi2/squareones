<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">

                <div class="col-12 col-md-6">
                    <div class="form-label">Date of Registration:</div>
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="registration_date">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.registration_date }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Transferee:</div>
                    <input v-model="transferee" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.transferee }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Number of Shares Transferred:</div>
                    <input v-model="no_of_shares_transfered" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.no_of_shares_transfered }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Total Consideration HKD:</div>
                    <input v-model="total_consideration" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.total_consideration }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Transferred/Disposal Method:</div>
                    <input v-model="transfer_method" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.transfer_method }}</small>
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
    registration_date: yup.date().required('Field is required'),
    transferee: yup.string().required('Field is required'),
    no_of_shares_transfered: yup.string().required('Field is required'),
    total_consideration: yup.string().required('Field is required'),
    transfer_method: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [registration_date] = defineField('registration_date');
const [transferee] = defineField('transferee');
const [no_of_shares_transfered] = defineField('no_of_shares_transfered');
const [total_consideration] = defineField('total_consideration');
const [transfer_method] = defineField('transfer_method');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const register_of_transfer = paramsStore.currentCompanyData?.register_of_transfer[0]
    if (register_of_transfer) {
        setFieldValue('registration_date', register_of_transfer.registration_date)
        setFieldValue('transferee', register_of_transfer.transferee)
        setFieldValue('no_of_shares_transfered', register_of_transfer.no_of_shares_transfered)
        setFieldValue('total_consideration', register_of_transfer.total_consideration)
        setFieldValue('transfer_method', register_of_transfer.transfer_method)
    }
}

const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('registration_date', values.registration_date ? useFxn.formatDate(values.registration_date) : '')
            formData.append('transferee', values.transferee ?? '')
            formData.append('no_of_shares_transfered', values.no_of_shares_transfered ?? '')
            formData.append('total_consideration', values.total_consideration ?? '')
            formData.append('transfer_method', values.transfer_method ?? '')
            if (paramsStore.idToEdit)
                formData.append('transfer_id', paramsStore.idToEdit)


            try {
                await api.registerOfTransfer(formData)
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