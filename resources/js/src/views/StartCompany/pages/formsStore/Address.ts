import { ref } from 'vue'
import { defineStore } from 'pinia'


export const addressForm = defineStore('address', () => {

    const address = ref('')
    const street_no = ref('')
    const city = ref('')
    const state = ref('')
    const postal_code = ref('')
    const country = ref('')
    const isSaving = false

    return {
        address,
        street_no,
        city,
        state,
        postal_code,
        country,
        isSaving,
    }
})
