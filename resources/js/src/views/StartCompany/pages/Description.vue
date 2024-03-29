<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Description</div>
                <span>This information facilitates a faster review process by
                    our team and remains strictly confidential.</span>
            </section>

            <section class="section">
                <div class="fw-bold">Describe your product or service</div>
                <div>Please briefly describe the product or service you are developing.
                    Aim for a concise overview in one or two sentences.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <textarea v-model="form.description" class="form-control" rows="5"></textarea>
                        <small class=" text-danger">{{ form.errors.description }}</small>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Nature of business</div>
                <div>Choose the primary category that best represents business nature of your company
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <v-select v-model="form.business_nature_id" :clearable="false"
                            :options="startCompanyStore.businessNatures" :reduce="(item: any) => item.id"
                            label="name" />
                        <small class=" text-danger">{{ form.errors.business_nature_id }}</small>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Website or social media</div>
                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <input v-model="form.website" type="text" class="form-control">
                        <small class=" text-danger">{{ form.errors.website }}</small>
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

        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { descriptionForm } from './formsStore/Description'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = descriptionForm()

function moveBack() {
    startCompanyStore.switchStage('-')
}

onMounted(() => {
    form.description = startCompanyStore.companyInProgress?.description ?? ''
    form.website = startCompanyStore.companyInProgress?.website ?? ''
    form.business_nature_id = startCompanyStore.companyInProgress?.business_nature_id ?? ''
})

const saveAndContinue = form.handleSubmit(async (values) => {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    const formData = new FormData;
    formData.append('description', values.description)
    formData.append('business_nature_id', values.business_nature_id)
    formData.append('website', values.website)
    formData.append('company_id', startCompanyStore.companyInProgress.id)

    form.isSaving = true
    saveFromToApi(formData)
})


async function saveFromToApi(formData: FormData) {
    try {
        await api.companyDescription(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        // startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
    }
}

</script>
<style lang="css" scoped></style>
