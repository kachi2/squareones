<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Activities</div>
                <span>Detail your company's primary business operations below.</span>
            </section>

            <section class="section">
                <div class="fw-bold">Describe your expected business activities <span class="text-danger"> * </span>
                </div>
                <div>Provide a brief but clear description of your anticipated business activities.
                    Be as specific as possible to ensure accurate representation in your business
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <textarea v-bind="form.descriptionAttr" :class="{ 'error-field': form.errors.description }"
                            v-model="form.description" class="form-control" rows="5"></textarea>
                        <small class=" text-danger">{{ form.errors.description }}</small>
                        <small class="float-end">{{ wordCount }}/{{ maxCharCount }}</small>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Level of activity <span class="text-danger"> * </span></div>
                <div>Select the volume and frequency of transactions your business expects to handle.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <v-select @search:blur="form.validateVueSelectOnBlur('activity_level')"
                            v-bind="form.activity_levelAttr" :class="{ 'error-field': form.errors.activity_level }"
                            v-model="form.activity_level" :clearable="true"
                            :options="startCompanyStore.levelOfActivity" />
                        <small class=" text-danger">{{ form.errors.activity_level }}</small>
                    </div>

                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Nature of activity <span class="text-danger"> * </span></div>
                <div>Choose the main industry or sector that best represents your business operations.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <v-select @search:blur="form.validateVueSelectOnBlur('activity_nature')"
                            v-bind="form.activity_natureAttr" :class="{ 'error-field': form.errors.activity_nature }"
                            v-model="form.activity_nature" :clearable="true"
                            :options="startCompanyStore.natureOfActivity" />
                        <small class=" text-danger">{{ form.errors.activity_nature }}</small>
                    </div>

                </div>
            </section>

            <section class="section">
                <div class="fw-bold">Customer location and operation <span class="text-danger"> * </span></div>
                <div>Indicate the primary countries where your company will actively conduct business or serve
                    customers.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <v-select v-bind="form.customer_location_operationAttr"
                            :class="{ 'error-field': form.errors.customer_location_operation }" :multiple="true"
                            v-model="form.customer_location_operation" :clearable="true"
                            :options="startCompanyStore.countries" />
                        <small class=" text-danger">{{ form.errors.customer_location_operation }}</small>
                    </div>

                </div>
            </section>

            <section class="section">
                <div class="fw-bold">List of countries <span class="text-danger"> * </span></div>
                <div>List all additional countries where your company will have business activities or customer
                    interactions.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-12">
                        <v-select :class="{ 'error-field': form.errors.country }" :multiple="true"
                            v-model="form.country" :clearable="true" :options="startCompanyStore.countries" />
                        <small class=" text-danger">{{ form.errors.country }}</small>
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

        <!-- <template #info>
            <section class="section">
                <div class="fw-bold">
                    What are the basic requirements to be a founder?
                </div>
                <div>

                    A founder must be at least 18 years old.
                    There is no residency requirement to be
                    a founder, and our form allows for up to
                    6 founders to be registered.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    Yes, amendments to founder details can
                    be made post-incorporation.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    No, you must provide a physical
                    residential address as it is mandatory.
                </div>
            </section>
        </template> -->


    </StartCompany_template>
</template>
<script lang="ts" setup>
import { computed, onMounted, watch, watchEffect } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';

import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { activitiesForm } from './formsStore/Activities'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()
const form = activitiesForm()

onMounted(() => {
    form.updateFields(startCompanyStore.companyInProgress)
})

watch(() => form, () => { form.saveToLocalStorage() }, { deep: true })


function moveBack() {
    startCompanyStore.switchStage('-')
}

onMounted(() => {
    watchEffect(() => {

        if (form.customer_location_operation && form.customer_location_operation.length < 1) {
            form.errors.customer_location_operation = 'Please select an option'
        }

        if (form.country && form.country.length < 1) {
            form.errors.country = 'Please select an option'
        }
    })
})



const saveAndContinue = form.handleSubmit(async (values) => {

    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if (Object.keys(form.errors).length > 0) {
        toast.default("Some fields still have errors", { position: 'top-right' });
        return true;
    }



    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    formData.append('description', values.description)
    formData.append('activity_level', values.activity_level)
    formData.append('activity_nature', values.activity_nature)
    formData.append('customer_location_operation', values.customer_location_operation.toString())
    formData.append('country', values.country.toString())

    form.isSaving = true
    saveFromToApi(formData)
})

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyActivity(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()
    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
        // console.log(error);

    }
}


// counting characters
const maxCharCount = 150
const wordCount = computed(() => {
    return form?.description?.length ?? 0;
});


</script>
<style lang="css" scoped></style>
