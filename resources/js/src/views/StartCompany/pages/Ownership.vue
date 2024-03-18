<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Ownership</div>
            </section>

            <section>
                <div class="row g-1 mt-1">
                    <div class="col-md-6 col-lg-3">
                        <label class="form-label fw-bold small">Class of shares</label>
                        <div class="col-md-12">
                            <select class="form-select"> </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <label class="form-label fw-bold small">Total no of shares</label>
                        <div class="col-md-12">
                            <input class="form-control" type="text">
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <label class="form-label fw-bold small">Currency</label>
                        <div class="col-md-12">
                            <select class="form-select"> </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <label class="form-label fw-bold small">Total amount paid-off</label>
                        <div class="col-md-12">
                            <input class="form-control" type="text">
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


function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

const startCompanyStore = useStartCompanyStore()
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
