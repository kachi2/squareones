import { ref } from 'vue'
import { defineStore } from 'pinia'


export const foundersCorporateForm = defineStore('foundersCorporate', () => {

    const entity_type_id = ref('2')

    const company_name = ref('')
    const chn_company_name = ref('')
    const date_incorporated = ref(new Date())
    const address = ref('')
    const street_no = ref('')
    const state = ref('')
    const city = ref('')
    const country = ref('Hong Kong')

    const postal_code = ref('')
    const registeration_no = ref('')
    const is_founder = false
    const country_registered = ref('Hong Kong')

    const business_nature_id = ref('')
    const phone = ref('')
    const email = ref('')
    const confirm_email = ref('')
    const first_name = ref('')
    const last_name = ref('')
    const isSaving = ref(false)


    return {
        entity_type_id,
        company_name,
        chn_company_name,
        date_incorporated,
        address,
        street_no,
        state,
        city,
        country,
        postal_code,
        registeration_no,
        is_founder,
        country_registered,
        business_nature_id,
        phone,
        email,
        confirm_email,
        first_name,
        last_name,
        isSaving
    }
})
