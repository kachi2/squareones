<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Company Secretary</div>
                <span>Company secretary details</span>
            </section>

            <section class="row g-2">
                <div class="col-md-12">
                    <label class=" fw-bolder">Type <i class="bi bi-lock-fill"></i></label>
                    <select disabled class="form-select">
                        <option seleted value="corporate">Corporate</option>
                        <option value="individual">Individual</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class=" fw-bolder">Name in English <i class="bi bi-lock-fill"></i></label>
                    <input disabled v-model="form.name" type="text" class="form-control" placeholder="Name in English">
                </div>
                <!-- <div class="col-md-8">
                    <label class=" fw-bolder">Name in Chinese</label>
                    <input v-model="form.chn_name" type="text" class="form-control" placeholder="Name in Chinese">
                </div> -->
                <div class="col-md-12">
                    <label class=" fw-bolder">Company registration no <i class="bi bi-lock-fill"></i></label>
                    <input disabled v-model="form.company_reg_no" type="text" class="form-control"
                        placeholder="Company registration no">
                </div>
                <div class="col-md-12">
                    <label class=" fw-bolder">Company license no <i class="bi bi-lock-fill"></i></label>
                    <input disabled v-model="form.licence_no" type="text" class="form-control"
                        placeholder="Company registration no">
                </div>
                <div class="col-md-12">
                    <label class=" fw-bolder">Country registered in <i class="bi bi-lock-fill"></i></label>
                    <select disabled class="form-select" v-model="form.country_registered">
                        <option selected value="Hong Kong">Hong Kong</option>
                    </select>
                </div>
            </section>


            <section class="section">
                <div class="fw-bolder pt-3">Address </div>
                <div class="row g-3 mt-1">
                    <div class="col-12">
                        <label class="form-label"> Flat／Floor／Block <i class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.flat" class="form-control" type="text"
                            placeholder="Flat／Floor／Block">
                        <!-- <small class=" text-danger">{{ form.errors.flat }}</small> -->
                    </div>
                    <div class="col-12">
                        <label class="form-label"> Building<i class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.building" class="form-control" type="text"
                            placeholder="Street number">
                        <!-- <small class=" text-danger">{{ form.errors.building }}</small> -->
                    </div>
                    <div class="col-12">
                        <label class="form-label"> Street／Estate／Lot／Village<i class="bi bi-lock-fill"></i></label>

                        <input disabled v-model="form.street" class="form-control" type="text" placeholder="City">
                        <!-- <small class=" text-danger">{{ form.errors.street }}</small> -->
                    </div>
                    <div class="col-12">
                        <label class="form-label">District／City／ Province／State／ Postal Code <i
                                class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.state" class="form-control" type="text" placeholder="State">
                        <!-- <small class=" text-danger">{{ form.errors.state }}</small> -->
                    </div>
                    <!-- <div class="col-12">
                        <label class="form-label">Postal Code: <i class="bi bi-lock-fill"></i></label>
                        <input disabled v-model="form.postal_code" class="form-control" type="text"
                            placeholder=" ">
                        <small class=" text-danger">{{ form.errors.postal_code }}</small>
                    </div> -->
                    <div class="col-md-12">
                        <label class="form-label">Country／Region <i class="bi bi-lock-fill"></i></label>
                        <v-select :disabled="true" placeholder="select country.." v-model="form.country"
                            :clearable="false" :options="startCompanyStore.countries" />
                        <!-- <small class=" text-danger">{{ form.errors.country }}</small> -->
                    </div>
                </div>
            </section>


            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-info me-3">
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

const startCompanyStore = useStartCompanyStore()

const form = reactive({
    name: 'Square One Limited',
    company_reg_no: '68891673',
    country_registered: 'Hong Kong',
    licence_no: 'TC000012',
    flat: 'Rooms 502-503, 5th Floor',
    building: 'Wanchai Commercial Centre',
    street: '194-204 Johnston Road',
    postal_code: '',
    country: 'Hong Kong',
    state: 'Wanchai',
    city: 'Wanchai',
})


function moveBack() {
    startCompanyStore.switchStage('-')
}

async function saveAndContinue() {
    const formData = new FormData();
    formData.append('company_id', startCompanyStore.companyInProgress?.id)
    await api.companySecretary(formData)
    startCompanyStore.getCompanyInProgress()
    startCompanyStore.switchStage('+')
}

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
