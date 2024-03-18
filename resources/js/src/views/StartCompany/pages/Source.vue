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
                    What are the basic requirements to be a founder?
                </div>
                <div>

                    A founder must be at least 18 years old.
                    There is no residency requirement to be
                    a founder, and our form allows for up to
                    6 founders to be registered.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    Yes, amendments to founder details can
                    be made post-incorporation.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    No, you must provide a physical
                    residential address as it is mandatory.
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
