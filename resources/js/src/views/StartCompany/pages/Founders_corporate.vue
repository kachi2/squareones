<template>


    <div>

        <section class="section">
            <div class="fw-bold fs-5">About your Company </div>
            <div class="fw-bolder">Your company name</div>
            <span>Enter your legal company name</span>
            <div class="row mt-1 g-2">
                <div class="col-12 ">
                    <input v-maska data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                        v-model="form.company_name" type="text" class="form-control" placeholder="English Name..">
                    <small class=" text-danger">{{ form.errors.company_name }}</small>
                </div>

                <div class="col-12 ">
                    <input v-model="form.chn_company_name" type="text" class="form-control"
                        placeholder="Chinese Name..">
                    <small class=" text-danger">{{ form.errors.chn_company_name }}</small>
                </div>
            </div>
        </section>


        <section class="row g-2 section">
            <div class="col-md-6">
                <label class="form-label fw-bold">Date of incorporation </label>
                <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false" :max-date="new Date()"
                    :enable-time-picker="false" auto-apply v-model="form.date_incorporated">
                </VueDatePicker>
            </div>

            <div class="col-md-6">
                <label class="form-label fw-bold">Company registration number</label>
                <input v-model="form.registeration_no" class="form-control" type="text" placeholder="registration no">
                <small class=" text-danger">{{ form.errors.registeration_no }}</small>
            </div>
            <div class="col-12">
                <label class="form-label fw-bold">Business nature</label>
                <v-select v-model="form.business_nature_id" :clearable="false"
                    :options="startCompanyStore.businessNatures" :reduce="(item: any) => item.id" label="name" />
                <small class=" text-danger">{{ form.errors.business_nature_id }}</small>
            </div>
        </section>

        <section class="section">
            <div class="fw-bolder">Address </div>
            <div class="row g-2 mt-1">
                <div class="col-12">
                    <input v-model="form.address" class="form-control" type="text" placeholder="Flat／Floor／Block">
                    <small class=" text-danger">{{ form.errors.address }}</small>
                </div>
                <div class="col-12">
                    <input v-model="form.street_no" class="form-control" type="text" placeholder="Street number">
                    <small class=" text-danger">{{ form.errors.street_no }}</small>
                </div>
                <div class="col-12">
                    <input v-model="form.city" class="form-control" type="text" placeholder="City">
                    <small class=" text-danger">{{ form.errors.city }}</small>
                </div>
                <div class="col-12">
                    <input v-model="form.state" class="form-control" type="text" placeholder="State">
                    <small class=" text-danger">{{ form.errors.state }}</small>
                </div>
                <div class="col-12">
                    <input v-model="form.postal_code" class="form-control" type="text" placeholder="Postal Code">
                    <small class=" text-danger">{{ form.errors.postal_code }}</small>
                </div>
                <div class="col-md-12">
                    <!-- <select class="form-select" v-model="form.country"> -->
                    <v-select placeholder="select country.." v-model="form.country" :clearable="false"
                        :options="startCompanyStore.countries" />
                    <!-- <option selected value="Hong Kong">Hong Kong</option> -->
                    <!-- </select> -->
                </div>
            </div>
        </section>

        <section class="row g-2 section">
            <div class="col-md-10">
                <label class=" fw-bolder">Authorised Person</label>
                <div class="row g-2">
                    <div class="col-md-6">
                        <input v-model="form.first_name" type="text" class="form-control" placeholder="first name..">
                        <small class=" text-danger">{{ form.errors.first_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <input v-model="form.last_name" type="text" class="form-control" placeholder="first name..">
                        <small class=" text-danger">{{ form.errors.last_name }}</small>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <label class=" fw-bolder">Phone number</label>
                <input v-maska data-maska="99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed
                    v-model="form.phone" type="text" class="form-control" placeholder="phone number">
                <small class=" text-danger">{{ form.errors.phone }}</small>
            </div>
            <div class="col-md-8">
                <label class=" fw-bolder">Email</label>
                <input v-model="form.email" v-bind="form.emailAttrs" type="text" class="form-control"
                    placeholder="email">
                <small class=" text-danger">{{ form.errors.email }}</small>
            </div>
            <div class="col-md-8">
                <label class=" fw-bolder">Confirm email</label>
                <input v-model="form.confirm_email" type="text" class="form-control" placeholder="confirm email">
                <small class=" text-danger">{{ form.errors.confirm_email }}</small>
            </div>

            <!-- <div class="col-md-8 mt-4">
                <div class="form-check">
                    <input v-model="form.is_founder" class="form-check-input" type="checkbox" value=""
                        id="is_founder" />
                    <label class="form-check-label" for="is_founder"> This person is a Founder? </label>
                </div>
            </div> -->

        </section>
        <div class="movement-buttons mt-5 mb-4">
            <button @click="moveBack" class="btn btn-outline-dark me-3">
                <i class="bi bi-arrow-left"></i> Back
            </button>
            <button v-if="!form.isSaving" @click="saveAndContinue" class="btn btn-primary">
                Save Record <i class="bi bi-check2"></i>
            </button>
            <button v-else class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving, Please wait
            </button>
        </div>

    </div>

</template>
<script lang="ts" setup>
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import useFxn from '@/stores/Helpers/useFunctions';
import { foundersCorporateForm } from './formsStore/Founders_corporate'
import { vMaska } from "maska"

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form: any = foundersCorporateForm()

function resetForm() {
    form.company_name = ''
    form.chn_company_name = ''
    form.date_incorporated = new Date()
    form.address = ''
    form.street_no = ''
    form.state = ''
    form.city = ''
    form.country = 'Hong Kong'

    form.postal_code = ''
    form.registeration_no = ''
    form.is_founder = false
    form.country_registered = 'Hong Kong'

    form.business_nature_id = ''
    form.phone = ''
    form.email = ''
    form.confirm_email = ''
    form.first_name = ''
    form.last_name = ''

    startCompanyStore.checkedEntityCapacity = []
}

function moveBack() {
    startCompanyStore.switchStage('-')
}

const saveAndContinue = form.handleSubmit(async (values: any) => {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    // if (!form.first_name || !form.last_name || !form.phone || !form.email || !form.date_incorporated || !form.company_name
    //     || !form.chn_company_name || !form.business_nature_id || !form.country_registered
    //     || !form.registeration_no) {
    //     toast.default('Please complete fields', { position: 'top-right' })
    //     return;
    // }



    // if (!form.address || !form.street_no || !form.city || !form.state || !form.postal_code) {
    //     toast.default('Please complete fields', { position: 'top-right' })
    //     return;
    // }

    if (!useFxn.isEmail(values.email)) {
        toast.default('Invalid email format', { position: 'top-right' })
        return;
    }


    if (values.email !== values.confirm_email) {
        toast.default('Emails do not macth!', { position: 'top-right' })
        return;
    }

    if (startCompanyStore.checkedEntityCapacity.length == 0) {
        toast.default('Select at least a Capacity!', { position: 'top-right' })
        return;
    }


    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    formData.append('entity_capacity_id', JSON.stringify(startCompanyStore.checkedEntityCapacity))
    formData.append('entity_type_id', values.entity_type_id)
    formData.append('first_name', values.first_name)
    formData.append('last_name', values.last_name)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('company_name', values.company_name)
    formData.append('chn_company_name', values.chn_company_name)
    //@ts-ignore
    formData.append('date_incorporated', values.date_incorporated)
    formData.append('address', values.address)
    formData.append('street_no', values.street_no)
    formData.append('city', values.city)
    formData.append('state', values.state)
    formData.append('country', values.country)
    formData.append('postal_code', values.postal_code)
    formData.append('registeration_no', values.registeration_no)
    formData.append('country_registered', values.country_registered)
    formData.append('business_nature_id', values.business_nature_id)

    formData.append('is_founder', values.is_founder ? '1' : '0')

    form.isSaving = true
    saveFromToApi(formData)
})

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyEntity(formData)
        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.getCompanyInProgress('founder')
        startCompanyStore.isShowingFoundersForm = false
        resetForm()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        console.log(error);
        form.isSaving = false

    }
}

// function queryNewAction() {
//     useFxn.confirmTwoOptions('Do you want to add a new founder?', 'Add New', 'Go to next phase')
//         .then((resp) => {
//             if (resp.isConfirmed) {
//                 window.scrollTo(0, 0)
//             }
//             else if (resp.isDenied) {
//                 startCompanyStore.switchStage('+')
//             }
//         })
// }

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
