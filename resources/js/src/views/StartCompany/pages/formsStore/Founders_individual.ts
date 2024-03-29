// @ts-nocheck
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';

export const foundersIdividualForm = defineStore('foundersIdividual', () => {

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF]+$/;
        return pattern.test(value)
    }

    const rules = {
        chn_first_name: yup.string().required('This field is required').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        chn_last_name: yup.string().required('This field is required').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),

        address: yup.string().required('This field is required'),
        street_no: yup.string().required('This field is required'),
        state: yup.string().required('This field is required'),
        city: yup.string().required('This field is required'),
        country: yup.string().required('This field is required'),
        postal_code: yup.string().required('This field is required'),
        address2: yup.string().required('This field is required'),
        street_no2: yup.string().required('This field is required'),
        state2: yup.string().required('This field is required'),
        city2: yup.string().required('This field is required'),
        country2: yup.string().required('This field is required'),
        postal_code2: yup.string().required('This field is required'),

        phone: yup.string().required('This field is required'),
        email: yup.string().required('This field is required'),
        confirm_email: yup.string().required('This field is required'),
        first_name: yup.string().required('This field is required'),
        last_name: yup.string().required('This field is required'),
        nationality: yup.string().required('This field is required'),
        occupation: yup.string().required('This field is required'),
        identity_type_id: yup.string().required('This field is required'),
        identity_no: yup.string().required('This field is required'),
        passport_no: yup.string().required('This field is required'),
        dob: yup.string().required('This field is required'),
    };



    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),

        initialValues: {
            date_incorporated: new Date(),
            entity_type_id: '2',
            country: 'Hong Kong',
            country2: 'Hong Kong',
            issuing_country: 'Hong Kong',
            nationality: 'Hong Kong',
            identity_type_id: '1',
            is_founder: false
        },
    });


    const [entity_type_id] = defineField('entity_type_id');

    const [address] = defineField('address');
    const [street_no] = defineField('street_no');
    const [state] = defineField('state');
    const [city] = defineField('city');
    const [country] = defineField('country');
    const [postal_code] = defineField('postal_code');

    const [address2] = defineField('address2');
    const [street_no2] = defineField('street_no2');
    const [state2] = defineField('state2');
    const [city2] = defineField('city2');
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
        hasChineseName,

        errors,
        handleSubmit,
        setFieldValue,
        emailAttrs
    }
})
