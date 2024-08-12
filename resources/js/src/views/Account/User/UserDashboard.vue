<template>
  <div class="container">
    <h5 class="fw-bold page-title mb-2">Dashboard Overview</h5>
    <div class="">Have a Glance of this company Information.</div>
    <p>Manage your company in a single clicks, click on the
      navigation to view individual company details</p>
    <div class="row g-3">
      <!-- <div class="col-lg-12">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-9">
                <strong>
                 
                  {{ authStore.profileDataName.toUpperCase() }},</strong>
                <p>
                  Manage your company in a single clicks, click on the
                  navigation to view individual company details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="col-lg-5">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-header border-0 bg-transparent fw-bold">
            <i class="fw-bold bi bi-bell"></i> NOTIFICATIONS
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-1">
                <a href="" style="color: red; text-decoration: none">X</a>
              </div>
              <div class="col-md-8">
                <span v-if="!notifications.length" class="text-black"> No Notificatons</span>
                <span class="badge bg-secondary" style="border-radius: 5px">
                  {{ notifications[0]?.title }} 
                </span>
                <br />

                <span class="text-mute">  {{ notifications[0]?.content }} </span>
              </div>
              <div class="col-md-3 text-mute ">  {{ useFunctions.dateDisplay(notifications[0]?.created_at) }}</div>
            </div>
          </div>
        </div>
      </div> -->


      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body py-4">
            <div class="d-flex justify-content-between align-items-cente">
              <div class="col-8">
                Total Companies
                <div>
                  <span class="fs-4 fw-bold text-mute"> {{ companies.list.length }}</span>
                  <span class="small"></span>
                </div>
              </div>
              <div class="col-4">
                <div class="round bg-success-subtle">
                  <i class="bi bi-house-fill text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body py-4">
            <div class="d-flex justify-content-between align-items-cente">
              <div class="col-8">
                <span class="fs-4 fw-bold text-mute">{{ daysLeftFrom360Days }} Days</span><small> remaining</small>
                <div>
                  <span class="small">Annual Return</span>
                </div>
                <p> Next Renewal is 5th Dec, 2025</p>
              </div>
              <div class="col-5">
                <apexchart type="pie" :options="pieChartOptions" :series="pieChartSeries">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body py-4">
            <div class="d-flex justify-content-between align-items-cente">
              <div class="col-8">
                <span class="fs-4 fw-bold text-mute">{{ daysLeftFrom360Days }} Days</span>  <small> remaining</small>
                
                <div>
                  <span class="small">Next Payment in Jan 10th, 2025</span>
                </div>
                <p>Business Registration Renewal</p>
              </div>
              <div class="col-5">
                <apexchart type="pie" :options="pieChartOptions" :series="pieChartSeries">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-md-8">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-header border-0 bg-transparent">
            Sales this month
            <span class="float-end">
              <i class="bi bi-three-dots-vertical cursor-pointer"></i>
            </span>
          </div>
          <div class="card-body">
            <apexchart type="line" :options="chartOptions1" :series="chartOptions1.series">
            </apexchart>
          </div>
        </div>
      </div> -->

      <div class="col-md-12 ">
        <div class="card border-0 shadow-sm  h-100">
          <div class="card-header bg-transparent fw-bold py-4 border-0">
            Recent Activities
            <!-- <span style="float:right">Filter</span> -->
          </div>
          <div class="card-body">
            <isLoadingComponent v-if="itemsLoading" />
            <EasyDataTable v-else class="easy-data-table" show-index :headers="headersActivities" :items="items"
              buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

              <template #header="header">
                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
              </template>

              <template #item-updated_at="item">
                {{ useFxn.dateDisplay(item.updated_at) }}
              </template>

              <template #item-created_at="item">
                {{ useFxn.dateDisplay(item.created_at) }}
              </template>

            </EasyDataTable>

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
        <div class="row g-3">
          <!-- <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header border-0 bg-transparent">
                Contact Statuses
                <span class="float-end">
                  <i class="bi bi-three-dots-vertical cursor-pointer"></i>
                </span>
              </div>
              <div class="card-body">
                <apexchart type="pie" :options="pieChartOptions" :series="pieChartSeries">
                </apexchart>
              </div>
            </div>
          </div> -->
          <div class="col-12">
            <!-- <div class="card border-0 shadow-sm">
                            <div class="card-header border-0 bg-transparent">
                                Sales average
                                <span class="float-end">
                                    <i class="bi bi-three-dots-vertical cursor-pointer"></i>
                                </span>
                            </div>
                            <div class="card-body">
                                <div class="big-text fw-bold text-muted">
                                    216
                                </div>
                                <apexchart type="bar" :options="chartOptions3.options" :series="chartOptions3.series">
                                </apexchart>
                            </div>
                        </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import api from "@/stores/Helpers/axios";
import { useParamsStore } from "./CompanyDetails/paramsStore";
import { onBeforeRouteLeave } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import type { ServerOptions } from "vue3-easy-data-table";
const authStore = useAuthStore();
import useFxn from '@/stores/Helpers/useFunctions';
import useFunctions from '@/stores/Helpers/useFunctions';

const paramsStore = useParamsStore();

const userActivities = ref([])
const notifications = ref<any[]>([])

const companies = reactive<any>({
  list: [],
  form_completed: [],
  is_incorporated: [],
  isLoading: true,
});
async function getNotifications() {
  try {
    const resp = await api.userNotifications()
    notifications.value = resp.data?.data ?? []
  } catch (error) {

  }

}
const computedCoyName = (coy: any) => {
  const id = coy.id;
  const names = companies.list.find((x: any) => x.id == id).names;
  const company = names.find((x: any) => x.choice_level == 1);
  const englishName = company?.eng_name
    ? company.eng_name + " " + company.eng_prefix
    : "";
  const chineseName = company.chn_name
    ? company.chn_name + " " + company.chn_prefix
    : "";

  return `${englishName} ${chineseName}`;
};

onMounted(() => {
  getCompanies();
  getNotifications()
  getUserActivities();


  loadPieChartOptions()
});

async function getCompanies() {
  try {
    const resp = await api.getCompaniesByUserID(paramsStore.currentUserId);

    const data = resp.data.data;
    // console.log(data, 'compannnn');
    companies.list = data.companies;
    companies.form_completed = data.form_completed;
    companies.is_incorporated = data.is_incorporated;
    companies.isLoading = false;
  } catch (error) { }
}



// table
const headers = [
  { text: "COMPANY NAME", value: "name" },
  { text: "FORM FILLING STATUS", value: "is_complete" },
  { text: "PAYMENT STATUS", value: "billing" },
  { text: "INCOPRATION STATUS", value: "is_incorporated" },
  { text: "ACTION", value: "action" },
];

// chart
const chartOptions1 = {
  chart: {
    type: "line",
    // stacked: true,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  states: {
    hover: {
      enabled: false,
    },
  },
  zoom: {
    enabled: false,
  },
  responsive: [
    {
      // breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"],
  },
  colors: ["#7B61FF"],
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
};






const dateOfIncop = ref('2023-11-24')

const daysLeftFrom360Days = computed(() => {
  const dateString = dateOfIncop.value;
  const today: any = new Date();
  const nextDate: any = new Date(dateString);
  nextDate.setTime(nextDate.getTime() + (360 * 24 * 60 * 60 * 1000));

  const diffInMs = nextDate - today;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  console.log(diffInDays);

  return diffInDays;
})



const pieChartOptions = {
  colors: ["#92b3d5", "#16497c"],
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
const pieChartSeries = ref<any>([])

const loadPieChartOptions = () => {
  pieChartSeries.value = [daysLeftFrom360Days.value, 360 - daysLeftFrom360Days.value]
}


// Activities ##########################
async function getUserActivities() {
  try {
    const queryString = new URLSearchParams(serverOptions.value).toString();
    const resp = await api.userActivities(queryString)
    const data = resp.data.data
    total.value = data.total
    // items.value = data.data
    itemsLoading.value = false
  } catch (error) {
    // 
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

watch(serverOptions, (value) => { getUserActivities(); }, { deep: true });

const headersActivities = [
  { text: "NAME", value: "name" },
  { text: "TYPE", value: "type" },
  { text: "ACTION", value: "action" },
  { text: "DATE", value: "created_at" },
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

.round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
}
</style>
