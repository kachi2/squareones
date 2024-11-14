<template>
    <div>
        <section class="section">
            <div class="fw-bold fs-5">About you </div>
            <div class="fw-bolder">Your Name in English <small class="text-danger">*</small></div>
            <span>Enter your first and last name as they appear on a government ID</span>
            <div class="row mt-1 g-3">
                <div class="col-12 ">
                    <div class="form-floating-custom ">
                        <input v-bind="form.first_nameAttr" :class="{ 'error-field': form.errors.first_name }" v-maska
                            data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                            v-model="form.first_name" type="text" class="form-control" placeholder="" id="first_name">
                        <label for="first_name" class="form-labe">First Name </label>
                    </div>
                    <small class=" text-danger">{{ form.errors.first_name }}</small>
                </div>
                <div class="col-12 ">
                    <div class="form-floating-custom ">
                        <input v-bind="form.last_nameAttr" :class="{ 'error-field': form.errors.last_name }" v-maska
                            data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                            v-model="form.last_name" type="text" class="form-control" placeholder="" id="last_name">
                        <label for="last_name">Last Name</label>
                    </div>
                    <small class=" text-danger">{{ form.errors.last_name }}</small>
                </div>
                <div class="col-12 ">
                    <div class="form-check ">
                        <input class="form-check-input exemption" v-model="form.hasChineseName" type="checkbox"
                            id="chinese_name" />
                        <label class="form-check-label" for="chinese_name">Do You have a Chinese Name?</label>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" v-if="form.hasChineseName">
            <div class="fw-bolder">Your Name in Chinese <small class="text-danger">*</small></div>
            <span>Enter your first and last name as they appear on a government ID</span>
            <div class="row mt-1 g-2">
                <div class="col-12 ">
                    <div class="form-floating-custom ">
                        <input v-bind="form.chn_first_nameAttr" :class="{ 'error-field': form.errors.chn_first_name }"
                            v-model="form.chn_first_name" type="text" class="form-control" placeholder=""
                            id="chn_first_name">
                        <label for="chn_first_name">First Name</label>
                    </div>
                    <small class=" text-danger">{{ form.errors.chn_first_name }}</small>
                </div>
                <div class="col-12 ">
                    <div class="form-floating-custom ">
                        <input v-bind="form.chn_last_nameAttr" :class="{ 'error-field': form.errors.chn_last_name }"
                            v-model="form.chn_last_name" type="text" class="form-control" placeholder=""
                            id="chn_last_name">
                        <label for="chn_last_name">Last Name</label>
                    </div>

                    <small class=" text-danger">{{ form.errors.chn_last_name }}</small>
                </div>
            </div>
        </section>

        <section class="row g-3 section">
            <div class="col-md-6">
                <div class="fixed-label-custom">
                    <VueDatePicker id="dob" :start-date="useFxn.yearsAgo(18)" :max-date="new Date()"
                        v-bind="form.dobAttr" :format="useFxn.dateDisplay" input-class-name="dob-settings-input"
                        :class="{ 'error-field': form.errors.dob ?? ageError }" auto-apply hide-input-icon
                        :clearable="false" :enable-time-picker="false" v-model="form.dob">
                    </VueDatePicker>
                    <label for="dob">Date of Birth <small class="text-danger">*</small></label>
                </div>


                <small class=" text-danger">{{ form.errors.dob }}</small>
                <small class=" text-danger">{{ ageError }}</small>
            </div>

            <div class="col-md-6">
                <!-- <select v-model="form.nationality" class="form-select">
                    <option selected value="Hong Kong"> Hong Kong</option>
                </select> -->
                <div class="fixed-label-custom">
                    <v-select append-to-body :calculate-position="useFxn.vueSelectPositionCalc" id="nationality"
                        @search:blur="form.validateVueSelectOnBlur('nationality')" v-bind="form.nationalityAttr"
                        :class="{ 'error-field': form.errors.nationality }" v-model="form.nationality"
                        :clearable="false" :options="startCompanyStore.countries" />
                    <label for="nationality">Nationality <small class="text-danger">*</small></label>
                </div>
                <small class=" text-danger">{{ form.errors.nationality }}</small>
            </div>
        </section>

        <section class="section">
            <div class="fw-bolder">Your Residential Address <small class="text-danger">*</small> </div>
            <div class="row g-3 mt-3">
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <!-- <label class="form-label"> </label> -->
                        <input v-bind="form.flatAttr" :class="{ 'error-field': form.errors.flat }" v-model="form.flat"
                            class="form-control" type="text" placeholder="">
                        <label for="flat">Flat／Floor／Block <small class=" text-danger">*</small> </label>
                    </div>
                    <small class=" text-danger">{{ form.errors.flat }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.buildingAttr" :class="{ 'error-field': form.errors.building }"
                            v-model="form.building" class="form-control" type="text" placeholder="" id="building">
                        <label class="form-label" for="building">Building <small class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.building }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.streetAttr" :class="{ 'error-field': form.errors.street }"
                            v-model="form.street" class="form-control" type="text" placeholder="" id="strees">
                        <label class="form-label" for="streets"> Street／Estate／Lot／Village <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.street }}</small>
                </div>
                <div class="col-12"> 

                    <div class="form-floating-custom ">
                        <input v-bind="form.stateAttr" :class="{ 'error-field': form.errors.state }"
                            v-model="form.state" class="form-control" type="text" placeholder="" id="district">
                        <label class="form-label" for="district">District／City／ Province／State／ Postal Code <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.state }}</small>
                </div>
                <!-- <div class="col-12">
                        <label class="form-label">Postal Code: <i class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.postal_code" class="form-control" type="text"
                            placeholder=" ">
                        <small class=" text-danger">{{ form.errors.postal_code }}</small>
                    </div> -->
                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select append-to-body :calculate-position="useFxn.vueSelectPositionCalc"
                            @search:blur="form.validateVueSelectOnBlur('country')" v-bind="form.countryAttr"
                            :class="{ 'error-field': form.errors.country }" 
                            v-model="form.country" :clearable="false" :options="startCompanyStore.countries" />

                        <label class="form-label"> Country／Region <small class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.country }}</small>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="fw-bolder">Your Corresponding Address </div>
            <span>
                <div class="form-check ">
                    <input class="form-check-input exemption" type="checkbox" id="same_address"
                        v-model="form.correspondingAddressIsSame" />
                    <label class="form-check-label" for="same_address">Same as residential address?</label>
                </div>
            </span>
            <div v-if="!form.correspondingAddressIsSame" class="row g-3 mt-1">
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.flat2Attr" :class="{ 'error-field': form.errors.flat2 }"
                            v-model="form.flat2" class="form-control" type="text" placeholder="" id="block">
                        <label class="form-label" for="block"> Flat／Floor／Block <small class=" text-danger">*</small>
                        </label>
                    </div>
                    <small class=" text-danger">{{ form.errors.flat2 }}</small>
                </div>
                <div class="col-12">

                    <div class="form-floating-custom ">
                        <input v-bind="form.building2Attr" :class="{ 'error-field': form.errors.building2 }"
                            v-model="form.building2" class="form-control" type="text" placeholder="" id="buidlings">
                        <label class="form-label" for="buidlings">Building <small class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.building2 }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.street2Attr" :class="{ 'error-field': form.errors.street2 }"
                            v-model="form.street2" class="form-control" type="text" placeholder="" id="Streetss">
                        <label class="form-label" for="Streetss"> Street／Estate／Lot／Village <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.street2 }}</small>
                </div>
                <div class="col-12">
                    <div class="form-floating-custom ">
                        <input v-bind="form.state2Attr" :class="{ 'error-field': form.errors.state2 }"
                            v-model="form.state2" class="form-control" type="text" placeholder="" id="states">

                        <label class="form-label" for="states">District／City／ Province／State／ Postal Code <small
                                class=" text-danger">*</small></label>
                    </div>
                    <small class=" text-danger">{{ form.errors.state2 }}</small>
                </div>
                <!-- <div class="col-12">
                        <label class="form-label">Postal Code: <i class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.postal_code" class="form-control" type="text"
                            placeholder=" ">
                        <small class=" text-danger">{{ form.errors.postal_code }}</small>
                    </div> -->
                <div class="col-md-12">
                    <div class="fixed-label-custom">
                        <v-select for="country2" append-to-body :calculate-position="useFxn.vueSelectPositionCalc"
                            @search:blur="form.validateVueSelectOnBlur('country2')" v-bind="form.country2Attr"
                            :class="{ 'error-field': form.errors.country2 }"
                            v-model="form.country2" :clearable="true" :options="startCompanyStore.countries" />
                        <label for="country2">Country／Region <small class=" text-danger">*</small></label>

                    </div>

                    <small class=" text-danger">{{ form.errors.country2 }}</small>
                </div>
            </div>
        </section>

        <section class="row g-3 section">
            <div class="col-md-12">
                <!-- <select v-bind="form.identity_type_idAttr" class="form-select" v-model="form.identity_type_id"
                :class="{ 'error-field': form.errors.identity_type_id }">
                <option></option>
                <option value="1">Passport</option>
                <option value="2">ID Card</option>
            </select> -->
                <div class="fixed-label-custom">
                    <v-select append-to-body :calculate-position="useFxn.vueSelectPositionCalc" for="indentity_type_id"
                        @search:blur="form.validateVueSelectOnBlur('indentity_type_id')"
                        v-bind="form.identity_type_idAttr" :class="{ 'error-field': form.errors.identity_type_id }"
                        v-model="form.identity_type_id" :clearable="true"
                        :options="[{ value: 1, label: 'Passport' }, { value: 2, label: 'ID CARD' }]"
                        :reduce="(val: any) => val.value" />
                    <label for="indentity_type_id">ID type <small class="text-danger">*</small></label>
                </div>

                <small class="text-danger">{{ form.errors.identity_type_id }}</small>
            </div>
            <div v-if="form.identity_type_id == '2'" class="col-md-9" style="margin-top:30px">
                <div class="form-floating-custom ">
                    <input :class="{ 'error-field': form.errors.identity_no }" v-maska data-maska="#################"
                        data-maska-tokens="#:[0-9a-zA-Z]" v-model="form.identity_no" ype="text" class="form-control"
                        placeholder="" id="hkid">

                    <label class=" " for="hkid">HKID No. <small class="text-danger">*</small></label>
                </div>
                <small class=" text-danger">{{ form.errors.identity_no }}</small>
            </div>
            <div v-if="form.identity_type_id == '2'" class="col-md-3" style="margin-top:30px">
                <!-- <label class="fw-bolder">HKID No. <small class="text-danger">*</small></label> -->
                <!-- <div class="append"> -->
                <div class="form-floating-custom ">
                    ( <input v-bind="form.identity_no_suffixAttr"
                        :class="{ 'error-field': form.errors.identity_no_suffix }" v-maska data-maska="##"
                        data-maska-tokens="#:[0-9]" v-model="form.identity_no_suffix" type="text" class="form-control "
                        placeholder="" style="display: inline !important; width:100px">)
                    <!-- </div> -->
                </div>
                <small class=" text-danger">{{ form.errors.identity_no_suffix }}</small>
            </div>
            <div v-if="form.identity_type_id == '1'" class="col-md-12">
                <div class="form-floating-custom ">
                    <input v-bind="form.passport_noAttr" :class="{ 'error-field': form.errors.passport_no }" v-maska
                        data-maska="EEEEEEEEEEEEEEEE" data-maska-tokens="E:[0-9a-zA-Z]" v-model="form.passport_no"
                        type="text" class="form-control" placeholder="" id="passport">
                    <label class=" " for="passprt">Passport No. <small class="text-danger">*</small></label>
                </div>
                <small class=" text-danger">{{ form.errors.passport_no }}</small>
            </div>
            <div v-if="form.identity_type_id == '1'" class="col-md-12">
                <div class="fixed-label-custom">
                    <v-select append-to-body :calculate-position="useFxn.vueSelectPositionCalc" id="issuing_country"
                        @search:blur="form.validateVueSelectOnBlur('issuing_country')" v-bind="form.issuing_countryAttr"
                        :class="{ 'error-field': form.errors.issuing_country }" v-model="form.issuing_country"
                        :clearable="false" :options="startCompanyStore.countries" />

                    <label for="issuing_country">Passport Issuing Country/Region <small class="text-danger">*</small>
                    </label>
                </div>

                <small class=" text-danger">{{ form.errors.issuing_country }}</small>
            </div>
            <div class="col-md-12">
                <div class="fixed-label-custom">
                    <vue-tel-input @country-changed="handleCountryChanged" mode="international" v-bind="form.phoneAttr"
                        :class="{ 'error-field': form.errors.phone }" :inputOptions="phoneField.input"
                        :dropdownOptions="phoneField.dropDown" :autoFormat="false" v-model="form.phone"
                        data-maska-tokens="0:[0-9]:multiple" id="phone">
                    </vue-tel-input>
                    <label for="phone">Phone Number <small class="text-danger">*</small></label>
                </div>
                <small class=" text-danger">{{ form.errors.phone }}</small>
            </div>
            <div class="col-md-12">
                <div class="form-floating-custom ">
                    <input v-bind="form.emailAttr" :class="{ 'error-field': form.errors.email }" v-model="form.email"
                        type="text" class="form-control" placeholder="" id="temail">
                    <label class="" for="temail">Email <small class="text-danger">*</small></label>
                </div>
                <small class=" text-danger">{{ form.errors.email }}</small>
            </div>
            <div class="col-md-12">

                <div class="form-floating-custom ">
                    <input v-bind="form.confirm_emailAttr" :class="{ 'error-field': form.errors.confirm_email }"
                        v-model="form.confirm_email" type="text" class="form-control" placeholder="" id="cemail">
                    <label class="" for="cemail">Confirm Email <span class="text-danger"> * </span></label>
                </div>
                <small class=" text-danger">{{ form.errors.confirm_email }}</small>
                <small v-if="emailMatchError" class=" text-danger">emails do no match</small>
            </div>
            <div class="col-md-12">
                <div class="fixed-label-custom">
                    <v-select id="occupation" append-to-body :calculate-position="useFxn.vueSelectPositionCalc"
                        @search:blur="form.validateVueSelectOnBlur('occupation')" v-bind="form.occupationAttr"
                        :class="{ 'error-field': form.errors.occupation }" v-model="form.occupation" :clearable="true"
                        :options="startCompanyStore.employmentStatusList" />
                    <label for="occupation" class="form-labe fw-bolder">Occupation/Employment <span class="text-danger">
                            *
                        </span></label>
                </div>

                <small class="text-danger">{{ form.errors.occupation }}</small>
            </div>

            <!-- <div class="col-md-8 mt-4">
            <div class="form-check">
                <input v-model="form.is_founder" class="form-check-input" type="checkbox" value="" id="is_founder" />
                <label class="form-check-label" for="is_founder"> This person is a Founder? </label>
            </div>
        </div> -->
        </section>

        <div class="movement-buttons mt-5 mb-4">
            <button @click="moveBack" class="btn btn-outline-info me-3">
                <i class="bi bi-arrow-left"></i> Close
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
import { foundersIdividualForm } from './formsStore/Founders_individual'
import { vMaska } from "maska"
import { onMounted, ref, watch, watchEffect } from 'vue';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()



const form = foundersIdividualForm()

onMounted(() => {
    form.updateFields(startCompanyStore.companyInProgress)
    console.log(form.identity_type_id, 'idtype')

})


watch(() => form, () => {
    form.saveToLocalStorage()
    if (!form.dob && form.errors?.dob) form.resetField('dob')
}, { deep: true })


const phoneField = {
    dropDown: {
        showDialCodeInSelection: true,
        showFlags: false,
        showSearchBox: true,
        showDialCodeInList: true,

    },
    input: {
        showDialCode: true,
        placeholder: 'Enter phone',
        styleClasses: 'phone-input-profile',
        autoFormat: false
    }

}

const dialCode = ref('')
function handleCountryChanged(countryObject: any) {
    dialCode.value = `+${countryObject.dialCode}`
}



function resetForm() {
    form.flat = ''
    form.building = ''
    form.street = ''
    // form.city = ''
    form.state = ''
    form.postal_code = ''
    form.country = 'Hong Kong'

    form.flat2 = ''
    form.building2 = ''
    form.street2 = ''
    // form.city2 = ''
    form.state2 = ''
    form.postal_code2 = ''
    form.country2 = 'Hong Kong'

    form.first_name = ''
    form.last_name = ''
    form.chn_first_name = ''
    form.chn_last_name = ''
    form.dob = new Date()
    form.nationality = 'Hong Kong'
    form.phone = ''
    form.email = ''
    form.confirm_email = ''
    form.occupation = ''
    form.is_founder = false
    form.identity_type_id = '1'
    form.identity_no = ''
    form.passport_no = ''
    form.hasChineseName = false
    form.issuing_country = 'Hong Kong'
    startCompanyStore.checkedEntityCapacity = []
}


const ageError = ref('')
const emailMatchError = ref(false)
watch(() => form.dob, () => {
    if (useFxn.ageInYears(new Date(form.dob)) < 18)
        ageError.value = 'Must not be less that 18years old';
    else ageError.value = ''

})

watchEffect(() => {
    if (form.email && form.confirm_email) {
        if ((form.email !== form.confirm_email) && !form.errors.confirm_email)
            emailMatchError.value = true
        else
            emailMatchError.value = false
    }
})




function moveBack() {
    // startCompanyStore.switchStage('-')
    resetForm()
    form.clearLocalStorage()
    startCompanyStore.isShowingFoundersForm = false
    startCompanyStore.idToEdit = ''
}

const saveAndContinue = form.handleSubmit((values: any) => {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.error('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if (Object.keys(form.errors).length > 0) {
        toast.error("Some fields still have errors", { position: 'top-right' });
        return;
    }


    // if (form.phone.length < 14) {
    //      form.errors.phone = "Phone number is not complete"
    //     toast.error("Phone number is not complete", { position: 'top-right' });
    //     return;

    // }
    if (!useFxn.isEmail(form.email)) {
        toast.error('Invalid email format', { position: 'top-right' })
        return;
    }

    if (form.email !== form.confirm_email) {
        toast.error('Emails do not macth!', { position: 'top-right' })
        return;
    }

    if (form.identity_type_id == '1') {
        if (!form.passport_no || !form.issuing_country) {
            toast.error('Please complete Passport fields', { position: 'top-right' })
            return;
        }
    }

    if (form.identity_type_id == '2') {
        if (!form.identity_no) {
            toast.error('Please complete ID field', { position: 'top-right' })
            return;
        }
        if (!form.identity_no_suffix) {
            toast.error('Please complete ID field', { position: 'top-right' })
            return;
        }
    }

    if (useFxn.ageInYears(new Date(form.dob)) < 18) {
        toast.error('Must not be less that 18years old', { position: 'top-right' })
        return;
    }
    if (startCompanyStore.checkedEntityCapacity.length == 0) {
        toast.error('Select at least a Capacity!', { position: 'top-right' })
        return;
    }

    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    if (startCompanyStore.idToEdit) {
        formData.append('company_entity_id', startCompanyStore.idToEdit)
        formData.append('isEdit', '1')
    }
    formData.append('entity_type_id', '1')
    formData.append('entity_capacity_id', JSON.stringify(startCompanyStore.checkedEntityCapacity))
    formData.append('first_name', form.first_name)
    formData.append('last_name', form.last_name)

    if (form.hasChineseName) {
        formData.append('chn_first_name', form.chn_first_name)
        formData.append('chn_last_name', form.chn_last_name)
    }
    if (form.dob)
        formData.append('dob', form.dob)
    formData.append('nationality', form.nationality)
    formData.append('phone', `${dialCode.value}${form.phone}`)
    formData.append('email', form.email)
    formData.append('occupation', form.occupation)
    formData.append('identity_type_id', form.identity_type_id)
    formData.append('identity_no', form.identity_no)
    formData.append('identity_no_suffix', form.identity_no_suffix || '')
    formData.append('passport_no', form.passport_no)
    formData.append('issuing_country', form.issuing_country)

    formData.append('is_founder', form.is_founder ? '1' : '0')


    formData.append('addresses[0][flat]', form.flat)
    formData.append('addresses[0][building]', form.building)
    formData.append('addresses[0][street]', form.street)
    // formData.append('addresses[0][city]', form.city)
    formData.append('addresses[0][state]', form.state)
    // formData.append('addresses[0][postal_code]', form.postal_code)
    formData.append('addresses[0][country]', form.country)
    formData.append('addresses[0][is_corAddress]', form.correspondingAddressIsSame ? '1' : '0')

    if (!form.correspondingAddressIsSame) {
        formData.append('addresses[1][flat]', form.flat2)
        formData.append('addresses[1][building]', form.building2)
        formData.append('addresses[1][street]', form.street2)
        // formData.append('addresses[1][city]', form.city2)
        formData.append('addresses[1][state]', form.state2)
        // formData.append('addresses[1][postal_code]', form.postal_code2)
        formData.append('addresses[1][country]', form.country2)
    }

    form.isSaving = true
    saveFromToApi(formData)
})

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyEntity(formData)
            .then(async (response) => {
                // console.log(response, 'Data from foundes')
                toast.success('Data Saved Successfully', { position: 'top-right' });
                form.isSaving = false
                startCompanyStore.getCompanyInProgress('founder')
                startCompanyStore.isShowingFoundersForm = false
                form.clearLocalStorage()
                startCompanyStore.checkedEntityCapacity = []

            })
    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        // console.log(error);
        form.isSaving = false

    }
}

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
