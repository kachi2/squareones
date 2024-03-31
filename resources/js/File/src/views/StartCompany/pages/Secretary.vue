<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Company Secretary</div>
                <span>Company secretary details</span>
            </section>

            <section class="row g-2">
                <div class="col-md-8">
                    <label class=" fw-bolder">Type</label>
                    <select disabled class="form-select">
                        <option seleted value="corporate">Corporate</option>
                        <option value="individual">Individual</option>
                    </select>
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Name in English</label>
                    <input disabled v-model="form.name" type="text" class="form-control" placeholder="Name in English">
                </div>
                <!-- <div class="col-md-8">
                    <label class=" fw-bolder">Name in Chinese</label>
                    <input v-model="form.chn_name" type="text" class="form-control" placeholder="Name in Chinese">
                </div> -->
                <div class="col-md-8">
                    <label class=" fw-bolder">Company registration no</label>
                    <input disabled v-model="form.company_reg_no" type="text" class="form-control"
                        placeholder="Company registration no">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Company license no</label>
                    <input disabled v-model="form.licence_no" type="text" class="form-control"
                        placeholder="Company registration no">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Country registered in</label>
                    <select disabled class="form-select" v-model="form.country_registered">
                        <option selected value="Hong Kong">Hong Kong</option>
                    </select>
                </div>
            </section>


            <section class="section">
                <div class="fw-bolder">Address </div>
                <div class="row g-2 mt-1">
                    <div class="col-12">
                        <input disabled v-model="form.address" class="form-control" type="text"
                            placeholder="Flat／Floor／Block">
                    </div>
                    <div class="col-12">
                        <input disabled v-model="form.city" class="form-control" type="text" placeholder="City">
                    </div>
                    <div class="col-12">
                        <input disabled v-model="form.state" class="form-control" type="text" placeholder="State">
                    </div>
                    <!-- <div class="col-12">
                        <input disabled v-model="form.postal_code" class="form-control" type="text"
                            placeholder="Postal Code">
                    </div> -->
                    <div class="col-md-12">
                        <select disabled class="form-select" v-model="form.country">
                            <option selected value="Hong Kong">Hong Kong</option>
                        </select>
                    </div>
                </div>
            </section>


            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button @click="saveAndContinue" class="btn btn-primary">
                    Continue <i class="bi bi-arrow-right"></i>
                </button>

            </div>
        </template>

        <template #info>

        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';

import useFxn from '@/stores/Helpers/useFunctions';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = reactive({
    name: 'Square One Limited',
    company_reg_no: '68891673',
    country_registered: 'Hong Kong',
    licence_no: 'TC000012',
    address: 'Rooms 502-503, 5th Floor, Wanchai Commercial Centre',
    city: 'Wanchai',
    state: '194-204 Johnston Road',
    // postal_code: '68891673',
    country: 'Hong Kong',
})


function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinue() {
    startCompanyStore.switchStage('+')
}

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
