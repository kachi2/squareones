import { ref } from 'vue'
import { defineStore } from 'pinia'


export const ownershipForm = defineStore('ownership', () => {

    const share_type_id = ref('1')
    const no_of_share = ref('')
    const total_amount_paid = ref('')
    const currency = ref('')
    const isSaving = false


    const shareHolders = ref<any>([])

    return {
        share_type_id,
        no_of_share,
        total_amount_paid,
        currency,
        isSaving,
        shareHolders,
    }
})
