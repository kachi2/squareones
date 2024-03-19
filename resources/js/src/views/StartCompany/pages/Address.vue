<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Registered Address</div>
            </section>

            <section>
                <div class="fw-bold">Registered Office Address</div>

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
            <section>
                <div class="fw-bold">
                    What is registered office address?
                </div>
                <div>

                    A registered office address is the official legal address of a company where formal communications
                    and notices are sent.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    Why can’t I change the registered office address?
                </div>
                <div>
                    The registered office address provided is part of our initial services. You can update it to a new
                    address after the incorporation process is completed.
                </div>
            </section>
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
