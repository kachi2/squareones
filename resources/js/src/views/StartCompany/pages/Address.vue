<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Registered Address</div>
            </section>

            <section class="section">
                <!-- <div class="fw-bold">Registered Office Address</div> -->

                <div class="row g-3 mt-1">
                    <div class="col-12">
                        <div class="form-floating-custom ">
                            <!-- <label class="form-label"> </label> -->
                            <input disabled v-model="form.flat" class="form-control" type="text"
                                placeholder="Flat／Floor／Block" id="address">
                            <small class=" text-danger">{{ form.errors.flat }}</small>
                            <label for="address"> Floor／Block <i class="bi bi-lock-fill"></i> </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating-custom ">

                            <input disabled v-model="form.building" class="form-control" type="text" placeholder=""
                                id="building">
                            <small class=" text-danger">{{ form.errors.building }}</small>
                            <label class="form-label" for="building"> Building<i class="bi bi-lock-fill"></i></label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating-custom ">

                            <input disabled v-model="form.street" id="street" class="form-control" type="text"
                                placeholder="City">
                            <small class=" text-danger">{{ form.errors.street }}</small>
                            <label class="form-label" for="street"> Street／Estate／Lot／Village<i
                                    class="bi bi-lock-fill"></i></label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating-custom ">

                            <input disabled v-model="form.state" class="form-control" type="text" id="city"
                                placeholder="State">
                            <small class=" text-danger">{{ form.errors.state }}</small>
                            <label class="form-label" for="city"> District／City／ Province／State／ Postal Code <i
                                    class="bi bi-lock-fill"></i></label>
                        </div>
                    </div>

                    <!-- <div class="col-12">
                        <label class="form-label">Postal Code: <i class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.postal_code" class="form-control" type="text"
                            placeholder=" ">
                        <small class=" text-danger">{{ form.errors.postal_code }}</small>
                    </div> -->

                    <div class="col-md-12">
                        <div class="form-floating-custom">
                            <select disabled class="form-select" v-model="form.country">
                                <option selected value="Hong Kong">Hong Kong</option>
                            </select>
                            <label class=" ">Country Registered <i class="bi bi-lock-fill"></i></label>
                            <small class=" text-danger">{{ form.errors.country }}</small>
                        </div>
                    </div>
                </div>
            </section>



            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-info me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button v-if="!form.isSaving" @click="saveAndContinues" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>
                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Saving, Please wait
                </button>
            </div>

        </template>

        <template #info>
            <section class="section">
                <div class="fw-bold">
                    What is registered office address?
                </div>
                <div>

                    A registered office address is the official legal address of a company where formal communications
                    and notices are sent.
                </div>
            </section>
            <section class="section">
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
// import { onMounted } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { addressForm } from './formsStore/Address'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = addressForm()

// onMounted(() => {
// form.address = startCompanyStore.companyInProgress?.address ?? ''
// form.street_no = startCompanyStore.companyInProgress?.street_no ?? ''
// form.city = startCompanyStore.companyInProgress?.city ?? ''
// form.state = startCompanyStore.companyInProgress?.state ?? ''
// form.postal_code = startCompanyStore.companyInProgress?.postal_code ?? ''
// form.country = startCompanyStore.companyInProgress?.country ?? ''
// })

function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinues() {
    form.isSaving = true
    saveFromToApi()

}
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
    formData.append('flat', values.flat)
    formData.append('building', values.building)
    formData.append('street', values.street)
    formData.append('city', values.city)
    formData.append('state', values.state)
    formData.append('postal_code', values.postal_code)
    formData.append('country', values.country)
    formData.append('company_id', startCompanyStore.companyInProgress.id)

    form.isSaving = true
    // saveFromToApi(formData)
})

async function saveFromToApi() {
    try {
        const formData = new FormData;
        formData.append('company_id', startCompanyStore.companyInProgress.id)
        await api.companyAddress(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
    }
}

</script>
<style lang="css" scoped></style>
