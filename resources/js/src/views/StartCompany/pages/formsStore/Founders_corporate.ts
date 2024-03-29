// @ts-nocheck
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';


export const foundersCorporateForm = defineStore('foundersCorporate', () => {

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF]+$/;
        return pattern.test(value)
    }

    const rules = {
        chn_company_name: yup.string().required('This field is required').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),

        company_name: yup.string().required('This field is required'),
        address: yup.string().required('This field is required'),
        street_no: yup.string().required('This field is required'),
        date_incorporated: yup.string().required('This field is required'),
        is_founder: yup.string().required('This field is required'),
        country_registered: yup.string().required('This field is required'),
        state: yup.string().required('This field is required'),
        city: yup.string().required('This field is required'),
        country: yup.string().required('This field is required'),
        postal_code: yup.string().required('This field is required'),
        registeration_no: yup.string().required('This field is required'),

        business_nature_id: yup.string().required('This field is required'),
        phone: yup.string().required('This field is required'),
        email: yup.string().required('This field is required'),
        confirm_email: yup.string().required('This field is required'),
        first_name: yup.string().required('This field is required'),
        last_name: yup.string().required('This field is required'),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
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
    const [address] = defineField('address');
    const [street_no] = defineField('street_no');
    const [state] = defineField('state');
    const [city] = defineField('city');
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
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        emailAttrs
    }
})
