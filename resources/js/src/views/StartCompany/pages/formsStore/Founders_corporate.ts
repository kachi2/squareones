// @ts-nocheck
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
// @ts-ignore
import * as yup from 'yup';


export const foundersCorporateForm = defineStore('foundersCorporate', () => {

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;
        return pattern.test(value)
    }



    const rules = {
        chn_company_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),

        company_name: yup.string(),
        flat: yup.string().required(' Flat is required'),
        building: yup.string().required(' building is required '),
        street: yup.string().required(' Street is required'),
        date_incorporated: yup.string().required('Date incorporated is required'),
        is_founder: yup.string(),
        country_registered: yup.string().required('Company date of registration is required'),
        state: yup.string().required('State/City is required'),
        // city: yup.string().required('city is required'),
        country: yup.string().required('country is required'),
        postal_code: yup.string(),
        registeration_no: yup.string().required('Company registration number is required '),

        business_nature_id: yup.string().required('Business nature Id is required'),
        phone: yup.string().required('phone number is required'),
        email: yup.string().email().required('Email is required'),
        confirm_email: yup.string().email(),
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is requied'),
    };


    const { errors, handleSubmit, defineField, setFieldValue, resetForm } = useForm({
        validationSchema: yup.object(rules),
        initialValues: {
            date_incorporated: new Date(),
            entity_type_id: '2',
            country: 'Hong Kong',
            country_registered: 'Hong Kong',
            is_founder: false
        },
    });

    const [entity_type_id] = defineField('entity_type_id');
    const [company_name] = defineField('company_name');
    const [chn_company_name] = defineField('chn_company_name');
    const [date_incorporated] = defineField('date_incorporated');
    const [flat] = defineField('flat');
    const [building] = defineField('building');
    const [street] = defineField('street');
    const [state] = defineField('state');
    // const [city] = defineField('city');
    const [country] = defineField('country');

    const [postal_code] = defineField('postal_code');
    const [registeration_no] = defineField('registeration_no');
    const [is_founder] = defineField('is_founder');
    const [country_registered] = defineField('country_registered');

    const [business_nature_id] = defineField('business_nature_id');
    const [phone] = defineField('phone');
    const [email, emailAttrs] = defineField('email');
    const [confirm_email] = defineField('confirm_email');
    const [first_name] = defineField('first_name');
    const [last_name] = defineField('last_name');
    const isSaving = false

    // localStorage
    const company_name_storage = useStorage('squareOne-fCop-company_name', '');
    const chn_company_name_storage = useStorage('squareOne-fCop-chn_company_name', '');
    const flat_storage = useStorage('squareOne-fCop-flat', '');
    const building_storage = useStorage('squareOne-fCop-building', '');
    const street_storage = useStorage('squareOne-fCop-street', '');
    const state_storage = useStorage('squareOne-fCop-state', '');

    const country_storage = useStorage('squareOne-fCop-country', '');
    const postal_code_storage = useStorage('squareOne-fCop-postal_code', '');
    const registeration_no_storage = useStorage('squareOne-fCop-registeration_no', '');
    const country_registered_storage = useStorage('squareOne-fCop-country_registered', '');

    const phone_storage = useStorage('squareOne-fCop-phone', '');
    const email_storage = useStorage('squareOne-fCop-email', '');
    const confirm_email_storage = useStorage('squareOne-fCop-confirm_email', '');
    const first_name_storage = useStorage('squareOne-fCop-first_name', '');
    const last_name_storage = useStorage('squareOne-fCop-last_name', '');

    function clearLocalStorage(){
        company_name_storage.value = '';
        chn_company_name_storage.value = '';
        flat_storage.value = '';
        building_storage.value = '';
        street_storage.value = '';
        country_storage.value  = '';
        postal_code_storage.value = '';
        registeration_no_storage.value = '';
        phone_storage.value = '';
        email_storage.value = '';
        confirm_email_storage.value = '';
        first_name_storage.value = '';
        last_name_storage.value = '';
    }

    function saveToLocalStorage() {
        if (company_name.value) company_name_storage.value = company_name.value
        if (chn_company_name.value) chn_company_name_storage.value = chn_company_name.value
        if (registeration_no.value) registeration_no_storage.value = registeration_no.value
        if (country_registered.value) country_registered_storage.value = country_registered.value


        if (flat.value) flat_storage.value = flat.value
        if (building.value) building_storage.value = building.value
        if (street.value) street_storage.value = street.value
        if (state.value) state_storage.value = state.value
        if (country.value) country_storage.value = country.value
        if (postal_code.value) postal_code_storage.value = postal_code.value

        if (phone.value) phone_storage.value = phone.value
        if (email.value) email_storage.value = email.value
        if (confirm_email.value) confirm_email_storage.value = confirm_email.value
        if (first_name.value) first_name_storage.value = first_name.value
        if (last_name.value) last_name_storage.value = last_name.value
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
        if (company_name_storage.value.length > 1)
            company_name.value = company_name_storage.value
        if (chn_company_name_storage.value.length > 1)
            chn_company_name.value = chn_company_name_storage.value
        if (registeration_no_storage.value.length > 1)
            registeration_no.value = registeration_no_storage.value
        if (country_registered_storage.value.length > 1)
            country_registered.value = country_registered_storage.value
    }


    return {
        entity_type_id,
        company_name,
        chn_company_name,
        date_incorporated,
        street,
        building,
        flat,
        state,
        // city,
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
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        emailAttrs,

        updateFields,
        saveToLocalStorage,
        resetForm,
        clearLocalStorage
    }
})
