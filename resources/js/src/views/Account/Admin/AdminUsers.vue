<template>
    <div class="container min-vh-100">
        <h5 class="fw-bold page-title mb-4"> Registerd Users</h5>
        <div class="row g-3">
            <div class="col-md-3">
                <div class="card  border-0  shadow-sm h-100">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-6">
                                <span class="fs-4 fw-bold text-mute">20</span>
                                <div>
                                    <span class="small">Registered Users</span>
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
            <div class="col-md-3">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-6">
                                <span class="fs-4 fw-bold text-mute">8/20</span>
                                <div>
                                    <span class="small">Active Users</span>
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
            <div class="col-md-3">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-7">
                                <span class="fs-4 fw-bold text-mute">5</span>
                                <div>
                                    <span class="small">New Users</span> <br>
                                    <small style="color:green"> 2 this week</small>
                                </div>
                            </div>
                            <div class="col-5">
                                <apexchart type="pie" :options="pieChartOptionsIncomporated"
                                    :series="pieChartSeriesIncoporated">
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body ">
                        <div class="row justify-content-between align-items-cente">
                            <div class="col-6">
                                <span class="fs-4 fw-bold text-mute">5</span>
                                <div>
                                    <span class="small">Total Verified Users</span> <br>

                                </div>
                            </div>
                            <div class="col-6">
                                <apexchart type="pie" :options="pieChartOptionsIncomporated"
                                    :series="pieChartSeriesIncoporated">
                                </apexchart>
                            </div>
                            <div class="col-12">
                                <small style="color:red"> 10 pending unverified </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <isLoadingComponent v-if="itemsLoading" />
                        <EasyDataTable v-else class="easy-data-table" show-index :headers="headers" :items="items"
                            buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-last_login="item">
                                {{ useFxn.dateDisplay(item.last_login) }}
                            </template>
                            <template #item-created_at="item">
                                {{ useFxn.dateDisplay(item.created_at) }}
                            </template>

                            <template #item-status="item">
                                <span v-if="item.status == 1" class="badge bg-success-subtle text-dark"
                                    style="width: 60px;">ACTIVE</span>
                                <span v-else class="badge bg-warning-subtle text-dark"
                                    style="width: 60px;">DISABLED</span>
                            </template>
                            <template #item-kyc_status="item">
                                <span v-if="item.status != null" class="badge bg-success-subtle text-dark"
                                    style="width: 60px;">Completed</span>
                                <span v-else class="badge bg-warning-subtle text-dark"
                                    style="width: 60px;">pending</span>
                            </template>
                            <template #item-email_verified_at="item">
                                <span v-if="item.email_verified_at != null" class="badge bg-success-subtle text-dark"
                                    style="width: 60px;">verified</span>
                                <span v-else class="badge bg-warning-subtle text-dark"
                                    style="width: 60px;">pending</span>
                            </template>

                            <template #item-action="item">
                                <span class="dropdown">
                                    <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="bi bi-three-dots text-primary"></i>
                                        <div class="dropdown-menu dropdown-menu-start">
                                            <ul class="list-group list-group-flush  ">
                                                <li @click="goToUserCompanies(item.id)"
                                                    class="dropdown-item text-primary"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-eye"></i> Companies
                                                </li>
                                                <li @click="updateUserStatus(item.id, 2)" v-if="item.status == 1"
                                                    class="dropdown-item text-danger"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-exclamation-circle-fill"></i> Disable user
                                                </li>
                                                <li @click="updateUserStatus(item.id, 1)" v-else
                                                    class="dropdown-item text-success"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-check-circle-fill"></i> Activate user
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </span>
                            </template>

                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import api from '@/stores/Helpers/axios'
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from './CompanyDetails/adminParamsStore';
import { useRouter } from 'vue-router';


const paramsStore = useAdminParamsStore()
const router = useRouter()

onMounted(() => {
    getUsers()
})

async function getUsers() {
    try {
        const queryString = new URLSearchParams(serverOptions.value).toString();
        const resp = await api.getUsers(queryString)
        const data = resp.data.data
        total.value = data.total
        items.value = data.data
        itemsLoading.value = false
        // console.log('users:', data);
    } catch (error) {

    }
}


const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

const total = ref(0)
const items = ref([])
const itemsLoading = ref(true)
const headers = [
    { text: "Name", value: "name" },
    { text: "Email", value: "email" },
    { text: "Email Verification", value: "email_verified_at" },
    { text: "Status", value: "status" },
    { text: "Date Registered", value: "created_at" },
    { text: "Last Login", value: "last_login" },
    { text: "Kyc Status", value: "kyc_status" },
    { text: "Action", value: "action" },
];

watch(serverOptions, (value) => { getUsers(); }, { deep: true });

function goToUserCompanies(id: any) {
    paramsStore.isCompaniesByUser = id
    router.push({ path: '/admin/companies' })
}


async function updateUserStatus(user_id: any, status: any) {
    try {
        const formData = new FormData();
        formData.append('user_id', user_id);
        formData.append('status', status);
        await api.updateUserStatus(formData)
        getUsers()
    } catch (error) {
        // log error
    }
}




// active coys chart
const pieChartOptionsActiveCoys = {
    colors: ["#064608", "#b1f5b3"],
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
const pieChartSeriesActiveCoys = ref<any>([1, 9])








// Pending incop chart
const pieChartOptionsPendingIncop = {
    colors: ["#16497c", "#92b3d5"],
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
const pieChartSeriesPendingIncop = ref<any>([8, 2])





//  incop chart
const pieChartOptionsIncomporated = {
    colors: ["#463206", "#ecd29c"],
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
const pieChartSeriesIncoporated = ref<any>([3, 7])

</script>
<style lang="css" scoped>
.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>