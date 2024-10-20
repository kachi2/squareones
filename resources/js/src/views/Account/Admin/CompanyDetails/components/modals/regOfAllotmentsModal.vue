<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#regOfAllotmentsModalEdit">
        </button>

        <div class="modal fade" id="regOfAllotmentsModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Register of Allotments</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                                        :enable-time-picker="false" auto-apply v-model="allotment_date"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Allotment Date:</label>
                                </div>
                                <small class=" text-danger">{{ errors.allotment_date }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="name" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Name:</label>
                                </div>
                                <small class=" text-danger">{{ errors.name }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="address" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Address:</label>
                                </div>
                                <small class=" text-danger">{{ errors.address }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <select v-model="class_of_shares" class="form-select">
                                        <option selected value="ordinary">Ordinary</option>
                                    </select>
                                    <label class="" for="eng_name">Class of Shares:</label>
                                </div>
                                <small class=" text-danger">{{ errors.class_of_shares }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="no_of_shares_allocated" type="text" class="form-control"
                                        placeholder="">
                                    <small class=" text-danger">{{ errors.no_of_shares_allocated }}</small>
                                    <label class="" for="eng_name">No of Shares Allocated:</label>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <select v-model="denomination" class="form-select">
                                        <option v-for="curr in startCompanyStore.currencies" :value="curr">{{ curr }}
                                        </option>
                                    </select>
                                    <label class="" for="eng_name">Denomination:</label>
                                </div>
                                <small class=" text-danger">{{ errors.denomination }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="total_consideration" type="text" class="form-control"
                                        placeholder="">
                                    <small class=" text-danger">{{ errors.total_consideration }}</small>
                                    <label class="" for="eng_name">Total Consideration:</label>
                                </div>
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
import { useStartCompanyStore } from '@/views/StartCompany/StartCompany_store';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()
const startCompanyStore = useStartCompanyStore()
// modal
const openModal = ref<any>(null)
const closeModal = ref<any>(null)
watch(() => paramsStore.regOfAllotmentsModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    allotment_date: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    address: yup.string().required('Field is required'),
    class_of_shares: yup.string().required('Field is required'),
    no_of_shares_allocated: yup.date().required('Field is required'),
    denomination: yup.string().required('Field is required'),
    total_consideration: yup.string().required('Field is required'),
    remarks: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [allotment_date] = defineField('allotment_date');
const [name] = defineField('name');
const [address] = defineField('address');
const [class_of_shares] = defineField('class_of_shares');
const [no_of_shares_allocated] = defineField('no_of_shares_allocated');
const [denomination] = defineField('denomination');
const [total_consideration] = defineField('total_consideration');
const [remarks] = defineField('remarks');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const register_of_allotments = paramsStore.currentCompanyData?.register_of_allotments
        const register_of_allotment = register_of_allotments.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (register_of_allotment) {
            setFieldValue('allotment_date', register_of_allotment.allotment_date)
            setFieldValue('name', register_of_allotment.name)
            setFieldValue('address', register_of_allotment.address)
            setFieldValue('class_of_shares', register_of_allotment.class_of_shares)
            setFieldValue('no_of_shares_allocated', register_of_allotment.no_of_shares_allocated)
            setFieldValue('denomination', register_of_allotment.denomination)
            setFieldValue('total_consideration', register_of_allotment.total_consideration)
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
            formData.append('allotment_date', values.allotment_date ? useFxn.formatDate(values.allotment_date) : '')
            formData.append('name', values.name ?? '')
            formData.append('address', values.address ?? '')
            formData.append('class_of_shares', values.class_of_shares ?? '')
            formData.append('no_of_shares_allocated', values.no_of_shares_allocated ?? '')
            formData.append('denomination', values.denomination ?? '')
            formData.append('total_consideration', values.total_consideration ?? '')
            formData.append('remarks', values.remarks ?? '')
            if (paramsStore.idToEdit)
                formData.append('allotments_id', paramsStore.idToEdit)


            try {
                await api.registerOfAllotments(formData)
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