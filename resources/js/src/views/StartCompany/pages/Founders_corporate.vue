<template>
    <div>
        <section>
            <div class="fw-bold fs-5">About your Company </div>
            <div class="fw-bolder">Your company name</div>
            <span>Enter your legal company name</span>
            <div class="row mt-1 g-2">
                <div class="col-12 ">
                    <input type="text" class="form-control" placeholder="English Name..">
                </div>

                <div class="col-12 ">
                    <input type="text" class="form-control" placeholder="Chinese Name..">
                </div>
            </div>
        </section>


        <section class="row g-2">
            <div class="col-md-6">
                <label class="form-label fw-bold">Date of incorporation </label>
                <input class="form-control" type="text" placeholder="Date of incorporation">
            </div>

            <div class="col-md-6">
                <label class="form-label fw-bold">Company registration number</label>
                <input class="form-control" type="text" placeholder="registration no">
            </div>
            <div class="col-12">
                <label class="form-label fw-bold">Business nature</label>
                <select class="form-select">
                    <option>Business nature</option>
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

        <section class="row g-2">
            <div class="col-md-10">
                <label class=" fw-bolder">Authorised Person</label>
                <div class="row g-2">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="first name..">
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="first name..">
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <label class=" fw-bolder">Phone number</label>
                <input type="text" class="form-control" placeholder="phone number">
            </div>
            <div class="col-md-8">
                <label class=" fw-bolder">Email</label>
                <input type="text" class="form-control" placeholder="email">
            </div>
            <div class="col-md-8">
                <label class=" fw-bolder">Confirm email</label>
                <input type="text" class="form-control" placeholder="confirm email">
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
    </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';

const founderType = ref<'individual' | 'corporate'>('individual')

function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

const startCompanyStore = useStartCompanyStore()

const is_chinese_name = ref(null)
</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
