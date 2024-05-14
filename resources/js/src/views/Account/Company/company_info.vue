<template>
    <div v-if="companyInfoStore.currentPanel == 1">
        <div class="col-12">
            <div class="alert alert-dark bg-primary-subtle" role="alert">
                <div class="row gy-1">
                    <div class="col-lg-10">
                        <div class="fw-bold">
                            Company Incorporation in progress
                        </div>
                        <small>Complete your application, to set up your company</small>
                    </div>
                    <div class="col-lg-2 d-flex justify-content-lg-end align-items-lg-center">
                        <router-link class="btn btn-primary" to="/start_company">
                            Resume <i class="bi bi-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
        <h5 class="fw-bold page-title mb-4">{{ route.name }}</h5>
        <div class="row g-3">
            <div class="col-md-6">
                <div class="card border-0 h-100 bg-transparent">
                    <div class="card-header fw-bold bg-transparent border-0 ps-0">Track Incorporation</div>
                    <div class="card-body small bg-white rounded-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Company Name
                                <span class="float-end">ABC LIMITED</span>
                            </li>
                            <li class="list-group-item">
                                Business Registration Number (BRN)
                                <span class="float-end">12345456</span>
                            </li>
                            <li class="list-group-item">
                                Incorporation Date
                                <span class="float-end">12 Jan, 2024</span>
                            </li>
                            <li class="list-group-item">
                                Company Structure
                                <span class="float-end">Private limited by shares</span>
                            </li>
                            <li class="list-group-item">
                                Company Registered In <span class="float-end">Hong Kong</span>
                            </li>
                            <li class="list-group-item">
                                Business Classification <span class="float-end"> 658263-dsfdd;gfwyv:sd</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="col-md-6">
                <div class="card border-0 h-100 bg-transparent" style="min-height: 400px;">
                    <div class="card-header fw-bold bg-transparent border-0 ps-0">Track Incorporation</div>
                    <div class="card-body small bg-white rounded-3">
                        <!-- <div class="fw-bold mb-2 fs-5"></div> -->
                        <div class="fw-bold">Tax Ready</div>
                        <div class="text-muted my-3">
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
                                        <i class="bi  bi-check-circle-fill text-warning phase phase-1"></i>
                                        <i class="bi bi-check-circle-fill text-warning phase phase-2"></i>
                                        <i class="bi bi-check-circle-fill text-warning phase phase-3"></i>
                                        <i class="bi bi-record-circle text-warning phase phase-4"></i>
                                        <i class="bi bi-circle text-warning phase phase-5"></i>
                                        <div class="phase-label phase-1">Set up <br> company</div>
                                        <div class="phase-label phase-2">Preparing <br> Incorporation</div>
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
            <div class="col-12">
                <div class="fw-bold"> Registered Office and Contact </div>
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Directors</th>
                                        <th>Shareholders</th>
                                        <th>Company Secretary</th>
                                        <th>Registered Office</th>
                                        <th>Businness Adress</th>
                                        <th>Designated Representative</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>John Doe</td>
                                        <td>ABC Limited</td>
                                        <td>Lorem Ipsum dolor et al sin tupar tu</td>
                                        <td>Lorem Ipsum dolor et al sin tupar tu</td>
                                        <td>ABC limited</td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>John Doe</td>
                                        <td>ABC Limited</td>
                                        <td>Lorem Ipsum dolor et al sin tupar tu</td>
                                        <td>Lorem Ipsum dolor et al sin tupar tu</td>
                                        <td>ABC limited</td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>John Doe</td>
                                        <td>ABC Limited</td>
                                        <td>Lorem Ipsum dolor et al sin tupar tu</td>
                                        <td>Lorem Ipsum dolor et al sin tupar tu</td>
                                        <td>ABC limited</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5">
                <div class="fw-bold">Compliance and Reporting</div>
                <div class="card mt-2">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Auditor
                                <span class="float-end">XYZ CPA</span>
                            </li>
                            <li class="list-group-item">
                                Business Registration Renewal
                                <span class="float-end">29 Oct, 2025</span>
                            </li>
                            <li class="list-group-item">
                                Accounting Reference Date
                                <span class="float-end">31 March</span>
                            </li>
                            <li class="list-group-item">
                                Annual Return Date
                                <span class="float-end">12 Jan, 2025</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <company_info_registers1 v-if="companyInfoStore.currentPanel == 2" />
    <company_info_registers2 v-if="companyInfoStore.currentPanel == 3" />
    <company_info_registers3 v-if="companyInfoStore.currentPanel == 4" />

    <div class="mt-4">
        <customPagination :per-page="1" :total-records="4" :current-page="companyInfoStore.currentPanel"
            @move-to-next="moveToNext" />
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import customPagination from '@/components/customPagination.vue';
import { useCompanyInfoStore } from './company_info_store';
import company_info_registers1 from './company_info_registers1.vue';
import company_info_registers2 from './company_info_registers2.vue';
import company_info_registers3 from './company_info_registers3.vue';

const route = useRoute()
const companyInfoStore = useCompanyInfoStore()

function moveToNext(num: number) {
    companyInfoStore.switchForm(num)
}
</script>
<style lang="css" scoped>
.list-group-item {
    padding-left: 0px;
    background: transparent;
    padding-block: 13px;
}

th {
    font-weight: bolder;
}


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
</style>./company_info_registers1.vue
