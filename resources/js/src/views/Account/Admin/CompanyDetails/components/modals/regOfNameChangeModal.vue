<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#regOfNameChangeModalEdit">
        </button>

        <div class="modal fade" id="regOfNameChangeModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Register of Company Name Changes</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                                        :enable-time-picker="false" auto-apply v-model="date_of_name_changed"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Date of name changed:</label>
                                </div>
                                <small class=" text-danger">{{ errors.date_of_name_changed }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="previous_company_name" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Previous Company Name:</label>
                                </div>
                                <small class=" text-danger">{{ errors.previous_company_name }}</small>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-floating-custom">
                                    <input v-model="new_company_name" placeholder="" class="form-control">
                                    <label class="" for="eng_name"> New Company Name:</label>
                                </div>
                                <small class="text-danger">{{ errors.new_company_name }}</small>
                            </div>

                            <!-- <div class="col-12 col-md-6">
                                <div class="form-label">Remarks:</div>
                                <input v-model="remarks" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.remarks }}</small>
                            </div> -->

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
watch(() => paramsStore.regOfNameChangeModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    date_of_name_changed: yup.date().required('Field is required'),
    previous_company_name: yup.string().required('Field is required'),
    new_company_name: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [date_of_name_changed] = defineField('date_of_name_changed');
const [previous_company_name] = defineField('previous_company_name');
const [new_company_name] = defineField('new_company_name');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const register_of_company_names = paramsStore.currentCompanyData?.register_of_company_name
        const register_of_company_name = register_of_company_names.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (register_of_company_name) {
            setFieldValue('date_of_name_changed', register_of_company_name.date_of_name_changed)
            setFieldValue('previous_company_name', register_of_company_name.previous_company_name)
            setFieldValue('new_company_name', register_of_company_name.new_company_name)
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm("Confirm submit", "Continue").then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('date_of_name_changed', values.date_of_name_changed ? useFxn.formatDate(values.date_of_name_changed) : '')
            formData.append('previous_company_name', values.previous_company_name ?? '')
            formData.append('new_company_name', values.new_company_name ?? '')
            if (paramsStore.idToEdit)
                formData.append('namechange_id', paramsStore.idToEdit)
            try {
                await api.registerOfChangeOfName(formData)
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