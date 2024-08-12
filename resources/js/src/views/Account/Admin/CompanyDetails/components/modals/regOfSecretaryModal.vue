<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#regOfSecretaryModalEdit">
        </button>

        <div class="modal fade" id="regOfSecretaryModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Register of Directors</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12 col-md-6">
                                <div class="form-label">Name:</div>
                                <input v-model="name" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.name }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Date of Appointment:</div>
                                <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                    :enable-time-picker="false" auto-apply v-model="appointment_date">
                                </VueDatePicker>
                                <small class=" text-danger">{{ errors.appointment_date }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Identity Information:</div>
                                <input v-model="identity_info" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.identity_info }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-label">Ceasing of Act:</div>
                                <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                    :enable-time-picker="false" auto-apply v-model="cease_to_act">
                                </VueDatePicker>
                                <small class=" text-danger">{{ errors.cease_to_act }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Remarks:</div>
                                <input v-model="remarks" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.remarks }}</small>
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
                            {{ paramsStore.idToEdit ? 'Update' : 'Submit' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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
watch(() => paramsStore.regOfSecretaryModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    appointment_date: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    identity_info: yup.string().required('Field is required'),
    cease_to_act: yup.date().required('Field is required'),
    remarks: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [appointment_date] = defineField('appointment_date');
const [name] = defineField('name');
const [identity_info] = defineField('identity_info');
const [cease_to_act] = defineField('cease_to_act');
const [remarks] = defineField('remarks');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const register_of_secretarys = paramsStore.currentCompanyData?.register_of_secretary
        const register_of_secretary = register_of_secretarys.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (register_of_secretary) {
            setFieldValue('appointment_date', register_of_secretary.appointment_date)
            setFieldValue('name', register_of_secretary.name)
            setFieldValue('identity_info', register_of_secretary.identity_info)
            setFieldValue('cease_to_act', register_of_secretary.cease_to_act)
            setFieldValue('remarks', register_of_secretary.remarks)
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm('Confirm submit?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('appointment_date', values.appointment_date ? useFxn.formatDate(values.appointment_date) : '')
            formData.append('name', values.name ?? '')
            formData.append('identity_info', values.identity_info ?? '')
            formData.append('cease_to_act', values.cease_to_act ? useFxn.formatDate(values.cease_to_act) : '')
            formData.append('remarks', values.remarks ?? '')
            if (paramsStore.idToEdit)
                formData.append('secretary_id', paramsStore.idToEdit)


            try {
                await api.registerOfSecretaries(formData)
                isSaving.value = false
                resetForm()
                paramsStore.getCompanyDetails()
                closeModal.value.click()

            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>