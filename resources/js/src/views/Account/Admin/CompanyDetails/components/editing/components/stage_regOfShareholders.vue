<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <!-- <div class=" col-md-6"> </div> -->
                <div class=" col-md-12">
                    <div class="mb-3">
                        <div class="form-floating-custom">
                        <select @change="populateFieldWithDetails" v-model="selectedEntity" class="form-select">
                            <option value="" selected disabled>--Select Shareholder--</option>
                            <option v-for="entity in selectOptions" :key="entity" :value="entity">{{
                                entity.name }}</option>
                        </select>
                        <label  for="selectedEntity">Select Shareholder:</label>
                    </div>
                </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                    <input disabled v-model="name" type="text" class="form-control" id="Name">
                    <label  for="Name"> Name:</label>
                    </div>
                    <small class=" text-danger">{{ errors.name }}</small>
                </div>

                <div class="col-12 col-md-6">
                 <div class="form-floating-custom">
                    <input v-model="address" type="text" class="form-control">
                    <label  for="Name">Residential Address / Registered Office:</label>
                    </div>
                    <small class=" text-danger">{{ errors.address }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                    <select v-model="class_of_shares" class="form-select">
                        <option selected value="ordinary">Ordinary</option>
                    </select>
                    <label  for="Name">Class of Shares:</label>
                    </div>
                    <small class=" text-danger">{{ errors.class_of_shares }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <select v-model="denomination"  class="form-control"> 
                        <option> HKD </option>
                    </select>
                    <label  for="Name">Denomination:</label>
                    </div>
                    <small class=" text-danger">{{ errors.denomination }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                    <input v-model="current_holding" type="text" class="form-control">
                    <label  for="Name">Current Holding:</label>
                    </div>
                    <small class=" text-danger">{{ errors.current_holding }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                    <input v-model="total_consideration" type="text" class="form-control">
                    <label  for="Name">Total Consideration HKD:</label>
                    </div>
                    <small class=" text-danger">{{ errors.total_consideration }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="date_entered_as_member">
                    </VueDatePicker>
                    <label  for="Name">Date Entered As a Member:</label>
                    </div>
                    <small class=" text-danger">{{ errors.date_entered_as_member }}</small>
                </div>


                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                        :enable-time-picker="false" auto-apply v-model="date_cease_to_be_member">
                    </VueDatePicker>
                    <label  for="Name">Date Ceases to Be a Member:</label>
                    </div>
                    <small class=" text-danger">{{ errors.date_cease_to_be_member }}</small>
                </div>

                <div class="col-12 col-md-12">
                    <div class="form-floating-custom">
                    <input v-model="remarks" type="text" class="form-control">
                    <label  for="Name">Remarks:</label>
                    </div>
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
                Update Data
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()
const emit = defineEmits(['done'])



onMounted(() => {
    class_of_shares.value = 'ordinary'
})


const selectOptions = computed(() => {
    return paramsStore.currentCompanyData?.register_of_shareholders ?? []
})
const selectedEntity = ref<any>('')
function populateFieldWithDetails() {
    if (selectedEntity.value) {
        name.value = selectedEntity.value.name
        address.value = selectedEntity.value.address
        class_of_shares.value = selectedEntity.value.class_of_shares
        denomination.value = selectedEntity.value.denomination
        current_holding.value = selectedEntity.value.current_holding
        total_consideration.value = selectedEntity.value.total_consideration
        date_entered_as_member.value = selectedEntity.value.date_entered_as_member
        date_cease_to_be_member.value = selectedEntity.value.date_cease_to_be_member
        remarks.value = selectedEntity.value.remarks
        
    }

}




// form and validation
const rules = {
    name: yup.string().required('Field is required'),
    address: yup.string().required('Field is required'),
    class_of_shares: yup.string().required('Field is required'),
    denomination: yup.string().required('Field is required'),
    current_holding: yup.string().required('Field is required'),
    total_consideration: yup.string().required('Field is required'),
    date_entered_as_member: yup.date().required('Field is required'),
    // date_cease_to_be_member: yup.date().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
});

const [name] = defineField('name');
const [address] = defineField('address');
const [class_of_shares] = defineField('class_of_shares');
const [denomination] = defineField('denomination');
const [current_holding] = defineField('current_holding');
const [total_consideration] = defineField('total_consideration');
const [date_entered_as_member] = defineField('date_entered_as_member');
const [date_cease_to_be_member] = defineField('date_cease_to_be_member');
const [remarks] = defineField('remarks');
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
            setFieldValue('remarks', register_of_shareholder.remarks)
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
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
            formData.append('remarks', values.remarks)
            formData.append('shareholders_id', selectedEntity.value.id)


            try {
                await api.registerOfShareholders(formData)
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