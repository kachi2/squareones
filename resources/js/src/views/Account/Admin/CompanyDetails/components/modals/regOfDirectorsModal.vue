<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#regOfDirectorsModalEdit">
        </button>

        <div class="modal fade" id="regOfDirectorsModalEdit" tabindex="-1" data-bs-backdrop="static"
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
                                <div class="form-floating-custom">
                                    <input v-model="name" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Name:</label>
                                </div>
                                <small class=" text-danger">{{ errors.name }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                                        :enable-time-picker="false" auto-apply v-model="date_of_appointment"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Date of Appointment:</label>
                                </div>
                                <small class=" text-danger">{{ errors.date_of_appointment }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="reg_no" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">ID/ Passport / Registration No:</label>
                                </div>
                                <small class=" text-danger">{{ errors.reg_no }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="registered_office" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Residential Address / Registered Office</label>
                                </div>
                                <small class=" text-danger">{{ errors.registered_office }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                                        :enable-time-picker="false" auto-apply v-model="ceasing_of_act"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Ceasing to Act: </label>
                                </div>
                                <small class=" text-danger">{{ errors.ceasing_of_act }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="remarks" type="text" class="form-control" placeholder="">
                                    <small class=" text-danger">{{ errors.remarks }}</small>
                                    <label class="" for="eng_name">Remarks:</label>
                                </div>
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
watch(() => paramsStore.regOfDirectorsModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    date_of_appointment: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    reg_no: yup.string().required('Field is required'),
    registered_office: yup.string().required('Field is required'),
    ceasing_of_act: yup.date().required('Field is required'),
    remarks: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [date_of_appointment] = defineField('date_of_appointment');
const [name] = defineField('name');
const [reg_no] = defineField('reg_no');
const [registered_office] = defineField('registered_office');
const [ceasing_of_act] = defineField('ceasing_of_act');
const [remarks] = defineField('remarks');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const register_of_directors = paramsStore.currentCompanyData?.register_of_director
        const register_of_director = register_of_directors.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (register_of_director) {
            setFieldValue('date_of_appointment', register_of_director.date_of_appointment)
            setFieldValue('name', register_of_director.name)
            setFieldValue('reg_no', register_of_director.reg_no)
            setFieldValue('registered_office', register_of_director.registered_office)
            setFieldValue('ceasing_of_act', register_of_director.ceasing_of_act)
            setFieldValue('remarks', '')
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm('Confirm submit?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('date_of_appointment', values.date_of_appointment ? useFxn.formatDate(values.date_of_appointment) : '')
            formData.append('name', values.name ?? '')
            formData.append('reg_no', values.reg_no ?? '')
            formData.append('registered_office', values.registered_office ?? '')
            formData.append('ceasing_of_act', values.ceasing_of_act ? useFxn.formatDate(values.ceasing_of_act) : '')
            formData.append('remarks', values.remarks ?? '')
            if (paramsStore.idToEdit)
                formData.append('directors_id', paramsStore.idToEdit)


            try {
                await api.registerOfDirectors(formData)
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