<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Company Secretary</div>
                <span>Company secretary details</span>
            </section>

            <section class="row g-2">
                <div class="col-md-8">
                    <label class=" fw-bolder">Type</label>
                    <select class="form-select">
                    </select>
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Name in English</label>
                    <input type="text" class="form-control" placeholder="Name in English">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Name in Chinese</label>
                    <input type="text" class="form-control" placeholder="Name in Chinese">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Company registration no</label>
                    <input type="text" class="form-control" placeholder="Company registration no">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Country registered in</label>
                    <select class="form-select">
                        <option> HKG</option>
                    </select>
                </div>
            </section>


            <section>
                <div class="fw-bolder">Address </div>
                <div class="row g-2 mt-1">
                    <div class="col-12">
                        <input class="form-control" type="text" placeholder="Flat／Floor／Block">
                    </div>
                    <div class="col-12">
                        <input class="form-control" type="text" placeholder=" Building">
                    </div>
                    <div class="col-12">
                        <input class="form-control" type="text" placeholder="Street／Estate／Lot／Village etc">
                    </div>
                    <div class="col-12">
                        <input class="form-control" type="text" placeholder="District／City／ Province／ State／ Postal Code">
                    </div>
                    <div class="col-md-12">
                        <select class="form-select">
                            <option selected>Country／Region</option>
                        </select>
                    </div>
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
