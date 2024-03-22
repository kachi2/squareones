<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Description</div>
                <span>This information facilitates a faster review process by
                    our team and remains strictly confidential.</span>
            </section>

            <section>
                <div class="fw-bold">Describe your product or service</div>
                <div>Please briefly describe the product or service you are developing.
                    Aim for a concise overview in one or two sentences.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <textarea v-model="form.description" class="form-control" rows="5"></textarea>
                        <small class="float-end">Minimum of 150 character needed</small>
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bold">Nature of business</div>
                <div>Choose the primary category that best represents business nature of your company
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <v-select v-model="form.business_nature_id" :clearable="false"
                            :options="startCompanyStore.businessNatures" :reduce="(item: any) => item.id"
                            label="name" />
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bold">Website or social media</div>
                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <input v-model="form.website" type="text" class="form-control">
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
import { ref, reactive } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';


const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = reactive({
    description: '',
    business_nature_id: '',
    website: '',
    isSaving: false
})

function moveBack() {
    // 
}

function saveAndContinue() {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 1)
        return;
    }

    if (!form.description || !form.business_nature_id) {
        toast.default('Please complete fields', { position: 'top-right' })
        return;
    }

    const formData = new FormData;
    formData.append('description', form.description)
    formData.append('business_nature_id', form.business_nature_id)
    formData.append('website', form.website)
    formData.append('company_id', startCompanyStore.companyInProgress.id)

    form.isSaving = true
    saveFromToApi(formData)
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyDescription(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
    }
}

</script>
<style lang="css" scoped></style>
