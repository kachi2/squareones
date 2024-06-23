<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Description</div>
                <span>This information facilitates a faster review process by
                    our team and remains strictly confidential.</span>
            </section>

            <section class="section">
                <div class="fw-bold">Describe your product or service <span class="text-danger"> * </span></div>
                <div>Please briefly describe the product or service you are developing.
                    Aim for a concise overview in one or two sentences.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <textarea :class="{ 'error-field': form.errors.description }" v-model="form.description"
                            class="form-control" rows="5"></textarea>
                        <small class=" text-danger">{{ form.errors.description }}</small>
                        <small class="float-end">{{ wordCount }}/{{ maxCharCount }}</small>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Nature of business <span class="text-danger"> * </span></div>
                <div>Choose the primary category that best represents business nature of your company
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <v-select :class="{ 'error-field': form.errors.business_nature_id }"
                            v-model="form.business_nature_id" :clearable="true"
                            :options="startCompanyStore.businessNatures" :reduce="(item: any) => item.id"
                            label="name" />
                        <small class=" text-danger">{{ form.errors.business_nature_id }}</small>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Website or social media</div>
                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <input :class="{ 'error-field': form.errors.website }" v-model="form.website" type="text"
                            class="form-control">
                        <small class=" text-danger">{{ form.errors.website }}</small>
                    </div>
                </div>
            </section>

            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-info me-3">
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
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { descriptionForm } from './formsStore/Description'
import { computed, onMounted, watch } from 'vue';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = descriptionForm()

onMounted(() => {
    form.updateFields(startCompanyStore.companyInProgress)
})

watch(() => form, () => { form.saveToLocalStorage() }, { deep: true })

function moveBack() {
    startCompanyStore.switchStage('-')
}





const saveAndContinue = () => {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.info('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if (Object.keys(form.errors).length > 0) {
        toast.error("Some fields still have errors", { position: 'top-right' });
        return true;
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


// counting characters
const maxCharCount = 150
const wordCount = computed(() => {
    return form?.description?.length ?? 0;
});

</script>
<style lang="css" scoped></style>
