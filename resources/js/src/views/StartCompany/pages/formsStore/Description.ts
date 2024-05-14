import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
// @ts-ignore
import * as yup from 'yup';

export const descriptionForm = defineStore('description', () => {

    // const hasUppercase = (value: any) => !!/[A-Z]/.test(value);

    const rules = {
        // description: yup.string().required().test('hasUppercase', 'Description must not be less than 150 letters', hasUppercase),
        description: yup.string().min(150, 'Description must be at least 150 characters long').required(),
        website: yup.string(),
        business_nature_id: yup.string().required('Please select a nature of business'),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
    });

    const [description] = defineField('description');
    const [website] = defineField('website');
    const [business_nature_id] = defineField('business_nature_id');
    const isSaving = false

    // localStorage & updating fields..
    const description_storage = useStorage('squareOne-desc-desc', '');
    const website_storage = useStorage('squareOne-desc-website', '');
    const business_nature_id_storage = useStorage('squareOne-desc-bNature', '');

    function saveToLocalStorage() {
        if (description.value) description_storage.value = description.value
        if (website.value) website_storage.value = website.value
        if (business_nature_id.value) business_nature_id_storage.value = business_nature_id.value
    }

    function updateFields(companyInProgress: any) {
        if (description_storage.value.length > 1)
            description.value = description_storage.value
        else if (companyInProgress?.description)
            description.value = companyInProgress.description;

        if (business_nature_id_storage.value)
            business_nature_id.value = parseInt(business_nature_id_storage.value)
        else if (companyInProgress?.business_nature_id)
            business_nature_id.value = parseInt(companyInProgress.business_nature_id);

        if (website_storage.value.length > 1)
            website.value = website_storage.value
        else if (companyInProgress?.website)
            website.value = companyInProgress.website;
    }

    function clearLocalStorage() {
        description_storage.value = ''
        website_storage.value = ''
        business_nature_id_storage.value = ''
    }


    return {
        description,
        business_nature_id,
        website,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        updateFields,

        saveToLocalStorage,
        clearLocalStorage,
    }
})
