import { $instance } from '../instances'

export default {

    paymentIntent() {
        return $instance.get(`/payment/intent`,)
    },

    paymentConfirm(items: any) {
        return $instance.post(`/process/payment`, JSON.stringify(items))
    },

    makeDefaultPament(intent: any) {
        return $instance.get(`/payment/make/default/${intent}`,)
    },

    ProcessKyc() {
        return $instance.get('/kyc/load');
    }


}