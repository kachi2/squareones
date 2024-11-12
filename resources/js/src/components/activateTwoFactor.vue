<template>
    <div>
        1. Scan this QR code with your Google Authenticator App. Alternatively, you can use the code:

        <code clas="fw-bold bg-danger">
            {{ twoFactorObj.google2fa_secret }}
        </code>
        <br />
        <span v-html="twoFactorObj.barcode"></span>
        <br />
        2. Enter the pin from Google Authenticator app:<br /><br />

        <form class="form-horizontal" @submit.prevent="verifyTwoFactor()">
            <div class="form-group mb-3">
                <label for="secret" class="control-label">Authenticator Code</label>
                <input v-model="twoFactorObj.inputSecret" id="secret" type="password" class="form-control col-md-4">
            </div>
            <span v-if="twoFactorObj.codeInvalid" class="small text-danger">Invalid Code</span>
            <button :disabled="twoFactorObj.isVerifying" type="submit" class="btn btn-primary w-100">
                Enable 2FA
            </button>
        </form>
    </div>
</template>
<script lang="ts" setup>
import api from '@/stores/Helpers/axios'
import { reactive, onMounted } from 'vue';

onMounted(() => {
    activateTwoFactor()
})

const emit = defineEmits(['verified'])

const twoFactorObj = reactive({
    barcode: '',
    google2fa_secret: '',
    inputSecret: '',
    isVerifying: false,
    isEnabled: false,
    isActivated: false,
    codeInvalid: false
})

async function getTwoFactorStatus() {
    try {
        const resp = await api.checkAccountStatus()
        const data = resp.data.data
        twoFactorObj.isActivated = data.google2fa_secret ? false : true
        twoFactorObj.isEnabled = data.enable_2fa_at ? false : true

    } catch (error: any) {
        //console.log(error);
    }
}

async function activateTwoFactor() {
    try {
        const resp = await api.activateTwoFactor()
        const data = resp.data[0]
        // console.log(data);

        twoFactorObj.barcode = data.barcode
        twoFactorObj.google2fa_secret = data.google2fa_secret

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
        twoFactorObj.inputSecret = ''
        // console.log(resp);
        emit('verified')

        twoFactorObj.isVerifying = false

    } catch (error: any) {
        console.log(error);
        if (error.response) {
            twoFactorObj.codeInvalid = true
            return;
        }
        twoFactorObj.isVerifying = false
    }
}

async function enableTwoFactor() {
    try {
        twoFactorObj.isVerifying = true
        const formData = new FormData();
        formData.append('secret', twoFactorObj.inputSecret)
        const resp = await api.enableTwoFactor(formData)
        // console.log(resp);

        twoFactorObj.isVerifying = false

    } catch (error: any) {
        console.log(error);
        twoFactorObj.isVerifying = false
    }
}
</script>


<style lang="css" scoped></style>
