<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#coyInfoModalEdit">
        </button>

        <div class="modal fade" id="coyInfoModalEdit" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Edit Company Information</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12 col-md-6">
                            <div class="fixed-label-custom">
                            <v-select  id="company_name"  v-model="company_registered_name" 
                            :options="names" 
                              /> 
                            
                            <label  for="company_name">Company Name:</label>
                          
                                </div>
                                <small class=" text-danger">{{ errors.company_registered_name }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="business_registered_number" type="text" class="form-control" v-maska
                                        data-maska=""
                                        data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]"
                                        placeholder="">
                                    <label class="" for="eng_name">Business Registration Number (BRN):</label>
                                    
                                </div>
                                <small class=" text-danger">{{ errors.business_registered_number }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="fixed-label-custom">
                                    <VueDatePicker :format="useFxn.dateDisplay" hide-input-icon :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="incorporated_date"
                                        placeholder="select date">
                                    </VueDatePicker>
                                    <label class="" for="eng_name">Incorporation Date:</label>
                                </div>
                                <small class=" text-danger">{{ errors.incorporated_date }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <input v-model="business_classification" type="text" class="form-control" v-maska
                                        data-maska=""
                                        data-maska-tokens="A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]"
                                        placeholder="">
                                    <label class="" for="eng_name">Business Classification:</label>
                                </div>
                                <small class=" text-danger">{{ errors.business_classification }}</small>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating-custom">
                                    <select v-model="company_structure" class="form-select" name="" id="">
                                        <option selected value="Private Limited Company">Private Limited Company
                                        </option>
                                    </select>

                                    <label class="" for="eng_name">Company Structure:</label>
                                </div>
                                <small class=" text-danger">{{ errors.company_structure }}</small>
                            </div>

                            <div class="col-md-6">
                                <div class="fixed-label-custom">
                                    <v-select class="" append-to-body
                                        :calculate-position="useFxn.vueSelectPositionCalc" :teleport="true"
                                        placeholder="" v-model="company_registered" :clearable="true"
                                        :options="paramsStore.countries" />
                                    <label class="form-label">Country／Region </label>
                                </div>
                                <small class=" text-danger">{{ errors.company_registered }}</small>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer border-0">
                        <button ref="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>

                        <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving data..
                        </button>

                        <button v-else @click="save" type="button" class="btn btn-primary">
                            Submit Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed} from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from '../../adminParamsStore';
import { vMaska } from "maska"
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const paramsStore = useAdminParamsStore()

// modal

const names = ref<any>([]);

onMounted(async ()=>{
   await companyName()
})

async function companyName(){
    const resp = await api.companyDetails(paramsStore.currentCompanyId)
    const arrayName = resp.data.data.names
    arrayName.forEach((name:any) => {
    let eng_names = name.eng_name?name.eng_name+' ' + name.eng_prefix: ''
    let chn_name = name.chn_name?name.chn_name+ ' '+ name.chn_prefix:''
    name.label = eng_names +' '+  chn_name 
   })
    names.value = arrayName
}

// const FormattedNames = computed( ()=> {
//     const formatName: any = []
//    names.value.forEach((name:any) => {
//     let eng_names = name.eng_name?name.eng_name+' ' + name.eng_prefix: ''
//     let chn_name = name.chn_name?name.chn_name+ ' '+ name.chn_prefix:''
//     formatName.push(eng_names +' '+  chn_name )
//    })
//    return formatName;
// }) 


const openModal = ref<any>(null)
const closeModal = ref<any>(null)

watch(() => paramsStore.coyInfoModal, () => {
    setValuesOnFields()
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});

// form and validation
const rules = {
    // company_registered_name: yup.required('Field is required'),
    business_registered_number: yup.string().required('Field is required'),
    incorporated_date: yup.date().required('Field is required'),
    company_structure: yup.string().required('Field is required'),
    company_registered: yup.string().required('Field is required'),
    // business_classification: yup.string().required('Field is required'),
    // registration_progress_id: yup.string()
};

const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
    validationSchema: yup.object(rules),
});

const [company_registered_name] = defineField('company_registered_name');
const [business_registered_number] = defineField('business_registered_number');
const [incorporated_date] = defineField('incorporated_date');
const [company_structure] = defineField('company_structure');
const [company_registered] = defineField('company_registered');
const [business_classification] = defineField('business_classification');
// const [registration_progress_id] = defineField('registration_progress_id');
const isSaving = ref<boolean>(false)

function setValuesOnFields() {
    const registered_company = paramsStore.currentCompanyData?.registered_company
    if (registered_company) {
        setFieldValue('company_registered_name', registered_company.company_registered_name)
        setFieldValue('business_registered_number', registered_company.business_registered_number)
        setFieldValue('incorporated_date', registered_company.incorporated_date)
        setFieldValue('company_structure', registered_company.company_structure)
        setFieldValue('company_registered', registered_company.company_registered)
        setFieldValue('business_classification', registered_company.business_classification)
        // setFieldValue('registration_progress_id', registered_company.registration_progress_id)
    }
}



const save = handleSubmit(async (values) => {
    useFxn.confirm("Continue submit?", "Continue").then(async (confirmed) => {
        if (confirmed.value == true) {
            isSaving.value = true
            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('company_registered_name', values.company_registered_name.label ?? '')
            formData.append('company_registered_id', values.company_registered_name.id ?? '')
            formData.append('business_registered_number', values.business_registered_number ?? '')
            formData.append('incorporated_date', values.incorporated_date ? useFxn.formatDate(values.incorporated_date) : '')
            formData.append('company_structure', values.company_structure ?? '')
            formData.append('company_registered', values.company_registered ?? '')
            formData.append('business_classification', values.business_classification ?? '')
            // formData.append('registration_progress_id', values.registration_progress_id)
            try {
                await api.registeredCompany(formData)
                isSaving.value = false
                paramsStore.getCompanyDetails()
                closeModal.value.click()
            } catch (error) {
                isSaving.value = false
                console.log(error);
            }
        }
    })
})
</script>

<style>
.vs__dropdown-menu {
    z-index: 9999 !important;
    text-transform: capitalize;
}

.select-chooser .vs__search,
.select-chooser .vs__selected {
    padding: 10px;
}
</style>