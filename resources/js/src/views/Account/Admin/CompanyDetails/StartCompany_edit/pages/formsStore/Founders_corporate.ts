// @ts-nochecks
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
// @ts-ignore
import * as yup from 'yup';


export const foundersCorporateForm = defineStore('foundersCorporate', () => {

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;
        return chn_company_name.value ? pattern.test(value) : true
    }

    const chineseChecks = (value: any) => {
        var pattern = /[\u4e00-\u9fa5]/;
        return !pattern.test(value)
    }

    const rules: any = {
        company_name: yup.string().test('chineseChecks', 'Please input only English characters', chineseChecks),
        chn_company_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        date_incorporated: yup.string().required('Date incorporated is required'),
        registeration_no: yup.string().required('Company registration number is required'),
        country_registered: yup.string().required('Company date of registration is required'),
        business_nature_id: yup.string().required('Business nature Id is required'),
        flat: yup.string().required(' Flat is required'),
        building: yup.string().nullable(),
        street: yup.string().required(' Street is required'),
        state: yup.string().required('State/City is required'),
        country: yup.string().required('country is required'),
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is requied'),
        phone: yup.string().required('phone number is required'),
        email: yup.string().email().required('Email is required'),
        confirm_email: yup.string().email(),

        // is_founder: yup.string(),
        // city: yup.string().required('city is required'),
        // postal_code: yup.string(),

    };


    const { errors, handleSubmit, defineField, setFieldValue, resetForm, validateField, resetField } = useForm({
        validationSchema: yup.object(rules),
        // initialValues: {
        //     date_incorporated: new Date('2006-5-4'),
        //     entity_type_id: '2',
        //     country: '',
        //     country_registered: '',
        //     is_founder: false,
        //     chn_company_name: ''
        // },
    });

    function validateVueSelectOnBlur(str: string) {
        validateField(str)
    }

    const [entity_type_id] = defineField('entity_type_id');
    const [company_name, company_nameAttr] = defineField('company_name');
    const [chn_company_name, chn_company_nameAttr] = defineField('chn_company_name');
    const [date_incorporated, date_incorporatedAttr] = defineField('date_incorporated');
    const [flat, flatAttr] = defineField('flat');
    const [building, buildingAttr] = defineField('building');
    const [street, streetAttr] = defineField('street');
    const [state, stateAttr] = defineField('state');
    // const [city] = defineField('city');
    const [country, countryAttr] = defineField('country');

    // const [postal_code] = defineField('postal_code');
    const [registeration_no, registeration_noAttr] = defineField('registeration_no');
    const [is_founder, is_founderAttr] = defineField('is_founder');
    const [country_registered, country_registeredAttr] = defineField('country_registered');

    const [business_nature_id, business_nature_idAttr] = defineField('business_nature_id');
    const [phone, phoneAttr] = defineField('phone');
    const [email, emailAttr] = defineField('email');
    const [confirm_email, confirm_emailAttr] = defineField('confirm_email');
    const [first_name, first_nameAttr] = defineField('first_name');
    const [last_name, last_nameAttr] = defineField('last_name');


    const isSaving = false

    // localStorage
    const company_name_storage: any = useStorage('squareOne-fCop-company_name', '');
    const chn_company_name_storage: any = useStorage('squareOne-fCop-chn_company_name', '');
    const flat_storage: any = useStorage('squareOne-fCop-flat', '');
    const building_storage: any = useStorage('squareOne-fCop-building', '');
    const street_storage: any = useStorage('squareOne-fCop-street', '');
    const state_storage: any = useStorage('squareOne-fCop-state', '');

    const country_storage: any = useStorage('squareOne-fCop-country', '');
    // const postal_code_storage:any = useStorage('squareOne-fCop-postal_code', '');
    const registeration_no_storage: any = useStorage('squareOne-fCop-registeration_no', '');
    const country_registered_storage: any = useStorage('squareOne-fCop-country_registered', '');

    const phone_storage: any = useStorage('squareOne-fCop-phone', '');
    const email_storage: any = useStorage('squareOne-fCop-email', '');
    const confirm_email_storage: any = useStorage('squareOne-fCop-confirm_email', '');
    const first_name_storage: any = useStorage('squareOne-fCop-first_name', '');
    const last_name_storage: any = useStorage('squareOne-fCop-last_name', '');

    function saveToLocalStorage() {
        // if (company_name.value)
        company_name_storage.value = company_name.value
        // if (chn_company_name.value) 
        chn_company_name_storage.value = chn_company_name.value
        // if (registeration_no.value) 
        registeration_no_storage.value = registeration_no.value
        // if (country_registered.value) 
        country_registered_storage.value = country_registered.value


        // if (flat.value) 
        flat_storage.value = flat.value
        // if (building.value)
        building_storage.value = building.value
        // if (street.value) 
        street_storage.value = street.value
        // if (state.value) 
        state_storage.value = state.value
        // if (country.value) country_storage.value = country.value
        // if (postal_code.value) postal_code_storage.value = postal_code.value

        // if (phone.value)
        phone_storage.value = phone.value
        // if (email.value)
        email_storage.value = email.value
        // if (confirm_email.value)
        confirm_email_storage.value = confirm_email.value
        // if (first_name.value)
        first_name_storage.value = first_name.value
        // if (last_name.value)
        last_name_storage.value = last_name.value
    }

    function updateFields(companyInProgress: any) {
        if (flat_storage.value)
            flat.value = flat_storage.value
        if (building_storage.value)
            building.value = building_storage.value
        if (street_storage.value)
            street.value = street_storage.value
        if (state_storage.value)
            state.value = state_storage.value
        if (country_storage.value)
            country.value = country_storage.value
        // if (postal_code_storage.value)
        //     postal_code.value = postal_code_storage.value

        if (phone_storage.value)
            phone.value = phone_storage.value
        if (email_storage.value)
            email.value = email_storage.value
        if (confirm_email_storage.value)
            confirm_email.value = confirm_email_storage.value
        if (first_name_storage.value)
            first_name.value = first_name_storage.value
        if (last_name_storage.value)
            last_name.value = last_name_storage.value
        if (company_name_storage.value)
            company_name.value = company_name_storage.value
        if (chn_company_name_storage.value)
            chn_company_name.value = chn_company_name_storage.value
        if (registeration_no_storage.value)
            registeration_no.value = registeration_no_storage.value
        if (country_registered_storage.value)
            country_registered.value = country_registered_storage.value
    }


    function clearLocalStorage() {
        company_name_storage.value = ''
        chn_company_name_storage.value = ''
        flat_storage.value = ''
        building_storage.value = ''
        street_storage.value = ''
        state_storage.value = ''

        country_storage.value = ''
        // postal_code_storage.value = ''
        registeration_no_storage.value = ''
        country_registered_storage.value = ''

        phone_storage.value = ''
        email_storage.value = ''
        confirm_email_storage.value = ''
        first_name_storage.value = ''
        last_name_storage.value = ''
    }


    return {
        entity_type_id,
        company_name, company_nameAttr,
        chn_company_name, chn_company_nameAttr,
        date_incorporated, date_incorporatedAttr,
        street, streetAttr,
        building, buildingAttr,
        flat, flatAttr,
        state, stateAttr,
        // city,
        country, countryAttr,
        // postal_code,
        registeration_no, registeration_noAttr,
        is_founder, is_founderAttr,
        country_registered, country_registeredAttr,
        business_nature_id, business_nature_idAttr,
        phone, phoneAttr,
        email, emailAttr,
        confirm_email, confirm_emailAttr,
        first_name, first_nameAttr,
        last_name, last_nameAttr,


        isSaving,

        errors,
        handleSubmit,
        setFieldValue,


        updateFields,
        saveToLocalStorage,
        resetForm,
        clearLocalStorage,
        validateVueSelectOnBlur,
        resetField,
    }
})
