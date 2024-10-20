import {ref } from 'vue';
import {defineStore} from 'pinia'

export const useFounderSignatureStore  = defineStore('FounderSignatureStore', () => {
    const founderName = ref<any>(null);
    const founderSignature =  ref<any>(null);
    const signatureDate =  ref<any>(null);
    const founderId =  ref<any>(null);
return {
    founderName,
    founderSignature,
    signatureDate,
    founderId
}

});