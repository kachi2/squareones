import { $instance } from '../instances'

export default {

    paymentIntent(items: any) {
        return $instance.post(`/payment/intent`, JSON.stringify(items))
    },

    paymentConfirm(items: any) {
        return $instance.post(`/process/payment`,  JSON.stringify(items))
    },

    ProcessKyc(){
        return $instance.get('/kyc/load');
    }


}