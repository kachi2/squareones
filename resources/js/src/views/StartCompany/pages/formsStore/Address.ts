import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';

export const addressForm = defineStore('address', () => {

    const rules = {
        flat: yup.string().required(''),
        building: yup.string().required(''),
        street: yup.string().required(''),
        city: yup.string().required(''),
        state: yup.string().required(''),
        postal_code: yup.string().required(''),
        country: yup.string().required(''),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
        initialValues: {
            flat: 'Rooms 502-503, 5th Floor',
            building:  'Wanchai Commercial Centre',
            street: '194-204 Johnston Road',
            postal_code: '',
            country: 'Hong Kong',
            state: 'Wanchai',
            city: 'Wanchai',
        },
    });

    const [flat] = defineField('flat');
    const [building] = defineField('building')
    const [street] = defineField('street');
    const [city] = defineField('city');
    const [state] = defineField('state');
    const [postal_code] = defineField('postal_code');
    const [country] = defineField('country');
    const isSaving = false

    return {
        flat,
        street,
        city,
        state,
        postal_code,
        country,
        isSaving,
        building,
        errors,
        handleSubmit,
        setFieldValue
    }
})
