<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Source of funds</div>
                <span>Source of funds</span>
            </section>

            <section class="row g-2">
                <div class="col-md-8">
                    <label class=" fw-bolder">Expected source of funds</label>
                    <select class="form-select">
                    </select>
                </div>

                <div class="col-md-8">
                    <label class=" fw-bolder">Original source of funds</label>
                    <select class="form-select">
                    </select>
                </div>

                <div class="fw-bolder fs-5">Source of Wealth</div>

                <div class="col-md-8">
                    <label class=" fw-bolder">Initial source of wealth</label>
                    <select class="form-select">
                    </select>
                </div>

                <div class="col-md-8">
                    <label class="fw-bolder">Ongoing source of wealth</label>
                    <select class="form-select">
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
            <section>
                <div class="fw-bold">
                    Why do I need to disclose the source of 

funds and wealth?
                </div>
                <div>
                    Disclosure of the source of funds and wealth is a regulatory requirement to comply with anti-money laundering laws. It helps maintain financial transparency and accountability.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    What qualifies as a source of funds?
                </div>
                <div>
                    The source of funds refers to the origin of the capital you will invest in the company, such as personal savings, loan or credit, investment income, or any other legitimate source.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    Can the source of wealth and source of 

funds be the same?
                </div>
                <div>
                    Yes, they can be the same if your initial wealth, which is funding the company, comes from a consistent ongoing source, such as a business or employment income.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';

import Founders_corporate from './Founders_corporate.vue';
import Founders_individual from './Founders_individual.vue';

const founderType = ref<'individual' | 'corporate'>('individual')

function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

const startCompanyStore = useStartCompanyStore()

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
