<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Registered Address</div>
            </section>

            <section>
                <div class="fw-bold">Registered Office Address</div>

                <div class="row g-2 mt-1">
                    <div class="col-12">
                        <input v-model="form.address" class="form-control" type="text" placeholder="Flat／Floor／Block">
                    </div>
                    <div class="col-12">
                        <input v-model="form.street_no" class="form-control" type="text" placeholder="Street number">
                    </div>
                    <div class="col-12">
                        <input v-model="form.city" class="form-control" type="text" placeholder="City">
                    </div>
                    <div class="col-12">
                        <input v-model="form.state" class="form-control" type="text" placeholder="State">
                    </div>
                    <div class="col-12">
                        <input v-model="form.postal_code" class="form-control" type="text" placeholder="Postal Code">
                    </div>
                    <div class="col-md-12">
                        <v-select placeholder="select country.." v-model="form.country" :clearable="false"
                            :options="startCompanyStore.countries" />
                    </div>
                </div>
            </section>



            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button v-if="!form.isSaving" @click="saveAndContinue" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>
                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Saving, Please wait
                </button>
            </div>

        </template>

        <template #info>
            <section>
                <div class="fw-bold">
                    What is registered office address?
                </div>
                <div>

                    A registered office address is the official legal address of a company where formal communications
                    and notices are sent.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    Why can’t I change the registered office address?
                </div>
                <div>
                    The registered office address provided is part of our initial services. You can update it to a new
                    address after the incorporation process is completed.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { addressForm } from './formsStore/Address'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = addressForm()


onMounted(() => {
    form.address = startCompanyStore.companyInProgress?.address ?? ''
    form.street_no = startCompanyStore.companyInProgress?.street_no ?? ''
    form.city = startCompanyStore.companyInProgress?.city ?? ''
    form.state = startCompanyStore.companyInProgress?.state ?? ''
    form.postal_code = startCompanyStore.companyInProgress?.postal_code ?? ''
    form.country = startCompanyStore.companyInProgress?.country ?? ''
})



function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinue() {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if (!form.address || !form.street_no || !form.city || !form.state || !form.postal_code || !form.country) {
        toast.default('Please complete fields', { position: 'top-right' })
        return;
    }

    const formData = new FormData;
    formData.append('address', form.address)
    formData.append('street_no', form.street_no)
    formData.append('city', form.city)
    formData.append('state', form.state)
    formData.append('postal_code', form.postal_code)
    formData.append('country', form.country)
    formData.append('company_id', startCompanyStore.companyInProgress.id)

    form.isSaving = true
    saveFromToApi(formData)
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyAddress(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        // startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
    }
}

</script>
<style lang="css" scoped></style>
