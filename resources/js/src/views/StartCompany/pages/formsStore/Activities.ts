import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
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


    // localStorage & updating fields..
    const description_storage = useStorage('squareOne-activity-description', '');
    const activity_level_storage = useStorage('squareOne-activity-activity_level', '');
    const activity_nature_storage = useStorage('squareOne-activity-activity_nature', '');
    const customer_location_operation_storage = useStorage('squareOne-activity-activity-location', '');
    const country_storage = useStorage('squareOne-activity-activity_nature-country', '');

    function saveToLocalStorage() {
        if (description.value) description_storage.value = description.value
        if (activity_level.value) activity_level_storage.value = activity_level.value
        if (activity_nature.value) activity_nature_storage.value = activity_nature.value
        if (customer_location_operation.value) customer_location_operation_storage.value = customer_location_operation.value
        if (country.value) country_storage.value = country.value
    }


    function updateFields(companyInProgress: any) {
        if (description_storage.value.length > 1)
            description.value = description_storage.value
        else if (companyInProgress?.activity?.description)
            description.value = companyInProgress.activity.description;

        if (activity_level_storage.value)
            activity_level.value = activity_level_storage.value
        else if (companyInProgress?.activity?.activity_level)
            activity_level.value = companyInProgress.activity.activity_level;

        if (activity_nature_storage.value)
            activity_nature.value = activity_nature_storage.value
        else if (companyInProgress?.activity?.activity_nature)
            activity_nature.value = companyInProgress.activity.activity_nature;

        if (customer_location_operation_storage.value) {
            try { customer_location_operation.value = customer_location_operation_storage.value.split(',') }
            catch (err) { }

        }
        else if (companyInProgress?.activity?.customer_location_operation) {
            const locations = companyInProgress?.activity?.customer_location_operation ?? ''
            customer_location_operation.value = locations !== '' ? locations.split(',') : ''
        }

        if (country_storage.value) {
            try { country.value = country_storage.value.split(','); }
            catch (err) { }
        }
        else if (companyInProgress?.activity?.country) {
            const locations = companyInProgress?.activity?.country ?? ''
            country.value = locations !== '' ? locations.split(',') : ''
        }

    }


    return {
        description,
        activity_level,
        activity_nature,
        customer_location_operation,
        country,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        updateFields,
        saveToLocalStorage
    }
})
