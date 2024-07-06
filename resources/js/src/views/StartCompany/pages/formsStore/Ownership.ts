import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'


export const ownershipForm = defineStore('ownership', () => {

    const share_type_id = ref('1')
    const no_of_share = ref('')
    const total_amount_paid = ref('')
    const currency = ref('')
    const isSaving = false


    const localStorage = reactive({
        share_type_id: useStorage('own-share_type_id_storage', ''),
        no_of_share: useStorage('own-no_of_share_storage', ''),
        total_amount_paid: useStorage('own-total_amount_paid_storage', ''),
        currency: useStorage('own-currency_storage', '')
    })

    function updateLocalStorage() {
        localStorage.share_type_id = share_type_id.value;
        localStorage.no_of_share = no_of_share.value;
        localStorage.total_amount_paid = total_amount_paid.value;
        localStorage.currency = currency.value
    }



    const shareHolders = ref<any>([])

    return {
        share_type_id,
        no_of_share,
        total_amount_paid,
        currency,
        isSaving,
        shareHolders,
        localStorage,
        updateLocalStorage
    }
})
