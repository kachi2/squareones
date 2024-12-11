<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                    <input v-model="auditor_name" type="text" class="form-control" id="auditor_name">
                   <label  for="auditor_name">Auditor Name:</label>
                    </div>
                    <small class=" text-danger">{{ errors.auditor_name }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="business_registration_renewal_date">
                    </VueDatePicker>
                    <label  for="auditor_name">Business Registration Renewal:</label>
                    </div>
                    <small class="text-danger">{{ errors.business_registration_renewal_date }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="accounting_reference_date" id="accounting_reference_date">
                    </VueDatePicker>
                    <label  for="accounting_reference_date">Accounting Reference Date:</label>
                    </div>
                    <small class="text-danger">{{ errors.accounting_reference_date }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                        :enable-time-picker="false" auto-apply v-model="annual_return_date">
                    </VueDatePicker>
                    <label  for="annual_return_date">Annual Return Renewal:</label>
                    </div>
                    <small class="text-danger">{{ errors.annual_return_date }}</small>
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
import { onMounted, ref, watch } from 'vue';
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
    // auditor_name: yup.string().required('Field is required'),
    // accounting_reference_date: yup.date().required('Field is required'),
    business_registration_renewal_date: yup.date().required('Field is required'),
    annual_return_date: yup.date().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue } = useForm({
    validationSchema: yup.object(rules),
});

const [auditor_name] = defineField('auditor_name');
const [accounting_reference_date] = defineField('accounting_reference_date');
const [business_registration_renewal_date] = defineField('business_registration_renewal_date');
const [annual_return_date] = defineField('annual_return_date');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const compliance_reporting = paramsStore.currentCompanyData?.compliance_reporting[0]
    if (compliance_reporting) {
        setFieldValue('auditor_name', compliance_reporting.auditor_name)
        setFieldValue('accounting_reference_date', compliance_reporting.accounting_reference_date)
        setFieldValue('business_registration_renewal_date', compliance_reporting.business_registration_renewal_date)
        setFieldValue('annual_return_date', compliance_reporting.annual_return_date)
    }

}



const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('auditor_name', values.auditor_name ?? '')
            formData.append('accounting_reference_date', values.accounting_reference_date ? useFxn.formatDate(values.accounting_reference_date) : '')
            formData.append('business_registration_renewal_date', values.business_registration_renewal_date ? useFxn.formatDate(values.business_registration_renewal_date) : '')
            formData.append('annual_return_date', values.annual_return_date ? useFxn.formatDate(values.annual_return_date) : '')

            try {
                await api.complianceReporting(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                // emit('done')

            } catch (error) {
             //   console.log(error);
            }
        }
    })
})
</script>