import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';

export const descriptionForm = defineStore('description', () => {

    // const hasUppercase = (value: any) => !!/[A-Z]/.test(value);

    const rules = {
        // description: yup.string().required().test('hasUppercase', 'Description must not be less than 150 letters', hasUppercase),
        description: yup.string().min(150, 'Description must be at least 150 characters long').required(),
        website: yup.string().required(''),
        business_nature_id: yup.string().required('Please select a nature of business'),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
    });

    const [description] = defineField('description');
    const [website] = defineField('website');
    const [business_nature_id] = defineField('business_nature_id');
    const isSaving = false

    return {
        description,
        business_nature_id,
        website,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue
    }
})
