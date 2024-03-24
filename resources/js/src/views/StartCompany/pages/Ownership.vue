<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Ownership</div>
            </section>

            <section>
                <div class="row g-1 mt-1">
                    <div class="col-md-6 col-lg-4">
                        <label class="form-label fw-bold small">Class of shares</label>
                        <div class="col-md-12">
                            <select class="form-select">
                                <option selected value="1">Ordinary</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <label class="form-label fw-bold small">Total no of shares</label>
                        <div class="col-md-12">
                            <input class="form-control" type="text" placeholder="Total no of shares">
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <label class="form-label fw-bold small">Currency</label>
                        <div class="col-md-12">
                            <select class="form-select">
                                <option> HK </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <label class="form-label fw-bold small">Total amount paid-off</label>
                        <div class="col-md-12">
                            <input class="form-control" type="text" placeholder="Total amount paid-off">
                        </div>
                    </div>
                </div>
            </section>

            <div class="my-3">Split the company shares between founders</div>

            <div class="row g-2">
                <div class="col-12">
                    <i class="bi bi-circle-fill text-primary me-2"></i> John doe
                    <span class="float-end">
                        <input type="text" class="form-control form-control-sm text-end" placeholder="100,000,000">
                    </span>
                </div>

                <hr class="mt-2 mb-0">

                <div class="col-lg-12">
                    <i class="bi bi-circle-fill text-danger me-2"></i> John doe
                    <span class="float-end text-end">
                        100,000,000
                    </span>
                </div>

                <div class="col-lg-12">
                    <span class="float-end text-end">
                        100% <i class="bi bi-check-circle text-success-emphasis"></i>
                    </span>
                </div>
            </div>

            <section>
                <div class="fw-bolder fs-6">Ownership Summary</div>
                <span>Here is how much founders own</span>
                <div class="card mt-1 rounded-0 border-0 bg-light">
                    <div class="card-body bg-transparent">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Split</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <i class="bi bi-circle-fill text-success me-2"></i> John doe
                                        </td>
                                        <td>51%</td>
                                    </tr>
                                    <tr class="">
                                        <td></td>
                                        <td>
                                            <i class="bi bi-circle-fill text-danger me-2"></i> John doe
                                        </td>
                                        <td>49%</td>
                                    </tr>
                                    <tr class="">
                                        <td></td>
                                        <td></td>
                                        <td>100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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
                    What are 'Class of Shares', and how do

                    I choose the right one?
                </div>
                <div>
                    'Class of Shares' refers to the category of stock you are allocating. 'Ordinary' shares are common
                    stock with no special rights or restrictions. This is the most common and most straight forward to
                    begin with.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    What if the ownership percentages among founders don’t add up to 100%?
                </div>
                <div>
                    The total ownership must equal 100%. If your allocations don’t sum up to 100%, you'll need to adjust
                    the percentages until they do. The form will indicate any discrepancies with a visual cue.
                </div>
            </section>

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

// const form = reactive({
//     classOf
// })


function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

</script>
<style lang="css" scoped>
td,
th {
    background: transparent !important;
}

th {
    font-weight: bold;
}
</style>
