<template>
    <div>
        <div class="modal-body">
            <div class="row g-3">

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="entry_date">
                    </VueDatePicker>
                    <label  for="Name">Entry Date:</label>
                    </div>
                    <small class=" text-danger">{{ errors.entry_date }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                    <input v-model="name" type="text" class="form-control">
                    <label  for="Name">Name:</label>
                    </div>
                    <small class=" text-danger">{{ errors.name }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom">
                    <textarea class="form-control" rows="2" v-model="corresponding_address"></textarea>
                    <label  for="Name">Corresponding Address/Residential Address:</label>
                    </div>
                    <small class=" text-danger">{{ errors.corresponding_address }}</small>
                </div>

                <!-- <div class="col-12 col-md-6">
                    <div class="form-label">ID/Passport/ Registration No::</div>
                    <input v-model="identity_info" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.identity_info }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Place of Registration:</div>
                    <input v-model="place_of_registration" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.place_of_registration }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label"> Nature of control over company::</div>
                    <input v-model="nature_of_control_over_the_company" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.nature_of_control_over_the_company }}</small>
                </div> -->

                <div class="col-12">
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

            <button v-else @click="save" type="button" class="btn btn-primary">
                Update Data
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';
import { vMaska } from "maska"

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])

onMounted(() => {
    setValuesOnFields()
})

// form and validation

const rules = {
    entry_date: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    corresponding_address: yup.string().required('Field is required'),
};




const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
});

const [entry_date] = defineField('entry_date');
const [name] = defineField('name');
const [remarks] = defineField('remarks');
const [corresponding_address] = defineField('corresponding_address');
const [representatives_id] = defineField('representatives_id');
// const [place_of_registration] = defineField('place_of_registration');
// const [nature_of_control_over_the_company] = defineField('nature_of_control_over_the_company');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const designated_representative = paramsStore.currentCompanyData?.designated_representative[0]
    // console.log(designated_representative, 'designated_representative')
    if (designated_representative) {
        setFieldValue('entry_date', designated_representative.entry_date)
        setFieldValue('name', designated_representative.name)
        setFieldValue('remarks', designated_representative.remarks)
        setFieldValue('corresponding_address', designated_representative.designated_particulars.corresponding_address)
        setFieldValue('representatives_id', designated_representative.id)
        // setFieldValue('identity_info', designated_representative.designated_particulars.identity_info)
        // setFieldValue('place_of_registration', designated_representative.designated_particulars.place_of_registration)
        // setFieldValue('nature_of_control_over_the_company', designated_representative.designated_particulars.nature_of_control_over_the_company)
    }
}

const save = handleSubmit(async (values) => {
    console.log(values, 'valeus go edit')
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('entry_date', values.entry_date ? useFxn.formatDate(values.entry_date) : '')
            formData.append('name', values.name ?? '')
            formData.append('remarks', values.remarks ?? '')
            formData.append('corresponding_address', values.corresponding_address ?? '')
            // formData.append('identity_info', values.identity_info ?? '')
            // formData.append('place_of_registration', values.place_of_registration ?? '')
            // formData.append('nature_of_control_over_the_company', values.nature_of_control_over_the_company ?? '')
            formData.append('representatives_id', values.representatives_id)
            try {
                await api.designatedRepresentatives(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                // emit('done')
            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>