import { ref } from 'vue'
import { defineStore } from 'pinia'


export const descriptionForm = defineStore('description', () => {

    const description = ref('')
    const business_nature_id = ref('')
    const website = ref('')
    const isSaving = false

    return {
        description,
        business_nature_id,
        website,
        isSaving,
    }
})
