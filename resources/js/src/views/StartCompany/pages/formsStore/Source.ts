import { ref } from 'vue'
import { defineStore } from 'pinia'


export const sourceForm = defineStore('source', () => {

    const income_expected_source = ref('')
    const origin_funds = ref('')
    const wealth_initial_source = ref('')
    const income_outgoing_source = ref('')
    const isSaving = false

    return {
        income_expected_source,
        origin_funds,
        wealth_initial_source,
        income_outgoing_source,
        isSaving,
    }
})
