import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';

export const addressForm = defineStore('address', () => {

    const rules = {
        address: yup.string().required(''),
        street_no: yup.string().required(''),
        city: yup.string().required(''),
        state: yup.string().required(''),
        postal_code: yup.string().required(''),
        country: yup.string().required(''),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
        initialValues: {
            address: '194-204 Johnston Road',
            street_no: 'Rooms 502-503, 5th Floor, Wanchai Commercial Centre',
            postal_code: '68891673',
            country: 'Hong Kong',
            state: 'Wanchai',
            city: 'Wanchai',
        },
    });

    const [address] = defineField('address');
    const [street_no] = defineField('street_no');
    const [city] = defineField('city');
    const [state] = defineField('state');
    const [postal_code] = defineField('postal_code');
    const [country] = defineField('country');
    const isSaving = false

    return {
        address,
        street_no,
        city,
        state,
        postal_code,
        country,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue
    }
})
