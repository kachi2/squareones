<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-2"> Companies Overview</h5>
        <div class="mb-3"> Have a Glance of this company Informaiton</div>
        <div class="row g-3 mb-5">

            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h2 class="fw-bold">{{ companies.list.length }}
                            <span class="float-end small"><i class="bi bi-journal-check"></i></span>
                        </h2>
                        <div class="text-mute"> {{ companies.list.length == 1 ? 'company' : 'companies' }}
                            registered
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h2 class="fw-bold">0
                            <span class="float-end small"><i class="bi bi-house"></i></span>
                        </h2>
                        <div class="text-mute">companies Pending Incorporation</div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h2 class="fw-bold">0
                            <span class="float-end small"><i class="bi bi-cash"></i></span>
                        </h2>
                        <div class="text-mute">companies Incorporated</div>
                    </div>
                </div>
            </div>


            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-header bg-transparent fw-bold py-3 border-0">
                        Registered Companies ({{ companies.list.length }})<br>
                        <small> List of all registered company using the company formation</small>

                        <span style="float:right">
                            <input placeholder="Search Item" style="border:1px solid #eee" class="form-control">
                        </span>
                    </div>


                    <isLoadingComponent v-if="companies.isLoading" />

                    <div v-else class="card-body">

                        <EasyDataTable style="border:1px solid #eee" class="easy-data-table" :headers="headers"
                            :items="companies.list" buttons-pagination>
                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-name="item">
                                {{ computedCoyName(item) }}
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

                            <template #item-action="item">
                                <router-link @click="paramsStore.currentCompanyId = item.id"
                                    class="text-decoration-none" to="/admin/company">
                                    <i class="bi bi-exclamation-circle"></i> Details
                                </router-link>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import api from '@/stores/Helpers/axios'
import { useAdminParamsStore } from './CompanyDetails/adminParamsStore';
import { onBeforeRouteLeave } from 'vue-router';

const paramsStore = useAdminParamsStore()

const companies = reactive<any>({
    list: [],
    form_completed: [],
    is_incorporated: [],
    isLoading: true
})


const computedCoyName = (coy: any) => {
    const id = coy.id
    const names = companies.list.find((x: any) => x.id == id).names
    const company = names.find((x: any) => x.choice_level == 1);
    const englishName = company?.eng_name ? company?.eng_name + ' ' + company?.eng_prefix : '';
    const chineseName = company?.chn_name ? company?.chn_name + ' ' + company?.chn_prefix : ''
    return `${englishName} ${chineseName}`;
}

onMounted(() => {
    getCompanies()
})

onBeforeRouteLeave(() => {
    paramsStore.isCompaniesByUser = ''
})

async function getCompanies() {
    try {

        const resp = paramsStore.isCompaniesByUser ?
            await api.getCompaniesByUserID(paramsStore.isCompaniesByUser) :
            await api.getCompanies()

        const data = resp.data.data
        companies.list = data.companies
        companies.form_completed = data.form_completed
        companies.is_incorporated = data.is_incorporated
        companies.isLoading = false
    } catch (error) {

    }
}

// table
const headers = [
    { text: "COMPANY NAME", value: "name" },
    { text: "REGISTRATION NUMBER", value: "business_reg_no" },
    { text: "INCORPORATION STATUSES", value: "incorporation_statuses" },
    { text: "MAIN CONTACT", value: "contact" },
    { text: "SERVICE", value: "company_services" },
    { text: "PAYMENT STATUS", value: "payment_status" },
    // { text: "INCOPRATION STATUS", value: "is_incorporated" },
    { text: "ACTION", value: "action" },
];

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
    border: 1px solid #0000000f
}
</style>
<!-- ./CompanyDetails/adminParamsStore -->