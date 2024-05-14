import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
// @ts-ignore
import * as yup from 'yup';


export const sourceForm = defineStore('source', () => {

    const rules = {
        income_expected_source: yup.string().required('Required field'),
        origin_funds: yup.string().required('Required field'),
        wealth_initial_source: yup.string().required('Required field'),
        income_outgoing_source: yup.string().required('Required field'),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
    });

    const [income_expected_source] = defineField('income_expected_source');
    const [origin_funds] = defineField('origin_funds');
    const [wealth_initial_source] = defineField('wealth_initial_source');
    const [income_outgoing_source] = defineField('income_outgoing_source');
    const isSaving = false

    // localStorage & updating fields..
    const income_expected_source_storage = useStorage('squareOne-source-income_expected_source', '');
    const origin_funds_storage = useStorage('squareOne-source-origin_funds', '');
    const wealth_initial_source_storage = useStorage('squareOne-source-wealth_initial_source', '');
    const income_outgoing_source_storage = useStorage('squareOne-source-income_outgoing_source', '');

    function saveToLocalStorage() {
        if (income_expected_source.value) income_expected_source_storage.value = income_expected_source.value
        if (origin_funds.value) origin_funds_storage.value = origin_funds.value
        if (wealth_initial_source.value) wealth_initial_source_storage.value = wealth_initial_source.value
        if (income_outgoing_source.value) income_outgoing_source_storage.value = income_outgoing_source.value
    }

    function updateFields(companyInProgress: any) {
        if (income_expected_source_storage.value)
            income_expected_source.value = income_expected_source_storage.value

        if (origin_funds_storage.value)
            origin_funds.value = origin_funds_storage.value

        if (wealth_initial_source_storage.value)
            wealth_initial_source.value = wealth_initial_source_storage.value

        if (income_outgoing_source_storage.value)
            income_outgoing_source.value = income_outgoing_source_storage.value
    }

    function clearLocalStorage() {
        income_expected_source_storage.value = '';
        origin_funds_storage.value = '';
        wealth_initial_source_storage.value = '';
        income_outgoing_source_storage.value = '';
    }

    return {
        income_expected_source,
        origin_funds,
        wealth_initial_source,
        income_outgoing_source,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        updateFields,

        saveToLocalStorage,
        clearLocalStorage
    }
})
