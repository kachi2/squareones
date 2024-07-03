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

    const { errors, handleSubmit, defineField, setFieldValue, validateField } = useForm({
        validationSchema: yup.object(rules),
    });

    function validateVueSelectOnBlur(str: string) {
        validateField(str)
    }

    const [income_expected_source, income_expected_sourceAttr] = defineField('income_expected_source');
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
        // if (income_expected_source.value) 
        income_expected_source_storage.value = income_expected_source.value
        // if (origin_funds.value) 
        origin_funds_storage.value = origin_funds.value
        // if (wealth_initial_source.value)
        wealth_initial_source_storage.value = wealth_initial_source.value
        // if (income_outgoing_source.value) 
        income_outgoing_source_storage.value = income_outgoing_source.value
    }

    function updateFields(companyInProgress: any) {

        // console.log(companyInProgress)
        if (income_expected_source_storage.value)
            income_expected_source.value = income_expected_source_storage.value
        else if (companyInProgress?.fund_source?.income_expected_source)
            income_expected_source.value = companyInProgress?.fund_source?.income_expected_source

        if (origin_funds_storage.value)
            origin_funds.value = origin_funds_storage.value
        else if (companyInProgress?.fund_source?.origin_funds)
            origin_funds.value = companyInProgress?.fund_source?.origin_funds

        if (wealth_initial_source_storage.value)
            wealth_initial_source.value = wealth_initial_source_storage.value
        else if (companyInProgress?.fund_source?.wealth_initial_source)
            wealth_initial_source.value = companyInProgress?.fund_source?.wealth_initial_source

        if (income_outgoing_source_storage.value)
            income_outgoing_source.value = income_outgoing_source_storage.value
        else if (companyInProgress?.fund_source?.income_outgoing_source)
            income_outgoing_source.value = companyInProgress?.fund_source?.income_outgoing_source
    }

    function clearLocalStorage() {
        income_expected_source_storage.value = '';
        origin_funds_storage.value = '';
        wealth_initial_source_storage.value = '';
        income_outgoing_source_storage.value = '';
    }

    return {
        income_expected_source, income_expected_sourceAttr,
        origin_funds,
        wealth_initial_source,
        income_outgoing_source,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,
        updateFields,

        saveToLocalStorage,
        clearLocalStorage,
        validateVueSelectOnBlur
    }
})
