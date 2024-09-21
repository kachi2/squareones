<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <div class="col-12">
                    <div class="form-label">Directors:</div>
                    <v-select v-bind="directorsAttr" append-to-body :calculate-position="useFxn.vueSelectPositionCalc"
                        :multiple="true" v-model="directors" :clearable="true" :options="directorsDropDown" />
                    <!-- <input v-model="directors" type="text" class="form-control"> -->
                    <small class=" text-danger">{{ errors.directors }}</small>
                </div>
                <div class="col-12">
                    <div class="form-label">Shareholders:</div>
                    <!-- <input v-model="shareholders" type="text" class="form-control"> -->
                    <v-select v-bind="shareholdersAttr" append-to-body
                        :calculate-position="useFxn.vueSelectPositionCalc" :multiple="true" v-model="shareholders"
                        :clearable="true" :options="shareholdersDropDown" />
                    <small class=" text-danger">{{ errors.shareholders }}</small>
                </div>


                <div class="col-12">
                    <div class="form-label">Registered Office:</div>
                    <textarea v-model="registered_office" class="form-control" rows="2"></textarea>
                    <small class=" text-danger">{{ errors.registered_office }}</small>
                </div>
                <div class="col-12">
                    <div class="form-label">Businness Adress:</div>
                    <textarea v-model="business_address" class="form-control" rows="2"></textarea>
                    <small class=" text-danger">{{ errors.business_address }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-label">Company Secretary:</div>
                    <select v-model="company_secretary" class="form-select">
                        <option selected :value="company_secretary">{{ company_secretary }}
                        </option>
                    </select>
                    <small class=" text-danger">{{ errors.company_secretary }}</small>
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
                Update Data
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useToast } from 'vue-toast-notification';

const paramsStore = useAdminParamsStore()
const toast = useToast()

const emit = defineEmits(['done'])
onMounted(() => {
    setValuesOnFields()
})


// form and validation
const rules = {
    registered_office: yup.string().required('Field is required'),
    business_address: yup.string().required('Field is required'),
    directors: yup.array().required('Please select an option'),
    shareholders: yup.array().required('Please select an option'),
    company_secretary: yup.string().required('Field is required'),
    scr_designated_representative: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
});

const [registered_office] = defineField('registered_office');
const [directors, directorsAttr] = defineField('directors');
const [business_address] = defineField('business_address');
const [shareholders, shareholdersAttr] = defineField('shareholders');
const [company_secretary] = defineField('company_secretary');
const [scr_designated_representative] = defineField('scr_designated_representative');
const isSaving = ref<boolean>(false)

const directorsDropDown = ref([])
const shareholdersDropDown = ref([])
function setValuesOnFields() {
    const office_contract = paramsStore.currentCompanyData?.office_contract[0]
    if (office_contract) {

        try {
            directorsDropDown.value = JSON.parse(office_contract.directors)
            shareholdersDropDown.value = JSON.parse(office_contract.shareholders)
            setFieldValue('directors', JSON.parse(office_contract.directors))
            setFieldValue('shareholders', JSON.parse(office_contract.shareholders))
        } catch (error) {

        }
        setFieldValue('registered_office', office_contract.registered_office)
        setFieldValue('business_address', office_contract.business_address)
        setFieldValue('company_secretary', office_contract.company_secretary)
        setFieldValue('scr_designated_representative', office_contract.scr_designated_representative)
    }
}

watchEffect(() => {

    if (directors.value && directors.value.length < 1) {
        errors.value.directors = 'Please select an option'
    }

    if (shareholders.value && shareholders.value.length < 1) {
        errors.value.shareholders = 'Please select an option'
    }
})


const save = handleSubmit(async (values) => {

    if (Object.keys(errors.value).length > 0) {
        toast.default("Some fields still have errors", { position: 'top-right' });
        return;
    }


    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('registered_office', values.registered_office ?? '')
            formData.append('directors', values.directors ?? '')
            formData.append('business_address', values.business_address ?? '')
            formData.append('shareholders', values.shareholders ?? '')
            formData.append('company_secretary', values.company_secretary ?? '')
            formData.append('scr_designated_representative', values.scr_designated_representative ?? '')

            //     formData.append('officecontract_id', paramsStore.idToEdit)


            try {
                await api.officeContract(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                resetForm()
                // emit('done')

            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>