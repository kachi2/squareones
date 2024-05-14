<template>


    <div>

        <section class="section">
            <div class="fw-bold fs-5">About your Company </div>
            <div class="fw-bolder">Your company name</div>
            <span>Enter your legal company name</span>
            <div class="row mt-1 g-2">
                <div class="col-12 ">
                    <input :class="{ 'error-field': form.errors.company_name }" v-maska data-maska=""
                        data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]" v-model="form.company_name"
                        type="text" class="form-control" placeholder="English Name..">
                    <small class=" text-danger">{{ form.errors.company_name }}</small>
                </div>

                <div class="col-12 ">
                    <input :class="{ 'error-field': form.errors.chn_company_name }" v-model="form.chn_company_name"
                        type="text" class="form-control" placeholder="Chinese Name..">
                    <small class=" text-danger">{{ form.errors.chn_company_name }}</small>
                </div>
            </div>
        </section>


        <section class="row g-2 section">
            <div class="col-md-6">
                <label class="form-label fw-bold">Date of Incorporation <span class="text-danger"> * </span> </label>
                <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false" :max-date="new Date()"
                    :enable-time-picker="false" auto-apply v-model="form.date_incorporated">
                </VueDatePicker>
            </div>

            <div class="col-md-6">
                <label class="form-label fw-bold">Company Registration Number <span class="text-danger"> *
                    </span></label>
                <input :class="{ 'error-field': form.errors.registeration_no }" v-model="form.registeration_no"
                    class="form-control" type="text" placeholder="Registration no">
                <small class=" text-danger">{{ form.errors.registeration_no }}</small>
            </div>
            <div class="col-md-12">
                    <label class="form-label">Country Registered <small class=" text-danger">*</small></label>
                    <v-select :class="{ 'error-field': form.errors.country_registered }" placeholder="select country.."
                        v-model="form.country_registered" :clearable="false" :options="startCompanyStore.countries" />
                    <small class=" text-danger">{{ form.errors.country_registered }}</small>
                </div>
            <div class="col-12">
                <label class="form-label fw-bold">Business nature <span class="text-danger"> * </span></label>
                <v-select :class="{ 'error-field': form.errors.business_nature_id }" v-model="form.business_nature_id"
                    :clearable="true" :options="startCompanyStore.businessNatures" :reduce="(item: any) => item.id"
                    label="name" />
                <small class=" text-danger">{{ form.errors.business_nature_id }}</small>
            </div>
        </section>

        <section class="section">
            <div class="fw-bolder">Address </div>

            <div class="row g-3 mt-1">
                <div class="col-12">
                    <label class="form-label">Floor／Block <small class=" text-danger">*</small> </label>
                    <input :class="{ 'error-field': form.errors.flat }" v-model="form.flat" class="form-control"
                        type="text" placeholder="Flat／Floor／Block">
                    <small class=" text-danger">{{ form.errors.flat }}</small>
                </div>
                <div class="col-12">
                    <label class="form-label"> Building <small class=" text-danger">*</small></label>
                    <input :class="{ 'error-field': form.errors.building }" v-model="form.building" class="form-control"
                        type="text" placeholder="building number">
                    <small class=" text-danger">{{ form.errors.building }}</small>
                </div>
                <div class="col-12">
                    <label class="form-label"> Street／Estate／Lot／Village <small class=" text-danger">*</small></label>

                    <input :class="{ 'error-field': form.errors.street }" v-model="form.street" class="form-control"
                        type="text" placeholder="Street">
                    <small class=" text-danger">{{ form.errors.street }}</small>
                </div>
                <div class="col-12">
                    <label class="form-label"> District／City／ Province／State／ Postal Code <small
                            class=" text-danger">*</small></label>
                    <input :class="{ 'error-field': form.errors.state }" v-model="form.state" class="form-control"
                        type="text" placeholder="State/City">
                    <small class=" text-danger">{{ form.errors.state }}</small>
                </div>
                <!-- <div class="col-12" hidden>
                        <label class="form-label">Postal Code: <i class="bi bi-lock-fill"></i></label>
                        <input v-model="form.city" :value="city" class="form-control" type="text"
                            placeholder=" ">
                        <small class=" text-danger">{{ form.errors.city }}</small>
                    </div> -->
                <div class="col-md-12">
                    <label class="form-label">Country／Region <small class=" text-danger">*</small></label>
                    <v-select :class="{ 'error-field': form.errors.country }" placeholder="select country.."
                        v-model="form.country" :clearable="false" :options="startCompanyStore.countries" />
                    <small class=" text-danger">{{ form.errors.country }}</small>
                </div>
            </div>
        </section>

        <section class="row g-2 section">
            <div class="col-md-12">
                <label class=" fw-bolder">Authorised Person <span class="text-danger"> * </span></label>
                <div class="row g-2">
                    <div class="col-md-6">
                        <input :class="{ 'error-field': form.errors.first_name }" v-maska data-maska="Aa"
                            data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple" v-model="form.first_name"
                            type="text" class="form-control" placeholder="first name..">
                        <small class=" text-danger">{{ form.errors.first_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <input :class="{ 'error-field': form.errors.last_name }" v-maska data-maska="Aa"
                            data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple" v-model="form.last_name"
                            type="text" class="form-control" placeholder="first name..">
                        <small class=" text-danger">{{ form.errors.last_name }}</small>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <label class=" fw-bolder">Phone number <span class="text-danger"> * </span></label>
                <vue-tel-input :inputOptions="phoneField.input" :dropdownOptions="phoneField.dropDown"
                    :autoFormat="true"  v-model="form.phone"></vue-tel-input>
                <small class=" text-danger">{{ form.errors.phone }}</small>
                <!-- <div class="input-group">
                    
                    <input v-maska data-maska="99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed
                        v-model="form.phone" type="text" class="form-control" placeholder="phone number">
                    <small class=" text-danger">{{ form.errors.phone }}</small>
                </div> -->
            </div>
            <div class="col-md-12">
                <label class=" fw-bolder">Email <span class="text-danger"> * </span></label>
                <input :class="{ 'error-field': form.errors.email }" v-model="form.email" v-bind="form.emailAttrs"
                    type="text" class="form-control" placeholder="email">
                <small class=" text-danger">{{ form.errors.email }}</small>
            </div>
            <div class="col-md-12">
                <label class=" fw-bolder">Confirm email <span class="text-danger"> * </span></label>
                <input :class="{ 'error-field': form.errors.confirm_email }" v-model="form.confirm_email" type="text"
                    class="form-control" placeholder="confirm email">
                <small class=" text-danger">{{ form.errors.confirm_email }}</small>
                <small v-if="emailMatchError" class=" text-danger">emails do no match</small>
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
                <i class="bi bi-arrow-left"></i> Close
            </button>
            <button v-if="!form.isSaving" @click="saveAndContinue" class="btn btn-primary">
                Save and Continue <i class="bi bi-check2"></i>
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
import { onMounted, ref, watch, watchEffect, reactive } from 'vue';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form: any = foundersCorporateForm()


onMounted(() => {
    form.updateFields(startCompanyStore.companyInProgress)
})

watch(() => form, () => { form.saveToLocalStorage() }, { deep: true })


const emailMatchError = ref(false)
watchEffect(() => {
    if (form.email && form.confirm_email) {
        if ((form.email !== form.confirm_email) && !form.errors.confirm_email)
            emailMatchError.value = true
        else
            emailMatchError.value = false
    }
})



function resetForm() {
    form.company_name = ''
    form.chn_company_name = ''
    form.date_incorporated = new Date()
    form.flat = ''
    form.building = ''
    form.street = ''
    form.state = ''
    form.country = 'Hong Kong'

    // form.postal_code = ''
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

const phoneField = {
    dropDown: {
        showDialCodeInSelection: false,
        showFlags: true,
        showSearchBox: true,
        showDialCodeInList: true,

    },
    input: {
        showDialCode: true,
        placeholder: 'Enter phone',
        styleClasses: 'phone-input-profile',
        maxlength:12
    }

}
watchEffect(()=>{
    if(form.chn_company_name == ''){
        form.errors.chn_company_name  = ''
        delete form.errors.chn_company_name
    }
})


function moveBack() {
    // startCompanyStore.switchStage('-')
    startCompanyStore.isShowingFoundersForm = false
}

function saveAndContinue() {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.error('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if(form.phone.length < 12){
        toast.error("Error on the phone input", { position: 'top-right' });
        return;
       
    }
    if (Object.keys(form.errors).length > 0) {
        // console.log(form.errors)
        toast.error("Some fields still have errors", { position: 'top-right' });
        return;
    }

    if (!form.first_name || !form.last_name || !form.phone || !form.email || !form.date_incorporated || !form.company_name
        || !form.chn_company_name || !form.business_nature_id || !form.country_registered
        || !form.registeration_no) {
        toast.default('Please complete fields', { position: 'top-right' })
        return;
    }



    if (!form.flat || !form.street || !form.city || !form.country || !form.building) {
        toast.default('Please complete fields', { position: 'top-right' })
        return;
    }

    if (!useFxn.isEmail(form.email)) {
        toast.default('Invalid email format', { position: 'top-right' })
        return;
    }


    if (form.email !== form.confirm_email) {
        toast.default('Emails do not macth!', { position: 'top-right' })
        return;
    }

    if (startCompanyStore.checkedEntityCapacity.length == 0) {
        toast.default('Select at least a Capacity!', { position: 'top-right' })
        return;
    }


    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    if (startCompanyStore.idToEdit){
        formData.append('company_entity_id', startCompanyStore.idToEdit)
    }
    formData.append('entity_capacity_id', JSON.stringify(startCompanyStore.checkedEntityCapacity))
    formData.append('entity_type_id', form.entity_type_id)
    formData.append('first_name', form.first_name)
    formData.append('last_name', form.last_name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('company_name', form.company_name)
    formData.append('chn_company_name', form.chn_company_name)
    //@ts-ignore
    formData.append('date_incorporated', form.date_incorporated)
    formData.append('flat', form.flat)
    formData.append('building', form.building)
    formData.append('street', form.street)
    formData.append('state', form.state)
    formData.append('country', form.country)
    // formData.append('postal_code', form.postal_code)
    formData.append('registeration_no', form.registeration_no)
    formData.append('country_registered', form.country_registered)
    formData.append('business_nature_id', form.business_nature_id)

    formData.append('is_founder', form.is_founder ? '1' : '0')

    form.isSaving = true
    saveFromToApi(formData)
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyEntity(formData)
        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.getCompanyInProgress('founder')
        startCompanyStore.isShowingFoundersForm = false
        form.clearLocalStorage()
        form.clearLocalStorage()
        // resetForm()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });

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
