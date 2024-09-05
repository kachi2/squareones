<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#sigControllerModalEdit">
        </button>

        <div class="modal fade" id="sigControllerModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Significant Controller Register</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">

                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="entry_date"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Entry Date</label>
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
                                    <input v-model="legal_entity_name" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Legal Entity</label>
                                </div>
                                <small class=" text-danger">{{ errors.legal_entity_name }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="date_becoming_rep_person"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Date Becoming Rep Person</label>
                                </div>
                                <small class=" text-danger">{{ errors.date_becoming_rep_person }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="date_ceased_to_be_rep_person"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Date Ceased to be Rep Person</label>
                                </div>
                                <small class=" text-danger">{{ errors.date_ceased_to_be_rep_person }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="resdential_address" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Residential Address</label>
                                </div>
                                <small class=" text-danger">{{ errors.resdential_address }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="corresponding_address" type="text" class="form-control"
                                        placeholder="">
                                    <label class="" for="eng_name">Corresponding Address</label>
                                </div>
                                <small class=" text-danger">{{ errors.corresponding_address }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="identity_info" type="text" class="form-control" placeholder="">
                                    <label class="" for="eng_name">Identity Infomation</label>
                                </div>
                                <small class=" text-danger">{{ errors.identity_info }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="place_of_registration" type="text" class="form-control"
                                        placeholder="">
                                    <label class="" for="eng_name">Place of Registration</label>
                                </div>
                                <small class=" text-danger">{{ errors.place_of_registration }}</small>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-floating-custom">
                                    <input v-model="nature_of_control_over_the_company" type="text" class="form-control"
                                        placeholder="">
                                    <label class="" for="eng_name">Nature of Control</label>
                                </div>
                                <small class=" text-danger">{{ errors.nature_of_control_over_the_company }}</small>
                            </div>

                        </div>

                    </div>
                    <div class="modal-footer border-0">
                        <button ref="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>

                        <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving data..
                        </button>

                        <button v-else @click="save" type="button" class="btn btn-primary">
                            {{ paramsStore.idToEdit ? 'Update' : 'Submit' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../adminParamsStore';
import { vMaska } from "maska"

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

// modal
const openModal = ref<any>(null)
const closeModal = ref<any>(null)
watch(() => paramsStore.sigControllerModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


// form and validation
const rules = {
    entry_date: yup.date().required('Field is required'),
    // name: yup.string().required('Field is required'),
    legal_entity_name: yup.string().required('Field is required'),
    date_becoming_rep_person: yup.date().required('Field is required'),
    date_ceased_to_be_rep_person: yup.date().required('Field is required'),
    corresponding_address: yup.string().required('Field is required'),
    resdential_address: yup.string().required('Field is required'),
    identity_info: yup.string().required('Field is required'),
    place_of_registration: yup.string().required('Field is required'),
    nature_of_control_over_the_company: yup.string().required('Field is required'),
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    // validationSchema: yup.object(rules),
});

const [entry_date] = defineField('entry_date');
// const [name] = defineField('name');
const [legal_entity_name] = defineField('legal_entity_name');
const [date_becoming_rep_person] = defineField('date_becoming_rep_person');
const [date_ceased_to_be_rep_person] = defineField('date_ceased_to_be_rep_person');
const [corresponding_address] = defineField('corresponding_address');
const [resdential_address] = defineField('resdential_address');
const [identity_info] = defineField('identity_info');
const [place_of_registration] = defineField('place_of_registration');
const [nature_of_control_over_the_company] = defineField('nature_of_control_over_the_company');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const significant_controllers = paramsStore.currentCompanyData?.significant_controller
        const significant_controller = significant_controllers.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (significant_controller) {
            setFieldValue('entry_date', significant_controller.entry_date)
            // setFieldValue('name', significant_controller.name)
            setFieldValue('legal_entity_name', significant_controller.legal_entity_name)
            setFieldValue('date_becoming_rep_person', significant_controller.date_becoming_rep_person)
            setFieldValue('date_ceased_to_be_rep_person', significant_controller.date_ceased_to_be_rep_person)
            setFieldValue('corresponding_address', significant_controller.controllers_particulars.corresponding_address)
            setFieldValue('resdential_address', significant_controller.controllers_particulars.resdential_address)
            setFieldValue('identity_info', significant_controller.controllers_particulars.identity_info)
            setFieldValue('place_of_registration', significant_controller.controllers_particulars.place_of_registration)
            setFieldValue('nature_of_control_over_the_company', significant_controller.controllers_particulars.nature_of_control_over_the_company)
        }
    }
}

const save = handleSubmit(async (values) => {
    useFxn.confirm("Continue submit?", "Continue").then(async (confirmed) => {
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
            if (paramsStore.idToEdit)
                formData.append('controllers_id', paramsStore.idToEdit)


            try {
                await api.significantControllers(formData)
                isSaving.value = false
                resetForm()
                paramsStore.getCompanyDetails()
                closeModal.value.click()
            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>