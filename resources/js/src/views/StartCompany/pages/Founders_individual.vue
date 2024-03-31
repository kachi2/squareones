<template>

    <section class="section">
        <div class="fw-bold fs-5">About you </div>
        <div class="fw-bolder">Your name in English </div>
        <span>Enter your first and last name as they appear on a government ID
            <small class="text-danger">*</small>
        </span>
        <div class="row mt-1 g-2">
            <div class="col-12 ">
                <input v-maska data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                    v-model="form.first_name" type="text" class="form-control" placeholder="First Name..">
                <small class=" text-danger">{{ form.errors.first_name }}</small>
            </div>

            <div class="col-12 ">
                <input v-maska data-maska="A a" data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple"
                    v-model="form.last_name" type="text" class="form-control" placeholder="Last Name..">
                <small class=" text-danger">{{ form.errors.last_name }}</small>
            </div>

            <div class="col-12 ">
                <div class="form-check ">
                    <input class="form-check-input" v-model="form.hasChineseName" type="checkbox" id="chinese_name" />
                    <label class="form-check-label" for="chinese_name">Do you have a Chinese Name?</label>
                </div>
            </div>
        </div>
    </section>

    <section class="section" v-if="form.hasChineseName">
        <div class="fw-bolder">Your name in Chinese </div>
        <span>Enter your first and last name as they appear on a government ID</span>
        <div class="row mt-1 g-2">
            <div class="col-12 ">
                <input v-model="form.chn_first_name" type="text" class="form-control" placeholder="First Name..">
                <small class=" text-danger">{{ form.errors.chn_first_name }}</small>
            </div>

            <div class="col-12 ">
                <input v-model="form.chn_last_name" type="text" class="form-control" placeholder="Last Name..">
                <small class=" text-danger">{{ form.errors.chn_last_name }}</small>
            </div>
        </div>
    </section>

    <section class="row g-2 section">
        <div class="col-md-6">

            <label class="form-label fw-bold">Date of Birth <small class="text-danger">*</small></label>
            <VueDatePicker :format="useFxn.dateDisplay" input-class-name="dob-settings-input" hide-input-icon
                :clearable="false" :max-date="new Date()" :enable-time-picker="false" auto-apply v-model="form.dob">
            </VueDatePicker>
        </div>

        <div class="col-md-6">
            <label class="form-label fw-bold">Nationality <small class="text-danger">*</small></label>
            <!-- <select v-model="form.nationality" class="form-select">
                <option selected value="Hong Kong"> Hong Kong</option>
            </select> -->
            <v-select placeholder="select country.." v-model="form.nationality" :clearable="false"
                :options="startCompanyStore.countries" />
        </div>
    </section>

    <section class="section">
        <div class="fw-bolder">Your residential address <small class="text-danger">*</small> </div>
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
                <v-select placeholder="select country.." v-model="form.country" :clearable="false"
                    :options="startCompanyStore.countries" />
                <!-- <select class="form-select" v-model="form.country">
                    <option selected value="Hong Kong">Hong Kong</option>
                </select> -->
            </div>
        </div>
    </section>
    <section class="section">
        <div class="fw-bolder">Your corresponding address </div>
        <span>
            <div class="form-check ">
                <input class="form-check-input" type="checkbox" id="same_address"
                    v-model="form.correspondingAddressIsSame" />
                <label class="form-check-label" for="same_address">Same as residential address</label>
            </div>
        </span>
        <div v-if="!form.correspondingAddressIsSame" class="row g-2 mt-1">
            <div class="col-12">
                <input v-model="form.address2" class="form-control" type="text" placeholder="Flat／Floor／Block">
                <small class=" text-danger">{{ form.errors.address2 }}</small>
            </div>
            <div class="col-12">
                <input v-model="form.street_no2" class="form-control" type="text" placeholder="Street number">
                <small class=" text-danger">{{ form.errors.street_no2 }}</small>
            </div>
            <div class="col-12">
                <input v-model="form.city2" class="form-control" type="text" placeholder="City">
                <small class=" text-danger">{{ form.errors.city2 }}</small>
            </div>
            <div class="col-12">
                <input v-model="form.state2" class="form-control" type="text" placeholder="State">
                <small class=" text-danger">{{ form.errors.state2 }}</small>
            </div>
            <div class="col-12">
                <input v-model="form.postal_code2" class="form-control" type="text" placeholder="Postal Code">
                <small class=" text-danger">{{ form.errors.postal_code2 }}</small>
            </div>
            <div class="col-md-12">
                <v-select placeholder="select country.." v-model="form.country2" :clearable="false"
                    :options="startCompanyStore.countries" />
                <!-- <select class="form-select" v-model="form.country2">
                    <option selected value="Hong Kong">Hong Kong</option>
                </select> -->
            </div>
        </div>
    </section>

    <section class="row g-2 section">
        <div class="col-md-8">
            <label class=" fw-bolder">ID type <small class="text-danger">*</small></label>
            <select class="form-select" v-model="form.identity_type_id">
                <option value="1">Passport</option>
                <option value="2">ID Card</option>
            </select>
        </div>
        <div v-if="form.identity_type_id == '2'" class="col-md-8">
            <label class=" fw-bolder">HKID No. <small class="text-danger">*</small></label>
            <input v-maska data-maska="#### #### #### ####" data-maska-tokens="#:[0-9a-zA-Z]" v-model="form.identity_no"
                ype="text" class="form-control" placeholder="HKID No.">
            <small class=" text-danger">{{ form.errors.identity_no }}</small>
        </div>
        <div v-if="form.identity_type_id == '1'" class="col-md-8">
            <label class=" fw-bolder">Passport No. <small class="text-danger">*</small></label>
            <input v-maska data-maska="EEEEEEEEEEEEEEEE" data-maska-tokens="E:[0-9a-zA-Z]" v-model="form.passport_no"
                type="text" class="form-control" placeholder="Passport No">
            <small class=" text-danger">{{ form.errors.passport_no }}</small>
        </div>
        <div v-if="form.identity_type_id == '1'" class="col-md-8">
            <label class=" fw-bolder">Passport issuing Country/Region <small class="text-danger">*</small> </label>
            <v-select v-model="form.issuing_country" :clearable="false" :options="startCompanyStore.countries" />
            <small class=" text-danger">{{ form.errors.issuing_country }}</small>
        </div>
        <div class="col-md-8">
            <label class=" fw-bolder">Phone number <small class="text-danger">*</small></label>
            <div class="append">
                <input v-maska data-maska="99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed
                    v-model="form.phone" type="text" class="form-control" placeholder="phone number">
                <small class=" text-danger">{{ form.errors.phone }}</small>
            </div>
        </div>
        <div class="col-md-8">
            <label class=" fw-bolder">Email <small class="text-danger">*</small></label>
            <input v-model="form.email" type="text" class="form-control" placeholder="email">
            <small class=" text-danger">{{ form.errors.email }}</small>
        </div>
        <div class="col-md-8">
            <label class=" fw-bolder">Confirm email</label>
            <input v-model="form.confirm_email" type="text" class="form-control" placeholder="confirm email">
            <small class=" text-danger">{{ form.errors.confirm_email }}</small>
        </div>
        <div class="col-md-8">
            <label class="form-labe fw-bolder">Occupation/Employment</label>
            <v-select v-model="form.occupation" :clearable="false" :options="startCompanyStore.employmentStatusList" />
        </div>

        <!-- <div class="col-md-8 mt-4">
            <div class="form-check">
                <input v-model="form.is_founder" class="form-check-input" type="checkbox" value="" id="is_founder" />
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

</template>
<script lang="ts" setup>
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import useFxn from '@/stores/Helpers/useFunctions';
import { foundersIdividualForm } from './formsStore/Founders_individual'
import { vMaska } from "maska"

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form: any = foundersIdividualForm()

function resetForm() {
    form.address = ''
    form.street_no = ''
    form.city = ''
    form.state = ''
    form.postal_code = ''
    form.country = 'Hong Kong'

    form.address2 = ''
    form.street_no2 = ''
    form.city2 = ''
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
    form.issuing_country = 'Hong Kong'
    startCompanyStore.checkedEntityCapacity = []
}


function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinue() {

    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    // if (!form.first_name || !form.last_name || !form.dob || !form.phone || !form.email || !form.occupation) {
    //     toast.default('Please complete fields', { position: 'top-right' })
    //     return;
    // }

    if (form.hasChineseName) {
        if (!form.chn_first_name || !form.chn_last_name) {
            toast.default('Please complete Chinese names', { position: 'top-right' })
            return;
        }
    }

    // if (!form.address || !form.street_no || !form.city || !form.state || !form.postal_code) {
    //     toast.default('Please complete fields', { position: 'top-right' })
    //     return;
    // }

    if (!form.correspondingAddressIsSame) {
        if (!form.address2 || !form.street_no2 || !form.city2 || !form.state2 || !form.postal_code2) {
            toast.default('Please complete Secondary address', { position: 'top-right' })
            return;
        }
    }

    if (!useFxn.isEmail(form.email)) {
        toast.default('Invalid email format', { position: 'top-right' })
        return;
    }

    if (form.email !== form.confirm_email) {
        toast.default('Emails do not macth!', { position: 'top-right' })
        return;
    }

    if (form.identity_type_id == '1') {
        if (!form.passport_no || !form.issuing_country) {
            toast.default('Please complete Passport fields', { position: 'top-right' })
            return;
        }
    }

    if (form.identity_type_id == '2') {
        if (!form.identity_no) {
            toast.default('Please complete ID field', { position: 'top-right' })
            return;
        }
    }

    if (useFxn.ageInYears(new Date(form.dob)) < 18) {
        toast.default('Must not be less that 18years old', { position: 'top-right' })
        return;
    }


    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    formData.append('entity_capacity_id', JSON.stringify(startCompanyStore.checkedEntityCapacity))
    formData.append('entity_type_id', form.entity_type_id)
    formData.append('first_name', form.first_name)
    formData.append('last_name', form.last_name)

    if (form.hasChineseName) {
        formData.append('chn_first_name', form.chn_first_name)
        formData.append('chn_last_name', form.chn_last_name)
    }

    formData.append('dob', form.dob)
    formData.append('nationality', form.nationality)
    formData.append('phone', form.phone)
    formData.append('email', form.email)
    formData.append('occupation', form.occupation)
    formData.append('identity_type_id', form.identity_type_id)
    formData.append('passport_no', form.passport_no)
    formData.append('issuing_country', form.issuing_country)

    formData.append('is_founder', form.is_founder ? '1' : '0')


    formData.append('addresses[0][address]', form.address)
    formData.append('addresses[0][street_no]', form.street_no)
    formData.append('addresses[0][city]', form.city)
    formData.append('addresses[0][state]', form.state)
    formData.append('addresses[0][postal_code]', form.postal_code)
    formData.append('addresses[0][country]', form.country)
    formData.append('addresses[0][is_corAddress]', form.correspondingAddressIsSame ? '1' : '0')

    if (!form.correspondingAddressIsSame) {
        formData.append('addresses[1][address]', form.address2)
        formData.append('addresses[1][street_no]', form.street_no2)
        formData.append('addresses[1][city]', form.city2)
        formData.append('addresses[1][state]', form.state2)
        formData.append('addresses[1][postal_code]', form.postal_code2)
        formData.append('addresses[1][country]', form.country2)
    }

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
