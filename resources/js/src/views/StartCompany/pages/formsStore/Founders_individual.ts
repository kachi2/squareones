// @ts-nocheck
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
// @ts-ignore
import * as yup from 'yup';

export const foundersIdividualForm = defineStore('foundersIdividual', () => {

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF]+$/;
        return pattern.test(value)
    }


    const rules = {
        chn_first_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        chn_last_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),

        flat: yup.string().required('Flat is required'),
        building: yup.string().required('Building is required'),
        street: yup.string().required('Street is required'),
        state: yup.string().required('State is required'),
        city: yup.string(),
        country: yup.string().required('Country is required'),
        postal_code: yup.string(),
        flat2: yup.string().required('Flat is required'),
        building2: yup.string().required('Building is required'),
        street2: yup.string().required('Street is required'),
        state2: yup.string().required('State is required'),
        city2: yup.string(),
        country2: yup.string().required('Country is required'),
        postal_code2: yup.string(),

        phone: yup.string().required('Phone Number is required'),
        email: yup.string().email().required('Email is required'),
        confirm_email: yup.string().required('Email is required'),
        first_name: yup.string().required('First Name is required'),
        last_name: yup.string().required('Last Name is required'),
        nationality: yup.string(),
        occupation: yup.string().required('Occupation is required'),
        identity_type_id: yup.string(),
        identity_no: yup.string(),
        passport_no: yup.string(),
        dob: yup.string().required(''),
    };

    // Get the current date
    const currentDate = new Date();
    // Add 18 years to the current date
    const futureDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),

        initialValues: {
            date_incorporated: new Date(),
            entity_type_id: '1',
            country: 'Hong Kong',
            country2: 'Hong Kong',
            issuing_country: 'Hong Kong',
            nationality: 'Hong Kong',
            identity_type_id: '1',
            is_founder: false,
            dob: futureDate
        },
    });


    const [entity_type_id] = defineField('entity_type_id');

    const [flat] = defineField('flat');
    const [building] = defineField('building');
    const [street] = defineField('street');
    const [state] = defineField('state');
    // const [city] = defineField('city');
    const [country] = defineField('country');
    const [postal_code] = defineField('postal_code');

    const [flat2] = defineField('flat2');
    const [building2] = defineField('building2');
    const [street2] = defineField('street2');
    const [state2] = defineField('state2');
    // const [city2] = defineField('city2');
    const [country2] = defineField('country2');
    const [postal_code2] = defineField('postal_code2');

    const [issuing_country] = defineField('registeration_no');
    const [is_founder] = defineField('is_founder');

    const [phone] = defineField('phone');
    const [email, emailAttrs] = defineField('email');
    const [confirm_email] = defineField('confirm_email');
    const [first_name] = defineField('first_name');
    const [last_name] = defineField('last_name');
    const [chn_first_name] = defineField('chn_first_name');
    const [chn_last_name] = defineField('chn_last_name');
    const [nationality] = defineField('nationality');

    const [occupation] = defineField('occupation');
    const [identity_type_id] = defineField('identity_type_id');
    const [identity_no] = defineField('identity_no');
    const [passport_no] = defineField('passport_no');
    const [dob] = defineField('dob');

    const isSaving = false

    const correspondingAddressIsSame = ref(false)
    const hasChineseName = ref(false)


    // localStorage
    const flat_storage = useStorage('squareOne-fInd-flat', '');
    const building_storage = useStorage('squareOne-fInd-building', '');
    const street_storage = useStorage('squareOne-fInd-street', '');
    const state_storage = useStorage('squareOne-fInd-state', '');
    const country_storage = useStorage('squareOne-fInd-country', '');
    const postal_code_storage = useStorage('squareOne-fInd-postal_code', '');

    const flat2_storage = useStorage('squareOne-fInd-flat2', '');
    const building2_storage = useStorage('squareOne-fInd-building2', '');
    const street2_storage = useStorage('squareOne-fInd-street2', '');
    const state2_storage = useStorage('squareOne-fInd-state2', '');
    const country2_storage = useStorage('squareOne-fInd-country2', '');
    const postal_code2_storage = useStorage('squareOne-fInd-postal_code2', '');

    const issuing_country_storage = useStorage('squareOne-fInd-issuing_country', '');
    const phone_storage = useStorage('squareOne-fInd-phone', '');
    const email_storage = useStorage('squareOne-fInd-email', '');
    const confirm_email_storage = useStorage('squareOne-fInd-confirm_email', '');
    const first_name_storage = useStorage('squareOne-fInd-first_name', '');
    const last_name_storage = useStorage('squareOne-fInd-last_name', '');
    const chn_first_name_storage = useStorage('squareOne-fInd-chn_first_name', '');
    const chn_last_name_storage = useStorage('squareOne-fInd-chn_last_name', '');

    const nationality_storage = useStorage('squareOne-fInd-nationality', '');
    const occupation_storage = useStorage('squareOne-fInd-occupation', '');
    const identity_no_storage = useStorage('squareOne-fInd-identity_no', '');
    const passport_no_storage = useStorage('squareOne-fInd-passport_no', '');


    function saveToLocalStorage() {
        if (flat.value) flat_storage.value = flat.value
        if (building.value) building_storage.value = building.value
        if (street.value) street_storage.value = street.value
        if (state.value) state_storage.value = state.value
        if (country.value) country_storage.value = country.value
        if (postal_code.value) postal_code_storage.value = postal_code.value

        if (flat2.value) flat2_storage.value = flat2.value
        if (building2.value) building2_storage.value = building2.value
        if (street2.value) street2_storage.value = street2.value
        if (state2.value) state2_storage.value = state2.value
        if (country2.value) country2_storage.value = country2.value
        if (postal_code2.value) postal_code2_storage.value = postal_code2.value


        if (issuing_country.value) issuing_country_storage.value = issuing_country.value
        if (phone.value) phone_storage.value = phone.value
        if (email.value) email_storage.value = email.value
        if (confirm_email.value) confirm_email_storage.value = confirm_email.value
        if (first_name.value) first_name_storage.value = first_name.value
        if (last_name.value) last_name_storage.value = last_name.value
        if (chn_first_name.value) chn_first_name_storage.value = chn_first_name.value
        if (chn_last_name.value) chn_last_name_storage.value = chn_last_name.value
        if (nationality.value) nationality_storage.value = nationality.value
        if (occupation.value) occupation_storage.value = occupation.value
        if (identity_no.value) identity_no_storage.value = identity_no.value
        if (passport_no.value) passport_no_storage.value = passport_no.value
    }


    function updateFields(companyInProgress: any) {
        if (flat_storage.value.length > 1)
            flat.value = flat_storage.value
        if (building_storage.value.length > 1)
            building.value = building_storage.value
        if (street_storage.value.length > 1)
            street.value = street_storage.value
        if (state_storage.value.length > 1)
            state.value = state_storage.value
        if (country_storage.value.length > 1)
            country.value = country_storage.value
        if (postal_code_storage.value.length > 1)
            postal_code.value = postal_code_storage.value
        if (flat2_storage.value.length > 1)
            flat2.value = flat2_storage.value
        if (building2_storage.value.length > 1)
            building2.value = building2_storage.value
        if (street2_storage.value.length > 1)
            street2.value = street2_storage.value
        if (state2_storage.value.length > 1)
            state2.value = state2_storage.value
        if (country2_storage.value.length > 1)
            country2.value = country2_storage.value
        if (postal_code2_storage.value.length > 1)
            postal_code2.value = postal_code2_storage.value
        if (issuing_country_storage.value)
            issuing_country.value = issuing_country_storage.value
        if (phone_storage.value.length > 1)
            phone.value = phone_storage.value
        if (email_storage.value.length > 1)
            email.value = email_storage.value
        if (confirm_email_storage.value.length > 1)
            confirm_email.value = confirm_email_storage.value
        if (first_name_storage.value.length > 1)
            first_name.value = first_name_storage.value
        if (last_name_storage.value.length > 1)
            last_name.value = last_name_storage.value
        if (chn_first_name_storage.value.length > 1)
            chn_first_name.value = chn_first_name_storage.value
        if (chn_last_name_storage.value.length > 1)
            chn_last_name.value = chn_last_name_storage.value
        if (nationality_storage.value.length > 1)
            nationality.value = nationality_storage.value

        if (occupation_storage.value.length > 1)
            occupation.value = occupation_storage.value
        if (identity_no_storage.value.length > 1)
            identity_no.value = identity_no_storage.value
        if (passport_no_storage.value.length > 1)
            passport_no.value = passport_no_storage.value
    }


    return {
        entity_type_id,
        flat,
        building,
        street,
        // city,
        state,
        postal_code,
        country,
        flat2,
        building2,
        street2,
        // city2,
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
        hasChineseName,

        errors,
        handleSubmit,
        setFieldValue,
        emailAttrs,

        updateFields,
        saveToLocalStorage
    }
})
