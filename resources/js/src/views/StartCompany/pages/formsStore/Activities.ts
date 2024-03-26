import { ref } from 'vue'
import { defineStore } from 'pinia'


export const activitiesForm = defineStore('activities', () => {

    const description = ref('')
    const activity_level = ref('')
    const activity_nature = ref('')
    const customer_location_operation = ref('')
    const country = ref('')
    const isSaving = false

    return {
        description,
        activity_level,
        activity_nature,
        customer_location_operation,
        country,
        isSaving,
    }
})
