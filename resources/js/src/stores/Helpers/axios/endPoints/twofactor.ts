import { $instance, $instanceForm } from '../instances'

export default {

    checkAccountStatus() {
        return $instance.get(`user/check/status`)
    },

    activateTwoFactor() {
        return $instance.get(`user/activate/2fa`)
    },

    enableTwoFactor(formData: FormData) {
        return $instanceForm.post(`user/enable/2fa`, formData)
    },

    disableTwoFactor(formData: FormData) {
        return $instanceForm.post(`user/disable/2fa`, formData)
    },

    verifyTwoFactor(formData: FormData) {
        return $instanceForm.post(`user/verify/2fa`, formData)
    },
}