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

    const { errors, handleSubmit, defineField, setFieldValue, resetForm, validateField } = useForm({
        validationSchema: yup.object(rules),
    });

    function validateVueSelectOnBlur(str: string) {
        validateField(str)
    }

    const [description, descriptiontAttr] = defineField('description');
    const [website, websiteAttr] = defineField('website');
    const [business_nature_id, business_nature_idAttr] = defineField('business_nature_id');
    const isSaving = false

    // localStorage & updating fields..
    const description_storage = useStorage('squareOne-desc-desc', '');
    const website_storage = useStorage('squareOne-desc-website', '');
    const business_nature_id_storage = useStorage('squareOne-desc-bNature', '');

    function saveToLocalStorage() {
        // if (description.value) 
        description_storage.value = description.value
        // if (website.value) 
        website_storage.value = website.value
        // if (business_nature_id.value)
        business_nature_id_storage.value = business_nature_id.value
    }

    function updateFields(companyInProgress: any) {
         if (companyInProgress?.description)
            description.value = companyInProgress.description;

       if (companyInProgress?.business_nature_id)
            business_nature_id.value = parseInt(companyInProgress.business_nature_id);

         if (companyInProgress?.website)
            website.value = companyInProgress.website;
    }

    function clearLocalStorage() {
        description_storage.value = ''
        website_storage.value = ''
        business_nature_id_storage.value = ''
    }


    return {
        description, descriptiontAttr,
        business_nature_id, business_nature_idAttr,
        website, websiteAttr,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        updateFields,

        saveToLocalStorage,
        clearLocalStorage,
        resetForm,
        validateVueSelectOnBlur
    }
})
