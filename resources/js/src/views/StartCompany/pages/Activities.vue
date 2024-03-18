<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Activities</div>
                <span>Detail your company's primary business operations below.</span>
            </section>

            <section>
                <div class="fw-bold">Describe your expected business activities</div>
                <div>Provide a brief but clear description of your anticipated business activities.
                    Be as specific as possible to ensure accurate representation in your business
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <textarea class="form-control" rows="5"></textarea>
                        <small class="float-end">No minimum character required</small>
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bold">Level of activity</div>
                <div>Select the volume and frequency of transactions your business expects to handle.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <select class="form-select">
                        </select>
                    </div>

                </div>
            </section>

            <section>
                <div class="fw-bold">Customer location and operation</div>
                <div>Indicate the primary countries where your company will actively conduct business or serve
                    customers.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <select class="form-select">
                        </select>
                    </div>

                </div>
            </section>

            <section>
                <div class="fw-bold">List of countries</div>
                <div>List all additional countries where your company will have business activities or customer
                    interactions.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <select class="form-select">
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
<style lang="css" scoped></style>



