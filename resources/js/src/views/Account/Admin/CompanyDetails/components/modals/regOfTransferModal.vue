<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#regOfTransferModalEdit">
        </button>

        <div class="modal fade" id="regOfTransferModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Register of Transfer </h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input list="transferors" v-model="transferor" type="text" class="form-control">
                                    <datalist id="transferors">
                                        <option v-for="entity in listOfShareHolders" :key="entity.id"
                                            :value="entity.name"></option>
                                    </datalist>
                                    <label class="" for="transferors">Transferor:</label>
                                </div>
                                <small v-if="transferorCurrentHolding" class=" text-warning">
                                    Current Holding: {{ transferorCurrentHolding }}
                                </small>
                                <small class=" text-danger">{{ errors.transferor }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input list="transferees" v-model="transferee" type="text" class="form-control">
                                    <datalist id="transferees">
                                        <option v-for="entity in listOfShareHolders" :key="entity.id"
                                            :value="entity.name"></option>
                                    </datalist>
                                    <label class="" for="transferees">Transferee:</label>
                                </div>
                                <small class=" text-danger">{{ errors.transferee }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="true"
                                        :enable-time-picker="false" auto-apply v-model="registration_date"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="registration_date">Registration Date:</label>
                                </div>
                                <small class=" text-danger">{{ errors.allotment_date }}</small>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="no_of_shares_transfered" type="text" class="form-control"
                                        placeholder="">
                                    <label class="" for="no_of_shares_transfered">No. of Shares Transfered:</label>
                                </div>
                                <small class=" text-danger">{{ errors.no_of_shares_transfered }}</small>
                            </div>



                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="total_consideration" type="text" class="form-control"
                                        placeholder="">
                                    <small class=" text-danger">{{ errors.total_consideration }}</small>
                                    <label class="" for="total_consideration">Total Consideration:</label>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="form-floating-custom">
                                    <input v-model="transfer_method" type="text" class="form-control" placeholder="">
                                    <small class=" text-danger">{{ errors.transfer_method }}</small>
                                    <label class="" for="transfer_method">Transfer Method:</label>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-floating-custom">
                                    <input v-model="remarks" type="text" class="form-control" placeholder="">
                                    <small class=" text-danger">{{ errors.remarks }}</small>
                                    <label class="" for="transfer_method">Remarks:</label>
                                </div>
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
import { computed, ref, watch, } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../adminParamsStore';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

// modal
const openModal = ref<any>(null)
const closeModal = ref<any>(null)
watch(() => paramsStore.regOfTransferModal, () => {
    if (paramsStore.idToEdit) setValuesOnFields()
    else resetForm()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


const listOfShareHolders = computed(() => {
    return paramsStore.currentCompanyData?.register_of_shareholders ?? []
})
const transferorCurrentHolding = ref<any>(null)

// const listOfShareHoldersFiltered = computed(() => {
//     return listOfShareHolders.value.filter((x: any) => x.id !== transferee.value)
// })




// form and validation
const rules = {
    registration_date: yup.date().required('Field is required'),
    transferee: yup.string().required('Field is required'),
    no_of_shares_transfered: yup.string().required('Field is required'),
    total_consideration: yup.string().required('Field is required'),
    transfer_method: yup.string().required('Field is required'),
    transferor: yup.string().required('Field is required'),
    remarks: yup.string()
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
});

const [registration_date] = defineField('registration_date');
const [transferee] = defineField('transferee');
const [transferor] = defineField('transferor');
const [no_of_shares_transfered] = defineField('no_of_shares_transfered');
const [total_consideration] = defineField('total_consideration');
const [transfer_method] = defineField('transfer_method');
const [remarks] = defineField('remarks');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    if (paramsStore.idToEdit) {
        const register_of_transfers = paramsStore.currentCompanyData?.register_of_transfer
        const register_of_transfer = register_of_transfers.find((x: { id: string; }) => x.id == paramsStore.idToEdit)
        if (register_of_transfer) {
            setFieldValue('registration_date', register_of_transfer.registration_date)
            setFieldValue('transferee', register_of_transfer.transferee)
            setFieldValue('no_of_shares_transfered', register_of_transfer.no_of_shares_transfered)
            setFieldValue('total_consideration', register_of_transfer.total_consideration)
            setFieldValue('transfer_method', register_of_transfer.transfer_method)
            setFieldValue('transferor', register_of_transfer.transferor)
            setFieldValue('remarks', '')
        }
    }
}

watch(() => [transferee.value, transferor.value], () => {
    if (transferee.value == transferor.value)
        transferee.value = ''
})


watch(() => transferor.value, () => {
    const shareHolder = listOfShareHolders.value.find((x: any) => x.name == transferor.value)
    transferorCurrentHolding.value = !(transferor.value && shareHolder && shareHolder.current_holding) ? null : useFxn.addCommas(shareHolder.current_holding)
})


const save = handleSubmit(async (values) => {
    useFxn.confirm('Confirm submit?', 'Continue').then(async (confirmed) => {
        if (confirmed.value == true) {

            if (!transferorCurrentHolding.value) {
                useFxn.toast('No current holding for this Transferor', 'warning')
                return;
            }


            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('registration_date', values.registration_date ? useFxn.formatDate(values.registration_date) : '')
            formData.append('transferee', values.transferee ?? '')
            formData.append('no_of_shares_transfered', values.no_of_shares_transfered ?? '')
            formData.append('total_consideration', values.total_consideration ?? '')
            formData.append('transfer_method', values.transfer_method ?? '')
            formData.append('transferor', values.transferor ?? '')
            formData.append('remarks', values.remarks ?? '')
            if (paramsStore.idToEdit)
                formData.append('transfer_id', paramsStore.idToEdit)
            try {
                const resp: any = await api.registerOfTransfer(formData)
                if (resp.status !== 200) {
                    useFxn.toast(resp?.data?.message ?? 'Something went wrong with your Request', 'warning')
                    isSaving.value = false
                    return
                }
                useFxn.toast('Transfer successful', 'success')
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