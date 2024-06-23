<template>
  <div class="container">
    <h5 class="fw-bold page-title mb-2">Dashboard Overview</h5>
    <div class="mb-3">Have a Glance of this company Informaiton</div>
    <div class="row g-3">
      <div class="col-lg-7">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-9">
                <strong>Welcom back
                  {{ authStore.profileDataName.toUpperCase() }},</strong>
                <p>
                  Manage your company in a single clicks, click on the
                  navigation to view individual company details
                </p>
                <!-- <button class="btn btn-light mt-3">Learn More..</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5">
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
                <span class="badge bg-success" style="border-radius: 5px">
                  Company Incorporated
                </span>
                <br />

                <span class="text-mute"> Your company Mikky123 is updated to incorporated status Click on
                  the company tag to view more information
                </span>
              </div>
              <div class="col-md-3 text-mute ">2/24/2025</div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body py-4">
            <div class="d-flex justify-content-between align-items-cente">
              <div class="col-8">
                Total Companies
                <div>
                  <span class="fs-4 fw-bold text-mute"> 5</span>
                  <span class="small"> from last this year</span>
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
                Incorporated Companies
                <div>
                  <span class="fs-4 fw-bold text-mute">1</span>
                  <span class="small"> this year</span>
                </div>
              </div>
              <div class="col-4">
                <div class="round bg-warning-subtle">
                  <i class="bi bi-house text-warning"></i>
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
                Pending Renewals
                <div>
                  <span class="fs-4 fw-bold text-mute">0</span>
                  <span class="small"> from this year</span>
                </div>
              </div>
              <div class="col-4">
                <div class="round bg-primary-subtle">
                  <i class="bi bi-cash text-primary"></i>
                </div>
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
                        <apexchart type="bar" :options="chartOptions1" :series="chartOptions1.series">
                        </apexchart>
                    </div>
                </div>
            </div> -->

      <div class="col-md-12 ">
        <div class="card border-0 shadow-sm  h-100">
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
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>New Signin Request</td>
                    <td>01/6/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>Registered New Company</td>
                    <td>02/6/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>Completed KYC Verfication</td>
                    <td>03/6/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>New Signin Request</td>
                    <td>04/6/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Kachi</td>
                    <td>Registered Company</td>
                    <td>02/5/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>Completed Signature Signing</td>
                    <td>03/5/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>Send Team Invitation</td>
                    <td>06/6/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                  <tr v-for="i in 1">
                    <td class="text-primary cursor-pointer">Michael</td>
                    <td>New Signin Request</td>
                    <td>06/6/2024</td>
                    <td><span class="text-success fw-bold">Succeed</span></td>
                  </tr>
                </tbody>
              </table>
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
                                <apexchart type="donut" :options="chartOptions2.options" :series="chartOptions2.series">
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
import { onMounted, reactive, ref } from "vue";
import api from "@/stores/Helpers/axios";
import { useParamsStore } from "./CompanyDetails/paramsStore";
import { onBeforeRouteLeave } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();

const paramsStore = useParamsStore();

const companies = reactive<any>({
  list: [],
  form_completed: [],
  is_incorporated: [],
  isLoading: true,
});

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
});

async function getCompanies() {
  try {
    const resp = await api.getCompaniesByUserID(paramsStore.currentUserId);

    const data = resp.data.data;
    // console.log(data);
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
    type: "bar",
    // stacked: true,
  },
  dataLabels: {
    enabled: true,
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
      breakpoint: 480,
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
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
  colors: ["#FFB836", "#7B61FF"],
  series: [
    {
      data: [0, 0, 0, 1, 0, 0, 1],
    },
    {
      data: [0, 0, 0, 2, 0, 0, 0],
    },
  ],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
};

const chartOptions2 = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const chartOptions3 = {
  series: [
    {
      data: ["1", "2", "3", "4", "5", "6", "7"],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        // horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["", "", "", "", "", "", ""],
    },
  },
};
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
