<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Activities</div>
                <span>Detail your company's primary business operations below.</span>
            </section>

            <section>
                <div class="fw-bold">Describe your expected business activities</div>
                <div>Provide a brief but clear description of your anticipated business activities.
                    Be as specific as possible to ensure accurate representation in your business
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <textarea v-model="form.description" class="form-control" rows="5"></textarea>
                        <small class="float-end">No minimum character required</small>
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bold">Level of activity</div>
                <div>Select the volume and frequency of transactions your business expects to handle.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <v-select v-model="form.activity_level" :clearable="false"
                            :options="startCompanyStore.levelOfActivity" />

                    </div>

                </div>
            </section>

            <section>
                <div class="fw-bold">Nature of activity</div>
                <div>Choose the main industry or sector that best represents your business operations.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <v-select v-model="form.activity_nature" :clearable="false"
                            :options="startCompanyStore.natureOfActivity" />

                    </div>

                </div>
            </section>

            <section>
                <div class="fw-bold">Customer location and operation</div>
                <div>Indicate the primary countries where your company will actively conduct business or serve
                    customers.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <v-select :multiple="true" v-model="form.customer_location_operation" :clearable="false"
                            :options="startCompanyStore.countries" />
                    </div>

                </div>
            </section>

            <section>
                <div class="fw-bold">List of countries</div>
                <div>List all additional countries where your company will have business activities or customer
                    interactions.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <v-select :multiple="true" v-model="form.country" :clearable="false"
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

        <!-- <template #info>
            <section>
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
            <section>
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    Yes, amendments to founder details can
                    be made post-incorporation.
                </div>
            </section>
            <section>
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
import { reactive, ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';

import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = reactive({
    description: '',
    activity_level: '',
    activity_nature: '',
    customer_location_operation: '',
    country: '',
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

    if (!form.description || !form.activity_level || !form.activity_nature || !form.customer_location_operation
        || !form.country) {
        toast.default('Please complete fields', { position: 'top-right' })
        return;
    }

    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    formData.append('description', form.description)
    formData.append('activity_level', form.activity_level)
    formData.append('activity_nature', form.activity_nature)
    formData.append('customer_location_operation', form.customer_location_operation.toString())
    formData.append('country', form.country.toString())

    form.isSaving = true
    saveFromToApi(formData)
}

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
        console.log(error);

    }
}



</script>
<style lang="css" scoped></style>
