<template>
    <div>

        <div class="modal-body">
            <div class="row g-3">
                <div class=" col-md-12">
                    <div class="mb-3">
                        <div class="form-floating-custom">
                            <select @change="populateFieldWithDetails" v-model="selectedEntity" class="form-select">
                                <option value="" selected disabled>--Select Shareholder--</option>
                                <option v-for="entity in selectOptions" :key="entity" :value="entity">{{
                                    entity.legal_entity_name }}</option>
                            </select>
                            <label for="selectedEntity">Select Shareholder:</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                        <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                            :enable-time-picker="false" auto-apply v-model="entry_date">
                        </VueDatePicker>
                        <label for="Name">Entry Date:</label>
                    </div>
                    <small class=" text-danger">{{ errors.entry_date }}</small>
                </div>
                <!-- <div class="col-12 col-md-6">
                                <div class="form-label">Name:</div>
                                <input v-model="name" type="text" class="form-control">
                                <small class=" text-danger">{{ errors.name }}</small>
                            </div> -->

                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-model="legal_entity_name" type="text" class="form-control" readonly>
                        <small class=" text-danger">{{ errors.legal_entity_name }}</small>
                        <label for="Name">Name of Registrable Person / Legal Entity:</label>
                    </div>
                    <small class=" text-danger">{{ errors.legal_entity_name }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                        <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                            :enable-time-picker="false" auto-apply v-model="date_becoming_rep_person">
                        </VueDatePicker>
                        <label for="Name">Date Becoming a Registrable Person:</label>
                    </div>
                    <small class=" text-danger">{{ errors.date_becoming_rep_person }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="fixed-label-custom">
                        <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                            :enable-time-picker="false" auto-apply v-model="date_ceased_to_be_rep_person">
                        </VueDatePicker>
                        <label for="Name">Date Cease to Be a Registrable Person:</label>
                    </div>
                    <small class=" text-danger">{{ errors.date_ceased_to_be_rep_person }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-model="resdential_address" type="text" class="form-control">
                        <label for="Name">Residential Address</label>
                    </div>
                    <small class=" text-danger">{{ errors.resdential_address }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-bind="corresponding_addressAttr" v-model="corresponding_address" type="text"
                            class="form-control">
                        <label for="Name">Corresponding Address:</label>
                    </div>
                    <small class=" text-danger">{{ errors.corresponding_address }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-model="identity_info" type="text" class="form-control">
                        <label for="Name">ID/ Passport / Registration No</label>
                    </div>
                    <small class=" text-danger">{{ errors.identity_info }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-model="place_of_registration" type="text" class="form-control">
                        <label for="Name">Place of Registration</label>
                    </div>
                    <small class=" text-danger">{{ errors.place_of_registration }}</small>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-model="nature_of_control_over_the_company" type="text" class="form-control">
                        <label for="Name">Nature of control over company</label>
                    </div>
                    <small class=" text-danger">{{ errors.nature_of_control_over_the_company }}</small>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-floating-custom">
                        <input v-model="remarks" type="text" class="form-control">
                        <label for="Name">Remarks</label>
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
import { computed, onMounted, ref, watch } from 'vue';
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
    // setValuesOnFields()
})

// console.log(paramsStore.currentCompanyData, 'paramsStore.currentCompanyData')


const selectOptions = computed(() => {
    return paramsStore.currentCompanyData?.significant_controller?? []
})
const selectedEntity = ref<any>('')
function populateFieldWithDetails() {
    if (selectedEntity.value) {
        console.log(selectedEntity.value, 'selectedEntity.value')
        if (selectedEntity.value.entry_date)
            entry_date.value = selectedEntity.value.entry_date
        if (selectedEntity.value.legal_entity_name)
            legal_entity_name.value = selectedEntity.value.legal_entity_name
        if (selectedEntity.value.date_becoming_rep_person)
            date_becoming_rep_person.value = selectedEntity.value.date_becoming_rep_person
        if (selectedEntity.value.date_ceased_to_be_rep_person)
            date_ceased_to_be_rep_person.value = selectedEntity.value.date_ceased_to_be_rep_person
        if (selectedEntity.value.remarks)
            remarks.value = selectedEntity.value.remarks
        if (selectedEntity.value.controllers_particulars.resdential_address)
            resdential_address.value = selectedEntity.value.controllers_particulars.resdential_address
        if (selectedEntity.value.controllers_particulars.corresponding_address)
            corresponding_address.value = selectedEntity.value.controllers_particulars.corresponding_address
        if (selectedEntity.value.controllers_particulars.identity_info)
            identity_info.value = selectedEntity.value.controllers_particulars.identity_info
        if (selectedEntity.value.controllers_particulars.place_of_registration)
            place_of_registration.value = selectedEntity.value.controllers_particulars.place_of_registration
        if (selectedEntity.value.controllers_particulars.nature_of_control_over_the_company)
            nature_of_control_over_the_company.value = selectedEntity.value.controllers_particulars.nature_of_control_over_the_company
    }

}



const checkIndividual = (value: any) => {
    return selectedEntity.value?.type == 'individual' ? (value !== undefined && value != '') : true;
}

const checkCorporate = (value: any) => {
    return selectedEntity.value?.type == 'corporate' ? (value !== undefined && value != '') : true;
}


// form and validation
const rules = {
    entry_date: yup.date().required('Field is required'),
    // name: yup.string().required('Field is required'),
    // legal_entity_name: yup.string().required('Field is required'),
    date_becoming_rep_person: yup.date().required('Field is required'),
    // date_ceased_to_be_rep_person: yup.date().required('Field is required'),
    corresponding_address: yup.string().test('checkCorporate', 'Field is required', checkCorporate),
    resdential_address: yup.string().test('checkIndividual', 'Field is required', checkIndividual),
    identity_info: yup.string().required('Field is required'),
    place_of_registration: yup.string().test('checkCorporate', 'Field is required', checkCorporate),
    nature_of_control_over_the_company: yup.string().test('checkCorporate', 'Field is required', checkCorporate),

};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
});

const [entry_date] = defineField('entry_date');
// const [name] = defineField('name');
const [legal_entity_name, legal_entity_nameAttr] = defineField('legal_entity_name');
const [date_becoming_rep_person, date_becoming_rep_personAttr] = defineField('date_becoming_rep_person');
const [date_ceased_to_be_rep_person, date_ceased_to_be_rep_personAttr] = defineField('date_ceased_to_be_rep_person');
const [corresponding_address, corresponding_addressAttr] = defineField('corresponding_address');
const [resdential_address, resdential_addressAttr] = defineField('resdential_address');
const [identity_info, identity_infoAttr] = defineField('identity_info');
const [place_of_registration, place_of_registrationAttr] = defineField('place_of_registration');
const [nature_of_control_over_the_company, nature_of_control_over_the_companyAttr] = defineField('nature_of_control_over_the_company');
const [remarks] = defineField('remarks')
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const significant_controller = paramsStore.currentCompanyData?.significant_controller[0]
    if (significant_controller) {
        setFieldValue('entry_date', significant_controller.entry_date)
        // setFieldValue('name', significant_controller.name)
        setFieldValue('legal_entity_name', significant_controller?.legal_entity_name)
        setFieldValue('date_becoming_rep_person', significant_controller?.date_becoming_rep_person)
        setFieldValue('date_ceased_to_be_rep_person', significant_controller?.date_ceased_to_be_rep_person)
        setFieldValue('corresponding_address', significant_controller?.controllers_particulars?.corresponding_address)
        setFieldValue('resdential_address', significant_controller?.controllers_particulars?.resdential_address)
        setFieldValue('identity_info', significant_controller?.controllers_particulars?.identity_info)
        setFieldValue('place_of_registration', significant_controller?.controllers_particulars?.place_of_registration)
        setFieldValue('nature_of_control_over_the_company', significant_controller?.controllers_particulars?.nature_of_control_over_the_company)
        setFieldValue('remarks', significant_controller?.remarks??'')
    }
}

const save = handleSubmit(async (values) => {
    useFxn.confirm('Update Data?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('entry_date', values.entry_date ?? '')
            // formData.append('name', values.name)
            formData.append('legal_entity_name', values.legal_entity_name ?? '')
            formData.append('date_becoming_rep_person', values.date_becoming_rep_person ? useFxn.formatDate(values.date_becoming_rep_person) : '')
            formData.append('date_ceased_to_be_rep_person', values.date_ceased_to_be_rep_person ? useFxn.formatDate(values.date_ceased_to_be_rep_person) : '')
            formData.append('corresponding_address', values.corresponding_address ?? '')
            formData.append('resdential_address', values.resdential_address ?? '')
            formData.append('identity_info', values.identity_info ?? '')
            formData.append('place_of_registration', values.place_of_registration ?? '')
            formData.append('nature_of_control_over_the_company', values.nature_of_control_over_the_company ?? '')
            formData.append('controllers_id', selectedEntity.value.id)
            formData.append('remarks', values.remarks??'')


            try {
                await api.significantControllers(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                // resetForm()
                // emit('done')
            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>