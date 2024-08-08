<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <div class="col-12 col-md-6">
                    <div class="form-label">Director:</div>
                    <input v-model="directors" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.directors }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Shareholders:</div>
                    <input v-model="shareholders" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.shareholders }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Company Secretary:</div>
                    <input v-model="company_secretary" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.company_secretary }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-label">Registered Office:</div>
                    <input v-model="registered_office" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.registered_office }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Businness Adress:</div>
                    <input v-model="business_address" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.business_address }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Designated Representative:</div>
                    <input v-model="scr_designated_representative" type="text" class="form-control">
                    <small class=" text-danger">{{ errors.scr_designated_representative }}</small>
                </div>
            </div>

        </div>
        <div class="modal-footer mt-4 border-0">

            <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving data..
            </button>

            <button v-else @click="save" type="button" class="btn btn-primary">
                Save and Continue
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])
onMounted(() => {
    setValuesOnFields()
})


// form and validation
const rules = {
    registered_office: yup.string().required('Field is required'),
    business_address: yup.string().required('Field is required'),
    directors: yup.string().required('Field is required'),
    shareholders: yup.string().required('Field is required'),
    company_secretary: yup.string().required('Field is required'),
    scr_designated_representative: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [registered_office] = defineField('registered_office');
const [directors] = defineField('directors');
const [business_address] = defineField('business_address');
const [shareholders] = defineField('shareholders');
const [company_secretary] = defineField('company_secretary');
const [scr_designated_representative] = defineField('scr_designated_representative');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    // if (paramsStore.idToEdit) {
    const office_contract = paramsStore.currentCompanyData?.office_contract[0]
    // econst office_contract = office_contracts.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
    if (office_contract) {
        setFieldValue('registered_office', office_contract.registered_office)
        setFieldValue('directors', office_contract.directors)
        setFieldValue('business_address', office_contract.business_address)
        setFieldValue('shareholders', office_contract.shareholders)
        setFieldValue('company_secretary', office_contract.company_secretary)
        setFieldValue('scr_designated_representative', office_contract.scr_designated_representative)
    }
    // }
}


const save = handleSubmit(async (values) => {
    isSaving.value = true
    const formData = new FormData()
    formData.append('company_id', paramsStore.currentCompanyId)
    formData.append('registered_office', values.registered_office ?? '')
    formData.append('directors', values.directors ?? '')
    formData.append('business_address', values.business_address ?? '')
    formData.append('shareholders', values.shareholders ?? '')
    formData.append('company_secretary', values.company_secretary ?? '')
    formData.append('scr_designated_representative', values.scr_designated_representative ?? '')
    // if (paramsStore.idToEdit)
    //     formData.append('officecontract_id', paramsStore.idToEdit)


    try {
        await api.officeContract(formData)
        isSaving.value = false
        resetForm()
        paramsStore.getCompanyDetails()
        emit('done')

    } catch (error) {
        console.log(error);
    }
})
</script>