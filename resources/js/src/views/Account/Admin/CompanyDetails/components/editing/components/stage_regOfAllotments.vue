<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <!-- <div class=" col-md-6"> </div> -->
                <div class=" col-md-12">
                    <div class="mb-3">
                        <label for="" class="form-label">Select Name</label>
                        <select @change="populateFieldWithDetails" v-model="selectedEntity" class="form-select">
                            <option value="" selected disabled>--Select Shareholder--</option>
                            <option v-for="entity in selectOptions" :key="entity" :value="entity">{{
                                entity.name }}</option>

                        </select>
                    </div>

                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Allotment Date:</div>
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="allotment_date" placeholder="select date">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.allotment_date }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Name:</div>
                    <input v-model="name" type="text" class="form-control" placeholder="">
                    <small class=" text-danger">{{ errors.name }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label" for="eng_name">Address:</div>
                    <input v-model="address" type="text" class="form-control" placeholder="">
                    <small class=" text-danger">{{ errors.address }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label" for="eng_name">Class of Shares:</div>
                    <select v-model="class_of_shares" class="form-select">
                        <option selected value="ordinary">Ordinary</option>
                    </select>
                    <small class=" text-danger">{{ errors.class_of_shares }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label" for="eng_name">No of Shares Allocated:</div>
                    <input v-model="no_of_shares_allocated" type="text" class="form-control" placeholder="">
                    <small class=" text-danger">{{ errors.no_of_shares_allocated }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label" for="eng_name">Denomination:</div>
                    <input v-model="denomination" type="text" class="form-control" placeholder="">
                    <small class=" text-danger">{{ errors.denomination }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label" for="eng_name">Total Consideration:</div>
                    <input v-model="total_consideration" type="text" class="form-control" placeholder="">
                    <small class=" text-danger">{{ errors.total_consideration }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label" for="eng_name">Remarks:</div>
                    <input v-model="remarks" type="text" class="form-control" placeholder="">
                    <small class=" text-danger">{{ errors.remarks }}</small>
                </div>

            </div>

        </div>
        <div class="modal-footer mt-4 border-0">
            <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving data..
            </button>

            <button :disabled="!selectedEntity" v-else @click="save" type="button" class="btn btn-primary">
                Upate Data
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])


const selectOptions = computed(() => {
    return paramsStore.currentCompanyData?.register_of_allotments ?? []
})
const selectedEntity = ref<any>('')
function populateFieldWithDetails() {
    if (selectedEntity.value) {
        allotment_date.value = selectedEntity.value.allotment_date
        name.value = selectedEntity.value.name
        address.value = selectedEntity.value.address
        class_of_shares.value = selectedEntity.value.class_of_shares
        no_of_shares_allocated.value = selectedEntity.value.no_of_shares_allocated
        denomination.value = selectedEntity.value.denomination
        total_consideration.value = selectedEntity.value.total_consideration
        remarks.value = selectedEntity.value.remarks
    }

}


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

const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
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

            formData.append('allotments_id', selectedEntity.value.id)


            try {
                await api.registerOfAllotments(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                resetForm()
                selectedEntity.value = ''
                // emit('done')
            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>