import { ref } from 'vue'
import { defineStore } from 'pinia'

export const foundersIdividualForm = defineStore('foundersIdividual', () => {

    const entity_type_id = ref('1')

    const address = ref('')
    const street_no = ref('')
    const city = ref('')
    const state = ref('')
    const postal_code = ref('')
    const country = ref('Hong Kong')

    const address2 = ref('')
    const street_no2 = ref('')
    const city2 = ref('')
    const state2 = ref('')
    const postal_code2 = ref('')
    const country2 = ref('Hong Kong')

    const first_name = ref('')
    const last_name = ref('')
    const chn_first_name = ref('')
    const chn_last_name = ref('')
    const dob = ref('')
    const nationality = ref('Hong Kong')
    const phone = ref('')
    const email = ref('')
    const confirm_email = ref('')
    const occupation = ref('')
    const is_founder = ref(false)
    const identity_type_id = ref('1')
    const identity_no = ref('')
    const passport_no = ref('')
    const issuing_country = ref('Hong Kong')
    const isSaving = ref(false)

    const correspondingAddressIsSame = ref(false)
    const hasChineseName = ref(false)


    return {
        entity_type_id,
        address,
        street_no,
        city,
        state,
        postal_code,
        country,
        address2,
        street_no2,
        city2,
        state2,
        postal_code2,
        country2,
        first_name,
        last_name,
        chn_first_name,
        chn_last_name,
        dob,
        nationality,
        phone,
        email,
        confirm_email,
        occupation,
        is_founder,
        identity_type_id,
        identity_no,
        passport_no,
        issuing_country,
        isSaving,
        correspondingAddressIsSame,
        hasChineseName
    }
})
