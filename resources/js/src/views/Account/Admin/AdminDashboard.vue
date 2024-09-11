<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-4"> Overview</h5>
        <div class="row g-3">
           <div class="col-md-4 pb-3">
                <div class="card  border-0  shadow-sm h-70">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-12">
                                <span class="fs-4 fw-bold text-primary">{{comapaniesList?.total}}</span>
                                <div>
                                    <span class="small fw-bold">Total Companies</span> &nbsp;
                                    <small style="font-size:10px;" class=""> <span class=" text-info fw-bold">{{comapaniesList?.data?.thismonth}}</span> added this month</small>
                                </div>
                                <div>
                                    <span class="small badge bg-success">{{comapaniesList?.data?.active}} active </span> &nbsp;
                                    <span class="small badge bg-danger">{{comapaniesList?.data?.inactive}}  Inactive </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-70">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-12">
                                <span class="fs-4 fw-bold text-warning">{{comapaniesList?.data?.Unincorporated}}</span>
                                <div>
                                    <span class="small fw-bold">Pending Incorporation</span>
                                </div>
                                <div>
                                    <span class="small"> <span class="text-primary fw-bold">{{comapaniesList?.data?.thisMonthUnIncorporated}}</span> new company added this month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-70">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-12">
                                <span class="fs-4 fw-bold text-success">{{comapaniesList?.data?.incorporated??'0'}}</span>
                                <div>
                                    <span class="small fw-bold">Incorporated</span> 
                                </div>
                                <div>
                                    <span class="small"> <span class="text-primary fw-bold">{{comapaniesList?.data?.thisMonthIncorporated??'0'}}</span> new companies added this month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-md-3">
                <div class="card border-0 shadow-sm h-70">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div class="col-12">
                                <span class="fs-4 fw-bold text-mute">5</span>
                                <div>
                                    <span class="small"></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="col-lg-6">
                <div class="row g-3">
                    <div class="col-md-12">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-header bg-transparent border-0 fw-bold py-4 ">
                                    <h5>Registered Companies</h5>
                                    <div class="float-en m-0">
                                        <VueDatePicker class="small" :format="date_display" range multi-calendars
                                            :clearable="false" :enable-time-picker="false" auto-apply
                                            v-model="companyStatsDates">
                                        </VueDatePicker>
                                    </div>
                                </h5>
                                <div class="fw-bold">
                                    <span class="samll text-mute">Total Company Registered since
                                        {{ companyStatsDates ? date_display(companyStatsDates) : '' }}
                                    </span>
                                </div>
                                <div class="row g-3">
                                    <div class="col-lg-12">
                                        <div class="smal fw-bold ">
                                            {{ comapaniesList.length }}
                                            {{ comapaniesList.length == 1 ? 'company' : 'companies' }}
                                        </div>
                                        <div class="small text-mute">
                                            <!-- <span class="text-danger me-3">
                                                <i class="bi bi-arrow-down"></i>
                                                1.93 %
                                            </span> -->
                                            <!-- <span>since last month</span> -->
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="card p-0">
                                            <apexchart type="area" :options="chartOptionsRegisteredCompanies"
                                                :series="chartOptionsRegisteredCompaniesSeries">
                                            </apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card shadow-sm h-100">

                    <!-- <div class="card-body">
                        <h5 class="card-header bg-transparent border-0  py-4">
                            Recent Activities
                        </h5>
                        <EasyDataTable class="easy-data-table border-0" :headers="activitiiesHeaders"
                            :items="activityLogs" buttons-pagination v-model:server-options="serverOptionsActivities"
                            :server-items-length="totalActivities">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-action_status="item">
                                <span v-if="item.action_status == 'COMPLETED'">
                                    <span class="badge rounded-pill text-bg-success">{{ item.action_status }}</span>
                                </span>
                                <span v-else>
                                    <span class="badge rounded-pill text-bg-warning">{{ item.action_status }}</span>
                                </span>
                            </template>

                            <template #item-updated_at="item">
                                {{ new Date(item.updated_at).toLocaleString() }}
                            </template>
                        </EasyDataTable>
                    </div> -->
                    <div class="card-body">
                        <h5 class="card-header bg-transparent border-1  py-1">
                            Recent Activities
                        </h5>
                        <ul class="list-group list-group-flush">
                            <li v-for="activty in activityLogs" class="list-group-item px-0">
                                <div class="row justify-content-left align-items-left px-3">
                                    <!-- <div class="col-1 col-lg-1 pe-1">
                                        <div class="img-cirle">
                                            <i class="bi bi-person-circle"></i>
                                        </div>

                                    </div> -->
                                    <div class="col-10">
                                       <span class="text-primary fw-bold"> {{activty.name}}</span> 
                                        <div class="small text-muted"> <span class="text-info"> Action:</span> {{activty.action}}</div>
                                        <div class="small text-muted"><span class="text-primary">IP:</span> {{activty.ip_address}}</div>
                                        <div class="small text-muted"><span class="text-info">Location:</span> {{activty.location}}</div>
                                        <div class="small text-muted">  <span class="text-primary">Date:</span>   {{ new Date(activty.updated_at).toLocaleString() }}</div>
                                    </div>
                                </div>

                            </li>

                        </ul>

                    </div> 
                </div>
            </div>

            <div class="col-12">
                <div class="card">

                    <div class="card-body">
                        <div class="card-header fw-bold bg-transparent border-0 py-3">
                            <div class="d-lg-flex justify-content-center g-3 align-items-center">
                                <div class="col-md-8">
                                    <h5>Transaction History</h5>
                                </div>
                                <div class="col-md-4">
                                    <VueDatePicker :format="date_display" range multi-calendars :clearable="false"
                                        :enable-time-picker="false" auto-apply v-model="revenueDates">
                                    </VueDatePicker>

                                </div>
                            </div>
                        </div>
                        <EasyDataTable class="easy-data-table border-0" show-index :headers="revenueHeader"
                            :items="revenueLogs" buttons-pagination v-model:server-options="serverOptionsRevenues"
                            :server-items-length="totalRevenues">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-action_status="item">
                                <span v-if="item.action_status == 'COMPLETED'">
                                    <span class="badge rounded-pill text-bg-success">{{ item.action_status }}</span>
                                </span>
                                <span v-else>
                                    <span class="badge rounded-pill text-bg-warning">{{ item.action_status }}</span>
                                </span>
                            </template>

                            <template #item-updated_at="item">
                                {{ new Date(item.updated_at).toLocaleString() }}
                            </template>

                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import api from '@/stores/Helpers/axios'
import { computed, onMounted, reactive, ref, watch } from 'vue';
import useFxn from '@/stores/Helpers/useFunctions';
import { useDateFormat } from '@vueuse/core';
import type { ServerOptions } from 'vue3-easy-data-table';

const route = useRoute()

onMounted(() => {
    autoSetDateRanges()
    getCompanyStats()
    getRevenueStats()

    getActivityLogs()
    setChartOptions()
})


const date_display = (date: Date[]) => {
    const dateMe1 = useDateFormat(date[0], 'MMM D, YYYY')
    const dateMe2 = useDateFormat(date[1], 'MMM D, YYYY')
    return `${dateMe1.value} - ${dateMe2.value}`;
}

function autoSetDateRanges() {
    const endDate = new Date();
    const startDate = new Date(new Date().setDate(endDate.getDate() - 7));
    companyStatsDates.value = revenueDates.value = [startDate, endDate];
}





// chart
const companyStatsDates = ref<any>([])
const comapaniesList = ref<any>([])
const generatedDatesRanges = computed(() => {
    const startDate = new Date(companyStatsDates.value[0]);
    const endDate = new Date(companyStatsDates.value[1]);

    const dateArray = [];
    while (startDate <= endDate) {
        const formattedDate = startDate.toISOString().split('T')[0];
        dateArray.push(formattedDate);
        startDate.setDate(startDate.getDate() + 1);
    }
    return dateArray;
})

watch(() => companyStatsDates.value, async () => {
    await getCompanyStats()
    setChartOptions()
})
const chartOptionsRegisteredCompanies = ref<any>({})
const chartOptionsRegisteredCompaniesSeries = ref<any>([{ name: 'Companies', data: [] }])
function setChartOptions() {
    chartOptionsRegisteredCompanies.value = {
        chart: {
            type: 'area',
            zoom: {
                enabled: false,
            },
            // stacked: true,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            // curve: ['smooth', 'straight', 'stepline'],
            show: true,
            curve: 'smooth',
            lineCap: 'round', //butt, square
            // colors: undefined,
            width: 1,
            dashArray: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                // shade: 'light',
                gradientToColors: ['#ccc'],
                shadeIntensity: 0,
                inverseColors: true,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 75],
            },
        },
        states: {
            hover: {
                enabled: true,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: generatedDatesRanges.value,
            type: "datetime",
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yyyy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                }
            }
        },
        // yaxis: {
        //     labels: {
        //         style: {
        //             colors: '#ccc',
        //         }
        //     }
        // },
        colors: ['#0d6efd', '#7B61FF'],
        legend: {
            show: false
        },
        tooltip: {
            enabled: true,
        },
    }

    const numberOfCompaniesArray: any[] = []

    generatedDatesRanges.value.forEach(range => {
        const count = comapaniesList.value.filter((x: any) => new Date(x.created_at).toDateString() == new Date(range).toDateString())
        numberOfCompaniesArray.push(count.length)
    });

    chartOptionsRegisteredCompaniesSeries.value = [{ name: 'Companies', data: numberOfCompaniesArray }]

}


async function getCompanyStats() {
    try {
        const queryObj = {
            start_date: useFxn.formatDate(companyStatsDates.value[0]),
            end_date: useFxn.formatDate(companyStatsDates.value[1])
        }
        const resp = await api.getCompanyStats(queryObj)
        comapaniesList.value = resp.data?.data ?? []
        console.log(comapaniesList.value)
    } catch (error) {
        // 
    }
}




// activity logs
const totalActivities = ref(0)
const activityLogs = ref<any[]>([])
const serverOptionsActivities = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
});

async function getActivityLogs() {
    try {
        const queryString = new URLSearchParams(serverOptionsActivities.value).toString();
        const resp = await api.UserctivityLog(queryString)
        const data = resp.data.data
        totalActivities.value = data.total
        activityLogs.value = data.data
    } catch (error) {
        // 
    }
}

watch(serverOptionsActivities, (value) => { getActivityLogs(); }, { deep: true });

const activitiiesHeaders = [
    { text: "Name", value: "name" },
    // { text: "Activity   ", value: "type" },
    { text: "Action", value: "action" },
    { text: "IP Address", value: "ip_address" },
    { text: "Location", value: "location" },
    { text: "DATE", value: "updated_at" },
];





// transaction/revenue logs
const revenueDates = ref<any>([])
const totalRevenues = ref(0)
const revenueLogs = ref<any[]>([])
const serverOptionsRevenues = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
});

async function getRevenueStats() {
    try {
        const queryObj = {
            start_date: useFxn.formatDate(revenueDates.value[0]),
            end_date: useFxn.formatDate(revenueDates.value[1])
        }
        const resp = await api.getRevenueStats(queryObj)
        // const data = resp.data.data
        // totalRevenues.value = data.total
        // revenueLogs.value = data.data
    } catch (error) {
        // 
    }
}

watch(serverOptionsRevenues, (value) => { getRevenueStats(); }, { deep: true });
watch(revenueDates, (value) => { getRevenueStats(); }, { deep: true });

const revenueHeader = [
    { text: "ORDER NO.", value: "payment_ref" },
    { text: "CUSTOMER", value: "user.name" },
    { text: "DATE", value: "date_paid" },
    { text: "AMOUNT", value: "amount" },
    { text: "SATUS", value: "status" },
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
    border: 2px solid rgb(12 12 12 / 0%);
}
</style>