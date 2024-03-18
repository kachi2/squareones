<template>
    <h5 class="fw-bold page-title mb-4">{{ route.name }}</h5>
    <div class="row g-3">
        <div class="col-md-7">
            <div class="card h-100 border-0">
                <div class="card-body">
                    <div class="div fw-bold mb-2">RocketRides, Inc.</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-success me-2"></i>
                            Incorporate your company
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-success me-2"></i>
                            Stock issued for founders
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-success me-2"></i>
                            Purchase your shares
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-card-text me-2"></i>
                            File 83(b) election
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-briefcase me-2"></i>
                            Open a bank account
                        </li>

                    </ul>

                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="card border-0 h-100 bg-transparent">
                <div class="card-header fw-bold bg-transparent border-0 ps-0">Track Incorporation</div>
                <div class="card-body small bg-white rounded-3">
                    <!-- <div class="fw-bold mb-2 fs-5"></div> -->
                    <div class="fw-bold">Tax Ready</div>
                    <div class="text-muted">
                        To pay your company’s formation fee, make sure
                        you’re not using an anonymous IP address or a VPN.
                    </div>
                    <div> Tax ID (EIN) </div>
                    <hr>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-warning me-2"></i>
                            Set up company
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-warning me-2"></i>
                            Preparing Incorporation
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-warning me-2"></i>
                            Filling Documents
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-record-circle me-2"></i>
                            Company Incorporated
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-circle me-2"></i>
                            Tax ID Ready
                        </li>

                    </ul>
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
</style>