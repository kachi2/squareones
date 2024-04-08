<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Document Upload</div>
                <span>Complete your company registration</span>
            </section>

            <section class="row g-0">
                <div class="col-md-1 d-flex align-items-center">
                    <i class="bi bi-person-circle fs-4"></i>
                </div>
                <div class="col-md-7">
                    <div class="fw-bold">John Doe</div>
                    <div>Shareholder, Director</div>
                    <div>510,000,000/510,000,000 (HKD 510,000,000)</div>
                </div>
            </section>

            <section class="row g-2">
                <div class="col-lg-6">
                    <div class="fw-bold">Identification Proof</div>
                    <div>Hong Kong Identity Card Passport/
                        Travel Document/National Identity Card
                        Must have a photograph bearing the person</div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <select class="form-select ">
                    </select>
                </div>
            </section>

            <section class="row g-2">
                <div class="col-lg-6">
                    <div class="fw-bold">Address Proof </div>
                    <div>Your latest residential address proof showing your name Ing. stility bill or bank statement
                        issued (within the lest 3 months)</div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <select class="form-select ">
                    </select>
                </div>
            </section>

            <div class="movement-buttons my-5">
                <button @click="switchStage('-')" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button @click="switchStage('+')" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>
            </div>

        </template>

        <template #info>

        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';


function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

const startCompanyStore = useStartCompanyStore()
</script>
<style lang="css" scoped></style>
