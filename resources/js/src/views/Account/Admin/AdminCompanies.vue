<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-2"> Companies Overview</h5>
        <div class="mb-3"> Have a Glance of this company Informaiton</div>
        <div class="row g-3 mb-5">
            <div class="col-md-4 pb-3">
                <router-link to="/admin/companies" style="text-decoration:none">
                    <div class="card  border-0  shadow-sm h-70">
                        <div class="card-body ">
                            <div class="d-flex justify-content-between align-items-cente">
                                <div class="col-12">
                                    <span class="fs-4 fw-bold text-primary">{{ comapaniesList?.length }}</span>
                                    <div>
                                        <span class="small fw-bold">Total Companies</span> &nbsp;
                                        <small style="font-size:10px;" class=""> <span class=" text-info fw-bold">{{
                                            comapaniesData?.thismonth }}</span>
                                            added this month</small>
                                    </div>
                                    <div>
                                        <span class="small badge bg-success">{{ comapaniesData?.active }} active
                                        </span> &nbsp;
                                        <span class="small badge bg-danger">{{ comapaniesData?.inactive }}
                                            Inactive
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/admin/companies" style="text-decoration:none">
                    <div class="card border-0 shadow-sm h-70">
                        <div class="card-body ">
                            <div class="d-flex justify-content-between align-items-cente">
                                <div class="col-12">
                                    <span class="fs-4 fw-bold text-warning">{{ comapaniesData?.Unincorporated
                                        }}</span>

                                    <div>
                                        <span class="small fw-bold">Pending Incorporation</span>
                                    </div>
                                    <div>
                                        <span class="small"> <span class="text-primary fw-bold">{{
                                            comapaniesData?.thisMonthUnIncorporated }}</span>
                                            new company added this month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/admin/companies" style="text-decoration:none">
                    <div class="card border-0 shadow-sm h-70">
                        <div class="card-body ">
                            <div class="d-flex justify-content-between align-items-cente">
                                <div class="col-12">
                                    <span class="fs-4 fw-bold text-success">{{ comapaniesData?.incorporated ??
                                        '0' }}</span>
                                    <div>
                                        <span class="small fw-bold">Incorporated</span>
                                    </div>
                                    <div>
                                        <span class="small"> <span class="text-primary fw-bold">{{
                                            comapaniesData?.thisMonthIncorporated ?? '0' }}</span>
                                            new companies added this month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-6">
                                <span class="fs-4 fw-bold text-mute">{{ companies.list.length }}/{{
                                    companies.list.length
                                }}</span>
                                <div>
                                    <span class="small">Active Companies</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <apexchart type="pie" :options="pieChartOptionsActiveCoys"
                                    :series="pieChartSeriesActiveCoys">
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-6">
                                <span class="fs-4 fw-bold text-mute">
                                    {{ companies.list.length - companies.is_incorporated.length }}/{{
                                        companies.list.length }}
                                </span>
                                <div>
                                    <span class="small">Pending incopration</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <apexchart type="pie" :options="pieChartOptionsPendingIncop"
                                    :series="pieChartSeriesPendingIncop">
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-6">
                                <span class="fs-4 fw-bold text-mute">
                                    {{ companies.is_incorporated.length }}/{{ companies.list.length }} </span>
                                <div>
                                    <span class="small">Companies Incorporated</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <apexchart type="pie" :options="pieChartOptionsIncomporated"
                                    :series="pieChartSeriesIncoporated">
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->


            <div class="col-12 mt-1">
                <div class="card shadow-sm">
                    <div class="card-header bg-transparent fw-bold py-3 border-0">
                        Registered Companies ({{ companies.list.length }})<br>
                        <small> List of all registered company using the company formation</small>

                        <span style="float:right">
                            <input v-model="searchCompany" placeholder="Search company" style="border:1px solid #eee"
                                class="form-control">
                        </span>
                    </div>


                    <isLoadingComponent v-if="companies.isLoading" />

                    <div v-else class="card-body">

                        <EasyDataTable :search-value="searchCompany" style="border:1px solid #eee"
                            class="easy-data-table" :headers="headers" :items="companies.list" buttons-pagination>
                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>
                            <template #item-name="item">
                                <!-- {{ computedCoyName(item) }} -->
                                <span> {{ item?.registered_company?.company_registered_name }}</span>
                            </template>

                            <template #item-business_reg_no="item">
                                <span> {{ item?.registered_company?.business_registered_number }}</span>
                            </template>

                            <template #item-incorporation_statuses="item">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <span>FORM FILLING STATUS: </span>
                                        <span v-if="item.is_complete"
                                            class="badge bg-success-subtle text-dark">Complete</span>
                                        <span v-else class="badge bg-warning-subtle text-dark">Not Complete</span>
                                    </li>
                                    <li class="list-group-item">
                                        <span>PAYMENT STATUS: </span>
                                        <span v-if="item.billing"
                                            class="badge bg-success-subtle text-dark">Complete</span>
                                        <span v-else class="badge bg-warning-subtle text-dark">Not Complete</span>
                                    </li>
                                    <li class="list-group-item">
                                        <span>INCOPRATION STATUS: </span>
                                        <span v-if="item.is_incorporated"
                                            class="badge bg-success-subtle text-dark">Incorporated</span>
                                        <span v-else class="badge bg-warning-subtle text-dark">Not Incorporated</span>
                                    </li>
                                </ul>

                            </template>

                            <template #item-contact="item">
                                <!-- Some borders are removed -->
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <span>Name:</span>
                                        <span>{{ item?.main_contact?.name }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        <span>Email:</span>
                                        <span>{{ item?.main_contact?.email }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        <span>Status:</span>
                                        <span v-if="item?.main_contact?.email_verified_at">
                                            <span class="badge bg-success-subtle text-dark ms-2">Verified</span>
                                        </span>
                                        <span v-else>
                                            <span class="badge bg-warning-subtle text-dark ms-2">Not Verified</span>
                                        </span>
                                    </li>

                                </ul>

                            </template>
                            <template #item-is_paid="item">
                                <span v-if="item.is_paid === 1" class="badge bg-success-subtle text-dark">Paid</span>
                                <span v-else class="badge bg-warning-subtle text-dark">Pending</span>
                            </template>


                            <template #item-services="item">
                                <div>{{ displayServices(item.services) }}</div>
                                <button @click="openServicesModal(item.services, item.id)"
                                    class="btn btn-secondary py-0 p-1 btn-sm xsmall mt-1 text-nowrap">
                                    Update <i class="bi bi-plus-lg"></i>
                                </button>
                            </template>

                            <template #item-action="item">
                                <!-- Some borders are removed -->
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <router-link @click="paramsStore.currentCompanyId = item.id"
                                            class="text-decoration-none" to="/admin/company">
                                            <i class="bi bi-exclamation-circle"></i> Details
                                        </router-link>
                                    </li>
                                    <li class="list-group-item">

                                        <router-link @click="startCompany.currentCompanyId = item.id"
                                            class="text-decoration-none" :to="`/admin/company-edit?company=${item.id}`">
                                            <i class="bi bi-eye-fill"></i> View form
                                        </router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <span v-for="doc in JSON.parse(item?.pdf_doc)">
                                            <a class="text-decoration-none" :href="doc" target="_blank"> <i
                                                    class="bi bi-eye-fill"></i> View PDF</a>
                                        </span>
                                    </li>
                                </ul>
                            </template>

                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- modal for  services start -->
    <button ref="servicesModalToggle" type="button" class="btn d-none" data-bs-toggle="modal" data-bs-target="#modalId">
    </button>

    <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
        aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">
                        Services
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="fixed-label-custom">
                        <!-- {{servicesList}} -->
                        <!-- <input list="Services" v-model="servicesOnModal" class="form-control" multiple="true">  
                        <datalist id="Services"> 
                            <option v-for="item in servicesList" :key="item.id" :value="item.name" :multiple="true"> {{item.name}} </option>
                        </datalist> -->
                        <v-select :multiple="true" v-model="servicesOnModal" :clearable="true"
                            :options="servicesOnDropDown" taggable />
                        <label class="" for="nameeee">Services:</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button :disabled="isSavingServices" @click="servicesStore" type="button" class="btn btn-primary">
                        Update Services
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal for  services end -->
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue';
import api from '@/stores/Helpers/axios'
import { useAdminParamsStore } from './CompanyDetails/adminParamsStore';
import { onBeforeRouteLeave } from 'vue-router';
import { useStartCompanyStore } from './CompanyDetails/StartCompany_edit/AdminStartCompany_store'


const paramsStore = useAdminParamsStore()
const startCompany = useStartCompanyStore()





const searchCompany = ref('')
const companies = reactive<any>({
    list: [],
    form_completed: [],
    is_incorporated: [],
    isLoading: true
})


const computedCoyName = (coy: any) => {
    const id = coy.id
    console.log(companies.list)
    const names = companies.list.find((x: any) => x.id == id).names
    const company = names.find((x: any) => x.choice_level == 1);
    const englishName = company?.eng_name ? company?.eng_name + ' ' + company?.eng_prefix : '';
    const chineseName = company?.chn_name ? company?.chn_name + ' ' + company?.chn_prefix : ''
    return `${englishName} ${chineseName}`;
}

const comapaniesList = ref<any>([])

const comapaniesData = ref<any>([])
async function getCompanyStats() {
    try {
        const resp = await api.getCompanyStats()
        comapaniesList.value = resp.data?.data.company ?? []
        comapaniesData.value = resp.data?.data ?? []
        // console.log(comapaniesList.value)
    } catch (error) {
        // 
    }
}


const servicesList = ref<any>([])
async function getServices() {
    try {
        const resp = await api.adminServices()
        servicesList.value = resp.data?.data ?? []
        // console.log(servicesList.value)
    } catch (error) {
        // 
    }
}

onMounted(async () => {
    await getServices()
    getCompanies()
    getCompanyStats()
})

onBeforeRouteLeave(() => {
    // servicesModalToggle.value.click()
    paramsStore.isCompaniesByUser = ''
})

async function getCompanies() {
    try {

        const resp = paramsStore.isCompaniesByUser ?
            await api.getCompaniesByUserID(paramsStore.isCompaniesByUser) :
            await api.getCompanies()

        const data = resp.data.data
        companies.list = data.companies
        // console.log(companies, 'companiescompanies')
        companies.form_completed = data.form_completed
        companies.is_incorporated = data.is_incorporated
        companies.isLoading = false

        loadChartSeries()
    } catch (error) {

    }
}

// table
const headers = [
    { text: "COMPANY NAME", value: "name" },
    { text: "REGISTRATION NUMBER", value: "business_reg_no" },
    { text: "INCORPORATION STATUSES", value: "incorporation_statuses" },
    { text: "MAIN CONTACT", value: "contact" },
    { text: "SERVICE", value: "services" },
    { text: "PAYMENT STATUS", value: "is_paid" },
    // { text: "INCOPRATION STATUS", value: "is_incorporated" },
    { text: "ACTION", value: "action" },
];

const displayServices = (services: any) => {
    try {
        return !services ? '' : JSON.parse(JSON.parse(services)).toString()
    } catch (error) {
        return ''
    }
}


const pieChartSeriesActiveCoys = ref<any>([1, 1])
const pieChartSeriesPendingIncop = ref<any>([1, 1])
const pieChartSeriesIncoporated = ref<any>([1, 1])


function loadChartSeries() {
    pieChartSeriesActiveCoys.value = [companies.list.length, companies.list.length]
    pieChartSeriesPendingIncop.value = [companies.list.length - companies.is_incorporated.length, companies.list.length - (companies.list.length - companies.is_incorporated.length)]
    pieChartSeriesIncoporated.value = [companies.is_incorporated.length, companies.list.length - companies.is_incorporated.length]
}


// active coys chart
const pieChartOptionsActiveCoys = {
    colors: ["#064608", "#46320633"],
    chart: {
        type: "pie",
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    responsive: [
        {
            // breakpoint: 480,
            options: {
                chart: {
                    // width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
}

// Pending incop chart
const pieChartOptionsPendingIncop = {
    colors: ["#16497c", "#46320633"],
    chart: {
        type: "pie",
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    responsive: [
        {
            // breakpoint: 480,
            options: {
                chart: {
                    // width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
}

//  incop chart
const pieChartOptionsIncomporated = {
    colors: ["#463206", "#46320633"],
    chart: {
        type: "pie",
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    responsive: [
        {
            // breakpoint: 480,
            options: {
                chart: {
                    // width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
}




// services Edit
const servicesModalToggle = ref<any>(null)
const isSavingServices = ref<boolean>(false)
const servicesOnModal = ref<any>([])
const companyIdOnServicesModal = ref<number | string>('')
const servicesOnDropDown = computed(() => {
    let $array: any[] = []
    if (servicesList.value.length) {
        $array = servicesList.value.map((x: any) => x.name)
    }

    return $array;
})

function openServicesModal(services: string, company_id: number) {
    try {
        servicesOnModal.value = services ? JSON.parse(JSON.parse(services)) : [];
    } catch (error) { }
    companyIdOnServicesModal.value = company_id
    servicesModalToggle.value.click()

}

async function servicesStore() {
    try {
        isSavingServices.value = true
        const form = new FormData();
        form.append('service', JSON.stringify(servicesOnModal.value))
        const resp = await api.adminServicesStore(form, companyIdOnServicesModal.value)
        servicesModalToggle.value.click()
        isSavingServices.value = false
        getCompanies()
        getServices()
    } catch (error) {
        isSavingServices.value = false
        // 
    }
}



</script>
<style lang="css" scoped>
.list-group-item {
    padding-left: 0px;
    background: transparent;
    padding-block: 13px;
}

.big-text {
    font-size: 1.65rem;
}

.img-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--bs-light);
    border: 1px solid #e8e5e5;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.card {
    border: 1px solid #0000000f;
}
</style>