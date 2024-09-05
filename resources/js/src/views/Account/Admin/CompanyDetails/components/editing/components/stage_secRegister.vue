<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <!-- <div class=" col-md-6"> </div>
                <div class=" col-md-6">
                    <div class="mb-3">
                        <label for="" class="form-label">Select Secretary</label>
                        <select @change="populateFieldWithDetails" v-model="selectedEntity" class="form-select">
                            <option value="" selected disabled>--Select--</option>
                            <option v-for="entity in selectOptions" :key="entity" :value="entity">{{
                                entity.name }}</option>

                        </select>
                    </div>

                </div> -->
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
                    <div class="form-label">ID/ Passport / Registration No:</div>
                    <input v-model="identity_info" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.identity_info }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label"> Residential Address / Registered Office:</div>
                    <input v-model="address" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.address }}</small>
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
        <div class="modal-footer mt-4 border-0">

            <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving data..
            </button>

            <button :disabled="!selectedEntity" v-else @click="save" type="button" class="btn btn-primary">
                Update Date
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])


onMounted(() => {
    selectedEntity.value = selectOptions.value[0]
    populateFieldWithDetails()
})

const selectOptions = computed(() => {
    return paramsStore.currentCompanyData?.register_of_secretary ?? []
})
const selectedEntity = ref<any>('')
function populateFieldWithDetails() {
    if (selectedEntity.value) {
        appointment_date.value = selectedEntity.value.appointment_date
        name.value = selectedEntity.value.name
        identity_info.value = selectedEntity.value.identity_info
        address.value = selectedEntity.value.address
        cease_to_act.value = selectedEntity.value.cease_to_act
        remarks.value = selectedEntity.value.remarks
    }
}

// form and validation
const rules = {
    appointment_date: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    identity_info: yup.string().required('Field is required'),
    address: yup.string().required('Field is required'),
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
const [address] = defineField('address');
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
            setFieldValue('address', register_of_secretary.address)
            setFieldValue('remarks', register_of_secretary.remarks)
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('appointment_date', values.appointment_date ? useFxn.formatDate(values.appointment_date) : '')
            formData.append('name', values.name ?? '')
            formData.append('identity_info', values.identity_info ?? '')
            formData.append('address', values.address ?? '')
            formData.append('cease_to_act', values.cease_to_act ? useFxn.formatDate(values.cease_to_act) : '')
            formData.append('remarks', values.remarks ?? '')

            formData.append('secretary_id', selectedEntity.value.id)


            try {
                await api.registerOfSecretaries(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                // resetForm()
                // selectedEntity.value = ''
                // emit('done')

            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>