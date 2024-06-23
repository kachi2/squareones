<template>
    <div class="bg-secondary-subtle ">
        <div class="container  ">
            <div class="everything-center overflow-hidden ">
                <div class="col-md-4 col-lg-4">
                    <div class="car p-3 rounded-3 shadow-sm bg-white">
                        <div class="card-header fw-bold bg-transparent">
                            <i class="bi bi-lock-fill"></i> Two Factor Authentication
                        </div>
                        <div class="card-body py-3">
                            <form @submit.prevent="verifyTwoFactor" class="row g-3">
                                <div class="col-12">
                                    <div class="form-label">Open the two factor authentication app on your device to
                                        view
                                        your
                                        authentication code and verify your identity</div>
                                    <input v-model="twoFactorObj.inputSecret" type="text" class="form-control exemption"
                                        placeholder="OTP Code..">
                                    <span v-if="twoFactorObj.codeInvalid" class="small text-danger">Invalid Code</span>
                                </div>
                                <div class="col-12">
                                    <button :disabled="twoFactorObj.isVerifying" type="submit"
                                        class="btn btn-primary w-100">Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import api from '@/stores/Helpers/axios'
import { reactive, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const twoFactorObj = reactive({
    // isActivated: false,
    isEnabled: false,
    inputSecret: '',
    isVerifying: false,
    codeInvalid: false
})


async function getTwoFactorStatus() {
    try {
        const resp = await api.checkAccountStatus()
        const data = resp.data.data
        // twoFactorObj.isActivated = data.google2fa_secret ? true : false
        twoFactorObj.isEnabled = data.enable_2fa_at ? true : false
        console.log(resp.data);
    } catch (error: any) {
        console.log(error);
    }
}


async function verifyTwoFactor() {
    try {
        twoFactorObj.isVerifying = true
        twoFactorObj.codeInvalid = false
        const formData = new FormData();
        formData.append('secret', twoFactorObj.inputSecret)
        const resp = await api.verifyTwoFactor(formData)

        twoFactorObj.isVerifying = false
        authStore.twofactorAttendedTo = '1'
        router.push({ name: 'Start' })

    } catch (error: any) {
        console.log(error);
        if (error.response) {
            twoFactorObj.codeInvalid = true
        }
        twoFactorObj.isVerifying = false
    }
}

</script>


<style lang="css" scoped></style>
