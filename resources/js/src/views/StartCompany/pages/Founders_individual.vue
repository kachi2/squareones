<template>
    <section>
        <div class="fw-bold fs-5">About you </div>
        <div class="fw-bolder">Your name in English </div>
        <span>Enter your first and last name as they appear on a government ID</span>
        <div class="row mt-1 g-2">
            <div class="col-12 ">
                <input type="text" class="form-control" placeholder="First Name..">
            </div>

            <div class="col-12 ">
                <input type="text" class="form-control" placeholder="Last Name..">
            </div>

            <div class="col-12 ">
                <div class="form-check ">
                    <input class="form-check-input" v-model="is_chinese_name" type="checkbox" id="chinese_name" />
                    <label class="form-check-label" for="chinese_name">Do you have a Chinese Name?</label>
                </div>
            </div>
        </div>
    </section>

    <section v-if="is_chinese_name">
        <div class="fw-bolder">Your name in Chinese </div>
        <span>Enter your first and last name as they appear on a government ID</span>
        <div class="row mt-1 g-2">
            <div class="col-12 ">
                <input type="text" class="form-control" placeholder="First Name..">
            </div>

            <div class="col-12 ">
                <input type="text" class="form-control" placeholder="Last Name..">
            </div>
        </div>
    </section>

    <section class="row g-2">
        <div class="col-md-6">
            <label class="form-label fw-bold">Date of Birth</label>
            <input class="form-control" type="text" placeholder="Date of Birth">
        </div>

        <div class="col-md-6">
            <label class="form-label fw-bold">Nationality</label>
            <select class="form-select" >
                <option> Hong Kong</option>
            </select>
        </div>
    </section>

    <section>
        <div class="fw-bolder">Your residential address </div>
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
    </section>
    <section>
        <div class="fw-bolder">Your corresponding address </div>
        <span>
            <div class="form-check ">
                <input class="form-check-input" type="checkbox" id="same_address" />
                <label class="form-check-label" for="same_address">Same as residential address</label>
            </div>
        </span>
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
        <div class="col-md-8">
            <label class=" fw-bolder">ID type</label>
            <select class="form-select">
                <option> Passport</option>
                <option> ID Card</option>
            </select>
        </div>
        <div class="col-md-8">
            <label class=" fw-bolder">HKID No.</label>
            <input type="text" class="form-control" placeholder="HKID No.">
        </div>
        <div class="col-md-8">
            <label class=" fw-bolder">Passport No.</label>
            <input type="text" class="form-control" placeholder="Passport No">
        </div>
        <div class="col-md-8">
            <label class=" fw-bolder">Passport issuing Country/Region</label>
            <select class="form-select" placeholder="Passport issuing Country/Region">
            </select>
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
        <div class="col-md-8">
            <label class="form-labe fw-bolder">Occupation/Employment</label>
            <select class="form-select">
            </select>
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
<script lang="ts" setup>
import { ref } from 'vue';
import { useStartCompanyStore } from '../StartCompany_store';

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
