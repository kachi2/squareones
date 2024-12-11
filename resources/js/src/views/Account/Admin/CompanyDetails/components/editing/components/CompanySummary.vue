<template>
    <div class="row g-3">
        <div class="col-lg-12">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <div class="card-body">
                    <div class=" h5">Company Information</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Company Name:
                            <span class="float-end">
                                {{ registered_company?.company_registered_name }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business Registration Number (BRN):
                            <span class="float-end">
                                {{ registered_company?.business_registered_number }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Incorporation Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(registered_company?.incorporated_date)
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Company Structure:
                            <span class="float-end">
                                {{ registered_company.company_structure ?
                                    registered_company.company_structure.replaceAll('_',
                                        ' ') : '' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Company Registered In:
                            <span class="float-end">
                                {{ registered_company?.company_registered }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business Classification:
                            <span class="float-end">
                                {{ registered_company?.business_classification }}
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="col-lg-12">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <div class="card-body">
                    <div class=" h5">Registered Office and Contact:</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Director:
                            <span class="float-end">
                                <span v-if="listOfDirectors().length > 0" v-for="directors in listOfDirectors() " :key="directors" >
                                    {{ directors }} <br>
                                </span>
                               
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Shareholder:
                            <span class="float-end">
                                <span v-if="listOfShareholders().length > 0" v-for="shareholders in listOfShareholders() " :key="shareholders" >
                                    {{ shareholders }} <br>
                                </span>
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Company Secretary:
                            <span class="float-end">
                                {{ office_contract?.company_secretary }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Registered office:
                            <span class="float-end">
                                {{ office_contract?.registered_office }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business address:
                            <span class="float-end">
                                {{ office_contract?.business_address }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Designated Rep.:
                            <span class="float-end">
                                {{ office_contract?.scr_designated_representative }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <div class="card-body">
                    <div class=" h5">Compliance and Reporting</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Auditor:
                            <span class="float-end">
                                {{ compliance_reporting?.auditor_name }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business Registration Renewal:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(compliance_reporting?.business_registration_renewal_date) ?? '-'
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Accounting Reference Date:
                            <span class="float-end">
                                {{
                                    dispMonthAndDay(compliance_reporting?.accounting_reference_date)
                                }}
                               
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Annual Return Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(compliance_reporting?.annual_return_date) ?? '-'
                                }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Significant Controllers
                </h5>
                <section v-for="significant_controller in significant_controllers" class="card bg-light border-0 section">
                <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0 ">
                            Legal Entity Name:
                            <span class="float-end">
                                {{ significant_controller?.legal_entity_name }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Date becoming rep person:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(significant_controller?.date_becoming_rep_person) ?? '-'
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Entry Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(significant_controller?.entry_date) ?? '-'
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Date ceased to be rep person:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(significant_controller?.date_ceased_to_be_rep_person) ?? '-'
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Residential Address:
                            <span class="float-end">
                                {{
                                    significant_controller?.controllers_particulars?.resdential_address ?? '-'
                                }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Corresponding Address:
                            <span class="float-end">
                                {{
                                    significant_controller?.controllers_particulars?.corresponding_address ?? '-'
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Place of registration:
                            <span class="float-end">
                                {{
                                    significant_controller?.controllers_particulars?.place_of_registration ?? '-'
                                }}
                            </span>
                        </li>
                    
                    </ul>
                </div>
            </section>
            </div>
        </div>
        <!-- <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Register of Charge
                </h5>
                <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Type of Charge:
                            <span class="float-end">
                                {{ register_of_charge?.type_of_charge ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Creation Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(register_of_charge?.charge_creation_date) ?? '-'
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Description:
                            <span class="float-end">
                                {{ register_of_charge?.charge_description ?? '-' }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Account Secured:
                            <span class="float-end">
                                {{ register_of_charge?.account_secured_by_charge ?? '-' }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Registration Details:
                            <span class="float-end">
                                {{ register_of_charge?.registration_details ?? '-' }}
                            </span>
                        </li>




                    </ul>
                </div>
            </div>
        </div> -->

        <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Designated Representative
                </h5>
                <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li  class="list-group-item ps-0">
                            Name:
                            <span class="float-end">
                                {{ designated_representative?.name ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Entry Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(designated_representative?.entry_date) ?? '-'
                                }}
                            </span>
                        </li>

                        <!-- <li class="list-group-item ps-0">
                            Place of Registration:
                            <span class="float-end">
                                {{ designated_representative?.designated_particulars?.place_of_registration ?? '-' }}
                            </span>
                        </li> -->
                        <li class="list-group-item ps-0">
                            Corresponding Address:
                            <span class="float-end">
                                {{ designated_representative?.designated_particulars?.corresponding_address
                                    ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Remarks:
                            <span class="float-end">
                                {{ designated_representative?.remarks
                                    ?? '-' }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Secretaty's Register
                </h5>
                <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Name:
                            <span class="float-end">
                                {{ register_of_secretary?.name ?? '-' }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Indentity Info:
                            <span class="float-end">
                                {{ register_of_secretary?.identity_info ?? '-' }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Address:
                            <span class="float-end">
                                {{ register_of_secretary?.address ?? '-' }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Cease to Act:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(register_of_secretary?.cease_to_act) ?? '-'
                                }}
                            </span>
                        </li>

                        <li class="list-group-item ps-0">
                            Remarks:
                            <span class="float-end">
                                {{ register_of_secretary?.remarks ?? '-' }}
                            </span>
                        </li>


                    </ul>
                </div>
            </div>
        </div>

        <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Register Of Directors ({{
                    register_of_director.length }}):</h5>

                    <section v-for="item in register_of_director" :key="item"  class="card bg-light border-0 section">
                  <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Name:
                            <span class="float-end">
                                {{ item.name ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Date of Appointment:
                            <span class="float-end">
                                {{ item.date_of_appointment ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Registration Number:
                            <span class="float-end">
                                {{ item.date_of_appointment ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Registered Office: 
                            <span class="float-end">
                                {{ item.registered_office ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Remarks:
                            <span class="float-end">
                                {{ item.remarks ?? '-' }}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
        </div>

        <div class="col-lg-12">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Register Of Shareholders ({{
                    register_of_shareholders.length }}):
                </h5>
                <section v-for="item in register_of_shareholders" :key="item"  class="card bg-light border-0 section">
                  <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Name:
                            <span class="float-end">
                                {{ item.name ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Address: 
                            <span class="float-end">
                                {{ item.address ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Class of Shares: 
                            <span class="float-end">
                                {{ item.class_of_shares ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Denomination: 
                            <span class="float-end">
                                {{ item.denomination ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Current Holding:
                            <span class="float-end">
                                {{ item.current_holding ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Date entered_as_member:
                            <span class="float-end">
                                {{ item.date_entered_as_member ?? '-' }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Date cease_to_be_member:
                            <span class="float-end">
                                {{ item.date_cease_to_be_member ?? '-' }}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
        </div>

        <!-- <div class="col-lg-12 ">
            <div class="card exemption-none bg-dynamic shadow-sm border-0 h-100">
                <h5 class="card-header bg-transparent border-0">Register Of Allotments
                    ({{ register_of_allotments.length }}):
                </h5>
                <div class="card-body registers-body">
                    <ul class="list-group list-group-flush">
                        <li v-for="item in register_of_allotments" :key="item" class="list-group-item ps-0">
                            <div class="row g-3">
                                <div class="col-lg-6">
                                    <strong>Name</strong>
                                    <div>{{ item.name ?? '-' }}</div>
                                </div>
                                <div class="col-lg-6">
                                    <strong>Allotment date</strong>
                                    <div>{{ item.allotment_date ?? '-' }}</div>
                                </div>
                                <div class="col-lg-6">
                                    <strong>address</strong>
                                    <div>{{ item.address ?? '-' }}</div>
                                </div>
                                <div class="col-lg-6">
                                    <strong>class_of_shares</strong>
                                    <div>{{ item.class_of_shares ?? '-' }}</div>
                                </div>

                                <div class="col-lg-6">
                                    <strong>Shares Allocated</strong>
                                    <div>{{ item.no_of_shares_allocated ?? '-' }}</div>
                                </div>
                                <div class="col-lg-6">
                                    <strong>Denomination</strong>
                                    <div>{{ item.denomination ?? '-' }}</div>
                                </div>
                                <div class="col-lg-6">
                                    <strong>Total_consideration</strong>
                                    <div>{{ item.total_consideration ?? '-' }}</div>
                                </div>

                                <div class="col-lg-6">
                                    <strong>Remarks</strong>
                                    <div>{{ item.remarks ?? '-' }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div> -->

        <div class="col-12 my-5">
            <div class="float-end col-lg-3 col-md-4">
                <button v-if="isPublising" class="btn btn-primary w-100" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Please wait..
                </button>
                <button v-else @click="publish" type="button" class="btn btn-primary w-100">
                    Publish Data
                </button>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useAdminParamsStore } from '../../../adminParamsStore';
import useFxn from '@/stores/Helpers/useFunctions';
const paramsStore = useAdminParamsStore()
const companyIsLoading = ref<boolean>(true)
import api from '@/stores/Helpers/axios'
import { useDateFormat } from '@vueuse/core';

const emits = defineEmits(['done'])



onMounted(async () => {
    await paramsStore.getCompanyDetails()
    companyIsLoading.value = false
})

const register_of_director = computed(() => { return paramsStore.currentCompanyData?.register_of_director ?? [] })
const register_of_allotments = computed(() => { return paramsStore.currentCompanyData?.register_of_allotments ?? [] })
const register_of_shareholders = computed(() => { return paramsStore.currentCompanyData?.register_of_shareholders ?? [] })
const registered_company: any = computed(() => { return paramsStore.currentCompanyData?.registered_company ?? [] })
const office_contract: any = computed(() => { return paramsStore.currentCompanyData?.office_contract[0] ?? [] })
const compliance_reporting: any = computed(() => { return paramsStore.currentCompanyData?.compliance_reporting[0] ?? [] })
const significant_controllers = computed(() => { return paramsStore.currentCompanyData?.significant_controller ?? [] })
const register_of_secretary = computed(() => { return paramsStore.currentCompanyData?.register_of_secretary[0] ?? [] })
const register_of_charge = computed(() => { return paramsStore.currentCompanyData?.register_of_charge[0] ?? [] })
const designated_representative = computed(() => { return paramsStore.currentCompanyData?.designated_representative[0] ?? [] })

const listOfDirectors = () => {
    let array = []
    const list = paramsStore.currentCompanyData?.office_contract[0]?.directors
    if (list) array = JSON.parse(list)
    return array;
}

const listOfShareholders = () => {
    let array = []
    const list = paramsStore.currentCompanyData?.office_contract[0]?.shareholders
    if (list) array = JSON.parse(list)
    return array;
}

function dispMonthAndDay(date: any) {
    if (!date)
        return '-'
    else {
        const dd = useDateFormat(date, 'MMM, DD')
        return dd.value
    }
}


const isPublising = ref(false)

function publish() {
    useFxn.confirm("This Will make this Data to be visible to the company owner?", "Continue Publish").then(async (confirm) => {
        if (confirm.value == true) {
            try {
                isPublising.value = true
                await api.publishCompany(paramsStore.currentCompanyId)
                useFxn.toast("Published", "success")
                emits('done')
                isPublising.value = true
            }
            catch {
                // 
            }

        }
    })
}

</script>
<style lang="css">
.list-group-item {
    background: transparent;
    padding-block: 13px;
}

.card {
    box-shadow: 1px 1px #88888812;
    border: 1px solid rgb(0 0 0 / 5%);
    border-radius: 10px;
}

/* .registers-body {
    max-height: 450px;
    overflow-y: auto;
} */
</style>