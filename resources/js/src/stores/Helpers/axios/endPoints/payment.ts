import { $instance } from '../instances'

export default {

    paymentIntent() {
        return $instance.get(`/payment/intent`,)
    },

    paymentConfirm(items: any) {
        return $instance.post(`/process/payment`, JSON.stringify(items))
    },

    ProcessKyc() {
        return $instance.get('/kyc/load');
    }


}