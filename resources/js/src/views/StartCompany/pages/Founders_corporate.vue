<template>


    <div>

        <section class="section">
            <div class="fw-bold fs-5">About your Company </div>
            <div class="fw-bolder">Your company name</div>
            <span>Enter your legal company name</span>
            <div class="row mt-1 g-3">
                <div class="col-12 ">
                    <div class="form-floating-custom ">
                        <input v-bind="form.company_nameAttr" :class="{ 'error-field': form.errors.company_name }"
                            v-maska data-maska="" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]"
                            v-model="form.company_name" type="text" class="form-control" placeholder="" id="eng_name">
                        <label class="" for="eng_name">Company Name <span class="text-danger"> *
                            </span></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.company_name }}</small>
                </div>

                <div class="col-12 ">
                    <div class="form-floating-custom ">
                        <input v-bind="form.chn_company_nameAttr"
                            :class="{ 'error-field': form.errors.chn_company_name }" v-model="form.chn_company_name"
                            type="text" class="form-control" placeholder="" id="chn_name">
                        <label class="" for="chn_name">Company Chinese Name <span class="text-danger"> *
                            </span></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.chn_company_name }}</small>
                </div>
            </div>
        </section>


        <section class="row g-3 section">
            <div class="col-md-6">
                <div class="fixed-label-custom">
                    <VueDatePicker v-bind="form.date_incorporatedAttr" :max-date="new Date()"
                        :format="useFxn.dateDisplay" hide-input-icon :clearable="false" :enable-time-picker="false"
                        auto-apply v-model="form.date_incorporated" id="Incorporation-label" :class="{ 'error-field': form.errors.date_incorporated }">
                    </VueDatePicker>
                    <label for="Incorporation-label">Date of Incorporation <span class="text-danger"> * </span></label>
                </div>
                <small class=" text-danger">{{ form.errors.date_incorporated }}</small>
            </div>

            <div class="col-md-6">
                <div class="form-floating-custom ">
                    <input v-bind="form.registeration_noAttr" :class="{ 'error-field': form.errors.registeration_no }"
                        v-model="form.registeration_no" class="form-control" type="text" placeholder=""
                        id="registeration_no">
                    <label class="">Company Registration Number <span class="text-danger"> *
                        </span></label>
                </div>
                <small class=" text-danger">{{ form.errors.registeration_no }}</small>
            </div>
            <div class="col-md-12">
                <div class="fixed-label-custom">
                    <v-select  append-to-body :calculate-position="useFxn.vueSelectPositionCalc" id="country_registered" @search:blur="form.validateVueSelectOnBlur('country_registered')"
                        v-bind="form.country_registeredAttr" :class="{ 'error-field': form.errors.country_registered }"
                        placeholder="select country.." v-model="form.country_registered" :clearable="false"
                        :options="startCompanyStore.countries" />
                    <label for="country_registered">Country Registered <small class=" text-danger">*</small></label>

                </div>
                <small class=" text-danger">{{ form.errors.country_registered }}</small>

            </div>
            <div class="col-12">
                <div class="fixed-label-custom">
                    <v-select append-to-body :calculate-position="useFxn.vueSelectPositionCalc"  id="business_nature_id" @search:blur="form.validateVueSelectOnBlur('business_nature_id')"
                        v-bind="form.business_nature_idAttr" :class="{ 'error-field': form.errors.business_nature_id }"
                        v-model="form.business_nature_id" :clearable="true" placeholder="select business nature"
                        :options="startCompanyStore.businessNatures" :reduce="(item: any) => item.id" label="name" />

                    <label for="business_nature_id">Business Nature <span class="text-danger"> * </span></label>
                </div>

                <small class=" text-danger">{{ form.errors.business_nature_id }}</small>
            </div>
        </section>

        <section class="section">
            <div class="fw-bolder">Address </div>

            <div class="row g-3 mt-1">
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.flatAttr" :class="{ 'error-field': form.errors.flat }" v-model="form.flat"
                            class="form-control" type="text" placeholder="" id="blcks">
                        <label class="form-label" for="blcks">Floor／Block <small class=" text-danger">*</small> </label>
                    </div>
                    <small class=" text-danger">{{ form.errors.flat }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.buildingAttr" :class="{ 'error-field': form.errors.building }"
                            v-model="form.building" class="form-control" type="text" placeholder="" id="buildingss">
                        <label class="form-label" for="buildingss"> Building <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.building }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.streetAttr" :class="{ 'error-field': form.errors.street }"
                            v-model="form.street" class="form-control" type="text" placeholder="" id="streets">
                        <label class="form-label" for="streets"> Street／Estate／Lot／Village <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.street }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.stateAttr" :class="{ 'error-field': form.errors.state }"
                            v-model="form.state" class="form-control" type="text" placeholder="" id="province">
                        <label class="form-label" for="province"> District／City／ Province／State／ Postal Code <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.state }}</small>
                </div>
                <!-- <div class="col-12" hidden>
                <label class="form-label">Postal Code: <i class="bi bi-lock-fill"></i></label>
                <input v-model="form.city" :value="city" class="form-control" type="text"
                    placeholder=" ">
                <small class=" text-danger">{{ form.errors.city }}</small>
            </div> -->
                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select  append-to-body :calculate-position="useFxn.vueSelectPositionCalc"  id="country" @search:blur="form.validateVueSelectOnBlur('country')"
                            v-bind="form.countryAttr" :class="{ 'error-field': form.errors.country }"
                            placeholder="select country.." v-model="form.country" :clearable="false"
                            :options="startCompanyStore.countries" />
                        <label for="country">Country／Region <small class=" text-danger">*</small></label>
                    </div>

                    <small class=" text-danger">{{ form.errors.country }}</small>
                </div>
            </div>
        </section>

        <section class="row g-3 section">
            <div class="col-md-12">
                <label class=" fw-bolder mb-3">Authorised Person <span class="text-danger"> * </span></label>
                <div class="row g-2">
                    <div class="col-md-6">
                        <div class="form-floating-custom ">
                            <input v-bind="form.first_nameAttr" :class="{ 'error-field': form.errors.first_name }"
                                v-maska data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                                v-model="form.first_name" type="text" class="form-control" placeholder=""
                                id="auth_first_name">
                            <label class="form-label" for="auth_first_name"> First Name <small
                                    class=" text-danger">*</small></label>
                        </div>
                        <small class=" text-danger">{{ form.errors.first_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom ">
                            <input v-bind="form.last_nameAttr" :class="{ 'error-field': form.errors.last_name }" v-maska
                                data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                                v-model="form.last_name" type="text" class="form-control" placeholder=""
                                id="auth_last_name">
                            <label class="form-label" for="auth_last_name"> Last Name <small
                                    class=" text-danger">*</small></label>
                        </div>
                        <small class=" text-danger">{{ form.errors.last_name }}</small>
                    </div>
                </div>
            </div>
            <div class="col-md-12">

                <div class="fixed-label-custom" >
                    <vue-tel-input :class="{ 'error-field': form.errors.phone }" id="phone" v-bind="form.phoneAttr"
                        :inputOptions="phoneField.input" :dropdownOptions="phoneField.dropDown" :autoFormat="true"
                        v-model="form.phone" required></vue-tel-input>
                    <label for="phone">Phone Number <span class="text-danger"> * </span></label>
                </div>
                <small class=" text-danger">{{ form.errors.phone }}</small>
                <!-- <div class="input-group">
            
            <input v-maska data-maska="99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed
                v-model="form.phone" type="text" class="form-control" placeholder="phone number">
            <small class=" text-danger">{{ form.errors.phone }}</small>
        </div> -->
            </div>
            <div class="col-md-12">
                <div class="form-floating-custom ">
                    <input v-bind="form.emailAttr" :class="{ 'error-field': form.errors.email }" v-model="form.email"
                        type="text" class="form-control" placeholder="" id="emails">
                    <label class="form-label" for="emails"> Email <small class=" text-danger">*</small></label>
                </div>
                <small class=" text-danger">{{ form.errors.email }}</small>
            </div>
            <div class="col-md-12">
                <div class="form-floating-custom ">
                    <input v-bind="form.confirm_emailAttr" :class="{ 'error-field': form.errors.confirm_email }"
                        v-model="form.confirm_email" type="text" class="form-control" placeholder=" " id="confirm">
                    <label class=" " for="confirm">Confirm Email <span class="text-danger"> * </span></label>
                </div>
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
            <button @click="moveBack" class="btn btn-outline-info me-3">
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

const form = foundersCorporateForm()


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
    form.country = ''

    // form.postal_code = ''
    form.registeration_no = ''
    form.is_founder = false
    form.country_registered = ''

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
        showDialCodeInSelection: true,
        showFlags: true,
        showSearchBox: true,
        showDialCodeInList: false,

    },
    input: {
        showDialCode: false,
        placeholder: ' Phone Number',
        styleClasses: 'phone-input-profile',
        maxlength: 21,
        required:true
    }
}
watchEffect(() => {
    if (form.chn_company_name == '') {
        form.errors.chn_company_name = ''
        delete form.errors.chn_company_name
    }
})


function moveBack() {
    resetForm()
    form.clearLocalStorage()
    startCompanyStore.isShowingFoundersForm = false
    startCompanyStore.idToEdit = ''
}

const saveAndContinue = form.handleSubmit((values: any) => {
    // function saveAndContinue() {
    console.log('validation passed..');

    if (!startCompanyStore.companyInProgress?.id) {
        toast.error('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if (form.phone.length < 12) {
        toast.error("Error on the phone input <br> must be 12 digits and above", { position: 'top-right' });
        return;

    }
    if (Object.keys(form.errors).length > 0) {
        console.log(form.errors)
        toast.error("Some fields still have errors", { position: 'top-right' });
        return;
    }

    if (!form.first_name || !form.last_name || !form.phone || !form.email || !form.date_incorporated
        || !form.business_nature_id || !form.country_registered
        || !form.registeration_no) {
        toast.error('Some fields still have errors', { position: 'top-right' })
        return;
    }



    // if (!form.flat || !form.street || !form.city || !form.country || !form.building) {
    //     toast.default('Please complete fields', { position: 'top-right' })
    //     return;
    // }

    if (!useFxn.isEmail(form.email)) {
        toast.default('Invalid email format', { position: 'top-right' })
        return;
    }


    if (form.email !== form.confirm_email) {
        toast.default('Emails do not match!', { position: 'top-right' })
        return;
    }

    if (startCompanyStore.checkedEntityCapacity.length == 0) {
        toast.default('Select at least a Capacity!', { position: 'top-right' })
        return;
    }


    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    if (startCompanyStore.idToEdit) {
        formData.append('company_entity_id', startCompanyStore.idToEdit)
    }
    formData.append('entity_capacity_id', JSON.stringify(startCompanyStore.checkedEntityCapacity))
    formData.append('entity_type_id', '2')
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
    // }
});

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyEntity(formData)
        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.getCompanyInProgress('founder')
        startCompanyStore.isShowingFoundersForm = false
        form.clearLocalStorage()
        form.clearLocalStorage()
        startCompanyStore.checkedEntityCapacity = []
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
