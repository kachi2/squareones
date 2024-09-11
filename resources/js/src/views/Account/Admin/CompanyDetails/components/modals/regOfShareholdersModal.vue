<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#regOfShareholdersModalEdit">
        </button>

        <div class="modal fade" id="regOfShareholdersModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Register of Shareholders</h5>
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
                                <div class="form-floating-custom">
                                    <input v-model="address" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name"> Address:</label>
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
                                    <input v-model="denomination" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Denomination:</label>
                                </div>
                                <small class=" text-danger">{{ errors.denomination }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="current_holding" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Current Holding:</label>
                                </div>
                                <small class=" text-danger">{{ errors.current_holding }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="total_consideration" type="text" class="form-control"
                                        placeholder="">
                                    <label class="" for="eng_name">Total Consideration HKD:</label>
                                </div>
                                <small class=" text-danger">{{ errors.total_consideration }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="date_entered_as_member"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Date Entered as Member:</label>
                                </div>
                                <small class=" text-danger">{{ errors.date_entered_as_member }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="date_cease_to_be_member"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Date Ceases to Be a Member:</label>
                                </div>
                                <small class=" text-danger">{{ errors.date_cease_to_be_member }}</small>
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
watch(() => paramsStore.regOfShareholdersModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    name: yup.string().required('Field is required'),
    address: yup.string().required('Field is required'),
    class_of_shares: yup.string().required('Field is required'),
    denomination: yup.string().required('Field is required'),
    current_holding: yup.string().required('Field is required'),
    total_consideration: yup.string().required('Field is required'),
    date_entered_as_member: yup.date().required('Field is required'),
    date_cease_to_be_member: yup.date().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [name] = defineField('name');
const [address] = defineField('address');
const [class_of_shares] = defineField('class_of_shares');
const [denomination] = defineField('denomination');
const [current_holding] = defineField('current_holding');
const [total_consideration] = defineField('total_consideration');
const [date_entered_as_member] = defineField('date_entered_as_member');
const [date_cease_to_be_member] = defineField('date_cease_to_be_member');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const register_of_shareholders = paramsStore.currentCompanyData?.register_of_shareholders
        const register_of_shareholder = register_of_shareholders.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (register_of_shareholder) {
            setFieldValue('name', register_of_shareholder.name)
            setFieldValue('address', register_of_shareholder.address)
            setFieldValue('class_of_shares', register_of_shareholder.class_of_shares)
            setFieldValue('denomination', register_of_shareholder.denomination)
            setFieldValue('current_holding', register_of_shareholder.current_holding)
            setFieldValue('total_consideration', register_of_shareholder.total_consideration)
            setFieldValue('date_entered_as_member', register_of_shareholder.date_entered_as_member)
            setFieldValue('date_cease_to_be_member', register_of_shareholder.date_cease_to_be_member)
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm("Confirm submit?", 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('name', values.name ?? '')
            formData.append('address', values.address ?? '')
            formData.append('class_of_shares', values.class_of_shares ?? '')
            formData.append('denomination', values.denomination ?? '')
            formData.append('current_holding', values.current_holding ?? '')
            formData.append('total_consideration', values.total_consideration ?? '')
            formData.append('date_entered_as_member', values.date_entered_as_member ? useFxn.formatDate(values.date_entered_as_member) : '')
            formData.append('date_cease_to_be_member', values.date_cease_to_be_member ? useFxn.formatDate(values.date_cease_to_be_member) : '')
            if (paramsStore.idToEdit)
                formData.append('shareholders_id', paramsStore.idToEdit)


            try {
                await api.registerOfShareholders(formData)
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