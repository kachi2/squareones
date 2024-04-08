<template>

    <h5 class="fw-bold page-title mb-4">Company Registers</h5>
    <div class="row g-3">
        <div class="col-12">
            <div class="fw-bold mb-1">Register of Directors</div>
            <div class="card border-0">
                <div class="card-body">
                    <div class="table-responsive small">
                        <table class="table table-sm text-nowra">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date of Appointment</th>
                                    <th>Date of Appointment</th>
                                    <th>ID/ Passport/Registration No</th>
                                    <th>Residential Address/Registered Office</th>
                                    <th>Ceasing to Act</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>..</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>..</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="fw-bold mb-1">Register of Shareholders</div>
            <div class="card border-0">
                <div class="card-body">
                    <div class="table-responsive small">
                        <table class="table table-sm text-nowrap">
                            <thead>
                                <tr>
                                    <th>Name and Address </th>
                                    <th>Class of Shares</th>
                                    <th>Denomination</th>
                                    <th>Total Consideration (HKD)</th>
                                    <th>Date Entered As a Member</th>
                                    <th>Date Ceases to Be a Member</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>ABC Street</td>
                                    <td>123456</td>
                                    <td>123456</td>
                                    <td>31 Jan, 2024</td>
                                    <td>31 Jan, 2024</td>
                                </tr>
                                <tr>
                                    <td>.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()
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
    /* Adjust height as needed */
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
    font-size: 0.8rem;
    white-space: nowrap;
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
    right: 0%;
    left: 100%;
}
</style>