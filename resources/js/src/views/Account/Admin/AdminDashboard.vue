<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-4"> Overview</h5>
        <div class="row g-3">
            <div class="col-lg-6">
                <div class="row g-3">
                    <div class="col-md-12">
                        <div class="card h-100">
                            <div
                                class="card-header bg-transparent border-0 fw-bold d-flex justify-content-lg-between align-items-center">
                                Registered Companies
                                <span class="float-en m-0">
                                    <VueDatePicker class="small" :format="date_display" range multi-calendars
                                        :clearable="false" :max-date="new Date()" :enable-time-picker="false" auto-apply
                                        v-model="companyStats">
                                    </VueDatePicker>
                                </span>
                            </div>
                            <div class="card-body">

                                <div class="fw-bold">
                                    <span class="samll text-mute">Total Company Registered since
                                        {{ companyStats ? date_display(companyStats) : '' }}
                                    </span>
                                </div>
                                <div class="row g-3">
                                    <div class="col-lg-12">
                                        <div class="small text-mute"> 2 Companies</div>
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
                                            <apexchart type="area" :options="chartOptionsRegCoys"
                                                :series="chartOptionsRegCoysSeries">
                                            </apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-12">
                        <div class="card">
                            <div
                                class="card-header bg-transparent border-0 fw-bold d-flex justify-content-lg-between align-items-center">
                                Total Revenue
                                <span class="float-en m-0">
                                    <VueDatePicker class="fw-bold small" :format="date_display" range multi-calendars
                                        :clearable="false" :max-date="new Date()" :enable-time-picker="false" auto-apply
                                        v-model="revenueStats">
                                    </VueDatePicker>
                                </span>
                            </div>
                            <div class="card-body">

                                <div class="fw-bold">
                                    <span class="samll text-muted">Paid amount

                                        from {{ revenueStats ? date_display(revenueStats) : '' }}
                                    </span>
                                </div>
                                <div class="row g-3">
                                    <div class="col-lg-12">
                                        <div class="big-text"> 5,000 HKD </div>
                                        <div class="small text-muted">
                                            <span class="text-danger me-3">
                                                <i class="bi bi-arrow-down"></i>
                                                1.93 %
                                            </span>
                                            <span>since last month</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="card p-0">
                                            <apexchart type="bar" :options="chartOptions_2"
                                                :series="chartOptions_2.series">
                                            </apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header bg-transparent fw-bold py-4">
                        Recent Activities
                        <!-- <span style="float:right">Filter</span> -->

                    </div>
                    <div class="card-body">
                        <EasyDataTable class="easy-data-table border-0" show-index :headers="activitiiesHeaders"
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
                    </div>
                    <!-- <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li v-for="i in 1" class="list-group-item px-0">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-2 col-lg-1 pe-0">
                                        <div class="img-cirle float-end">
                                            <i class="bi bi-person-circle"></i>
                                        </div>

                                    </div>
                                    <div class="col-10">
                                        Kate Just signed in
                                        <div class="small text-muted">2 hours ago</div>
                                    </div>
                                </div>

                            </li>
                            <li v-for="i in 2" class="list-group-item px-0">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-2 col-lg-1 pe-0">
                                        <div class="img-cirle float-end">
                                            <i class="bi bi-person-circle"></i>
                                        </div>

                                    </div>
                                    <div class="col-10">
                                        New Company is registered by Michael
                                        <div class="small text-muted">2 hours ago</div>
                                    </div>
                                </div>

                            </li>
                            <li v-for="i in 2" class="list-group-item px-0">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-2 col-lg-1 pe-0">
                                        <div class="img-cirle float-end">
                                            <i class="bi bi-person-circle"></i>
                                        </div>

                                    </div>
                                    <div class="col-10">
                                        Steve made payment of 5,000 to renew ABC company
                                        <div class="small text-muted">2 hours ago</div>
                                    </div>
                                </div>

                            </li>

                        </ul>

                    </div> -->
                </div>
            </div>

            <div class="col-12">
                <div class="card">
                    <div class="card-header fw-bold bg-transparent py-3">
                        Transaction History
                    </div>
                    <div class="card-body">
                        <div class="table-responsive small">
                            <table class="table table-sm text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Order No.</th>
                                        <th>Customer</th>
                                        <th>Date</th>
                                        <th>Ref</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="i in 2">
                                        <td class="text-primary cursor-pointer">#987653</td>
                                        <td>Michael</td>
                                        <td>04/6/2024</td>
                                        <td>SUB-2340981</td>
                                        <td><span class="fw-bold">5000</span> HKD</td>
                                        <td v-if="i == 1" class="text-warning fw-bold">
                                            <i class="bi bi-dot"></i> Due
                                        </td>
                                        <td v-else-if="i % 2 == 0" class="text-success fw-bold">
                                            <i class="bi bi-dot"></i> Paid
                                        </td>
                                        <td v-else class="text-danger fw-bold">
                                            <i class="bi bi-dot"></i> Cancelled
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
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
    setDateRanges()
    getCompanyStats()
    getRevenueStats()

    getActivityLogs()
    setChartOptions()
})


// date picker

const company_start_date = ref(new Date())
const company_end_date = ref(new Date())

const revenue_start_date = ref(new Date())
const revenue_end_date = ref(new Date())


const companyStats = ref<any>([])
const revenueStats = ref()

const date_display = (date: Date[]) => {
    const dateMe1 = useDateFormat(date[0], 'MMM D, YYYY')
    const dateMe2 = useDateFormat(date[1], 'MMM D, YYYY')
    return `${dateMe1.value} - ${dateMe2.value}`;
}

function setDateRanges() {
    const endDate = new Date();
    const startDate = new Date(new Date().setDate(endDate.getDate() - 7));
    companyStats.value = revenueStats.value = [startDate, endDate];
}

const dagesRangesArray = computed(() => {
    const startDate = new Date(companyStats.value[0]);
    const endDate = new Date(companyStats.value[1]);

    const dateArray = [];
    while (startDate <= endDate) {
        const formattedDate = startDate.toISOString().split('T')[0];
        dateArray.push(formattedDate);
        startDate.setDate(startDate.getDate() + 1);
    }
    return dateArray;
})

watch(() => companyStats.value, () => {
    setChartOptions()
})
const chartOptionsRegCoys = ref<any>({})
const chartOptionsRegCoysSeries = ref<any>([{ name: 'Companies', data: [2, 3, 4, 5, 0, 3] }])
function setChartOptions() {
    chartOptionsRegCoys.value = {
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
            categories: dagesRangesArray.value,
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

    chartOptionsRegCoysSeries.value = [{ name: 'Companies', data: useFxn.generateRandomNumbers(dagesRangesArray.value.length) }]
}


async function getCompanyStats() {
    try {
        const queryObj = {
            start_date: useFxn.formatDate(company_start_date.value),
            end_date: useFxn.formatDate(company_end_date.value)
        }
        const resp = await api.getCompanyStats(queryObj)
        // console.log(resp, 'coy_stats');

    } catch (error) {
        // 
    }
}


async function getRevenueStats() {
    try {
        const queryObj = {
            start_date: useFxn.formatDate(revenue_start_date.value),
            end_date: useFxn.formatDate(revenue_end_date.value)
        }
        const resp = await api.getRevenueStats(queryObj)
        // console.log(resp, 'rev_stats');

    } catch (error) {
        // 
    }
}

// chart
const chartOptions_1 = {
    chart: {
        type: 'bar',
        stacked: true,
    },
    dataLabels: {
        enabled: true
    },
    states: {
        hover: {
            enabled: false,
        }
    },
    zoom: {
        enabled: false
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
        categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    },
    colors: ['#FFB836', '#7B61FF'],
    series: [{
        name: 'Job Viewed',
        data: [0, 0, 2, 1, 0, 0, 0]
    }],
    legend: {
        show: false
    },
    tooltip: {
        enabled: false,
    },
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
        const resp = await api.activityLog(queryString)
        const data = resp.data.data
        totalActivities.value = data.total
        activityLogs.value = data.data
    } catch (error) {
        // 
    }
}

watch(serverOptionsActivities, (value) => { getActivityLogs(); }, { deep: true });



const activitiiesHeaders = [
    { text: "ACTIVITY", value: "activity" },
    { text: "TYPE", value: "type" },
    { text: "STATUS", value: "action_status" },
    { text: "DATE", value: "updated_at" },
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