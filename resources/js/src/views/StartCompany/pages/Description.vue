<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Description</div>
                <span>This information facilitates a faster review process by
                    our team and remains strictly confidential.</span>
            </section>

            <section>
                <div class="fw-bold">Describe your product or service</div>
                <div>Please briefly describe the product or service you are developing.
                    Aim for a concise overview in one or two sentences.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <textarea class="form-control" rows="5"></textarea>
                        <small class="float-end">Minimum of 150 character needed</small>
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bold">Nature of business</div>
                <div>Choose the primary category that best represents business nature of your company
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>

                </div>
            </section>

            <section>
                <div class="fw-bold">Website or social media</div>
                <div class="row g-2 mt-1">
                    <div class="col-md-8">
                        <input type="text" class="form-control">
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


function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

const startCompanyStore = useStartCompanyStore()
</script>
<style lang="css" scoped></style>
