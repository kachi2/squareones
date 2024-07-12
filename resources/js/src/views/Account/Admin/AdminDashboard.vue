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
                                            <apexchart type="bar" :options="chartOptions_2"
                                                :series="chartOptions_1.series">
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
                        <div class="table-responsive small">
                            <table class="table table-sm text-nowrap">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Action</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>New Signin Request</td>
                                        <td>01/6/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>Registered New Company</td>
                                        <td>02/6/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>Completed KYC Verfication</td>
                                        <td>03/6/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>New Signin Request</td>
                                        <td>04/6/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Kachi</td>
                                        <td>Registered Company</td>
                                        <td>02/5/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>Completed Signature Signing</td>
                                        <td>03/5/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>Send Team Invitation</td>
                                        <td>06/6/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>
                                    <tr v-for="i in 1">
                                        <td class="text-primary cursor-pointer">#Michael</td>
                                        <td>New Signin Request</td>
                                        <td>06/6/2024</td>
                                        <td><span class="text-success fw-bold">Succeed</span> </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
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
import { onMounted, reactive, ref } from 'vue';
import useFxn from '@/stores/Helpers/useFunctions';
import { useDateFormat } from '@vueuse/core';

const route = useRoute()

onMounted(() => {
    setDateRanges()
    getCompanyStats()
    getRevenueStats()
})


// date picker

const company_start_date = ref(new Date())
const company_end_date = ref(new Date())

const revenue_start_date = ref(new Date())
const revenue_end_date = ref(new Date())


const companyStats = ref()
const revenueStats = ref()

const date_display = (date: Date[]) => {
    const dateMe1 = useDateFormat(date[0], 'MMM D, YYYY')
    const dateMe2 = useDateFormat(date[1], 'MMM D, YYYY')
    return `${dateMe1.value} - ${dateMe2.value}`;
}

function setDateRanges() {
    const endDate = new Date();
    const startDate = new Date(new Date().setDate(endDate.getDate() - 30));
    companyStats.value = revenueStats.value = [startDate, endDate];
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

const chartOptions_2 = {
    chart: {
        type: 'bar',
        // stacked: true,
    },
    dataLabels: {
        enabled: false
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
        data: [8, 0, 0, 0, 0, 0, 2]
    }],
    legend: {
        show: false
    },
    tooltip: {
        enabled: false,
    },
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
    border: 2px solid rgb(12 12 12 / 0%);
}
</style>