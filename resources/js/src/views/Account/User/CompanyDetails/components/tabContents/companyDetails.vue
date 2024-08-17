<template>
    <div class="row g-3">
        <div :class="ToggleProgressBar, console.log(ToggleProgressBar, 'from d class')">
            <div class="card  h-100 shadow-sm">
                <div class="card-header fs-5 py-3 fw-bold bg-transparent border-0 ">Information
                    <!-- <span class="float-end">
                        <span class="dropdown">
                            <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-three-dots text-primary "></i>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-group list-group-flush ">
                                        <li @click="paramsStore.coyInfoModal = !paramsStore.coyInfoModal"
                                            class="dropdown-item" style="background-color: transparent !important;">
                                            <i class="bi bi-pencil-square"></i> Update
                                        </li>
                                    </ul>
                                </div>
                            </span>

                        </span>
                    </span> -->
                </div>
                <div class="card-body small  rounded-3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Company Name:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.registered_company[0]?.company_registered_name }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business Registration Number (BRN):
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.registered_company[0]?.business_registered_number }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Incorporation Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(paramsStore.currentCompanyData?.registered_company[0]?.incorporated_date)
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Company Structure:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.registered_company[0]?.company_structure }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Company Registered In:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.registered_company[0]?.company_registered }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business Classification:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.registered_company[0]?.business_classification }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="col-md-6" v-if="showProgress">
            <div class="card  h-100 shadow-sm" style="min-height: 400px;">
                <div class="card-header fs-5 py-3 fw-bold bg-transparent border-0 ">Incorporation
                    <span class="float-end">
                        <span class="dropdown">
                            <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <button type="button" @click="toggleClass(false)" class="btn btn-outline-danger btn-sm">
                                    X</button>
                                <!-- <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-group list-group-flush  ">
                                        <li @click="paramsStore.incopModal = !paramsStore.incopModal"
                                            class="dropdown-item" style="background-color: transparent !important;">
                                            <i class="bi bi-pencil-square"></i> edit
                                        </li>
                                    </ul>
                                </div> -->
                            </span>
                        </span>
                    </span>
                </div>
                <div class="card-body small rounded-3">
                    <!-- <div class="fw-bold mb-2 fs-5"></div> -->
                    <div class="fw-bold">Tax Ready</div>
                    <div class="text-mute my-3">
                        To pay your company’s formation fee, make sure
                        you’re not using an anonymous IP address or a VPN.
                    </div>
                    <div class="my-3"> Tax ID (EIN) </div>
                    <hr>

                    <div class="container mt-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-9">
                                <div class="progress-container">
                                    <div class="progress-line"></div>

                                    <i
                                        :class="status.a ? 'bi  bi-check-circle-fill text-success phase phase-1' : 'bi  bi-circle text-warning phase phase-1'"></i>
                                    <i
                                        :class="status.b ? 'bi  bi-check-circle-fill text-success phase phase-2' : 'bi  bi-circle text-warning phase phase-2'"></i>
                                    <i
                                        :class="status.c ? 'bi  bi-check-circle-fill text-success phase phase-3' : 'bi  bi-circle text-warning phase phase-3'"></i>
                                    <i
                                        :class="status.d ? 'bi  bi-check-circle-fill text-success phase phase-4' : 'bi  bi-circle text-warning phase phase-4'"></i>
                                    <i
                                        :class="status.e ? 'bi  bi-check-circle-fill text-success phase phase-5' : 'bi  bi-circle text-warning phase phase-5'"></i>

                                    <div class="phase-label phase-1">Set up <br> company</div>
                                    <div class="phase-label phase-2">Preparing <br> Incorporation
                                    </div>
                                    <div class="phase-label phase-3">Filling<br>Documents</div>
                                    <div class="phase-label phase-4">Company<br>Incorporated</div>
                                    <div class="phase-label phase-5">Tax ID<br>Ready</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card h-100 shadow-sm" style="border:none">
                <div class="fw-bold card-header py-3 fs-5 bg-transparent border-0"> Registered Office
                    and Contact
                    <!-- <span class="float-end">
                        <span class="dropdown">
                            <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-three-dots text-primary "></i>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-group list-group-flush ">
                                        <li @click="paramsStore.regOfficeModal = !paramsStore.regOfficeModal"
                                            class="dropdown-item" style="background-color: transparent !important;">
                                            <i class="bi bi-pencil-square"></i> Update
                                        </li>
                                    </ul>
                                </div>
                            </span>

                        </span>
                    </span> -->
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0 ">
                            Director:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.office_contract[0]?.directors }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Shareholder:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.office_contract[0]?.shareholders }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Company Secretary:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.office_contract[0]?.company_secretary }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Registered office:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.office_contract[0]?.registered_office }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business address:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.office_contract[0]?.business_address }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Designated Rep.:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.office_contract[0]?.scr_designated_representative }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 shadow-sm" style="border:none">
                <div class="card-header fs-5 py-3 fw-bold bg-transparent border-0 ">Compliance and Reporting
                    <!-- <span class="float-end">
                        <span class="dropdown">
                            <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-three-dots text-primary"></i>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-group list-group-flush  ">
                                        <li @click="paramsStore.complianceReportingModal = !paramsStore.complianceReportingModal"
                                            class="dropdown-item" style="background-color: transparent !important;">
                                            <i class="bi bi-pencil-square"></i> edit
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </span>
                    </span> -->
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-0">
                            Auditor:
                            <span class="float-end">
                                {{ paramsStore.currentCompanyData?.compliance_reporting[0]?.auditor_name }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Business Registration Renewal:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(paramsStore.currentCompanyData?.compliance_reporting[0]?.business_registration_renewal_date)
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Accounting Reference Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(paramsStore.currentCompanyData?.compliance_reporting[0]?.accounting_reference_date)
                                }}
                            </span>
                        </li>
                        <li class="list-group-item ps-0">
                            Annual Return Date:
                            <span class="float-end">
                                {{
                                    useFxn.dateDisplay(paramsStore.currentCompanyData?.compliance_reporting[0]?.annual_return_date)
                                }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- <coyInfoModal />
    <incopModal />
    <regOfficeModal />
    <ComplianceReportingModal /> -->

</template>



<script lang="ts" setup>
import useFxn from '@/stores/Helpers/useFunctions';
import { useParamsStore } from '../../paramsStore'
import coyInfoModal from '../modals/coyInfoModal.vue';
import incopModal from '../modals/incopModal.vue';
import regOfficeModal from '../modals/regOfficeModal.vue';
import ComplianceReportingModal from '../modals/complianceReportingModal.vue';
import { ref, onMounted, reactive, watch, computed } from 'vue';
import api from '@/stores/Helpers/axios'

const showProgress = ref(true)

// bg-white


function toggleClass(x: any) {
    showProgress.value = x;
    return showProgress.value;
}

const ToggleProgressBar = computed(() => { return showProgress.value ? 'col-md-6' : 'col-md-12' })

const paramsStore = useParamsStore()

let registered_company: any = ref('')

const status = reactive({
    a: false, b: false, c: false, d: false, e: false,
})

onMounted(async () => {
    updateProgress()
})

watch(() => paramsStore.hasUpdatedProgress, () => {
    updateProgress()
})

function updateProgress() {
    status.a = false; status.b = false; status.c = false; status.d = false; status.e = false
    registered_company = paramsStore.currentCompanyData?.registered_company[0]
    // console.log(registered_company.registration_progress_id, 'registered_company')
    if (registered_company?.registration_progress_id == 5) {
        status.a = true; status.b = true; status.c = true; status.d = true; status.e = true
    } else if (registered_company?.registration_progress_id == 4) {
        status.a = true; status.b = true; status.c = true; status.d = true
    } else if (registered_company?.registration_progress_id == 3) {
        status.a = true; status.b = true; status.c = true
    } else if (registered_company?.registration_progress_id == 2) {
        status.a = true; status.b = true
    } else if (registered_company?.registration_progress_id == 1) {
        status.a = true
    } else {

    }

    // console.log(status);

}


</script>

<style lang="css" scoped>


/* .card{
    background-color: #212935;
    color:#fff;
}
.card-body{
    background-color:#212935;
    color:#fff;
}
.bg-white{
    background-color:#212935;
    color:#fff;
} */

/* Custom CSS for progress bar with phases */
.progress-container {
    position: relative;
    height: 50px;
}

.progress-line {
    width: 100%;
    height: 0.1px;
    background-color: var(--bs-warning);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}


.phase {
    position: absolute;
    top: 50%;
    font-size: 1.2rem;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    fill: aqua !important;
}

.phase-label {
    position: absolute;
    top: calc(50% + 50px);
    font-size: 0.8rem;
    text-align: center;
    transform: translate(-50%, -50%);
}

/* Adjust phase positions */
.phase-1 {
    left: 0%;
}

.phase-2 {
    left: 25%;
}

.phase-3 {
    left: 50%;
}

.phase-4 {
    left: 75%;
}

.phase-5 {
    /* right: 0%; */
    left: 100%;
}

.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>
