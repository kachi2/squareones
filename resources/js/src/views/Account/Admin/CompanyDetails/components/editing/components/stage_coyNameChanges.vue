<template>
    <div>
        <div class="modal-body">
            <div class="row g-3">
                <div class="col-12 col-md-6">
                    <div class="form-label">Name:</div>
                    <input v-model="name" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.name }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Allotment Date:</div>
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="allotment_date">
                    </VueDatePicker>
                    <small class=" text-danger">{{ errors.allotment_date }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Address:</div>
                    <input v-model="address" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.address }}</small>
                </div>

                <div class="col-12 col-md-6">
                                <div class="form-label">Class of Shares:</div>
                                <input v-model="class_of_shares" type="text"  class="form-control">
                                <small class=" text-danger">{{ errors.class_of_shares }}</small>
                            </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">No of shares allocated:</div>
                    <input v-model="no_of_shares_allocated" placeholder="" class="form-control" v-maska
                        data-maska="9,99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                    <small class="text-danger">{{ errors.no_of_shares_allocated }}</small>
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
    allotment_date: yup.date().required('Field is required'),
    name: yup.string().required('Field is required'),
    address: yup.string().required('Field is required'),
    no_of_shares_allocated: yup.string().required('Field is required'),
    class_of_shares: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [allotment_date] = defineField('allotment_date');
const [name] = defineField('name');
const [address] = defineField('address');
const [no_of_shares_allocated] = defineField('no_of_shares_allocated');
 const [class_of_shares] = defineField('class_of_shares');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const register_of_company_name = paramsStore.currentCompanyData?.register_of_company_name[0]
    // const register_of_company_name = register_of_company_names.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
    if (register_of_company_name) {
        setFieldValue('allotment_date', register_of_company_name.allotment_date)
        setFieldValue('name', register_of_company_name.name)
        setFieldValue('address', register_of_company_name.address)
        setFieldValue('no_of_shares_allocated', register_of_company_name.no_of_shares_allocated)
        setFieldValue('class_of_shares', register_of_company_name.class_of_shares)
    }
}


const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('allotment_date', values.allotment_date ? useFxn.formatDate(values.allotment_date) : '')
            formData.append('name', values.name ?? '')
            formData.append('address', values.address ?? '')
            formData.append('no_of_shares_allocated', values.no_of_shares_allocated ?? '')
             formData.append('class_of_shares', values.class_of_shares??'ORDINARY')
            if (paramsStore.idToEdit)
                formData.append('namechange_id', paramsStore.idToEdit)


            try {
                await api.registerOfChangeOfName(formData)
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