<template>
    <div>
        <div class="modal-body">
            <div class="row g-3">
                <!-- <div class=" col-md-6"> </div> -->
                <div class=" col-md-12">
                    <div class="mb-3">
                        <label for="" class="form-label">Select Director</label>
                        <select @change="populateFieldWithDetails" v-model="selectedEntity" class="form-select">
                            <option value="" selected disabled>--Select Director--</option>
                            <option v-for="entity in selectOptions" :key="entity" :value="entity">{{
                                entity.name }}</option>
                        </select>
                    </div>

                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Name:</div>
                    <input disabled v-model="name" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.name }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Date of Appointment:</div>
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="date_of_appointment">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.date_of_appointment }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">ID/ Passport / Registration No:</div>
                    <input v-model="reg_no" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.reg_no }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Residential Address / Registered Office:</div>
                    <input v-model="registered_office" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.registered_office }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Ceasing to Act:</div>
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                        :enable-time-picker="false" auto-apply v-model="ceasing_of_act">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.ceasing_of_act }}</small>
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
                Update Data
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';
import { storeToRefs } from 'pinia'

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()
const emit = defineEmits(['done'])



const selectOptions = computed(() => {
    return paramsStore.currentCompanyData?.register_of_director ?? []
})
const selectedEntity = ref<any>('')
function populateFieldWithDetails() {
    if (selectedEntity.value) {
        name.value = selectedEntity.value.name
        date_of_appointment.value = selectedEntity.value.date_of_appointment
        reg_no.value = selectedEntity.value.reg_no
        registered_office.value = selectedEntity.value.registered_office
        ceasing_of_act.value = selectedEntity.value.ceasing_of_act
        remarks.value = selectedEntity.value.remarks
    }

}

// form and validation
const rules = {
    date_of_appointment: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    reg_no: yup.string().required('Field is required'),
    registered_office: yup.string().required('Field is required'),
    // ceasing_of_act: yup.date().required('Field is required'),
    remarks: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
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
            setFieldValue('remarks', register_of_director.remarks)
        }
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
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

            formData.append('directors_id', selectedEntity.value.id)


            try {
                await api.registerOfDirectors(formData)
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