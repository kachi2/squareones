<template>
    <StartCompany_template>
        <template #main>

            <div v-if="isKycCompleted" class="row justify-content-center">
                <div id="complycube-mount"></div>
                <div class="alert alert-success text-center" role="alert">
                    <i style="font-size: 2.56rem;" class="bi bi-check-circle"></i>
                    <h5> KYC Document Submitted</h5>
                    <small> Verification status will be updated once completed </small>
                </div>
                <button class="btn btn-primary w-50" @click="goToDash">
                    Proceed To Dashboard
                </button>

            </div>
            <div v-else class="row justify-content-center">
                <div id="complycube-mount"></div>
                <div class="alert alert-success text-center" role="alert">
                    <i style="font-size: 2.56rem;" class="bi bi-check-circle"></i>
                    <h5> Payment Successful </h5>
                    <p>We are receiving your request, please exercise patience while we setup your company</p>
                    <p> Please click the button below to complete your KYC, ensure the details are correct</p>
                </div>
                <button class="btn btn-primary" @click="startVerification">
                    Proceed to complete KYC
                </button>

            </div>


        </template>

        <template #info>

        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { reactive, onMounted, ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import { useRoute, useRouter } from "vue-router";
import api from '@/stores/Helpers/axios'

const startCompanyStore = useStartCompanyStore()
const route = useRoute()
const router = useRouter();

const isKycCompleted = ref(false)
const UserToken = ref('');

onMounted(async () => {
    await startCompanyStore.getCompanyInProgress()

    if (startCompanyStore.companyInProgress.users.kyc_status != null) {
        isKycCompleted.value = true
    }
    try {
        const items = route.query
        let param = await api.paymentConfirm(items);
        //  console.log(param)
    } catch (err) {
        // console.log(err)
    }

    UserToken.value = startCompanyStore.companyInProgress.users.user_token


})


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

function saveAndContinue() {
    startCompanyStore.switchStage('+')
}

function goToDash() {
    router.push({ path: '/user/dashboard' })
    //  startCompanyStore.currentStage = 2
}

function startVerification() {
    // console.log('comply');

    // @ts-ignore
    const complycube = ComplyCube.mount({
        containerId: 'complycube-mount',
        token: UserToken.value,
        onComplete: function (data: any) {
            setTimeout(() => {
                complycube.unmount()
                isKycCompleted.value = true
            }, 3000)

            // console.log("Capture complete", data)
        },
        onModalClose: function () {
            complycube.unmount()
        },
        onError: function (error: any) {
            if (error.type === 'token_expired') {
                api.ProcessKyc()
            } else {
                // Handle other errors
                // console.log(error.message);
            }
        }
    });
}

</script>
<style lang="css">
/* @import 'https://assets.complycube.com/web-sdk/v1/style.css'; */
@import '@/assets/complycube.css';
</style>
