<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#designatedRepModalEdit">
        </button>

        <div class="modal fade" id="designatedRepModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Designated Representative</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">

                            <div class="col-12 col-md-6">
                                <div class="form-label">Entry Date:</div>
                                <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                    :enable-time-picker="false" auto-apply v-model="entry_date">
                                </VueDatePicker>
                                <small class=" text-danger">{{ errors.entry_date }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-label">Name:</div>
                                <input v-model="name" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.name }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-label">Identity Infomation:</div>
                                <input v-model="identiy_info" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.identiy_info }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-label">Place of Registration:</div>
                                <input v-model="place_of_registration" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.place_of_registration }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-label">Nature of Control:</div>
                                <input v-model="nature_of_control_over_the_company" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.nature_of_control_over_the_company }}</small>
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
import { vMaska } from "maska"

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

// modal
const openModal = ref<any>(null)
const closeModal = ref<any>(null)
watch(() => paramsStore.designatedRepModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    entry_date: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    remarks: yup.string().required('Field is required'),
    identiy_info: yup.string().required('Field is required'),
    nature_of_control_over_the_company: yup.string().required('Field is required'),
    place_of_registration: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [entry_date] = defineField('entry_date');
const [name] = defineField('name');
const [remarks] = defineField('remarks');
const [identiy_info] = defineField('identiy_info');
const [place_of_registration] = defineField('place_of_registration');
const [nature_of_control_over_the_company] = defineField('nature_of_control_over_the_company');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const designated_representatives = paramsStore.currentCompanyData?.designated_representative
        const designated_representative = designated_representatives.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (designated_representative) {
            setFieldValue('entry_date', designated_representative.entry_date)
            setFieldValue('name', designated_representative.name)
            setFieldValue('remarks', designated_representative.remarks)
            setFieldValue('identiy_info', designated_representative.designated_particulars.identiy_info)
            setFieldValue('place_of_registration', designated_representative.designated_particulars.place_of_registration)
            setFieldValue('nature_of_control_over_the_company', designated_representative.designated_particulars.nature_of_control_over_the_company)
        }
    }
}

const save = handleSubmit(async (values) => {
    isSaving.value = true
    const formData = new FormData()
    formData.append('company_id', paramsStore.currentCompanyId)
    formData.append('entry_date', values.entry_date ? useFxn.formatDate(values.entry_date) : '')
    formData.append('name', values.name ?? '')
    formData.append('remarks', values.remarks ?? '')
    formData.append('identiy_info', values.identiy_info ?? '')
    formData.append('place_of_registration', values.place_of_registration ?? '')
    formData.append('nature_of_control_over_the_company', values.nature_of_control_over_the_company ?? '')
    if (paramsStore.idToEdit)
        formData.append('representatives_id', paramsStore.idToEdit)


    try {
        await api.designatedRepresentatives(formData)
        isSaving.value = false
        resetForm()
        paramsStore.getCompanyDetails()
        closeModal.value.click()
    } catch (error) {
        console.log(error);
    }
})
</script>