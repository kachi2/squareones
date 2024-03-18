<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Name</div>
                <span>Enter your preferred company names in order of priority.</span>
            </section>

            <section>
                <div class="fw-bold">Primary Choice</div>
                <div>This is your most preferred company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bolder">Secondary Choice</div>
                <div>These are alternative names you would consider should your primary choice be unavailable. List
                    them in descending order of preference.</div>
                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                </div>

            </section>

            <section v-if="isThird">
                <div class="fw-bold">Third Choice</div>
                <div>This is your third choice company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                </div>
            </section>

            <section v-if="isForth">
                <div class="fw-bold">Fourth Choice</div>
                <div>This is your fourth company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                </div>
            </section>

            <section v-if="isFifth">
                <div class="fw-bold">Fifth Choice</div>
                <div>This is your fifth company name. Ensure it is the legal name intended for
                    registration.
                </div>
                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Dropdown</option>
                        </select>
                    </div>
                </div>
            </section>

            <div>
                <button v-if="isThird || isForth || isFifth" @click="removeForm" class="btn btn-outline-danger me-3">
                    <i class="bi bi-x-circle"></i> Remove
                </button>
                <button :disabled="isThird && isForth && isFifth" @click="addForm" class="btn btn-outline-secondary">
                    <i class="bi bi-plus-circle"></i> Add another name
                </button>
            </div>

            <div class="movement-buttons my-5">
                <button class="btn btn-outline-dark me-3">
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
                    What are the restrictions on naming my company?
                </div>
                <div>
                    Your company name should be unique and not be too similar to any existing company registered
                    in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability
                    and should not contain restricted terms or imply government affiliation without permission.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    Can I include both English and Chinese in my company name?
                </div>
                <div>

                    Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a
                    direct translation of the English name and only Traditional Chinese characters are accepted by the
                    Hong
                    Kong Companies Registry.
                </div>
            </section>
            <section>
                <div class="fw-bold">
                    What should I do if my preferred company name is already taken?
                </div>
                <div>
                    It's advisable to have alternative names ready. You can prioritize your preferred names when filling
                    out this form, and we will register in order of preference. If all listed names are taken, you will
                    be contacted to provide additional names.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';

const isThird = ref(false)
const isForth = ref(false)
const isFifth = ref(false)

function addForm() {
    const fields = [isThird, isForth, isFifth];

    for (const field of fields) {
        if (!field.value) {
            field.value = true;
            return;
        }
    }
}

function removeForm() {
    const fields = [isFifth, isForth, isThird];

    for (const field of fields) {
        if (field.value) {
            field.value = false;
            return;
        }
    }
}

// function get

function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

const startCompanyStore = useStartCompanyStore()
</script>
<style lang="css" scoped></style>
