import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';


export const activitiesForm = defineStore('activities', () => {

    const rules = {
        // description: yup.string().required().test('hasUppercase', 'Description must not be less than 150 letters', hasUppercase),
        description: yup.string().min(150, 'Description must be at least 150 characters long').required(),
        activity_level: yup.string().required('Please select an option'),
        activity_nature: yup.string().required('Please select an option'),
        // customer_location_operation: yup.string().required('Please select an option'),
        // country: yup.string().required('Required field'),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
    });

    const [description] = defineField('description');
    const [activity_level] = defineField('activity_level');
    const [activity_nature] = defineField('activity_nature');
    const [customer_location_operation] = defineField('customer_location_operation');
    const [country] = defineField('country');
    const isSaving = false

    return {
        description,
        activity_level,
        activity_nature,
        customer_location_operation,
        country,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue
    }
})
